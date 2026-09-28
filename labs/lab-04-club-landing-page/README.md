# Lab 04｜社團招生 Landing Page

> **一句話任務**：幫你的社團（或系學會、讀書會、樂團）做一個招生網頁：有社團介紹、活動照片、常見問題、報名表單，**上線並拿到一個可以貼到 IG 的網址**。全程讓 Coding Agent 寫程式，你負責當「產品經理」。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| D Software & Interactive Experience | P3 Code & Build（+ P6 截圖驗證） | ★★ | 2–3 小時 |

---

## 1. 為什麼做這件事

每年開學社團博覽會，大家都在發傳單、建 Google 表單、IG 放限動。一個像樣的招生網頁以前要找會寫網頁的同學幫忙，現在你可以自己來。

但這個 Lab 的重點不是「AI 會寫網頁」（大家都知道了），而是：

> **你怎麼把「我想要一個好看的招生頁」變成 Agent 能執行、而且你能驗收的任務？**

你會發現：

- 模糊的需求 → 模糊的網頁（而且都長得像：Inter 字體 + 紫色漸層）
- 好的 **Product Brief**（產品簡報）比任何 prompt 技巧都有用
- Agent 會說「完成了」，但你要自己開手機看，才知道按鈕根本按不到

做完你會懂：

- Coding Agent 的工作方式：讀需求 → 規劃 → 寫程式 → 執行 → 修正
- `CLAUDE.md` / `AGENTS.md` 這類「給 Agent 的專案說明書」的用途
- 從需求到部署的完整軟體流程：Brief → 設計 → 開發 → SEO → 部署

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 社團招生頁 | 產品 Landing Page、活動報名頁 |
| Product Brief | PRD（產品需求文件） |
| 報名表單 | 潛在客戶收集（Lead Generation） |
| 手機版檢查 | QA 測試、跨裝置相容 |
| OG 圖、SEO | 行銷與社群分享最佳化 |

市場上的變化：Framer 已經讓 Claude Code、Codex、Cursor 等外部 Agent 直接操作 canvas、元件與 CMS（[官方說明](https://www.framer.com/agents/external/)），並指出這種方式最適合結構化、可重複的任務，而非主觀的設計判斷。

## 3. Pattern 分析

```text
Product Brief（你寫）
  → [Model] Agent 規劃頁面結構與技術選型
  → [Tools] 建立專案、寫程式、安裝套件                ← P3
  → [Runtime] 本機啟動
  → [Verification] 開瀏覽器截圖（桌機 + 手機），對照驗收清單 ← P6
  → 修正 → 部署到 Vercel / Netlify / GitHub Pages
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 結構化輸出 | 高 | 程式碼、可版本控制 |
| 正確性 | 中 | 表單能送出、連結能點 → 可測試 |
| 視覺品質 | **高** | 用設計規範（DESIGN.md）限制風格 |
| 人工驗收成本 | 中 | Agent 自己截圖，人只看最後結果 |

## 4. 交付物與驗收標準

**交付物**：一個公開網址 + GitHub Repo（含你寫的 `BRIEF.md` 與 `CLAUDE.md`）。

**驗收標準**：

1. 包含：社團一句話介紹、3 個特色、活動照片、幹部介紹、FAQ（至少 5 題）、報名按鈕
2. 報名表單可以送出，資料會進到 Google Sheet / Netlify Forms / Formspree
3. 手機（寬 375px）瀏覽時沒有橫向捲動、按鈕可以點
4. 分享到 LINE / IG 時會出現正確的標題、描述、預覽圖（OG tags）
5. Lighthouse 分數：Performance ≥ 80、Accessibility ≥ 90
6. 請 3 位不是社員的同學看 10 秒，問他們「這個社團在做什麼」，至少 2 人答對

## 5. 建議路線

### 步驟 1：寫 Product Brief（最重要，花 30 分鐘）

建立 `BRIEF.md`：

```markdown
# 社團：XX 大學攝影社
## 目標
開學兩週內招到 40 位新社員。
## 目標對象
大一新生，對攝影有興趣但沒有相機。
## 他們的顧慮
- 沒有相機可以參加嗎？（可以，手機就行）
- 社費多少？每週要花多少時間？
## 核心訊息
「用手機就能開始，每週三晚上兩小時。」
## 語氣
輕鬆、有溫度，不要像官方公告。
## 必要內容
...
## 不要
- 不要紫色漸層、不要 Inter 字體
- 不要假的統計數字
```

### 步驟 2：交給 Coding Agent

```text
讀 BRIEF.md，用 Astro（或純 HTML + Tailwind）建立招生頁。
1. 先提出頁面結構與視覺方向（字體、配色、版型），等我確認再寫程式
2. 圖片先用 public/photos/ 裡的照片
3. 報名表單使用 Netlify Forms
4. 完成後用瀏覽器在 1440px 與 375px 各截一張圖，自己檢查排版問題並修正
5. 加上 OG tags、favicon、sitemap
6. 把專案慣例寫進 CLAUDE.md
```

> 若使用 Claude Code，可以啟用 Anthropic 的 [frontend-design skill](https://github.com/anthropics/skills/tree/main/skills/frontend-design)，它專門處理「AI 做的網頁都長一樣」的問題。

### 步驟 3：部署

推到 GitHub → 連接 Vercel / Netlify → 拿到網址 → 用手機實測。

### 延伸挑戰

- **CMS**：讓社團幹部不用寫程式也能改活動資訊（Notion 當 CMS、或 Framer CMS）
- **A/B 版本**：讓 Agent 做兩種不同風格，分別給 10 個人看，比較報名意願
- **多語**：加上英文版給交換學生

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [巨匠電腦：Claude Design + Claude Code 架站教學](https://www.pcschool.com.tw/blog/it-skill/claude-design-website-tutorial) | 中文（繁中） | Claude Design → Claude Code → Netlify Forms | **幾乎就是本題**：做一個有報名表單的活動頁 |
| [raven.tw：用 Claude Code 打造個人部落格](https://raven.tw/blog/claude-code-personal-blog-complete-guide/) | 中文（繁中） | Claude Code + Astro + Notion CMS + Cloudflare Pages | 完整涵蓋 CMS 與部署，含 skills 使用 |
| [awesome-claude-design：20 分鐘 Landing Page](https://github.com/rohitg00/awesome-claude-design/blob/main/recipes/landing-page-20-min.md) | 英文 | DESIGN.md → Claude Design → Claude Code → Vercel | 最接近「Brief → 頁面 → SEO → 部署」完整流程；用設計 token 避免千篇一律 |
| [DevPortfolio](https://github.com/amythnn/amythnn.github.io) | 英文 | Astro + Tailwind + TypeScript | 附真實的 `CLAUDE.md` 與 `.cursor/rules`，看別人怎麼寫給 Agent 的說明書 |
| [Auspia：用 Codex 做 SEO/GEO 網站](https://auspia.ai/blog/codex-create-seo-geo-website-prompt-deploy) | 英文 | Codex + Next/Astro + Vercel | SEO 與部署步驟最具體，附可複製的 prompt（title、schema、sitemap、llms.txt） |
| [iT 邦幫忙：個人網站改成雜誌風](https://ithelp.ithome.com.tw/articles/10400090) ◐ | 中文（繁中） | Claude Code + Vue 3 + Tailwind | 示範對既有網站做「改版」 |
| [知乎：frontend-design Skill 解決 AI 前端又醜又土](https://zhuanlan.zhihu.com/p/2003753772518753567) ◐ | 中文 | Claude Code + frontend-design | 前後對照，理解設計規範的影響 |

官方資源：

- [Anthropic：透過 Skills 改善前端設計](https://claude.com/blog/improving-frontend-design-through-skills)
- [Framer：外部 Agent](https://www.framer.com/agents/external/)、[設定 Claude Code / Codex / Cursor](https://www.framer.com/help/articles/how-to-set-up-framer-for-claude-code-codex-and-cursor/)

### 影片示範：先看真人怎麼做

共 5 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding, 動動嘴就能做出 Anything！](https://www.youtube.com/watch?v=2pM-7fBXc_M)（PAPAYA 電腦教室，ZH-TW）：零程式基礎的繁中入門起點
- [超強的 AI 前端設計師來了！Claude Design 跟你聊聊天就把網站設計出來，而且還貼心地幫你一鍵上線！](https://www.youtube.com/watch?v=JxaI6HK2onc)（PAPAYA 電腦教室，ZH-TW）：正好是本題「Brief → 網站 → 上線」的流程
- [Build & Deploy Apps with Claude Code + Vercel in 15 Minutes!](https://www.youtube.com/watch?v=oA7ttvBWSXg)（Josh Uses Ai，EN）：用 15 分鐘補齊「部署」這一步

## 7. Showcase

| 組別 | 社團 | 網址 | 10 秒測試答對人數 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
