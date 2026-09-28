# Lab 05｜期末週紓壓小遊戲

> **一句話任務**：做一個「期末週讀書讀到崩潰時可以玩 1 分鐘」的瀏覽器小遊戲。程式讓 Coding Agent 寫，美術與音效讓生成模型做，你是遊戲製作人。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| D Software + C Generative Media | P3 Code + P1 Generate + P4 Tool Use | ★★★ | 3–4 小時 |

---

## 1. 為什麼做這件事

遊戲是最能展示「Pattern 組合」的題目，因為一個遊戲同時需要：

| 需要什麼 | 用哪個 Pattern |
|---|---|
| 遊戲邏輯、碰撞、計分 | P3 Code & Build |
| 角色、背景、道具圖 | P1 Generate |
| 音效、背景音樂 | P1 Generate |
| Agent 一邊寫程式一邊呼叫生成服務 | P4 Tool Use |
| Agent 打開瀏覽器自己玩玩看 | P6 Observe–Act |

而且題目限定在 **「一個按鍵就能玩」、「1 分鐘一局」**，範圍小到一個下午做得完。

做完你會懂：

- 為什麼要「每一步都能玩」地推進（Playable Milestones），而不是一次叫 Agent 做完整遊戲
- AI 在「機制」上很強，但在「手感」和「美術一致性」上很弱
- 好不好玩這件事，目前只有人類能驗收

> 參考數據：有評測指出 AI 做遊戲在機制正確性表現較好，而美術與打磨是弱項（見下方掘金文章）。

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 紓壓小遊戲 | 休閒遊戲、廣告試玩（Playable Ads） |
| 一鍵玩法 | 超休閒遊戲（Hyper-casual）原型 |
| 生成美術資產 | 遊戲美術原型、概念設計 |
| 可玩里程碑 | 敏捷開發、Game Jam |

市場上的例子：Higgsfield 官方示範用 Claude + Higgsfield MCP 的 Game Studio，由 Claude 設計與寫程式、Higgsfield 生成並託管資產（[官方文章](https://higgsfield.ai/blog/Higgsfield-Games)）。

## 3. Pattern 分析

```text
遊戲概念（你寫一頁 GAME.md）
  → 里程碑 1：方塊人可以動            ← P3
  → 里程碑 2：有障礙物、會死、會計分   ← P3
  → 里程碑 3：換成生成的美術           ← P1 + P4
  → 里程碑 4：音效、手感、難度曲線     ← P1 + 人工試玩
  → [Verification] 每個里程碑：Agent 用 Playwright 開瀏覽器試玩截圖 + 你親自玩
  → 部署到 GitHub Pages / itch.io
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 狀態／互動 | **高** | 遊戲迴圈、輸入、碰撞 |
| 視覺品質 | 高 | 統一美術風格（像素風最容易一致） |
| 正確性 | 中 | 可測試：會死、會計分、能重來 |
| 人工驗收成本 | 高 | 「好不好玩」只能人玩 |

## 4. 交付物與驗收標準

**交付物**：一個可以在瀏覽器玩的網址 + GitHub Repo（含 `GAME.md`、生成素材的 prompt 紀錄）。

**遊戲題材建議**（選一個或自己想）：

- **拍掉截止期限**：從畫面上方掉下來的「報告」「考試」，點一下拍掉
- **咖啡續命**：一鍵跳躍，吃咖啡加速、躲開睡意雲
- **貓咪陪讀**：摸貓紓壓，貓的心情值決定分數
- **泡泡紙**：純粹的戳泡泡，加上連擊與音效

**驗收標準**：

1. 一個按鍵（或點擊）就能玩，第一次玩的人 5 秒內懂怎麼玩
2. 一局 30–90 秒，有分數、有結束畫面、可以重來
3. 至少 3 個生成的美術素材 + 2 個音效，風格一致
4. 手機瀏覽器可以玩（觸控）
5. 請 5 位同學試玩，記錄「是否想再玩一局」

## 5. 建議路線

### 步驟 1：寫 GAME.md

```markdown
# 咖啡續命
## 一句話
一鍵跳躍的跑酷遊戲，吃咖啡加速、躲開睡意雲，撐到天亮。
## 核心迴圈
按空白鍵/點螢幕跳躍 → 躲障礙 → 吃咖啡 → 分數增加 → 碰到睡意雲結束
## 美術方向
16-bit 像素風，暖色系，夜晚到清晨的背景變化
## 技術
Phaser 3，單一 HTML 頁面，部署到 GitHub Pages
```

### 步驟 2：用里程碑推進

每一步都叫 Agent 做完 → 啟動 → 用瀏覽器試玩截圖 → 你也玩一次 → 才進下一步。

```text
里程碑 1：用方塊代替所有美術，做出能跳、會掉下來、按鍵有反應的角色。
完成後用 Playwright 開啟頁面、模擬按鍵 3 次並截圖，確認角色有跳。
```

### 步驟 3：生成美術與音效

- 圖像：用任何生圖工具，**固定同一段風格描述**，每個素材都加上
- 若使用 Higgsfield MCP 或其他生成 MCP，可以讓 Agent 直接生成並放進 `assets/`
- 把所有 prompt 存在 `assets/PROMPTS.md`

### 延伸挑戰

- **排行榜**：用 Supabase 或 Firebase 存分數
- **可配置**：把難度參數抽成 JSON，讓非工程師也能調手感
- **一鍵量產**：參考 abagames 的專案，讓 Agent 一次做 5 款一鍵遊戲，大家票選最好玩的

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [Phaser 官方：用 Claude Code 做 2D 射擊遊戲](https://phaser.io/news/2026/02/phaser-claude-code-tutorial) | 英文 | Phaser + Claude Code + 免費像素素材 + Vercel | **以可玩里程碑推進**（波次、道具、Boss、畫面震動），範圍最接近本題 |
| [claude-one-button-game-creation](https://github.com/abagames/claude-one-button-game-creation) | 英文 | Claude + crisp-game-lib + Playwright + AGENTS.md | Agent 一次生成 10 款一鍵遊戲、用瀏覽器確認能跑再發布，**完整的 Agent 工作流 Repo** |
| [OpenAI：用 Codex 做瀏覽器遊戲](https://learn.chatgpt.com/use-cases/browser-games) | 英文 | Codex + ImageGen + Playwright + Phaser | PLAN.md → AGENTS.md → 開發 → 生成美術（保存 prompt）→ Agent 試玩 |
| [awesome-ai-built-games](https://github.com/lappemic/awesome-ai-built-games) | 英文 | Claude Code / Codex / Three.js / Godot | AI 做的遊戲清單，含 Vibe Jam 2026 得獎作品，可以直接玩 |
| [openai/gpt-5-coding-examples](https://github.com/openai/gpt-5-coding-examples) | 英文 | 單一 prompt | 每個遊戲都附產生它的 prompt，可以拿來改 |
| [MindStudio：1 小時用 Codex /goal 做遊戲](https://www.mindstudio.ai/blog/alex-finn-codex-goal-command-video-game-build) | 英文 | Codex + 生圖 | 展示美術在 Agent 迴圈中生成 |
| [SegmentFault：Claude Code 遊戲開發入門 2026](https://segmentfault.com/a/1190000048011168) | 中文 | Claude Code + HTML5 | 中文逐步教學：/init → 框架 → 核心迴圈 → UI → 除錯 |
| [掘金：Claude Code 給我做了個遊戲，跑起來我沉默了](https://juejin.cn/post/7653097416624652314) | 中文 | Claude Code + Godot | 誠實的反例，討論 AI 做遊戲的極限，適合課堂討論 |
| [claude-code-dungeon-master（iThome 鐵人賽）](https://github.com/harry18456/claude-code-dungeon-master) | 中文（繁中） | Claude Code + CLAUDE.md + hooks + skills | 30 天系列，示範 CLAUDE.md、hooks、skills 的實際用法（CLI 遊戲） |

### 影片示範：先看真人怎麼做

共 6 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [【 Vibe Coding 快速上手 20+ 堂課 】01、認識 Vibe Coding：程式不再是拼邏輯，而是拼「感覺」](https://www.youtube.com/watch?v=GO7U-WR6TOQ)（STEAM 教育學習網（OXXOSTUDIO），ZH-TW）：中文背景知識；目前沒找到完整的中文做遊戲示範，以此替代
- [Full Tutorial: Zero to Shipped Game with Claude Code in 20 Minutes](https://www.youtube.com/watch?v=247Z3jdw_hs)（Peter Yang，EN）：20 分鐘從零到可玩，一堂課剛好看完

## 7. Showcase

| 組別 | 遊戲名稱 | 網址 | 5 人中想再玩的人數 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
