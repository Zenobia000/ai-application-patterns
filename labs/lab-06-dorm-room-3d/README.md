# Lab 06｜用 AI 佈置我的宿舍房間

> **一句話任務**：量好你的宿舍（或租屋處）尺寸，讓 AI Agent 透過 Blender MCP 在 Blender 裡建出房間、擺好家具、打光、渲染兩張圖，最後匯出 GLB 放到網頁上讓室友用滑鼠轉著看。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| E Spatial & 3D | P4 Tool Use + P3 Code + P6 Observe–Act | ★★★★ | 3–4 小時 |

---

## 1. 為什麼做這件事

每學期搬宿舍都在想：書桌放窗邊還是門邊？買這個層架放得下嗎？以前要回答這問題，你得學會 Blender，那至少要一個月。

現在你可以用中文告訴 Agent：「房間 3.2 × 4.5 公尺，門在左下，窗在北牆，兩張床、兩張書桌」，它就會去操作 Blender。

但你很快會遇到 3D 真正的難題：

> **AI 很會「說」書桌在窗邊，但書桌可能穿過牆壁、浮在半空、或擋住門。**

3D 的正確性是幾何的正確性，文字 prompt 救不了。Agent 必須 **做完 → 截圖看 → 發現錯 → 修正**。這個 Lab 讓你親眼看到「觀察→行動迴圈」為什麼重要。

做完你會懂：

- MCP 怎麼讓 AI 操作一個專業軟體（Claude → MCP → Blender add-on → `bpy`）
- 為什麼 3D 的人工驗收成本那麼高，以及截圖回饋如何降低它
- 3D 資產怎麼從 Blender 走到網頁（GLB + Three.js）

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 宿舍佈置 | 室內設計提案、家具電商「放進你家看看」 |
| 真實尺寸建模 | 建築視覺化、BIM |
| 截圖檢查修正 | 3D 品質檢查、Digital Twin 驗證 |
| GLB 放上網頁 | 3D 商品展示、Web 3D 體驗 |

## 3. Pattern 分析

```text
房間尺寸 + 家具清單 + 你的偏好
  → [Model] 規劃佈局（先輸出成數字表：每件家具的位置、尺寸、朝向）
  → [Tools] 透過 Blender MCP 執行 bpy：建牆、門窗、家具、材質、燈光  ← P4 + P3
  → [Verification] 渲染俯視圖與透視圖 → 模型看截圖 → 檢查穿模、擋門、浮空  ← P6
  → 修正，直到通過
  → [Runtime] 匯出 GLB → Three.js 網頁檢視器
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 正確性（幾何） | **高** | 先用數字表規劃，再建模；用俯視圖對照 |
| 視覺品質 | 中 | 打光與材質，可從 Poly Haven 取材 |
| 結構化輸出 | **高** | Scene 是結構化資料，可以查詢驗證 |
| 人工驗收成本 | **高** | 靠截圖降低，不要每次都自己打開 Blender 看 |

## 4. 交付物與驗收標準

**交付物**：`room.blend`、`room.glb`、兩張渲染圖（俯視、透視）、一個可以轉動檢視的網頁、以及你的「佈局數字表」。

**驗收標準**：

1. 房間尺寸與你實際量的誤差 < 5 公分
2. 所有家具都在房間內、沒有互相穿插、沒有浮空
3. 門可以打開（門的開啟範圍內沒有家具）
4. 每張床和書桌都有至少 60 公分的通行空間
5. GLB 檔可以在網頁中載入並用滑鼠旋轉
6. 記錄 Agent 自己發現並修正了幾次錯誤

## 5. 建議路線

### 環境準備

1. 安裝 Blender（4.x）
2. 安裝 [blender-mcp](https://github.com/ahujasid/blender-mcp)：Blender add-on + MCP Server（套件已改名為 `mcp-for-blender`，請以 README 為準）
3. 在 Claude Desktop 或 Claude Code 中設定 MCP，並在 Blender 側邊欄按下連線

### 步驟

1. **先規劃再建模**。給 Agent 的第一個任務：

   ```text
   我的宿舍房間 3.2m x 4.5m，高 2.8m。門在南牆靠西，寬 0.9m，向內開。
   窗在北牆中央，寬 1.5m，窗台高 0.9m。
   家具：單人床 x2 (0.9x1.9m)、書桌 x2 (1.2x0.6m)、衣櫃 x2 (0.8x0.6x2.0m)、椅子 x2。
   先不要建模。輸出一張佈局表：每件家具的中心座標 (x,y)、尺寸、旋轉角度，
   原點在房間西南角。檢查：門的開啟半徑內無家具、每張床與書桌前有 60cm 通道。
   ```

2. **建模**：「依照佈局表在 Blender 建模。牆厚 0.1m，門窗挖洞。家具先用簡單方塊，並用不同顏色區分。」
3. **截圖驗證**：「從正上方渲染俯視圖，逐項對照佈局表，列出不符合之處並修正。」
4. **美化**：換成較真實的家具模型（可用 Poly Haven 資產）、加材質、加燈光，渲染透視圖
5. **匯出與上網**：「匯出 GLB（`bpy.ops.export_scene.gltf(export_format='GLB')`），並建立一個 Three.js 單頁網站可以載入 room.glb、用 OrbitControls 旋轉。」

### 延伸挑戰

- **比較兩種佈局**：讓 Agent 提出 A、B 兩案，室友投票
- **加入購物清單**：你想買的層架放得下嗎？用真實商品尺寸加入
- **Spline 路線**：Spline V2 的 AI Agent 也能讀 Scene、操作物件/材質/燈光/鏡頭並截圖自我檢查，而且支援 MCP。試著用 Spline 做同一題，比較兩者

## 6. 參考專案

| 專案 | 語言 | 技術 | 為什麼值得看 |
|---|---|---|---|
| [blender-mcp](https://github.com/ahujasid/blender-mcp)（基礎工具） | 英文 | MCP → Blender add-on → bpy | 本題的基礎：執行 Blender Python、Poly Haven / Sketchfab 資產、Hyper3D / Hunyuan3D 生成模型、截圖、匯出 |
| [I Gave Claude a Floor Plan and It Built the House in 3D](https://www.sidharthsatapathy.com/blog/claude-blender-mcp-floor-plan-to-3d-house/) | 英文 | Claude + blender-mcp | **最接近本題**：平面圖 → 有家具的 3D 房子；Claude 渲染俯視圖對照平面圖並自我修正 |
| [用 Blender-mcp 讓 Claude AI 幫你做 3D（夏卡樵の開發日誌）](https://shaka-joe.com/posts/blender-mcp) | 中文（繁中） | Claude + blender-mcp | 台灣作者，完整安裝步驟 + 「幫工程師做一間舒適房間」，並誠實指出結果需要手動修正 |
| [Claude Code + Blender MCP：零基礎生成 3D 環境（Bilibili）](https://www.bilibili.com/video/BV1RKXNBMEDX/) | 中文 | Claude Code + Blender MCP | 以 Claude Code 當客戶端，與工作坊路線相同 |
| [3D 設計師實測 Claude + Blender MCP 自動室內設計（YouTube）](https://www.youtube.com/watch?v=KrmIX7sRxv8) ◐ | 中文 | Claude + Blender MCP | 專業設計師看 AI 室內佈局的極限 |
| [Claude Blender MCP 連接器指南（Eigent）](https://www.eigent.ai/zh-TW/blog/claude-blender-mcp) | 中文（繁中） | Blender MCP + 本地模型 | 比較不同接法，以及如何用本地模型跑 |
| [agent-skills：blender-mcp skill](https://github.com/vladmdgolam/agent-skills) | 英文 | Claude Code skill → glTF → Three.js / R3F | 唯一涵蓋「Blender → GLB → 網頁」最後一步的整合參考 |
| [Holodeck（CVPR 2024）](https://github.com/allenai/Holodeck) | 英文 | GPT-4o + Objaverse + AI2-THOR | 研究界的「文字 → 有家具的房間」，有物件擺放規則 |
| [LayoutGPT（NeurIPS 2023）](https://github.com/weixi-feng/LayoutGPT) | 英文 | LLM → 數字化佈局 → Blender 渲染 | 「讓 LLM 先把佈局當資料輸出」的原始想法，對應本題步驟 1 |
| [SceneCraft（ICML 2024）](https://arxiv.org/abs/2403.01248) ◐ | 英文 | LLM → Blender Python + 視覺模型檢查渲染 | 「寫 bpy → 渲染 → 看 → 修」迴圈的研究版本 |
| [3D-GPT](https://github.com/Chuny1/3DGPT) | 英文 | 多 Agent → Infinigen（Blender） | 多 Agent 分工生成程序化 3D 場景 |

官方資源：

- [Spline V2 發表](https://updates.spline.design/changelog/introducing-spline-v2)、[Spline MCP Server 文件](https://docs.spline.design/generate/spline-mcp-server)

### 影片示範：先看真人怎麼做

共 7 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [3D設計師實測Claude AI+Blender MCP！用來做自動室內設計可以嗎？Autobuilder Pro插件教學](https://www.youtube.com/watch?v=KrmIX7sRxv8)（Neo Chan，ZH）：專業設計師判斷 AI 室內佈局到底能不能用，適合討論驗收標準
- [Claude 3 7 MCP：Blender 3D創作力無窮（for Mac 教學）](https://www.youtube.com/watch?v=W4ABKoQdSRk)（數位敘事力期刊，ZH-TW）：用 Mac 的同學照著做就能完成環境設定
- [Design a Room using Blender-MCP and Claude AI demo](https://www.youtube.com/watch?v=wxgQmjm9wfM)（Data Science in your pocket，EN）：和本題任務幾乎相同

## 7. Showcase

| 組別 | GLB 網頁連結 | Agent 自我修正次數 | 一句心得 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
