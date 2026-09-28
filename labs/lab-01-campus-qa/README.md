# Lab 01｜校園規章問答助手

> **一句話任務**：做一個能回答「學生手冊、選課規定、獎學金辦法」問題的助手，**每個答案都要附上出處（哪份文件、哪一條、第幾頁）**，找不到就老實說找不到。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| A Knowledge & Reasoning | P2 Retrieve & Reason | ★★ | 2–3 小時 |

---

## 1. 為什麼做這件事

每個學生都遇過：「停修的期限是哪天？」「雙主修要幾學分？」「獎學金可以同時領兩個嗎？」答案都在學校網站某個 PDF 裡，但沒人想翻。

直接問 ChatGPT 呢？它會給你一個 **聽起來很對、但是別間學校的規定**。這就是這個 Lab 要讓你親身體會的事：

> **一般聊天機器人的問題不是不夠聰明，而是不知道「你的」資料。而且它不會說「我不知道」。**

做完你會懂：

- 為什麼企業導入 AI 第一步幾乎都是 RAG（檢索增強生成）
- 「附引用」為什麼是可信任 AI 的最低要求
- 讓 AI 說「找不到」比讓它回答更難

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 學生手冊問答 | 企業內部規章 / HR 制度問答 |
| 選課規定問答 | 保險條款、法規遵循查詢 |
| 附條文引用 | 法律、醫療、金融 AI 的基本要求 |
| 不同入學年度適用不同規定 | 合約版本管理、法規修訂追蹤 |

## 3. Pattern 分析

```text
學生問題
  → [Context] 從手冊中檢索相關段落（Retrieve）
  → [Model] 只根據檢索到的段落回答（Reason）
  → [Verification] 附上出處，讓人可以一鍵對照原文
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 非結構資料理解 | 高 | PDF、表格、條文格式各不相同 |
| 正確性／可驗證 | **高** | 錯一個日期就可能讓學生被退學 → 必須附引用 |
| 結構化輸出 | 中 | 答案 + 引用清單 |
| 人工驗收成本 | 中 | 有引用就能快速對照 |

**本題的核心難點不在「生成」，而在「找對段落」與「不會亂編」。**

## 4. 交付物與驗收標準

**交付物**：一個可以輸入問題的介面（網頁、NotebookLM 分享連結、或 Bot 皆可），以及一份測試結果表。

**驗收標準**（先把這段貼給你的 AI 工具）：

1. 準備 **10 題測試題**，其中：
   - 6 題答案明確在文件中
   - 2 題需要結合兩份文件才能回答
   - 2 題**文件中沒有答案**（例如「學校餐廳幾點開？」）
2. 答對的題目，每題都有正確的引用（文件名 + 條號或頁碼）
3. 文件中沒有答案的 2 題，系統要回答「文件中未找到」而不是瞎編
4. 用表格記錄 10 題的結果：正確 / 部分正確 / 錯誤 / 亂編

## 5. 建議路線

### 路線 A：零程式（30 分鐘上手）

1. 從學校網站下載 3–5 份 PDF：學生手冊、選課辦法、獎學金辦法、宿舍規定。
2. 上傳到 **NotebookLM** 或 **Claude Projects**。
3. 在指示中加入：「只能根據上傳文件回答；每個回答標註文件名與條號；找不到就說『文件中未找到』」。
4. 跑 10 題測試，填表。

> 路線 A 的重點是體驗「給 AI 正確的 Context」的威力，以及觀察它在哪裡仍然會失敗。

### 路線 B：自己搭 RAG（2–3 小時）

1. 用 Claude Code 或 Codex 起一個專案，任務描述範例：

   ```text
   建立一個 Python 專案（FastAPI + 簡單 HTML 前端），對 docs/ 下的 PDF 做 RAG 問答：
   - 解析 PDF，依「條」切分 chunk，保留文件名、條號、頁碼作為 metadata
   - 使用混合檢索（BM25 + 向量），中文要先斷詞
   - 回答時只能引用檢索到的段落，並以 [1][2] 標註出處，下方列出來源卡片
   - 若最相關段落分數低於門檻，回答「文件中未找到」
   - 附一個 eval.py，跑 tests/questions.yaml 的 10 題並輸出結果表
   ```

2. 比較路線 A 與 B 在 10 題上的表現。

### 延伸挑戰

- **入學年度**：不同學年入學的學生適用不同規定，怎麼讓系統問「你是哪一年入學的」？
- **Deep Research**：問「比較本校與另外兩所大學的雙主修規定」，需要上網查資料並整合（參考 deep-research 專案）。
- **成本控制**：常見問題直接從 FAQ 回答，不呼叫 LLM（參考 faq-bot 專案）。

## 6. 參考專案

別人已經整合好的完整專案（網址於 2026-09 確認存在）：

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [school-handbook-agent](https://github.com/eternal1717/school-handbook-agent) | 中文 | FastAPI + ChromaDB + BM25/RRF + DeepSeek + Vue 3 | **幾乎就是本題的完整版**。每個結論標出規章、章節與頁碼；找不到直接回「手冊中未找到」；附 recall@5 與拒答率的評估 |
| [CampusMind](https://github.com/zhuyuxin29/CampusMind) | 中文 | Streamlit + Chroma + jieba/BM25 + bge-m3 + reranker + OCR | 學生手冊問答，[1][2] 引用、來源卡片顯示「檔名 / 章節 / 頁碼」；問題太模糊時會先反問。規模小，讀得完 |
| [campus_rag](https://github.com/hxj1007/campus_rag) | 中文 | FastAPI + LangChain + Chroma + 原生 HTML | 最簡單的骨架，適合當路線 B 起點。沒有引用功能，可以當作業自己補 |
| [NQU Campus AI Assistant（金門大學）](https://github.com/Rafu2102/RAG-) | 中文（台灣） | Gemini + FAISS + BM25 + reranker + Discord/Telegram Bot | 台灣學校的選課助手，還能解析成績單算 GPA。需要 GPU，適合當延伸參考 |
| [faq-bot](https://github.com/currycm/faq-bot) | 中文 | FastAPI + Streamlit + bge-small-zh | 約九成問題直接從知識庫回答不呼叫 LLM；有個資遮罩、注入偵測、成本上限 |
| [HCMUE Student Handbook RAG](https://github.com/AnhPhiNe/student-handbook-rag-chatbot) | 英文 | FastAPI + Qdrant + bge-m3 + React | 依入學年度隔離規章、每個答案附條文引用、有凍結的評估資料集（進階範例） |
| [kotaemon](https://github.com/Cinnamon/kotaemon) | 英文 | Gradio + 可接本地模型 | 引用可在 PDF 檢視器中高亮原文，Docker 一行啟動，適合課堂展示「好的引用長什麼樣」 |
| [Open Notebook](https://github.com/lfnovo/open-notebook) | 英文 | Next.js + Python + 多模型 | 開源版 NotebookLM，可以完全本地執行 |
| [deep-research](https://github.com/dzhng/deep-research) | 英文 | TypeScript + Firecrawl | 不到 500 行的遞迴式研究 Agent，最好讀的 Research Agent 範例 |

教學資源：

- [Datawhale all-in-rag](https://github.com/datawhalechina/all-in-rag)（中文 RAG 全端教程，適合預習）
- [Anthropic Claude Cookbooks：RAG](https://github.com/anthropics/claude-cookbooks/tree/main/capabilities/retrieval_augmented_generation)（含 Contextual Retrieval 與評估）
- [OpenAI Cookbook：File Search in Responses API](https://developers.openai.com/cookbook/examples/file_search_responses)

> 注意：多數中文專案使用 DeepSeek / SiliconFlow。若工作坊統一使用 Claude 或 OpenAI，需要替換模型層。

### 影片示範：先看真人怎麼做

共 8 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT\| 分析報告 \| 會議記錄 \| 自動生成Podcast、教學影片](https://www.youtube.com/watch?v=zgWerTIynVA)（大有牧森 Austin Chou，ZH-TW）：繁中入門，路線 A（零程式）直接照做
- [使用 Dify 打造 AI 客服知識庫 \| 10 秒完成匯入！Embedding + Rerank + RAG 混合查詢全攻略 (附 CC 字幕)](https://www.youtube.com/watch?v=n64_cF4KGLY)（凱文大叔AI程式設計教室，ZH-TW）：用繁中講清楚「檢索品質」這個本題核心難點
- [Learn 80% of NotebookLM in Under 13 Minutes!](https://www.youtube.com/watch?v=EOmgC3-hznM)（Jeff Su，EN）：最快看懂「有來源依據的問答」長什麼樣

## 7. Showcase

| 組別 | 成果連結 | 一句心得 |
|---|---|---|
| | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
