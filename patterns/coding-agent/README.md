# P3 Code & Build：Coding Agent

```text
需求（Brief）→ Agent 規劃 → 寫程式 → 執行 → 測試/截圖 → 修正 → 交付可運作的軟體
```

## 1. 它在做什麼

Claude Code、Codex 這類 Coding Agent 不只是「產生程式碼片段」，而是在一個有檔案系統、終端機、瀏覽器的環境裡，**自己建專案、裝套件、執行、看錯誤訊息、修正**，直到東西真的能跑。

關鍵概念：

- **Harness**：Agent 需要的完整執行環境，包括 context 管理、工具、subagents、檔案與程式執行環境
- **專案說明書**：`CLAUDE.md` / `AGENTS.md`，告訴 Agent 這個專案的慣例、指令、限制
- **可玩 / 可用里程碑**：一次只要求一小步，每步都能驗證

P3 也是其他 Pattern 的「黏著劑」：Agent 寫程式去呼叫生成 API（P1）、操作 Blender（P4）、開瀏覽器截圖（P6）。

## 2. 適合 / 不適合

| 適合 | 不適合 |
|---|---|
| 網站、App、遊戲、Dashboard | 需求本身還沒想清楚 |
| 資料處理腳本 | 需要高度主觀的視覺判斷（Agent 會做出「平均值」） |
| 把其他 Pattern 串起來的膠水程式 | 你完全無法驗收的東西 |
| 原型驗證 | 涉及安全、金流卻沒人審查 |

## 3. 常見失敗模式

| 失敗 | 原因 | 對策 |
|---|---|---|
| 做出來都長一樣（紫色漸層 + Inter） | 需求模糊，模型回到平均值 | 寫 Brief 與設計規範、使用 frontend-design 類 skill |
| 說「完成了」但其實壞掉 | 沒有驗證步驟 | 要求 Agent 執行、跑測試、截圖 |
| 越改越亂 | 一次要求太多 | 里程碑推進，每步 commit |
| 改 A 壞 B | 沒有測試 | 先寫測試或驗收清單 |

## 4. 驗證方法

P3 是 **最容易自動驗證** 的 Pattern，這也是 Coding Agent 最先成熟的原因：

1. 自動測試（單元測試、E2E）
2. 瀏覽器截圖（桌機 + 手機）
3. Lighthouse 等工具評分
4. 人工最終驗收：真的拿給使用者用

## 5. 暖身題：「今天吃什麼」轉盤（30 分鐘）

> 讓 Coding Agent 做一個網頁轉盤：輸入學校附近的餐廳清單，按下按鈕轉動，停在某一家。要有轉動動畫、可以增刪餐廳、重新整理後清單還在。

**你會遇到的問題**：「轉盤停的位置」和「顯示的結果」對不上，這是很典型的 AI 邏輯錯誤。你要怎麼描述這個 bug 讓 Agent 修好？

**驗收**：轉 10 次，指針指到的餐廳和顯示的名字 10 次都一致；手機上可以用。

## 6. 對應 Lab

- [Lab 04 社團招生 Landing Page](../../labs/lab-04-club-landing-page/)
- [Lab 05 期末週紓壓小遊戲](../../labs/lab-05-stress-relief-game/)

## 7. 延伸閱讀

- [Anthropic：透過 Skills 改善前端設計](https://claude.com/blog/improving-frontend-design-through-skills)
- [OpenAI：用 Codex 做瀏覽器遊戲](https://learn.chatgpt.com/use-cases/browser-games)
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/)（Agent、Handoffs、Guardrails、Sessions、Tools/MCP、Sandbox）
