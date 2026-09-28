# AI Application Landscape：應用全景與七大類別

> 本文件回答一個問題：**看到一個新的 AI 應用時，要怎麼把它放進一個穩定的座標系？**
>
> 答案是：不要按工具品牌分類，而是按「它在解什麼問題」與「它用了哪些底層模式」分類。

---

## 1. 一條公式：AI Application 的六個組成

```text
AI Application = Model + Context + Tools + Orchestration + Runtime + Verification
```

| 組成 | 問的問題 | 例子 |
|---|---|---|
| **Model** 模型 | 用哪個模型理解與推理？ | Claude、GPT、Gemini、影像/影片/3D 生成模型 |
| **Context** 脈絡 | 模型需要知道什麼才能做對？ | 文件、資料庫、對話歷史、Scene 狀態、螢幕截圖 |
| **Tools** 工具 | 模型能「動手」做什麼？ | API、MCP Server、程式執行、瀏覽器、Blender |
| **Orchestration** 編排 | 誰決定下一步？固定流程還是 Agent 自主？ | Workflow、Agent Loop、Subagents |
| **Runtime** 執行環境 | 成果在哪裡真正跑起來？ | 瀏覽器、雲端、Blender、n8n、LINE |
| **Verification** 驗證 | 怎麼知道做對了？ | 測試、截圖比對、規則檢查、引用來源、人工驗收 |

一般人對 AI 的印象停在 **Model**（「哪個模型比較強」）。真正決定一個應用能不能用的，往往是後面五項。

---

## 2. 一條流程：幾乎所有 Agentic Application 的共同骨架

```text
使用者意圖
    ↓
模型理解 / 推理
    ↓
取得 Context            ← RAG、讀檔、讀 Scene、截圖
    ↓
規劃下一步              ← Plan / Task decomposition
    ↓
呼叫 API / MCP / Code / GUI
    ↓
外部系統真正執行        ← 這一步讓 AI 從「說」變成「做」
    ↓
取得結果
    ↓
模型 / 規則 / 人類驗證
    ↓
修改或交付              ← 不通過就回到「規劃下一步」
```

Claude Code、Codex、Higgsfield MCP、Blender MCP、Framer Agent、n8n Agents，背後都是這條骨架，差別只在：

- **Context 從哪裡來**（程式碼庫、影像參考、3D 場景、企業資料）
- **Tools 碰的是什麼系統**（檔案系統、生成服務、3D 軟體、SaaS）
- **Verification 有多難**（程式可以跑測試；影片美不美只能靠人眼）

---

## 3. 七大應用類別

| 代號 | 應用類別 | 核心問題 | 問題特性 | 常見成果 | 代表使用方式 |
|---|---|---|---|---|---|
| **A** | Knowledge & Reasoning 知識／推理 | 從大量非結構資料取得答案、分析與判斷 | Context 很大、正確性重要、需要引用與驗證 | 研究報告、知識庫、資料分析 | RAG、Research Agent、文件分析 |
| **B** | Conversational Agent 對話服務 | 與人持續互動並完成目標 | 多輪狀態、個人/企業知識、工具操作、權限 | 客服、銷售、家教、助理 | AI 客服、購物助手、訂位 Agent |
| **C** | Generative Media 生成內容 | 創造或修改視覺、影音、聲音 | 主觀品質、參考一致性、風格、速度 | 圖片、廣告、短影音、音樂 | 影像/影片生成、ComfyUI 工作流 |
| **D** | Software & Interactive Experience 軟體／互動體驗 | 把需求轉成可以執行的軟體 | 結構化、State、Logic、Debug、部署 | 網站、App、遊戲、Dashboard | Claude Code、Codex、Framer |
| **E** | Spatial & 3D 空間／3D | 建立具幾何、材質與互動的空間 | Geometry、Scene Graph、Camera、Physics、視覺 QA | 3D 商品、建築、場景、遊戲世界 | Blender MCP、Spline、Three.js |
| **F** | Workflow Automation 流程自動化 | 把跨系統工作串成完整流程 | 非結構輸入、多系統、條件分支、可靠性 | 行銷、報表、CRM、資料處理 | n8n、Zapier、Agent Workflow |
| **G** | Computer / Tool Agent 工具操作 | 直接操作既有軟體完成工作 | GUI/API 操作、觀察→行動迴圈、權限與失敗恢復 | 操作瀏覽器、設計軟體、既有系統 | MCP、Computer Use、Browser Agent |

### 這七類不是互斥的產品，而是可以組合的「應用型態」

真實案例幾乎都是組合：

| 真實案例 | 組合 | 說明 |
|---|---|---|
| AI 商品廣告 | **C + F + G** | 生成素材（C），串成批次流程（F），由 Agent 透過 MCP 呼叫生成服務（G） |
| AI 3D 商品網站 | **E + D + G** | 3D 模型（E），嵌入網頁（D），Agent 操作 Blender 產出（G） |
| AI 客服 | **B + A + F** | 對話（B），查知識庫（A），建立工單/訂單（F） |
| AI 小遊戲 | **D + C + G** | 寫程式（D），生成美術與音效（C），Agent 協調兩者（G） |
| 每週資訊摘要 | **F + A** | 排程抓資料（F），理解與分類（A） |

所以這個 Repo 最後要教的不是「某個工具怎麼用」，而是 **如何辨識問題、選擇 Pattern、組合 Pattern**。

---

## 4. 看到新案例時，問三件事

1. **它解的是什麼問題？** → 對應到 A–G 哪幾類？
2. **它用了哪些 Pattern？** → 對應到 [method-characteristics.md](method-characteristics.md) 的 P1–P6
3. **為什麼這個方法適合這個問題？** → 用 [problem-characteristics.md](problem-characteristics.md) 的問題特性表檢查

複合式案例（三個以上步驟串接）再用 [composite-pipelines.md](composite-pipelines.md) 拆成原子能力與交接物。

把分析結果用 [case-studies/_template.md](../case-studies/_template.md) 記下來，就是這個 Repo 的一筆累積。

---

## 5. 名詞釐清

- **MCP（Model Context Protocol）**：讓模型用標準化介面存取外部資料與工具的協定。常被誤寫成「NCP」。Blender MCP、Higgsfield MCP、Playwright MCP 都是依此協定寫的 Server。官方規格：<https://modelcontextprotocol.io>
- **Agent**：不只回答一句話，而是在一個「harness」中循環執行「觀察 → 規劃 → 使用工具 → 驗證」的系統。需要 context 管理、工具、可能的 subagents、以及檔案/程式執行環境。
- **Pattern（應用模式）**：一種可重複的「問題 → 方法」對應，不會隨著某個工具倒掉而失效。
