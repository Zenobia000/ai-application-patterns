# Domain：AI 3D 資產管線（圖 → 3D → 綁骨 → 遊戲 / 影片 / 列印）

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P5 Workflow](../../patterns/workflow-agent/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

把一個角色或物件的「想法」，變成可以在不同地方使用的 3D 資產：

```text
文字設定 → 概念圖 → 3D 模型 → 清理 → 綁骨與動畫 → ┬→ 遊戲引擎 / 網頁（GLB）
                                                     ├→ Blender 場景 → AI 影片（見 Lab 11）
                                                     ├→ AR（USDZ）
                                                     └→ 3D 列印（STL / 3MF）
```

這是典型的 **複合式應用**：每一步都有成熟的 AI 工具，但整條管線的品質取決於交接。拆解方法見 [composite-pipelines.md](../../taxonomy/composite-pipelines.md)。

市場現況（2026-09）：

| 步驟 | 代表工具 | 狀態 |
|---|---|---|
| 圖 → 3D（開源） | Hunyuan3D 2.1、TRELLIS.2 | Hunyuan3D 3.x 僅雲端 API；TRELLIS.2 為 4B 參數 |
| 圖 → 3D（商業） | Tripo、Meshy、Rodin | 皆提供自動綁骨、動畫、多格式匯出 |
| MCP | Meshy（官方）、Tripo（官方 alpha）、Hunyuan3D（騰訊 CloudBase 範本）、blender-mcp 內建 Hunyuan3D / Rodin | Agent 可直接呼叫 |
| 自動綁骨 | Mixamo、AccuRig、UniRig（開源）、Tripo / Meshy 內建 | 非人形角色仍困難 |
| Blender 整合 | blender-mcp、Higgsfield Blender 外掛 | Agent 可操作 Blender |

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 背面與細節 | 單張圖生成時，看不到的部分是模型「猜」的 → 多視角輸入 |
| 拓撲與面數 | 生成模型面數高、拓撲亂 → 減面、重拓撲 |
| 比例與座標 | 尺寸隨機、Z-up vs Y-up → 交接規格 |
| 綁骨 | 面數過高會失敗；非人形困難 |
| 授權 | 開源模型授權各不相同，商用前要確認 |

## 3. Pattern 組合

| 階段 | 原子能力 | Pattern |
|---|---|---|
| 概念圖 | V1、V2 | P1 |
| 圖 → 3D | V3 | P1 + P4 |
| Blender 清理 | V4 | P4 + P3 |
| 綁骨動畫 | V5 | P1 + P4 |
| 引擎 / 網頁 | V8 | P3 |
| 截圖與試玩 | C2 | P6 |

## 4. 工作坊題目

**主題目**：[Lab 09 社團吉祥物：從一張圖到可玩的 3D 角色](../../labs/lab-09-mascot-image-to-3d-game/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **系館公仔 3D 列印** | 把系館或系上吉祥物做成桌上小公仔，用學校的 3D 印表機印出 | STL 輸出、水密（watertight）檢查、實體驗收 |
| **二手書店的 3D 商品頁** | 幫小店把 5 件商品從照片轉成 3D，放在網頁上可旋轉 | 批次化（P5）、多視角拍攝、面數與載入速度 |

## 5. 放大到真實世界

遊戲資產量產、電商 3D 商品展示、AR 試用、品牌 IP 與周邊、VTuber 形象、手辦原型。

## 6. 參考

見 [Lab 09 參考專案](../../labs/lab-09-mascot-image-to-3d-game/#6-參考專案) 與 [案例分析](../../case-studies/image-to-3d-to-game-engine.md)。
