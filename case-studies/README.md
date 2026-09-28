# Case Studies：別人已經整合好的專案

這裡收錄的是 **把多個工具整合成一個可用應用** 的專案、教學與實作紀錄，而不是工具本身的 Repo。工具本身請見 [open-source/](../open-source/)。

- **查核**：✔ = 2026-09-28 已開啟頁面確認內容相符；◐ = 僅由搜尋結果確認存在（頁面擋爬蟲），使用前請手動開啟確認
- **語言**：ZH-TW 繁中、ZH 簡中、EN 英文

---

## YouTube 影片示範

看真人一步步操作最快。[videos.md](videos.md) 收錄 54 位教 AI 工具應用的 KOL（繁中、簡中、英文），以及每個 Lab 的 5–10 支示範影片，並寫明「你會看到什麼」與「為什麼適合這題」。

## 已完成的案例分析

| 案例 | 分析 |
|---|---|
| Claude + Blender MCP：平面圖 → 3D 房屋 | [floor-plan-to-3d-house.md](floor-plan-to-3d-house.md) |
| Higgsfield Game Studio：Claude + MCP 做遊戲 | [higgsfield-game-studio.md](higgsfield-game-studio.md) |
| 圖片 → 3D → Blender → 遊戲引擎（多個 MCP） | [image-to-3d-to-game-engine.md](image-to-3d-to-game-engine.md) |
| Blender 白模預演 → AI 影片渲染 | [blender-previz-to-ai-video.md](blender-previz-to-ai-video.md) |
| 逐字稿驅動的 AI 剪輯 | [transcript-driven-editing.md](transcript-driven-editing.md) |

新增案例請複製 [_template.md](_template.md)。

---

## A. Knowledge & Reasoning（對應 Lab 01）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [school-handbook-agent](https://github.com/eternal1717/school-handbook-agent) | ZH | FastAPI + ChromaDB + BM25/RRF + DeepSeek + Vue 3 | 校園規章 Agentic RAG，條文+頁碼引用、拒答、評估 | ✔ |
| [CampusMind](https://github.com/zhuyuxin29/CampusMind) | ZH | Streamlit + Chroma + bge-m3 + reranker + OCR | 學生手冊問答，來源卡片、模糊問題先反問 | ✔ |
| [campus_rag](https://github.com/hxj1007/campus_rag) | ZH | FastAPI + LangChain + Chroma | 最簡骨架 | ✔ |
| [NQU Campus AI Assistant](https://github.com/Rafu2102/RAG-) | ZH-TW | Gemini + FAISS + BM25 + Discord/Telegram | 金門大學選課助手、成績單 GPA | ✔ |
| [faq-bot](https://github.com/currycm/faq-bot) | ZH | FastAPI + Streamlit + bge-small-zh | 校園 FAQ，成本控制與安全防護 | ✔ |
| [HCMUE Student Handbook RAG](https://github.com/AnhPhiNe/student-handbook-rag-chatbot) | EN | FastAPI + Qdrant + React | 依入學年度隔離、評估資料集 | ✔ |
| [kotaemon](https://github.com/Cinnamon/kotaemon) | EN | Gradio | PDF 內高亮引用 | ✔ |
| [Open Notebook](https://github.com/lfnovo/open-notebook) | EN | Next.js + Python | 開源 NotebookLM | ✔ |
| [deep-research](https://github.com/dzhng/deep-research) | EN | TypeScript + Firecrawl | 最短 Research Agent | ✔ |
| [Datawhale all-in-rag](https://github.com/datawhalechina/all-in-rag) | ZH | 教程 | 中文 RAG 全端教程 | ✔ |

## B. Conversational Agent（對應 Lab 02）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [openai-cs-agents-demo](https://github.com/openai/openai-cs-agents-demo) | EN | Agents SDK + FastAPI + Next.js | 分流 → 專責 Agent + Guardrails | ✔ |
| [Anthropic customer-support-agent](https://github.com/anthropics/claude-quickstarts/tree/main/customer-support-agent) | EN | Next.js + Claude + Bedrock KB | 知識庫 + 情緒偵測 + 轉人工 | ✔ |
| [AI Bistro Ordering](https://github.com/zhichzhang/ai-bistro-ordering) | EN | React Native + Express + Supabase + Gemini | LLM 輸出動作、後端驗證 | ✔ |
| [OrderBot](https://github.com/nicoladisabato/OrderBot) | EN | OpenAI FC + MySQL + Chainlit | 小型點餐 Bot | ✔ |
| [linebot-gemini-multimodel-funcal](https://github.com/kkdai/linebot-gemini-multimodel-funcal) | ZH-TW | FastAPI + LINE + Gemini | LINE 電商客服 function calling | ✔ |
| [Evan Lin：Function Call → ADK Agent](https://www.evanlin.com/function-agent/) | ZH-TW | LINE + ADK | 兩種工具迴圈寫法對照 | ✔ |
| [臺北客家美食節 LINE Bot](https://github.com/kane8201053-collab/hakka-food-linebot) | ZH-TW | Flask + LINE + Gemini + Render | 餐飲 FAQ + 64 個測試情境 | ✔ |
| [n8n LINE AI 客服（G股網）](https://brain168.com/n8n-line-ai-bot/) | ZH-TW | n8n + OpenAI + Sheets | 零程式，Sheet 當知識庫 | ✔ |
| [Dify 官方：知識庫智能客服](https://docs.dify.ai/zh-hans/workshop/intermediate/customer-service-bot) | ZH | Dify | 問題分類器 + 知識檢索 | ✔ |
| [Dify 智能客服工作流 20 分鐘](https://developer.volcengine.com/articles/7533551167696338980) | ZH | Dify | 轉人工分支 | ✔ |

## C. Generative Media / Video Advertising（對應 Lab 03）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | ZH | Python + FFmpeg + Edge TTS | 主題 → 成片，三種比例 | ✔ |
| [MoneyPrinterTurbo 免安裝教學](https://the-walking-fish.com/p/moneyprinterturbo/) | ZH-TW | Windows 免安裝版 | 繁中課前閱讀 | ✔ |
| [Pixelle-Video](https://github.com/AIDC-AI/Pixelle-Video) | ZH | ComfyUI 後端 | 分鏡 → 逐格生成 → 合成（Repo 已搬至 ATH-MaaS） | ✔ |
| [NarratoAI](https://github.com/linyqh/NarratoAI) | ZH | MoviePy + Streamlit | 既有素材 + AI 解說 | ✔ |
| [Bilibili：ComfyUI 全能電商工作流](https://www.bilibili.com/video/BV19tznYQEwZ/) | ZH | ComfyUI | 商品精修、換背景 | ✔ |
| [n8n：商品照 → UGC 廣告短片](https://n8n.io/workflows/18698-generate-ugc-ad-reels-from-product-photos-with-deepseek-and-kieai) | EN | n8n + DeepSeek + kie.ai | 最接近 Lab 03 的現成版 | ✔ |
| [n8n：UGC 廣告 + 對嘴](https://n8n.io/workflows/10070-create-authentic-ugc-video-ads-with-gpt-4o-elevenlabs-and-wavespeed-lip-sync/) | EN | GPT-4o + ElevenLabs + WaveSpeed | 配音與數位人 | ◐ |
| [short-video-maker](https://github.com/gyoridavid/short-video-maker) | EN | Remotion + MCP server | Claude 可透過 MCP 呼叫 | ✔ |
| [Remotion prompt-to-video](https://github.com/remotion-dev/template-prompt-to-video) | EN | Remotion | 用程式剪輯 | ✔ |
| [Higgsfield：Claude 創意工作室](https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio) | EN | Claude + Higgsfield MCP | 官方 Agent 廣告素材流程 | ✔ |

## D. Software：Web（對應 Lab 04）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [巨匠電腦：Claude Design + Claude Code 架站](https://www.pcschool.com.tw/blog/it-skill/claude-design-website-tutorial) | ZH-TW | Claude Code + Netlify Forms | 活動報名頁 | ✔ |
| [raven.tw：Claude Code 個人部落格](https://raven.tw/blog/claude-code-personal-blog-complete-guide/) | ZH-TW | Astro + Notion CMS + Cloudflare | CMS 與部署 | ✔ |
| [awesome-claude-design：20 分鐘 Landing Page](https://github.com/rohitg00/awesome-claude-design/blob/main/recipes/landing-page-20-min.md) | EN | DESIGN.md → Claude Code → Vercel | Brief → 部署完整流程 | ✔ |
| [DevPortfolio](https://github.com/amythnn/amythnn.github.io) | EN | Astro + Tailwind | 真實 CLAUDE.md 範例 | ✔ |
| [Auspia：Codex SEO/GEO 網站](https://auspia.ai/blog/codex-create-seo-geo-website-prompt-deploy) | EN | Codex + Vercel | SEO 步驟最具體 | ✔ |
| [iT 邦：個人網站改雜誌風](https://ithelp.ithome.com.tw/articles/10400090) | ZH-TW | Claude Code + Vue 3 | 改版 | ◐ |
| [知乎：frontend-design Skill](https://zhuanlan.zhihu.com/p/2003753772518753567) | ZH | Claude Code | 設計規範前後對照 | ◐ |
| [Clastron：用 Codex 做 Landing Page](https://medium.com/@clastron/how-i-built-a-1k-quality-landing-page-with-codex-and-a-few-tools-1ecb983f2dca) | EN | Codex | Codex 版案例 | ◐ |

## D. Software：Game（對應 Lab 05）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [Phaser：Claude Code 2D 射擊遊戲](https://phaser.io/news/2026/02/phaser-claude-code-tutorial) | EN | Phaser + Claude Code | 可玩里程碑 | ✔ |
| [claude-one-button-game-creation](https://github.com/abagames/claude-one-button-game-creation) | EN | Claude + Playwright + AGENTS.md | 批次生成一鍵遊戲 | ✔ |
| [OpenAI：Codex 瀏覽器遊戲](https://learn.chatgpt.com/use-cases/browser-games) | EN | Codex + ImageGen + Playwright | 程式 + 美術 + 試玩 | ✔ |
| [awesome-ai-built-games](https://github.com/lappemic/awesome-ai-built-games) | EN | 多種 | AI 遊戲作品清單 | ✔ |
| [gpt-5-coding-examples](https://github.com/openai/gpt-5-coding-examples) | EN | 單一 prompt | prompt 與成果對照 | ✔ |
| [MindStudio：Codex /goal 做遊戲](https://www.mindstudio.ai/blog/alex-finn-codex-goal-command-video-game-build) | EN | Codex + 生圖 | Agent 迴圈中生成美術 | ✔ |
| [SegmentFault：Claude Code 遊戲開發入門](https://segmentfault.com/a/1190000048011168) | ZH | Claude Code + HTML5 | 中文逐步教學 | ✔ |
| [掘金：Claude Code 做遊戲，跑起來我沉默了](https://juejin.cn/post/7653097416624652314) | ZH | Claude Code + Godot | AI 極限的反思 | ✔ |
| [claude-code-dungeon-master](https://github.com/harry18456/claude-code-dungeon-master) | ZH-TW | Claude Code + hooks + skills | iThome 鐵人賽 30 天 | ✔ |
| [Troy Scott：一晚做 Phaser 射擊遊戲](https://troyscott.ca/posts/building-2d-shooter-phaser-claude/) | EN | Phaser 3 + Claude | 工作坊規模 | ◐ |
| [Higgsfield Games](https://higgsfield.ai/blog/Higgsfield-Games) | EN | Claude + Higgsfield MCP | Game Studio 官方示範 | ✔ |

## E. Spatial & 3D（對應 Lab 06）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [Claude 平面圖 → 3D 房屋](https://www.sidharthsatapathy.com/blog/claude-blender-mcp-floor-plan-to-3d-house/) | EN | Claude + blender-mcp | 俯視圖對照自我修正 | ✔ |
| [夏卡樵：用 Blender-mcp 讓 Claude 做 3D](https://shaka-joe.com/posts/blender-mcp) | ZH-TW | Claude + blender-mcp | 單一房間，誠實記錄限制 | ✔ |
| [Bilibili：Claude Code + Blender MCP 生成 3D 環境](https://www.bilibili.com/video/BV1RKXNBMEDX/) | ZH | Claude Code + Blender MCP | 與工作坊路線相同 | ✔ |
| [YouTube：3D 設計師實測自動室內設計](https://www.youtube.com/watch?v=KrmIX7sRxv8) | ZH | Claude + Blender MCP | 專業者視角 | ◐ |
| [Eigent：Blender MCP 連接器指南](https://www.eigent.ai/zh-TW/blog/claude-blender-mcp) | ZH-TW | Blender MCP + 本地模型 | 方案比較 | ✔ |
| [agent-skills：blender-mcp skill](https://github.com/vladmdgolam/agent-skills) | EN | Blender → glTF → Three.js | 上網頁最後一步 | ✔ |
| [Holodeck](https://github.com/allenai/Holodeck) | EN | GPT-4o + Objaverse | 研究：文字 → 房間 | ✔ |
| [LayoutGPT](https://github.com/weixi-feng/LayoutGPT) | EN | LLM → 數字佈局 | 研究：佈局即資料 | ✔ |
| [SceneCraft](https://arxiv.org/abs/2403.01248) | EN | LLM → bpy + 視覺檢查 | 研究：觀察→修正迴圈 | ◐ |
| [3D-GPT](https://github.com/Chuny1/3DGPT) | EN | 多 Agent + Infinigen | 研究：多 Agent 分工 | ✔ |
| [知乎：MCP 案例 Claude+Blender 全自動 3D 建模](https://zhuanlan.zhihu.com/p/31434985574) | ZH | Claude + Blender MCP | 中文實測 | ◐ |

## F. Workflow Automation（對應 Lab 07）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [n8n：RSS AI 摘要、通知、封存](https://n8n.io/workflows/4503-automate-rss-content-with-ai-summarize-notify-and-archive/) | EN | Sheets + RSS + OpenAI + Discord | 最接近 Lab 07 | ✔ |
| [n8n：每日 AI 新聞摘要](https://n8n.io/workflows/17217-send-daily-ai-news-digests-from-rss-feeds-with-openai-telegram-and-gmail) | EN | RSS + OpenAI + Telegram + Gmail | 摘要 prompt 設計 | ✔ |
| [n8n：本地 Llama 新聞摘要](https://n8n.io/workflows/6011-daily-ai-news-digest-with-rss-llama-32-summarization-and-telegram-delivery/) | EN | Ollama | 零 API 費用 | ✔ |
| [n8n：求職信件自動分類](https://n8n.io/workflows/15299-automatic-workflow-to-categorise-your-job-status) | EN | Gmail + regex + Ollama + Sheets | 規則 + LLM 互補 | ✔ |
| [iT 邦：n8n 新聞推送到 LINE](https://ithelp.ithome.com.tw/articles/10373984) | ZH-TW | n8n + RSS + LINE Messaging API | 台灣在地 | ✔ |
| [n8n 新聞自媒體全攻略](https://lifecheatslab.com/n8n-news-media/) | ZH-TW | n8n + Gemini + LINE | 同 Lab 07 技術組合 | ✔ |
| [Bilibili：n8n 公眾號文章採集與 AI 摘要](https://www.bilibili.com/video/BV12F1VBfER8/) | ZH | n8n + AI Agent 節點 | 節點設定細節 | ✔ |
| [awesome-n8n-templates](https://github.com/enescingoz/awesome-n8n-templates) | EN | 280+ 範本 | 分類整理 | ✔ |
| [Zie619/n8n-workflows](https://github.com/Zie619/n8n-workflows) | EN | 大量 workflow + 搜尋 | 範例搜尋 | ✔ |

## G. Computer / Tool Agent（對應 Lab 08）

| 專案 | 語言 | 技術 | 重點 | 查核 |
|---|---|---|---|:---:|
| [swingyoyo：AI Agent + Playwright MCP 操作網站](https://swingyoyo.com/post/mcp-playwright/) | ZH-TW | Claude + Playwright MCP | 抓社團活動，最接近 Lab 08 | ✔ |
| [YWC：Playwright MCP + Claude 做 AI 爬蟲](https://ywctech.net/ml-ai/playwright-mcp-crawler/) | ZH-TW | Playwright + Filesystem MCP | 擷取 → 存檔 | ✔ |
| [博客園：Playwright MCP 與 Claude 網頁操作智能體](https://www.cnblogs.com/hogwarts/p/19133057) | ZH | Claude + Playwright MCP | 三層任務難度 | ✔ |
| [Bilibili：Browser Use 原理 + 實戰](https://www.bilibili.com/video/BV1vZfKYeEDk/) | ZH | browser-use + DeepSeek | 原理解說 | ✔ |
| [Anthropic computer-use-demo](https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo) | EN | Docker + VNC | 官方參考實作與安全建議 | ✔ |
| [browser-use apply_to_job](https://github.com/browser-use/browser-use/blob/main/examples/use-cases/apply_to_job.py) | EN | browser-use | 反例：直接送出 | ✔ |
| [browser-use web-ui](https://github.com/browser-use/web-ui) | EN | Gradio + Playwright | 零程式介面 | ✔ |
| [Open Operator](https://github.com/browserbase/open-operator) | EN | Next.js + Stagehand | 已封存，歷史參考 | ✔ |

---

## H. 複合：圖 → 3D → 綁骨 → 遊戲 / 列印（對應 Lab 09）

| 專案 | 語言 | 串接步驟 | 查核 |
|---|---|---|:---:|
| [threejs-game-skills](https://github.com/majidmanzarpour/threejs-game-skills) | EN | 概念圖 → Tripo → Three.js 可玩遊戲（Claude Code / Codex skills） | ✔ |
| [Claude MCP + Blender / Unity 自動化全指南（CSDN）](https://blog.csdn.net/2301_78671196/article/details/160085812) | ZH | 圖 → TRELLIS → Blender MCP → Unity MCP | ✔ |
| [Blender-MCP + Claude Code 自動建模（博客園）](https://www.cnblogs.com/wgwyanfs/p/20314788) | ZH | Claude Code → blender-mcp → Rodin → Unity / Three.js | ✔ |
| [comfyui-ai-gamedev](https://github.com/mattwilliamson/comfyui-ai-gamedev) | EN | 參考圖 → Hunyuan3D 2.1 → Blender 減面 PBR → GLB | ✔ |
| [AI Auto-Rigging Showdown 2026](https://www.strayspark.studio/blog/ai-auto-rigging-showdown-2026-tripo-meshy-cascadeur-mixamo) | EN | 生成 → 5 種自動綁骨比較 → Blender → UE | ✔ |
| [Tripo 完整角色工作流（Bilibili）](https://www.bilibili.com/video/BV1wr8L6xEVi/) | ZH | Tripo → Blender → AccuRig → UE | ✔ |
| [Nano Banana 手辦自由（CSDN）](https://blog.csdn.net/qq1198768105/article/details/151142266) | ZH | 生圖 → 混元 3D / Tripo → STL → 列印 | ✔ |
| [Meshy / Tripo + Three.js 實作心得](https://dev.to/abigail_armijo/what-i-learned-exploring-ai-generated-3d-a-hands-on-tour-of-meshy-tripo-and-threejs-5cic) | EN | 2D → 3D → 綁骨 → Three.js（2024） | ✔ |
| [Meshy → Roblox Studio](https://www.meshy.ai/tutorials/3d-model-for-roblox-workflow) | EN | 生成 → 減面 → 綁骨 → Roblox（廠商教學） | ✔ |
| [3D-Craft](https://github.com/JiawenZhu/3D-Craft) | EN | 概念圖 → 多種圖生 3D → Three.js | ◐ |
| [Blender as a Pipeline Engine](https://shahriyarshahrabi.medium.com/blender-as-a-pipeline-engine-make-rigged-characters-with-comfyui-3a1e81a3e623) | EN | ComfyUI → Hunyuan3D → Blender 自動綁骨 | ◐ |

## I. 複合：Blender 預演 → AI 影片（對應 Lab 11）

| 專案 | 語言 | 串接步驟 | 查核 |
|---|---|---|:---:|
| [Higgsfield for Blender 外掛 + MCP Bridge](https://higgsfield.ai/blog/higgsfield-blender-plugin) | EN | 白模 → 角色動畫 → 貼圖 → 影片模型渲染，Agent 可經 MCP 驅動 | ✔ |
| [Higgsfield MCP → After Effects](https://alphasignal.ai/news/higgsfield-lets-claude-build-fully-editable-after-effects-projects) | EN | Claude → Higgsfield MCP → 可編輯 AE 專案 | ✔ |
| [Flick：Blender for AI Filmmaking 2026](https://flick.art/blog/blender-ai-filmmaking) | EN | 白模鏡頭 → 參考影片 + 首影格 → 影片模型；5 種控制方法比較 | ✔ |
| [Blender to ComfyUI AI Renderer 2.0](https://www.runcomfy.com/comfyui-workflows/blender-to-comfyui-ai-renderer-2-0-workflow-cinematic-video-output) | EN | 深度 / 輪廓 / 姿勢通道 → Wan VACE | ✔ |
| [AI Rendering 3D Animations（v1）](https://www.runcomfy.com/comfyui-workflows/ai-rendering-3d-animations-with-blender-and-comfyui) | EN | ControlNet + AnimateDiff + IPAdapter | ✔ |
| [ComfyUI-BlenderAI-node](https://github.com/AIGODLIKE/ComfyUI-BlenderAI-node) | EN/ZH | Blender ↔ ComfyUI 即時橋接 | ✔ |
| [Bilibili 爆蛋BD：GPT-6 操作 Blender 白模預演 → Seedance](https://www.bilibili.com/video/BV1x7Yx6YEM6/) | ZH | Agent → Blender → 影片模型，逐鏡對照 | ✔ |
| [Bilibili 擎蒼與愛：白模把運鏡從抽卡變預演](https://www.bilibili.com/video/BV1k48u6rEXX/) | ZH | 白模預演 → 影片模型 | ✔ |
| [Bilibili：Blender + ComfyUI + 混元3D + 可靈 角色一致性](https://www.bilibili.com/video/BV1PM9RYvEiF/) | ZH | 角色圖 → 3D → Blender 擺姿勢 → 圖生影片 | ✔ |
| [Bilibili 若有神祇：ComfyUI 焊進 Blender](https://www.bilibili.com/video/BV1XG93BpEey/) | ZH | Blender ↔ ComfyUI 橋接 | ✔ |
| [騰訊雲：Blender + Seedance 25 個案例](https://developer.cloud.tencent.com/article/2702701?policyId=1004) | ZH | 案例彙整，含 Codex + Blender MCP | ✔ |
| [知乎：做 AI 影片，先讓 Blender 把鏡頭演一遍](https://zhuanlan.zhihu.com/p/2063312464255756192) | ZH | 白模預演 | ◐ |

## J. 複合：AI 影片剪輯（對應 Lab 10）

完整清單（精華切片、字幕翻譯配音、Agent 操作剪輯軟體、實作文章，共 20 餘項）見 [Lab 10 參考專案](../labs/lab-10-event-highlight-editing/#6-參考專案)。代表項目：

| 專案 | 語言 | 串接步驟 | 查核 |
|---|---|---|:---:|
| [video-use](https://github.com/browser-use/video-use) | EN | 逐字稿 → Claude 決定剪接 → ffmpeg → 剪接點自檢 | ✔ |
| [FunClip](https://github.com/modelscope/FunClip) | ZH | FunASR + 說話者辨識 → LLM 選段 → 剪接 + SRT | ✔ |
| [AutoClip](https://github.com/zhouxiaoka/autoclip) | ZH | yt-dlp → Whisper → LLM 評分精華 → 合輯 | ✔ |
| [pyJianYingDraft](https://github.com/GuanYixuan/pyJianYingDraft) | ZH | Python → 剪映草稿 | ✔ |
| [capcut-mate](https://github.com/Hommy-master/capcut-mate) | ZH | 扣子 / n8n → 剪映草稿 → 雲端渲染 | ✔ |
| [楓羽：Claude Code 指揮 ffmpeg + Whisper](https://maplefeather.com/article/ai-auto-video-editing-claude-code-2026) | ZH-TW | 錄影 → Whisper → auto-editor → 字幕配樂 → 9:16 | ✔ |
| [Bilibili：AI 全自動接管剪映](https://www.bilibili.com/video/BV1hLzCBzEDS/) | ZH | skill → 剪映多軌 | ✔ |
| [VideoLingo](https://github.com/Huanshere/VideoLingo) | ZH/EN | WhisperX → LLM 翻譯對齊 → 配音 → 燒字幕 | ◐ |
| [davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) | EN | LLM → MCP → Resolve | ◐ |

---

## 收錄原則

1. **整合優先**：至少串起兩個以上的工具/服務，完成一個具體任務
2. **可重現**：有程式碼、範本、或足夠詳細的步驟
3. **親自確認**：網址必須實際開啟過；無法開啟的標 ◐
4. **標註限制**：需付費、需 GPU、已封存、只支援英文等，要寫出來
