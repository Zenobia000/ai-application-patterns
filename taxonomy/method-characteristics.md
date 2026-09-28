# Method Characteristics：六種底層方法群

> 應用類別（A–G）描述「要解什麼問題」；方法群（P1–P6）描述「用什麼方式解」。
> 工具會換，這六種方法的結構不太會變。

---

## 1. 六種方法群

| Pattern | 底層方法 | 適合問題 | 代表例子 | 詳細說明 |
|---|---|---|---|---|
| **P1 Generate** | Prompt → Model → Artifact | 創意、多媒體 | Image / Video / Audio / 3D 生成 | [patterns/generative-media](../patterns/generative-media/) |
| **P2 Retrieve & Reason** | Context → LLM → Answer | 文件、知識、分析 | RAG、Deep Research | [patterns/knowledge-reasoning](../patterns/knowledge-reasoning/) |
| **P3 Code & Build** | Requirement → Agent → Code → Runtime | 網站、App、遊戲 | Claude Code、Codex | [patterns/coding-agent](../patterns/coding-agent/) |
| **P4 Tool Use** | Agent → API/MCP → Tool | 專業工具操作 | Blender MCP、Higgsfield MCP | [patterns/tool-use-mcp](../patterns/tool-use-mcp/) |
| **P5 Workflow Orchestration** | Trigger → Agent/Rules → Multiple Tools | 企業流程、自動化 | n8n、Zapier | [patterns/workflow-agent](../patterns/workflow-agent/) |
| **P6 Observe–Act Loop** | Screenshot/State → Reason → Action → Verify | 瀏覽器、桌面、編輯器 | Computer Use Agent | [patterns/computer-use](../patterns/computer-use/) |

---

## 2. 方法特性比較

| 方法特性 | P1 Generate | P2 Retrieve | P3 Code | P4 Tool Use | P5 Workflow | P6 Observe–Act |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| 輸出是否可重現 | 低 | 中 | 高 | 高 | 高 | 中 |
| 能否自動驗證 | 難 | 中（引用） | 易（測試） | 中（查狀態） | 易（規則） | 中（截圖） |
| 需要外部系統 | 生成服務 | 資料來源 | 執行環境 | 目標軟體 | 多個 SaaS | GUI / 瀏覽器 |
| 單次成本 | 中–高 | 低–中 | 中 | 中 | 低 | 高（多輪截圖） |
| 失敗模式 | 品質不穩、不一致 | 幻覺、找錯資料 | 邏輯錯、跑不起來 | 參數錯、權限不足 | 流程斷掉、格式不符 | 點錯、卡住、頁面改版 |
| 入門門檻 | 低 | 中 | 中 | 中 | 低–中 | 中–高 |

---

## 3. 方法 × 問題特性：什麼時候選哪個

| 如果問題的主要特性是… | 優先考慮 | 原因 |
|---|---|---|
| 高視覺品質、主觀判斷 | P1 + 人工挑選 | 生成模型擅長創造，驗收交給人 |
| 大量文件、正確性重要 | P2 | 先取回正確 Context 再推理，並附引用 |
| 需要可執行、有邏輯的成果 | P3 | 程式碼可測試、可版本控制 |
| 專業軟體裡的操作 | P4 | 用 API/MCP 直接操作，比點畫面穩定 |
| 重複、跨系統、每天都要跑 | P5 | 固定流程可重跑、可監控 |
| 沒有 API、只能點畫面 | P6 | 最後手段：像人一樣看螢幕操作 |

**經驗法則**：能用 P4（API/MCP）就不要用 P6（點畫面）；能用 P5（固定流程）就不要讓 Agent 每次自由發揮。越確定的步驟，越該交給確定的機制。

---

## 4. 市場最大的變化：P3–P6 正在融合

以前：

> AI 幫你產文字。

現在：

> AI 看懂任務 → 寫程式 → 呼叫服務 → 操作軟體 → 看結果 → 自己修正。

具體例子：

- **Claude Code / Codex**：P3 為主，但會透過 MCP（P4）呼叫外部服務，也能開瀏覽器截圖自我檢查（P6）。
- **Blender MCP**：P4 為主，Agent 會寫 Python（P3）操作 Blender，並截圖檢查結果（P6）。
- **n8n Agents**：P5 為骨架，但節點可以是 Agent，Agent 又能呼叫其他 Workflow 當工具（P4）。
- **Higgsfield MCP**：P1 的生成能力被包成 P4 的工具，讓 Coding Agent 一邊寫遊戲一邊生素材。

所以教學重點是：**學生要能拆解一個系統裡的 Pattern 組合，而不是背熟某個工具的按鈕。**

---

## 5. Pattern 組合速查

| 想做的事 | Pattern 組合 | 對應工作坊 |
|---|---|---|
| 校園規章問答 | P2 | [Lab 01](../labs/lab-01-campus-qa/) |
| 咖啡店 AI 店員 | P2 + P4 | [Lab 02](../labs/lab-02-cafe-agent/) |
| 小店短影音廣告 | P1 + P4 (+ P5) | [Lab 03](../labs/lab-03-shop-video-ad/) |
| 社團招生網站 | P3 (+ P6 截圖驗證) | [Lab 04](../labs/lab-04-club-landing-page/) |
| 期末紓壓小遊戲 | P3 + P1 + P4 | [Lab 05](../labs/lab-05-stress-relief-game/) |
| 宿舍房間 3D 佈置 | P4 + P3 + P6 | [Lab 06](../labs/lab-06-dorm-room-3d/) |
| 每週機會情報站 | P5 + P2 | [Lab 07](../labs/lab-07-weekly-opportunity-digest/) |
| 校園活動行事曆代理 | P6 + P4 | [Lab 08](../labs/lab-08-campus-event-agent/) |
| 吉祥物：圖 → 3D → 遊戲 | P1 + P4 + P3 + P6 | [Lab 09](../labs/lab-09-mascot-image-to-3d-game/) |
| 活動錄影 AI 剪輯 | P2 + P3 + P4 | [Lab 10](../labs/lab-10-event-highlight-editing/) |
| Blender 預演 → AI 影片 | P4 + P6 + P1 + P3 | [Lab 11](../labs/lab-11-blender-previz-to-ai-video/) |

複合式管線如何拆成原子能力與交接物，見 [composite-pipelines.md](composite-pipelines.md)。
