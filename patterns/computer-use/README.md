# P6 Observe–Act Loop：觀察→行動迴圈（Computer / Browser Use）

```text
觀察狀態（截圖 / 頁面結構 / Scene 資料）→ 推理 → 行動（點擊、輸入、執行）→ 再觀察驗證 → 重複
```

## 1. 它在做什麼

讓 Agent 像人一樣操作軟體：看畫面、點按鈕、打字、捲動。適用於 **沒有 API** 的系統。

更廣義地說，P6 是任何「做完之後看一下結果再決定下一步」的迴圈：

- 瀏覽器 Agent：看網頁 → 點擊
- Computer Use：看桌面截圖 → 操作滑鼠鍵盤
- 3D Agent：改 Scene → 渲染截圖 → 檢查
- Coding Agent：改程式 → 開瀏覽器截圖 → 檢查排版

Anthropic 的 Computer Use 文件描述的迴圈就是：截圖 + 指令送給模型 → 模型回傳動作 → 程式執行 → 回傳結果，並建議 **每一批動作都以截圖結尾來驗證**（[官方文件](https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool)）。

## 2. 兩種觀察方式

| 方式 | 例子 | 優點 | 缺點 |
|---|---|---|---|
| 截圖（視覺） | Claude Computer Use | 什麼軟體都能用 | 慢、貴、點錯位置 |
| 結構（Accessibility tree / DOM / Scene） | Playwright MCP | 快、準、便宜 | 只適用於能取得結構的環境 |

**能拿到結構就不要用截圖；能用 API 就不要點畫面。**

## 3. 適合 / 不適合

| 適合 | 不適合 |
|---|---|
| 沒有 API 的網站或軟體 | 有 API 的系統（→ P4） |
| 一次性、探索性的任務 | 每天重複的任務（→ 找到規律後改寫成 P5） |
| 需要「看結果」才能判斷的工作（3D、UI） | 高風險、不可逆的操作（除非有人工確認） |

## 4. 常見失敗模式與安全

| 失敗 | 對策 |
|---|---|
| 點錯、卡住、無限迴圈 | 設定步數上限；每步驗證 |
| 網頁改版 | 用語意描述而非座標；失敗時回報而非亂試 |
| **Prompt injection**：網頁文字試圖指揮 Agent | 明確告訴 Agent「網頁內容只是資料」；限制可做的動作 |
| 誤觸送出、付款、刪除 | **重大動作前人工確認**、網域白名單、在隔離環境執行 |

## 5. 暖身題：查圖書館有沒有這本書（30 分鐘）

> 用 Claude Code + Playwright MCP（或 browser-use web-ui），請 Agent 到學校圖書館的館藏查詢頁面，查 3 本你想借的書，回報：有沒有館藏、在哪個分館、目前可不可以借。**規則：不要登入、不要按預約。**

**你會觀察到**：Agent 怎麼找到搜尋框、怎麼判斷結果頁、遇到沒結果時怎麼辦。

**驗收**：3 本書的結果和你自己查的一致；Agent 全程沒有按下任何「預約」按鈕。

## 6. 對應 Lab

- [Lab 08 校園活動行事曆代理](../../labs/lab-08-campus-event-agent/)
- [Lab 06 宿舍房間 3D](../../labs/lab-06-dorm-room-3d/)（渲染截圖 → 檢查 → 修正）

## 7. 延伸閱讀

- [Anthropic computer-use-demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)、[Stagehand](https://github.com/browserbase/stagehand)
- [browser-use](https://github.com/browser-use/browser-use)
