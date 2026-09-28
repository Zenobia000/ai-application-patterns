# Domain：Video Advertising 影音廣告

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P5 Workflow](../../patterns/workflow-agent/)

## 1. 問題長什麼樣

用最少的人力與預算，產出大量、多尺寸、風格一致的影音廣告素材。

典型流程：

```text
商品照 → 廣告腳本 → 分鏡（Shot）→ 生成圖像/影片 → 配音（Voice）→ 字幕 → 多尺寸輸出
```

市場現況：

- **生成服務 Agent 化**：Higgsfield 已不是單純的 Text-to-Video，而是透過官方 MCP 讓 Claude 等 Agent 呼叫影像、影片、角色、配音能力（[MCP](https://higgsfield.ai/mcp)、[Claude 創意工作室示範](https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio)）
- **可程式化生成工作流**：ComfyUI 把影像、影片、音訊、3D 都抽象成可重用節點圖並提供 API，適合研究「可重複的生成流程」（[官方文件](https://docs.comfy.org/)）
- **一條龍開源專案**：MoneyPrinterTurbo 等專案把腳本、素材、配音、字幕、合成全自動化
- **Workflow 化**：n8n 已有「上傳商品照 → 自動產生 UGC 廣告短片」的範本

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 時間一致性 | 同一個角色/商品在不同鏡頭長得不一樣 |
| 參考一致性 | 生成的商品和真實商品不像 |
| 視覺品質主觀 | 沒有自動評分，只能人看 |
| 文字 | 畫面中的文字常錯 → 後製疊字 |
| 驗收成本 | 生成很快，挑選很慢 |

## 3. Pattern 組合

| 階段 | Pattern |
|---|---|
| 腳本與分鏡 | P2（理解商品與客群）+ LLM 寫作 |
| 影像、影片、配音生成 | P1 |
| Agent 呼叫生成服務 | P4 |
| 用程式剪輯、多尺寸輸出（Remotion） | P3 |
| 批次為多家店製作 | P5 |

## 4. 工作坊題目

**主題目**：[Lab 03 幫巷口小店做 15 秒短影音](../../labs/lab-03-shop-video-ad/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **社團招生 30 秒影片** | 用社團活動照片當參考，做出有故事感的招生影片 | 用真實照片做 image-to-video、敘事節奏 |
| **二手書/二手物交換活動宣傳** | 為校內的交換市集做一系列 3 支短影音 | 系列化：同一風格、不同內容的批次生成 |

## 5. 放大到真實世界

電商廣告素材量產、品牌社群內容、廣告 A/B 測試、在地商家行銷服務、多語言影片在地化。

## 6. 參考

見 [Lab 03 參考專案](../../labs/lab-03-shop-video-ad/#6-參考專案)。
