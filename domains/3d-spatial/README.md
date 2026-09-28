# Domain：3D Spatial 空間與 3D

[← Domains 總覽](../) ｜ 用到的 Pattern：[P1 Generate](../../patterns/generative-media/) · [P2 Retrieve & Reason](../../patterns/knowledge-reasoning/) · [P3 Code & Build](../../patterns/coding-agent/) · [P4 Tool Use](../../patterns/tool-use-mcp/) · [P6 Observe–Act](../../patterns/computer-use/)

## 1. 問題長什麼樣

建立具有幾何、材質、光線、鏡頭與互動的空間或物件：商品建模、室內設計、建築視覺化、遊戲場景、Digital Twin、Web 3D。

以前的門檻是 **學會 3D 軟體**（Blender 至少要數週）。現在 Agent 可以透過 MCP 直接操作 3D 軟體：

```text
Claude / Codex → MCP → Blender add-on → bpy（Blender Python API）
```

市場現況：

- **Blender MCP（開源）**：可建立物件、材質、場景、鏡頭，執行任意 Blender Python，取用 Poly Haven / Sketchfab 資產、用 Hyper3D / Hunyuan3D 生成模型、截圖、匯出 GLB（[blender-mcp](https://github.com/ahujasid/blender-mcp)）
- **Spline V2**：內建 AI Agent，能讀 Scene、建立與編輯物件、材質、燈光、鏡頭、布林運算、粒子、事件與狀態，會截圖檢查自己的成果，並開放 MCP 給 Claude Code、Cursor 等外部 Agent（[發表](https://updates.spline.design/changelog/introducing-spline-v2)、[MCP 文件](https://docs.spline.design/generate/spline-mcp-server)）
- **研究界**：Holodeck、LayoutGPT、SceneCraft 等研究「文字 → 3D 場景」，其中 SceneCraft 就是「寫 bpy → 渲染 → 視覺模型檢查 → 修正」的迴圈

## 2. 核心難點

| 難點 | 說明 |
|---|---|
| 幾何正確性 | 穿模、浮空、比例錯誤 → 文字 prompt 無法保證 |
| Scene 一致性 | 改一個東西，其他東西跟著亂 |
| 空間推理 | 模型對「左邊」「靠牆」「門的開啟範圍」理解不穩定 |
| 驗收成本極高 | 要旋轉、放大才能發現問題 → 自動截圖多角度 |
| 資產品質 | 簡單方塊 vs 真實家具模型 |

**關鍵做法**：先讓模型把佈局輸出成 **數字資料**（座標、尺寸），驗證後再建模；建模後 **截圖回饋** 讓 Agent 自己檢查。

## 3. Pattern 組合

| 階段 | Pattern |
|---|---|
| 佈局規劃（數字表） | P2 推理 + 結構化輸出 |
| 操作 Blender / Spline | P4 |
| 寫 bpy 腳本 | P3 |
| 渲染截圖 → 檢查 → 修正 | P6 |
| 生成模型或貼圖 | P1 |
| GLB 放上網頁（Three.js） | P3 |

## 4. 工作坊題目

**主題目**：[Lab 06 用 AI 佈置我的宿舍房間](../../labs/lab-06-dorm-room-3d/)

**備選題目**：

| 題目 | 情境 | 額外練到的能力 |
|---|---|---|
| **校園地標 3D 導覽** | 把學校的一棟代表性建築（或校門）做成簡化 3D 模型，放在網頁上可旋轉，點擊顯示介紹 | 從照片推估比例、Web 3D 互動 |
| **社團博覽會攤位設計** | 3m × 2m 的攤位要放桌子、海報架、展示品，出兩個方案讓社員投票 | 小空間佈局、多方案比較 |

## 5. 放大到真實世界

家具電商 AR 預覽、室內設計提案、建築視覺化、展場設計、遊戲關卡原型、工廠 Digital Twin。

## 6. 參考

見 [Lab 06 參考專案](../../labs/lab-06-dorm-room-3d/#6-參考專案)。
