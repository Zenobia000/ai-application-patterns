# Domain：Web 網站與 Landing Page

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

把「一個想法」變成「一個有網址、別人打得開的網頁」。典型需求：產品介紹、活動報名、作品集、內容網站。

市場已經從「AI 生成一段 HTML」演進到 **Agent 修改真正的網站專案**：

```text
Product Brief → Landing Page → Animation → CMS → SEO → Deploy
```

- **Coding Agent 路線**：Claude Code、Codex、Cursor 直接建立與修改程式碼專案，部署到 Vercel / Netlify / Cloudflare
- **設計工具 + 外部 Agent 路線**：Framer 讓 Claude Code、Codex、Cursor 等外部 Agent 操作 canvas、元件、CMS 與專案資料；Framer 自己指出這種方式最適合結構化、可重複的技術工作，而非主觀的設計判斷（[官方說明](https://www.framer.com/help/articles/what-you-can-do-with-local-agents/)）

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 需求模糊 | 「做一個好看的網站」→ Agent 會做出平均值 |
| 設計同質化 | AI 網頁常收斂到相同字體與漸層 → 需要設計規範 |
| 跨裝置 | 桌機看起來好，手機壞掉 |
| 內容維護 | 做完之後誰來更新？→ CMS |
| 驗收 | Agent 說完成 ≠ 真的完成 → 截圖、Lighthouse、真人測試 |

## 3. Pattern 組合

| 階段 | Pattern |
|---|---|
| 從 Brief 生成網站 | P3 |
| 生成主視覺、插圖 | P1 |
| 操作 Framer / CMS | P4 |
| 截圖檢查排版 | P6 |

## 4. 工作坊題目

**主題目**：[Lab 04 社團招生 Landing Page](../../labs/lab-04-club-landing-page/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **畢業展 / 期末成果展網站** | 每位同學一頁作品，資料來自一份 Google Sheet | 用 CMS / 資料驅動產生多頁 |
| **系學會活動頁** | 迎新、系烤、送舊，每學期都要換內容 | 讓非工程師的幹部能自己更新 |

## 5. 放大到真實世界

產品 Landing Page、活動報名系統、行銷活動頁、中小企業官網、SEO 內容網站。

## 6. 參考

見 [Lab 04 參考專案](../../labs/lab-04-club-landing-page/#6-參考專案)。
