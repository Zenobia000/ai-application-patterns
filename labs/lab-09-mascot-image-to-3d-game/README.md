# Lab 09｜社團吉祥物：從一張圖到可玩的 3D 角色

> **一句話任務**：幫社團設計一隻吉祥物。從文字設定生成概念圖 → 轉成 3D 模型 → 在 Blender 清理與縮放 → 自動綁骨並套上走路 / 跳躍動畫 → 放進一個網頁小遊戲，讓大家用鍵盤操控牠在校園小場景裡跑來跑去。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| C Media + E 3D + D 軟體（複合） | P1 + P4 + P3 + P6 | ★★★★ | 4–5 小時（小組） |

串起來的原子能力（見 [composite-pipelines.md](../../taxonomy/composite-pipelines.md)）：**V1 文字→圖 → V2 多視角/去背 → V3 圖→3D → V4 清理與縮放 → V5 綁骨與動畫 → V8 3D→網頁遊戲**

---

## 1. 為什麼做這件事

一年前，「做一隻 3D 遊戲角色」需要：原畫師、3D 建模師、綁骨師、動畫師、程式設計師。現在每一個步驟都有 AI 工具，**看起來** 一個人一個下午就能做完。

實際做了你會發現：每個工具單獨都很厲害，但 **接起來處處是坑**：

| 交接處 | 你會遇到的事 |
|---|---|
| 概念圖 → 3D | 背面是模型「猜」的；圖上的配件變成一坨 |
| 3D → Blender | 模型 30 萬面、尺寸隨機、原點在肚子 |
| 3D → 綁骨 | 面數太高綁骨失敗；非人形角色（四腳、沒有手）綁不上 |
| 綁骨 → 遊戲 | 動畫名稱對不上、角色躺著（座標軸不同）、檔案 50MB 網頁載不動 |

這個 Lab 的重點就是 **交接**：

> **每個 AI 工具都是 80 分，但五個 80 分的步驟串起來，可能只剩 33 分。**
> 複合應用的品質，取決於你怎麼定義與檢查每個交接物。

做完你會懂：

- 「圖 → 3D → 遊戲」這條管線的每個原子能力
- 為什麼需要 `PIPELINE.md`（交接規格）
- 什麼步驟該交給 Agent（Blender 清理、寫遊戲），什麼步驟該由人把關（角色設計、動畫手感）

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 社團吉祥物 | 品牌 IP、VTuber 形象、遊戲角色 |
| 圖 → 3D | 遊戲資產量產、電商 3D 商品 |
| 自動綁骨與動畫 | 獨立遊戲、Roblox / UGC 平台創作 |
| GLB 放上網頁遊戲 | Web 3D 行銷、互動廣告 |
| （延伸）3D 列印公仔 | 周邊商品、手辦原型 |

## 3. Pattern 分析

```text
吉祥物設定（名字、個性、社團特色）
  → [V1] 生成概念圖（正面、T-pose / A-pose、白底）                 ← P1，人工挑選
  → [V2] 補側面、背面視圖；去背                                    ← P1
  → [V3] 圖 → 3D（Hunyuan3D / TRELLIS / Tripo / Meshy）             ← P1 + P4
  → [V4] Agent 透過 Blender MCP：減面、設高度 1.0m、原點到腳底、檢查破面  ← P4 + P3
  → [V5] 自動綁骨 + 套 idle / walk / jump 動畫（Mixamo / Meshy / Tripo） ← P1 + P4
  → [V8] 匯出 GLB（Y-up、貼圖內嵌、< 10MB）
  → [C1] Claude Code 用 Three.js 做小遊戲：WASD 移動、空白鍵跳躍、收集物品 ← P3
  → [C2] Playwright 開瀏覽器試玩截圖                                ← P6
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 視覺品質 | 高 | 概念圖階段人工把關 |
| 結構化輸出 | **高** | GLB 規格寫進 PIPELINE.md |
| 多工具整合 | **高** | 4–6 個工具，每個交接都要驗證 |
| 可控性 | 中 | Blender 清理步驟可程式化、可重跑 |
| 人工驗收成本 | 高 | 每個交接點截圖；最後試玩 |

## 4. 交付物與驗收標準

**交付物**：

1. `PIPELINE.md`：每個交接物的規格（見下方範本）
2. `concept/`：概念圖（含採用與淘汰的版本）
3. `mascot.glb`：綁好骨、含 idle / walk / jump 動畫
4. 一個可以玩的網頁（GitHub Pages / Vercel）
5. `handoff-log.md`：每個交接處遇到的問題與解法（這是最有研究價值的部分）

**`PIPELINE.md` 範本**：

```markdown
| 交接物 | 格式 | 規格 |
|---|---|---|
| 概念圖 | PNG | 1024x1024、白底、A-pose、正面 + 側面 + 背面 |
| 原始 3D | GLB | 生成工具直接輸出，不修改 |
| 清理後 3D | GLB | 高 1.0m、原點在腳底中央、面數 < 20k、無破面 |
| 綁骨模型 | FBX/GLB | 動畫片段名稱：idle / walk / jump |
| 遊戲用 | GLB | Y-up、貼圖內嵌、< 10MB |
```

**驗收標準**：

1. 遊戲中的吉祥物和概念圖看得出是同一隻（找 3 位同學判斷）
2. 走路和跳躍動畫正確播放、角色沒有躺著或陷進地板
3. 網頁在手機上 5 秒內載入完成
4. `handoff-log.md` 至少記錄 3 個交接問題與解法
5. 記錄每個步驟的工具、花費時間、重做次數

## 5. 建議路線

### 路線 A：Agent 一條龍（推薦）

用 Claude Code 當總指揮，搭配 Blender MCP 與生成服務：

```text
我們要做社團吉祥物「小光」（攝影社，一隻抱著相機的圓滾滾貓頭鷹）。
請依 PIPELINE.md 的規格逐步進行，每一步完成後停下來給我看截圖再繼續：
1. 我會提供概念圖 concept/front.png
2. 透過 Blender MCP，用 Hunyuan3D（或 Hyper3D）從概念圖生成 3D 模型並匯入
3. 在 Blender 中：減面到 < 20k、縮放到高 1.0m、原點移到腳底、檢查破面，
   從正面、側面、背面各渲染一張圖
4. 匯出 mascot_clean.glb
（綁骨我會在 Mixamo / Meshy 手動完成，完成後放到 assets/mascot.glb）
5. 用 Three.js 建立小遊戲：草地場景、WASD 移動、空白鍵跳躍、收集 10 個相機、計時
6. 用 Playwright 開啟頁面、模擬按鍵，截圖確認角色有動畫且站在地面上
```

> blender-mcp 內建 Hunyuan3D、Hyper3D Rodin 等生成整合；Meshy 提供官方 MCP（含生成、減面、綁骨、動畫）；Tripo 官方 MCP 目前仍是 alpha。

### 路線 B：手動串接（L1，先體驗每個交接）

概念圖（任何生圖工具）→ Meshy / Tripo 網頁版轉 3D 並自動綁骨 → 下載 GLB → Blender 手動檢查 → 丟進 Three.js 範本。**建議先做一次路線 B**，才知道路線 A 的 Agent 幫你省了什麼。

### 路線 C：開源本地（需要 GPU）

ComfyUI + Hunyuan3D 2.1 / TRELLIS.2 → Blender 自動減面與 PBR → UniRig 自動綁骨。可參考 comfyui-ai-gamedev。

### 延伸挑戰

- **3D 列印公仔**：同一個模型輸出 STL，送到學校的 3D 印表機（參考下方「手辦自由」案例）
- **接 Lab 11**：把吉祥物放進 Blender 白模場景，做成動畫廣告
- **綁骨工具比較**：同一個模型分別用 Mixamo、Meshy、Tripo 綁骨，比較結果（參考 StraySpark 評比）
- **非人形角色**：四腳動物或沒有手的角色，自動綁骨會發生什麼事？

## 6. 參考專案

### 完整管線案例

| 專案 | 語言 | 串接步驟 | 為什麼值得看 |
|---|---|---|---|
| [threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills) | 英文 | 概念圖 → Tripo 圖生 3D → Three.js → 可玩的瀏覽器遊戲 | **與本 Lab 最接近**：Claude Code / Codex skills，附 5 個 demo |
| [Claude MCP + Blender / Unity 自動化全指南（CSDN）](https://blog.csdn.net/2301_78671196/article/details/160085812) | 中文 | 圖片 → TRELLIS → Blender MCP 建模上材質 → Unity MCP 擺場景、加 FPS 控制器 | **最完整的中文 Agent 案例**，一路串到遊戲引擎 |
| [Blender-MCP + Claude Code 自動建模（博客園）](https://www.cnblogs.com/wgwyanfs/p/20314788) | 中文 | Claude Code → blender-mcp → Rodin 生成 → 匯出 → Unity / Three.js | 中文逐步實作 |
| [comfyui-ai-gamedev](https://github.com/mattwilliamson/comfyui-ai-gamedev) | 英文 | 參考圖 → Hunyuan3D 2.1 → Blender 自動減面、PBR → 引擎用 GLB | 節點化的遊戲資產管線（路線 C） |
| [AI Auto-Rigging Showdown 2026（StraySpark）](https://www.strayspark.studio/blog/ai-auto-rigging-showdown-2026-tripo-meshy-cascadeur-mixamo) | 英文 | 生成 → 自動綁骨 → Blender → Unreal → 動畫測試 | 同一管線比較 5 種綁骨工具，適合課堂比較 |
| [Tripo 完整角色工作流（Bilibili 中配）](https://www.bilibili.com/video/BV1wr8L6xEVi/) | 中文 | Tripo 生成 → 貼圖 → Blender 組裝 → AccuRig 綁骨 → UE | 角色管線的完整示範 |
| [Nano Banana 手辦自由（CSDN）](https://blog.csdn.net/qq1198768105/article/details/151142266) | 中文 | 生手辦圖 → 修圖去底座 → 混元 3D / Tripo 出 STL → 3D 列印 | 圖 → 3D → **實體** 的延伸案例 |
| [Meshy / Tripo + Three.js 實作心得](https://dev.to/abigail_armijo/what-i-learned-exploring-ai-generated-3d-a-hands-on-tour-of-meshy-tripo-and-threejs-5cic) | 英文 | 2D → 3D → 綁骨 → Three.js 動畫 | 記錄「面數太高綁骨失敗」等交接坑（2024 年，工具已更新） |
| [Meshy → Roblox Studio 教學](https://www.meshy.ai/tutorials/3d-model-for-roblox-workflow) | 英文 | 生成 → 減面（2 萬面）→ 綁骨 → Roblox | 以目標平台限制面數的範例（廠商教學） |
| [3D-Craft](https://github.com/JiawenZhu/3D-Craft) | 英文 | 概念圖 → TRELLIS.2 / Hunyuan3D / Rodin → Three.js 檢視 | 可切換多個生成引擎比較 ◐ |
| [Blender as a Pipeline Engine](https://shahriyarshahrabi.medium.com/blender-as-a-pipeline-engine-make-rigged-characters-with-comfyui-3a1e81a3e623) | 英文 | ComfyUI → Hunyuan3D → Blender 自動綁骨 | 把 Blender 當無介面的管線引擎 ◐ |
| [知乎：AI 生成模型 + Blender 優化 + 匯出 VRM](https://zhuanlan.zhihu.com/p/1988625814363869476) | 中文 | 混元 3D / Rodin / Meshy → Blender → VRM | VTuber 方向的延伸 ◐ |

### 基礎工具（積木）

| 工具 | 能力 | 注意事項 |
|---|---|---|
| [Hunyuan3D-2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1) | 開源圖生 3D + PBR 貼圖 | 需 10–29GB VRAM；社群授權不適用於歐盟、英國、南韓；3.x 版僅雲端 API |
| [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | 微軟 4B 參數圖生 3D，GLB 輸出 | Repo 標示 MIT，使用前請再確認 LICENSE |
| [UniRig](https://github.com/VAST-AI-Research/UniRig) | 通用自動綁骨（人、動物、物件） | SIGGRAPH 2025，MIT |
| [ComfyUI-3D-Pack](https://github.com/MrForExample/ComfyUI-3D-Pack) | 在 ComfyUI 中整合多個 3D 生成模型 | 不含綁骨 |
| [Meshy MCP](https://github.com/meshy-dev/meshy-mcp-server) | 官方 MCP：生成、貼圖、減面、綁骨、動畫 | 付費點數 |
| [Tripo MCP](https://github.com/VAST-AI-Research/tripo-mcp) | 官方 MCP | 仍為 alpha，需透過 Tripo Blender Addon |
| [blender-mcp](https://github.com/ahujasid/blender-mcp) | Blender 中的 Agent 操作，內建 Hunyuan3D / Rodin | 套件已改名 `mcp-for-blender` |

### 影片示範：先看真人怎麼做

共 7 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [教你用一張照片製作實體公仔！ #公仔製作 #3D列印 #Tripo3D AI](https://www.youtube.com/watch?v=9P_9nHDhJBI)（土豆醬tudojohn，ZH-TW）：一個人走完「圖 → 3D → 實體」整條管線（延伸挑戰：3D 列印）
- [【模型製作】自己的公仔自己做!!  用AI圖片轉3D生成屬於自己的公仔](https://www.youtube.com/watch?v=ClXyNELkDXA)（RealFun，ZH-TW）：台灣模型玩家的實測觀點
- [How to create 3D charater in Tripo AI and Rig in Mixamo](https://www.youtube.com/watch?v=i6fusxS4KUs)（Peace Growba，EN）：本題最核心的「模型 → 綁骨」交接

## 7. Showcase

| 組別 | 吉祥物 | 遊戲網址 | 記錄的交接問題數 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
