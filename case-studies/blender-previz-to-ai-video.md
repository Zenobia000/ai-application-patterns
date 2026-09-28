# Blender 白模預演 → AI 影片渲染

- **來源**：
  - [Bilibili 爆蛋BD：GPT-6 操作 Blender 白模預演，輔助 Seedance 2.5 精準生成影片](https://www.bilibili.com/video/BV1x7Yx6YEM6/)（2026-09-09）
  - [Flick：Blender for AI Filmmaking — The 2026 Guide](https://flick.art/blog/blender-ai-filmmaking)（2026-06）
  - [Higgsfield for Blender 外掛 + MCP Bridge](https://higgsfield.ai/blog/higgsfield-blender-plugin)（2026-08-20）
- **語言**：ZH / EN
- **收錄日期**：2026-09-28

---

## 1. 它解的是什麼問題？

> 影片模型畫面很美，但運鏡和走位無法精準控制，只能一直重抽（「抽卡」）。

Flick 的一句話總結：影片模型是 **傑出的渲染器，但是很差的導演**。

對應應用類別：**E Spatial & 3D**、**C Generative Media**、**G Tool Agent**

## 2. 它用了哪些 Pattern？

- P4 Tool Use：Agent 透過 Blender MCP 搭場景
- P6 Observe–Act：渲染截圖檢查遮擋與構圖
- P1 Generate：首影格風格化、影片生成
- P3 Code：Blender 腳本輸出參考影片與控制通道

```text
分鏡 →
  [Model]         Agent（GPT-6 / Claude / Codex）+ 影片模型（Seedance / Kling / Wan VACE）
  [Context]       分鏡、角色與場景參考圖、白模渲染
  [Tools]         Blender MCP、圖像模型、影片模型（雲端 API 或 ComfyUI）
  [Orchestration] Agent 主導 3D 部分；人主導風格選擇
  [Runtime]       Blender → 雲端影片服務 / 本地 ComfyUI
  [Verification]  白模與成品逐鏡並排對照
```

原子能力鏈：**V6 場景與鏡頭 → V7 渲染（參考影片 / 首影格 / 深度）→ V2 首影格風格化 → M1/M2 影片生成**

## 3. 為什麼這個方法適合這個問題？

| 問題特性 | 程度 | 這個案例怎麼處理 |
|---|:---:|---|
| 可控性 | 高 | 空間、走位、運鏡由 3D 決定，是確定的 |
| 視覺品質 | 高 | 由影片模型負責 |
| 參考一致性 | 高 | 同一場景幾何 + 同一首影格風格 |
| 人工驗收成本 | 高 → 中 | 並排對照讓檢查變得直觀 |

**關鍵洞察**：這是「**把確定的事交給確定的工具，把創意的事交給生成模型**」最清楚的例子。Bilibili 創作者擎蒼與愛的說法：「白模鎖空間與運動，提示詞教 AI 怎麼詮釋」。

2026 年這個做法分成兩條路：

| 路線 | 控制訊號 | 優點 | 缺點 |
|---|---|---|---|
| 雲端 | 參考影片 + 首影格 → Seedance / Kling / Veo | 不需要 GPU、品質高 | 控制力取決於服務是否支援參考影片 |
| 本地 | 深度 / 線稿 / 姿勢通道 → ComfyUI Wan VACE | 控制力最強、可重現 | 需要 GPU、設定複雜 |

## 4. 限制與風險

- 白模太粗時，影片模型會自行「發明」細節，可能與預期不符
- 角色一致性仍需角色參考圖或角色 ID
- 雲端服務的參考影片功能與限制變動很快

## 5. 可以轉化成什麼教學題目？

> [Lab 11 Blender 當攝影棚、AI 當渲染器](../labs/lab-11-blender-previz-to-ai-video/)
