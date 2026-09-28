"""Build site/data.js from the repo's markdown files.

Run from anywhere:
    python3 site/build_data.py              # regenerate site/data.js
    python3 site/build_data.py --dist DIR   # also write a publishable copy to DIR
Markdown stays the source of truth; this script only extracts and links.
"""

from __future__ import annotations

import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = Path(__file__).resolve().parent / "data.js"

# ---------------------------------------------------------------------------
# Relations that live only in prose; everything else is parsed.
# ---------------------------------------------------------------------------

CAT_PATTERNS = {
    "A": ["P2"],
    "B": ["P2", "P4", "P5"],
    "C": ["P1", "P4", "P3", "P5"],
    "D": ["P3", "P1", "P4", "P6"],
    "E": ["P4", "P3", "P6", "P1"],
    "F": ["P5", "P2", "P4", "P6"],
    "G": ["P6", "P4"],
}

LAB_META = {
    "01": {"dir": "lab-01-campus-qa", "cats": ["A"], "atoms": []},
    "02": {"dir": "lab-02-cafe-agent", "cats": ["B", "A"], "atoms": []},
    "03": {"dir": "lab-03-shop-video-ad", "cats": ["C", "F"], "atoms": ["V1", "M1", "M3", "M6"]},
    "04": {"dir": "lab-04-club-landing-page", "cats": ["D"], "atoms": ["C1", "C2"]},
    "05": {"dir": "lab-05-stress-relief-game", "cats": ["D", "C"], "atoms": ["C1", "V1", "M3", "C2"]},
    "06": {"dir": "lab-06-dorm-room-3d", "cats": ["E", "D"], "atoms": ["V6", "V7", "V8", "C1", "C2"]},
    "07": {"dir": "lab-07-weekly-opportunity-digest", "cats": ["F", "A"], "atoms": ["C3"]},
    "08": {"dir": "lab-08-campus-event-agent", "cats": ["G"], "atoms": ["C2"]},
    "09": {"dir": "lab-09-mascot-image-to-3d-game", "cats": ["C", "E", "D"],
           "atoms": ["V1", "V2", "V3", "V4", "V5", "V8", "C1", "C2"]},
    "10": {"dir": "lab-10-event-highlight-editing", "cats": ["C", "A"],
           "atoms": ["M4", "M5", "M6", "M7", "C2"]},
    "11": {"dir": "lab-11-blender-previz-to-ai-video", "cats": ["E", "C"],
           "atoms": ["V6", "V7", "V2", "M1", "M2", "M3", "M6"]},
    "CP": {"dir": "capstone-shop-launch-week", "cats": list("ABCDEFG"), "atoms": []},
}

LAB_PREREQ = {"09": ["05", "06"], "10": ["03"], "11": ["06", "09", "03"]}

DOMAIN_META = {
    "web": {"cats": ["D"], "labs": ["04"]},
    "video-advertising": {"cats": ["C", "F"], "labs": ["03"]},
    "3d-spatial": {"cats": ["E", "D"], "labs": ["06", "11"]},
    "game": {"cats": ["D", "C"], "labs": ["05"]},
    "customer-agent": {"cats": ["B", "A"], "labs": ["02"]},
    "business-automation": {"cats": ["F", "A"], "labs": ["07"]},
    "ai-asset-pipeline": {"cats": ["C", "E", "D"], "labs": ["09"]},
    "video-editing": {"cats": ["C", "A"], "labs": ["10"]},
}

ANALYSES = {
    "floor-plan-to-3d-house": {"labs": ["06"], "cats": ["E", "G"], "pats": ["P3", "P4", "P6"]},
    "higgsfield-game-studio": {"labs": ["05"], "cats": ["D", "C", "G"], "pats": ["P3", "P1", "P4"]},
    "image-to-3d-to-game-engine": {"labs": ["09"], "cats": ["C", "E", "D", "G"],
                                   "pats": ["P1", "P4", "P3", "P6"]},
    "blender-previz-to-ai-video": {"labs": ["11"], "cats": ["E", "C", "G"],
                                   "pats": ["P4", "P6", "P1", "P3"]},
    "transcript-driven-editing": {"labs": ["10"], "cats": ["C", "A", "G"], "pats": ["P2", "P3", "P4"]},
}

PATTERN_DIRS = {
    "P1": "generative-media",
    "P2": "knowledge-reasoning",
    "P3": "coding-agent",
    "P4": "tool-use-mcp",
    "P5": "workflow-agent",
    "P6": "computer-use",
}

# ---------------------------------------------------------------------------
# Markdown helpers
# ---------------------------------------------------------------------------

LINK_RE = re.compile(r"\[([^\]]+)\]\(([^)]+)\)")


def inline(md: str) -> str:
    """Convert inline markdown to HTML. Relative links become plain text."""
    placeholders: list[str] = []

    def keep(m: re.Match) -> str:
        text, url = m.group(1), m.group(2)
        if url.startswith("http"):
            placeholders.append(
                f'<a href="{html.escape(url)}" target="_blank" rel="noopener">{html.escape(text)}</a>'
            )
        else:
            placeholders.append(html.escape(text))
        return f"\x00{len(placeholders) - 1}\x00"

    s = LINK_RE.sub(keep, md)
    s = re.sub(r"<(https?://[^>]+)>", lambda m: m.group(1), s)
    s = html.escape(s)
    s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
    s = re.sub(r"`([^`]+)`", r"<code>\1</code>", s)
    return re.sub(r"\x00(\d+)\x00", lambda m: placeholders[int(m.group(1))], s)


def sections(text: str, level: int = 2) -> dict[str, str]:
    marker = "#" * level + " "
    out: dict[str, str] = {}
    current = None
    buf: list[str] = []
    for line in text.splitlines():
        if line.startswith(marker):
            if current is not None:
                out[current] = "\n".join(buf)
            current, buf = line[len(marker):].strip(), []
        elif current is not None:
            buf.append(line)
    if current is not None:
        out[current] = "\n".join(buf)
    return out


def find_section(secs: dict[str, str], prefix: str) -> str:
    for k, v in secs.items():
        if k.startswith(prefix) or prefix in k:
            return v
    return ""


def tables(text: str) -> list[tuple[list[str], list[list[str]]]]:
    result = []
    lines = text.splitlines()
    i = 0
    while i < len(lines):
        if lines[i].startswith("|") and i + 1 < len(lines) and re.match(r"^\|[\s:|-]+\|$", lines[i + 1]):
            head = split_row(lines[i])
            rows = []
            i += 2
            while i < len(lines) and lines[i].startswith("|"):
                rows.append(split_row(lines[i]))
                i += 1
            result.append((head, rows))
        else:
            i += 1
    return result


def split_row(line: str) -> list[str]:
    cells = re.split(r"(?<!\\)\|", line.strip().strip("|"))
    return [c.strip().replace("\\|", "|") for c in cells]


def first_link(cell: str) -> tuple[str, str] | None:
    m = LINK_RE.search(cell)
    return (m.group(1), m.group(2)) if m else None


def codeblock(text: str) -> str:
    m = re.search(r"```text\n(.*?)```", text, re.S)
    return m.group(1).rstrip() if m else ""


def blockquote(text: str) -> str:
    lines = [ln[1:].strip() for ln in text.splitlines() if ln.startswith(">")]
    return inline(" ".join(lines)) if lines else ""


def paragraphs(text: str, limit: int = 3) -> list[str]:
    out = []
    for block in re.split(r"\n\s*\n", text.strip()):
        b = block.strip()
        if not b or b.startswith(("|", "```", ">", "-", "#", "1.")):
            continue
        out.append(inline(" ".join(b.splitlines())))
        if len(out) >= limit:
            break
    return out


def pats_in(s: str) -> list[str]:
    return sorted(set(re.findall(r"P[1-6]", s)), key=lambda p: int(p[1]))


def read(rel: str) -> str:
    return (ROOT / rel).read_text(encoding="utf-8")


def table_html(head: list[str], rows: list[list[str]]) -> dict:
    return {"head": [inline(h) for h in head], "rows": [[inline(c) for c in r] for r in rows]}


# ---------------------------------------------------------------------------
# Parsers
# ---------------------------------------------------------------------------


def parse_categories() -> list[dict]:
    text = read("taxonomy/application-landscape.md")
    sec = find_section(sections(text), "3. 七大應用類別")
    head, rows = tables(sec)[0]
    cats = []
    for r in rows:
        code = re.sub(r"\W", "", r[0])
        name = re.sub(r"\*", "", r[1])
        # "Spatial & 3D 空間／3D" -> split at the first CJK character
        m = re.search(r"[\u4e00-\u9fff]", name)
        en, zh = (name[:m.start()].strip(), name[m.start():]) if m else (name, "")
        cats.append({
            "id": code, "en": en, "zh": zh,
            "problem": inline(r[2]), "traits": inline(r[3]),
            "outputs": inline(r[4]), "usage": inline(r[5]),
            "patterns": CAT_PATTERNS[code],
        })
    combos_head, combos = tables(sec)[1]
    combo_list = [{"name": inline(c[0]), "combo": re.findall(r"[A-G]", c[1]), "note": inline(c[2])} for c in combos]
    return cats, combo_list


def parse_formula() -> list[dict]:
    text = read("taxonomy/application-landscape.md")
    sec = find_section(sections(text), "1. 一條公式")
    head, rows = tables(sec)[0]
    return [{"name": re.sub(r"\*", "", r[0]), "question": inline(r[1]), "examples": inline(r[2])} for r in rows]


def parse_traits() -> dict:
    text = read("taxonomy/problem-characteristics.md")
    secs = sections(text)
    head, rows = tables(find_section(secs, "1. 問題特性總表"))[0]
    matrix = []
    for r in rows:
        matrix.append({"name": re.sub(r"\*", "", r[0]), "values": [re.sub(r"\*", "", c) for c in r[1:]]})
    _, desc_rows = tables(find_section(secs, "2. 每個特性在問什麼"))[0]
    desc = {re.sub(r"\*", "", d[0]): {"q": inline(d[1]), "need": inline(d[2])} for d in desc_rows}
    _, hard = tables(find_section(secs, "3. 三個最重要的觀察"))[0]
    ladder = codeblock(find_section(secs, "3. 三個最重要的觀察"))
    return {
        "cols": ["A", "B", "C", "D", "E", "F", "G"],
        "matrix": matrix, "desc": desc,
        "hardest": [{"domain": inline(h[0]), "hard": inline(h[1]), "prompt": inline(h[2])} for h in hard],
        "ladder": ladder,
    }


def parse_patterns() -> list[dict]:
    text = read("taxonomy/method-characteristics.md")
    secs = sections(text)
    _, rows = tables(find_section(secs, "1. 六種方法群"))[0]
    cmp_head, cmp_rows = tables(find_section(secs, "2. 方法特性比較"))[0]
    _, when_rows = tables(find_section(secs, "3. 方法 × 問題特性"))[0]
    pats = []
    for i, r in enumerate(rows):
        pid = re.search(r"P\d", r[0]).group(0)
        name = re.sub(r"\*|P\d\s*", "", r[0]).strip()
        pdir = PATTERN_DIRS[pid]
        ptext = read(f"patterns/{pdir}/README.md")
        psecs = sections(ptext)
        title = ptext.splitlines()[0].lstrip("# ").strip()
        fit = tables(find_section(psecs, "適合"))
        fail = tables(find_section(psecs, "常見失敗模式"))
        warm_key = next((k for k in psecs if k.startswith("5. 暖身題")), "")
        warm = psecs.get(warm_key, "")
        pats.append({
            "id": pid, "name": name, "title": title,
            "method": inline(r[1]), "fits": inline(r[2]), "examples": inline(r[3]),
            "structure": codeblock(ptext),
            "intro": paragraphs(find_section(psecs, "1. 它在做什麼"), 2),
            "fit": table_html(*fit[0]) if fit else None,
            "fail": table_html(*fail[0]) if fail else None,
            "warmup": {"title": warm_key.replace("5. 暖身題：", ""), "task": blockquote(warm),
                       "notes": paragraphs(warm, 3)},
            "traits": {re.sub(r"\*", "", c[0]): re.sub(r"\*", "", c[i + 1]) for c in cmp_rows},
        })
    when = [{"if": inline(w[0]), "use": pats_in(w[1]), "why": inline(w[2])} for w in when_rows]
    return pats, when


def parse_composite() -> dict:
    text = read("taxonomy/composite-pipelines.md")
    secs = sections(text)
    concept_head, concept_rows = tables(find_section(secs, "1. 三個概念"))[0]
    atom_sec = find_section(secs, "2. 原子能力目錄")
    groups = []
    atoms = []
    for gname, gbody in sections(atom_sec, 3).items():
        head, rows = tables(gbody)[0]
        gid = re.sub(r"^\d+\.\d+\s*", "", gname)
        groups.append({"name": gid, "ids": []})
        for r in rows:
            aid = re.sub(r"\*", "", r[0])
            groups[-1]["ids"].append(aid)
            has_verify = len(head) >= 6
            atoms.append({
                "id": aid, "group": gid, "name": inline(r[1]),
                "patterns": pats_in(r[2]), "tools": inline(r[3]),
                "handoff": inline(r[4]),
                "verify": inline(r[5]) if has_verify else "",
            })
    _, hand = tables(find_section(secs, "3. 交接物就是合約"))[0]
    _, glue = tables(find_section(secs, "4. 黏著層"))[0]
    _, levels = tables(find_section(secs, "5. 複合程度"))[0]
    step_sec = find_section(secs, "6. 拆解方法")
    chain = codeblock(step_sec)
    step_tables = tables(step_sec)
    return {
        "concepts": [{"name": re.sub(r"\*", "", c[0]), "meaning": inline(c[1]), "example": inline(c[2])}
                     for c in concept_rows],
        "groups": groups, "atoms": atoms,
        "handoffs": [{"at": inline(h[0]), "accident": inline(h[1]), "contract": inline(h[2])} for h in hand],
        "glue": [{"name": inline(g[0]), "fit": inline(g[1]), "pro": inline(g[2]), "con": inline(g[3])} for g in glue],
        "levels": [{"lv": re.sub(r"\*", "", l[0]), "desc": inline(l[1]), "eg": inline(l[2])} for l in levels],
        "example": {"chain": chain,
                    "edges": [{"edge": inline(e[0]), "atom": re.findall(r"[VMC]\d", e[1]), "tool": inline(e[2])}
                              for e in step_tables[0][1]],
                    "checks": [{"at": inline(c[0]), "who": inline(c[1]), "what": inline(c[2])}
                               for c in step_tables[1][1]]},
    }


def parse_labs() -> list[dict]:
    text = read("labs/README.md")
    _, rows = tables(text)[0]
    labs = []
    for r in rows:
        link = first_link(r[0])
        lid = "CP" if "Capstone" in link[0] else link[0]
        meta = LAB_META[lid]
        ltext = read(f"labs/{meta['dir']}/README.md")
        lsecs = sections(ltext)
        why = find_section(lsecs, "1. 為什麼做這件事")
        scale = tables(find_section(lsecs, "2. 放大到真實世界")) if lid != "CP" else []
        labs.append({
            "id": lid, "dir": meta["dir"], "title": inline(r[1]),
            "catLabel": inline(r[2]), "cats": meta["cats"],
            "patterns": [f"P{i}" for i in range(1, 7)] if lid == "CP" else pats_in(r[3]),
            "level": r[4].count("★"), "deliverable": inline(r[5]),
            "atoms": meta["atoms"], "prereq": LAB_PREREQ.get(lid, []),
            "task": blockquote(ltext.split("---")[0]),
            "why": paragraphs(why, 2),
            "flow": codeblock(find_section(lsecs, "3. Pattern 分析")),
            "scale": table_html(*scale[0]) if scale else None,
        })
    return labs


def parse_domains() -> list[dict]:
    doms = []
    for did, meta in DOMAIN_META.items():
        text = read(f"domains/{did}/README.md")
        secs = sections(text)
        title = text.splitlines()[0].replace("# Domain：", "").strip()
        hard = tables(find_section(secs, "核心難點"))
        alt = tables(find_section(secs, "工作坊題目"))
        doms.append({
            "id": did, "title": title, **meta,
            "intro": paragraphs(find_section(secs, "1. 問題長什麼樣"), 2),
            "hard": table_html(*hard[0]) if hard else None,
            "alts": [{"title": inline(a[0]), "scene": inline(a[1]), "skill": inline(a[2])}
                     for a in (alt[0][1] if alt else [])],
            "scale": paragraphs(find_section(secs, "放大到真實世界"), 1),
        })
    return doms


def parse_analyses() -> list[dict]:
    out = []
    for aid, meta in ANALYSES.items():
        text = read(f"case-studies/{aid}.md")
        secs = sections(text)
        title = text.splitlines()[0].lstrip("# ").strip()
        head = text.split("---")[0]
        sources = [{"name": t, "url": u} for t, u in LINK_RE.findall(head) if u.startswith("http")]
        why = find_section(secs, "3. 為什麼")
        insight = ""
        m = re.search(r"\*\*關鍵洞察\*\*[:：]\s*(.+?)(?:\n\n|$)", why, re.S)
        if m:
            insight = inline(m.group(1).strip().split("\n")[0])
        out.append({
            "id": aid, "title": title, **meta, "sources": sources,
            "problem": blockquote(find_section(secs, "1. 它解的是什麼問題")),
            "flow": codeblock(find_section(secs, "2. 它用了哪些 Pattern")),
            "insight": insight,
            "limits": [inline(l[2:]) for l in find_section(secs, "4. 限制").splitlines() if l.startswith("- ")],
        })
    return out


def lang_of(cell: str) -> str:
    c = cell.upper()
    if "TW" in c or "繁中" in cell or "台灣" in cell:
        return "ZH-TW"
    if "ZH" in c or "中文" in cell:
        return "ZH"
    return "EN"


def parse_refs(labs: list[dict]) -> list[dict]:
    refs: dict[str, dict] = {}

    def add(name, url, lang, desc, lab, partial, kind):
        key = url.rstrip("/")
        ref = refs.setdefault(key, {
            "name": name, "url": url, "lang": lang, "desc": desc, "labs": [],
            "partial": partial, "kind": kind,
        })
        if lab and lab not in ref["labs"]:
            ref["labs"].append(lab)
        if desc and len(desc) > len(ref["desc"]):
            ref["desc"] = desc
        ref["partial"] = ref["partial"] and partial
        if ref["lang"] == "EN" and lang != "EN":
            ref["lang"] = lang

    # Lab reference sections (richest descriptions).
    for lab in labs:
        text = read(f"labs/{lab['dir']}/README.md")
        sec = find_section(sections(text), "6. 參考")
        for head, rows in tables(sec):
            if not head or "專案" not in head[0] and "文章" not in head[0] and "工具" not in head[0] \
                    and "功能" not in head[0]:
                continue
            kind = "tool" if head[0] == "工具" else "official" if head[0] == "功能" else "project"
            for r in rows:
                fl = first_link(r[0])
                if not fl:
                    continue
                lang = lang_of(r[1]) if len(r) > 2 and head[1] == "語言" else "EN"
                partial = any("◐" in c for c in r)
                add(fl[0], fl[1], lang, inline(r[-1].replace("◐", "").strip()), lab["id"], partial, kind)
        for t, u in LINK_RE.findall(sec):
            if u.startswith("http") and "youtube.com" not in u and u.rstrip("/") not in refs:
                add(t, u, "EN", "", lab["id"], False, "official")

    # Case-study index adds verification marks and a few extra entries.
    text = read("case-studies/README.md")
    for heading, body in sections(text).items():
        m = re.search(r"對應 Lab (\d+)", heading)
        if not m:
            continue
        lab = m.group(1)
        for head, rows in tables(body):
            for r in rows:
                fl = first_link(r[0])
                if not fl:
                    continue
                add(fl[0], fl[1], lang_of(r[1]), inline(r[-2]), lab, "◐" in r[-1], "project")

    # Market landscape products.
    text = read("market-landscape/README.md")
    for heading, body in sections(text, 3).items():
        cats = re.findall(r"^[A-G](?=\.)", heading) or (["C", "E"] if "複合" in heading else [])
        for head, rows in tables(body):
            if "來源" not in head:
                continue
            for r in rows:
                fl = first_link(r[-1])
                if not fl:
                    continue
                ref = refs.setdefault(fl[1].rstrip("/"), {
                    "name": r[0], "url": fl[1], "lang": "EN", "desc": inline(r[1]),
                    "labs": [], "partial": False, "kind": "product",
                })
                ref.setdefault("cats", [])
                ref["cats"] = sorted(set(ref["cats"]) | set(cats))

    # Open-source building blocks.
    text = read("open-source/README.md")
    _, rows = tables(text)[0]
    for r in rows:
        fl = first_link(r[0])
        labs_nums = re.findall(r"\d{2}", r[3])
        ref = refs.setdefault(fl[1].rstrip("/"), {
            "name": fl[0], "url": fl[1], "lang": "EN", "desc": inline(r[2]),
            "labs": [], "partial": False, "kind": "tool",
        })
        ref["kind"] = "tool"
        for n in labs_nums:
            if n not in ref["labs"]:
                ref["labs"].append(n)

    lab_index = {l["id"]: l for l in labs}
    out = []
    for i, ref in enumerate(refs.values()):
        cats = set(ref.get("cats", []))
        pats = set()
        for lid in ref["labs"]:
            if lid in lab_index:
                cats |= set(lab_index[lid]["cats"][:2])
                pats |= set(lab_index[lid]["patterns"])
        ref["id"] = f"r{i}"
        ref["cats"] = sorted(cats)
        ref["patterns"] = sorted(pats, key=lambda p: int(p[1]))
        ref["labs"] = sorted(ref["labs"])
        out.append(ref)
    return out


def write_dist(dist: Path) -> None:
    """Copy the site to dist with the document wrapper removed (the Artifact host adds its own)."""
    site = Path(__file__).resolve().parent
    dist.mkdir(parents=True, exist_ok=True)
    page = (site / "index.html").read_text(encoding="utf-8")
    head = re.search(r"<head>(.*?)</head>", page, re.S).group(1)
    head = re.sub(r"<meta[^>]*>\s*", "", head)
    body = re.search(r"<body>(.*?)</body>", page, re.S).group(1)
    (dist / "index.html").write_text(head.strip() + "\n" + body.strip() + "\n", encoding="utf-8")
    for name in ("data.js", "app.js"):
        (dist / name).write_text((site / name).read_text(encoding="utf-8"), encoding="utf-8")
    print(f"wrote publishable copy to {dist}")


def parse_videos() -> tuple[list[dict], list[dict]]:
    """case-studies/videos.md: a KOL directory plus one video table per lab."""
    path = ROOT / "case-studies/videos.md"
    if not path.exists():
        return [], []
    secs = sections(path.read_text(encoding="utf-8"))
    kols = []
    for head, rows in tables(find_section(secs, "KOL 名錄")):
        for r in rows:
            fl = first_link(r[1])
            kols.append({
                "name": re.sub(r"\*", "", r[0]), "url": fl[1] if fl else "", "handle": fl[0] if fl else "",
                "lang": lang_of(r[2]), "focus": inline(r[3]), "why": inline(r[4]), "labs": [],
            })
    videos = []
    for heading, body in secs.items():
        m = re.search(r"對應 Lab (\d+)", heading)
        if not m:
            continue
        for head, rows in tables(body):
            for r in rows:
                # Video titles may contain brackets, so match greedily up to the URL.
                m2 = re.match(r"\[(.+)\]\((https?://[^)]+)\)", r[0])
                fl = (m2.group(1), m2.group(2)) if m2 else None
                if not fl:
                    continue
                videos.append({
                    "name": fl[0], "url": fl[1], "kol": re.sub(r"\*", "", r[1]), "lang": lang_of(r[2]),
                    "date": r[3], "see": inline(r[4]), "desc": inline(r[5]), "lab": m.group(1),
                })
    kol_index = {k["name"]: k for k in kols}
    for v in videos:
        k = kol_index.get(v["kol"])
        if k and v["lab"] not in k["labs"]:
            k["labs"].append(v["lab"])
    return kols, videos


def main() -> None:
    cats, combos = parse_categories()
    patterns, when = parse_patterns()
    labs = parse_labs()
    data = {
        "formula": parse_formula(),
        "cats": cats, "combos": combos,
        "traits": parse_traits(),
        "patterns": patterns, "when": when,
        "composite": parse_composite(),
        "labs": labs,
        "domains": parse_domains(),
        "analyses": parse_analyses(),
        "refs": parse_refs(labs),
    }
    kols, videos = parse_videos()
    lab_index = {l["id"]: l for l in labs}
    video_urls = {v["url"] for v in videos}
    data["refs"] = [r for r in data["refs"] if r["url"] not in video_urls]
    for i, r in enumerate(data["refs"]):
        r["id"] = f"r{i}"
    start = len(data["refs"])
    merged: dict[str, dict] = {}
    for v in videos:
        ref = merged.get(v["url"])
        if ref:
            if v["lab"] not in ref["labs"]:
                ref["labs"].append(v["lab"])
            continue
        merged[v["url"]] = {
            "id": f"r{start + len(merged)}", "name": v["name"], "url": v["url"], "lang": v["lang"],
            "desc": v["desc"], "see": v["see"], "kol": v["kol"], "date": v["date"],
            "labs": [v["lab"]], "partial": False, "kind": "video",
        }
    for ref in merged.values():
        ref["labs"].sort()
        ref["cats"] = sorted({c for l in ref["labs"] for c in lab_index[l]["cats"][:2]})
        ref["patterns"] = sorted({p for l in ref["labs"] for p in lab_index[l]["patterns"]}, key=lambda p: int(p[1]))
        data["refs"].append(ref)
    for k in kols:
        k["labs"].sort()
    data["kols"] = kols
    OUT.write_text("window.DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}: {len(data['refs'])} refs ({len(merged)} videos), "
          f"{len(kols)} KOLs, {len(labs)} labs, {len(data['composite']['atoms'])} atoms")


if __name__ == "__main__":
    import sys

    main()
    if "--dist" in sys.argv:
        write_dist(Path(sys.argv[sys.argv.index("--dist") + 1]).resolve())
