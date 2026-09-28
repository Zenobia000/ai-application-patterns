# Higgsfield Game Studio：Claude + Higgsfield MCP 做遊戲

- **來源**：<https://higgsfield.ai/blog/Higgsfield-Games>（2026-06-19）
- **作者 / 組織**：Higgsfield（官方）
- **語言**：EN
- **收錄日期**：2026-09-28

---

## 1. 它解的是什麼問題？

> 從一句話的遊戲點子，到一個有美術資產、可以上線給別人玩的遊戲，中間需要程式、美術、託管三種能力，一個人很難同時具備。

官方原文：「Claude is the brain that designs and writes the game; Higgsfield is what actually makes and hosts it.」

對應應用類別：**D Software**、**C Generative Media**、**G Tool Agent**

## 2. 它用了哪些 Pattern？

- P3 Code & Build：Claude 設計並寫遊戲程式
- P1 Generate：Higgsfield 生成遊戲資產
- P4 Tool Use：Game Studio 以 skill 形式搭配 Higgsfield MCP，讓 Claude 呼叫生成與託管服務

```text
一句話遊戲點子 →
  [Model]         Claude
  [Context]       Game Studio skill（遊戲製作的方法與慣例）
  [Tools]         Higgsfield MCP：影像/影片/角色生成、託管
  [Orchestration] Claude 主導：設計 → 寫程式 → 呼叫生成 → 整合
  [Runtime]       Higgsfield 託管的遊戲頁面
  [Verification]  （官方文章未詳述）→ 實務上需人工試玩
```

## 3. 為什麼這個方法適合這個問題？

| 問題特性 | 程度 | 這個案例怎麼處理 |
|---|:---:|---|
| 狀態／互動 | 高 | 由 Coding Agent 處理遊戲邏輯 |
| 視覺品質 | 高 | 由專門的生成服務提供資產 |
| 多工具整合 | 高 | MCP 讓 Claude 一個入口呼叫所有能力 |
| 人工驗收成本 | 高 | 好不好玩仍需人判斷 |

**關鍵洞察**：這是「P1 生成能力被包成 P4 工具」的典型例子。生成服務不再是一個獨立網站，而是 Coding Agent 工具箱中的一個工具。**Skill（方法）+ MCP（能力）** 的組合也值得注意：skill 告訴 Agent 怎麼做，MCP 讓它做得到。

## 4. 限制與風險

- 依賴單一商業平台（生成與託管都在 Higgsfield）
- 需要付費點數
- 官方示範不等於一般使用者的成功率 → 需要工作坊實測

## 5. 可以轉化成什麼教學題目？

> [Lab 05 期末週紓壓小遊戲](../labs/lab-05-stress-relief-game/)：限定一鍵玩法，讓學生比較「生成服務 MCP」與「手動生圖再放進專案」兩種做法的差異。
