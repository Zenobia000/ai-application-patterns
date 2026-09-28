/* AI Application Patterns field guide: hash-routed views over window.DATA */
(function () {
  "use strict";

  const D = window.DATA;
  const $view = document.getElementById("view");
  const $tree = document.getElementById("tree");

  // ---------- indexes & derived relations ----------
  const by = (list, key = "id") => Object.fromEntries(list.map((x) => [x[key], x]));
  const CAT = by(D.cats);
  const PAT = by(D.patterns);
  const ATOM = by(D.composite.atoms);
  const LAB = by(D.labs);
  const DOM = by(D.domains);
  const CASE = by(D.analyses);
  const REAL_LABS = D.labs.filter((l) => l.id !== "CP");

  const labsOfCat = (c) => REAL_LABS.filter((l) => l.cats.includes(c));
  const labsOfPat = (p) => REAL_LABS.filter((l) => l.patterns.includes(p));
  const catsOfPat = (p) => D.cats.filter((c) => c.patterns.includes(p.id || p));
  const atomsOfPat = (p) => D.composite.atoms.filter((a) => a.patterns.includes(p));
  const labsOfAtom = (a) => REAL_LABS.filter((l) => l.atoms.includes(a));
  const domsOfCat = (c) => D.domains.filter((d) => d.cats.includes(c));
  const domsOfLab = (l) => D.domains.filter((d) => d.labs.includes(l));
  const casesOf = (fn) => D.analyses.filter(fn);
  const refsWhere = (fn) => D.refs.filter(fn);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const strip = (h) => String(h).replace(/<[^>]+>/g, "");

  // ---------- small components ----------
  const labCode = (id) => (id === "CP" ? "CP" : "L" + id);
  const chip = {
    cat: (id) => `<a class="chip t-cat" href="#cat-${id}"><b>${id}</b>${esc(CAT[id].zh)}</a>`,
    pat: (id) => `<a class="chip t-pat" href="#pat-${id}"><b>${id}</b>${esc(PAT[id].name)}</a>`,
    atom: (id) => `<a class="chip t-atom" href="#atom-${id}"><b>${id}</b>${strip(ATOM[id].name)}</a>`,
    lab: (id) => `<a class="chip t-lab" href="#lab-${id}"><b>${labCode(id)}</b>${strip(LAB[id].title)}</a>`,
    dom: (d) => `<a class="chip t-dom" href="#dom-${d.id}">${esc(d.title)}</a>`,
    case: (c) => `<a class="chip t-case" href="#case-${c.id}">${esc(c.title)}</a>`,
  };
  const chips = (arr) => (arr.length ? `<div class="chips">${arr.join("")}</div>` : `<span class="note">（無）</span>`);
  const stars = (n) => `<span class="stars" aria-label="難度 ${n} 顆星">${"★".repeat(n)}<span class="off">${"★".repeat(5 - n)}</span></span>`;
  const table = (t) =>
    t ? `<div class="tbl-wrap"><table><thead><tr>${t.head.map((h) => `<th>${h}</th>`).join("")}</tr></thead><tbody>${t.rows
      .map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join("")}</tr>`)
      .join("")}</tbody></table></div>` : "";
  const crumb = (parts) =>
    `<div class="crumb">${parts
      .map(([label, href]) => (href ? `<a href="${href}">${label}</a>` : `<span>${label}</span>`))
      .join("<span>›</span>")}</div>`;
  const flow = (s) => (s ? `<pre class="flow">${esc(s)}</pre>` : "");
  const langTag = (l) => `<span class="tag ${l.startsWith("ZH") ? "zh" : ""}">${l}</span>`;
  const KIND = { project: "整合專案", video: "影片示範", tool: "基礎工具", official: "官方資源", product: "商業產品" };
  const KOLS = D.kols || [];
  const KOL = by(KOLS, "name");

  function videoCard(v) {
    const k = KOL[v.kol];
    return `<article class="vid">
      <a class="vt" href="${esc(v.url)}" target="_blank" rel="noopener"><span class="play" aria-hidden="true">▶</span><span>${esc(v.name)}</span></a>
      <div class="vm">${k ? `<a href="#kols" class="kol">${esc(v.kol)}</a>` : `<span class="kol">${esc(v.kol)}</span>`}${langTag(v.lang)}${v.date ? `<span class="tag">${esc(v.date)}</span>` : ""}${v.labs.map((l) => `<a class="tag" href="#lab-${l}">L${l}</a>`).join("")}</div>
      ${v.see ? `<p><span class="k">你會看到</span>${v.see}</p>` : ""}
      ${v.desc ? `<p><span class="k">為什麼適合</span>${v.desc}</p>` : ""}
    </article>`;
  }

  function refItem(r) {
    if (r.kind === "video") return videoCard(r);
    return `<div class="ref">
      <a class="rn" href="${esc(r.url)}" target="_blank" rel="noopener">${esc(r.name)}</a>
      <div class="rm">${langTag(r.lang)}<span class="tag">${KIND[r.kind]}</span>${
        r.partial ? '<span class="tag part" title="僅由搜尋結果確認存在">◐ 待確認</span>' : '<span class="tag ok">✔ 已確認</span>'
      }${r.labs.map((l) => `<a class="tag" href="#lab-${l}">L${l}</a>`).join("")}</div>
      ${r.desc ? `<div class="rd">${r.desc}</div>` : ""}
    </div>`;
  }

  // Show a short list of references with a hand-off to the full library filter.
  function refBlock(all, preset, limit = 8) {
    const vids = all.filter((r) => r.kind === "video");
    const list = all.filter((r) => r.kind !== "video");
    const vlimit = limit >= 12 ? vids.length : 4;
    const vhtml = vids.length
      ? `<h3 class="vh">▶ 影片示範 <span class="note">看真人怎麼做 · ${vids.length} 支</span></h3>
        <div class="vids">${vids.slice(0, vlimit).map(videoCard).join("")}</div>
        ${vids.length > vlimit ? `<div class="more"><button class="btn" data-preset='${esc(JSON.stringify({ ...preset, kind: "video" }))}'>查看全部 ${vids.length} 支影片</button></div>` : ""}
        <h3 class="vh">專案與資源</h3>`
      : "";
    if (!list.length) return vhtml + `<p class="note">目前沒有對應的參考資料。</p>`;
    const zh = list.filter((r) => r.lang !== "EN").length;
    const sorted = [...list].sort((a, b) => (a.kind === "project" ? 0 : 1) - (b.kind === "project" ? 0 : 1) || a.partial - b.partial);
    const shown = sorted.slice(0, limit);
    return `${vhtml}<p class="note">共 ${list.length} 筆，其中中文 ${zh} 筆。以下列出前 ${shown.length} 筆。</p>
      <div class="reflist">${shown.map(refItem).join("")}</div>
      ${list.length > limit ? `<div class="more"><button class="btn" data-preset='${esc(JSON.stringify(preset))}'>在參考資料庫查看全部 ${list.length} 筆</button></div>` : ""}`;
  }

  // Truncate by visual width: CJK glyphs take about two Latin widths.
  function fit(s, units) {
    let used = 0;
    for (let i = 0; i < s.length; i++) {
      used += /[⺀-￿]/.test(s[i]) ? 1.9 : 1;
      if (used > units) return s.slice(0, Math.max(0, i - 1)) + "…";
    }
    return s;
  }

  // ---------- generic column graph (SVG) ----------
  // columns: [{title, items:[{id, code, label, cls, href}]}], edges: [[idA, idB]]
  function columnGraph(columns, edges, opts = {}) {
    const W = opts.width || 980;
    const rowH = opts.rowH || 34;
    const nodeW = opts.nodeW || 220;
    const maxRows = Math.max(...columns.map((c) => c.items.length));
    const H = 40 + maxRows * rowH + 10;
    const gap = (W - nodeW * columns.length) / (columns.length - 1);
    const pos = {};
    let nodes = "";
    let heads = "";
    columns.forEach((col, ci) => {
      const x = ci * (nodeW + gap);
      const offset = ((maxRows - col.items.length) * rowH) / 2;
      heads += `<text class="colhead" x="${x}" y="18">${esc(col.title)}</text>`;
      col.items.forEach((it, ri) => {
        const y = 36 + offset + ri * rowH;
        pos[it.id] = { x, y, cx: x, cy: y + 13 };
        const label = fit(it.label, (nodeW - 58) / 6.6);
        nodes += `<g class="node ${it.cls}" data-id="${it.id}" tabindex="0" role="link" aria-label="${esc(it.code + " " + it.label)}">
          <rect x="${x}" y="${y}" width="${nodeW}" height="26" rx="6"></rect>
          <text class="nc" x="${x + 10}" y="${y + 17.5}">${esc(it.code)}</text>
          <text class="nl" x="${x + 46}" y="${y + 17.5}">${esc(label)}</text>
          <title>${esc(it.label)}</title></g>`;
      });
    });
    const paths = edges
      .filter(([a, b]) => pos[a] && pos[b])
      .map(([a, b]) => {
        const p = pos[a], q = pos[b];
        const x1 = p.x + nodeW, y1 = p.cy, x2 = q.x, y2 = q.cy;
        const mx = (x1 + x2) / 2;
        return `<path class="edge" data-a="${a}" data-b="${b}" d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}"></path>`;
      })
      .join("");
    const hrefs = {};
    columns.forEach((c) => c.items.forEach((it) => (hrefs[it.id] = it.href)));
    const svg = `<svg class="graph" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(opts.label || "關係圖")}">${heads}${paths}${nodes}</svg>`;
    return { svg, hrefs, edges };
  }

  function wireGraph(root, graph) {
    const svg = root.querySelector("svg.graph");
    if (!svg) return;
    const adj = {};
    graph.edges.forEach(([a, b]) => {
      (adj[a] = adj[a] || new Set()).add(b);
      (adj[b] = adj[b] || new Set()).add(a);
    });
    // Highlight the node, its neighbours, and neighbours-of-neighbours in the flow direction.
    const light = (id) => {
      const hot = new Set([id, ...(adj[id] || [])]);
      svg.classList.add("dim");
      svg.querySelectorAll(".node").forEach((n) => n.classList.toggle("hot", hot.has(n.dataset.id)));
      svg.querySelectorAll(".edge").forEach((e) => e.classList.toggle("hot", e.dataset.a === id || e.dataset.b === id));
    };
    const clear = () => {
      svg.classList.remove("dim");
      svg.querySelectorAll(".hot").forEach((n) => n.classList.remove("hot"));
    };
    svg.querySelectorAll(".node").forEach((n) => {
      n.addEventListener("mouseenter", () => light(n.dataset.id));
      n.addEventListener("focus", () => light(n.dataset.id));
      n.addEventListener("mouseleave", clear);
      n.addEventListener("blur", clear);
      n.addEventListener("click", () => (location.hash = graph.hrefs[n.dataset.id]));
      n.addEventListener("keydown", (e) => {
        if (e.key === "Enter") location.hash = graph.hrefs[n.dataset.id];
      });
    });
  }

  // ---------- tree navigation ----------
  function buildTree() {
    const group = (title, count, items, open) =>
      `<details ${open ? "open" : ""}><summary>${title}<span class="n">${count}</span></summary><ul>${items.join("")}</ul></details>`;
    const item = (href, code, label, cls) => `<li><a href="${href}" class="${cls}"><span class="c">${code}</span><span>${label}</span></a></li>`;
    const groupsHtml = D.composite.groups
      .map((g) => `<li><span class="note" style="padding:6px 8px 2px;display:block">${esc(g.name)}</span></li>` +
        g.ids.map((id) => item(`#atom-${id}`, id, strip(ATOM[id].name), "t-atom")).join(""))
      .join("");
    $tree.innerHTML = `
      <a href="#home">總覽</a>
      ${group("L1 應用類別", 7, D.cats.map((c) => item(`#cat-${c.id}`, c.id, esc(c.zh), "t-cat")), true)}
      ${group("L2 Pattern", 6, D.patterns.map((p) => item(`#pat-${p.id}`, p.id, esc(p.name), "t-pat")), true)}
      <a href="#traits">問題特性分析</a>
      <details><summary>L3 原子能力<span class="n">${D.composite.atoms.length}</span></summary><ul>
        <li><a href="#composite"><span class="c">∑</span><span>複合管線總覽</span></a></li>${groupsHtml}</ul></details>
      ${group("L4 Labs", D.labs.length, D.labs.map((l) => item(`#lab-${l.id}`, labCode(l.id), strip(l.title), "t-lab")), false)}
      ${group("領域", D.domains.length, D.domains.map((d) => item(`#dom-${d.id}`, "◆", esc(d.title), "t-dom")), false)}
      ${group("L5 案例分析", D.analyses.length, D.analyses.map((c) => item(`#case-${c.id}`, "▣", esc(c.title), "t-case")), false)}
      <a href="#kols">影片與 KOL <span class="note">${D.refs.filter((r) => r.kind === "video").length}</span></a>
      <a href="#refs">參考資料庫 <span class="note">${D.refs.length}</span></a>`;
  }

  function markActive(hash) {
    $tree.querySelectorAll("a").forEach((a) => {
      const on = a.getAttribute("href") === hash;
      a.classList.toggle("on", on);
      if (on) {
        const d = a.closest("details");
        if (d) d.open = true;
      }
    });
    const layer = hash.startsWith("#cat") ? "cat" : hash.startsWith("#pat") ? "pat" : hash.startsWith("#atom") || hash === "#composite" ? "atom"
      : hash.startsWith("#lab") ? "lab" : hash.startsWith("#dom") ? "dom" : hash.startsWith("#case") || hash === "#refs" || hash === "#kols" ? "refs"
      : hash === "#traits" ? "traits" : "home";
    document.querySelectorAll("#layers a").forEach((a) => a.classList.toggle("on", a.dataset.l === layer));
  }

  // ---------- views ----------
  function viewHome() {
    const f = D.formula;
    const graph = columnGraph(
      [
        { title: "L1 應用類別（解什麼問題）", items: D.cats.map((c) => ({ id: "c" + c.id, code: c.id, label: c.zh, cls: "t-cat", href: `#cat-${c.id}` })) },
        { title: "L2 PATTERN（用什麼方法）", items: D.patterns.map((p) => ({ id: "p" + p.id, code: p.id, label: p.name, cls: "t-pat", href: `#pat-${p.id}` })) },
        { title: "L4 LABS（工作坊題目）", items: REAL_LABS.map((l) => ({ id: "l" + l.id, code: labCode(l.id), label: strip(l.title), cls: "t-lab", href: `#lab-${l.id}` })) },
      ],
      [
        ...D.cats.flatMap((c) => c.patterns.map((p) => ["c" + c.id, "p" + p])),
        ...REAL_LABS.flatMap((l) => l.patterns.map((p) => ["p" + p, "l" + l.id])),
      ],
      { label: "應用類別、Pattern 與 Labs 的關係圖", rowH: 32 }
    );
    const counts = [
      ["L1", "應用類別", D.cats.length, "#cats", "t-cat", "它解的是什麼問題？"],
      ["L2", "Pattern", D.patterns.length, "#patterns", "t-pat", "用了哪種底層方法？"],
      ["L3", "原子能力", D.composite.atoms.length, "#composite", "t-atom", "拆成哪些模態轉換？"],
      ["L4", "Labs", D.labs.length, "#labs", "t-lab", "可以怎麼動手練？"],
      ["L5", "案例、影片與參考", D.refs.length, "#refs", "t-case", "別人做好了哪些？看誰示範？"],
    ];
    $view.innerHTML = `
      <div class="eyebrow">Field Guide · ${D.refs.length} 筆參考資料 · 2026-09</div>
      <h1>先分應用目的，再拆底層模式，最後映射工具</h1>
      <p class="lede">這份指南把 AI 應用整理成五層。任何一個新案例，都能從上往下問：它解什麼問題、用了哪些 Pattern、拆成哪些原子能力、對應哪個工作坊題目、有哪些別人做好的專案可以參考。</p>

      <h2>五層階層 <small>點任一層進入</small></h2>
      <nav class="ladder">${counts
        .map(([lv, t, n, href, cls, q]) => `<a href="${href}" class="${cls}"><span class="lv">${lv}</span><span class="num">${n}</span><span class="ttl">${t}</span><span class="q">${q}</span></a>`)
        .join("")}</nav>

      <h2>一條公式 <small>AI Application 的六個組成</small></h2>
      <div class="formula">${f
        .map((t, i) => `${i ? '<span class="op">+</span>' : ""}<div class="term"><b>${esc(t.name.split(" ")[0])}</b><span>${esc(t.name.split(" ").slice(1).join(" "))}</span><div class="note" style="margin-top:6px">${t.question}</div></div>`)
        .join("")}</div>

      <h2>關係圖 <small>滑過任一節點，看它連到哪些 Pattern 與 Lab</small></h2>
      <div class="graph-wrap">${graph.svg}</div>
      <div class="legend"><span class="t-cat"><i></i>應用類別</span><span class="t-pat"><i></i>Pattern</span><span class="t-lab"><i></i>Lab</span><span>線條：類別使用的 Pattern、Lab 練到的 Pattern</span></div>

      <h2>原子能力週期表 <small>複合應用的最小積木</small></h2>
      ${atomTable()}

      <h2>真實案例都是組合 <small>七大類別不是互斥的產品</small></h2>
      <div class="tbl-wrap"><table><thead><tr><th>真實案例</th><th>組合</th><th>說明</th></tr></thead><tbody>${D.combos
        .map((c) => `<tr><td><strong>${c.name}</strong></td><td>${chips(c.combo.map(chip.cat))}</td><td>${c.note}</td></tr>`)
        .join("")}</tbody></table></div>`;
    wireGraph($view, graph);
  }

  function atomTable() {
    return D.composite.groups
      .map((g) => `<h3 style="margin:18px 0 8px">${esc(g.name)}</h3><div class="tiles">${g.ids
        .map((id) => {
          const a = ATOM[id];
          return `<a class="tile t-atom" href="#atom-${id}"><span class="corner">${a.patterns.join(" ")}</span><span class="code">${id}</span><span class="nm">${strip(a.name)}</span><span class="sub">${strip(a.handoff)}</span></a>`;
        })
        .join("")}</div>`)
      .join("");
  }

  function viewCats() {
    const t = D.traits;
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L1 應用類別"]])}
      <div class="eyebrow">Layer 1</div>
      <h1>七大應用類別</h1>
      <p class="lede">依「它在解什麼問題」分類。每個類別底下，再看它用了哪些 Pattern、有哪些 Lab、領域與參考資料。</p>
      <h2>類別一覽</h2>
      <div class="cards">${D.cats
        .map((c) => `<a class="card t-cat" href="#cat-${c.id}"><div class="h"><span class="code">${c.id}</span><b>${esc(c.zh)}</b></div>
          <div class="note">${esc(c.en)}</div><p>${c.problem}</p>
          <div class="chips">${c.patterns.map((p) => `<span class="chip t-pat"><b>${p}</b>${esc(PAT[p].name)}</span>`).join("")}</div>
          <div class="note">${labsOfCat(c.id).length} 個 Lab · ${refsWhere((r) => r.cats.includes(c.id)).length} 筆參考</div></a>`)
        .join("")}</div>
      <h2>問題特性速覽 <small>完整說明見問題特性分析</small></h2>
      ${heatMatrix(t)}`;
    wireHeat();
  }

  function heatMatrix(t, focusCol) {
    const dot = (v) => (v === "○" ? "full" : v === "△" ? "half" : v === "×" ? "none" : "");
    return `<div class="tbl-wrap"><table class="heat"><thead><tr><th>問題特性</th>${t.cols
      .map((c) => `<th class="v"><a class="chip t-cat" href="#cat-${c}" style="padding:0 7px"><b>${c}</b></a></th>`)
      .join("")}</tr></thead><tbody>${t.matrix
      .map((row) => `<tr data-trait="${esc(row.name)}"><td><strong>${esc(row.name)}</strong></td>${row.values
        .map((v, i) => {
          const d = dot(v);
          const cell = d ? `<span class="dot ${d}" title="${v}"></span>` : `<span class="lvl ${v.includes("高") ? "hi" : "mid"}">${esc(v)}</span>`;
          return `<td class="v t-cat" style="${focusCol === t.cols[i] ? "background:color-mix(in srgb,var(--cat) 8%,var(--surface))" : ""}">${cell}</td>`;
        })
        .join("")}</tr>`)
      .join("")}</tbody></table></div>
      <div class="legend"><span class="t-cat"><span class="dot full" style="width:12px;height:12px"></span> 高度相關</span><span class="t-cat"><span class="dot half" style="width:12px;height:12px"></span> 部分相關</span><span class="t-cat"><span class="dot none" style="width:12px;height:12px"></span> 幾乎無關</span><span>點一列看這個特性在問什麼</span></div>
      <div id="traitDesc" class="panel" style="margin-top:12px" hidden></div>`;
  }

  function wireHeat() {
    const box = document.getElementById("traitDesc");
    $view.querySelectorAll(".heat tbody tr").forEach((tr) =>
      tr.addEventListener("click", () => {
        $view.querySelectorAll(".heat tr.sel").forEach((x) => x.classList.remove("sel"));
        tr.classList.add("sel");
        const d = D.traits.desc[tr.dataset.trait];
        box.hidden = !d;
        if (d) box.innerHTML = `<h3>${esc(tr.dataset.trait)}</h3><dl class="kv"><dt>核心提問</dt><dd>${d.q}</dd><dt>若此特性高</dt><dd>${d.need}</dd></dl>`;
      })
    );
  }

  function viewCat(id) {
    const c = CAT[id];
    const col = D.traits.cols.indexOf(id);
    const profile = D.traits.matrix.map((r) => ({ name: r.name, v: r.values[col] }));
    const labs = labsOfCat(id);
    const refs = refsWhere((r) => r.cats.includes(id));
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L1 應用類別", "#cats"], [`${id} ${esc(c.zh)}`]])}
      <div class="hero-code t-cat"><span class="big">${id}</span><div><div class="eyebrow">Layer 1 · 應用類別</div><h1 style="margin:0">${esc(c.zh)}</h1><div class="note">${esc(c.en)}</div></div></div>
      <div class="grid2" style="margin-top:18px">
        <div class="panel"><dl class="kv"><dt>核心問題</dt><dd>${c.problem}</dd><dt>問題特性</dt><dd>${c.traits}</dd><dt>常見成果</dt><dd>${c.outputs}</dd><dt>代表使用方式</dt><dd>${c.usage}</dd></dl></div>
        <div class="panel"><h3>問題特性輪廓</h3><div class="tbl-wrap" style="border:0"><table class="heat"><tbody>${profile
          .map((p) => {
            const d = p.v === "○" ? "full" : p.v === "△" ? "half" : p.v === "×" ? "none" : "";
            return `<tr><td>${esc(p.name)}</td><td class="v t-cat">${d ? `<span class="dot ${d}"></span>` : `<span class="lvl ${p.v.includes("高") ? "hi" : "mid"}">${esc(p.v)}</span>`}</td></tr>`;
          })
          .join("")}</tbody></table></div></div>
      </div>

      <h2>往下衍生 <small>這個類別連到哪些概念</small></h2>
      <dl class="rel panel">
        <dt>使用的 Pattern</dt><dd>${chips(c.patterns.map(chip.pat))}</dd>
        <dt>相關原子能力</dt><dd>${chips([...new Set(labs.flatMap((l) => l.atoms))].map(chip.atom))}</dd>
        <dt>工作坊 Labs</dt><dd>${chips(labs.map((l) => chip.lab(l.id)))}</dd>
        <dt>應用領域</dt><dd>${chips(domsOfCat(id).map(chip.dom))}</dd>
        <dt>案例分析</dt><dd>${chips(casesOf((a) => a.cats.includes(id)).map(chip.case))}</dd>
      </dl>

      <h2>可選的領域題目 <small>同一類別的不同題目</small></h2>
      ${altTopics(domsOfCat(id))}

      <h2>參考資料</h2>
      ${refBlock(refs, { cat: id })}`;
  }

  function altTopics(doms) {
    const rows = doms.flatMap((d) => [
      ...d.labs.map((l) => `<tr><td>${chip.dom(d)}</td><td>${chip.lab(l)}</td><td class="note">主題目</td></tr>`),
      ...d.alts.map((a) => `<tr><td>${chip.dom(d)}</td><td><strong>${a.title}</strong><div class="note">${a.scene}</div></td><td class="note">${a.skill}</td></tr>`),
    ]);
    return rows.length ? `<div class="tbl-wrap"><table><thead><tr><th>領域</th><th>題目</th><th>額外練到</th></tr></thead><tbody>${rows.join("")}</tbody></table></div>` : "";
  }

  function viewPatterns() {
    const keys = Object.keys(D.patterns[0].traits);
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L2 Pattern"]])}
      <div class="eyebrow">Layer 2</div>
      <h1>六種底層方法群</h1>
      <p class="lede">應用類別描述要解什麼問題；Pattern 描述用什麼方式解。工具會換，這六種結構不太會變。</p>
      <h2>Pattern 一覽</h2>
      <div class="cards">${D.patterns
        .map((p) => `<a class="card t-pat" href="#pat-${p.id}"><div class="h"><span class="code">${p.id}</span><b>${esc(p.name)}</b></div>
          <code style="align-self:flex-start">${strip(p.method)}</code><p>${p.fits}</p>
          <div class="chips">${catsOfPat(p.id).map((c) => `<span class="chip t-cat"><b>${c.id}</b>${esc(c.zh)}</span>`).join("")}</div>
          <div class="note">${atomsOfPat(p.id).length} 個原子能力 · ${labsOfPat(p.id).length} 個 Lab</div></a>`)
        .join("")}</div>
      <h2>方法特性比較</h2>
      <div class="tbl-wrap"><table><thead><tr><th>方法特性</th>${D.patterns.map((p) => `<th><a class="chip t-pat" href="#pat-${p.id}"><b>${p.id}</b></a></th>`).join("")}</tr></thead><tbody>${keys
        .map((k) => `<tr><td><strong>${esc(k)}</strong></td>${D.patterns.map((p) => `<td>${esc(p.traits[k])}</td>`).join("")}</tr>`)
        .join("")}</tbody></table></div>
      <h2>什麼時候選哪個</h2>
      <div class="tbl-wrap"><table><thead><tr><th>如果問題的主要特性是…</th><th>優先考慮</th><th>原因</th></tr></thead><tbody>${D.when
        .map((w) => `<tr><td>${w.if}</td><td>${chips(w.use.map(chip.pat))}</td><td>${w.why}</td></tr>`)
        .join("")}</tbody></table></div>
      <p class="note">經驗法則：能用 P4（API/MCP）就不要用 P6（點畫面）；能用 P5（固定流程）就不要讓 Agent 每次自由發揮。</p>`;
  }

  function viewPat(id) {
    const p = PAT[id];
    const labs = labsOfPat(id);
    const refs = refsWhere((r) => r.patterns.includes(id));
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L2 Pattern", "#patterns"], [`${id} ${esc(p.name)}`]])}
      <div class="hero-code t-pat"><span class="big">${id}</span><div><div class="eyebrow">Layer 2 · Pattern</div><h1 style="margin:0">${esc(p.title)}</h1></div></div>
      ${flow(p.structure)}
      ${p.intro.map((x) => `<p>${x}</p>`).join("")}

      <h2>往上：哪些類別用它 · 往下：拆成什麼</h2>
      <dl class="rel panel">
        <dt>被這些類別使用</dt><dd>${chips(catsOfPat(id).map((c) => chip.cat(c.id)))}</dd>
        <dt>對應原子能力</dt><dd>${chips(atomsOfPat(id).map((a) => chip.atom(a.id)))}</dd>
        <dt>練到它的 Labs</dt><dd>${chips(labs.map((l) => chip.lab(l.id)))}</dd>
        <dt>案例分析</dt><dd>${chips(casesOf((a) => a.pats.includes(id)).map(chip.case))}</dd>
      </dl>

      <h2>方法特性</h2>
      <div class="tiles">${Object.entries(p.traits)
        .map(([k, v]) => `<div class="tile t-pat" style="min-height:0"><span class="sub">${esc(k)}</span><span class="nm">${esc(v)}</span></div>`)
        .join("")}</div>

      <div class="grid2" style="margin-top:24px">
        <div><h3>適合 / 不適合</h3>${table(p.fit)}</div>
        <div><h3>常見失敗模式</h3>${table(p.fail)}</div>
      </div>

      <h2>暖身題 <small>30 分鐘</small></h2>
      <div class="panel warm"><h3>${esc(p.warmup.title)}</h3><p>${p.warmup.task}</p>${p.warmup.notes.map((n) => `<p class="note">${n}</p>`).join("")}</div>

      <h2>參考資料</h2>
      ${refBlock(refs, { pat: id })}`;
  }

  function viewTraits() {
    const t = D.traits;
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["問題特性分析"]])}
      <div class="eyebrow">Analysis tool</div>
      <h1>問題特性分析</h1>
      <p class="lede">同樣叫 AI 應用，3D 場景和客服機器人要解的難題完全不同。逐列檢查這張表，就知道難處在哪、該選哪個 Pattern、驗收要花多少力氣。</p>
      <h2>問題特性 × 應用類別</h2>
      ${heatMatrix(t)}
      <h2>每個領域的最大難題 <small>Prompt Engineering 不是統一解法</small></h2>
      <div class="tbl-wrap"><table><thead><tr><th>領域</th><th>最大難題</th><th>Prompt 能解決多少</th></tr></thead><tbody>${t.hardest
        .map((h) => `<tr><td><strong>${h.domain}</strong></td><td>${h.hard}</td><td>${h.prompt}</td></tr>`)
        .join("")}</tbody></table></div>
      <h2>可驗證性決定 Agent 能自主多少</h2>
      ${flow(t.ladder)}`;
    wireHeat();
  }

  function viewComposite() {
    const C = D.composite;
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L3 複合管線"]])}
      <div class="eyebrow">Layer 3</div>
      <h1>複合式應用的拆解法</h1>
      <p class="lede">亮眼的案例幾乎都是好幾種能力串起來的。先拆成原子能力、交接物、黏著層，才有辦法重新整合。</p>
      <h2>三個概念</h2>
      <div class="grid3">${C.concepts
        .map((c, i) => `<div class="panel ${["t-atom", "t-lab", "t-pat"][i]}"><div class="eyebrow" style="color:var(--c)">${["原子", "合約", "黏著"][i]}</div><h3>${esc(c.name)}</h3><p class="note" style="margin:0 0 6px">${c.meaning}</p><div>${c.example}</div></div>`)
        .join("")}</div>

      <h2>原子能力週期表</h2>
      ${atomTable()}

      <h2>範例：社團吉祥物動畫廣告 <small>從交付物往回推</small></h2>
      ${flow(C.example.chain)}
      <div class="tbl-wrap" style="margin-top:12px"><table><thead><tr><th>邊</th><th>原子能力</th><th>工具選擇</th></tr></thead><tbody>${C.example.edges
        .map((e) => `<tr><td>${e.edge}</td><td>${chips(e.atom.map(chip.atom))}</td><td>${e.tool}</td></tr>`)
        .join("")}</tbody></table></div>

      <h2>交接物就是合約 <small>複合應用最常壞在交接處</small></h2>
      <div class="tbl-wrap"><table><thead><tr><th>交接處</th><th>常見事故</th><th>合約應寫明</th></tr></thead><tbody>${C.handoffs
        .map((h) => `<tr><td><strong>${h.at}</strong></td><td>${h.accident}</td><td>${h.contract}</td></tr>`)
        .join("")}</tbody></table></div>

      <h2>黏著層：誰把步驟接起來</h2>
      <div class="tbl-wrap"><table><thead><tr><th>方式</th><th>適合</th><th>優點</th><th>缺點</th></tr></thead><tbody>${C.glue
        .map((g) => `<tr><td><strong>${g.name}</strong></td><td>${g.fit}</td><td>${g.pro}</td><td>${g.con}</td></tr>`)
        .join("")}</tbody></table></div>

      <h2>複合程度 L0–L4</h2>
      <div class="cards">${C.levels
        .map((l, i) => `<div class="card t-atom" style="--c:color-mix(in srgb,var(--atom) ${40 + i * 15}%,var(--muted))"><div class="h"><span class="code">${esc(l.lv.split(" ")[0])}</span><b>${esc(l.lv.split(" ").slice(1).join(" "))}</b></div><p>${l.desc}</p><div class="note">例：${l.eg}</div></div>`)
        .join("")}</div>`;
  }

  function viewAtom(id) {
    const a = ATOM[id];
    const labs = labsOfAtom(id);
    const hand = D.composite.handoffs.filter((h) => strip(h.at).includes(id));
    const refs = refsWhere((r) => r.labs.some((l) => labs.some((x) => x.id === l)) && r.patterns.some((p) => a.patterns.includes(p)));
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L3 複合管線", "#composite"], [esc(a.group)], [id]])}
      <div class="hero-code t-atom"><span class="big">${id}</span><div><div class="eyebrow">Layer 3 · 原子能力 · ${esc(a.group)}</div><h1 style="margin:0">${a.name}</h1></div></div>
      <div class="panel" style="margin-top:16px"><dl class="kv">
        <dt>代表工具</dt><dd>${a.tools}</dd>
        <dt>交接物</dt><dd>${a.handoff}</dd>
        ${a.verify ? `<dt>自動驗證難度</dt><dd>${a.verify}</dd>` : ""}
      </dl></div>
      <h2>關聯</h2>
      <dl class="rel panel">
        <dt>基於 Pattern</dt><dd>${chips(a.patterns.map(chip.pat))}</dd>
        <dt>出現在這些 Lab</dt><dd>${chips(labs.map((l) => chip.lab(l.id)))}</dd>
        <dt>同組的其他能力</dt><dd>${chips(D.composite.groups.find((g) => g.name === a.group).ids.filter((x) => x !== id).map(chip.atom))}</dd>
      </dl>
      ${hand.length ? `<h2>相關交接事故</h2><div class="tbl-wrap"><table><thead><tr><th>交接處</th><th>常見事故</th><th>合約應寫明</th></tr></thead><tbody>${hand
        .map((h) => `<tr><td>${h.at}</td><td>${h.accident}</td><td>${h.contract}</td></tr>`).join("")}</tbody></table></div>` : ""}
      ${labs.length ? `<h2>在管線中的位置</h2>${labs.filter((l) => l.atoms.length > 2).map((l) => `<div style="margin-bottom:12px"><div class="note">${chip.lab(l.id)}</div><div class="chain" style="margin-top:6px">${l.atoms
        .map((x) => `<a class="chip t-atom" href="#atom-${x}" style="${x === id ? "border-width:2px;font-weight:700" : "opacity:.75"}"><b>${x}</b></a>`)
        .join('<span class="arrow">→</span>')}</div></div>`).join("")}` : ""}
      <h2>參考資料 <small>用到這個能力的 Lab 中、同 Pattern 的資料</small></h2>
      ${refBlock(refs, { labs: labs.map((l) => l.id) })}`;
  }

  function skillTree() {
    const basic = REAL_LABS.filter((l) => +l.id <= 8);
    const comp = REAL_LABS.filter((l) => +l.id > 8);
    const g = columnGraph(
      [
        { title: "基礎：單一類別", items: basic.map((l) => ({ id: l.id, code: labCode(l.id), label: strip(l.title), cls: "t-lab", href: `#lab-${l.id}` })) },
        { title: "複合：管線串接", items: comp.map((l) => ({ id: l.id, code: labCode(l.id), label: strip(l.title), cls: "t-lab", href: `#lab-${l.id}` })) },
        { title: "整合", items: [{ id: "CP", code: "CP", label: strip(LAB.CP.title), cls: "t-lab", href: "#lab-CP" }] },
      ],
      [
        ...comp.flatMap((l) => l.prereq.map((p) => [p, l.id])),
        ...["02", "03", "04", "07", "09", "10", "11"].map((x) => [x, "CP"]),
      ],
      { label: "Lab 技能樹", width: 900, nodeW: 240, rowH: 36 }
    );
    return g;
  }

  function viewLabs() {
    const g = skillTree();
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L4 Labs"]])}
      <div class="eyebrow">Layer 4</div>
      <h1>工作坊實作題</h1>
      <p class="lede">每一題都是日常情境 × 一種應用類別 × 一到數個 Pattern。先練單一能力，再練串接，最後整合。</p>
      <h2>技能樹 <small>線條代表建議先修</small></h2>
      <div class="graph-wrap">${g.svg}</div>
      <h2>題目一覽</h2>
      <div class="tbl-wrap"><table><thead><tr><th>Lab</th><th>題目</th><th>類別</th><th>Pattern</th><th>難度</th><th>交付物</th></tr></thead><tbody>${D.labs
        .map((l) => `<tr><td><a class="chip t-lab" href="#lab-${l.id}"><b>${labCode(l.id)}</b></a></td><td><strong>${l.title}</strong></td><td>${chips(l.cats.slice(0, 3).map((c) => `<span class="chip t-cat"><b>${c}</b></span>`))}</td><td>${chips(l.patterns.map((p) => `<span class="chip t-pat"><b>${p}</b></span>`))}</td><td>${stars(l.level)}</td><td>${l.deliverable}</td></tr>`)
        .join("")}</tbody></table></div>`;
    wireGraph($view, g);
  }

  function viewLab(id) {
    const l = LAB[id];
    const refs = refsWhere((r) => r.labs.includes(id));
    const next = REAL_LABS.filter((x) => x.prereq.includes(id));
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L4 Labs", "#labs"], [labCode(id)]])}
      <div class="hero-code t-lab"><span class="big">${labCode(id)}</span><div><div class="eyebrow">Layer 4 · Lab ${stars(l.level)}</div><h1 style="margin:0">${l.title}</h1></div></div>
      <div class="panel" style="margin-top:16px"><p style="margin:0">${l.task}</p></div>

      <h2>這題的定位</h2>
      <dl class="rel panel">
        <dt>應用類別</dt><dd>${chips(l.cats.map(chip.cat))}</dd>
        <dt>使用的 Pattern</dt><dd>${chips(l.patterns.map(chip.pat))}</dd>
        ${l.atoms.length ? `<dt>原子能力鏈</dt><dd><div class="chain">${l.atoms.map((a) => `<a class="chip t-atom" href="#atom-${a}"><b>${a}</b>${strip(ATOM[a].name)}</a>`).join('<span class="arrow">→</span>')}</div></dd>` : ""}
        ${l.prereq.length ? `<dt>建議先做</dt><dd>${chips(l.prereq.map(chip.lab))}</dd>` : ""}
        ${next.length ? `<dt>接下來可做</dt><dd>${chips(next.map((x) => chip.lab(x.id)))}</dd>` : ""}
        <dt>應用領域</dt><dd>${chips(domsOfLab(id).map(chip.dom))}</dd>
        <dt>案例分析</dt><dd>${chips(casesOf((a) => a.labs.includes(id)).map(chip.case))}</dd>
        <dt>交付物</dt><dd>${l.deliverable}</dd>
      </dl>

      ${l.why.length ? `<h2>為什麼做這件事</h2>${l.why.map((x) => `<p>${x}</p>`).join("")}` : ""}
      ${l.scale ? `<h2>放大到真實世界</h2>${table(l.scale)}` : ""}
      ${l.flow ? `<h2>Pattern 分析</h2>${flow(l.flow)}` : ""}

      <h2>參考資料 <small>別人已經整合好的專案</small></h2>
      ${refBlock(refs, { labs: [id] }, 12)}
      <p class="note">完整步驟、驗收標準與實作紀錄表：<code>labs/${l.dir}/README.md</code></p>`;
  }

  function viewDomains() {
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["領域"]])}
      <div class="eyebrow">Domains</div>
      <h1>應用領域</h1>
      <p class="lede">Pattern 講怎麼做，領域講做什麼。每個領域都有一個主題目與兩個備選題目。</p>
      <div class="cards" style="margin-top:20px">${D.domains
        .map((d) => `<a class="card t-dom" href="#dom-${d.id}"><div class="h"><b>${esc(d.title)}</b></div>
          <div class="chips">${d.cats.map((c) => `<span class="chip t-cat"><b>${c}</b>${esc(CAT[c].zh)}</span>`).join("")}</div>
          <p>${d.intro[0] || ""}</p>
          <div class="chips">${d.labs.map((l) => `<span class="chip t-lab"><b>${labCode(l)}</b></span>`).join("")}${d.alts.map((a) => `<span class="chip t-ref">${strip(a.title)}</span>`).join("")}</div></a>`)
        .join("")}</div>`;
  }

  function viewDom(id) {
    const d = DOM[id];
    const pats = [...new Set(d.labs.flatMap((l) => LAB[l].patterns))];
    const refs = refsWhere((r) => r.labs.some((l) => d.labs.includes(l)));
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["領域", "#domains"], [esc(d.title)]])}
      <div class="eyebrow">Domain</div>
      <h1>${esc(d.title)}</h1>
      ${d.intro.map((x) => `<p>${x}</p>`).join("")}
      <h2>關聯</h2>
      <dl class="rel panel">
        <dt>應用類別</dt><dd>${chips(d.cats.map(chip.cat))}</dd>
        <dt>Pattern 組合</dt><dd>${chips(pats.map(chip.pat))}</dd>
        <dt>主題目</dt><dd>${chips(d.labs.map(chip.lab))}</dd>
        <dt>案例分析</dt><dd>${chips(casesOf((a) => a.labs.some((l) => d.labs.includes(l))).map(chip.case))}</dd>
      </dl>
      ${d.hard ? `<h2>核心難點</h2>${table(d.hard)}` : ""}
      <h2>題目選擇</h2>${altTopics([d])}
      ${d.scale.length ? `<h2>放大到真實世界</h2><p>${d.scale[0]}</p>` : ""}
      <h2>參考資料</h2>${refBlock(refs, { labs: d.labs })}`;
  }

  function viewCase(id) {
    const c = CASE[id];
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["案例與參考", "#refs"], [esc(c.title)]])}
      <div class="eyebrow">Layer 5 · 案例分析</div>
      <h1>${esc(c.title)}</h1>
      <div class="panel" style="margin-top:12px"><h3>它解的是什麼問題</h3><p style="margin:0">${c.problem}</p></div>
      <h2>拆解</h2>
      <dl class="rel panel">
        <dt>應用類別</dt><dd>${chips(c.cats.map(chip.cat))}</dd>
        <dt>使用的 Pattern</dt><dd>${chips(c.pats.map(chip.pat))}</dd>
        <dt>轉化成的 Lab</dt><dd>${chips(c.labs.map(chip.lab))}</dd>
      </dl>
      ${c.flow ? `<h2>六元素流程</h2>${flow(c.flow)}` : ""}
      ${c.insight ? `<h2>關鍵洞察</h2><p class="insight">${c.insight}</p>` : ""}
      ${c.limits.length ? `<h2>限制與風險</h2><ul>${c.limits.map((x) => `<li>${x}</li>`).join("")}</ul>` : ""}
      <h2>原始來源</h2>
      <div class="reflist">${c.sources.map((s) => `<div class="ref"><a class="rn" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a></div>`).join("")}</div>`;
  }

  // ---------- KOL directory ----------
  function viewKols() {
    const vids = D.refs.filter((r) => r.kind === "video");
    const langs = [["ZH-TW", "繁體中文"], ["ZH", "簡體中文"], ["EN", "英文"]];
    const kolCard = (k) => {
      const mine = vids.filter((v) => v.kol === k.name);
      return `<article class="panel kolcard" id="kol-${esc(k.name.replace(/[^\w]+/g, "_"))}">
        <div class="kh"><h3>${esc(k.name)}</h3>${langTag(k.lang)}${k.url ? `<a class="tag" href="${esc(k.url)}" target="_blank" rel="noopener">${esc(k.handle || "頻道")}</a>` : ""}</div>
        <p class="note" style="margin:0">${k.focus}</p>
        <p style="margin:4px 0 0">${k.why}</p>
        <div class="chips" style="margin-top:8px">${k.labs.map(chip.lab).join("")}</div>
        ${mine.length ? `<ul class="klist">${mine.map((v) => `<li><a href="${esc(v.url)}" target="_blank" rel="noopener">▶ ${esc(v.name)}</a> <span class="note">L${v.labs.join(" L")}</span></li>`).join("")}</ul>` : ""}
      </article>`;
    };
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L5 案例與參考", "#refs"], ["影片與 KOL"]])}
      <div class="eyebrow">Layer 5 · Video demos</div>
      <h1>YouTube KOL 與影片示範</h1>
      <p class="lede">看真人一步步操作，比讀文件快。這裡收錄專門教 AI 工具應用的創作者，以及每個 Lab 可以先看的示範影片，並寫明你會看到什麼、為什麼適合這題。</p>
      <h2>依 Lab 看影片 <small>${vids.length} 支</small></h2>
      <div class="tbl-wrap"><table><thead><tr><th>Lab</th><th>影片數</th><th>中文</th><th>KOL</th></tr></thead><tbody>${REAL_LABS
        .map((l) => {
          const vs = vids.filter((v) => v.labs.includes(l.id));
          return `<tr><td>${chip.lab(l.id)}</td><td class="count">${vs.length}</td><td class="count">${vs.filter((v) => v.lang !== "EN").length}</td><td>${[...new Set(vs.map((v) => v.kol))].map(esc).join("、")}</td></tr>`;
        })
        .join("")}</tbody></table></div>
      ${langs
        .map(([code, label]) => {
          const ks = KOLS.filter((k) => k.lang === code);
          return ks.length ? `<h2>${label} KOL <small>${ks.length} 位</small></h2><div class="kols">${ks.map(kolCard).join("")}</div>` : "";
        })
        .join("")}
      <div class="more" style="margin-top:20px"><button class="btn" data-preset='{"kind":"video"}'>在參考資料庫篩選全部影片</button></div>`;
  }

  // ---------- reference library ----------
  const filter = { cats: new Set(), pats: new Set(), labs: new Set(), lang: "all", kind: "all", verified: false, q: "" };

  function applyPreset(p) {
    filter.cats = new Set(p.cat ? [p.cat] : []);
    filter.pats = new Set(p.pat ? [p.pat] : []);
    filter.labs = new Set(p.labs || []);
    filter.lang = "all"; filter.kind = p.kind || "all"; filter.verified = false; filter.q = "";
  }

  function viewRefs() {
    $view.innerHTML = `
      ${crumb([["總覽", "#home"], ["L5 案例與參考"]])}
      <div class="eyebrow">Layer 5</div>
      <h1>案例與參考資料庫</h1>
      <p class="lede">收錄別人已經整合好的專案、基礎工具、官方資源與商業產品。用階層篩選：先選類別或 Pattern，再選 Lab，最後挑語言。</p>
      <h2>案例分析 <small>用模板拆解過的代表案例</small></h2>
      <div class="cards">${D.analyses
        .map((c) => `<a class="card t-case" href="#case-${c.id}"><div class="h"><b>${esc(c.title)}</b></div>
          <div class="chips">${c.cats.map((x) => `<span class="chip t-cat"><b>${x}</b></span>`).join("")}${c.pats.map((x) => `<span class="chip t-pat"><b>${x}</b></span>`).join("")}${c.labs.map((x) => `<span class="chip t-lab"><b>L${x}</b></span>`).join("")}</div>
          <p>${strip(c.problem)}</p></a>`)
        .join("")}</div>
      <h2>影片示範 <small>YouTube KOL 實際操作</small></h2>
      <p><a class="btn" href="#kols" style="text-decoration:none;display:inline-block">前往 KOL 名錄與各 Lab 影片（${D.refs.filter((r) => r.kind === "video").length} 支）</a></p>
      <h2>參考資料庫</h2>
      <div class="filters" id="filters"></div>
      <div class="count" id="refCount"></div>
      <div class="reflist" id="refList" style="margin-top:8px"></div>`;
    renderFilters();
    renderRefList();
  }

  function renderFilters() {
    const btn = (group, val, label, cls, on) =>
      `<button class="fbtn ${cls}" data-g="${group}" data-v="${val}" aria-pressed="${on}">${label}</button>`;
    document.getElementById("filters").innerHTML = `
      <div class="frow"><label class="h">L1 類別</label>${D.cats.map((c) => btn("cats", c.id, `<b>${c.id}</b>${esc(c.zh)}`, "t-cat", filter.cats.has(c.id))).join("")}</div>
      <div class="frow"><label class="h">L2 Pattern</label>${D.patterns.map((p) => btn("pats", p.id, `<b>${p.id}</b>${esc(p.name)}`, "t-pat", filter.pats.has(p.id))).join("")}</div>
      <div class="frow"><label class="h">L4 Lab</label>${D.labs.filter((l) => l.id !== "CP").map((l) => btn("labs", l.id, `<b>L${l.id}</b>`, "t-lab", filter.labs.has(l.id))).join("")}</div>
      <div class="frow"><label class="h">語言</label>${[["all", "全部"], ["ZH", "中文（含繁中）"], ["ZH-TW", "繁中"], ["EN", "英文"]].map(([v, t]) => btn("lang", v, t, "", filter.lang === v)).join("")}</div>
      <div class="frow"><label class="h">類型</label>${[["all", "全部"], ...Object.entries(KIND)].map(([v, t]) => btn("kind", v, t, "", filter.kind === v)).join("")}
        ${btn("verified", "1", "只看已確認 ✔", "", filter.verified)}</div>
      <div class="frow"><label class="h" for="refQ">搜尋</label><input class="search" id="refQ" type="search" placeholder="例如：Blender、剪映、LINE、KOL 名稱" value="${esc(filter.q)}">
        <button class="fbtn" data-g="reset" data-v="1">清除篩選</button></div>
      <p class="note" style="margin:0">同一層內為「或」，不同層之間為「且」。</p>`;
    const box = document.getElementById("filters");
    box.querySelectorAll(".fbtn").forEach((b) =>
      b.addEventListener("click", () => {
        const g = b.dataset.g, v = b.dataset.v;
        if (g === "reset") applyPreset({});
        else if (g === "lang" || g === "kind") filter[g] = v;
        else if (g === "verified") filter.verified = !filter.verified;
        else filter[g].has(v) ? filter[g].delete(v) : filter[g].add(v);
        renderFilters();
        renderRefList();
      })
    );
    const q = document.getElementById("refQ");
    q.addEventListener("input", () => {
      filter.q = q.value;
      renderRefList();
    });
  }

  function renderRefList() {
    const q = filter.q.trim().toLowerCase();
    const list = D.refs.filter((r) =>
      (!filter.cats.size || r.cats.some((c) => filter.cats.has(c))) &&
      (!filter.pats.size || r.patterns.some((p) => filter.pats.has(p))) &&
      (!filter.labs.size || r.labs.some((l) => filter.labs.has(l))) &&
      (filter.lang === "all" || (filter.lang === "ZH" ? r.lang.startsWith("ZH") : r.lang === filter.lang)) &&
      (filter.kind === "all" || r.kind === filter.kind) &&
      (!filter.verified || !r.partial) &&
      (!q || (r.name + " " + strip(r.desc) + " " + (r.kol || "") + " " + r.url).toLowerCase().includes(q))
    );
    document.getElementById("refCount").textContent = `符合 ${list.length} / ${D.refs.length} 筆`;
    document.getElementById("refList").innerHTML = list.length ? list.map(refItem).join("") : `<p class="note">沒有符合的資料，試著移除一些篩選條件。</p>`;
  }

  // ---------- router ----------
  function route() {
    const hash = location.hash || "#home";
    const [kind, ...rest] = hash.slice(1).split("-");
    const arg = rest.join("-");
    const views = {
      home: viewHome, cats: viewCats, patterns: viewPatterns, traits: viewTraits, composite: viewComposite,
      labs: viewLabs, domains: viewDomains, refs: viewRefs, kols: viewKols,
    };
    if (kind === "cat" && CAT[arg]) viewCat(arg);
    else if (kind === "pat" && PAT[arg]) viewPat(arg);
    else if (kind === "atom" && ATOM[arg]) viewAtom(arg);
    else if (kind === "lab" && LAB[arg]) viewLab(arg);
    else if (kind === "dom" && DOM[arg]) viewDom(arg);
    else if (kind === "case" && CASE[arg]) viewCase(arg);
    else (views[kind] || viewHome)();
    markActive(hash);
    $tree.classList.remove("open");
    document.getElementById("menuBtn").setAttribute("aria-expanded", "false");
    window.scrollTo(0, 0);
  }

  // Preset buttons hand a filter to the library view.
  $view.addEventListener("click", (e) => {
    const b = e.target.closest("[data-preset]");
    if (!b) return;
    applyPreset(JSON.parse(b.dataset.preset));
    if (location.hash === "#refs") route();
    else location.hash = "refs";
  });

  document.getElementById("menuBtn").addEventListener("click", (e) => {
    const open = $tree.classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", String(open));
  });

  buildTree();
  window.addEventListener("hashchange", route);
  route();
})();
