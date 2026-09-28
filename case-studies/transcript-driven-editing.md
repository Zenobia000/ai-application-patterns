# 逐字稿驅動的 AI 剪輯（video-use / FunClip / 剪映草稿）

- **來源**：
  - [browser-use/video-use](https://github.com/browser-use/video-use)
  - [modelscope/FunClip](https://github.com/modelscope/FunClip)
  - [GuanYixuan/pyJianYingDraft](https://github.com/GuanYixuan/pyJianYingDraft)
  - [楓羽：Claude Code 指揮 ffmpeg + Whisper 自動剪片](https://maplefeather.com/article/ai-auto-video-editing-claude-code-2026)（2026-09-13）
- **語言**：EN / ZH
- **收錄日期**：2026-09-28

---

## 1. 它解的是什麼問題？

> 長影片（講座、訪談、直播、活動錄影）很多，剪成短片很花時間；剪輯師的大部分時間花在「看完整段、找出好段落」。

對應應用類別：**C Generative Media**（編輯而非生成）、**A Knowledge & Reasoning**、**G Tool Agent**

## 2. 它用了哪些 Pattern？

```text
長影片 →
  [Model]         語音辨識（Whisper / FunASR / Scribe）+ LLM
  [Context]       帶時間碼的逐字稿（video-use 約 12KB markdown）
  [Tools]         ffmpeg、Remotion、剪映草稿（pyJianYingDraft）、Resolve / Premiere MCP
  [Orchestration] Claude Code skill 或一站式工具
  [Runtime]       本機 CLI / 剪輯軟體
  [Verification]  在剪接點截圖自我檢查；人工看成片
```

原子能力鏈：**M4 影音→逐字稿 → M5 逐字稿→剪輯決策 → M6 決策→成片**

## 3. 為什麼這個方法適合這個問題？

| 問題特性 | 程度 | 這個案例怎麼處理 |
|---|:---:|---|
| 非結構資料理解 | 高 | 把影片變成文字，LLM 最擅長的形式 |
| 成本 | 低 | 不用把影片丟給多模態模型逐格看 |
| 可控性 | 高 | 每一刀都能追溯到時間碼 |
| 結構化輸出 | 高 | 剪輯決策 JSON |
| 人工驗收成本 | 中 | 輸出草稿讓人接手精剪 |

**關鍵洞察**：

1. **轉換模態來降低問題難度**：影片理解很難很貴，文字理解很便宜很準。先轉逐字稿，剪輯就變成編輯文件。這是一個可以套用到很多領域的通用策略。
2. **AI 是腦，CLI 工具是手**（楓羽）：LLM 只做決策，剪接交給 ffmpeg 這種確定性工具。
3. **輸出可編輯的中間物**：剪映草稿、NLE 時間軸、After Effects 專案，讓人可以接手。業界（Descript Underlord、Premiere AI Assistant）也走「AI 粗剪、人精剪」這條路。

## 4. 限制與風險

- 只看逐字稿會漏掉「沒有說話但畫面很精彩」的片段（例如表演、比賽）→ 需要補上視覺模型或規則（AutoClip 對遊戲畫面有可選的視覺模型）
- 人名、術語辨識錯誤 → 詞彙表
- 肖像權與音樂版權

## 5. 可以轉化成什麼教學題目？

> [Lab 10 把社團活動錄影剪成 60 秒精華](../labs/lab-10-event-highlight-editing/)
