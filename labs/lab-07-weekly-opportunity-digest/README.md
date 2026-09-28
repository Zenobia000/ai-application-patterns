# Lab 07｜每週機會情報站

> **一句話任務**：做一個每週一早上自動運作的流程：去學校公告、系網、實習網站、講座頁面抓新資訊 → 用 AI 分類（實習／獎學金／講座／比賽）並寫摘要 → 存進 Google Sheet → 發一則整理好的訊息到 LINE / Discord / Email。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| F Workflow Automation | P5 Workflow + P2 Retrieve & Reason | ★★ | 2–3 小時 |

---

## 1. 為什麼做這件事

錯過獎學金申請期限、錯過想去的講座、錯過實習招募，原因通常不是不想，而是 **資訊散在十個地方，沒人有空每天看**。

傳統自動化（RSS、IFTTT）只能「搬運」資訊，沒辦法「理解」。公告標題寫「113 學年度第二學期 XX 基金會助學金申請公告」，傳統規則很難判斷這是獎學金、截止日是哪天、你符不符合資格。

這就是這個 Lab 的核心：

> **把 AI 的「理解能力」插進傳統的自動化流程裡。**

做完你會懂：

- Workflow（固定流程）與 Agent（自主決定）的差別與搭配
- 為什麼 **固定的步驟交給流程，只有「理解」交給 AI**
- 自動化系統的真正難題：去重、失敗重跑、格式變動、成本

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 機會情報站 | 競品監控、產業新聞摘要、標案情報 |
| AI 分類公告 | Email 分流、客服工單分類、履歷篩選 |
| 寫入 Google Sheet | 寫入 CRM、資料倉儲 |
| 每週推播摘要 | 主管週報、行銷電子報 |

市場上的變化：n8n 在 2026-09-25 推出 **n8n Agents**（preview），可以用自然語言描述 Agent 的工作，把 MCP server、n8n 整合、或既有 workflow 當成工具交給 Agent 選用，並支援敏感動作的人工核准（[官方公告](https://blog.n8n.io/introducing-n8n-agents/)）。Zapier Agents 則連接 9,000+ 個 App（[官方頁面](https://zapier.com/agents)）。

## 3. Pattern 分析

```text
[Trigger] 每週一 08:00
  → 讀取來源清單（Google Sheet：網址、類型）
  → 抓取 RSS / 網頁
  → 去重（和上週已存的比對）                      ← 規則，不用 AI
  → [Model] 分類 + 抽取欄位：類型、截止日、對象、一句話摘要  ← P2
  → [Verification] 檢查 JSON 格式、截止日是合法日期  ← 規則
  → 寫入 Google Sheet
  → [Model] 把本週項目寫成一則摘要訊息
  → 發送到 LINE / Discord / Email
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 非結構資料理解 | **高** | 公告格式五花八門 → AI 抽取 |
| 結構化輸出 | **高** | 固定 JSON schema |
| 批次化 | **高** | 每週自動跑 |
| 可控性 | 高 | 去重、日期驗證交給規則 |
| 人工驗收成本 | 中 | 前兩週人工檢查分類，之後抽查 |

## 4. 交付物與驗收標準

**交付物**：n8n workflow（匯出 JSON）+ Google Sheet 連結 + 連續兩次執行的截圖 + 一則實際發出的摘要訊息。

**驗收標準**：

1. 至少 3 個不同來源（例如：學校公告、系網、一個實習網站或 RSS）
2. 每筆資料有：標題、類型、截止日（沒有則為空）、適用對象、一句話摘要、原始連結
3. **連續執行兩次，第二次不會重複寫入相同項目**
4. 分類準確度：人工檢查 20 筆，至少 17 筆正確
5. 摘要訊息依類型分組、截止日最近的排前面
6. 某一個來源壞掉（網址錯誤）時，整個流程不會中斷，而是在訊息中註記

## 5. 建議路線

### 環境

- **n8n Cloud** 試用（最快），或用 Docker 在本機跑 n8n
- LLM：OpenAI / Claude / Gemini API，或用 Ollama 跑本地模型（免費）

### 步驟

1. 建立 Google Sheet：`sources`（來源清單）、`items`（已收集項目）
2. n8n 節點骨架：

   ```text
   Schedule Trigger
     → Google Sheets（讀 sources）
     → Loop：HTTP Request / RSS Read
     → Code（清理 HTML、只留標題與內文前 1000 字）
     → Google Sheets（讀 items 的連結）→ Filter（去重）
     → AI / Basic LLM Chain（structured output：type, deadline, audience, summary）
     → Google Sheets（append items）
     → AI（彙整成摘要）
     → Discord / Email / LINE Messaging API
   ```

3. 分類的 prompt 要給明確類別與範例：

   ```text
   將公告分類為：internship / scholarship / talk / competition / other。
   抽取 deadline（YYYY-MM-DD，找不到填 null，不要猜）。
   audience 用一句話描述適用對象。summary 不超過 40 字。
   只輸出 JSON。
   ```

> 注意：**LINE Notify 已於 2025-03 停止服務**，推播到 LINE 需改用 LINE Messaging API。最簡單的選擇是 Discord Webhook。

### 延伸挑戰

- **個人化**：讓每個同學填自己的系級與興趣，只推給符合的人
- **改用 n8n Agents**：把「抓來源」「分類」「推播」包成工具，讓 Agent 決定步驟，比較兩種做法的穩定度
- **行事曆**：把有截止日的項目自動加入 Google Calendar（接 Lab 08）

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [n8n：RSS 內容 AI 摘要、通知與封存](https://n8n.io/workflows/4503-automate-rss-content-with-ai-summarize-notify-and-archive/) | 英文 | Schedule + Sheets + RSS + OpenAI + Discord | **與本題最像**：來源清單、過濾舊文、摘要、寫入 Sheet、推播 |
| [n8n：每日 AI 新聞摘要（Telegram + Gmail）](https://n8n.io/workflows/17217-send-daily-ai-news-digests-from-rss-feeds-with-openai-telegram-and-gmail) | 英文 | RSS + OpenAI + Telegram + Gmail | 示範怎麼把摘要 prompt 寫緊（限則數、限長度），同時發多通道 |
| [n8n：本地 Llama 3.2 新聞摘要](https://n8n.io/workflows/6011-daily-ai-news-digest-with-rss-llama-32-summarization-and-telegram-delivery/) | 英文 | n8n + Ollama + Telegram | 完全離線，沒有 API 預算時的路線 |
| [n8n：自動分類求職信件](https://n8n.io/workflows/15299-automatic-workflow-to-categorise-your-job-status) | 英文 | Gmail + regex + Ollama + Sheets upsert | **規則與 LLM 互相補強的最佳範例**：關鍵字規則覆寫 + 第二輪 LLM 驗證 |
| [iT 邦幫忙：用 n8n 把新聞推送到 LINE](https://ithelp.ithome.com.tw/articles/10373984) | 中文（繁中） | n8n + RSS + LINE Messaging API | 鐵人賽系列「打造自己的 AI 新聞小編」，台灣在地、有 LINE |
| [n8n 新聞自媒體全攻略（人生攻略研究所）](https://lifecheatslab.com/n8n-news-media/) | 中文（繁中） | n8n + Gemini + LINE | 技術組合與本題一致 |
| [Bilibili：n8n 入門，公眾號文章自動採集與 AI 摘要](https://www.bilibili.com/video/BV12F1VBfER8/) | 中文 | n8n + RSS + AI Agent 節點 | 節點設定講得很細，適合課前預習 |
| [awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | 英文 | 280+ 個 n8n 範本 | 依 Gmail、Discord、Notion、RAG 等分類，可直接匯入 |
| [Zie619/n8n-workflows](https://github.com/Zie619/n8n-workflows) | 英文 | 大量 n8n workflow + 搜尋介面 | 自己搜 "RSS"、"classify" 找範例 |

### 影片示範：先看真人怎麼做

共 7 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [學會 n8n 為你省下 80% 時間！(EP.1) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！](https://www.youtube.com/watch?v=r9mi3ZJIWbg)（PAPAYA 電腦教室，ZH-TW）：繁中最貼近本題前半段的一支
- [學會 n8n 為你省下 80% 時間！(EP.2) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！](https://www.youtube.com/watch?v=sRU6Y7DXkLI)（PAPAYA 電腦教室，ZH-TW）：接在 EP.1 後面看，對應推播步驟
- [n8n Quick Start Tutorial: Build Your First AI Agent [2026]](https://www.youtube.com/watch?v=GuaKeDS6UKU)（n8n，EN）：課前預習

## 7. Showcase

| 組別 | 來源數 | 分類準確率（/20） | 一句心得 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
