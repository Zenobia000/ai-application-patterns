# site/：視覺化網站

把整個 Repo 的分類法、Pattern、原子能力、Labs、領域、案例分析、參考資料與 YouTube 影片示範，整理成一個五層階層、互相連結的網站。

- **線上版**：<https://claude.ai/artifact/9qDiN5FWn5WDu4SjUKQje5>（私人連結，需從頁面 Share 選單分享）
- **本機版**：直接用瀏覽器開啟 `site/index.html`，不需要伺服器

## 檔案

| 檔案 | 用途 | 要不要手改 |
|---|---|---|
| `index.html` | 版面與樣式 | 改外觀時才動 |
| `app.js` | 路由、各層頁面、關係圖、篩選 | 加新頁面或新互動時才動 |
| `build_data.py` | 從 Markdown 解析內容與關聯，產生 `data.js` | 新增 Lab / 領域 / 案例分析時要更新開頭的對照表 |
| `data.js` | **自動產生**，不要手改 | 否 |

## 內容從哪裡來

Markdown 是唯一的內容來源，網站只負責呈現與連結：

| 網站內容 | 來源檔案 |
|---|---|
| 七大類別、公式、組合案例 | `taxonomy/application-landscape.md` |
| 問題特性矩陣 | `taxonomy/problem-characteristics.md` |
| Pattern 比較與選擇 | `taxonomy/method-characteristics.md` + `patterns/*/README.md` |
| 原子能力、交接、黏著層、L0–L4 | `taxonomy/composite-pipelines.md` |
| Labs | `labs/README.md` + `labs/*/README.md` |
| 領域 | `domains/*/README.md` |
| 案例分析 | `case-studies/*.md` |
| 參考資料庫 | 各 Lab 的「參考專案」、`case-studies/README.md`、`market-landscape/`、`open-source/` |
| YouTube 影片與 KOL | `case-studies/videos.md` |

只寫在文字裡的關聯（例如類別用哪些 Pattern、Lab 用到哪些原子能力、案例分析對應哪個 Lab），定義在 `build_data.py` 開頭的 `CAT_PATTERNS`、`LAB_META`、`DOMAIN_META`、`ANALYSES`。

## 更新流程

```bash
# 1. 改 Markdown
# 2. 重新產生資料
python3 site/build_data.py
# 3. 本機檢查：開啟 site/index.html
# 4. 要更新線上版時，產生可發布版本（去掉 <html>/<head> 外殼）
python3 site/build_data.py --dist /tmp/aap-site
```

第 4 步的輸出再用 Claude Code 的 Artifact 發布到同一個網址（在對話中提供上面的線上版網址即可）。

## 五層階層

```text
L1 應用類別 (A–G)  →  L2 Pattern (P1–P6)  →  L3 原子能力 (V/M/C)  →  L4 Labs  →  L5 案例、參考、影片
```

每個概念頁都會列出「往上屬於誰、往下衍生什麼」，以及可以選擇的參考資料。
