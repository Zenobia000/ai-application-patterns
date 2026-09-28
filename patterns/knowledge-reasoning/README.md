# P2 Retrieve & Reason：檢索與推理

```text
問題 → 檢索相關 Context（文件、資料庫、網頁）→ LLM 根據 Context 推理 → 附引用的答案
```

## 1. 它在做什麼

模型本身不知道「你的」資料：你學校的規定、你公司的產品、你上週的會議紀錄。P2 的做法是 **先找資料，再回答**，最常見的形式是 RAG（Retrieval-Augmented Generation，檢索增強生成）。

進階形式：

- **Agentic RAG**：Agent 自己決定要查幾次、換什麼關鍵字查
- **Deep Research**：Agent 上網搜尋多輪、閱讀多個來源、寫出附引用的報告
- **Text-to-SQL**：把問題轉成資料庫查詢

## 2. 適合 / 不適合

| 適合 | 不適合 |
|---|---|
| 規章、手冊、合約問答 | 需要即時計算的問題（交給程式） |
| 大量文件摘要與比較 | 資料本身就是錯的或過時的 |
| 研究報告、文獻整理 | 答案需要主觀創意（→ P1） |
| 客服知識庫 | 要「做事」而非「回答」（→ P4） |

## 3. 常見失敗模式

| 失敗 | 原因 | 對策 |
|---|---|---|
| 一本正經亂編 | 沒找到資料，模型用常識補 | 設門檻，找不到就回「未找到」 |
| 找錯段落 | 切塊（chunk）方式不好、中文沒斷詞 | 依結構切（條、節）、混合檢索（BM25 + 向量） |
| 引用對不上 | 模型改寫時失真 | 引用要指到具體段落，UI 可一鍵對照 |
| 版本混淆 | 新舊規定都在資料庫 | metadata 標版本、日期 |

## 4. 驗證方法

P2 是少數可以 **系統性評估** 的 Pattern：

1. 建立測試題集（含「文件中沒有答案」的題目）
2. 量測：檢索命中率（Recall@k）、答案正確率、拒答正確率
3. 每次改動都跑一次，看分數有沒有退步

## 5. 暖身題：問你的課程大綱（30 分鐘）

> 把這學期所有課程的大綱（syllabus）PDF 上傳到 NotebookLM 或 Claude Projects，問：
> - 「哪一週我有兩個以上的考試或報告？」
> - 「哪幾門課期末考佔分超過 40%？」
> - 「XX 課可以缺席幾次？」（故意問一門大綱沒寫的）

**你會遇到的問題**：跨文件的問題（第一題）比單一文件難得多；大綱沒寫的，AI 會不會亂編？

**驗收**：自己翻大綱核對 3 題答案。

## 6. 對應 Lab

- [Lab 01 校園規章問答助手](../../labs/lab-01-campus-qa/)
- [Lab 02 校園咖啡店 AI 店員](../../labs/lab-02-cafe-agent/)（菜單與 FAQ 檢索）

## 7. 延伸閱讀

- [Anthropic Cookbook：RAG 與 Contextual Retrieval](https://github.com/anthropics/claude-cookbooks/tree/main/capabilities/retrieval_augmented_generation)
- [Datawhale all-in-rag](https://github.com/datawhalechina/all-in-rag)（中文）
- [deep-research](https://github.com/dzhng/deep-research)：最短的 Research Agent 實作
