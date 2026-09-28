# Domain：Game 遊戲

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

遊戲是 **Software + Media + Agent orchestration** 的交叉題：

| 遊戲的組成 | 對應 |
|---|---|
| 遊戲邏輯、物理、碰撞、狀態 | 軟體（P3） |
| 角色、場景、UI 美術 | 生成媒體（P1） |
| 音效、音樂 | 生成媒體（P1） |
| 協調以上所有東西 | Agent 呼叫工具（P4） |
| 試玩與調整手感 | 觀察→行動（P6）+ 人類 |

所以遊戲很適合當課程題目：學生一次會看到 **Code + Visual Asset + Audio + Interaction + Agent**。

市場現況：

- Higgsfield 官方示範 Claude + Higgsfield MCP 的 **Game Studio**：Claude 負責設計與寫程式，Higgsfield 負責生成資產並託管遊戲（[官方文章](https://higgsfield.ai/blog/Higgsfield-Games)）
- OpenAI 官方有「用 Codex 做瀏覽器遊戲」的使用案例：PLAN.md → AGENTS.md → 開發 → 生成美術 → Playwright 試玩（[連結](https://learn.chatgpt.com/use-cases/browser-games)）
- Vibe Jam 等 AI 遊戲比賽已經有大量作品，可以直接玩（見 [awesome-ai-built-games](https://github.com/lappemic/awesome-ai-built-games)）

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 手感（Game Feel） | 跳躍高度、速度、打擊感：只能人玩才知道 |
| 美術一致性 | 每張圖分開生成，風格會漂移 |
| 範圍失控 | 「做一個 RPG」→ 永遠做不完 |
| 好不好玩 | 目前沒有任何自動驗證方法 |

**關鍵做法**：限定範圍（一鍵玩法、一分鐘一局）；以 **可玩里程碑** 推進；固定美術風格描述。

## 3. 工作坊題目

**主題目**：[Lab 05 期末週紓壓小遊戲](../../labs/lab-05-stress-relief-game/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **校園知識問答遊戲** | 迎新活動用：「圖書館幾樓有自習室？」答對前進，題庫從 Lab 01 的資料產生 | 結合 P2 產生題庫、題目正確性驗證 |
| **新生認路小遊戲** | 俯視校園地圖，限時找到指定建築 | 地圖素材生成、關卡設計 |

## 4. 放大到真實世界

休閒遊戲原型、廣告試玩（Playable Ads）、教育遊戲、企業培訓遊戲化、Game Jam。

## 5. 參考

見 [Lab 05 參考專案](../../labs/lab-05-stress-relief-game/#6-參考專案)。
