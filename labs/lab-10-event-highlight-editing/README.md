# Lab 10｜把社團活動錄影剪成 60 秒精華

> **一句話任務**：拿一段 20–60 分鐘的社團活動錄影（成果發表、講座、迎新、比賽），讓 AI 找出精華、剪成一支 **60 秒、9:16、有中文字幕** 的短影片；再多輸出一份 **剪映 / NLE 草稿**，讓人可以接手微調。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| C Media + A 知識（複合） | P2 + P3 + P4（+ P6） | ★★★ | 3 小時 |

串起來的原子能力（見 [composite-pipelines.md](../../taxonomy/composite-pipelines.md)）：**M4 影音→逐字稿 → M5 逐字稿→剪輯決策 → M6 決策→成片**（+ M7 字幕翻譯）

---

## 1. 為什麼做這件事

每個社團都有一堆「錄了但沒人剪」的影片。剪輯很花時間：看完整段、記下好的片段、剪接、上字幕、改直式。一小時的錄影，剪成一分鐘可能要花一整個晚上。

AI 剪輯跟 AI 生成影片是 **兩種完全不同的問題**：

| | AI 生成影片（Lab 03） | AI 剪輯（本 Lab） |
|---|---|---|
| 素材 | 模型憑空產生 | 真實拍到的畫面 |
| 難點 | 一致性、真實感 | 找到精華、節奏、字幕正確 |
| AI 做什麼 | 創造 | **理解與決策** |
| 可控性 | 低 | 高（每一刀都能追溯到逐字稿的時間碼） |

這個 Lab 的核心洞察：

> **把影片變成文字，剪輯就變成了編輯文件。**
> 逐字稿帶時間碼 → LLM 讀文字選段落 → 程式依時間碼剪接。模型從頭到尾不用「看」影片。

做完你會懂：

- 為什麼「逐字稿」是影片理解最便宜、最可靠的中介表示
- 為什麼剪輯決策要輸出成 **結構化 JSON**，而不是讓 AI 直接操作影片
- 為什麼業界工具最後都輸出「**草稿 / 時間軸**」給人接手，而不是直接輸出成片

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 活動精華 60 秒 | Podcast / 直播切片、訪談精華、課程剪輯 |
| 逐字稿驅動剪輯 | Descript 的文字剪輯、新聞剪輯 |
| 字幕與翻譯 | 影片在地化、無障礙字幕 |
| 輸出剪映 / NLE 草稿 | 專業後製：AI 粗剪、剪輯師精剪 |

市場現況：

- Descript **Underlord** 自稱「agentic video co-editor」，會讀腳本、看影片、在文字剪輯介面中批次編修（[官方](https://www.descript.com/underlord)）
- Adobe Premiere 的 **AI Assistant** 自 2026-06 公開測試：整理素材、批次改名、找出訪談問題、組出第一版粗剪（[Adobe 公告](https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion)）
- Remotion 推出官方 [Claude Code plugin](https://www.remotion.dev/docs/ai/claude-code-plugin)，讓 Coding Agent 用 React 寫影片

## 3. Pattern 分析

```text
活動錄影 MP4
  → [M4] Whisper / FunASR 轉逐字稿（每句帶開始/結束秒數）         ← P2 前處理
  → [M5] LLM 讀逐字稿，挑出 5–8 段精華，輸出 cuts.json              ← P2
  → [驗證] 程式檢查：秒數在影片範圍內、總長 55–65 秒、不在句子中間切斷
  → [M6] FFmpeg / Remotion 依 cuts.json 剪接、轉 9:16、燒字幕、加片頭  ← P3 + P4
  → [驗證] Agent 在每個剪接點截圖檢查（黑畫面、切到一半的臉）       ← P6
  → 輸出：成片 MP4 + 字幕 SRT + 剪映草稿 / NLE 時間軸
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 非結構資料理解 | 高 | 先轉成逐字稿，變成文字問題 |
| 正確性 | 中 | 字幕錯字（人名、社團術語）→ 提供詞彙表 |
| 結構化輸出 | **高** | cuts.json 是 LLM 與剪接程式之間的合約 |
| 可控性 | **高** | 每一刀都可追溯、可手動調整 |
| 視覺品質 | 中 | 轉直式時人臉要置中 |
| 人工驗收成本 | 中 | 看一分鐘成片 + 檢查字幕 |

## 4. 交付物與驗收標準

**交付物**：

1. `highlight_9x16.mp4`（60 秒 ± 5 秒）
2. `highlight.srt`（字幕檔）
3. `cuts.json`（剪輯決策，每段含開始秒數、結束秒數、選擇理由）
4. 一份可以在剪映 / DaVinci / Premiere 打開繼續編輯的草稿或時間軸（進階）
5. 剪輯前後對照說明：AI 選的段落 vs 你自己會選的段落

**驗收標準**：

1. 沒有在句子中間切斷（每段的開頭與結尾都是完整句子）
2. 字幕錯字 ≤ 3 個（先提供社團名稱、人名的詞彙表）
3. 直式畫面中，說話的人臉沒有被裁掉
4. 前 3 秒有抓注意力的片段
5. 請一位 **沒參加活動** 的同學看完，能說出這場活動在做什麼
6. 記錄：AI 選的精華，你認同幾段？

> 倫理提醒：公開發布前，請取得畫面中主要人物的同意；背景音樂注意版權。

## 5. 建議路線

### 路線 A：開源一站式工具（零程式）

- **FunClip**（阿里通義）：中文語音辨識準確，可以依說話者剪輯；上傳影片 → 辨識 → 選段落 → 輸出片段與 SRT
- **AutoClip**：貼上 YouTube / Bilibili 連結或上傳影片 → Whisper → LLM 評分精華並下標題 → 自動產出片段與合輯

路線 A 的重點是 **觀察這些工具如何拆步驟**，並比較它們選的精華和你選的有什麼不同。

### 路線 B：Claude Code 當剪輯師（推薦）

把 CLI 工具當「手」，Agent 當「腦」：

```text
我有一段社團成果發表的錄影 input/event.mp4（約 40 分鐘）。
請建立一條剪輯管線：
1. 用 Whisper（或 faster-whisper）產生帶時間碼的逐字稿 transcript.json，
   詞彙表見 glossary.txt（社團名稱、人名）
2. 閱讀逐字稿，挑選 5–8 段精華，總長 55–65 秒，
   輸出 cuts.json：[{start, end, text, reason}]。不要在句子中間切斷
3. 寫 validate_cuts.py 檢查秒數範圍與總長，不通過就重選
4. 用 ffmpeg 依 cuts.json 剪接、轉成 1080x1920（人臉置中）、燒入字幕、每段之間加 0.2 秒淡入淡出
5. 在每個剪接點前後各截一張圖，自己檢查有沒有黑畫面或切到一半的畫面
6. 另外輸出 highlight.srt
每一步的輸出都存成檔案，讓我可以單獨重跑某一步。
```

可參考的現成做法：

- Browser Use 團隊的 **video-use**：把逐字稿當剪輯介面的 Claude Code skill，會在剪接點檢查自己的輸出
- 楓羽的中文實作：Whisper → auto-editor 去除停頓 → ffmpeg 字幕與配樂 → 9:16

### 路線 C：輸出剪映草稿，人機協作（進階）

AI 做粗剪，人做精剪，這是目前業界最實際的分工。

- 用 **pyJianYingDraft** 讓 Agent 直接寫出剪映草稿（多軌、字幕、轉場），打開剪映就能繼續編輯
- 或用 **capcut-mate** / **VectCutAPI**，從 n8n / 扣子工作流呼叫
- 用 DaVinci Resolve 的話，可以參考 **davinci-resolve-mcp**（需要 Resolve Studio）

### 延伸挑戰

- **雙語字幕**：用 VideoLingo 或 pyVideoTrans 加上英文字幕給交換學生
- **一片多用**：同一份 cuts.json，輸出 60 秒 IG 版 + 3 分鐘 YouTube 版
- **說話者剪輯**：只剪社長的致詞（FunClip 的說話者辨識）
- **Remotion 片頭片尾**：用 Remotion plugin 做可重複使用的社團片頭模板

## 6. 參考專案

### 精華剪輯（長片 → 短片）

| 專案 | 語言 | 管線 | 為什麼值得看 |
|---|---|---|---|
| [FunClip](https://github.com/modelscope/FunClip) | 中文 | FunASR 辨識 + 說話者辨識 → LLM 選段 → 剪接 → SRT | 中文逐字稿剪輯的代表，可以只剪某一位說話者 |
| [AutoClip](https://github.com/zhouxiaoka/autoclip) | 中文 | yt-dlp → Whisper → LLM 評分精華與下標題 → 片段與合輯 | 完整的精華切片產品，支援 Qwen、DeepSeek、Ollama，並提供 MCP / CLI 介面 |
| [OpenShorts](https://github.com/mutonby/openshorts) | 英文 | AI 找精華 → 人臉追蹤轉 9:16 → 字幕 → 配音 | 開源版 OpusClip，提供 MCP server 給 Agent 呼叫 ◐ |
| [AI-Youtube-Shorts-Generator](https://github.com/Anil-matcha/AI-Youtube-Shorts-Generator) | 英文 | Whisper → LLM 選精華 → 自動直式裁切 | 最簡單的端到端教學範例 ◐ |
| [auto-editor](https://github.com/WyattBlue/auto-editor) | 英文 | 聲音/動作分析 → 去除靜音 → 輸出影片或 NLE 時間軸 | 不用 LLM 的規則式基準線，常被當成管線中的一步 ◐ |

### Agent 操作剪輯軟體

| 專案 | 語言 | 管線 | 為什麼值得看 |
|---|---|---|---|
| [video-use](https://github.com/browser-use/video-use) | 英文 | 逐字級字幕 → Claude 讀文字決定剪接 → ffmpeg 渲染 → 在剪接點自我檢查 | **「逐字稿就是剪輯介面」最乾淨的設計**，Claude Code skill |
| [pyJianYingDraft](https://github.com/GuanYixuan/pyJianYingDraft) | 中文 | Python 寫剪映草稿 JSON → 剪映開啟 → 自動匯出 | 剪映自動化的基礎函式庫 |
| [capcut-mate](https://github.com/Hommy-master/capcut-mate) | 中文 | 扣子 / n8n / Agent → REST API → 剪映草稿 → 雲端渲染 | 低程式工作流驅動剪映 |
| [jianying-editor-skill](https://github.com/luoluoluo22/jianying-editor-skill) | 中文 | Agent skill → pyJianYingDraft → 多軌剪映專案 | 搭配下方 Bilibili 爆紅影片 ◐ |
| [VectCutAPI](https://github.com/sun-guannan/VectCutAPI) | 中文 | HTTP API 產生剪映 / CapCut 草稿 | 另一種草稿 API ◐ |
| [davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | 英文 | LLM → MCP → Resolve 腳本 API | Agent 操作專業剪輯軟體的參考（需 Resolve Studio）◐ |
| [premiere-pro-mcp](https://github.com/leancoderkavy/premiere-pro-mcp) | 英文 | Claude / Codex → MCP → Premiere | 社群版 Premiere MCP（非 Adobe 官方）◐ |
| [HyperFrames](https://github.com/heygen-com/hyperframes) | 英文 | Agent 寫 HTML → 渲染成影片 | 給 Agent 用的「HTML 即影片」路線 ◐ |
| [remotion-dev/skills](https://github.com/remotion-dev/skills) | 英文 | Remotion 官方 Agent skills | 用程式做字幕、動態圖形 ◐ |

### 字幕、翻譯、配音

| 專案 | 語言 | 管線 | 為什麼值得看 |
|---|---|---|---|
| [VideoLingo](https://github.com/Huanshere/VideoLingo) | 中文 / 英文 | WhisperX → 斷句 → LLM 翻譯、反思、對齊 → TTS 配音 → 燒字幕 | 一鍵高品質字幕管線 ◐ |
| [pyVideoTrans](https://github.com/jianchang512/pyvideotrans) | 中文 | 辨識 → 翻譯 → TTS → 合成 | 最多人用的影片翻譯工具 ◐ |
| [OpenCreator（原 KrillinAI）](https://github.com/krillinai/OpenCreator) | 中文 / 英文 | 翻譯、配音、剪輯由 Agent 驅動 | 從管線工具轉型成 Agent 工作區的趨勢 ◐ |

### 實作文章與影片

| 文章 | 語言 | 內容 |
|---|---|---|
| [楓羽：Claude Code 指揮 ffmpeg + Whisper 自動剪片](https://maplefeather.com/article/ai-auto-video-editing-claude-code-2026) | 中文（繁中） | 錄影 → Whisper → auto-editor → 標題卡 → 字幕配樂 → 9:16；「AI 是腦，CLI 工具是手」 |
| [Bilibili：我封裝了剪映剪輯 skill，AI 全自動接管剪映](https://www.bilibili.com/video/BV1hLzCBzEDS/) | 中文 | AI skill 接管剪映多軌剪輯 |
| [russ.imyq.co：video-use 教學](https://russ.imyq.co/claude-video-use-tutorial/) | 中文（繁中） | video-use 實際安裝與使用 ◐ |
| [知乎：用 Claude Skills 做會學習的剪輯 Agent](https://zhuanlan.zhihu.com/p/1995051629620261260) | 中文 | 五種剪輯任務拆成五個 skill ◐ |
| [知乎：一句話讓 Claude Code 自動剪影片](https://zhuanlan.zhihu.com/p/2029246513046398555) | 中文 | video-use 導讀 ◐ |
| [MindStudio：用 Claude Code 自動化影片剪輯](https://www.mindstudio.ai/blog/automate-video-editing-claude-code) | 英文 | Claude Code + ffmpeg 管線 ◐ |
| [Clixie：Claude Code + HyperFrames](https://www.clixie.ai/blog/claude-code-video-editing) | 英文 | 先逐字稿、再分鏡、再渲染 ◐ |

> ◐ = 已由 GitHub API 或搜尋結果確認存在，但未逐頁開啟。ClipsAI 自 2024-01 起停止更新，未列入。

### 影片示範：先看真人怎麼做

共 10 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [AI 真的會剪片了！Claude Code 零基礎教學：丟影片、講人話，就能自動剪輯＋上字幕](https://www.youtube.com/watch?v=lP0rUMMIhKU)（藍諾Eleanor Jiang，ZH-TW）：**本題路線 B 的零基礎繁中版**
- [Claude Code 自動幫我剪片：不會剪輯也能做(Codex也適用)](https://www.youtube.com/watch?v=3XcsdSQtdc8)（追日Gucci-AI效率革命聯盟，ZH-TW）：真實創作者的工作流，Codex 也適用
- [How I Fully Automated My Video Editing (Claude Code)](https://www.youtube.com/watch?v=XeTAlZiIWHE)（Jason Cooperson，EN）：最關鍵的英文參考

## 7. Showcase

| 組別 | 活動 | 成片連結 | AI 選的精華你認同幾段 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
