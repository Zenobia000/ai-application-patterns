# AI Application Patterns

**Multimodal, Agentic & Tool-Augmented Applications**

> 研究多模態基礎模型、Coding Agent 與 Tool Protocol 成熟後，AI Application 如何從「單次生成」演進成「可觀察、可操作、可迭代」的 Agentic System。

這個 Repo 不是工具清單。工具每季都在換，這裡累積的是 **Pattern（應用模式）**：一種可重複的「問題 → 方法」對應，工具換了也還能用。

---

## 核心命題

```text
AI Application = Model + Context + Tools + Orchestration + Runtime + Verification
```

看到任何新的「超炫 AI 案例」，不再開新分類，只問三件事：

1. **它解的是什麼問題？**（應用類別 A–G）
2. **它用了哪些 Pattern？**（方法群 P1–P6）
3. **為什麼這個方法適合這個問題？**（問題特性分析）

---

## 閱讀地圖

| 目錄 | 內容 | 適合誰 |
|---|---|---|
| [`taxonomy/`](taxonomy/) | 分類法：七大應用類別、問題特性、六種方法群、**複合式管線拆解法** | 所有人先讀 |
| [`patterns/`](patterns/) | 六種底層 Pattern 的原理、限制、入門練習 | 想懂「怎麼做」的人 |
| [`domains/`](domains/) | 八個應用領域（含兩個複合管線）：問題長什麼樣、該組合哪些 Pattern | 想懂「做什麼」的人 |
| [`labs/`](labs/) | **工作坊實作題目**（8 題基礎 + 3 題複合管線 + 1 個整合題） | 學員 |
| [`case-studies/`](case-studies/) | 別人已經做好的整合專案（中英文）、案例分析、**YouTube KOL 影片示範** | 找參考的人 |
| [`market-landscape/`](market-landscape/) | 商業產品與市場趨勢 | 研究者 |
| [`open-source/`](open-source/) | 開源基礎工具索引 | 動手做的人 |
| [`workshop/`](workshop/) | 工作坊導讀：為什麼做、價值在哪、怎麼帶 | 講師、帶隊學長姐 |
| [`site/`](site/) | **視覺化網站**：五層階層、關係圖、參考資料庫篩選（開啟 `site/index.html`；改完 md 後執行 `python3 site/build_data.py` 同步） | 所有人 |

---

## 七大應用類別 × 六種方法群

| 應用類別 | 主要 Pattern | 工作坊題目 |
|---|---|---|
| A. Knowledge & Reasoning 知識/推理 | P2 Retrieve & Reason | [Lab 01 校園規章問答助手](labs/lab-01-campus-qa/) |
| B. Conversational Agent 對話服務 | P2 + P4 | [Lab 02 校園咖啡店 AI 店員](labs/lab-02-cafe-agent/) |
| C. Generative Media 生成內容 | P1 + P4 | [Lab 03 幫巷口小店做 15 秒短影音](labs/lab-03-shop-video-ad/) |
| D. Software 軟體（網站） | P3 | [Lab 04 社團招生 Landing Page](labs/lab-04-club-landing-page/) |
| D. Software 軟體（遊戲） | P3 + P1 | [Lab 05 期末週紓壓小遊戲](labs/lab-05-stress-relief-game/) |
| E. Spatial & 3D 空間/3D | P4 + P6 | [Lab 06 用 AI 佈置我的宿舍房間](labs/lab-06-dorm-room-3d/) |
| F. Workflow Automation 流程自動化 | P5 + P2 | [Lab 07 每週機會情報站](labs/lab-07-weekly-opportunity-digest/) |
| G. Computer / Tool Agent 工具操作 | P6 + P4 | [Lab 08 校園活動行事曆代理](labs/lab-08-campus-event-agent/) |
| 複合：圖 → 3D → 遊戲 | P1 + P4 + P3 + P6 | [Lab 09 社團吉祥物：從一張圖到可玩的 3D 角色](labs/lab-09-mascot-image-to-3d-game/) |
| 複合：AI 剪輯 | P2 + P3 + P4 | [Lab 10 把社團活動錄影剪成 60 秒精華](labs/lab-10-event-highlight-editing/) |
| 複合：3D 預演 → AI 影片 | P4 + P6 + P1 + P3 | [Lab 11 Blender 當攝影棚、AI 當渲染器](labs/lab-11-blender-previz-to-ai-video/) |
| 整合 | P1–P6 組合 | [Capstone 一家店的 AI 開幕週](labs/capstone-shop-launch-week/) |

六種方法群：

| Pattern | 一句話 |
|---|---|
| [P1 Generate](patterns/generative-media/) | Prompt → Model → Artifact |
| [P2 Retrieve & Reason](patterns/knowledge-reasoning/) | Context → LLM → Answer |
| [P3 Code & Build](patterns/coding-agent/) | Requirement → Agent → Code → Runtime |
| [P4 Tool Use](patterns/tool-use-mcp/) | Agent → API/MCP → Tool |
| [P5 Workflow Orchestration](patterns/workflow-agent/) | Trigger → Agent/Rules → Multiple Tools |
| [P6 Observe–Act Loop](patterns/computer-use/) | State → Reason → Action → Verify |

---

## 複合式應用：先拆再接

現在最亮眼的案例幾乎都是複合式的：**概念圖 → 3D → Blender → 遊戲**、**Blender 白模預演 → 影片模型渲染**、**長影片 → 逐字稿 → AI 剪輯 → 剪映草稿**。

要做到這種等級，必須先拆成三種東西（詳見 [taxonomy/composite-pipelines.md](taxonomy/composite-pipelines.md)）：

| 概念 | 意思 |
|---|---|
| **原子能力** | 一次模態轉換，例如 圖→3D（V3）、逐字稿→剪輯決策（M5） |
| **交接物** | 步驟之間的檔案（PNG、GLB、SRT、剪輯 JSON），也就是工具之間的合約 |
| **黏著層** | 誰把步驟接起來：Agent + 多個 MCP、ComfyUI、n8n、程式碼 |

Lab 01–08 練單一應用類別，Lab 09–11 練串接。

## 目錄結構

```text
ai-application-patterns/
├── README.md
├── workshop/                 # 工作坊導讀（講師與學員）
├── taxonomy/                 # 分類法
│   ├── application-landscape.md
│   ├── problem-characteristics.md
│   ├── method-characteristics.md
│   └── composite-pipelines.md   # 複合式管線拆解法
├── patterns/                 # 六種底層方法
│   ├── generative-media/
│   ├── knowledge-reasoning/
│   ├── coding-agent/
│   ├── tool-use-mcp/
│   ├── workflow-agent/
│   └── computer-use/
├── domains/                  # 八個應用領域
│   ├── web/
│   ├── video-advertising/
│   ├── 3d-spatial/
│   ├── game/
│   ├── customer-agent/
│   ├── business-automation/
│   ├── ai-asset-pipeline/    # 圖 → 3D → 綁骨 → 遊戲/影片/列印
│   └── video-editing/        # AI 剪輯
├── labs/                     # 工作坊實作題
├── case-studies/             # 別人的整合專案 + 分析模板
├── market-landscape/         # 商業產品地圖
└── open-source/              # 開源工具索引
```

---

## 如何貢獻

1. 發現一個新案例 → 複製 [`case-studies/_template.md`](case-studies/_template.md)，填完三個問題再提交。
2. 完成一個 Lab → 在該 Lab 的 `showcase` 區塊附上你的 Repo 連結與一段心得（特別是「哪裡卡住、怎麼解」）。
3. 找到更好的參考專案 → 更新 [`case-studies/README.md`](case-studies/README.md)，請附上你親自確認過的網址。

---

## 心法

> 不要按玩具品牌整理玩具箱；先分它能蓋房子、開車還是畫畫，同類的新玩具以後自然知道放哪裡。

**口訣**：先分應用目的 → 再拆底層模式 → 最後映射工具。
