# Domain：AI Video Editing 影片剪輯

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P5 Workflow](../../patterns/workflow-agent/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

**處理已經存在的影片**：剪精華、上字幕、翻譯配音、轉直式、加片頭片尾。和「生成影片」（[video-advertising](../video-advertising/)）是不同的問題：

| | 生成影片 | 剪輯影片 |
|---|---|---|
| 素材 | 模型產生 | 真實拍攝 |
| AI 的角色 | 創造者 | 理解者與決策者 |
| 主要難點 | 一致性、真實感 | 找精華、節奏、字幕正確 |
| 可控性 | 低 | 高 |

典型管線：

```text
長影片 → 逐字稿（含時間碼）→ LLM 選段落 → 剪輯決策 JSON → ffmpeg / Remotion / 剪映 / NLE → 成片或可編輯草稿
```

市場現況（2026-09）：

| 類型 | 代表 |
|---|---|
| 精華切片（開源） | FunClip、AutoClip、OpenShorts、AI-Youtube-Shorts-Generator |
| 字幕、翻譯、配音（開源） | VideoLingo、pyVideoTrans、OpenCreator（原 KrillinAI） |
| Agent 操作剪輯 | video-use（Claude Code skill）、HyperFrames、Remotion 官方 Claude Code plugin |
| Agent 操作剪輯軟體 | pyJianYingDraft / capcut-mate（剪映草稿）、davinci-resolve-mcp、premiere-pro-mcp（社群） |
| 商業產品 | Descript Underlord（agentic co-editor）、Adobe Premiere AI Assistant（2026-06 公開測試） |

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 只看逐字稿會漏畫面 | 沒說話但精彩的畫面（表演、比賽）→ 補視覺模型或音量/動作規則 |
| 切在句子中間 | 需要以句子邊界為剪接單位 |
| 辨識錯字 | 人名、術語 → 詞彙表 |
| 直式裁切 | 說話者不在畫面中央 → 人臉追蹤 |
| 節奏與美感 | 目前仍需要人判斷 → 輸出可編輯草稿 |

## 3. Pattern 組合

| 階段 | 原子能力 | Pattern |
|---|---|---|
| 語音辨識 | M4 | P2 前處理 |
| 選段落 | M5 | P2 |
| 剪接、字幕、轉直式 | M6 | P3 + P4 |
| 翻譯與配音 | M7 | P2 + P1 |
| 剪接點截圖檢查 | C2 | P6 |
| 每週批次剪 | C3 | P5 |

## 4. 工作坊題目

**主題目**：[Lab 10 把社團活動錄影剪成 60 秒精華](../../labs/lab-10-event-highlight-editing/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **把一堂課剪成複習重點** | 老師授權的 90 分鐘課程錄影 → 5 段各 1 分鐘的重點，附章節標題 | 依主題分段、章節生成 |
| **Podcast 切片 + 雙語字幕** | 系上 Podcast 一集 → 3 支 30 秒 IG 切片，附中英字幕 | 翻譯、字幕對齊、多支批次輸出 |

## 5. 放大到真實世界

直播與 Podcast 切片、課程剪輯、新聞剪輯、影片在地化、企業會議精華、專業後製的 AI 粗剪。

## 6. 參考

見 [Lab 10 參考專案](../../labs/lab-10-event-highlight-editing/#6-參考專案) 與 [案例分析](../../case-studies/transcript-driven-editing.md)。
