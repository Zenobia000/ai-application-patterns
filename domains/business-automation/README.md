# Domain：Business Automation 流程自動化

[← Domains 總覽](../) ｜ 用到的 Pattern：[P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P5 Workflow](../../patterns/workflow-agent/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

把跨系統、重複、耗時的工作串成自動流程：行銷排程、報表、CRM 更新、Email 分流、資料整理。

傳統自動化（Zapier、IFTTT、RPA）的限制是只能處理結構化資料。LLM 讓自動化流程第一次能夠 **看懂** email、公告、PDF、客戶留言。

> **把非結構化理解能力插入傳統 Automation**，是目前投資報酬率最高、最值得教的 AI 應用之一。

市場現況：

- **n8n Agents**（2026-09-25 推出，preview）：用自然語言描述 Agent 要做什麼，指定模型與可用工具（MCP server、n8n 整合、既有 workflow），由 Agent 自行決定步驟；workflow 也能反過來把 Agent 當節點；支援跨 session 記憶、敏感動作人工核准、sub-agents（[官方公告](https://blog.n8n.io/introducing-n8n-agents/)）
- **Zapier Agents**：把 Agent 接到 9,000+ 個 SaaS App 與企業資料（[官方頁面](https://zapier.com/agents)），並透過 [Zapier MCP](https://zapier.com/mcp) 開放給其他 AI 工具

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 可靠性 | 每天都要跑，不能三天兩頭壞掉 |
| 冪等性 | 重跑不能重複寫入 |
| 錯誤處理 | 一個來源壞掉不能拖垮整條流程 |
| 格式變動 | 來源網頁改版、Email 格式變了 |
| 權限 | 讀誰的信、寫誰的表 |
| 成本 | 每天丟全文給 LLM 會很貴 |

**關鍵做法**：固定步驟用規則；只有「理解」交給 AI；AI 輸出一定要有 schema 與驗證。

## 3. Pattern 組合

| 階段 | Pattern |
|---|---|
| 排程、串接、去重、寫入 | P5 |
| 分類、抽取、摘要 | P2 |
| 呼叫外部服務 | P4 |
| 沒有 API 的來源 | P6（最後手段） |

## 4. 工作坊題目

**主題目**：[Lab 07 每週機會情報站](../../labs/lab-07-weekly-opportunity-digest/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **社團財務報帳小幫手** | 社員把收據照片丟到 Google 表單或 Discord，AI 讀取金額、日期、品項，自動整理成報帳表，金額超過門檻通知社長 | 圖片理解（OCR）、數字驗證、人工核准 |
| **租屋資訊整理** | 每天從公開租屋資訊整理符合條件（預算、距離、可否養寵物）的物件並推播 | 條件篩選、去重、尊重網站使用條款 |

## 5. 放大到真實世界

Email 分流、發票與報帳自動化、CRM 資料更新、競品與輿情監控、行銷內容排程、HR 履歷初篩。

## 6. 參考

見 [Lab 07 參考專案](../../labs/lab-07-weekly-opportunity-digest/#6-參考專案)。
