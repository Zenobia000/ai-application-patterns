# YouTube 影片示範：看真人怎麼做

> 讀文件是理解「為什麼」，看影片是理解「怎麼做」。這裡收錄專門教 AI 工具應用的 YouTube 創作者（KOL），以及每個 Lab 開工前值得先看的示範影片。

**使用方式**

1. 開始一個 Lab 前，先從該 Lab 的表格挑 1 支中文 + 1 支英文影片看完
2. 看的時候對照 Lab 的 Pattern 分析，標出影片中的每一步屬於哪個 Pattern / 原子能力
3. 注意影片「沒有演出來」的部分：失敗重試、驗收、成本。那通常才是真正花時間的地方

**查核方式**：每支影片都以 YouTube oEmbed 端點確認存在，標題與頻道名稱以 oEmbed 回傳為準（2026-09-28）。日期來自搜尋結果，空白代表未確認。少數中文標題因抓取工具轉換可能有個別字差異，已以搜尋索引的標題為準。

---

## KOL 名錄

| KOL | 頻道 | 語言 | 專長 | 為什麼值得追蹤 |
|---|---|---|---|---|
| PAPAYA 電腦教室 | [@papayaclass](https://www.youtube.com/@papayaclass) | ZH-TW | 工具教學、Claude Code、Claude Design、n8n | 台灣最知名的工具教學頻道，零基礎也跟得上 |
| Will 保哥 | [@Will_Huang](https://www.youtube.com/@Will_Huang) | ZH-TW | MCP、AI Agent、開發工具 | 台灣 Microsoft MVP，Playwright MCP 講得最完整 |
| 沈弘哲 | [@twtrubiks](https://www.youtube.com/@twtrubiks) | ZH-TW | Python / MCP 實作 | 用 PTT 等在地案例示範，實作性強，附 GitHub |
| 工程師下班有約 | [@dlcorner](https://www.youtube.com/@dlcorner) | ZH-TW | Cursor、Agent 工作流 | Cursor 從入門到實戰 |
| STEAM 教育學習網（OXXOSTUDIO） | [@steam.oxxostudio](https://www.youtube.com/@steam.oxxostudio) | ZH-TW | Vibe Coding 系列課程 | 20 多堂的結構化課程，適合教學場景 |
| 小高白話科技 | [@LittleGaussTech](https://www.youtube.com/@LittleGaussTech) | ZH-TW | 白話科技解說 | 用生活比喻講清楚 MCP 這類概念 |
| 曾語 Chance Language | [@chancelang3251](https://www.youtube.com/@chancelang3251) | ZH-TW | Cursor + Playwright MCP | 中英雙語，從自動化測試角度切入 |
| 數位敘事力期刊 | [@Journal_of_Digital_Narrative](https://www.youtube.com/@Journal_of_Digital_Narrative) | ZH-TW | Claude MCP、數位敘事 | 少數繁中的 Blender MCP 安裝教學 |
| 土豆醬tudojohn | [@tudojohn](https://www.youtube.com/@tudojohn) | ZH-TW | AI 公仔、3D 列印 | 一個人從一張圖做到印出來上色的實體公仔 |
| RealFun | [@RealFun3D](https://www.youtube.com/@RealFun3D) | ZH-TW | 模型製作、AI 圖轉 3D | 模型玩家實測多種圖生 3D 工具 |
| Alex Hsieh 相談室 \| AI Brain | [@ai-brain-alex](https://www.youtube.com/@ai-brain-alex) | ZH-TW | n8n、LINE API | 繁中 n8n 系列，每集附免費範本 |
| HC AI說人話 | [@HC-AIChannel](https://www.youtube.com/@HC-AIChannel) | ZH-TW | n8n、RAG、LINE / Telegram Bot | 繁中少數把 RAG 與客服機器人完整做一遍的頻道 |
| 凱文大叔AI程式設計教室 | [@pg-kt](https://www.youtube.com/@pg-kt) | ZH-TW | Dify 客服、RAG | Dify 知識庫客服系列，附 CC 字幕 |
| G股團長 金睿 | [@ginray](https://www.youtube.com/@ginray) | ZH-TW | n8n + LINE 官方帳號 | 保姆級 LINE 客服教學 |
| 大有牧森 Austin Chou | [@austinchou888](https://www.youtube.com/@austinchou888) | ZH-TW | NotebookLM | NotebookLM 的實務用法 |
| Darks | [@darkschen](https://www.youtube.com/@darkschen) | ZH-TW | n8n 新聞自動化 | 做過新聞摘要推播到 LINE |
| 劉彥廷 Ernie Liu | [@ernie-liu](https://www.youtube.com/@ernie-liu) | ZH-TW | n8n 完整課程 | 由淺入深的長篇教學 |
| 藍諾Eleanor Jiang | [@EleanorJiang](https://www.youtube.com/@EleanorJiang) | ZH-TW | Claude Code 新手教學 | 台灣創作者，零基礎教 Claude Code 剪片 |
| 追日Gucci-AI效率革命聯盟 | [@GuccixAI](https://www.youtube.com/@GuccixAI) | ZH-TW | Claude Code / Codex 自動化 | 公開自己實際使用的自動剪輯管線 |
| XUAN 鉉創意 | [@xuancrtv](https://www.youtube.com/@xuancrtv) | ZH-TW | 品牌用 AI 影像工具 | 從品牌行銷角度評測 Higgsfield 等工具 |
| 技術爬爬蝦 TechShrimp | [@tech-shrimp](https://www.youtube.com/@tech-shrimp) | ZH | 開源 AI 工具實戰 | 同時講原理與實作，browser-use 解說清楚 |
| 木子AI研究所 | [@muziailab](https://www.youtube.com/@muziailab) | ZH | MCP 入門 | 概念加實作，適合完全新手 |
| Neo Chan | [@neochanyl](https://www.youtube.com/@neochanyl) | ZH | AI 室內與 3D 設計 | 專業 3D 設計師用真實室內案件測試 Claude + Blender MCP |
| 氪學家 | [@kexue](https://www.youtube.com/@kexue) | ZH | Hunyuan3D、ComfyUI | 混元 3D 外掛的實測與比較 |
| 与AI同行 | [@walkingwithai1996](https://www.youtube.com/@walkingwithai1996) | ZH | 本地部署 AI 工具 | 低顯存也能跑的混元 3D 整合包 |
| DeepWhite | [@DeepWhiteAI](https://www.youtube.com/@DeepWhiteAI) | ZH | Blender 白模 → 影片模型 | 正好是「白模預演變 AI 影片」這個主題 |
| 回到Axton | [@axtonliu](https://www.youtube.com/@axtonliu) | ZH | NotebookLM、AI 工具評測 | 簡中圈品質很高的工具評測 |
| 马尔科Mark | [@马尔科Mark](https://www.youtube.com/@%E9%A9%AC%E5%B0%94%E7%A7%91Mark) | ZH | AI 廣告完整製作 | 一支影片走完腳本到成片 |
| Chong-U（AI Oriented Dev） | [@AIOriented](https://www.youtube.com/@AIOriented) | EN | Vibe Coding 做遊戲 | 用 AI 做遊戲最完整的頻道，涵蓋 2D、3D 與生成美術音效 |
| Peter Yang | [@PeterYangYT](https://www.youtube.com/@PeterYangYT) | EN | 產品人用 Claude Code | 短時間從零做到上線的完整示範 |
| Anthropic | [@anthropic-ai](https://www.youtube.com/@anthropic-ai) | EN | 官方發表 | Claude Projects、Research、Computer Use、Claude for Chrome 等官方示範 |
| Shaz Mathew | [@theShazM](https://www.youtube.com/@theShazM) | EN | Claude Code + Framer 網站 | 可以對照 Coding Agent 與設計工具兩條路線 |
| Josh Uses Ai | [@JoshUsesAi](https://www.youtube.com/@JoshUsesAi) | EN | Claude Code 部署 | 短而聚焦的部署教學 |
| DesignCourse | [@DesignCourse](https://www.youtube.com/@DesignCourse) | EN | 前端與 Three.js | 設計師視角看 AI 做 3D 遊戲 |
| Developers Digest | [@DevelopersDigest](https://www.youtube.com/@DevelopersDigest) | EN | AI 開發新功能速覽 | 幾分鐘看懂一個新功能 |
| Mickmumpitz | [@mickmumpitz](https://www.youtube.com/@mickmumpitz) | EN | Blender + ComfyUI 影片管線 | 提供免費工作流檔案，用 3D 解決角色一致性 |
| Dan Kieft | [@Dankieft](https://www.youtube.com/@Dankieft) | EN | AI 電影製作 | 示範用 Blender 當 Seedance 的控制層 |
| AI Engineer | [@aiDotEngineer](https://www.youtube.com/@aiDotEngineer) | EN | 工程演講（含 blender-mcp 作者） | 聽 blender-mcp 作者本人講設計理由 |
| DesignCode | [@DesignCodeTeam](https://www.youtube.com/@DesignCodeTeam) | EN | 設計與程式教學 | 節奏清楚的完整 Blender MCP 教學 |
| Moby Motion | [@MobyMotion](https://www.youtube.com/@MobyMotion) | EN | 動畫、綁骨 | 動畫師角度檢視 AI 自動綁骨的優缺點 |
| ComfyUI | [@comfyorg](https://www.youtube.com/@comfyorg) | EN | ComfyUI 官方 | Wan VACE 等工作流的官方說明 |
| Nate Herk | [@nateherk](https://www.youtube.com/@nateherk) | EN | n8n Agent、RAG | 每週都有從零實作的 n8n 教學，步驟清楚並附免費範本 |
| Cole Medin | [@ColeMedin](https://www.youtube.com/@ColeMedin) | EN | n8n RAG Agent、本地 AI | 他的 RAG Agent 範本常被當成業界參考 |
| Leon van Zyl | [@leonvanzyl](https://www.youtube.com/@leonvanzyl) | EN | n8n、Flowise、聊天機器人 | 短而清楚，涵蓋網站嵌入與人工審核 |
| Jeff Su | [@JeffSu](https://www.youtube.com/@JeffSu) | EN | NotebookLM、職場 AI | 十幾分鐘講完一個工具八成的用法 |
| Liam Ottley | [@LiamOttley](https://www.youtube.com/@LiamOttley) | EN | 客服與業務 Agent | 把 Agent 放進真實商業情境討論 |
| n8n | [@n8n-io](https://www.youtube.com/@n8n-io) | EN | n8n 官方 | 官方入門教學與 AI Agent 節點說明 |
| Chase AI | — | EN | n8n 電子報與內容自動化 | 示範 RSS + 搜尋 + LLM 產出電子報 |
| Tao Prompts | [@taoprompts](https://www.youtube.com/@taoprompts) | EN | Kling / Veo / Nano Banana 廣告流程 | 每有新模型就更新，從 prompt 到廣告講得清楚 |
| Rourke Heath | [@RourkeHeath](https://www.youtube.com/@RourkeHeath) | EN | AI UGC 廣告、Veo | 示範小店最常用的 UGC 見證式廣告格式 |
| Higgsfield AI | [@HiggsfieldAI](https://www.youtube.com/@HiggsfieldAI) | EN | Higgsfield 官方 | 產品廣告、Marketing Studio 等官方示範 |
| Theoretically Media | [@TheoreticallyMedia](https://www.youtube.com/@TheoreticallyMedia) | EN | 跨工具 AI 影片流程 | 不綁特定工具，適合用來選模型 |
| Curious Refuge | [@curiousrefuge](https://www.youtube.com/@curiousrefuge) | EN | AI 廣告與電影製作 | AI 影像製作最有代表性的課程品牌 |
| Jason Cooperson | [@jasoncooperson](https://www.youtube.com/@jasoncooperson) | EN | Claude Code 剪輯 | 用真實素材完整示範 Claude 剪片 |

---

## 各 Lab 影片數

| Lab | 影片 | 中文 |
|---|---|---|
| Lab 01 校園規章問答助手 | 8 | 3 |
| Lab 02 校園咖啡店 AI 店員 | 6 | 3 |
| Lab 03 幫巷口小店做 15 秒短影音 | 10 | 5 |
| Lab 04 社團招生 Landing Page | 5 | 3 |
| Lab 05 期末週紓壓小遊戲 | 6 | 1 |
| Lab 06 用 AI 佈置我的宿舍房間 | 7 | 2 |
| Lab 07 每週機會情報站 | 7 | 4 |
| Lab 08 校園活動行事曆代理 | 10 | 6 |
| Lab 09 社團吉祥物：從一張圖到可玩的 3D 角色 | 7 | 4 |
| Lab 10 把社團活動錄影剪成 60 秒精華 | 10 | 5 |
| Lab 11 Blender 當攝影棚、AI 當渲染器 | 7 | 2 |

---

## Lab 01 校園規章問答助手（對應 Lab 01）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT\| 分析報告 \| 會議記錄 \| 自動生成Podcast、教學影片](https://www.youtube.com/watch?v=zgWerTIynVA) | 大有牧森 Austin Chou | ZH-TW |  | NotebookLM 的實務用法 | 繁中入門，路線 A（零程式）直接照做 |
| [使用 Dify 打造 AI 客服知識庫 \| 10 秒完成匯入！Embedding + Rerank + RAG 混合查詢全攻略 (附 CC 字幕)](https://www.youtube.com/watch?v=n64_cF4KGLY) | 凱文大叔AI程式設計教室 | ZH-TW | 2024-12 | Excel 匯入、Embedding、Rerank、混合檢索 | 用繁中講清楚「檢索品質」這個本題核心難點 |
| [NotebookLM 最全教程： AI 学习神器！  一款 AI 笔记本居然让我 1 分钟变身英文播客主播](https://www.youtube.com/watch?v=6a7Ei8rcnTQ) | 回到Axton | ZH |  | NotebookLM 完整功能 | 簡中圈最完整的 NotebookLM 教學 |
| [Learn 80% of NotebookLM in Under 13 Minutes!](https://www.youtube.com/watch?v=EOmgC3-hznM) | Jeff Su | EN |  | 上傳來源、提問、附引用的回答、Audio Overview | 最快看懂「有來源依據的問答」長什麼樣 |
| [Getting started with projects in Claude.ai](https://www.youtube.com/watch?v=GJ5jTgcbRHA) | Anthropic | EN |  | 建立 Project、上傳知識文件、撰寫指示 | 對應路線 A 的 Claude Projects 做法 |
| [Getting started with research in Claude.ai](https://www.youtube.com/watch?v=R-KJgjIrh24) | Anthropic | EN | 2025-12-02 | 多來源的 Research 模式 | 延伸挑戰 Deep Research 的官方示範 |
| [How to Create an RAG Chatbot AI Agent with n8n (No Code, Step-by-Step Tutorial)](https://www.youtube.com/watch?v=6w0MshwAqBQ) | Nate Herk | EN |  | PDF 放進向量資料庫、組 Agent、寫 prompt、測試 | 零程式碼走完 RAG 全流程 |
| [Build Your First RAG Pipeline for Better RAG (step-by-step)](https://www.youtube.com/watch?v=5uw1wE6niGc) | Nate Herk | EN | 2025-10 | Google Drive 同步到 Supabase，處理新增、更新、刪除文件 | 規章會改版，這支教怎麼讓資料保持同步 |

## Lab 02 校園咖啡店 AI 店員（對應 Lab 02）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [🚀 n8n 串接 Line & Telegram 打造 AI Chatbot \| 從零開始實作自動化微電商客服 (整合 Google Sheet / 多元訊息與選單鍵盤)](https://www.youtube.com/watch?v=l-7IKXu9qKg) | HC AI說人話 | ZH-TW | 2025-04 | LINE + n8n 客服，Google Sheet 當商品資料，加上選單鍵盤 | **幾乎就是本題的原型** |
| [🤖 用n8n打造LINE官方AI客服機器人！(保姆級教學！) \| 0程式基礎也能上手！](https://www.youtube.com/watch?v=v7ur0PFGd1w) | G股團長 金睿 | ZH-TW | 2025-08 | LINE 官方帳號 webhook 串到 n8n 與 LLM | 零基礎也能完成 LINE 串接 |
| [使用 Dify 免費打造進階 AI 客服系統 \| RAG 設定、禁用字、自訂回答、內容優化完整教學 (附 CC 字幕)](https://www.youtube.com/watch?v=wb6wHNBIqgs) | 凱文大叔AI程式設計教室 | ZH-TW | 2024-12 | 禁用字、固定回答、RAG 設定 | 補上客服需要的安全護欄（對應惡意測試） |
| [n8n AI Agent Tutorial: Chatbot + Google Sheets Automation (2026)](https://www.youtube.com/watch?v=ENZddcRMOdw) | Fayyaz Ahmed | EN | 2026-04 | AI Agent 讀寫 Google Sheets | 示範用 tool calling 寫入訂單 |
| [n8n Human in the Loop: Add Approval to AI Agents](https://www.youtube.com/watch?v=4wsV1GgIsrs) | Leon van Zyl | EN | 2025-02 | Agent 執行動作前先等人工核准 | 「下單前確認」與轉人工的基礎 |
| [n8n AI Chatbot — Monitor, Control & Reply as Human (Free Template + Full Guide)](https://www.youtube.com/watch?v=O-5dWAGCQ4E) | Shafik Alsalem | EN |  | Telegram Bot，真人可以接手回覆 | 直接示範轉真人客服 |

## Lab 03 幫巷口小店做 15 秒短影音（對應 Lab 03）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [一根香腸也能拍出電影級廣告！Google Flow × Veo 3.1 AI影片實戰](https://www.youtube.com/watch?v=5d6RhJX3kGY) | ROBERT WU | ZH-TW | 2026-09 | Google Flow + Veo 3.1 把一般食品拍成電影感廣告 | **最接近本題**：普通小吃也能做出廣告 |
| [【手把手教程】新手小白必看！手把手教你用AI做專業產品大片 \| 如何用AI工具製作高端商業廣告片 \| AI產品廣告片 完整製作全流程，產品一致](https://www.youtube.com/watch?v=jdub0xIGY98) | Joy | ZH | 2026-01 | 商品照到廣告的完整流程，每鏡商品保持一致 | 處理本題最難的「商品一致性」 |
| [2026 AI廣告製作從0到成片｜腳本+角色+生成+剪輯，全流程教學](https://www.youtube.com/watch?v=UHNa0BKNlO0) | 马尔科Mark | ZH | 2026-04 | 腳本 → 角色 → 生成 → 剪輯 | 與本題步驟一一對應 |
| [[ 分享 ] 用 MoneyPrinterTurbo AI 自動化產生 YouTube 短影音 Shorts！我用 Mac 跟 Windows 做示範！](https://www.youtube.com/watch?v=vWBf5p--fr4) | 程式猿（AFA） | ZH-TW |  | 在 Mac 與 Windows 安裝執行 MoneyPrinterTurbo：主題 → 腳本 → 配音 → 字幕 | 路線 A（開源一條龍）的繁中操作示範 |
| [【AI圖片+影片生成】AI影像製作終極整合？Higgsfield Popcorn 顛覆設計師、攝影師、剪輯師的未來神器！](https://www.youtube.com/watch?v=lFjDGXUGZzo) | XUAN 鉉創意 | ZH-TW | 2025-11 | 用 Higgsfield Popcorn 做品牌視覺 | 繁中的 Higgsfield 說明 |
| [The NEW Way to Create Cinematic AI Ads (Kling 3.0 + Nano Banana Pro)](https://www.youtube.com/watch?v=GdazHmK1lro) | Tao Prompts | EN | 2026-02 | Nano Banana Pro 靜態圖 → Kling 3.0 圖生影片 → 廣告 | 乾淨的兩工具管線：先定圖、再動起來 |
| [How To Make Realistic AI UGC (Tutorial)](https://www.youtube.com/watch?v=Sej-1olOCBc) | Rourke Heath | EN | 2025-11 | 製作 UGC 風格的見證式影片 | 學會 UGC 廣告這種格式 |
| [Create Unlimited AI Videos with Claude + Higgsfield MCP (Full Tutorial)](https://www.youtube.com/watch?v=DE34Xps1wFE) | A Tech Creations | EN | 2026-07-22 | 把 Higgsfield MCP 接上 Claude，再用對話生成影片 | 路線 B（Agent + MCP）的直接示範 |
| [How To Make A.I Ads With Higgsfield And Claude - Full Tutorial](https://www.youtube.com/watch?v=XIli9Ac-ECI) | Isaiah Garcia | EN | 2026-09 | Claude 寫廣告概念，Higgsfield 生成 | 最新的 Claude + Higgsfield 完整廣告流程 |
| [I Created 10+ Beauty Ads in 1 Hour — No Agency Needed](https://www.youtube.com/watch?v=fmgVm-fxPDM) | Higgsfield AI | EN | 2026-05 | 在 Higgsfield 批次產出多支產品廣告 | 官方示範「一次多版、人只負責挑」 |

## Lab 04 社團招生 Landing Page（對應 Lab 04）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding, 動動嘴就能做出 Anything！](https://www.youtube.com/watch?v=2pM-7fBXc_M) | PAPAYA 電腦教室 | ZH-TW | | 安裝 Claude Code，用對話做出一個產品 | 零程式基礎的繁中入門起點 |
| [超強的 AI 前端設計師來了！Claude Design 跟你聊聊天就把網站設計出來，而且還貼心地幫你一鍵上線！](https://www.youtube.com/watch?v=JxaI6HK2onc) | PAPAYA 電腦教室 | ZH-TW | 2026-04-26 | 和 Claude Design 對話設計網站，再一鍵上線 | 正好是本題「Brief → 網站 → 上線」的流程 |
| [【Cursor 教學】入門到實戰，用 AI Agent 自動化你的工作流！](https://www.youtube.com/watch?v=kVniOF36GEk) | 工程師下班有約 | ZH-TW | | Cursor Agent 模式從入門到實戰 | 想用 Cursor 路線的同學從這支開始 |
| [Build & Deploy Apps with Claude Code + Vercel in 15 Minutes!](https://www.youtube.com/watch?v=oA7ttvBWSXg) | Josh Uses Ai | EN | 2026-01-02 | Claude Code 開發 → 推上 GitHub → Vercel 部署 | 用 15 分鐘補齊「部署」這一步 |
| [Watch Me Build a $5,000 AI Website in 18 Minutes (Claude Code + Framer)](https://www.youtube.com/watch?v=CQabEZH-4-0) | Shaz Mathew | EN | 2026-04-02 | Claude Code 與 Framer 搭配做商業等級網站 | 對照 Coding Agent 與 Framer 外部 Agent 路線 |

## Lab 05 期末週紓壓小遊戲（對應 Lab 05）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [【 Vibe Coding 快速上手 20+ 堂課 】01、認識 Vibe Coding：程式不再是拼邏輯，而是拼「感覺」](https://www.youtube.com/watch?v=GO7U-WR6TOQ) | STEAM 教育學習網（OXXOSTUDIO） | ZH-TW | | Vibe Coding 的概念與系列課程導覽 | 中文背景知識；目前沒找到完整的中文做遊戲示範，以此替代 |
| [Full Tutorial: Zero to Shipped Game with Claude Code in 20 Minutes](https://www.youtube.com/watch?v=247Z3jdw_hs) | Peter Yang | EN | | Claude Code 用 Phaser 做復古射擊遊戲（關卡、Boss、道具）並上線 | 20 分鐘從零到可玩，一堂課剛好看完 |
| [Vibe Code a Complete 2D Beat 'Em Up Game From Scratch - Full Tutorial (Codex, Phaser, Images 2.0)](https://www.youtube.com/watch?v=NwKZOn3O5oI) | Chong-U（AI Oriented Dev） | EN | 2026-05 | Codex + Phaser，AI 生成背景、音效、音樂，加上畫面震動與粒子 | 唯一完整涵蓋「程式 + 生成美術音效」的示範，對應本題的 P3 + P1 |
| [Vibe Coding 2D Games with Claude Code & Agent Skills (Full Tutorial)](https://www.youtube.com/watch?v=QPZCMd5REP8) | Chong-U（AI Oriented Dev） | EN | 2026-02 | 用 Claude Code Skills 做 2D 遊戲 | 看 Skills 如何讓品質可重複 |
| [Ditch Unity: How I Vibe Code 3D Games With AI - Full Tutorial (Codex CLI, Claude Code, Cursor)](https://www.youtube.com/watch?v=fu7NZ3t3sLM) | Chong-U（AI Oriented Dev） | EN | 2026-02 | Three.js 3D 遊戲，比較 Codex CLI、Claude Code、Cursor | Three.js 路線，附工具比較；也是 Lab 09 的前導 |
| [Three.js Game Development & Claude Code is NUTS](https://www.youtube.com/watch?v=VG_HKh-zfOs) | DesignCourse | EN | 2026-05 | Claude Code 寫 Three.js 遊戲 | 補上設計師的視角 |

## Lab 06 用 AI 佈置我的宿舍房間（對應 Lab 06）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [3D設計師實測Claude AI+Blender MCP！用來做自動室內設計可以嗎？Autobuilder Pro插件教學](https://www.youtube.com/watch?v=KrmIX7sRxv8) | Neo Chan | ZH | 2026-07-31 | Claude 透過 Blender MCP 做室內佈局，搭配 Autobuilder Pro 外掛 | 專業設計師判斷 AI 室內佈局到底能不能用，適合討論驗收標準 |
| [Claude 3 7 MCP：Blender 3D創作力無窮（for Mac 教學）](https://www.youtube.com/watch?v=W4ABKoQdSRk) | 數位敘事力期刊 | ZH-TW | 2025-04-28 | 安裝 Python/uv、設定 Claude、安裝 Blender 外掛 | 用 Mac 的同學照著做就能完成環境設定 |
| [Design a Room using Blender-MCP and Claude AI demo](https://www.youtube.com/watch?v=wxgQmjm9wfM) | Data Science in your pocket | EN | | 用提示詞一步步建出一個房間 | 和本題任務幾乎相同 |
| [Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial](https://www.youtube.com/watch?v=lCyQ717DuzQ) | DesignCode | EN | | 完整安裝，然後反覆迭代建構場景 | 節奏適合初學者，從頭到尾一次看完 |
| [Blender MCP and The Future Of Creative Tools - Siddharth Ahuja](https://www.youtube.com/watch?v=nnktgWtfJHE) | AI Engineer | EN | | blender-mcp 作者示範約 5 分鐘做出低多邊形場景，並談設計想法 | 理解 MCP 能做到什麼、做不到什麼 |
| [Generate 3D Objects with Spline AI](https://www.youtube.com/watch?v=Wyu-helznio) | Spline | EN | | Spline AI 從文字或圖片生成物件並放進場景 | Spline 路線（延伸挑戰）的官方示範 |
| [Blender Model In React-Three-Fiber Scene With Physics](https://www.youtube.com/watch?v=XJRrhfh6oig) | Jacob Bolda | EN | | Blender 匯出 glTF，放進有物理的 R3F 場景 | 補上「GLB 放上網頁」這最後一步 |

## Lab 07 每週機會情報站（對應 Lab 07）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [學會 n8n 為你省下 80% 時間！(EP.1) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！](https://www.youtube.com/watch?v=r9mi3ZJIWbg) | PAPAYA 電腦教室 | ZH-TW |  | 觸發器、抓 RSS 新聞、合併資料流、加上 AI | 繁中最貼近本題前半段的一支 |
| [學會 n8n 為你省下 80% 時間！(EP.2) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！](https://www.youtube.com/watch?v=sRU6Y7DXkLI) | PAPAYA 電腦教室 | ZH-TW |  | EP.1 續集，把助理延伸成 Bot | 接在 EP.1 後面看，對應推播步驟 |
| [n8n x AI：自動化新聞自媒體，輕鬆打造你的專屬新聞播報！](https://www.youtube.com/watch?v=Akr2f0iwU7M) | Darks | ZH-TW |  | 抓取、摘要，推播到 LINE 或 Gmail | 包含推播到 LINE 的部分 |
| [n8n 零基礎 AI 自動化教學｜6 大實戰 Lab 打造 LLM 與 AI Agent 工作流｜EP-25 免費模板](https://www.youtube.com/watch?v=V-0UKJTqjSA) | Alex Hsieh 相談室 \| AI Brain | ZH-TW |  | 6 個 LLM 與 AI Agent 節點實作 | 熟悉分類與摘要用的 AI 節點 |
| [n8n Quick Start Tutorial: Build Your First AI Agent [2026]](https://www.youtube.com/watch?v=GuaKeDS6UKU) | n8n | EN | 2026-02-13 | 官方 AI Agent 節點入門 | 課前預習 |
| [n8n + Tavily + RSS = Your Ultimate Custom Newsletter! \| Easy Tutorial](https://www.youtube.com/watch?v=rggz_jdvoJo) | Chase AI | EN | 2025-05-06 | RSS + Tavily 搜尋，由 LLM 產出電子報 | 從資料來源到摘要的完整流程 |
| [Watch Me Build a Multi-Agent Newsletter System in n8n (step-by-step)](https://www.youtube.com/watch?v=pxzo2lXhWJE) | Nate Herk | EN | 2025-08-21 | 研究、規劃、撰寫、編輯四個 Agent 分工，附引用 | 進階：延伸挑戰改用 Agent 的參考 |

## Lab 08 校園活動行事曆代理（對應 Lab 08）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [Playwright MCP：看看 AI agents 如何控制您的瀏覽器](https://www.youtube.com/watch?v=jkRzlCCRKFI) | Will 保哥 | ZH-TW | 2025-03-29 | 安裝 Playwright MCP，看 Agent 操作瀏覽器 | 最完整的繁中 Playwright MCP 入門 |
| [複雜爬蟲掰掰！Playwright MCP + AI 輕鬆實現 PTT 圖片自由！](https://www.youtube.com/watch?v=3u7m4XPT8Zs) | 沈弘哲 | ZH-TW | 2025-06-14 | Playwright MCP + Cline 抓 PTT 資料，附 GitHub | 在地網站案例，和本題抓校園活動最接近 |
| [什麼是 MCP（Model Context Protocol）｜小高白話科技](https://www.youtube.com/watch?v=MxsjS6CWy6Y) | 小高白話科技 | ZH-TW | 2026-03-24 | 用 USB-C 比喻解釋 MCP | 完全新手先看這支建立概念 |
| [Cursor + Playwright MCP 教學｜AI 自動化測試完整入門Cursor + Playwright MCP Tutorial \| AI Automated Testing](https://www.youtube.com/watch?v=oOAE0mSADfQ) | 曾語 Chance Language | ZH-TW | 2026-04-10 | Cursor 搭配 Playwright MCP 操作真實網頁 | Cursor 版本的設定方式 |
| [一句话命令AI操作浏览器替我打工，Browser Use原理+实战](https://www.youtube.com/watch?v=rnitNByhJBE) | 技術爬爬蝦 TechShrimp | ZH | | browser-use 原理解說加實際任務 | browser-use 路線的中文入口 |
| [【AI小白入門】全網超🔥的MCP是什麼？怎麼用？概念+實戰講解｜讓AI能力瞬間翻倍，普通人也能用｜Cursor/Trae/Claude](https://www.youtube.com/watch?v=NCtc5lIV7pM) | 木子AI研究所 | ZH | 2025-05-02 | MCP 概念，以及在 Cursor、Trae、Claude 中設定 | 從概念一路到實際使用 |
| [Using Claude Code with Microsoft Playwright to Drive Your Browser](https://www.youtube.com/watch?v=-qZo8O7l1_w) | Nick Sarafa | EN | | Claude Code + Playwright 操作瀏覽器 | 和本題工具組合完全相同 |
| [BrowserUse: Open Source AI Agent CONTROLS Your Browser! 🚀 (Complete Tutorial)](https://www.youtube.com/watch?v=cPOGZApkbdk) | Build Fast with AI | EN | 2025-01-23 | 從 Python 安裝到 browser-use Agent 運作 | 完整的英文安裝流程 |
| [Claude for Chrome brings AI where you're already working](https://www.youtube.com/watch?v=IypXvHej9eY) | Anthropic | EN | 2025-09-29 | Claude 在瀏覽器中點擊、填表 | 官方示範，可討論「送出前人工確認」 |
| [Claude NEW Computer Use in 6 Minutes](https://www.youtube.com/watch?v=ZUBJqLGKoZI) | Developers Digest | EN | 2026-03-24 | Computer Use 示範 | 6 分鐘快速理解截圖 → 動作迴圈 |

## Lab 09 社團吉祥物：從一張圖到可玩的 3D 角色（對應 Lab 09）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [教你用一張照片製作實體公仔！ #公仔製作 #3D列印 #Tripo3D AI](https://www.youtube.com/watch?v=9P_9nHDhJBI) | 土豆醬tudojohn | ZH-TW | | 設計圖 → Tripo 轉 3D → 修比例 → 渲染 → 列印上色 | 一個人走完「圖 → 3D → 實體」整條管線（延伸挑戰：3D 列印） |
| [【模型製作】自己的公仔自己做!!  用AI圖片轉3D生成屬於自己的公仔](https://www.youtube.com/watch?v=ClXyNELkDXA) | RealFun | ZH-TW | | AI 圖片轉 3D 做公仔 | 台灣模型玩家的實測觀點 |
| [【AI 3D模型】最强AI生成3D模型，Hunyuan3D V2，效果超强，仅需6G显存！支持文字和图片生成3D模型，一键启动整合包! \| Hunyuan3D \| 3D模型 \| Trellis](https://www.youtube.com/watch?v=5fJUHgFzuNc) | 与AI同行 | ZH | | 安裝並使用本地混元 3D 整合包 | 免費路線，學校電腦也可能跑得動（路線 C） |
| [强强联合！Hunyuan 3D 2.0 + GPT4o 生成超棒多视角渲染图 ComfyUI原生支持混元3D 低门槛3D建模 AI模型实测+插件对比](https://www.youtube.com/watch?v=wangw40w8oA) | 氪學家 | ZH | | 先用 GPT-4o 產生多視角圖，再進 ComfyUI 的混元 3D；外掛比較 | 看懂為什麼多視角輸入（V2）能改善模型品質 |
| [How to create 3D charater in Tripo AI and Rig in Mixamo](https://www.youtube.com/watch?v=i6fusxS4KUs) | Peace Growba | EN | | Tripo 生成角色 → Mixamo 自動綁骨 | 本題最核心的「模型 → 綁骨」交接 |
| [The AI Rigging Tool That Blew My Mind (feat Tripo)](https://www.youtube.com/watch?v=mwrahXPj-HU) | Moby Motion | EN | 2026-08-08 | 動畫師檢視 Tripo 自動綁骨 | 平衡看待 AI 綁骨做對與做錯的地方 |
| [How to rig a character in AccuRig and add Rigify controls in Blender 4.2 \| Tutorial #Rigging](https://www.youtube.com/watch?v=0HIYozgL2E4) | Jen Abbott Creates | EN | 2024-11 | AccuRig 綁骨 → Blender Rigify | 免費的 AccuRig 路線 |

## Lab 10 把社團活動錄影剪成 60 秒精華（對應 Lab 10）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [AI 真的會剪片了！Claude Code 零基礎教學：丟影片、講人話，就能自動剪輯＋上字幕](https://www.youtube.com/watch?v=lP0rUMMIhKU) | 藍諾Eleanor Jiang | ZH-TW |  | 丟入影片、用白話下指令，Claude Code 自動剪輯並上字幕 | **本題路線 B 的零基礎繁中版** |
| [Claude Code 自動幫我剪片：不會剪輯也能做(Codex也適用)](https://www.youtube.com/watch?v=3XcsdSQtdc8) | 追日Gucci-AI效率革命聯盟 | ZH-TW |  | Claude Code / Codex 自動剪輯管線 | 真實創作者的工作流，Codex 也適用 |
| [AI 剪片神器：從素材到上字幕，自動化你的剪輯流程](https://www.youtube.com/watch?v=14XmF5aosjk) | BPW 學習日誌 | ZH-TW | 2026-08 | 從原始素材到上字幕的自動化流程 | 最新的繁中自動剪輯示範 |
| [告别传统剪辑！说几句话让Claude Code自动帮你剪完视频：停顿、水词、文字动画、字幕、转场、音乐一键完成](https://www.youtube.com/watch?v=65h-zjVuvmI) | Automate with Bonnie | ZH |  | 去停頓與贅字、文字動畫、字幕、轉場、配樂 | 把 Claude 能處理的剪輯步驟逐項列出 |
| [【零基礎攻略】AI剪輯將改變一切，剪映AI新手攻略，十大AI功能讓你的剪輯效率提升N倍｜剪映AI教學](https://www.youtube.com/watch?v=N7vS6XvZX_w) | 學長Ethan | ZH | 2025 | 剪映的 10 個 AI 功能（自動字幕等） | 路線 C 與不寫程式同學的圖形介面選項 |
| [How I Fully Automated My Video Editing (Claude Code)](https://www.youtube.com/watch?v=XeTAlZiIWHE) | Jason Cooperson | EN | 2026-07 | Claude Code 剪輯管線處理真實素材 | 最關鍵的英文參考 |
| [Claude edited this entire video in ONE SHOT](https://www.youtube.com/watch?v=7MaARoS9o2s) | Jason Cooperson | EN | 2026-09 | Claude 用一次指令剪完整支影片 | 看全自動剪輯的成果長什麼樣，再討論哪裡該人工把關 |
| [Your Videos Don't Have to Look Amateur Anymore (Claude + Remotion)](https://www.youtube.com/watch?v=i5bZ-Be9cAQ) | vidIQ | EN | 2026-07 | Claude + Remotion 做動態圖形與標題 | 延伸挑戰：用 Remotion 做片頭模板 |
| [CapCut AI Clipper Tutorial: Turn Long Videos Into Engaging Shorts! (AI Video Editing)](https://www.youtube.com/watch?v=zwrDWaINaPY) | Artificial Quotient | EN | 2026-05 | CapCut AI Clipper：長片 → 精華短片 | 同一個任務的圖形介面版本 |
| [OpusClip Tutorial 2026: Turn Long Videos Into Viral Shorts With AI](https://www.youtube.com/watch?v=emLL4MSdiao) | Nexus Alex | EN |  | OpusClip 選精華、上字幕、轉直式 | 商業產品基準，可和 Claude 路線比較 |

## Lab 11 Blender 當攝影棚、AI 當渲染器（對應 Lab 11）

| 影片 | KOL | 語言 | 日期 | 你會看到 | 為什麼適合這題 |
|---|---|---|---|---|---|
| [AI视频的终极答案！GPT-6 Astra × Blender × Seedance 2.5](https://www.youtube.com/watch?v=a3G69PTuT_M) | DeepWhite | ZH | | AI 驅動 Blender 搭白模 → Seedance 參考影片模式 | 和本題的管線完全相同，中文講解 |
| [Seedance 2.0 竟有導演大腦，目前最強 AI 影片生成！電影級運鏡+單素材、多素材，超穩角色一致性實測](https://www.youtube.com/watch?v=FQTbe7zV10Y) | T客邦影新聞 | ZH-TW | | Seedance 運鏡與多參考圖角色一致性實測 | 台灣媒體的 Seedance 入門（沒有 Blender，先理解影片模型能力） |
| [Seedance + Blender Unlocks Advanced AI Filmmaking Techniques](https://www.youtube.com/watch?v=miIDu04N7_4) | Dan Kieft | EN | | Blender 設定鏡頭與走位 → Seedance 渲染 | 清楚示範白模畫面如何驅動 AI 渲染 |
| [Control MULTIPLE CONSISTENT CHARACTERS + CAMERA with this FREE AI Workflow [Blender + ComfyUI]](https://www.youtube.com/watch?v=PZVs4lqG6LA) | Mickmumpitz | EN | | Blender 擺好 3D 角色 → ComfyUI 分區渲染 | 透過 3D 維持多角色一致性（延伸挑戰） |
| [We Built a FREE AI Render Engine for CG & Facial Animation (ComfyUI + Blender)](https://www.youtube.com/watch?v=7J7hi-Hxpac) | Mickmumpitz | EN | 2026-06 | Blender 渲染通道 → 本地 ComfyUI 渲染，含臉部動畫 | 免費本地路線（路線 B），不需付費影片 API |
| [Stop Wasting AI Credits! Higgsfield Blender Plugin Workflow Tutorial](https://www.youtube.com/watch?v=HRe7LxuyHy4) | Aaron Randall | EN | 2026-09 | Higgsfield 外掛：先在 Blender 設好鏡頭再生成 | 一站式外掛路線（路線 C），並說明怎麼省點數 |
| [Wan 2.2 VACE in ComfyUI](https://www.youtube.com/watch?v=-gOhCVU_ogY) | ComfyUI | EN | | 以深度控制影片的 VACE 工作流 | Wan VACE 的官方參考 |
