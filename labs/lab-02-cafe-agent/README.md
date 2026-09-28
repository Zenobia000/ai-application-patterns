# Lab 02｜校園咖啡店 AI 店員

> **一句話任務**：幫學校附近的咖啡店（或系學會福利社）做一個 AI 店員：能回答菜單與營業問題、能把訂單寫進 Google Sheet、**遇到不確定或客訴時轉給真人**。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| B Conversational Agent | P2 Retrieve & Reason + P4 Tool Use | ★★★ | 3–4 小時 |

---

## 1. 為什麼做這件事

大家對「AI 客服」的印象是：問什麼都答非所問、最後還是要打電話。問題出在哪？

多數聊天機器人只做了 **Question → Answer**。真正有用的店員要做的是：

```text
Intent（他想做什麼？）→ Knowledge（菜單有什麼？）→ Decision（能不能做？）→ Action（下單）
```

這個 Lab 讓你親手做一次「AI 從回答變成做事」，並且面對它最麻煩的部分：

> **AI 可以說錯話，但不能下錯單。**

做完你會懂：

- Function Calling / Tool Use 是什麼：模型怎麼「呼叫」外部系統
- 為什麼要把 **「模型決定」和「系統執行」分開**（LLM 不能直接改訂單）
- 什麼時候該讓 AI 閉嘴、把客人交給人

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 咖啡店 AI 店員 | 電商客服、訂位系統、航空改票客服 |
| 寫入 Google Sheet 訂單 | 寫入 CRM、ERP、訂單系統 |
| 轉人工 | 客服升級流程（Escalation） |
| 菜單驗證 | 庫存檢查、價格規則、權限控管 |

市場上的例子：Intercom Fin 已經把同一個 Agent 延伸到客服、銷售、電商，並用「Procedures」執行退貨、追蹤訂單等業務流程（[官方說明](https://www.intercom.com/help/en/articles/12508017-fin-as-a-customer-agent-for-service-sales-and-more)）。

## 3. Pattern 分析

```text
客人訊息
  → [Model] 判斷意圖：問問題 / 點餐 / 客訴 / 閒聊
  → [Context] 查菜單與 FAQ（P2）
  → [Tools] add_to_cart / place_order / handoff_to_human（P4）
  → [Verification] 後端檢查品項存在、價格正確、數量合理，才寫入
  → 回覆客人並確認訂單
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 狀態／互動 | **高** | 多輪對話、購物車狀態 |
| 正確性 | **高** | 價格和品項不能錯 → 後端驗證 |
| 多工具整合 | 中 | 菜單查詢、下單、通知店員 |
| 可控性 | 高 | 下單前一定要跟客人確認一次 |

## 4. 交付物與驗收標準

**交付物**：一個可以對話的 Bot（網頁 / LINE / Discord 皆可）+ 一份 Google Sheet 訂單表 + 測試紀錄。

**驗收標準**：

1. 能回答菜單、價格、營業時間、有無燕麥奶等 FAQ（至少 8 題）
2. 能完成一筆多品項訂單：「兩杯冰拿鐵、一杯熱美式少糖，外帶」→ Sheet 出現正確的一列
3. **下單前會複述訂單並要求確認**
4. 點不存在的品項（「珍珠奶茶」）→ 婉拒並推薦類似品項，**不會寫入 Sheet**
5. 客訴或無法處理的請求（「上次的咖啡有頭髮」）→ 轉人工，並在 Sheet 或 Discord 通知店員
6. 至少 3 個「惡意測試」：試圖讓它打折、改價格、忽略指示 → 都不能成功

## 5. 建議路線

### 路線 A：零程式（n8n / Dify）

1. 在 Google Sheet 建立 `menu`（品名、價格、選項）與 `orders` 兩個分頁。
2. 用 n8n 的 AI Agent 節點或 Dify 工作流：
   - Webhook（LINE / 網頁）→ AI Agent（附 Memory）→ 工具：讀 `menu`、寫 `orders`、發通知
   - 加一個「問題分類器」節點，把客訴分支到轉人工
3. 參考下方「n8n LINE 客服」與「Dify 智能客服」教學。

### 路線 B：寫程式（Claude Code / Codex 協作）

任務描述範例：

```text
用 Python FastAPI 做一個咖啡店點餐 Agent：
- 菜單存在 menu.json；訂單寫入 Google Sheet（用 service account）
- 使用 Claude tool use，定義工具：search_menu, add_to_cart, show_cart, place_order, handoff_to_human
- place_order 由後端驗證：品項存在、價格以 menu.json 為準（忽略模型給的價格）、數量 1–10
- 下單前必須呼叫 show_cart 並取得使用者明確確認
- 提供網頁聊天介面；之後再接 LINE Messaging API
- 寫 tests/：正常點餐、不存在品項、改價格注入、客訴轉人工
```

### 延伸挑戰

- **LINE Bot 上線**：讓同學真的用 LINE 點餐
- **多 Agent**：分流 Agent → 點餐 Agent / FAQ Agent / 客訴 Agent（參考 OpenAI cs-agents-demo 的 handoff 設計）
- **圖片菜單**：客人傳一張照片問「這個有嗎？」

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [OpenAI Customer Service Agents Demo](https://github.com/openai/openai-cs-agents-demo) | 英文 | OpenAI Agents SDK + FastAPI + Next.js | 分流 Agent → 專責 Agent → 工具動作，畫面上看得到每次 handoff 與 guardrail，架構最完整 |
| [Anthropic Customer Support Agent](https://github.com/anthropics/claude-quickstarts/tree/main/customer-support-agent) | 英文 | Next.js + Claude + Bedrock Knowledge Base | 知識庫回答 + 情緒偵測 + 轉介人工，UI 顯示引用來源（需要 AWS 帳號） |
| [AI Bistro Ordering](https://github.com/zhichzhang/ai-bistro-ordering) | 英文 | React Native + Express + Supabase + Gemini | **LLM 只輸出有型別的動作，由後端對照真實菜單驗證後才執行**，最適合教「決策與執行分離」 |
| [OrderBot](https://github.com/nicoladisabato/OrderBot) | 英文 | Python + OpenAI Function Calling + MySQL + Chainlit | 小而好讀的點餐 Bot，function calling 查資料庫 |
| [linebot-gemini-multimodel-funcal](https://github.com/kkdai/linebot-gemini-multimodel-funcal)（[中文說明](https://www.evanlin.com/gemini-multimodel-response/)） | 中文（台灣） | FastAPI + LINE + Gemini function calling | LINE 電商客服：查訂單、搜尋商品、回傳商品圖。台灣 LINE API Expert 所寫，可直接套用架構 |
| [從 Function Call 升級到 ADK Agent](https://www.evanlin.com/function-agent/) | 中文（台灣） | LINE Bot + LangChain → Google ADK | 對照「手寫工具迴圈」與「Agent 框架」兩種寫法 |
| [臺北客家美食節 LINE Bot](https://github.com/kane8201053-collab/hakka-food-linebot) | 中文（台灣） | Flask + LINE + Gemini + Render | 真實活動的餐飲 FAQ Bot，附 64 個測試情境與部署設定 |
| [用 n8n 打造 AI LINE 客服機器人](https://brain168.com/n8n-line-ai-bot/) | 中文（台灣） | n8n + OpenAI + Google Sheets | 零程式，把 Google Sheet 當知識庫；改成寫入訂單成本很低 |
| [Dify 官方：知識庫智能客服](https://docs.dify.ai/zh-hans/workshop/intermediate/customer-service-bot) | 中文 | Dify 問題分類器 + 知識檢索 | 適合在課堂畫 Intent → Knowledge 節點圖 |
| [20 分鐘構建 Dify 智能客服工作流](https://developer.volcengine.com/articles/7533551167696338980) | 中文 | Dify 條件分支 | 最簡單的「轉人工」分支示範 |

> 目前沒有找到同時具備「LLM + LINE + 寫入 Google Sheet 訂單 + 轉人工」的單一中文專案。建議組合：kkdai 的 LINE 架構 + n8n 教學的 Sheet 做法 + Dify 教學的轉人工分支。**這正好是本 Lab 的價值所在。**

### 影片示範：先看真人怎麼做

共 6 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [🚀 n8n 串接 Line & Telegram 打造 AI Chatbot \| 從零開始實作自動化微電商客服 (整合 Google Sheet / 多元訊息與選單鍵盤)](https://www.youtube.com/watch?v=l-7IKXu9qKg)（HC AI說人話，ZH-TW）：**幾乎就是本題的原型**
- [🤖 用n8n打造LINE官方AI客服機器人！(保姆級教學！) \| 0程式基礎也能上手！](https://www.youtube.com/watch?v=v7ur0PFGd1w)（G股團長 金睿，ZH-TW）：零基礎也能完成 LINE 串接
- [n8n AI Agent Tutorial: Chatbot + Google Sheets Automation (2026)](https://www.youtube.com/watch?v=ENZddcRMOdw)（Fayyaz Ahmed，EN）：示範用 tool calling 寫入訂單

## 7. Showcase

| 組別 | 成果連結 | 一句心得 |
|---|---|---|
| | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
