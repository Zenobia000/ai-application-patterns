# Claude + Blender MCP：平面圖 → 3D 房屋

- **來源**：<https://www.sidharthsatapathy.com/blog/claude-blender-mcp-floor-plan-to-3d-house/>
- **作者**：Sidharth Satapathy
- **語言**：EN
- **收錄日期**：2026-09-28

---

## 1. 它解的是什麼問題？

> 手上有一張 2D 平面圖，想快速看到有家具、有材質的 3D 空間，但不會 3D 建模。

對應應用類別：**E Spatial & 3D**、**G Computer / Tool Agent**

## 2. 它用了哪些 Pattern？

- P3 Code & Build：Claude 撰寫 Blender Python（bpy）
- P4 Tool Use：透過 blender-mcp 在 Blender 中執行
- P6 Observe–Act Loop：渲染俯視圖，與原始平面圖比對後修正

```text
平面圖（圖片）→
  [Model]         Claude（多模態，讀平面圖）
  [Context]       平面圖、目前 Scene 狀態、渲染截圖
  [Tools]         blender-mcp：執行 bpy、截圖
  [Orchestration] Agent 自主迴圈：建模 → 渲染 → 比對 → 修正
  [Runtime]       Blender
  [Verification]  俯視渲染 vs 平面圖（模型自己比對）+ 人工最終確認
```

## 3. 為什麼這個方法適合這個問題？

| 問題特性 | 程度 | 這個案例怎麼處理 |
|---|:---:|---|
| 非結構資料理解 | 高 | 多模態模型讀平面圖 |
| 正確性（幾何） | 高 | 俯視圖與平面圖比對 |
| 視覺品質 | 中 | 材質、燈光、flythrough |
| 結構化輸出 | 高 | Scene 本身是結構化資料 |
| 多工具整合 | 中 | Blender 單一軟體 |
| 人工驗收成本 | 高 → 中 | 截圖回饋讓 Agent 先自我修正一輪 |

**關鍵洞察**：作者的描述是「做完之後看一下自己做了什麼，再修正」。這個 P6 迴圈是 3D 能交給 Agent 的前提，因為幾何錯誤單靠文字推理很難發現。

## 4. 限制與風險

- 牆壁、開口、家具間距是否真的符合建築規範，仍需人工檢查
- 複雜家具需要外部資產，否則只能是簡單幾何
- Agent 的自我檢查只能發現「看得出來」的錯誤

## 5. 可以轉化成什麼教學題目？

> [Lab 06 用 AI 佈置我的宿舍房間](../labs/lab-06-dorm-room-3d/)：把「平面圖」換成學生自己量的宿舍尺寸，把「房屋」縮小成一個房間。
