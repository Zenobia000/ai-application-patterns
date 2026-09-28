# Lab 11｜Blender 當攝影棚、AI 當渲染器

> **一句話任務**：幫社團（或 Lab 09 的吉祥物）做一支 15 秒、3 個鏡頭的動畫廣告。**不要直接叫影片模型「抽卡」**，而是先讓 Agent 在 Blender 裡用白模（灰色方塊）把空間、角色走位、鏡頭運動「演一遍」，再把這段預演交給影片模型「上色成真」。

| 應用類別 | Pattern | 難度 | 預估時間 |
|---|---|:---:|---|
| E 3D + C Media（複合） | P4 + P6 + P1 + P3 | ★★★★★ | 4–6 小時（小組） |

串起來的原子能力（見 [composite-pipelines.md](../../taxonomy/composite-pipelines.md)）：**V6 場景與鏡頭 → V7 渲染（參考影片、首影格、深度圖）→ V2 首影格風格化 → M1/M2 影片生成 → M3 配音 → M6 剪輯**

---

## 1. 為什麼做這件事

用影片模型做過 Lab 03 的人都知道：**畫面很美，但你控制不了**。你想要「鏡頭從左繞到右、角色從門口走到桌前」，模型給你的是隨機的運鏡、隨機的走位。只能一直重抽。

2026 年創作者圈最明顯的轉變是：

> **影片模型是傑出的渲染器，但是很差的導演。**（"exceptional renderers, poor directors"，Flick 的 Blender AI 電影製作指南）
>
> **白模鎖定空間與運動，提示詞只負責教 AI 怎麼詮釋。**（Bilibili 創作者擎蒼與愛）

分工因此變成：

| 誰 | 負責 | 為什麼 |
|---|---|---|
| **Blender（3D）** | 空間、比例、走位、鏡頭運動 | 幾何是確定的，改一次就對 |
| **影片模型（AI）** | 材質、光影、風格、細節 | 這是它最擅長的 |
| **Agent** | 在 Blender 裡搭白模、設鏡頭、輸出參考影片 | 你不需要先學會 Blender |
| **你** | 導演：決定鏡頭語言、挑選結果 | 美感判斷仍是人的工作 |

這個 Lab 是整個 Repo 最完整的複合案例：**3D 工具的「確定性」加上生成模型的「表現力」**。

做完你會懂：

- 為什麼「控制訊號」（參考影片、首影格、深度圖）比 prompt 更能控制生成結果
- 為什麼複合管線要把「確定的事」和「創意的事」分開
- Agent 串接多個工具（Blender MCP + 生成服務）時，交接物的規格有多重要

## 2. 放大到真實世界

| 你做的 | 產業裡對應的 |
|---|---|
| 白模預演（Previz） | 電影與廣告的前期預演、分鏡動態化 |
| AI 渲染 | 概念影片、廣告提案、低預算動畫 |
| 首影格風格化 | 美術設定、Look Development |
| 角色一致性 | 動畫 IP、品牌吉祥物 |

市場上的代表產品：Higgsfield 已推出 **Blender 外掛 + MCP Bridge**，在 Blender 內提供白模場景建構、3D 模型、角色動畫、影像、影片、鏡頭等工具，最後交給影片模型渲染，並可由 Agent 透過 MCP 驅動（[官方文章](https://higgsfield.ai/blog/higgsfield-blender-plugin)）。

## 3. Pattern 分析

```text
腳本與分鏡（3 鏡，每鏡 5 秒）
  → [V6] Agent 透過 Blender MCP 搭白模：地面、牆、桌子、角色（方塊人或 Lab 09 的吉祥物）  ← P4
  → [V6] 設定鏡頭運動（推、搖、環繞）與角色走位，截圖檢查構圖                        ← P6
  → [V7] 每鏡輸出：參考影片 MP4（白模動畫）+ 首影格 PNG（+ 深度圖，本地路線）         ← P4
  → [V2] 把首影格用圖像模型風格化（例如「溫暖的水彩動畫風格」），人工挑選            ← P1
  → [M1/M2] 影片模型：風格化首影格 + 白模參考影片 → 成品鏡頭                          ← P1
  → [M3] 配音 / 音效
  → [M6] Remotion / FFmpeg / 剪映 串接 3 鏡、上字幕、輸出                            ← P3
```

| 問題特性 | 程度 | 本題的處理方式 |
|---|:---:|---|
| 視覺品質 | **高** | 交給影片模型 |
| 可控性 | **高** | 空間與鏡頭由 Blender 決定 |
| 參考一致性 | **高** | 同一個首影格風格 + 同一個角色參考 |
| 多工具整合 | **高** | Blender + 圖像模型 + 影片模型 + 剪輯 |
| 人工驗收成本 | 高 | 每鏡比較「白模 vs 成品」是否一致 |

## 4. 交付物與驗收標準

**交付物**：

1. `storyboard.md`：3 個鏡頭的分鏡表（畫面、運鏡、秒數、台詞）
2. 每鏡的白模參考影片與首影格
3. 每鏡的成品影片（至少 2 個版本中挑 1）
4. `final.mp4`：15 秒成片，有字幕或配音
5. **對照影片**：白模與成品左右並排（這是最好的展示方式）
6. `PIPELINE.md`：每個交接物的規格（解析度、秒數、fps、比例）

**驗收標準**：

1. 成品鏡頭的運鏡方向、角色位置與白模預演一致（對照影片可以看出來）
2. 3 個鏡頭的角色與畫風一致
3. 記錄每鏡生成了幾次才採用；和 Lab 03「直接抽卡」的次數比較
4. 片尾標註 AI 生成
5. 寫一段反思：哪一步最花時間？哪一步交給 Agent 最有效？

## 5. 建議路線

### 路線 A：雲端影片模型（推薦，不需要 GPU）

1. **分鏡**：先和 Claude 討論出 3 鏡的分鏡表
2. **白模**：Claude Code + Blender MCP

   ```text
   依照 storyboard.md 在 Blender 中建立白模場景：
   - 只用基本幾何（方塊、圓柱），灰色材質，不需要細節
   - 角色用 1.7m 高的膠囊體代表，臉的方向用一個小方塊標示
   - 鏡頭 1：從門口緩慢推近到桌前，5 秒 24fps
   - 每設定好一個鏡頭，渲染第 1、60、120 格截圖給我看，確認構圖
   - 確認後輸出：shot1_ref.mp4（1080x1920）與 shot1_first.png
   ```

3. **首影格風格化**：把 `shot1_first.png` 丟給圖像模型，保持構圖、換成目標風格
4. **影片生成**：影片模型輸入「風格化首影格 + 白模參考影片（若模型支援參考影片）+ 描述」
   - 可經由 Higgsfield MCP 讓 Claude 直接呼叫，或使用各影片模型的網頁介面
5. **剪輯**：串接 3 鏡、加字幕（可沿用 Lab 10 的剪輯管線）

### 路線 B：本地開源（需要 GPU）

Blender 輸出深度圖、線稿、姿勢等控制通道 → ComfyUI 的 **Wan VACE** 工作流（首尾影格 + 控制影片）→ 成品。可參考 Mickmumpitz 的「Blender to ComfyUI AI Renderer 2.0」工作流。優點是可控性更高、可重現；缺點是需要 GPU 與較多設定。

### 路線 C：一站式外掛（最快體驗）

使用 **Higgsfield Blender 外掛**，在 Blender 內完成場景建構、角色動畫、影片渲染。適合先體驗整體流程，再回頭用路線 A 理解每個步驟。

> 三條路線做同一件事：**Blender 決定「在哪裡、怎麼動」，AI 決定「長什麼樣」**。差別只在黏著層與成本。

### 延伸挑戰

- **角色一致性**：用 Lab 09 的吉祥物 3D 模型取代膠囊體，在 Blender 擺姿勢 → 渲染參考影格 → 影片模型（圖 → 3D → Blender → 影片的完整鏈）
- **可編輯輸出**：Higgsfield MCP 已可讓 Claude 建立可編輯的 After Effects 專案（圖層、關鍵影格），比較「可編輯成品」與「平面 MP4」的差異
- **同一預演、三種風格**：同一組白模，輸出水彩、黏土、寫實三種版本

## 6. 參考專案

### 白模預演 → AI 渲染

| 專案 | 語言 | 管線 | 為什麼值得看 |
|---|---|---|---|
| [Higgsfield for Blender 外掛 + MCP Bridge](https://higgsfield.ai/blog/higgsfield-blender-plugin) | 英文 | Prompt → 白模與燈光 → 角色動畫 → 貼圖 → 影片模型渲染；Agent 可透過 MCP 驅動 | **官方產品，本 Lab 的一站式版本**（路線 C） |
| [Flick：Blender for AI Filmmaking 2026 指南](https://flick.art/blog/blender-ai-filmmaking) | 英文 | Blender 走位與鏡頭 → 參考影片 + 首影格 → 首影格風格化 → 影片模型；也涵蓋渲染通道進 ControlNet / Wan VACE | **最完整的單篇說明**，比較 5 種控制方法的成本與控制力 |
| [Bilibili 爆蛋BD：GPT-6 操作 Blender 白模預演，輔助 Seedance 精準生成](https://www.bilibili.com/video/BV1x7Yx6YEM6/) | 中文 | Agent 在 Blender 搭白模與鏡頭、檢查遮擋 → 加入角色與場景圖 → 影片模型；逐鏡並排對照 | **Agent → Blender → 影片模型的完整鏈**，與本 Lab 路線 A 相同 |
| [Bilibili 擎蒼與愛：用白模把 AI 運鏡從「抽卡」變成「預演」](https://www.bilibili.com/video/BV1k48u6rEXX/) | 中文 | 白模預演鎖定空間與運動 → 影片模型 | 教學金句：「白模鎖空間與運動，提示詞教 AI 怎麼詮釋」 |
| [Blender to ComfyUI AI Renderer 2.0（Mickmumpitz）](https://www.runcomfy.com/comfyui-workflows/blender-to-comfyui-ai-renderer-2-0-workflow-cinematic-video-output) | 英文 | Blender 深度 / 輪廓 / 姿勢通道 → Wan VACE（首尾影格 + 控制影片）→ MP4 | 開源本地版（路線 B） |
| [AI Rendering 3D Animations with Blender + ComfyUI（v1）](https://www.runcomfy.com/comfyui-workflows/ai-rendering-3d-animations-with-blender-and-comfyui) | 英文 | 深度、輪廓、色塊遮罩 → ControlNet + AnimateDiff + IPAdapter | 上一代做法，可與 2.0 對照看技術演進 |
| [騰訊雲：Blender + Seedance 工作流 25 個案例整理](https://developer.cloud.tencent.com/article/2702701?policyId=1004) | 中文 | 白模與鏡頭 → 參考影片 + 首影格 → 影片模型；含 Codex + Blender MCP 案例 | 中文的案例彙整（原 GitHub 清單目前無法開啟） |

### Blender ↔ 生成模型的橋接

| 專案 | 語言 | 管線 | 為什麼值得看 |
|---|---|---|---|
| [ComfyUI-BlenderAI-node](https://github.com/AIGODLIKE/ComfyUI-BlenderAI-node) | 中文 / 英文 | Blender 視窗或鏡頭即時送入 ComfyUI 節點 → AI 渲染、貼圖、模型回到場景 | 標準的 Blender ↔ ComfyUI 橋接，中國團隊開發（影片節點僅部分支援） |
| [Bilibili 若有神祇：兩款外掛把 ComfyUI 焊進 Blender](https://www.bilibili.com/video/BV1XG93BpEey/) | 中文 | Blender 渲染視圖 → ComfyUI → 貼圖或參考圖回到 Blender | 「不離開 Blender」的橋接做法 |
| [Bilibili：Blender + ComfyUI + 混元3D + 可靈 精準角色一致性](https://www.bilibili.com/video/BV1PM9RYvEiF/) | 中文 | 角色圖 → 混元 3D 模型 → Blender 擺姿勢與鏡頭 → 參考影格 → 圖生影片 | **唯一找到的「圖 → 3D → Blender → 影片」完整角色一致性案例**（延伸挑戰） |
| [Higgsfield MCP → After Effects（AlphaSignal）](https://alphasignal.ai/news/higgsfield-lets-claude-build-fully-editable-after-effects-projects) | 英文 | Claude → Higgsfield MCP 生成素材 → AE 橋接 → 可編輯的圖層與關鍵影格 | 多工具 Agent 編排，輸出仍可編輯 |

### Higgsfield 官方功能（管線相關）

| 功能 | 用途 |
|---|---|
| [Higgsfield MCP](https://higgsfield.ai/mcp) | 30+ 影像與影片模型；並提供 Blender、Premiere、After Effects 等「Production Bundle」skills |
| [Claude + Higgsfield MCP 指南](https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP) | 鏡頭、鏡頭焦段、fps 指定、對嘴 |
| [Cinema Studio 4.0](https://higgsfield.ai/blog/cinema-studio-4-0) | 虛擬攝影機機身、鏡頭、30+ 運鏡預設、可重複使用的 AI 角色 |
| [Soul ID](https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-create-and-use-a-soul-id-character) | 以 20–80 張照片訓練角色，跨模型保持一致 |
| [Popcorn 分鏡](https://higgsfield.ai/blog/AI-Tool-That-Allows-You-to-Replace-Faces-in-a-Movie-Scene) | 以參考圖產生連續分鏡影格 |

### 影片示範：先看真人怎麼做

共 7 支 YouTube 示範影片（含 KOL 介紹與「你會看到什麼」），完整清單見 [case-studies/videos.md](../../case-studies/videos.md)。建議先看：

- [AI视频的终极答案！GPT-6 Astra × Blender × Seedance 2.5](https://www.youtube.com/watch?v=a3G69PTuT_M)（DeepWhite，ZH）：和本題的管線完全相同，中文講解
- [Seedance 2.0 竟有導演大腦，目前最強 AI 影片生成！電影級運鏡+單素材、多素材，超穩角色一致性實測](https://www.youtube.com/watch?v=FQTbe7zV10Y)（T客邦影新聞，ZH-TW）：台灣媒體的 Seedance 入門（沒有 Blender，先理解影片模型能力）
- [Seedance + Blender Unlocks Advanced AI Filmmaking Techniques](https://www.youtube.com/watch?v=miIDu04N7_4)（Dan Kieft，EN）：清楚示範白模畫面如何驅動 AI 渲染

## 7. Showcase

| 組別 | 成片連結 | 白模/成品對照連結 | 每鏡平均生成次數 |
|---|---|---|---|
| | | | |

交件時請一併填寫 [實作紀錄表](../_record-template.md)。
