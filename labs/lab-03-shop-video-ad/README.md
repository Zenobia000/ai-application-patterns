# Lab 03｜幫巷口小店做 15 秒短影音廣告

> **一句話任務**：幫學校附近一家你喜歡的小店（早餐店、手搖飲、書店、二手衣店），或你的社團，用 AI 做一支 15 秒的直式短影音，並輸出 9:16、1:1、16:9 三種版本。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| C Generative Media | P1 Generate + P4 Tool Use（+ P5） | ★★ | 2–3 小時 |

---

## 1. 為什麼做這件事

巷口小店最缺的不是好吃的東西，是 **行銷預算和時間**。拍一支短影音要企劃、拍攝、剪輯、配音、字幕，老闆根本沒空。

AI 影片生成看起來可以一鍵解決。這個 Lab 要你親自驗證：

> **生成一支影片只要幾分鐘，但要生成一支「能用」的影片，時間花在哪裡？**

你會發現最花時間的不是生成，而是：角色和商品前後不一致、畫面好看但跟店不像、字幕錯字、節奏不對。這就是「人工驗收成本」。

做完你會懂：

- 生成媒體的流程：腳本 → 分鏡 → 素材 → 配音 → 字幕 → 多尺寸
- 為什麼 **參考圖（真實商品照）** 比任何 prompt 都重要
- 為什麼業界做法是「一次產很多版，人只負責挑」

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 小店 15 秒廣告 | 電商商品廣告、品牌社群內容 |
| 三種比例輸出 | 廣告投放（IG Reels / FB / YouTube） |
| 一次多版挑選 | A/B 測試、廣告素材優化 |
| 用真實商品照當參考 | 品牌一致性（Brand Consistency） |

## 3. Pattern 分析

```text
小店資訊 + 真實商品照
  → [Model] 寫廣告腳本（15 秒，3–5 個鏡頭）
  → [Model] 拆分鏡，每鏡寫畫面描述
  → [Tools] 呼叫圖像/影片生成（以真實照片為參考）  ← P1 + P4
  → [Tools] 配音（TTS）+ 字幕 + 背景音樂
  → [Runtime] 合成、輸出三種比例
  → [Verification] 人工挑選與檢查
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 視覺品質 | **高** | 多版本生成，人工挑選 |
| 參考一致性 | **高** | 使用真實商品照做 image-to-video |
| 正確性 | 中 | 店名、價格、地址用字幕打，不讓模型生成在畫面上 |
| 人工驗收成本 | **高** | 記錄你花多少時間挑選與修正 |

## 4. 交付物與驗收標準

**交付物**：三個影片檔（9:16、1:1、16:9）+ 腳本與分鏡表 + 一段「給店家的說明」。

**驗收標準**：

1. 片長 13–17 秒，前 3 秒要有抓住注意力的畫面
2. 店名、一個主打商品、地址或 IG 帳號清楚出現在畫面上（以字幕/文字疊加方式）
3. 商品長相與真實照片一致（拿給一位沒參與的同學判斷）
4. 有配音或字幕，**沒有錯字**
5. 片尾標註「本影片使用 AI 生成」
6. **最重要**：拿給店家看，記錄店家的一句真實反應

> 倫理提醒：拍店家與商品前請先取得同意；不要生成真實人物的臉假裝是店員或顧客。

## 5. 建議路線

### 路線 A：一條龍開源工具（免費起步）

用 **MoneyPrinterTurbo** 輸入主題，自動產出腳本、素材、配音、字幕、背景音樂並合成，原生支援 9:16 / 16:9 / 1:1，搭配免費的 Edge TTS。台灣繁中的免安裝教學見下方參考。

缺點：素材來自圖庫，不會是「這家店」。適合先體驗完整流程。

### 路線 B：Agent + 生成服務（推薦）

讓 Claude（或其他 Agent）當導演，透過 MCP 呼叫生成服務：

1. 拍 3–5 張真實商品照與店面照
2. 給 Agent 任務：

   ```text
   你是短影音廣告導演。店家：XX 早餐店，主打：蛋餅與古早味紅茶，客群：大學生。
   1. 寫 15 秒腳本（4 鏡），第一鏡 3 秒內要有吸睛畫面
   2. 產出分鏡表：鏡號、秒數、畫面描述、運鏡、字幕、音效
   3. 每一鏡以我提供的真實照片為參考，生成 3 個版本的影片片段
   4. 生成中文配音（年輕、輕快）
   不要在畫面中生成文字，店名與地址之後用字幕加。
   ```

3. 生成服務可選：Higgsfield（有官方 MCP，Claude 可直接呼叫影像、影片、角色、配音）、或其他你手邊有的影片模型
4. 剪輯與多尺寸：CapCut、或讓 Coding Agent 用 **Remotion**（用程式剪輯影片）自動輸出三種比例

### 路線 C：批次化（進階，接 Lab 07）

用 n8n：表單上傳商品照 → LLM 寫腳本 → 影片生成 API → 存到 Google Drive 並記錄。一次幫 5 家店做。

### 延伸挑戰

- 同一支廣告做 3 種風格（溫馨 / 搞笑 / 質感），請 10 位同學投票
- 用 ComfyUI 做「商品照去背 + 換背景」的主視覺
- 做 Remotion 模板：換一份 JSON 就能產出下一家店的影片

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | 中文 | Python + Streamlit + FFmpeg + 多家 LLM + Edge TTS | 這個領域最標竿的完整流程：主題 → 腳本 → 素材 → 配音 → 字幕 → BGM → 成片，原生三種比例 |
| [MoneyPrinterTurbo 免安裝教學（The Walking Fish）](https://the-walking-fish.com/p/moneyprinterturbo/) | 中文（繁中） | Windows 免安裝版 | 台灣繁中、零安裝，可直接當課前閱讀 |
| [Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | 中文 | Python + ComfyUI / RunningHub + TTS | 腳本 → 分鏡圖 → 逐格生成 → 合成，示範「用 ComfyUI 當生成後端」 |
| [NarratoAI](https://github.com/linyqh/NarratoAI) | 中文 | Python + Streamlit + MoviePy | 既有素材 + AI 解說文案 + 剪輯 + 配音，適合「店家已有影片素材」的情境 |
| [Bilibili：ComfyUI 全能電商工作流](https://www.bilibili.com/video/BV19tznYQEwZ/) | 中文 | ComfyUI | 商品精修、換背景、產品融圖，對應「商品照 → 主視覺」 |
| [n8n：商品照生成 UGC 廣告短片](https://n8n.io/workflows/18698-generate-ugc-ad-reels-from-product-photos-with-deepseek-and-kieai) | 英文 | n8n + DeepSeek + kie.ai + Google Drive | 上傳商品照 → 15–20 秒廣告稿 → 有聲有字幕直式影片，**幾乎就是本題的現成版** |
| [short-video-maker](https://github.com/gyoridavid/short-video-maker) | 英文 | Remotion + Kokoro TTS + whisper.cpp + MCP server | 文字 → 短影音，提供 MCP 讓 Claude 呼叫，不需要 GPU（TTS 只支援英文） |
| [Remotion prompt-to-video 範本](https://github.com/remotion-dev/template-prompt-to-video) | 英文 | Remotion + TypeScript | 官方範本，理解「用程式剪輯」與多比例輸出 |
| [Higgsfield：把 Claude 變成創意工作室](https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio) | 英文 | Claude + Higgsfield MCP | 官方示範 Agent 透過 MCP 產出廣告素材、配音與配音翻譯 |

官方資源：

- [Higgsfield MCP](https://higgsfield.ai/mcp)（連接端點與支援的模型）
- [ComfyUI 官方文件](https://docs.comfy.org/)（影像、影片、音訊、3D 工作流與 Server API）

> 成本提醒：Higgsfield、kie.ai 等都需要付費點數。完全免費路線：MoneyPrinterTurbo（Edge TTS + Pexels 圖庫）或 short-video-maker 的 tiny Docker 版。

### 影片示範：先看真人怎麼做

共 10 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [一根香腸也能拍出電影級廣告！Google Flow × Veo 3.1 AI影片實戰](https://www.youtube.com/watch?v=5d6RhJX3kGY)（ROBERT WU，ZH-TW）：**最接近本題**：普通小吃也能做出廣告
- [【手把手教程】新手小白必看！手把手教你用AI做專業產品大片 \| 如何用AI工具製作高端商業廣告片 \| AI產品廣告片 完整製作全流程，產品一致](https://www.youtube.com/watch?v=jdub0xIGY98)（Joy，ZH）：處理本題最難的「商品一致性」
- [The NEW Way to Create Cinematic AI Ads (Kling 3.0 + Nano Banana Pro)](https://www.youtube.com/watch?v=GdazHmK1lro)（Tao Prompts，EN）：乾淨的兩工具管線：先定圖、再動起來

## 7. Showcase

| 組別 | 店家 | 成果連結 | 店家的一句反應 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)，特別記錄「生成總次數」與「最後採用幾個」。
