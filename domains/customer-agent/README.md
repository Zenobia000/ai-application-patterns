# Domain：Customer Agent 對話服務

[← Domains 總覽](../) ｜ 用到的 Pattern：[P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P5 Workflow](../../patterns/workflow-agent/)

## 1. 問題長什麼樣

AI 客服不只是「聊天機器人」。問題已經從：

```text
Question → Answer
```

變成：

```text
Intent → Knowledge → Decision → Action → CRM / Ticket / Order
```

市場現況：

- **Intercom Fin** 把同一個 Agent 延伸到 Service、Sales、Ecommerce 三種角色，並用 Fin Procedures 執行業務流程；接上 Shopify 後可以追蹤訂單、處理退貨、更新訂閱（[官方說明](https://www.intercom.com/help/en/articles/12508017-fin-as-a-customer-agent-for-service-sales-and-more)、[Ecommerce 公告](https://www.intercom.com/blog/announcing-fin-for-ecommerce/)）
- **OpenAI** 開源了客服 Agent 示範：分流 Agent → 專責 Agent（FAQ、訂位、座位、退款）+ Guardrails（[openai-cs-agents-demo](https://github.com/openai/openai-cs-agents-demo)）
- **台灣在地**：LINE 是主要通道，大量「LINE Bot + LLM function calling」的社群專案

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 多輪狀態 | 購物車、訂單進度、客人前面說過的話 |
| 正確性 | 價格、庫存、政策不能錯 |
| 權限與安全 | 客人試圖誘導打折、改價、查別人的訂單 |
| 何時轉人工 | 客訴、情緒激動、超出能力範圍 |
| 決策與執行分離 | LLM 決定意圖，後端驗證後才執行 |

## 3. Pattern 組合

| 階段 | Pattern |
|---|---|
| 意圖判斷、多輪對話 | LLM |
| 查 FAQ、菜單、政策 | P2 |
| 下單、建工單、查訂單 | P4 |
| 後續通知、每日報表 | P5 |

## 4. 工作坊題目

**主題目**：[Lab 02 校園咖啡店 AI 店員](../../labs/lab-02-cafe-agent/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **系辦小幫手** | 回答「怎麼申請成績單」「系辦幾點關」，並能幫同學預約「借教室」或「學位諮詢時段」 | 預約類工具、查詢空檔 |
| **二手物品交換 Bot** | 同學用自然語言刊登「我有一本微積分課本，想換咖啡券」，Bot 整理成結構化資料並配對 | 非結構化 → 結構化、配對邏輯、個資保護 |

## 5. 放大到真實世界

電商客服、訂位系統、航空改票、銀行客服、SaaS 支援、銷售助理、政府服務諮詢。

## 6. 參考

見 [Lab 02 參考專案](../../labs/lab-02-cafe-agent/#6-參考專案)。
