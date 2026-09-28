# P5 Workflow Orchestration：流程編排

```text
Trigger（排程 / 事件 / Webhook）→ 固定步驟 + AI 節點 → 多個外部系統 → 結果與通知
```

## 1. 它在做什麼

把跨系統的重複工作串成一條可以自動執行、可以重跑、可以監控的流程。代表工具：n8n、Zapier、Make。

傳統自動化只能處理 **結構化資料**（「表單欄位 A 寫到表格欄位 B」）。加入 LLM 之後，流程可以處理 **非結構化輸入**：看懂一封 email、分類一則公告、從 PDF 抽出欄位。

> **把非結構化理解能力插入傳統 Automation**，是目前最實用、最容易產生價值的 AI 應用之一。

## 2. Workflow vs Agent

| | Workflow（固定流程） | Agent（自主決定） |
|---|---|---|
| 誰決定下一步 | 你事先畫好 | 模型當下判斷 |
| 可預測性 | 高 | 中 |
| 彈性 | 低 | 高 |
| 除錯 | 容易（看哪個節點失敗） | 較難 |
| 適合 | 步驟固定、每天重複 | 步驟不固定、需要判斷 |

兩者正在融合：n8n 在 2026-09-25 推出 **n8n Agents**（preview），Agent 可以把既有 workflow、n8n 整合、MCP server 當工具使用，同時 workflow 也能呼叫 Agent；敏感動作可設定人工核准（[官方公告](https://blog.n8n.io/introducing-n8n-agents/)）。Zapier Agents 則連接 9,000+ 個 App（[官方頁面](https://zapier.com/agents)）。

**經驗法則**：能畫成流程圖的就用 Workflow；只有「判斷」那一格交給 AI。

## 3. 常見失敗模式

| 失敗 | 原因 | 對策 |
|---|---|---|
| 重複寫入 | 沒有去重 | 以唯一鍵（網址、ID）比對 |
| 一個來源壞掉整條停 | 沒有錯誤處理 | 每個分支 continue on fail + 註記 |
| AI 輸出格式亂掉 | 沒有 schema | Structured output + 格式驗證節點 |
| 成本失控 | 每次都丟全文給 LLM | 先用規則過濾，只把需要理解的丟給 AI |

## 4. 驗證方法

1. 連續執行兩次，檢查冪等性（不重複、不遺漏）
2. 故意弄壞一個輸入，看流程是否優雅處理
3. 抽查 AI 節點的輸出（前幾週全查，之後抽查）
4. 看執行紀錄：每次花多久、多少錢

## 5. 暖身題：每天早上的天氣穿搭提醒（30 分鐘）

> 用 n8n 做：每天 07:00 → 取得學校所在地的天氣預報（中央氣象署開放資料或任何天氣 API）→ LLM 根據溫度、降雨機率寫一句穿搭與帶傘建議 → 發到 Discord / Email。

**你會學到**：Trigger、HTTP 請求、AI 節點、通知節點，這四個是所有 Workflow 的基本積木。

**驗收**：手動觸發一次成功；改成隔天自動收到。

## 6. 對應 Lab

- [Lab 07 每週機會情報站](../../labs/lab-07-weekly-opportunity-digest/)
- [Lab 03 小店短影音](../../labs/lab-03-shop-video-ad/)（路線 C：批次化）

## 7. 延伸閱讀

- [n8n workflow 範本庫](https://n8n.io/workflows/)
- [awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates)
- [n8n：自動分類求職信件](https://n8n.io/workflows/15299-automatic-workflow-to-categorise-your-job-status)（規則 + LLM 互補的範例）
