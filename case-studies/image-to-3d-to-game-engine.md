# 圖片 → 3D → Blender → 遊戲引擎（Agent 串接多個 MCP）

- **來源**：
  - [Claude MCP + Blender / Unity 自動化全指南（CSDN）](https://blog.csdn.net/2301_78671196/article/details/160085812)（2026-09）
  - [threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills)
- **語言**：ZH / EN
- **收錄日期**：2026-09-28

---

## 1. 它解的是什麼問題？

> 做一個有 3D 角色與場景的遊戲，需要原畫、建模、材質、場景、程式等多種專業；想讓 Agent 一路從一張圖做到可以玩。

對應應用類別：**C Generative Media**、**E Spatial & 3D**、**D Software**、**G Tool Agent**

## 2. 它用了哪些 Pattern？

CSDN 案例的鏈：

```text
圖片 → TRELLIS（圖生 3D）→ Blender MCP（建模、上材質）→ Unity MCP（擺場景、加 FPS 控制器）
```

threejs-game-skills 的鏈：

```text
Gemini 概念圖 → Tripo 圖生 3D（GLB）→ Three.js → 可玩的瀏覽器遊戲（附配音與音效）
```

```text
  [Model]         Claude Code / Codex + 圖生 3D 模型
  [Context]       概念圖、Scene 狀態、專案程式碼
  [Tools]         圖生 3D API、Blender MCP、Unity MCP 或 Three.js 程式
  [Orchestration] Agent 依 skill / 指示逐步執行
  [Runtime]       Blender → Unity / 瀏覽器
  [Verification]  截圖、試玩
```

原子能力鏈：**V1 → V3 → V4 →（V5）→ V8 → C1**

## 3. 為什麼這個方法適合這個問題？

| 問題特性 | 程度 | 這個案例怎麼處理 |
|---|:---:|---|
| 多工具整合 | 極高 | 一個 Agent 串接 3–4 個工具 / MCP |
| 結構化輸出 | 高 | GLB / FBX 是工具之間的合約 |
| 視覺品質 | 中 | 生成模型品質已可做原型 |
| 人工驗收成本 | 高 | 每個交接處都可能出錯 |

**關鍵洞察**：

1. **3D 格式就是 API**。GLB 讓圖生 3D、Blender、Three.js、Unity 之間可以不經人手交接。
2. **Skill 是管線的說明書**。threejs-game-skills 把「用什麼工具、按什麼順序、輸出什麼規格」寫成 Agent 可讀的 skill，這就是 [composite-pipelines.md](../taxonomy/composite-pipelines.md) 裡 `PIPELINE.md` 的做法。
3. 目前 **綁骨與動畫** 仍是最常卡關的一段（面數過高、非人形角色）。

## 4. 限制與風險

- 生成模型的授權差異很大（Hunyuan3D 社群授權有地區限制；TRELLIS.2 標示 MIT）
- 多個付費 API 串接，成本需要預估
- 目前少有「用這類資產完成並上架的遊戲 + 事後檢討」的公開案例 → 工作坊可以補上這份資料

## 5. 可以轉化成什麼教學題目？

> [Lab 09 社團吉祥物：從一張圖到可玩的 3D 角色](../labs/lab-09-mascot-image-to-3d-game/)
