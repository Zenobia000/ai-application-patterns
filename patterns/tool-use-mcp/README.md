# P4 Tool Use：API / MCP 工具使用

```text
Agent 決定要做什麼 → 呼叫工具（API / MCP Server）→ 外部系統真正執行 → 回傳結果 → Agent 決定下一步
```

## 1. 它在做什麼

讓模型從「說」變成「做」。模型本身只能產生文字，但它可以輸出一個 **結構化的工具呼叫**（例如 `place_order(item="拿鐵", qty=2)`），由程式真正去執行。

**MCP（Model Context Protocol）** 是這件事的標準化協定：

- 以 JSON-RPC 2.0 連接 Host（如 Claude Desktop）、Client、Server
- Server 提供 **Tools**（可執行的動作）、**Resources**（可讀的資料）、**Prompts**（範本）
- 同一個 MCP Server 可以給不同的 Agent 使用：Blender MCP 可以給 Claude Code，也可以給 Cursor
- 規格明文要求：**Host 在呼叫工具前必須取得使用者明確同意**

官方規格：<https://modelcontextprotocol.io/specification/latest>

常見的 MCP Server：Blender MCP（3D）、Higgsfield MCP（影像影片生成）、Playwright MCP（瀏覽器）、Spline MCP（3D 設計）、Zapier MCP（數千個 SaaS）、Filesystem MCP。

## 2. 適合 / 不適合

| 適合 | 不適合 |
|---|---|
| 操作有 API 的專業軟體 | 沒有 API 的系統（→ P6） |
| 查詢即時資料（庫存、訂單、天氣） | 固定不變的流程（→ P5 比較穩） |
| 讓 Agent 在多個系統間協作 | 權限無法控管的高風險操作 |

## 3. 常見失敗模式

| 失敗 | 原因 | 對策 |
|---|---|---|
| 參數錯誤 | 工具描述不清楚 | 寫清楚的工具說明與參數範例 |
| 模型「以為」做了 | 沒有檢查回傳結果 | 要求 Agent 讀回狀態確認 |
| 被誘導執行危險動作 | Prompt injection | 後端驗證、權限最小化、人工確認 |
| 信任模型給的值 | 例如模型自己填價格 | **後端以資料庫為準**，模型只給意圖 |

## 4. 核心設計原則：決策與執行分離

```text
模型：我想幫客人下單「拿鐵 x2，價格 100」
後端：品項存在嗎？✓　價格以菜單為準：120（忽略模型給的 100）　數量合理？✓
      → 需要客人確認嗎？是 → 先回傳確認訊息
```

模型負責 **理解與決定**，系統負責 **驗證與執行**。

## 5. 暖身題：讓 AI 幫你整理下載資料夾（30 分鐘）

> 在 Claude Desktop 中啟用 Filesystem MCP，**只開放一個測試資料夾**（先複製一份你的「下載」資料夾進去）。請它：
> 1. 先列出分類計畫（PDF 講義、圖片、安裝檔、其他），**不要動任何檔案**
> 2. 你確認後再搬移
> 3. 最後列出搬移紀錄

> 註：Claude Code 本身就有內建檔案工具，不需要 Filesystem MCP。但內建工具不是 MCP，資料夾範圍也不是由 server 強制限制，所以這題刻意用 Claude Desktop 體驗 MCP 的權限邊界。

**你會學到**：工具呼叫長什麼樣、權限範圍的重要性、「先計畫再執行」的設計。

**驗收**：沒有任何檔案被刪除；搬移紀錄和實際結果一致。

## 6. 對應 Lab

- [Lab 02 校園咖啡店 AI 店員](../../labs/lab-02-cafe-agent/)（下單工具）
- [Lab 03 小店短影音](../../labs/lab-03-shop-video-ad/)（生成服務 MCP）
- [Lab 06 宿舍房間 3D](../../labs/lab-06-dorm-room-3d/)（Blender MCP）

## 7. 延伸閱讀

- [MCP 官方規格](https://modelcontextprotocol.io/specification/latest)
- [blender-mcp](https://github.com/ahujasid/blender-mcp)、[Playwright MCP](https://github.com/microsoft/playwright-mcp)、[Higgsfield MCP](https://higgsfield.ai/mcp)、[Spline MCP](https://docs.spline.design/generate/spline-mcp-server)
