# Open Source：開源基礎工具索引

> 這裡列的是 **積木**（工具本身）。用這些積木組成的完整專案請見 [case-studies/](../case-studies/)。

| 工具 | 對應 Pattern | 用途 | 在哪個 Lab 用到 |
|---|---|---|---|
| [Model Context Protocol](https://modelcontextprotocol.io) | P4 | 工具存取的開放標準 | 全部 |
| [blender-mcp](https://github.com/ahujasid/blender-mcp) | P4 + P6 | 讓 Agent 操作 Blender（套件已改名 `mcp-for-blender`） | Lab 06 |
| [Playwright MCP](https://github.com/microsoft/playwright-mcp) | P6 | 以 accessibility snapshot 操作瀏覽器 | Lab 04、05、08 |
| [browser-use](https://github.com/browser-use/browser-use) | P6 | Python 瀏覽器 Agent | Lab 08 |
| [Stagehand](https://github.com/browserbase/stagehand) | P6 | `act()` / `observe()` / `extract()` 瀏覽器自動化 | Lab 08 |
| [ComfyUI](https://github.com/comfyanonymous/ComfyUI) | P1 | 節點式影像/影片/音訊/3D 生成 | Lab 03 |
| [Remotion](https://github.com/remotion-dev/remotion) | P3 + P1 | 用 React 寫程式剪輯影片 | Lab 03 |
| [n8n](https://github.com/n8n-io/n8n) | P5 | 工作流自動化（可自架） | Lab 07、02 |
| [Dify](https://github.com/langgenius/dify) | P2 + P5 | LLM 應用與工作流平台 | Lab 02 |
| [Ollama](https://github.com/ollama/ollama) | — | 本地執行開源模型 | Lab 07（免費路線） |
| [Phaser](https://github.com/phaserjs/phaser) | P3 | 2D 網頁遊戲引擎 | Lab 05 |
| [Three.js](https://github.com/mrdoob/three.js) | P3 | 網頁 3D | Lab 06 |
| [Astro](https://github.com/withastro/astro) | P3 | 內容型網站框架 | Lab 04 |
| [Anthropic Skills](https://github.com/anthropics/skills) | P3 | Claude 的技能套件（含 frontend-design） | Lab 04 |
| [Claude Quickstarts](https://github.com/anthropics/claude-quickstarts) | P2 / P4 / P6 | 官方範例：客服 Agent、Computer Use 等 | Lab 02、08 |
| [Claude Cookbooks](https://github.com/anthropics/claude-cookbooks) | P2 | 官方範例：RAG、Contextual Retrieval | Lab 01 |
| [Hunyuan3D-2.1](https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1) | P1 | 開源圖生 3D + PBR（社群授權有地區限制） | Lab 09 |
| [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | P1 | 微軟圖生 3D | Lab 09 |
| [UniRig](https://github.com/VAST-AI-Research/UniRig) | P1 | 通用自動綁骨 | Lab 09 |
| [ComfyUI-3D-Pack](https://github.com/MrForExample/ComfyUI-3D-Pack) | P1 | ComfyUI 中的 3D 生成節點 | Lab 09 |
| [Meshy MCP](https://github.com/meshy-dev/meshy-mcp-server) | P4 | 官方 MCP：生成、減面、綁骨、動畫 | Lab 09 |
| [ComfyUI-BlenderAI-node](https://github.com/AIGODLIKE/ComfyUI-BlenderAI-node) | P4 | Blender ↔ ComfyUI 橋接 | Lab 11 |
| [FunClip](https://github.com/modelscope/FunClip) | P2 | 中文語音辨識驅動剪輯 | Lab 10 |
| [auto-editor](https://github.com/WyattBlue/auto-editor) | P3 | 規則式去除靜音、輸出 NLE 時間軸 | Lab 10 |
| [pyJianYingDraft](https://github.com/GuanYixuan/pyJianYingDraft) | P4 | 用 Python 產生剪映草稿 | Lab 10 |
| [davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | P4 | Agent 操作 DaVinci Resolve（需 Studio） | Lab 10 |
| [VideoLingo](https://github.com/Huanshere/VideoLingo) | P2 + P1 | 字幕翻譯與配音 | Lab 10 |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | P4 | Agent 框架 | Lab 02 |

## 收錄原則

- 只收「積木」；整合專案放 case-studies
- 註明對應的 Pattern 與 Lab
- 已封存或停止維護的，請標註
