# Market Landscape：商業產品地圖

> 截至 2026-09-28。商業產品變化很快，每一列請附上官方來源與確認日期。
> 本頁的用途是觀察 **趨勢**，而不是推薦產品。

---

## 1. 最大的趨勢：從「單次生成」到「可操作的 Agent」

| 過去 | 現在 |
|---|---|
| AI 產生一段文字 / 一張圖 | AI 看懂任務 → 寫程式 → 呼叫服務 → 操作軟體 → 看結果 → 自己修正 |
| 每個 AI 工具一個網站 | 能力被包成 MCP / API，讓 Agent 在一個入口呼叫 |
| Prompt Engineering | Context、Tools、Verification 的系統設計 |

三個具體訊號：

1. **專業軟體開放給外部 Agent**：Framer、Spline、Blender 都能被 Claude Code / Codex / Cursor 操作
2. **生成服務變成工具**：Higgsfield 以 MCP 形式提供影像、影片、角色、配音
3. **自動化平台 Agent 化**：n8n、Zapier 讓 Agent 自己決定步驟，workflow 變成 Agent 的工具

---

## 2. 依應用類別

### A. Knowledge & Reasoning

| 產品 | 定位 |
|---|---|
| NotebookLM | 上傳文件 → 附引用問答、Podcast |
| Claude Projects / ChatGPT Projects | 專案知識庫 + 對話 |
| 各家 Deep Research 功能 | 多輪搜尋 → 附引用報告 |

### B. Conversational Agent

| 產品 | 定位 | 來源 |
|---|---|---|
| Intercom Fin | 同一 Agent 延伸到 Service / Sales / Ecommerce，以 Procedures 執行業務流程 | [官方](https://www.intercom.com/help/en/articles/12508017-fin-as-a-customer-agent-for-service-sales-and-more) |
| OpenAI Agents SDK | 開發框架：Agents、Handoffs、Guardrails、Sessions、MCP | [官方](https://openai.github.io/openai-agents-python/) |
| Dify / Coze | 低程式碼對話與工作流平台 | [Dify 文件](https://docs.dify.ai/) |

### C. Generative Media

| 產品 | 定位 | 來源 |
|---|---|---|
| Higgsfield | 影像、影片、角色、配音生成；官方 MCP（30+ 模型） | [MCP](https://higgsfield.ai/mcp) |
| ComfyUI | 節點式生成工作流（影像、影片、音訊、3D）+ API，另有 Cloud MCP | [文件](https://docs.comfy.org/) |

### D. Software & Interactive Experience

| 產品 | 定位 | 來源 |
|---|---|---|
| Claude Code | Coding Agent（CLI、桌面、Web、IDE） | — |
| Codex | Coding Agent | — |
| Framer | 網站設計工具，開放外部 Agent 操作 canvas、元件、CMS（beta） | [官方](https://www.framer.com/agents/external/) |

### E. Spatial & 3D

| 產品 | 定位 | 來源 |
|---|---|---|
| Spline V2 | 內建 3D AI Agent（讀 Scene、操作物件/材質/燈光/鏡頭、截圖自檢）+ MCP | [changelog](https://updates.spline.design/changelog/introducing-spline-v2) |
| Blender + blender-mcp | 開源 3D 軟體 + 社群 MCP | [GitHub](https://github.com/ahujasid/blender-mcp) |

### F. Workflow Automation

| 產品 | 定位 | 來源 |
|---|---|---|
| n8n Agents | 2026-09-25 推出（preview）：自然語言定義 Agent，工具可為 MCP / 整合 / workflow，支援人工核准 | [公告](https://blog.n8n.io/introducing-n8n-agents/) |
| Zapier Agents | 連接 9,000+ App；另有 Zapier MCP | [官方](https://zapier.com/agents) |

### G. Computer / Tool Agent

| 產品 | 定位 | 來源 |
|---|---|---|
| Claude Computer Use | 截圖 → 動作的桌面操作工具 | [文件](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool) |
| MCP | 工具存取的開放標準（規格版本 2026-07-28） | [規格](https://modelcontextprotocol.io/specification/latest) |

### 複合式創作管線（2026-09 新增）

| 產品 | 定位 | 來源 |
|---|---|---|
| Higgsfield for Blender + MCP Bridge | Blender 內的白模、角色動畫、影片渲染；Agent 可透過 MCP 驅動 | [官方](https://higgsfield.ai/blog/higgsfield-blender-plugin) |
| Higgsfield Cinema Studio 4.0 | 虛擬機身、鏡頭、30+ 運鏡預設、可重複使用的 AI 角色 | [官方](https://higgsfield.ai/blog/cinema-studio-4-0) |
| Higgsfield MCP Production Bundles | Blender、Premiere、After Effects 等 skills | [官方](https://higgsfield.ai/mcp) |
| Meshy | 圖生 3D、自動綁骨（人形、四足）、500+ 動畫、官方 MCP | [MCP](https://www.meshy.ai/mcp) |
| Tripo | 圖生 3D、綁骨、分件、重拓撲；官方 MCP 為 alpha | [MCP repo](https://github.com/VAST-AI-Research/tripo-mcp) |
| Hunyuan3D | 2.1 開源（社群授權，有地區限制）；3.x 僅雲端 API | [GitHub](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1) |
| TRELLIS.2（微軟） | 4B 參數圖生 3D，repo 標示 MIT | [GitHub](https://github.com/microsoft/TRELLIS.2) |
| Descript Underlord | 「agentic video co-editor」，文字剪輯介面中的批次編修 | [官方](https://www.descript.com/underlord) |
| Adobe Premiere AI Assistant | 2026-06 公開測試：整理素材、找訪談問題、組粗剪；2026-09 擴及 After Effects | [Adobe](https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion) |
| Remotion Claude Code plugin | 官方 plugin，讓 Coding Agent 用 React 寫影片 | [官方](https://www.remotion.dev/docs/ai/claude-code-plugin) |

**觀察**：生成服務正在「進駐」專業軟體（Higgsfield 進 Blender / After Effects），專業軟體也在開放給 Agent（Premiere、Resolve、剪映草稿）。兩邊的交會點就是 MCP。

---

## 3. 待查證

以下說法目前只有二手來源，引用前請找官方頁面：

- Anthropic 官方 Blender connector（2026-04-28 上線）：目前只見於 [Eigent 文章](https://www.eigent.ai/zh-TW/blog/claude-blender-mcp)
- Higgsfield MCP 上線日期（第三方稱 2026-04）
- TRELLIS.2 授權：repo 標示 MIT，但有摘要稱「僅限學術研究」，使用前請確認 LICENSE
- Hunyuan3D 3.0 / 3.1 的發布時間（第三方來源）
- OpenAI「Agents API 以 Codex harness 為基礎」：官方公告頁面無法自動抓取，需手動確認

## 4. 更新方式

新增產品時，請寫：定位（一句話）、對應應用類別、官方來源、確認日期。不要寫「最好」「最強」這類評價。
