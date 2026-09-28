window.DATA = {
 "formula": [
  {
   "name": "Model 模型",
   "question": "用哪個模型理解與推理？",
   "examples": "Claude、GPT、Gemini、影像/影片/3D 生成模型"
  },
  {
   "name": "Context 脈絡",
   "question": "模型需要知道什麼才能做對？",
   "examples": "文件、資料庫、對話歷史、Scene 狀態、螢幕截圖"
  },
  {
   "name": "Tools 工具",
   "question": "模型能「動手」做什麼？",
   "examples": "API、MCP Server、程式執行、瀏覽器、Blender"
  },
  {
   "name": "Orchestration 編排",
   "question": "誰決定下一步？固定流程還是 Agent 自主？",
   "examples": "Workflow、Agent Loop、Subagents"
  },
  {
   "name": "Runtime 執行環境",
   "question": "成果在哪裡真正跑起來？",
   "examples": "瀏覽器、雲端、Blender、n8n、LINE"
  },
  {
   "name": "Verification 驗證",
   "question": "怎麼知道做對了？",
   "examples": "測試、截圖比對、規則檢查、引用來源、人工驗收"
  }
 ],
 "cats": [
  {
   "id": "A",
   "en": "Knowledge & Reasoning",
   "zh": "知識／推理",
   "problem": "從大量非結構資料取得答案、分析與判斷",
   "traits": "Context 很大、正確性重要、需要引用與驗證",
   "outputs": "研究報告、知識庫、資料分析",
   "usage": "RAG、Research Agent、文件分析",
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "B",
   "en": "Conversational Agent",
   "zh": "對話服務",
   "problem": "與人持續互動並完成目標",
   "traits": "多輪狀態、個人/企業知識、工具操作、權限",
   "outputs": "客服、銷售、家教、助理",
   "usage": "AI 客服、購物助手、訂位 Agent",
   "patterns": [
    "P2",
    "P4",
    "P5"
   ]
  },
  {
   "id": "C",
   "en": "Generative Media",
   "zh": "生成內容",
   "problem": "創造或修改視覺、影音、聲音",
   "traits": "主觀品質、參考一致性、風格、速度",
   "outputs": "圖片、廣告、短影音、音樂",
   "usage": "影像/影片生成、ComfyUI 工作流",
   "patterns": [
    "P1",
    "P4",
    "P3",
    "P5"
   ]
  },
  {
   "id": "D",
   "en": "Software & Interactive Experience",
   "zh": "軟體／互動體驗",
   "problem": "把需求轉成可以執行的軟體",
   "traits": "結構化、State、Logic、Debug、部署",
   "outputs": "網站、App、遊戲、Dashboard",
   "usage": "Claude Code、Codex、Framer",
   "patterns": [
    "P3",
    "P1",
    "P4",
    "P6"
   ]
  },
  {
   "id": "E",
   "en": "Spatial & 3D",
   "zh": "空間／3D",
   "problem": "建立具幾何、材質與互動的空間",
   "traits": "Geometry、Scene Graph、Camera、Physics、視覺 QA",
   "outputs": "3D 商品、建築、場景、遊戲世界",
   "usage": "Blender MCP、Spline、Three.js",
   "patterns": [
    "P4",
    "P3",
    "P6",
    "P1"
   ]
  },
  {
   "id": "F",
   "en": "Workflow Automation",
   "zh": "流程自動化",
   "problem": "把跨系統工作串成完整流程",
   "traits": "非結構輸入、多系統、條件分支、可靠性",
   "outputs": "行銷、報表、CRM、資料處理",
   "usage": "n8n、Zapier、Agent Workflow",
   "patterns": [
    "P5",
    "P2",
    "P4",
    "P6"
   ]
  },
  {
   "id": "G",
   "en": "Computer / Tool Agent",
   "zh": "工具操作",
   "problem": "直接操作既有軟體完成工作",
   "traits": "GUI/API 操作、觀察→行動迴圈、權限與失敗恢復",
   "outputs": "操作瀏覽器、設計軟體、既有系統",
   "usage": "MCP、Computer Use、Browser Agent",
   "patterns": [
    "P6",
    "P4"
   ]
  }
 ],
 "combos": [
  {
   "name": "AI 商品廣告",
   "combo": [
    "C",
    "F",
    "G"
   ],
   "note": "生成素材（C），串成批次流程（F），由 Agent 透過 MCP 呼叫生成服務（G）"
  },
  {
   "name": "AI 3D 商品網站",
   "combo": [
    "E",
    "D",
    "G"
   ],
   "note": "3D 模型（E），嵌入網頁（D），Agent 操作 Blender 產出（G）"
  },
  {
   "name": "AI 客服",
   "combo": [
    "B",
    "A",
    "F"
   ],
   "note": "對話（B），查知識庫（A），建立工單/訂單（F）"
  },
  {
   "name": "AI 小遊戲",
   "combo": [
    "D",
    "C",
    "G"
   ],
   "note": "寫程式（D），生成美術與音效（C），Agent 協調兩者（G）"
  },
  {
   "name": "每週資訊摘要",
   "combo": [
    "F",
    "A"
   ],
   "note": "排程抓資料（F），理解與分類（A）"
  }
 ],
 "traits": {
  "cols": [
   "A",
   "B",
   "C",
   "D",
   "E",
   "F",
   "G"
  ],
  "matrix": [
   {
    "name": "非結構資料理解",
    "values": [
     "○",
     "○",
     "○",
     "△",
     "△",
     "○",
     "△"
    ]
   },
   {
    "name": "正確性／可驗證",
    "values": [
     "○",
     "○",
     "△",
     "○",
     "○",
     "○",
     "○"
    ]
   },
   {
    "name": "視覺品質",
    "values": [
     "×",
     "×",
     "○",
     "○",
     "○",
     "×",
     "△"
    ]
   },
   {
    "name": "結構化輸出",
    "values": [
     "○",
     "△",
     "△",
     "○",
     "○",
     "○",
     "○"
    ]
   },
   {
    "name": "狀態／互動",
    "values": [
     "△",
     "○",
     "△",
     "○",
     "○",
     "○",
     "○"
    ]
   },
   {
    "name": "多工具整合",
    "values": [
     "△",
     "○",
     "○",
     "○",
     "○",
     "○",
     "○"
    ]
   },
   {
    "name": "Deterministic Control 可控性",
    "values": [
     "○",
     "△",
     "△",
     "○",
     "○",
     "○",
     "○"
    ]
   },
   {
    "name": "Batch Automation 批次化",
    "values": [
     "○",
     "○",
     "○",
     "○",
     "△",
     "○",
     "○"
    ]
   },
   {
    "name": "人工驗收成本",
    "values": [
     "中",
     "中",
     "高",
     "中",
     "高",
     "中",
     "中高"
    ]
   }
  ],
  "desc": {
   "非結構資料理解": {
    "q": "輸入是 PDF、Email、對話、圖片這類沒有欄位的東西嗎？",
    "need": "LLM 做理解/抽取，而不是寫死規則"
   },
   "正確性／可驗證": {
    "q": "錯了會怎樣？有沒有「標準答案」可以比對？",
    "need": "引用來源、測試、規則檢查、人工覆核"
   },
   "視覺品質": {
    "q": "成果好不好是「看了才知道」嗎？",
    "need": "參考圖、風格鎖定、多版本挑選、人眼審查"
   },
   "結構化輸出": {
    "q": "成果要被其他程式讀取嗎？（JSON、表格、程式碼、Scene）",
    "need": "Schema、Structured Output、驗證器"
   },
   "狀態／互動": {
    "q": "需要記住前面發生的事嗎？使用者會來回操作嗎？",
    "need": "Session/記憶管理、狀態機、資料庫"
   },
   "多工具整合": {
    "q": "要碰幾個外部系統？",
    "need": "MCP / API 整合、錯誤處理、權限設計"
   },
   "Deterministic Control": {
    "q": "同樣輸入需要得到同樣結果嗎？",
    "need": "把關鍵步驟交給程式或規則，LLM 只做判斷"
   },
   "Batch Automation": {
    "q": "要做一次，還是每天做一百次？",
    "need": "Workflow、排程、重試、成本控管"
   },
   "人工驗收成本": {
    "q": "人要花多少時間確認成果可以用？",
    "need": "決定這個應用真正的 ROI"
   }
  },
  "hardest": [
   {
    "domain": "3D",
    "hard": "幾何正確、Scene 一致性",
    "prompt": "少。需要工具回饋（截圖、Scene 查詢）"
   },
   {
    "domain": "影片",
    "hard": "時間一致性（角色、場景前後一致）、視覺品質",
    "prompt": "部分。需要參考圖、分鏡、多次生成挑選"
   },
   {
    "domain": "企業流程",
    "hard": "可靠性、權限、失敗重跑",
    "prompt": "少。需要 Workflow 引擎與規則"
   },
   {
    "domain": "知識問答",
    "hard": "找對資料、不要亂編",
    "prompt": "部分。需要檢索品質與引用"
   },
   {
    "domain": "軟體",
    "hard": "邏輯正確、可以跑",
    "prompt": "部分。需要執行、測試、除錯迴圈"
   }
  ],
  "ladder": "可自動驗證（程式測試、Schema 檢查）    → 適合讓 Agent 自主跑多輪\n部分可驗證（截圖給模型看、規則檢查）   → Agent 迭代 + 人工最終確認\n難以驗證（美感、品牌調性）             → Agent 產多版，人類決策"
 },
 "patterns": [
  {
   "id": "P1",
   "name": "Generate",
   "title": "P1 Generate：生成媒體",
   "method": "Prompt → Model → Artifact",
   "fits": "創意、多媒體",
   "examples": "Image / Video / Audio / 3D 生成",
   "structure": "Prompt（+ 參考圖 / 參考音訊）→ 生成模型 → Artifact（圖、影片、音訊、3D）",
   "intro": [
    "用模型「創造」原本不存在的內容。核心能力是從描述或參考素材，產出視覺、影音、聲音或 3D 資產。",
    "2026 年的重要轉變：生成能力不再只存在於網頁介面，而是被包成 <strong>工具</strong>（API、MCP），讓 Agent 在更大的流程裡呼叫。例如 Higgsfield 提供官方 MCP，Claude 可直接呼叫 30 多種影像與影片模型；ComfyUI 把影像、影片、音訊、3D 都抽象成可重用的節點圖，並提供 Server API。"
   ],
   "fit": {
    "head": [
     "適合",
     "不適合"
    ],
    "rows": [
     [
      "主視覺、插圖、概念圖",
      "需要精確文字的畫面（價格、地址）→ 用後製疊字"
     ],
     [
      "短影音、廣告素材",
      "需要與真實商品 100% 一致 → 用真實照片當參考或直接拍"
     ],
     [
      "配音、音效、背景音樂",
      "需要可重現的結果（同輸入同輸出）"
     ],
     [
      "大量變體（A/B 測試）",
      "法律上需要真實性的內容（證據、新聞）"
     ]
    ]
   },
   "fail": {
    "head": [
     "失敗",
     "原因",
     "對策"
    ],
    "rows": [
     [
      "角色/商品前後不一致",
      "每次生成都是獨立抽樣",
      "參考圖、角色鎖定功能、固定 seed"
     ],
     [
      "畫面中文字錯亂",
      "模型不擅長文字",
      "不要在生成中放字，後製加字幕"
     ],
     [
      "風格漂移",
      "prompt 每次寫法不同",
      "固定一段「風格描述」附在每個 prompt 後"
     ],
     [
      "好看但不對題",
      "缺乏具體 brief",
      "先寫分鏡表，再逐鏡生成"
     ]
    ]
   },
   "warmup": {
    "title": "幫自己做一組 LINE 貼圖（30 分鐘）",
    "task": "用一張自己（或寵物）的照片當參考，生成 8 張同一角色、不同表情的貼圖：「收到」「好累」「期末加油」「哈哈」「謝謝」「？」「晚安」「讚」。",
    "notes": [
     "<strong>你會遇到的問題</strong>：第 5 張開始角色長得不一樣了。這就是「參考一致性」問題，也是影片生成最大的難題。",
     "<strong>驗收</strong>：8 張放在一起，朋友能一眼看出是同一個角色。記錄你總共生成了幾張才湊齊 8 張。"
    ]
   },
   "traits": {
    "輸出是否可重現": "低",
    "能否自動驗證": "難",
    "需要外部系統": "生成服務",
    "單次成本": "中–高",
    "失敗模式": "品質不穩、不一致",
    "入門門檻": "低"
   }
  },
  {
   "id": "P2",
   "name": "Retrieve & Reason",
   "title": "P2 Retrieve & Reason：檢索與推理",
   "method": "Context → LLM → Answer",
   "fits": "文件、知識、分析",
   "examples": "RAG、Deep Research",
   "structure": "問題 → 檢索相關 Context（文件、資料庫、網頁）→ LLM 根據 Context 推理 → 附引用的答案",
   "intro": [
    "模型本身不知道「你的」資料：你學校的規定、你公司的產品、你上週的會議紀錄。P2 的做法是 <strong>先找資料，再回答</strong>，最常見的形式是 RAG（Retrieval-Augmented Generation，檢索增強生成）。",
    "進階形式："
   ],
   "fit": {
    "head": [
     "適合",
     "不適合"
    ],
    "rows": [
     [
      "規章、手冊、合約問答",
      "需要即時計算的問題（交給程式）"
     ],
     [
      "大量文件摘要與比較",
      "資料本身就是錯的或過時的"
     ],
     [
      "研究報告、文獻整理",
      "答案需要主觀創意（→ P1）"
     ],
     [
      "客服知識庫",
      "要「做事」而非「回答」（→ P4）"
     ]
    ]
   },
   "fail": {
    "head": [
     "失敗",
     "原因",
     "對策"
    ],
    "rows": [
     [
      "一本正經亂編",
      "沒找到資料，模型用常識補",
      "設門檻，找不到就回「未找到」"
     ],
     [
      "找錯段落",
      "切塊（chunk）方式不好、中文沒斷詞",
      "依結構切（條、節）、混合檢索（BM25 + 向量）"
     ],
     [
      "引用對不上",
      "模型改寫時失真",
      "引用要指到具體段落，UI 可一鍵對照"
     ],
     [
      "版本混淆",
      "新舊規定都在資料庫",
      "metadata 標版本、日期"
     ]
    ]
   },
   "warmup": {
    "title": "問你的課程大綱（30 分鐘）",
    "task": "把這學期所有課程的大綱（syllabus）PDF 上傳到 NotebookLM 或 Claude Projects，問： - 「哪一週我有兩個以上的考試或報告？」 - 「哪幾門課期末考佔分超過 40%？」 - 「XX 課可以缺席幾次？」（故意問一門大綱沒寫的）",
    "notes": [
     "<strong>你會遇到的問題</strong>：跨文件的問題（第一題）比單一文件難得多；大綱沒寫的，AI 會不會亂編？",
     "<strong>驗收</strong>：自己翻大綱核對 3 題答案。"
    ]
   },
   "traits": {
    "輸出是否可重現": "中",
    "能否自動驗證": "中（引用）",
    "需要外部系統": "資料來源",
    "單次成本": "低–中",
    "失敗模式": "幻覺、找錯資料",
    "入門門檻": "中"
   }
  },
  {
   "id": "P3",
   "name": "Code & Build",
   "title": "P3 Code & Build：Coding Agent",
   "method": "Requirement → Agent → Code → Runtime",
   "fits": "網站、App、遊戲",
   "examples": "Claude Code、Codex",
   "structure": "需求（Brief）→ Agent 規劃 → 寫程式 → 執行 → 測試/截圖 → 修正 → 交付可運作的軟體",
   "intro": [
    "Claude Code、Codex 這類 Coding Agent 不只是「產生程式碼片段」，而是在一個有檔案系統、終端機、瀏覽器的環境裡，<strong>自己建專案、裝套件、執行、看錯誤訊息、修正</strong>，直到東西真的能跑。",
    "關鍵概念："
   ],
   "fit": {
    "head": [
     "適合",
     "不適合"
    ],
    "rows": [
     [
      "網站、App、遊戲、Dashboard",
      "需求本身還沒想清楚"
     ],
     [
      "資料處理腳本",
      "需要高度主觀的視覺判斷（Agent 會做出「平均值」）"
     ],
     [
      "把其他 Pattern 串起來的膠水程式",
      "你完全無法驗收的東西"
     ],
     [
      "原型驗證",
      "涉及安全、金流卻沒人審查"
     ]
    ]
   },
   "fail": {
    "head": [
     "失敗",
     "原因",
     "對策"
    ],
    "rows": [
     [
      "做出來都長一樣（紫色漸層 + Inter）",
      "需求模糊，模型回到平均值",
      "寫 Brief 與設計規範、使用 frontend-design 類 skill"
     ],
     [
      "說「完成了」但其實壞掉",
      "沒有驗證步驟",
      "要求 Agent 執行、跑測試、截圖"
     ],
     [
      "越改越亂",
      "一次要求太多",
      "里程碑推進，每步 commit"
     ],
     [
      "改 A 壞 B",
      "沒有測試",
      "先寫測試或驗收清單"
     ]
    ]
   },
   "warmup": {
    "title": "「今天吃什麼」轉盤（30 分鐘）",
    "task": "讓 Coding Agent 做一個網頁轉盤：輸入學校附近的餐廳清單，按下按鈕轉動，停在某一家。要有轉動動畫、可以增刪餐廳、重新整理後清單還在。",
    "notes": [
     "<strong>你會遇到的問題</strong>：「轉盤停的位置」和「顯示的結果」對不上，這是很典型的 AI 邏輯錯誤。你要怎麼描述這個 bug 讓 Agent 修好？",
     "<strong>驗收</strong>：轉 10 次，指針指到的餐廳和顯示的名字 10 次都一致；手機上可以用。"
    ]
   },
   "traits": {
    "輸出是否可重現": "高",
    "能否自動驗證": "易（測試）",
    "需要外部系統": "執行環境",
    "單次成本": "中",
    "失敗模式": "邏輯錯、跑不起來",
    "入門門檻": "中"
   }
  },
  {
   "id": "P4",
   "name": "Tool Use",
   "title": "P4 Tool Use：API / MCP 工具使用",
   "method": "Agent → API/MCP → Tool",
   "fits": "專業工具操作",
   "examples": "Blender MCP、Higgsfield MCP",
   "structure": "Agent 決定要做什麼 → 呼叫工具（API / MCP Server）→ 外部系統真正執行 → 回傳結果 → Agent 決定下一步",
   "intro": [
    "讓模型從「說」變成「做」。模型本身只能產生文字，但它可以輸出一個 <strong>結構化的工具呼叫</strong>（例如 <code>place_order(item=&quot;拿鐵&quot;, qty=2)</code>），由程式真正去執行。",
    "<strong>MCP（Model Context Protocol）</strong> 是這件事的標準化協定："
   ],
   "fit": {
    "head": [
     "適合",
     "不適合"
    ],
    "rows": [
     [
      "操作有 API 的專業軟體",
      "沒有 API 的系統（→ P6）"
     ],
     [
      "查詢即時資料（庫存、訂單、天氣）",
      "固定不變的流程（→ P5 比較穩）"
     ],
     [
      "讓 Agent 在多個系統間協作",
      "權限無法控管的高風險操作"
     ]
    ]
   },
   "fail": {
    "head": [
     "失敗",
     "原因",
     "對策"
    ],
    "rows": [
     [
      "參數錯誤",
      "工具描述不清楚",
      "寫清楚的工具說明與參數範例"
     ],
     [
      "模型「以為」做了",
      "沒有檢查回傳結果",
      "要求 Agent 讀回狀態確認"
     ],
     [
      "被誘導執行危險動作",
      "Prompt injection",
      "後端驗證、權限最小化、人工確認"
     ],
     [
      "信任模型給的值",
      "例如模型自己填價格",
      "<strong>後端以資料庫為準</strong>，模型只給意圖"
     ]
    ]
   },
   "warmup": {
    "title": "讓 AI 幫你整理下載資料夾（30 分鐘）",
    "task": "在 Claude Desktop 中啟用 Filesystem MCP，<strong>只開放一個測試資料夾</strong>（先複製一份你的「下載」資料夾進去）。請它： 1. 先列出分類計畫（PDF 講義、圖片、安裝檔、其他），<strong>不要動任何檔案</strong> 2. 你確認後再搬移 3. 最後列出搬移紀錄 註：Claude Code 本身就有內建檔案工具，不需要 Filesystem MCP。但內建工具不是 MCP，資料夾範圍也不是由 server 強制限制，所以這題刻意用 Claude Desktop 體驗 MCP 的權限邊界。",
    "notes": [
     "<strong>你會學到</strong>：工具呼叫長什麼樣、權限範圍的重要性、「先計畫再執行」的設計。",
     "<strong>驗收</strong>：沒有任何檔案被刪除；搬移紀錄和實際結果一致。"
    ]
   },
   "traits": {
    "輸出是否可重現": "高",
    "能否自動驗證": "中（查狀態）",
    "需要外部系統": "目標軟體",
    "單次成本": "中",
    "失敗模式": "參數錯、權限不足",
    "入門門檻": "中"
   }
  },
  {
   "id": "P5",
   "name": "Workflow Orchestration",
   "title": "P5 Workflow Orchestration：流程編排",
   "method": "Trigger → Agent/Rules → Multiple Tools",
   "fits": "企業流程、自動化",
   "examples": "n8n、Zapier",
   "structure": "Trigger（排程 / 事件 / Webhook）→ 固定步驟 + AI 節點 → 多個外部系統 → 結果與通知",
   "intro": [
    "把跨系統的重複工作串成一條可以自動執行、可以重跑、可以監控的流程。代表工具：n8n、Zapier、Make。",
    "傳統自動化只能處理 <strong>結構化資料</strong>（「表單欄位 A 寫到表格欄位 B」）。加入 LLM 之後，流程可以處理 <strong>非結構化輸入</strong>：看懂一封 email、分類一則公告、從 PDF 抽出欄位。"
   ],
   "fit": null,
   "fail": {
    "head": [
     "失敗",
     "原因",
     "對策"
    ],
    "rows": [
     [
      "重複寫入",
      "沒有去重",
      "以唯一鍵（網址、ID）比對"
     ],
     [
      "一個來源壞掉整條停",
      "沒有錯誤處理",
      "每個分支 continue on fail + 註記"
     ],
     [
      "AI 輸出格式亂掉",
      "沒有 schema",
      "Structured output + 格式驗證節點"
     ],
     [
      "成本失控",
      "每次都丟全文給 LLM",
      "先用規則過濾，只把需要理解的丟給 AI"
     ]
    ]
   },
   "warmup": {
    "title": "每天早上的天氣穿搭提醒（30 分鐘）",
    "task": "用 n8n 做：每天 07:00 → 取得學校所在地的天氣預報（中央氣象署開放資料或任何天氣 API）→ LLM 根據溫度、降雨機率寫一句穿搭與帶傘建議 → 發到 Discord / Email。",
    "notes": [
     "<strong>你會學到</strong>：Trigger、HTTP 請求、AI 節點、通知節點，這四個是所有 Workflow 的基本積木。",
     "<strong>驗收</strong>：手動觸發一次成功；改成隔天自動收到。"
    ]
   },
   "traits": {
    "輸出是否可重現": "高",
    "能否自動驗證": "易（規則）",
    "需要外部系統": "多個 SaaS",
    "單次成本": "低",
    "失敗模式": "流程斷掉、格式不符",
    "入門門檻": "低–中"
   }
  },
  {
   "id": "P6",
   "name": "Observe–Act Loop",
   "title": "P6 Observe–Act Loop：觀察→行動迴圈（Computer / Browser Use）",
   "method": "Screenshot/State → Reason → Action → Verify",
   "fits": "瀏覽器、桌面、編輯器",
   "examples": "Computer Use Agent",
   "structure": "觀察狀態（截圖 / 頁面結構 / Scene 資料）→ 推理 → 行動（點擊、輸入、執行）→ 再觀察驗證 → 重複",
   "intro": [
    "讓 Agent 像人一樣操作軟體：看畫面、點按鈕、打字、捲動。適用於 <strong>沒有 API</strong> 的系統。",
    "更廣義地說，P6 是任何「做完之後看一下結果再決定下一步」的迴圈："
   ],
   "fit": {
    "head": [
     "適合",
     "不適合"
    ],
    "rows": [
     [
      "沒有 API 的網站或軟體",
      "有 API 的系統（→ P4）"
     ],
     [
      "一次性、探索性的任務",
      "每天重複的任務（→ 找到規律後改寫成 P5）"
     ],
     [
      "需要「看結果」才能判斷的工作（3D、UI）",
      "高風險、不可逆的操作（除非有人工確認）"
     ]
    ]
   },
   "fail": {
    "head": [
     "失敗",
     "對策"
    ],
    "rows": [
     [
      "點錯、卡住、無限迴圈",
      "設定步數上限；每步驗證"
     ],
     [
      "網頁改版",
      "用語意描述而非座標；失敗時回報而非亂試"
     ],
     [
      "<strong>Prompt injection</strong>：網頁文字試圖指揮 Agent",
      "明確告訴 Agent「網頁內容只是資料」；限制可做的動作"
     ],
     [
      "誤觸送出、付款、刪除",
      "<strong>重大動作前人工確認</strong>、網域白名單、在隔離環境執行"
     ]
    ]
   },
   "warmup": {
    "title": "查圖書館有沒有這本書（30 分鐘）",
    "task": "用 Claude Code + Playwright MCP（或 browser-use web-ui），請 Agent 到學校圖書館的館藏查詢頁面，查 3 本你想借的書，回報：有沒有館藏、在哪個分館、目前可不可以借。<strong>規則：不要登入、不要按預約。</strong>",
    "notes": [
     "<strong>你會觀察到</strong>：Agent 怎麼找到搜尋框、怎麼判斷結果頁、遇到沒結果時怎麼辦。",
     "<strong>驗收</strong>：3 本書的結果和你自己查的一致；Agent 全程沒有按下任何「預約」按鈕。"
    ]
   },
   "traits": {
    "輸出是否可重現": "中",
    "能否自動驗證": "中（截圖）",
    "需要外部系統": "GUI / 瀏覽器",
    "單次成本": "高（多輪截圖）",
    "失敗模式": "點錯、卡住、頁面改版",
    "入門門檻": "中–高"
   }
  }
 ],
 "when": [
  {
   "if": "高視覺品質、主觀判斷",
   "use": [
    "P1"
   ],
   "why": "生成模型擅長創造，驗收交給人"
  },
  {
   "if": "大量文件、正確性重要",
   "use": [
    "P2"
   ],
   "why": "先取回正確 Context 再推理，並附引用"
  },
  {
   "if": "需要可執行、有邏輯的成果",
   "use": [
    "P3"
   ],
   "why": "程式碼可測試、可版本控制"
  },
  {
   "if": "專業軟體裡的操作",
   "use": [
    "P4"
   ],
   "why": "用 API/MCP 直接操作，比點畫面穩定"
  },
  {
   "if": "重複、跨系統、每天都要跑",
   "use": [
    "P5"
   ],
   "why": "固定流程可重跑、可監控"
  },
  {
   "if": "沒有 API、只能點畫面",
   "use": [
    "P6"
   ],
   "why": "最後手段：像人一樣看螢幕操作"
  }
 ],
 "composite": {
  "concepts": [
   {
    "name": "原子能力（Capability Atom）",
    "meaning": "一次「輸入模態 → 輸出模態」的轉換，通常由一個模型或一個工具完成",
    "example": "圖 → 3D、3D → 渲染圖、長影片 → 逐字稿"
   },
   {
    "name": "交接物（Handoff Artifact）",
    "meaning": "兩個步驟之間傳遞的檔案。<strong>它就是兩個工具之間的合約</strong>",
    "example": "PNG、GLB、FBX、MP4、SRT、剪輯決策 JSON"
   },
   {
    "name": "黏著層（Glue）",
    "meaning": "誰負責把步驟接起來、出錯時誰處理",
    "example": "Claude 透過多個 MCP、ComfyUI 節點圖、n8n、Python 腳本"
   }
  ],
  "groups": [
   {
    "name": "影像與 3D",
    "ids": [
     "V1",
     "V2",
     "V3",
     "V4",
     "V5",
     "V6",
     "V7",
     "V8"
    ]
   },
   {
    "name": "影片與聲音",
    "ids": [
     "M1",
     "M2",
     "M3",
     "M4",
     "M5",
     "M6",
     "M7"
    ]
   },
   {
    "name": "程式與流程",
    "ids": [
     "C1",
     "C2",
     "C3"
    ]
   }
  ],
  "atoms": [
   {
    "id": "V1",
    "group": "影像與 3D",
    "name": "文字 → 圖像（概念圖、角色設定）",
    "patterns": [
     "P1"
    ],
    "tools": "gpt-image、Nano Banana、Midjourney、Higgsfield Soul",
    "handoff": "PNG",
    "verify": "難"
   },
   {
    "id": "V2",
    "group": "影像與 3D",
    "name": "圖像 → 圖像（改圖、多視角、去背、換背景）",
    "patterns": [
     "P1"
    ],
    "tools": "影像編輯模型、ComfyUI",
    "handoff": "PNG（含透明）",
    "verify": "難"
   },
   {
    "id": "V3",
    "group": "影像與 3D",
    "name": "圖像 → 3D 模型",
    "patterns": [
     "P1"
    ],
    "tools": "Hunyuan3D、TRELLIS、Tripo、Meshy、Rodin",
    "handoff": "GLB / OBJ",
    "verify": "中（可量面數、檢查破面）"
   },
   {
    "id": "V4",
    "group": "影像與 3D",
    "name": "3D → 3D（減面、UV、貼圖、修正、比例）",
    "patterns": [
     "P3",
     "P4"
    ],
    "tools": "Blender（bpy / blender-mcp）",
    "handoff": "GLB / FBX / .blend",
    "verify": "中"
   },
   {
    "id": "V5",
    "group": "影像與 3D",
    "name": "3D → 綁骨 / 動畫",
    "patterns": [
     "P1",
     "P4"
    ],
    "tools": "Mixamo、Tripo / Meshy 自動綁骨、UniRig",
    "handoff": "FBX / GLB（含骨架）",
    "verify": "中"
   },
   {
    "id": "V6",
    "group": "影像與 3D",
    "name": "3D → 場景與鏡頭（擺放、打光、運鏡）",
    "patterns": [
     "P4",
     "P6"
    ],
    "tools": "Blender MCP、Spline",
    "handoff": ".blend",
    "verify": "中（截圖檢查）"
   },
   {
    "id": "V7",
    "group": "影像與 3D",
    "name": "場景 → 渲染（彩圖、深度圖、法線圖、線稿）",
    "patterns": [
     "P4"
    ],
    "tools": "Blender（Cycles / EEVEE）",
    "handoff": "PNG 序列 / MP4",
    "verify": "易"
   },
   {
    "id": "V8",
    "group": "影像與 3D",
    "name": "3D → 引擎 / 網頁 / AR / 列印",
    "patterns": [
     "P3"
    ],
    "tools": "Three.js、Godot、Unity、USDZ、STL",
    "handoff": "GLB / USDZ / STL",
    "verify": "易（能不能載入）"
   },
   {
    "id": "M1",
    "group": "影片與聲音",
    "name": "圖像 → 影片（首尾影格、運鏡）",
    "patterns": [
     "P1"
    ],
    "tools": "Kling、Veo、Seedance、Higgsfield",
    "handoff": "MP4",
    "verify": "難"
   },
   {
    "id": "M2",
    "group": "影片與聲音",
    "name": "影片 → 影片（風格轉換、以渲染/深度控制生成）",
    "patterns": [
     "P1"
    ],
    "tools": "Runway、ComfyUI（ControlNet / V2V）",
    "handoff": "MP4",
    "verify": "難"
   },
   {
    "id": "M3",
    "group": "影片與聲音",
    "name": "文字 → 語音 / 音樂 / 音效",
    "patterns": [
     "P1"
    ],
    "tools": "TTS、配音與聲音複製、音樂模型",
    "handoff": "WAV / MP3",
    "verify": "中"
   },
   {
    "id": "M4",
    "group": "影片與聲音",
    "name": "影音 → 逐字稿（含時間碼）",
    "patterns": [
     "P2"
    ],
    "tools": "Whisper、FunASR",
    "handoff": "SRT / JSON",
    "verify": "易"
   },
   {
    "id": "M5",
    "group": "影片與聲音",
    "name": "逐字稿 → 剪輯決策（選精華、排順序）",
    "patterns": [
     "P2"
    ],
    "tools": "LLM",
    "handoff": "剪輯決策 JSON / EDL",
    "verify": "中"
   },
   {
    "id": "M6",
    "group": "影片與聲音",
    "name": "剪輯決策 → 成片（剪接、字幕、轉直式、配樂）",
    "patterns": [
     "P3",
     "P4"
    ],
    "tools": "FFmpeg、Remotion、MoviePy、剪映草稿、DaVinci Resolve API",
    "handoff": "MP4",
    "verify": "易（格式）/ 難（節奏）"
   },
   {
    "id": "M7",
    "group": "影片與聲音",
    "name": "字幕翻譯 / 配音翻譯",
    "patterns": [
     "P1",
     "P2"
    ],
    "tools": "LLM + TTS",
    "handoff": "SRT / MP4",
    "verify": "中"
   },
   {
    "id": "C1",
    "group": "程式與流程",
    "name": "需求 → 可執行程式（遊戲、網頁、檢視器）",
    "patterns": [
     "P3"
    ],
    "tools": "Claude Code、Codex",
    "handoff": "Repo / 網址",
    "verify": ""
   },
   {
    "id": "C2",
    "group": "程式與流程",
    "name": "瀏覽器試玩 / 截圖驗收",
    "patterns": [
     "P6"
    ],
    "tools": "Playwright MCP",
    "handoff": "截圖 / 測試報告",
    "verify": ""
   },
   {
    "id": "C3",
    "group": "程式與流程",
    "name": "批次與排程",
    "patterns": [
     "P5"
    ],
    "tools": "n8n、ComfyUI API",
    "handoff": "執行紀錄",
    "verify": ""
   }
  ],
  "handoffs": [
   {
    "at": "V3 → V4（生成模型 → Blender）",
    "accident": "模型大小隨機、面數幾十萬、原點不在腳底",
    "contract": "單位（公尺）、高度、面數上限、原點位置"
   },
   {
    "at": "V4 → V8（Blender → 網頁/引擎）",
    "accident": "Blender 是 Z 軸朝上，glTF 是 Y 軸朝上；程序化材質匯出後消失",
    "contract": "格式 GLB、Y-up、貼圖烘焙成圖片、檔案大小上限"
   },
   {
    "at": "V5 → V8（綁骨 → 遊戲）",
    "accident": "動畫名稱對不上、骨架命名不同",
    "contract": "動畫片段名稱（idle / walk / jump）、骨架標準"
   },
   {
    "at": "V7 → M2（渲染 → 影片模型）",
    "accident": "解析度、比例、影格數不符模型限制",
    "contract": "解析度、秒數、fps、控制圖類型（深度/線稿）"
   },
   {
    "at": "M4 → M5（逐字稿 → LLM）",
    "accident": "時間碼遺失，剪不回去",
    "contract": "JSON 必須保留每段的開始/結束秒數"
   },
   {
    "at": "M5 → M6（剪輯決策 → 成片）",
    "accident": "LLM 給的秒數超出影片長度",
    "contract": "決策 JSON schema + 驗證秒數範圍"
   },
   {
    "at": "任何生成 → 下一步",
    "accident": "角色 / 商品不一致",
    "contract": "參考圖、角色 ID、固定風格描述"
   }
  ],
  "glue": [
   {
    "name": "<strong>人工手動</strong>",
    "fit": "探索期、做一次",
    "pro": "最有彈性",
    "con": "無法重現、無法批次"
   },
   {
    "name": "<strong>Agent + 多個 MCP</strong>（如 Claude + Higgsfield MCP + Blender MCP）",
    "fit": "每次內容都不同的創作",
    "pro": "用自然語言串接、會自己處理小錯誤",
    "con": "每次結果不同、成本難預估"
   },
   {
    "name": "<strong>節點工作流</strong>（ComfyUI）",
    "fit": "生成步驟固定、參數要微調",
    "pro": "可視化、可重現、可存成範本",
    "con": "跨軟體能力有限"
   },
   {
    "name": "<strong>Workflow 引擎</strong>（n8n）",
    "fit": "批次、排程、跨 SaaS",
    "pro": "可重跑、可監控",
    "con": "不適合重度媒體處理"
   },
   {
    "name": "<strong>程式碼</strong>（Python / FFmpeg / Remotion）",
    "fit": "確定性步驟（剪接、轉檔、合成）",
    "pro": "最穩定、最便宜",
    "con": "需要寫程式（可讓 Agent 寫）"
   }
  ],
  "levels": [
   {
    "lv": "L0 單點",
    "desc": "一個工具完成一件事",
    "eg": "用 Midjourney 生一張圖"
   },
   {
    "lv": "L1 手動串接",
    "desc": "人在多個工具之間下載、上傳",
    "eg": "生圖 → 下載 → 上傳到 Tripo → 下載 GLB → 開 Blender"
   },
   {
    "lv": "L2 Agent 串接",
    "desc": "Agent 透過多個 MCP 在同一個對話中完成",
    "eg": "Claude 用 Hyper3D 生成模型、在 Blender 擺好、渲染截圖"
   },
   {
    "lv": "L3 可重現流程",
    "desc": "流程被固定成腳本或工作流，換輸入就能重跑",
    "eg": "ComfyUI 工作流、Remotion 模板、n8n"
   },
   {
    "lv": "L4 有驗證的自動迴圈",
    "desc": "每個交接點都有檢查，失敗會自動重試或回報",
    "eg": "Agent 生成 → 截圖 → 檢查面數與比例 → 修正 → 通過才進下一步"
   }
  ],
  "example": {
   "chain": "成片 MP4\n ← 剪好的鏡頭 + 字幕 SRT + 配音 WAV\n ← 每一鏡的影片片段\n ← 每一鏡的渲染圖（決定構圖與鏡頭）+ 角色參考圖\n ← 擺好姿勢與鏡頭的 3D 場景\n ← 綁好骨的吉祥物 3D 模型\n ← 吉祥物 3D 模型\n ← 吉祥物概念圖（多視角）",
   "edges": [
    {
     "edge": "設定 → 概念圖",
     "atom": [
      "V1",
      "V2"
     ],
     "tool": "生圖模型（多視角）"
    },
    {
     "edge": "概念圖 → 3D",
     "atom": [
      "V3"
     ],
     "tool": "Hunyuan3D / Tripo（或 blender-mcp 內建的 Hyper3D / Hunyuan3D）"
    },
    {
     "edge": "3D → 綁骨",
     "atom": [
      "V5"
     ],
     "tool": "Mixamo / 自動綁骨"
    },
    {
     "edge": "綁骨 → 場景與鏡頭",
     "atom": [
      "V6"
     ],
     "tool": "Blender MCP"
    },
    {
     "edge": "場景 → 渲染",
     "atom": [
      "V7"
     ],
     "tool": "Blender"
    },
    {
     "edge": "渲染 → 影片",
     "atom": [
      "M1",
      "M2"
     ],
     "tool": "Higgsfield / Kling（以渲染圖為首影格或控制）"
    },
    {
     "edge": "腳本 → 配音",
     "atom": [
      "M3"
     ],
     "tool": "TTS"
    },
    {
     "edge": "片段 → 成片",
     "atom": [
      "M6"
     ],
     "tool": "Remotion / FFmpeg / 剪映"
    }
   ],
   "checks": [
    {
     "at": "概念圖",
     "who": "人",
     "what": "像不像我們的吉祥物？"
    },
    {
     "at": "3D 模型",
     "who": "程式 + 人",
     "what": "面數、尺寸、有無破面；轉一圈看"
    },
    {
     "at": "鏡頭",
     "who": "Agent 截圖 + 人",
     "what": "構圖、角色有沒有出鏡"
    },
    {
     "at": "影片片段",
     "who": "人",
     "what": "角色一致性（最高風險點）"
    },
    {
     "at": "成片",
     "who": "程式 + 人",
     "what": "秒數、比例、字幕錯字；節奏"
    }
   ]
  }
 },
 "labs": [
  {
   "id": "01",
   "dir": "lab-01-campus-qa",
   "title": "校園規章問答助手",
   "catLabel": "A 知識",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ],
   "level": 2,
   "deliverable": "會附引用的問答網頁",
   "atoms": [],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：做一個能回答「學生手冊、選課規定、獎學金辦法」問題的助手，<strong>每個答案都要附上出處（哪份文件、哪一條、第幾頁）</strong>，找不到就老實說找不到。",
   "why": [
    "每個學生都遇過：「停修的期限是哪天？」「雙主修要幾學分？」「獎學金可以同時領兩個嗎？」答案都在學校網站某個 PDF 裡，但沒人想翻。",
    "直接問 ChatGPT 呢？它會給你一個 <strong>聽起來很對、但是別間學校的規定</strong>。這就是這個 Lab 要讓你親身體會的事："
   ],
   "flow": "學生問題\n  → [Context] 從手冊中檢索相關段落（Retrieve）\n  → [Model] 只根據檢索到的段落回答（Reason）\n  → [Verification] 附上出處，讓人可以一鍵對照原文",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "學生手冊問答",
      "企業內部規章 / HR 制度問答"
     ],
     [
      "選課規定問答",
      "保險條款、法規遵循查詢"
     ],
     [
      "附條文引用",
      "法律、醫療、金融 AI 的基本要求"
     ],
     [
      "不同入學年度適用不同規定",
      "合約版本管理、法規修訂追蹤"
     ]
    ]
   }
  },
  {
   "id": "02",
   "dir": "lab-02-cafe-agent",
   "title": "校園咖啡店 AI 店員",
   "catLabel": "B 對話",
   "cats": [
    "B",
    "A"
   ],
   "patterns": [
    "P2",
    "P4"
   ],
   "level": 3,
   "deliverable": "能點餐、會轉人工的 Bot",
   "atoms": [],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：幫學校附近的咖啡店（或系學會福利社）做一個 AI 店員：能回答菜單與營業問題、能把訂單寫進 Google Sheet、<strong>遇到不確定或客訴時轉給真人</strong>。",
   "why": [
    "大家對「AI 客服」的印象是：問什麼都答非所問、最後還是要打電話。問題出在哪？",
    "多數聊天機器人只做了 <strong>Question → Answer</strong>。真正有用的店員要做的是："
   ],
   "flow": "客人訊息\n  → [Model] 判斷意圖：問問題 / 點餐 / 客訴 / 閒聊\n  → [Context] 查菜單與 FAQ（P2）\n  → [Tools] add_to_cart / place_order / handoff_to_human（P4）\n  → [Verification] 後端檢查品項存在、價格正確、數量合理，才寫入\n  → 回覆客人並確認訂單",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "咖啡店 AI 店員",
      "電商客服、訂位系統、航空改票客服"
     ],
     [
      "寫入 Google Sheet 訂單",
      "寫入 CRM、ERP、訂單系統"
     ],
     [
      "轉人工",
      "客服升級流程（Escalation）"
     ],
     [
      "菜單驗證",
      "庫存檢查、價格規則、權限控管"
     ]
    ]
   }
  },
  {
   "id": "03",
   "dir": "lab-03-shop-video-ad",
   "title": "幫巷口小店做 15 秒短影音",
   "catLabel": "C Media",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ],
   "level": 2,
   "deliverable": "三種比例的廣告影片",
   "atoms": [
    "V1",
    "M1",
    "M3",
    "M6"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：幫學校附近一家你喜歡的小店（早餐店、手搖飲、書店、二手衣店），或你的社團，用 AI 做一支 15 秒的直式短影音，並輸出 9:16、1:1、16:9 三種版本。",
   "why": [
    "巷口小店最缺的不是好吃的東西，是 <strong>行銷預算和時間</strong>。拍一支短影音要企劃、拍攝、剪輯、配音、字幕，老闆根本沒空。",
    "AI 影片生成看起來可以一鍵解決。這個 Lab 要你親自驗證："
   ],
   "flow": "小店資訊 + 真實商品照\n  → [Model] 寫廣告腳本（15 秒，3–5 個鏡頭）\n  → [Model] 拆分鏡，每鏡寫畫面描述\n  → [Tools] 呼叫圖像/影片生成（以真實照片為參考）  ← P1 + P4\n  → [Tools] 配音（TTS）+ 字幕 + 背景音樂\n  → [Runtime] 合成、輸出三種比例\n  → [Verification] 人工挑選與檢查",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "小店 15 秒廣告",
      "電商商品廣告、品牌社群內容"
     ],
     [
      "三種比例輸出",
      "廣告投放（IG Reels / FB / YouTube）"
     ],
     [
      "一次多版挑選",
      "A/B 測試、廣告素材優化"
     ],
     [
      "用真實商品照當參考",
      "品牌一致性（Brand Consistency）"
     ]
    ]
   }
  },
  {
   "id": "04",
   "dir": "lab-04-club-landing-page",
   "title": "社團招生 Landing Page",
   "catLabel": "D 軟體",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ],
   "level": 2,
   "deliverable": "已上線的網站網址",
   "atoms": [
    "C1",
    "C2"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：幫你的社團（或系學會、讀書會、樂團）做一個招生網頁：有社團介紹、活動照片、常見問題、報名表單，<strong>上線並拿到一個可以貼到 IG 的網址</strong>。全程讓 Coding Agent 寫程式，你負責當「產品經理」。",
   "why": [
    "每年開學社團博覽會，大家都在發傳單、建 Google 表單、IG 放限動。一個像樣的招生網頁以前要找會寫網頁的同學幫忙，現在你可以自己來。",
    "但這個 Lab 的重點不是「AI 會寫網頁」（大家都知道了），而是："
   ],
   "flow": "Product Brief（你寫）\n  → [Model] Agent 規劃頁面結構與技術選型\n  → [Tools] 建立專案、寫程式、安裝套件                ← P3\n  → [Runtime] 本機啟動\n  → [Verification] 開瀏覽器截圖（桌機 + 手機），對照驗收清單 ← P6\n  → 修正 → 部署到 Vercel / Netlify / GitHub Pages",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "社團招生頁",
      "產品 Landing Page、活動報名頁"
     ],
     [
      "Product Brief",
      "PRD（產品需求文件）"
     ],
     [
      "報名表單",
      "潛在客戶收集（Lead Generation）"
     ],
     [
      "手機版檢查",
      "QA 測試、跨裝置相容"
     ],
     [
      "OG 圖、SEO",
      "行銷與社群分享最佳化"
     ]
    ]
   }
  },
  {
   "id": "05",
   "dir": "lab-05-stress-relief-game",
   "title": "期末週紓壓小遊戲",
   "catLabel": "D 軟體 + C",
   "cats": [
    "D",
    "C"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ],
   "level": 3,
   "deliverable": "可在瀏覽器玩的遊戲",
   "atoms": [
    "C1",
    "V1",
    "M3",
    "C2"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：做一個「期末週讀書讀到崩潰時可以玩 1 分鐘」的瀏覽器小遊戲。程式讓 Coding Agent 寫，美術與音效讓生成模型做，你是遊戲製作人。",
   "why": [
    "遊戲是最能展示「Pattern 組合」的題目，因為一個遊戲同時需要：",
    "而且題目限定在 <strong>「一個按鍵就能玩」、「1 分鐘一局」</strong>，範圍小到一個下午做得完。"
   ],
   "flow": "遊戲概念（你寫一頁 GAME.md）\n  → 里程碑 1：方塊人可以動            ← P3\n  → 里程碑 2：有障礙物、會死、會計分   ← P3\n  → 里程碑 3：換成生成的美術           ← P1 + P4\n  → 里程碑 4：音效、手感、難度曲線     ← P1 + 人工試玩\n  → [Verification] 每個里程碑：Agent 用 Playwright 開瀏覽器試玩截圖 + 你親自玩\n  → 部署到 GitHub Pages / itch.io",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "紓壓小遊戲",
      "休閒遊戲、廣告試玩（Playable Ads）"
     ],
     [
      "一鍵玩法",
      "超休閒遊戲（Hyper-casual）原型"
     ],
     [
      "生成美術資產",
      "遊戲美術原型、概念設計"
     ],
     [
      "可玩里程碑",
      "敏捷開發、Game Jam"
     ]
    ]
   }
  },
  {
   "id": "06",
   "dir": "lab-06-dorm-room-3d",
   "title": "用 AI 佈置我的宿舍房間",
   "catLabel": "E 3D",
   "cats": [
    "E",
    "D"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ],
   "level": 4,
   "deliverable": "GLB 檔 + 網頁 3D 檢視器",
   "atoms": [
    "V6",
    "V7",
    "V8",
    "C1",
    "C2"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：量好你的宿舍（或租屋處）尺寸，讓 AI Agent 透過 Blender MCP 在 Blender 裡建出房間、擺好家具、打光、渲染兩張圖，最後匯出 GLB 放到網頁上讓室友用滑鼠轉著看。",
   "why": [
    "每學期搬宿舍都在想：書桌放窗邊還是門邊？買這個層架放得下嗎？以前要回答這問題，你得學會 Blender，那至少要一個月。",
    "現在你可以用中文告訴 Agent：「房間 3.2 × 4.5 公尺，門在左下，窗在北牆，兩張床、兩張書桌」，它就會去操作 Blender。"
   ],
   "flow": "房間尺寸 + 家具清單 + 你的偏好\n  → [Model] 規劃佈局（先輸出成數字表：每件家具的位置、尺寸、朝向）\n  → [Tools] 透過 Blender MCP 執行 bpy：建牆、門窗、家具、材質、燈光  ← P4 + P3\n  → [Verification] 渲染俯視圖與透視圖 → 模型看截圖 → 檢查穿模、擋門、浮空  ← P6\n  → 修正，直到通過\n  → [Runtime] 匯出 GLB → Three.js 網頁檢視器",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "宿舍佈置",
      "室內設計提案、家具電商「放進你家看看」"
     ],
     [
      "真實尺寸建模",
      "建築視覺化、BIM"
     ],
     [
      "截圖檢查修正",
      "3D 品質檢查、Digital Twin 驗證"
     ],
     [
      "GLB 放上網頁",
      "3D 商品展示、Web 3D 體驗"
     ]
    ]
   }
  },
  {
   "id": "07",
   "dir": "lab-07-weekly-opportunity-digest",
   "title": "每週機會情報站",
   "catLabel": "F 自動化",
   "cats": [
    "F",
    "A"
   ],
   "patterns": [
    "P2",
    "P5"
   ],
   "level": 2,
   "deliverable": "每週自動發送的摘要",
   "atoms": [
    "C3"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：做一個每週一早上自動運作的流程：去學校公告、系網、實習網站、講座頁面抓新資訊 → 用 AI 分類（實習／獎學金／講座／比賽）並寫摘要 → 存進 Google Sheet → 發一則整理好的訊息到 LINE / Discord / Email。",
   "why": [
    "錯過獎學金申請期限、錯過想去的講座、錯過實習招募，原因通常不是不想，而是 <strong>資訊散在十個地方，沒人有空每天看</strong>。",
    "傳統自動化（RSS、IFTTT）只能「搬運」資訊，沒辦法「理解」。公告標題寫「113 學年度第二學期 XX 基金會助學金申請公告」，傳統規則很難判斷這是獎學金、截止日是哪天、你符不符合資格。"
   ],
   "flow": "[Trigger] 每週一 08:00\n  → 讀取來源清單（Google Sheet：網址、類型）\n  → 抓取 RSS / 網頁\n  → 去重（和上週已存的比對）                      ← 規則，不用 AI\n  → [Model] 分類 + 抽取欄位：類型、截止日、對象、一句話摘要  ← P2\n  → [Verification] 檢查 JSON 格式、截止日是合法日期  ← 規則\n  → 寫入 Google Sheet\n  → [Model] 把本週項目寫成一則摘要訊息\n  → 發送到 LINE / Discord / Email",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "機會情報站",
      "競品監控、產業新聞摘要、標案情報"
     ],
     [
      "AI 分類公告",
      "Email 分流、客服工單分類、履歷篩選"
     ],
     [
      "寫入 Google Sheet",
      "寫入 CRM、資料倉儲"
     ],
     [
      "每週推播摘要",
      "主管週報、行銷電子報"
     ]
    ]
   }
  },
  {
   "id": "08",
   "dir": "lab-08-campus-event-agent",
   "title": "校園活動行事曆代理",
   "catLabel": "G 工具操作",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ],
   "level": 3,
   "deliverable": "可匯入的 .ics 行事曆",
   "atoms": [
    "C2"
   ],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：讓一個瀏覽器 Agent 去逛學校的活動報名系統、系網、社團粉專等公開頁面，找出本月的講座與活動，整理成表格並產生一個 <strong>可以匯入 Google Calendar 的 .ics 檔</strong>。任何「報名」「送出」動作都必須先停下來問你。",
   "why": [
    "很多網站 <strong>沒有 API</strong>：學校活動報名系統、系網公告、社團粉專。以前要自動化，就得寫爬蟲，而網頁一改版爬蟲就壞了。",
    "瀏覽器 Agent 用另一種方式：<strong>像人一樣看畫面、點按鈕、讀內容</strong>。它不需要事先知道網頁結構。"
   ],
   "flow": "「幫我找本月的講座」\n  → [Observe] 開啟頁面，讀取 accessibility snapshot 或截圖\n  → [Reason] 判斷：這是活動列表嗎？需要翻頁嗎？要點進詳細頁嗎？\n  → [Act] 點擊 / 捲動 / 翻頁                  ← P6\n  → [Verify] 確認拿到的資料完整（有日期、時間、地點）\n  → 重複直到完成\n  → [Tools] 寫出 events.csv 與 events.ics      ← P4（檔案系統）\n  → 若遇到「報名」按鈕 → 停止，列出並詢問使用者",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "抓活動資訊",
      "比價、市場調查、競品監控"
     ],
     [
      "沒有 API 的系統",
      "舊式企業系統、政府網站（RPA 的領域）"
     ],
     [
      "產生 .ics",
      "資料轉換與系統整合"
     ],
     [
      "送出前人工確認",
      "金流、下單、發信等高風險動作的審核流程"
     ]
    ]
   }
  },
  {
   "id": "09",
   "dir": "lab-09-mascot-image-to-3d-game",
   "title": "社團吉祥物：從一張圖到可玩的 3D 角色",
   "catLabel": "C + E + D（複合）",
   "cats": [
    "C",
    "E",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ],
   "level": 4,
   "deliverable": "可在網頁操控的 3D 吉祥物",
   "atoms": [
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "V8",
    "C1",
    "C2"
   ],
   "prereq": [
    "05",
    "06"
   ],
   "task": "<strong>一句話任務</strong>：幫社團設計一隻吉祥物。從文字設定生成概念圖 → 轉成 3D 模型 → 在 Blender 清理與縮放 → 自動綁骨並套上走路 / 跳躍動畫 → 放進一個網頁小遊戲，讓大家用鍵盤操控牠在校園小場景裡跑來跑去。",
   "why": [
    "一年前，「做一隻 3D 遊戲角色」需要：原畫師、3D 建模師、綁骨師、動畫師、程式設計師。現在每一個步驟都有 AI 工具，<strong>看起來</strong> 一個人一個下午就能做完。",
    "實際做了你會發現：每個工具單獨都很厲害，但 <strong>接起來處處是坑</strong>："
   ],
   "flow": "吉祥物設定（名字、個性、社團特色）\n  → [V1] 生成概念圖（正面、T-pose / A-pose、白底）                 ← P1，人工挑選\n  → [V2] 補側面、背面視圖；去背                                    ← P1\n  → [V3] 圖 → 3D（Hunyuan3D / TRELLIS / Tripo / Meshy）             ← P1 + P4\n  → [V4] Agent 透過 Blender MCP：減面、設高度 1.0m、原點到腳底、檢查破面  ← P4 + P3\n  → [V5] 自動綁骨 + 套 idle / walk / jump 動畫（Mixamo / Meshy / Tripo） ← P1 + P4\n  → [V8] 匯出 GLB（Y-up、貼圖內嵌、< 10MB）\n  → [C1] Claude Code 用 Three.js 做小遊戲：WASD 移動、空白鍵跳躍、收集物品 ← P3\n  → [C2] Playwright 開瀏覽器試玩截圖                                ← P6",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "社團吉祥物",
      "品牌 IP、VTuber 形象、遊戲角色"
     ],
     [
      "圖 → 3D",
      "遊戲資產量產、電商 3D 商品"
     ],
     [
      "自動綁骨與動畫",
      "獨立遊戲、Roblox / UGC 平台創作"
     ],
     [
      "GLB 放上網頁遊戲",
      "Web 3D 行銷、互動廣告"
     ],
     [
      "（延伸）3D 列印公仔",
      "周邊商品、手辦原型"
     ]
    ]
   }
  },
  {
   "id": "10",
   "dir": "lab-10-event-highlight-editing",
   "title": "把社團活動錄影剪成 60 秒精華",
   "catLabel": "C + A（複合）",
   "cats": [
    "C",
    "A"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ],
   "level": 3,
   "deliverable": "自動剪好、附字幕的直式影片",
   "atoms": [
    "M4",
    "M5",
    "M6",
    "M7",
    "C2"
   ],
   "prereq": [
    "03"
   ],
   "task": "<strong>一句話任務</strong>：拿一段 20–60 分鐘的社團活動錄影（成果發表、講座、迎新、比賽），讓 AI 找出精華、剪成一支 <strong>60 秒、9:16、有中文字幕</strong> 的短影片；再多輸出一份 <strong>剪映 / NLE 草稿</strong>，讓人可以接手微調。",
   "why": [
    "每個社團都有一堆「錄了但沒人剪」的影片。剪輯很花時間：看完整段、記下好的片段、剪接、上字幕、改直式。一小時的錄影，剪成一分鐘可能要花一整個晚上。",
    "AI 剪輯跟 AI 生成影片是 <strong>兩種完全不同的問題</strong>："
   ],
   "flow": "活動錄影 MP4\n  → [M4] Whisper / FunASR 轉逐字稿（每句帶開始/結束秒數）         ← P2 前處理\n  → [M5] LLM 讀逐字稿，挑出 5–8 段精華，輸出 cuts.json              ← P2\n  → [驗證] 程式檢查：秒數在影片範圍內、總長 55–65 秒、不在句子中間切斷\n  → [M6] FFmpeg / Remotion 依 cuts.json 剪接、轉 9:16、燒字幕、加片頭  ← P3 + P4\n  → [驗證] Agent 在每個剪接點截圖檢查（黑畫面、切到一半的臉）       ← P6\n  → 輸出：成片 MP4 + 字幕 SRT + 剪映草稿 / NLE 時間軸",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "活動精華 60 秒",
      "Podcast / 直播切片、訪談精華、課程剪輯"
     ],
     [
      "逐字稿驅動剪輯",
      "Descript 的文字剪輯、新聞剪輯"
     ],
     [
      "字幕與翻譯",
      "影片在地化、無障礙字幕"
     ],
     [
      "輸出剪映 / NLE 草稿",
      "專業後製：AI 粗剪、剪輯師精剪"
     ]
    ]
   }
  },
  {
   "id": "11",
   "dir": "lab-11-blender-previz-to-ai-video",
   "title": "Blender 當攝影棚、AI 當渲染器",
   "catLabel": "E + C（複合）",
   "cats": [
    "E",
    "C"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ],
   "level": 5,
   "deliverable": "角色一致的 15 秒動畫廣告",
   "atoms": [
    "V6",
    "V7",
    "V2",
    "M1",
    "M2",
    "M3",
    "M6"
   ],
   "prereq": [
    "06",
    "09",
    "03"
   ],
   "task": "<strong>一句話任務</strong>：幫社團（或 Lab 09 的吉祥物）做一支 15 秒、3 個鏡頭的動畫廣告。<strong>不要直接叫影片模型「抽卡」</strong>，而是先讓 Agent 在 Blender 裡用白模（灰色方塊）把空間、角色走位、鏡頭運動「演一遍」，再把這段預演交給影片模型「上色成真」。",
   "why": [
    "用影片模型做過 Lab 03 的人都知道：<strong>畫面很美，但你控制不了</strong>。你想要「鏡頭從左繞到右、角色從門口走到桌前」，模型給你的是隨機的運鏡、隨機的走位。只能一直重抽。",
    "2026 年創作者圈最明顯的轉變是："
   ],
   "flow": "腳本與分鏡（3 鏡，每鏡 5 秒）\n  → [V6] Agent 透過 Blender MCP 搭白模：地面、牆、桌子、角色（方塊人或 Lab 09 的吉祥物）  ← P4\n  → [V6] 設定鏡頭運動（推、搖、環繞）與角色走位，截圖檢查構圖                        ← P6\n  → [V7] 每鏡輸出：參考影片 MP4（白模動畫）+ 首影格 PNG（+ 深度圖，本地路線）         ← P4\n  → [V2] 把首影格用圖像模型風格化（例如「溫暖的水彩動畫風格」），人工挑選            ← P1\n  → [M1/M2] 影片模型：風格化首影格 + 白模參考影片 → 成品鏡頭                          ← P1\n  → [M3] 配音 / 音效\n  → [M6] Remotion / FFmpeg / 剪映 串接 3 鏡、上字幕、輸出                            ← P3",
   "scale": {
    "head": [
     "你做的",
     "產業裡對應的"
    ],
    "rows": [
     [
      "白模預演（Previz）",
      "電影與廣告的前期預演、分鏡動態化"
     ],
     [
      "AI 渲染",
      "概念影片、廣告提案、低預算動畫"
     ],
     [
      "首影格風格化",
      "美術設定、Look Development"
     ],
     [
      "角色一致性",
      "動畫 IP、品牌吉祥物"
     ]
    ]
   }
  },
  {
   "id": "CP",
   "dir": "capstone-shop-launch-week",
   "title": "一家店的 AI 開幕週",
   "catLabel": "組合",
   "cats": [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G"
   ],
   "patterns": [
    "P1",
    "P2",
    "P3",
    "P4",
    "P5",
    "P6"
   ],
   "level": 4,
   "deliverable": "完整開幕套件",
   "atoms": [],
   "prereq": [],
   "task": "<strong>一句話任務</strong>：找一家真實的小店（或虛構一家「學生合作社咖啡店」），用這個工作坊學到的 Pattern，幫它準備開幕週需要的一切：網站、宣傳短影音、AI 店員、每週自動報表。<strong>重點不是每一項都做到最好，而是說明你為什麼這樣組合。</strong>",
   "why": [
    "前面每個 Lab 都是「一個問題 × 一兩個 Pattern」。真實世界不會這樣分好給你。",
    "一家店開幕需要的東西，剛好橫跨所有應用類別："
   ],
   "flow": "",
   "scale": null
  }
 ],
 "domains": [
  {
   "id": "web",
   "title": "Web 網站與 Landing Page",
   "cats": [
    "D"
   ],
   "labs": [
    "04"
   ],
   "intro": [
    "把「一個想法」變成「一個有網址、別人打得開的網頁」。典型需求：產品介紹、活動報名、作品集、內容網站。",
    "市場已經從「AI 生成一段 HTML」演進到 <strong>Agent 修改真正的網站專案</strong>："
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "需求模糊",
      "「做一個好看的網站」→ Agent 會做出平均值"
     ],
     [
      "設計同質化",
      "AI 網頁常收斂到相同字體與漸層 → 需要設計規範"
     ],
     [
      "跨裝置",
      "桌機看起來好，手機壞掉"
     ],
     [
      "內容維護",
      "做完之後誰來更新？→ CMS"
     ],
     [
      "驗收",
      "Agent 說完成 ≠ 真的完成 → 截圖、Lighthouse、真人測試"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>畢業展 / 期末成果展網站</strong>",
     "scene": "每位同學一頁作品，資料來自一份 Google Sheet",
     "skill": "用 CMS / 資料驅動產生多頁"
    },
    {
     "title": "<strong>系學會活動頁</strong>",
     "scene": "迎新、系烤、送舊，每學期都要換內容",
     "skill": "讓非工程師的幹部能自己更新"
    }
   ],
   "scale": [
    "產品 Landing Page、活動報名系統、行銷活動頁、中小企業官網、SEO 內容網站。"
   ]
  },
  {
   "id": "video-advertising",
   "title": "Video Advertising 影音廣告",
   "cats": [
    "C",
    "F"
   ],
   "labs": [
    "03"
   ],
   "intro": [
    "用最少的人力與預算，產出大量、多尺寸、風格一致的影音廣告素材。",
    "典型流程："
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "時間一致性",
      "同一個角色/商品在不同鏡頭長得不一樣"
     ],
     [
      "參考一致性",
      "生成的商品和真實商品不像"
     ],
     [
      "視覺品質主觀",
      "沒有自動評分，只能人看"
     ],
     [
      "文字",
      "畫面中的文字常錯 → 後製疊字"
     ],
     [
      "驗收成本",
      "生成很快，挑選很慢"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>社團招生 30 秒影片</strong>",
     "scene": "用社團活動照片當參考，做出有故事感的招生影片",
     "skill": "用真實照片做 image-to-video、敘事節奏"
    },
    {
     "title": "<strong>二手書/二手物交換活動宣傳</strong>",
     "scene": "為校內的交換市集做一系列 3 支短影音",
     "skill": "系列化：同一風格、不同內容的批次生成"
    }
   ],
   "scale": [
    "電商廣告素材量產、品牌社群內容、廣告 A/B 測試、在地商家行銷服務、多語言影片在地化。"
   ]
  },
  {
   "id": "3d-spatial",
   "title": "3D Spatial 空間與 3D",
   "cats": [
    "E",
    "D"
   ],
   "labs": [
    "06",
    "11"
   ],
   "intro": [
    "建立具有幾何、材質、光線、鏡頭與互動的空間或物件：商品建模、室內設計、建築視覺化、遊戲場景、Digital Twin、Web 3D。",
    "以前的門檻是 <strong>學會 3D 軟體</strong>（Blender 至少要數週）。現在 Agent 可以透過 MCP 直接操作 3D 軟體："
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "幾何正確性",
      "穿模、浮空、比例錯誤 → 文字 prompt 無法保證"
     ],
     [
      "Scene 一致性",
      "改一個東西，其他東西跟著亂"
     ],
     [
      "空間推理",
      "模型對「左邊」「靠牆」「門的開啟範圍」理解不穩定"
     ],
     [
      "驗收成本極高",
      "要旋轉、放大才能發現問題 → 自動截圖多角度"
     ],
     [
      "資產品質",
      "簡單方塊 vs 真實家具模型"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>校園地標 3D 導覽</strong>",
     "scene": "把學校的一棟代表性建築（或校門）做成簡化 3D 模型，放在網頁上可旋轉，點擊顯示介紹",
     "skill": "從照片推估比例、Web 3D 互動"
    },
    {
     "title": "<strong>社團博覽會攤位設計</strong>",
     "scene": "3m × 2m 的攤位要放桌子、海報架、展示品，出兩個方案讓社員投票",
     "skill": "小空間佈局、多方案比較"
    }
   ],
   "scale": [
    "家具電商 AR 預覽、室內設計提案、建築視覺化、展場設計、遊戲關卡原型、工廠 Digital Twin。"
   ]
  },
  {
   "id": "game",
   "title": "Game 遊戲",
   "cats": [
    "D",
    "C"
   ],
   "labs": [
    "05"
   ],
   "intro": [
    "遊戲是 <strong>Software + Media + Agent orchestration</strong> 的交叉題：",
    "所以遊戲很適合當課程題目：學生一次會看到 <strong>Code + Visual Asset + Audio + Interaction + Agent</strong>。"
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "手感（Game Feel）",
      "跳躍高度、速度、打擊感：只能人玩才知道"
     ],
     [
      "美術一致性",
      "每張圖分開生成，風格會漂移"
     ],
     [
      "範圍失控",
      "「做一個 RPG」→ 永遠做不完"
     ],
     [
      "好不好玩",
      "目前沒有任何自動驗證方法"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>校園知識問答遊戲</strong>",
     "scene": "迎新活動用：「圖書館幾樓有自習室？」答對前進，題庫從 Lab 01 的資料產生",
     "skill": "結合 P2 產生題庫、題目正確性驗證"
    },
    {
     "title": "<strong>新生認路小遊戲</strong>",
     "scene": "俯視校園地圖，限時找到指定建築",
     "skill": "地圖素材生成、關卡設計"
    }
   ],
   "scale": [
    "休閒遊戲原型、廣告試玩（Playable Ads）、教育遊戲、企業培訓遊戲化、Game Jam。"
   ]
  },
  {
   "id": "customer-agent",
   "title": "Customer Agent 對話服務",
   "cats": [
    "B",
    "A"
   ],
   "labs": [
    "02"
   ],
   "intro": [
    "AI 客服不只是「聊天機器人」。問題已經從：",
    "變成："
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "多輪狀態",
      "購物車、訂單進度、客人前面說過的話"
     ],
     [
      "正確性",
      "價格、庫存、政策不能錯"
     ],
     [
      "權限與安全",
      "客人試圖誘導打折、改價、查別人的訂單"
     ],
     [
      "何時轉人工",
      "客訴、情緒激動、超出能力範圍"
     ],
     [
      "決策與執行分離",
      "LLM 決定意圖，後端驗證後才執行"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>系辦小幫手</strong>",
     "scene": "回答「怎麼申請成績單」「系辦幾點關」，並能幫同學預約「借教室」或「學位諮詢時段」",
     "skill": "預約類工具、查詢空檔"
    },
    {
     "title": "<strong>二手物品交換 Bot</strong>",
     "scene": "同學用自然語言刊登「我有一本微積分課本，想換咖啡券」，Bot 整理成結構化資料並配對",
     "skill": "非結構化 → 結構化、配對邏輯、個資保護"
    }
   ],
   "scale": [
    "電商客服、訂位系統、航空改票、銀行客服、SaaS 支援、銷售助理、政府服務諮詢。"
   ]
  },
  {
   "id": "business-automation",
   "title": "Business Automation 流程自動化",
   "cats": [
    "F",
    "A"
   ],
   "labs": [
    "07"
   ],
   "intro": [
    "把跨系統、重複、耗時的工作串成自動流程：行銷排程、報表、CRM 更新、Email 分流、資料整理。",
    "傳統自動化（Zapier、IFTTT、RPA）的限制是只能處理結構化資料。LLM 讓自動化流程第一次能夠 <strong>看懂</strong> email、公告、PDF、客戶留言。"
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "可靠性",
      "每天都要跑，不能三天兩頭壞掉"
     ],
     [
      "冪等性",
      "重跑不能重複寫入"
     ],
     [
      "錯誤處理",
      "一個來源壞掉不能拖垮整條流程"
     ],
     [
      "格式變動",
      "來源網頁改版、Email 格式變了"
     ],
     [
      "權限",
      "讀誰的信、寫誰的表"
     ],
     [
      "成本",
      "每天丟全文給 LLM 會很貴"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>社團財務報帳小幫手</strong>",
     "scene": "社員把收據照片丟到 Google 表單或 Discord，AI 讀取金額、日期、品項，自動整理成報帳表，金額超過門檻通知社長",
     "skill": "圖片理解（OCR）、數字驗證、人工核准"
    },
    {
     "title": "<strong>租屋資訊整理</strong>",
     "scene": "每天從公開租屋資訊整理符合條件（預算、距離、可否養寵物）的物件並推播",
     "skill": "條件篩選、去重、尊重網站使用條款"
    }
   ],
   "scale": [
    "Email 分流、發票與報帳自動化、CRM 資料更新、競品與輿情監控、行銷內容排程、HR 履歷初篩。"
   ]
  },
  {
   "id": "ai-asset-pipeline",
   "title": "AI 3D 資產管線（圖 → 3D → 綁骨 → 遊戲 / 影片 / 列印）",
   "cats": [
    "C",
    "E",
    "D"
   ],
   "labs": [
    "09"
   ],
   "intro": [
    "把一個角色或物件的「想法」，變成可以在不同地方使用的 3D 資產：",
    "這是典型的 <strong>複合式應用</strong>：每一步都有成熟的 AI 工具，但整條管線的品質取決於交接。拆解方法見 composite-pipelines.md。"
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "背面與細節",
      "單張圖生成時，看不到的部分是模型「猜」的 → 多視角輸入"
     ],
     [
      "拓撲與面數",
      "生成模型面數高、拓撲亂 → 減面、重拓撲"
     ],
     [
      "比例與座標",
      "尺寸隨機、Z-up vs Y-up → 交接規格"
     ],
     [
      "綁骨",
      "面數過高會失敗；非人形困難"
     ],
     [
      "授權",
      "開源模型授權各不相同，商用前要確認"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>系館公仔 3D 列印</strong>",
     "scene": "把系館或系上吉祥物做成桌上小公仔，用學校的 3D 印表機印出",
     "skill": "STL 輸出、水密（watertight）檢查、實體驗收"
    },
    {
     "title": "<strong>二手書店的 3D 商品頁</strong>",
     "scene": "幫小店把 5 件商品從照片轉成 3D，放在網頁上可旋轉",
     "skill": "批次化（P5）、多視角拍攝、面數與載入速度"
    }
   ],
   "scale": [
    "遊戲資產量產、電商 3D 商品展示、AR 試用、品牌 IP 與周邊、VTuber 形象、手辦原型。"
   ]
  },
  {
   "id": "video-editing",
   "title": "AI Video Editing 影片剪輯",
   "cats": [
    "C",
    "A"
   ],
   "labs": [
    "10"
   ],
   "intro": [
    "<strong>處理已經存在的影片</strong>：剪精華、上字幕、翻譯配音、轉直式、加片頭片尾。和「生成影片」（video-advertising）是不同的問題：",
    "典型管線："
   ],
   "hard": {
    "head": [
     "難點",
     "說明"
    ],
    "rows": [
     [
      "只看逐字稿會漏畫面",
      "沒說話但精彩的畫面（表演、比賽）→ 補視覺模型或音量/動作規則"
     ],
     [
      "切在句子中間",
      "需要以句子邊界為剪接單位"
     ],
     [
      "辨識錯字",
      "人名、術語 → 詞彙表"
     ],
     [
      "直式裁切",
      "說話者不在畫面中央 → 人臉追蹤"
     ],
     [
      "節奏與美感",
      "目前仍需要人判斷 → 輸出可編輯草稿"
     ]
    ]
   },
   "alts": [
    {
     "title": "<strong>把一堂課剪成複習重點</strong>",
     "scene": "老師授權的 90 分鐘課程錄影 → 5 段各 1 分鐘的重點，附章節標題",
     "skill": "依主題分段、章節生成"
    },
    {
     "title": "<strong>Podcast 切片 + 雙語字幕</strong>",
     "scene": "系上 Podcast 一集 → 3 支 30 秒 IG 切片，附中英字幕",
     "skill": "翻譯、字幕對齊、多支批次輸出"
    }
   ],
   "scale": [
    "直播與 Podcast 切片、課程剪輯、新聞剪輯、影片在地化、企業會議精華、專業後製的 AI 粗剪。"
   ]
  }
 ],
 "analyses": [
  {
   "id": "floor-plan-to-3d-house",
   "title": "Claude + Blender MCP：平面圖 → 3D 房屋",
   "labs": [
    "06"
   ],
   "cats": [
    "E",
    "G"
   ],
   "pats": [
    "P3",
    "P4",
    "P6"
   ],
   "sources": [],
   "problem": "手上有一張 2D 平面圖，想快速看到有家具、有材質的 3D 空間，但不會 3D 建模。",
   "flow": "平面圖（圖片）→\n  [Model]         Claude（多模態，讀平面圖）\n  [Context]       平面圖、目前 Scene 狀態、渲染截圖\n  [Tools]         blender-mcp：執行 bpy、截圖\n  [Orchestration] Agent 自主迴圈：建模 → 渲染 → 比對 → 修正\n  [Runtime]       Blender\n  [Verification]  俯視渲染 vs 平面圖（模型自己比對）+ 人工最終確認",
   "insight": "作者的描述是「做完之後看一下自己做了什麼，再修正」。這個 P6 迴圈是 3D 能交給 Agent 的前提，因為幾何錯誤單靠文字推理很難發現。",
   "limits": [
    "牆壁、開口、家具間距是否真的符合建築規範，仍需人工檢查",
    "複雜家具需要外部資產，否則只能是簡單幾何",
    "Agent 的自我檢查只能發現「看得出來」的錯誤"
   ]
  },
  {
   "id": "higgsfield-game-studio",
   "title": "Higgsfield Game Studio：Claude + Higgsfield MCP 做遊戲",
   "labs": [
    "05"
   ],
   "cats": [
    "D",
    "C",
    "G"
   ],
   "pats": [
    "P3",
    "P1",
    "P4"
   ],
   "sources": [],
   "problem": "從一句話的遊戲點子，到一個有美術資產、可以上線給別人玩的遊戲，中間需要程式、美術、託管三種能力，一個人很難同時具備。",
   "flow": "一句話遊戲點子 →\n  [Model]         Claude\n  [Context]       Game Studio skill（遊戲製作的方法與慣例）\n  [Tools]         Higgsfield MCP：影像/影片/角色生成、託管\n  [Orchestration] Claude 主導：設計 → 寫程式 → 呼叫生成 → 整合\n  [Runtime]       Higgsfield 託管的遊戲頁面\n  [Verification]  （官方文章未詳述）→ 實務上需人工試玩",
   "insight": "這是「P1 生成能力被包成 P4 工具」的典型例子。生成服務不再是一個獨立網站，而是 Coding Agent 工具箱中的一個工具。<strong>Skill（方法）+ MCP（能力）</strong> 的組合也值得注意：skill 告訴 Agent 怎麼做，MCP 讓它做得到。",
   "limits": [
    "依賴單一商業平台（生成與託管都在 Higgsfield）",
    "需要付費點數",
    "官方示範不等於一般使用者的成功率 → 需要工作坊實測"
   ]
  },
  {
   "id": "image-to-3d-to-game-engine",
   "title": "圖片 → 3D → Blender → 遊戲引擎（Agent 串接多個 MCP）",
   "labs": [
    "09"
   ],
   "cats": [
    "C",
    "E",
    "D",
    "G"
   ],
   "pats": [
    "P1",
    "P4",
    "P3",
    "P6"
   ],
   "sources": [
    {
     "name": "Claude MCP + Blender / Unity 自動化全指南（CSDN）",
     "url": "https://blog.csdn.net/2301_78671196/article/details/160085812"
    },
    {
     "name": "threejs-game-skills",
     "url": "https://github.com/majidmanzarpour/threejs-game-skills"
    }
   ],
   "problem": "做一個有 3D 角色與場景的遊戲，需要原畫、建模、材質、場景、程式等多種專業；想讓 Agent 一路從一張圖做到可以玩。",
   "flow": "圖片 → TRELLIS（圖生 3D）→ Blender MCP（建模、上材質）→ Unity MCP（擺場景、加 FPS 控制器）",
   "insight": "1. <strong>3D 格式就是 API</strong>。GLB 讓圖生 3D、Blender、Three.js、Unity 之間可以不經人手交接。",
   "limits": [
    "生成模型的授權差異很大（Hunyuan3D 社群授權有地區限制；TRELLIS.2 標示 MIT）",
    "多個付費 API 串接，成本需要預估",
    "目前少有「用這類資產完成並上架的遊戲 + 事後檢討」的公開案例 → 工作坊可以補上這份資料"
   ]
  },
  {
   "id": "blender-previz-to-ai-video",
   "title": "Blender 白模預演 → AI 影片渲染",
   "labs": [
    "11"
   ],
   "cats": [
    "E",
    "C",
    "G"
   ],
   "pats": [
    "P4",
    "P6",
    "P1",
    "P3"
   ],
   "sources": [
    {
     "name": "Bilibili 爆蛋BD：GPT-6 操作 Blender 白模預演，輔助 Seedance 2.5 精準生成影片",
     "url": "https://www.bilibili.com/video/BV1x7Yx6YEM6/"
    },
    {
     "name": "Flick：Blender for AI Filmmaking — The 2026 Guide",
     "url": "https://flick.art/blog/blender-ai-filmmaking"
    },
    {
     "name": "Higgsfield for Blender 外掛 + MCP Bridge",
     "url": "https://higgsfield.ai/blog/higgsfield-blender-plugin"
    }
   ],
   "problem": "影片模型畫面很美，但運鏡和走位無法精準控制，只能一直重抽（「抽卡」）。",
   "flow": "分鏡 →\n  [Model]         Agent（GPT-6 / Claude / Codex）+ 影片模型（Seedance / Kling / Wan VACE）\n  [Context]       分鏡、角色與場景參考圖、白模渲染\n  [Tools]         Blender MCP、圖像模型、影片模型（雲端 API 或 ComfyUI）\n  [Orchestration] Agent 主導 3D 部分；人主導風格選擇\n  [Runtime]       Blender → 雲端影片服務 / 本地 ComfyUI\n  [Verification]  白模與成品逐鏡並排對照",
   "insight": "這是「<strong>把確定的事交給確定的工具，把創意的事交給生成模型</strong>」最清楚的例子。Bilibili 創作者擎蒼與愛的說法：「白模鎖空間與運動，提示詞教 AI 怎麼詮釋」。",
   "limits": [
    "白模太粗時，影片模型會自行「發明」細節，可能與預期不符",
    "角色一致性仍需角色參考圖或角色 ID",
    "雲端服務的參考影片功能與限制變動很快"
   ]
  },
  {
   "id": "transcript-driven-editing",
   "title": "逐字稿驅動的 AI 剪輯（video-use / FunClip / 剪映草稿）",
   "labs": [
    "10"
   ],
   "cats": [
    "C",
    "A",
    "G"
   ],
   "pats": [
    "P2",
    "P3",
    "P4"
   ],
   "sources": [
    {
     "name": "browser-use/video-use",
     "url": "https://github.com/browser-use/video-use"
    },
    {
     "name": "modelscope/FunClip",
     "url": "https://github.com/modelscope/FunClip"
    },
    {
     "name": "GuanYixuan/pyJianYingDraft",
     "url": "https://github.com/GuanYixuan/pyJianYingDraft"
    },
    {
     "name": "楓羽：Claude Code 指揮 ffmpeg + Whisper 自動剪片",
     "url": "https://maplefeather.com/article/ai-auto-video-editing-claude-code-2026"
    }
   ],
   "problem": "長影片（講座、訪談、直播、活動錄影）很多，剪成短片很花時間；剪輯師的大部分時間花在「看完整段、找出好段落」。",
   "flow": "長影片 →\n  [Model]         語音辨識（Whisper / FunASR / Scribe）+ LLM\n  [Context]       帶時間碼的逐字稿（video-use 約 12KB markdown）\n  [Tools]         ffmpeg、Remotion、剪映草稿（pyJianYingDraft）、Resolve / Premiere MCP\n  [Orchestration] Claude Code skill 或一站式工具\n  [Runtime]       本機 CLI / 剪輯軟體\n  [Verification]  在剪接點截圖自我檢查；人工看成片",
   "insight": "1. <strong>轉換模態來降低問題難度</strong>：影片理解很難很貴，文字理解很便宜很準。先轉逐字稿，剪輯就變成編輯文件。這是一個可以套用到很多領域的通用策略。",
   "limits": [
    "只看逐字稿會漏掉「沒有說話但畫面很精彩」的片段（例如表演、比賽）→ 需要補上視覺模型或規則（AutoClip 對遊戲畫面有可選的視覺模型）",
    "人名、術語辨識錯誤 → 詞彙表",
    "肖像權與音樂版權"
   ]
  }
 ],
 "refs": [
  {
   "name": "school-handbook-agent",
   "url": "https://github.com/eternal1717/school-handbook-agent",
   "lang": "ZH",
   "desc": "<strong>幾乎就是本題的完整版</strong>。每個結論標出規章、章節與頁碼；找不到直接回「手冊中未找到」；附 recall@5 與拒答率的評估",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r0",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "CampusMind",
   "url": "https://github.com/zhuyuxin29/CampusMind",
   "lang": "ZH",
   "desc": "學生手冊問答，[1][2] 引用、來源卡片顯示「檔名 / 章節 / 頁碼」；問題太模糊時會先反問。規模小，讀得完",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r1",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "campus_rag",
   "url": "https://github.com/hxj1007/campus_rag",
   "lang": "ZH",
   "desc": "最簡單的骨架，適合當路線 B 起點。沒有引用功能，可以當作業自己補",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r2",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "NQU Campus AI Assistant（金門大學）",
   "url": "https://github.com/Rafu2102/RAG-",
   "lang": "ZH-TW",
   "desc": "台灣學校的選課助手，還能解析成績單算 GPA。需要 GPU，適合當延伸參考",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r3",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "faq-bot",
   "url": "https://github.com/currycm/faq-bot",
   "lang": "ZH",
   "desc": "約九成問題直接從知識庫回答不呼叫 LLM；有個資遮罩、注入偵測、成本上限",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r4",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "HCMUE Student Handbook RAG",
   "url": "https://github.com/AnhPhiNe/student-handbook-rag-chatbot",
   "lang": "EN",
   "desc": "依入學年度隔離規章、每個答案附條文引用、有凍結的評估資料集（進階範例）",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r5",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "kotaemon",
   "url": "https://github.com/Cinnamon/kotaemon",
   "lang": "EN",
   "desc": "引用可在 PDF 檢視器中高亮原文，Docker 一行啟動，適合課堂展示「好的引用長什麼樣」",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r6",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "Open Notebook",
   "url": "https://github.com/lfnovo/open-notebook",
   "lang": "EN",
   "desc": "開源版 NotebookLM，可以完全本地執行",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r7",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "deep-research",
   "url": "https://github.com/dzhng/deep-research",
   "lang": "EN",
   "desc": "不到 500 行的遞迴式研究 Agent，最好讀的 Research Agent 範例",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "project",
   "id": "r8",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "Datawhale all-in-rag",
   "url": "https://github.com/datawhalechina/all-in-rag",
   "lang": "ZH",
   "desc": "中文 RAG 全端教程",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "official",
   "id": "r9",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "Anthropic Claude Cookbooks：RAG",
   "url": "https://github.com/anthropics/claude-cookbooks/tree/main/capabilities/retrieval_augmented_generation",
   "lang": "EN",
   "desc": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "official",
   "id": "r10",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "OpenAI Cookbook：File Search in Responses API",
   "url": "https://developers.openai.com/cookbook/examples/file_search_responses",
   "lang": "EN",
   "desc": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "official",
   "id": "r11",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "OpenAI Customer Service Agents Demo",
   "url": "https://github.com/openai/openai-cs-agents-demo",
   "lang": "EN",
   "desc": "分流 Agent → 專責 Agent → 工具動作，畫面上看得到每次 handoff 與 guardrail，架構最完整",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r12",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "Anthropic Customer Support Agent",
   "url": "https://github.com/anthropics/claude-quickstarts/tree/main/customer-support-agent",
   "lang": "EN",
   "desc": "知識庫回答 + 情緒偵測 + 轉介人工，UI 顯示引用來源（需要 AWS 帳號）",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r13",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "AI Bistro Ordering",
   "url": "https://github.com/zhichzhang/ai-bistro-ordering",
   "lang": "EN",
   "desc": "<strong>LLM 只輸出有型別的動作，由後端對照真實菜單驗證後才執行</strong>，最適合教「決策與執行分離」",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r14",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "OrderBot",
   "url": "https://github.com/nicoladisabato/OrderBot",
   "lang": "EN",
   "desc": "小而好讀的點餐 Bot，function calling 查資料庫",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r15",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "linebot-gemini-multimodel-funcal",
   "url": "https://github.com/kkdai/linebot-gemini-multimodel-funcal",
   "lang": "ZH-TW",
   "desc": "LINE 電商客服：查訂單、搜尋商品、回傳商品圖。台灣 LINE API Expert 所寫，可直接套用架構",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r16",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "從 Function Call 升級到 ADK Agent",
   "url": "https://www.evanlin.com/function-agent/",
   "lang": "ZH-TW",
   "desc": "對照「手寫工具迴圈」與「Agent 框架」兩種寫法",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r17",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "臺北客家美食節 LINE Bot",
   "url": "https://github.com/kane8201053-collab/hakka-food-linebot",
   "lang": "ZH-TW",
   "desc": "真實活動的餐飲 FAQ Bot，附 64 個測試情境與部署設定",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r18",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "用 n8n 打造 AI LINE 客服機器人",
   "url": "https://brain168.com/n8n-line-ai-bot/",
   "lang": "ZH-TW",
   "desc": "零程式，把 Google Sheet 當知識庫；改成寫入訂單成本很低",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r19",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "Dify 官方：知識庫智能客服",
   "url": "https://docs.dify.ai/zh-hans/workshop/intermediate/customer-service-bot",
   "lang": "ZH",
   "desc": "適合在課堂畫 Intent → Knowledge 節點圖",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r20",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "20 分鐘構建 Dify 智能客服工作流",
   "url": "https://developer.volcengine.com/articles/7533551167696338980",
   "lang": "ZH",
   "desc": "最簡單的「轉人工」分支示範",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "project",
   "id": "r21",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "中文說明",
   "url": "https://www.evanlin.com/gemini-multimodel-response/",
   "lang": "EN",
   "desc": "",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "official",
   "id": "r22",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "MoneyPrinterTurbo",
   "url": "https://github.com/harry0703/MoneyPrinterTurbo",
   "lang": "ZH",
   "desc": "這個領域最標竿的完整流程：主題 → 腳本 → 素材 → 配音 → 字幕 → BGM → 成片，原生三種比例",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r23",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "MoneyPrinterTurbo 免安裝教學（The Walking Fish）",
   "url": "https://the-walking-fish.com/p/moneyprinterturbo/",
   "lang": "ZH-TW",
   "desc": "台灣繁中、零安裝，可直接當課前閱讀",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r24",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Pixelle-Video",
   "url": "https://github.com/AIDC-AI/Pixelle-Video",
   "lang": "ZH",
   "desc": "腳本 → 分鏡圖 → 逐格生成 → 合成，示範「用 ComfyUI 當生成後端」",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r25",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "NarratoAI",
   "url": "https://github.com/linyqh/NarratoAI",
   "lang": "ZH",
   "desc": "既有素材 + AI 解說文案 + 剪輯 + 配音，適合「店家已有影片素材」的情境",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r26",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Bilibili：ComfyUI 全能電商工作流",
   "url": "https://www.bilibili.com/video/BV19tznYQEwZ/",
   "lang": "ZH",
   "desc": "商品精修、換背景、產品融圖，對應「商品照 → 主視覺」",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r27",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "n8n：商品照生成 UGC 廣告短片",
   "url": "https://n8n.io/workflows/18698-generate-ugc-ad-reels-from-product-photos-with-deepseek-and-kieai",
   "lang": "EN",
   "desc": "上傳商品照 → 15–20 秒廣告稿 → 有聲有字幕直式影片，<strong>幾乎就是本題的現成版</strong>",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r28",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "short-video-maker",
   "url": "https://github.com/gyoridavid/short-video-maker",
   "lang": "EN",
   "desc": "文字 → 短影音，提供 MCP 讓 Claude 呼叫，不需要 GPU（TTS 只支援英文）",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r29",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Remotion prompt-to-video 範本",
   "url": "https://github.com/remotion-dev/template-prompt-to-video",
   "lang": "EN",
   "desc": "官方範本，理解「用程式剪輯」與多比例輸出",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r30",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Higgsfield：把 Claude 變成創意工作室",
   "url": "https://higgsfield.ai/blog/claude-higgsfield-mcp-creative-studio",
   "lang": "EN",
   "desc": "官方示範 Agent 透過 MCP 產出廣告素材、配音與配音翻譯",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "project",
   "id": "r31",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Higgsfield MCP",
   "url": "https://higgsfield.ai/mcp",
   "lang": "EN",
   "desc": "30+ 影像與影片模型；並提供 Blender、Premiere、After Effects 等「Production Bundle」skills",
   "labs": [
    "03",
    "11"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "C",
    "E",
    "F"
   ],
   "id": "r32",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "ComfyUI 官方文件",
   "url": "https://docs.comfy.org/",
   "lang": "EN",
   "desc": "",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "C",
    "F"
   ],
   "id": "r33",
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "巨匠電腦：Claude Design + Claude Code 架站教學",
   "url": "https://www.pcschool.com.tw/blog/it-skill/claude-design-website-tutorial",
   "lang": "ZH-TW",
   "desc": "<strong>幾乎就是本題</strong>：做一個有報名表單的活動頁",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "project",
   "id": "r34",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "raven.tw：用 Claude Code 打造個人部落格",
   "url": "https://raven.tw/blog/claude-code-personal-blog-complete-guide/",
   "lang": "ZH-TW",
   "desc": "完整涵蓋 CMS 與部署，含 skills 使用",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "project",
   "id": "r35",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "awesome-claude-design：20 分鐘 Landing Page",
   "url": "https://github.com/rohitg00/awesome-claude-design/blob/main/recipes/landing-page-20-min.md",
   "lang": "EN",
   "desc": "最接近「Brief → 頁面 → SEO → 部署」完整流程；用設計 token 避免千篇一律",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "project",
   "id": "r36",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "DevPortfolio",
   "url": "https://github.com/amythnn/amythnn.github.io",
   "lang": "EN",
   "desc": "附真實的 <code>CLAUDE.md</code> 與 <code>.cursor/rules</code>，看別人怎麼寫給 Agent 的說明書",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "project",
   "id": "r37",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Auspia：用 Codex 做 SEO/GEO 網站",
   "url": "https://auspia.ai/blog/codex-create-seo-geo-website-prompt-deploy",
   "lang": "EN",
   "desc": "SEO 與部署步驟最具體，附可複製的 prompt（title、schema、sitemap、llms.txt）",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "project",
   "id": "r38",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "iT 邦幫忙：個人網站改成雜誌風",
   "url": "https://ithelp.ithome.com.tw/articles/10400090",
   "lang": "ZH-TW",
   "desc": "示範對既有網站做「改版」",
   "labs": [
    "04"
   ],
   "partial": true,
   "kind": "project",
   "id": "r39",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "知乎：frontend-design Skill 解決 AI 前端又醜又土",
   "url": "https://zhuanlan.zhihu.com/p/2003753772518753567",
   "lang": "ZH",
   "desc": "前後對照，理解設計規範的影響",
   "labs": [
    "04"
   ],
   "partial": true,
   "kind": "project",
   "id": "r40",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Anthropic：透過 Skills 改善前端設計",
   "url": "https://claude.com/blog/improving-frontend-design-through-skills",
   "lang": "EN",
   "desc": "",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "official",
   "id": "r41",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Framer：外部 Agent",
   "url": "https://www.framer.com/agents/external/",
   "lang": "EN",
   "desc": "",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "D"
   ],
   "id": "r42",
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "設定 Claude Code / Codex / Cursor",
   "url": "https://www.framer.com/help/articles/how-to-set-up-framer-for-claude-code-codex-and-cursor/",
   "lang": "EN",
   "desc": "",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "official",
   "id": "r43",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Phaser 官方：用 Claude Code 做 2D 射擊遊戲",
   "url": "https://phaser.io/news/2026/02/phaser-claude-code-tutorial",
   "lang": "EN",
   "desc": "<strong>以可玩里程碑推進</strong>（波次、道具、Boss、畫面震動），範圍最接近本題",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r44",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "claude-one-button-game-creation",
   "url": "https://github.com/abagames/claude-one-button-game-creation",
   "lang": "EN",
   "desc": "Agent 一次生成 10 款一鍵遊戲、用瀏覽器確認能跑再發布，<strong>完整的 Agent 工作流 Repo</strong>",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r45",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "OpenAI：用 Codex 做瀏覽器遊戲",
   "url": "https://learn.chatgpt.com/use-cases/browser-games",
   "lang": "EN",
   "desc": "PLAN.md → AGENTS.md → 開發 → 生成美術（保存 prompt）→ Agent 試玩",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r46",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "awesome-ai-built-games",
   "url": "https://github.com/lappemic/awesome-ai-built-games",
   "lang": "EN",
   "desc": "AI 做的遊戲清單，含 Vibe Jam 2026 得獎作品，可以直接玩",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r47",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "openai/gpt-5-coding-examples",
   "url": "https://github.com/openai/gpt-5-coding-examples",
   "lang": "EN",
   "desc": "每個遊戲都附產生它的 prompt，可以拿來改",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r48",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "MindStudio：1 小時用 Codex /goal 做遊戲",
   "url": "https://www.mindstudio.ai/blog/alex-finn-codex-goal-command-video-game-build",
   "lang": "EN",
   "desc": "展示美術在 Agent 迴圈中生成",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r49",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "SegmentFault：Claude Code 遊戲開發入門 2026",
   "url": "https://segmentfault.com/a/1190000048011168",
   "lang": "ZH",
   "desc": "中文逐步教學：/init → 框架 → 核心迴圈 → UI → 除錯",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r50",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "掘金：Claude Code 給我做了個遊戲，跑起來我沉默了",
   "url": "https://juejin.cn/post/7653097416624652314",
   "lang": "ZH",
   "desc": "誠實的反例，討論 AI 做遊戲的極限，適合課堂討論",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r51",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "claude-code-dungeon-master（iThome 鐵人賽）",
   "url": "https://github.com/harry18456/claude-code-dungeon-master",
   "lang": "ZH-TW",
   "desc": "30 天系列，示範 CLAUDE.md、hooks、skills 的實際用法（CLI 遊戲）",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r52",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "blender-mcp",
   "url": "https://github.com/ahujasid/blender-mcp",
   "lang": "EN",
   "desc": "本題的基礎：執行 Blender Python、Poly Haven / Sketchfab 資產、Hyper3D / Hunyuan3D 生成模型、截圖、匯出",
   "labs": [
    "06",
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "cats": [
    "C",
    "D",
    "E"
   ],
   "id": "r53",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "I Gave Claude a Floor Plan and It Built the House in 3D",
   "url": "https://www.sidharthsatapathy.com/blog/claude-blender-mcp-floor-plan-to-3d-house/",
   "lang": "EN",
   "desc": "<strong>最接近本題</strong>：平面圖 → 有家具的 3D 房子；Claude 渲染俯視圖對照平面圖並自我修正",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r54",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "用 Blender-mcp 讓 Claude AI 幫你做 3D（夏卡樵の開發日誌）",
   "url": "https://shaka-joe.com/posts/blender-mcp",
   "lang": "ZH-TW",
   "desc": "台灣作者，完整安裝步驟 + 「幫工程師做一間舒適房間」，並誠實指出結果需要手動修正",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r55",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude Code + Blender MCP：零基礎生成 3D 環境（Bilibili）",
   "url": "https://www.bilibili.com/video/BV1RKXNBMEDX/",
   "lang": "ZH",
   "desc": "以 Claude Code 當客戶端，與工作坊路線相同",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r56",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude Blender MCP 連接器指南（Eigent）",
   "url": "https://www.eigent.ai/zh-TW/blog/claude-blender-mcp",
   "lang": "ZH-TW",
   "desc": "比較不同接法，以及如何用本地模型跑",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r57",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "agent-skills：blender-mcp skill",
   "url": "https://github.com/vladmdgolam/agent-skills",
   "lang": "EN",
   "desc": "唯一涵蓋「Blender → GLB → 網頁」最後一步的整合參考",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r58",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Holodeck（CVPR 2024）",
   "url": "https://github.com/allenai/Holodeck",
   "lang": "EN",
   "desc": "研究界的「文字 → 有家具的房間」，有物件擺放規則",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r59",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "LayoutGPT（NeurIPS 2023）",
   "url": "https://github.com/weixi-feng/LayoutGPT",
   "lang": "EN",
   "desc": "「讓 LLM 先把佈局當資料輸出」的原始想法，對應本題步驟 1",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r60",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "SceneCraft（ICML 2024）",
   "url": "https://arxiv.org/abs/2403.01248",
   "lang": "EN",
   "desc": "「寫 bpy → 渲染 → 看 → 修」迴圈的研究版本",
   "labs": [
    "06"
   ],
   "partial": true,
   "kind": "project",
   "id": "r61",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "3D-GPT",
   "url": "https://github.com/Chuny1/3DGPT",
   "lang": "EN",
   "desc": "多 Agent 分工生成程序化 3D 場景",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "project",
   "id": "r62",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Spline V2 發表",
   "url": "https://updates.spline.design/changelog/introducing-spline-v2",
   "lang": "EN",
   "desc": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "D",
    "E"
   ],
   "id": "r63",
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Spline MCP Server 文件",
   "url": "https://docs.spline.design/generate/spline-mcp-server",
   "lang": "EN",
   "desc": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "official",
   "id": "r64",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "n8n：RSS 內容 AI 摘要、通知與封存",
   "url": "https://n8n.io/workflows/4503-automate-rss-content-with-ai-summarize-notify-and-archive/",
   "lang": "EN",
   "desc": "<strong>與本題最像</strong>：來源清單、過濾舊文、摘要、寫入 Sheet、推播",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r65",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "n8n：每日 AI 新聞摘要（Telegram + Gmail）",
   "url": "https://n8n.io/workflows/17217-send-daily-ai-news-digests-from-rss-feeds-with-openai-telegram-and-gmail",
   "lang": "EN",
   "desc": "示範怎麼把摘要 prompt 寫緊（限則數、限長度），同時發多通道",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r66",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "n8n：本地 Llama 3.2 新聞摘要",
   "url": "https://n8n.io/workflows/6011-daily-ai-news-digest-with-rss-llama-32-summarization-and-telegram-delivery/",
   "lang": "EN",
   "desc": "完全離線，沒有 API 預算時的路線",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r67",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "n8n：自動分類求職信件",
   "url": "https://n8n.io/workflows/15299-automatic-workflow-to-categorise-your-job-status",
   "lang": "EN",
   "desc": "<strong>規則與 LLM 互相補強的最佳範例</strong>：關鍵字規則覆寫 + 第二輪 LLM 驗證",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r68",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "iT 邦幫忙：用 n8n 把新聞推送到 LINE",
   "url": "https://ithelp.ithome.com.tw/articles/10373984",
   "lang": "ZH-TW",
   "desc": "鐵人賽系列「打造自己的 AI 新聞小編」，台灣在地、有 LINE",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r69",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "n8n 新聞自媒體全攻略（人生攻略研究所）",
   "url": "https://lifecheatslab.com/n8n-news-media/",
   "lang": "ZH-TW",
   "desc": "同 Lab 07 技術組合",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r70",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "Bilibili：n8n 入門，公眾號文章自動採集與 AI 摘要",
   "url": "https://www.bilibili.com/video/BV12F1VBfER8/",
   "lang": "ZH",
   "desc": "節點設定講得很細，適合課前預習",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r71",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "awesome-n8n-templates",
   "url": "https://github.com/enescingoz/awesome-n8n-templates",
   "lang": "EN",
   "desc": "依 Gmail、Discord、Notion、RAG 等分類，可直接匯入",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r72",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "Zie619/n8n-workflows",
   "url": "https://github.com/Zie619/n8n-workflows",
   "lang": "EN",
   "desc": "自己搜 &quot;RSS&quot;、&quot;classify&quot; 找範例",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "project",
   "id": "r73",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "AI Agent + Playwright MCP 幫你操作網站（swingyoyo）",
   "url": "https://swingyoyo.com/post/mcp-playwright/",
   "lang": "ZH-TW",
   "desc": "<strong>幾乎就是本題</strong>：從台灣爵士樂社團頁面抓近期活動並解析日期時間",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r74",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "用 Playwright MCP 跟 Claude 做 AI 爬蟲（YWC）",
   "url": "https://ywctech.net/ml-ai/playwright-mcp-crawler/",
   "lang": "ZH-TW",
   "desc": "兩個 MCP 組成「擷取 → 存檔」；人可以介入操作（如手動登入）",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r75",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Playwright MCP 與 Claude 打造網頁操作智能體（博客園）",
   "url": "https://www.cnblogs.com/hogwarts/p/19133057",
   "lang": "ZH",
   "desc": "由淺到深三個任務；最後的「登入後發文」正好討論送出前確認",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r76",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Browser Use 原理 + 實戰（Bilibili 技術爬爬蝦）",
   "url": "https://www.bilibili.com/video/BV1vZfKYeEDk/",
   "lang": "ZH",
   "desc": "同時講原理與架構，適合講解 Observe–Act 迴圈",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r77",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Anthropic computer-use-demo",
   "url": "https://github.com/anthropics/claude-quickstarts/tree/main/computer-use-demo",
   "lang": "EN",
   "desc": "官方參考實作，README 列出安全建議：隔離 VM、網域白名單、重大動作前人工確認",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r78",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "browser-use：apply_to_job 範例",
   "url": "https://github.com/browser-use/browser-use/blob/main/examples/use-cases/apply_to_job.py",
   "lang": "EN",
   "desc": "結構化輸入 + 自訂工具。<strong>注意它最後會直接送出</strong>，正好當反例：改成送出前等人確認",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r79",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "browser-use web-ui",
   "url": "https://github.com/browser-use/web-ui",
   "lang": "EN",
   "desc": "不寫程式就能跑的圖形介面（留意維護狀態）",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r80",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Open Operator（Browserbase）",
   "url": "https://github.com/browserbase/open-operator",
   "lang": "EN",
   "desc": "Agent loop 簡單好讀。<strong>已於 2026-05 封存</strong>，僅供參考",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "project",
   "id": "r81",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Playwright MCP",
   "url": "https://github.com/microsoft/playwright-mcp",
   "lang": "EN",
   "desc": "",
   "labs": [
    "04",
    "05",
    "08"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r82",
   "cats": [
    "C",
    "D",
    "G"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Stagehand",
   "url": "https://github.com/browserbase/stagehand",
   "lang": "EN",
   "desc": "",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r83",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude Computer Use 文件",
   "url": "https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool",
   "lang": "EN",
   "desc": "",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "G"
   ],
   "id": "r84",
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "MCP 規格",
   "url": "https://modelcontextprotocol.io/specification/latest",
   "lang": "EN",
   "desc": "",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "G"
   ],
   "id": "r85",
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "threejs-game-skills",
   "url": "https://github.com/majidmanzarpour/threejs-game-skills",
   "lang": "EN",
   "desc": "<strong>與本 Lab 最接近</strong>：Claude Code / Codex skills，附 5 個 demo",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r86",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude MCP + Blender / Unity 自動化全指南（CSDN）",
   "url": "https://blog.csdn.net/2301_78671196/article/details/160085812",
   "lang": "ZH",
   "desc": "<strong>最完整的中文 Agent 案例</strong>，一路串到遊戲引擎",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r87",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Blender-MCP + Claude Code 自動建模（博客園）",
   "url": "https://www.cnblogs.com/wgwyanfs/p/20314788",
   "lang": "ZH",
   "desc": "Claude Code → blender-mcp → Rodin → Unity / Three.js",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r88",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "comfyui-ai-gamedev",
   "url": "https://github.com/mattwilliamson/comfyui-ai-gamedev",
   "lang": "EN",
   "desc": "參考圖 → Hunyuan3D 2.1 → Blender 減面 PBR → GLB",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r89",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "AI Auto-Rigging Showdown 2026（StraySpark）",
   "url": "https://www.strayspark.studio/blog/ai-auto-rigging-showdown-2026-tripo-meshy-cascadeur-mixamo",
   "lang": "EN",
   "desc": "生成 → 5 種自動綁骨比較 → Blender → UE",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r90",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Tripo 完整角色工作流（Bilibili 中配）",
   "url": "https://www.bilibili.com/video/BV1wr8L6xEVi/",
   "lang": "ZH",
   "desc": "Tripo → Blender → AccuRig → UE",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r91",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Nano Banana 手辦自由（CSDN）",
   "url": "https://blog.csdn.net/qq1198768105/article/details/151142266",
   "lang": "ZH",
   "desc": "圖 → 3D → <strong>實體</strong> 的延伸案例",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r92",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Meshy / Tripo + Three.js 實作心得",
   "url": "https://dev.to/abigail_armijo/what-i-learned-exploring-ai-generated-3d-a-hands-on-tour-of-meshy-tripo-and-threejs-5cic",
   "lang": "EN",
   "desc": "記錄「面數太高綁骨失敗」等交接坑（2024 年，工具已更新）",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r93",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Meshy → Roblox Studio 教學",
   "url": "https://www.meshy.ai/tutorials/3d-model-for-roblox-workflow",
   "lang": "EN",
   "desc": "生成 → 減面 → 綁骨 → Roblox（廠商教學）",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "project",
   "id": "r94",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "3D-Craft",
   "url": "https://github.com/JiawenZhu/3D-Craft",
   "lang": "EN",
   "desc": "概念圖 → 多種圖生 3D → Three.js",
   "labs": [
    "09"
   ],
   "partial": true,
   "kind": "project",
   "id": "r95",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Blender as a Pipeline Engine",
   "url": "https://shahriyarshahrabi.medium.com/blender-as-a-pipeline-engine-make-rigged-characters-with-comfyui-3a1e81a3e623",
   "lang": "EN",
   "desc": "ComfyUI → Hunyuan3D → Blender 自動綁骨",
   "labs": [
    "09"
   ],
   "partial": true,
   "kind": "project",
   "id": "r96",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "知乎：AI 生成模型 + Blender 優化 + 匯出 VRM",
   "url": "https://zhuanlan.zhihu.com/p/1988625814363869476",
   "lang": "ZH",
   "desc": "VTuber 方向的延伸",
   "labs": [
    "09"
   ],
   "partial": true,
   "kind": "project",
   "id": "r97",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Hunyuan3D-2.1",
   "url": "https://github.com/Tencent-Hunyuan/Hunyuan3D-2.1",
   "lang": "EN",
   "desc": "需 10–29GB VRAM；社群授權不適用於歐盟、英國、南韓；3.x 版僅雲端 API",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "cats": [
    "C",
    "E"
   ],
   "id": "r98",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "TRELLIS.2",
   "url": "https://github.com/microsoft/TRELLIS.2",
   "lang": "EN",
   "desc": "Repo 標示 MIT，使用前請再確認 LICENSE",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "cats": [
    "C",
    "E"
   ],
   "id": "r99",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "UniRig",
   "url": "https://github.com/VAST-AI-Research/UniRig",
   "lang": "EN",
   "desc": "SIGGRAPH 2025，MIT",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r100",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "ComfyUI-3D-Pack",
   "url": "https://github.com/MrForExample/ComfyUI-3D-Pack",
   "lang": "EN",
   "desc": "不含綁骨",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r101",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Meshy MCP",
   "url": "https://github.com/meshy-dev/meshy-mcp-server",
   "lang": "EN",
   "desc": "付費點數",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r102",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Tripo MCP",
   "url": "https://github.com/VAST-AI-Research/tripo-mcp",
   "lang": "EN",
   "desc": "仍為 alpha，需透過 Tripo Blender Addon",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "tool",
   "cats": [
    "C",
    "E"
   ],
   "id": "r103",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "FunClip",
   "url": "https://github.com/modelscope/FunClip",
   "lang": "ZH",
   "desc": "FunASR + 說話者辨識 → LLM 選段 → 剪接 + SRT",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r104",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "AutoClip",
   "url": "https://github.com/zhouxiaoka/autoclip",
   "lang": "ZH",
   "desc": "完整的精華切片產品，支援 Qwen、DeepSeek、Ollama，並提供 MCP / CLI 介面",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "project",
   "id": "r105",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "OpenShorts",
   "url": "https://github.com/mutonby/openshorts",
   "lang": "EN",
   "desc": "開源版 OpusClip，提供 MCP server 給 Agent 呼叫",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r106",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "AI-Youtube-Shorts-Generator",
   "url": "https://github.com/Anil-matcha/AI-Youtube-Shorts-Generator",
   "lang": "EN",
   "desc": "最簡單的端到端教學範例",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r107",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "auto-editor",
   "url": "https://github.com/WyattBlue/auto-editor",
   "lang": "EN",
   "desc": "不用 LLM 的規則式基準線，常被當成管線中的一步",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "tool",
   "id": "r108",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "video-use",
   "url": "https://github.com/browser-use/video-use",
   "lang": "EN",
   "desc": "<strong>「逐字稿就是剪輯介面」最乾淨的設計</strong>，Claude Code skill",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "project",
   "id": "r109",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "pyJianYingDraft",
   "url": "https://github.com/GuanYixuan/pyJianYingDraft",
   "lang": "ZH",
   "desc": "Python → 剪映草稿",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r110",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "capcut-mate",
   "url": "https://github.com/Hommy-master/capcut-mate",
   "lang": "ZH",
   "desc": "扣子 / n8n → 剪映草稿 → 雲端渲染",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "project",
   "id": "r111",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "jianying-editor-skill",
   "url": "https://github.com/luoluoluo22/jianying-editor-skill",
   "lang": "ZH",
   "desc": "搭配下方 Bilibili 爆紅影片",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r112",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "VectCutAPI",
   "url": "https://github.com/sun-guannan/VectCutAPI",
   "lang": "ZH",
   "desc": "另一種草稿 API",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r113",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "davinci-resolve-mcp",
   "url": "https://github.com/samuelgursky/davinci-resolve-mcp",
   "lang": "EN",
   "desc": "Agent 操作專業剪輯軟體的參考（需 Resolve Studio）",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "tool",
   "id": "r114",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "premiere-pro-mcp",
   "url": "https://github.com/leancoderkavy/premiere-pro-mcp",
   "lang": "EN",
   "desc": "社群版 Premiere MCP（非 Adobe 官方）",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r115",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "HyperFrames",
   "url": "https://github.com/heygen-com/hyperframes",
   "lang": "EN",
   "desc": "給 Agent 用的「HTML 即影片」路線",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r116",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "remotion-dev/skills",
   "url": "https://github.com/remotion-dev/skills",
   "lang": "EN",
   "desc": "用程式做字幕、動態圖形",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r117",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "VideoLingo",
   "url": "https://github.com/Huanshere/VideoLingo",
   "lang": "ZH",
   "desc": "WhisperX → LLM 翻譯對齊 → 配音 → 燒字幕",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "tool",
   "id": "r118",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "pyVideoTrans",
   "url": "https://github.com/jianchang512/pyvideotrans",
   "lang": "ZH",
   "desc": "最多人用的影片翻譯工具",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r119",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "OpenCreator（原 KrillinAI）",
   "url": "https://github.com/krillinai/OpenCreator",
   "lang": "ZH",
   "desc": "從管線工具轉型成 Agent 工作區的趨勢",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r120",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "楓羽：Claude Code 指揮 ffmpeg + Whisper 自動剪片",
   "url": "https://maplefeather.com/article/ai-auto-video-editing-claude-code-2026",
   "lang": "ZH-TW",
   "desc": "錄影 → Whisper → auto-editor → 標題卡 → 字幕配樂 → 9:16；「AI 是腦，CLI 工具是手」",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "project",
   "id": "r121",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "Bilibili：我封裝了剪映剪輯 skill，AI 全自動接管剪映",
   "url": "https://www.bilibili.com/video/BV1hLzCBzEDS/",
   "lang": "ZH",
   "desc": "AI skill 接管剪映多軌剪輯",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "project",
   "id": "r122",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "russ.imyq.co：video-use 教學",
   "url": "https://russ.imyq.co/claude-video-use-tutorial/",
   "lang": "ZH-TW",
   "desc": "video-use 實際安裝與使用",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r123",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "知乎：用 Claude Skills 做會學習的剪輯 Agent",
   "url": "https://zhuanlan.zhihu.com/p/1995051629620261260",
   "lang": "ZH",
   "desc": "五種剪輯任務拆成五個 skill",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r124",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "知乎：一句話讓 Claude Code 自動剪影片",
   "url": "https://zhuanlan.zhihu.com/p/2029246513046398555",
   "lang": "ZH",
   "desc": "video-use 導讀",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r125",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "MindStudio：用 Claude Code 自動化影片剪輯",
   "url": "https://www.mindstudio.ai/blog/automate-video-editing-claude-code",
   "lang": "EN",
   "desc": "Claude Code + ffmpeg 管線",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r126",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "Clixie：Claude Code + HyperFrames",
   "url": "https://www.clixie.ai/blog/claude-code-video-editing",
   "lang": "EN",
   "desc": "先逐字稿、再分鏡、再渲染",
   "labs": [
    "10"
   ],
   "partial": true,
   "kind": "project",
   "id": "r127",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "name": "Higgsfield for Blender 外掛 + MCP Bridge",
   "url": "https://higgsfield.ai/blog/higgsfield-blender-plugin",
   "lang": "EN",
   "desc": "<strong>官方產品，本 Lab 的一站式版本</strong>（路線 C）",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "cats": [
    "C",
    "E"
   ],
   "id": "r128",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Flick：Blender for AI Filmmaking 2026 指南",
   "url": "https://flick.art/blog/blender-ai-filmmaking",
   "lang": "EN",
   "desc": "<strong>最完整的單篇說明</strong>，比較 5 種控制方法的成本與控制力",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r129",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Bilibili 爆蛋BD：GPT-6 操作 Blender 白模預演，輔助 Seedance 精準生成",
   "url": "https://www.bilibili.com/video/BV1x7Yx6YEM6/",
   "lang": "ZH",
   "desc": "<strong>Agent → Blender → 影片模型的完整鏈</strong>，與本 Lab 路線 A 相同",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r130",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Bilibili 擎蒼與愛：用白模把 AI 運鏡從「抽卡」變成「預演」",
   "url": "https://www.bilibili.com/video/BV1k48u6rEXX/",
   "lang": "ZH",
   "desc": "教學金句：「白模鎖空間與運動，提示詞教 AI 怎麼詮釋」",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r131",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Blender to ComfyUI AI Renderer 2.0（Mickmumpitz）",
   "url": "https://www.runcomfy.com/comfyui-workflows/blender-to-comfyui-ai-renderer-2-0-workflow-cinematic-video-output",
   "lang": "EN",
   "desc": "深度 / 輪廓 / 姿勢通道 → Wan VACE",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r132",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "AI Rendering 3D Animations with Blender + ComfyUI（v1）",
   "url": "https://www.runcomfy.com/comfyui-workflows/ai-rendering-3d-animations-with-blender-and-comfyui",
   "lang": "EN",
   "desc": "ControlNet + AnimateDiff + IPAdapter",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r133",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "騰訊雲：Blender + Seedance 工作流 25 個案例整理",
   "url": "https://developer.cloud.tencent.com/article/2702701?policyId=1004",
   "lang": "ZH",
   "desc": "中文的案例彙整（原 GitHub 清單目前無法開啟）",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r134",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "ComfyUI-BlenderAI-node",
   "url": "https://github.com/AIGODLIKE/ComfyUI-BlenderAI-node",
   "lang": "ZH",
   "desc": "標準的 Blender ↔ ComfyUI 橋接，中國團隊開發（影片節點僅部分支援）",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r135",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Bilibili 若有神祇：兩款外掛把 ComfyUI 焊進 Blender",
   "url": "https://www.bilibili.com/video/BV1XG93BpEey/",
   "lang": "ZH",
   "desc": "Blender ↔ ComfyUI 橋接",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r136",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Bilibili：Blender + ComfyUI + 混元3D + 可靈 精準角色一致性",
   "url": "https://www.bilibili.com/video/BV1PM9RYvEiF/",
   "lang": "ZH",
   "desc": "<strong>唯一找到的「圖 → 3D → Blender → 影片」完整角色一致性案例</strong>（延伸挑戰）",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r137",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Higgsfield MCP → After Effects（AlphaSignal）",
   "url": "https://alphasignal.ai/news/higgsfield-lets-claude-build-fully-editable-after-effects-projects",
   "lang": "EN",
   "desc": "Claude → Higgsfield MCP → 可編輯 AE 專案",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "project",
   "id": "r138",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude + Higgsfield MCP 指南",
   "url": "https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP",
   "lang": "EN",
   "desc": "鏡頭、鏡頭焦段、fps 指定、對嘴",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "official",
   "id": "r139",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Cinema Studio 4.0",
   "url": "https://higgsfield.ai/blog/cinema-studio-4-0",
   "lang": "EN",
   "desc": "虛擬攝影機機身、鏡頭、30+ 運鏡預設、可重複使用的 AI 角色",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "official",
   "cats": [
    "C",
    "E"
   ],
   "id": "r140",
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Soul ID",
   "url": "https://higgsfield.ai/creator-hub/help-center/ai-models/how-do-i-create-and-use-a-soul-id-character",
   "lang": "EN",
   "desc": "以 20–80 張照片訓練角色，跨模型保持一致",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "official",
   "id": "r141",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Popcorn 分鏡",
   "url": "https://higgsfield.ai/blog/AI-Tool-That-Allows-You-to-Replace-Faces-in-a-Movie-Scene",
   "lang": "EN",
   "desc": "以參考圖產生連續分鏡影格",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "official",
   "id": "r142",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "n8n：UGC 廣告 + 對嘴",
   "url": "https://n8n.io/workflows/10070-create-authentic-ugc-video-ads-with-gpt-4o-elevenlabs-and-wavespeed-lip-sync/",
   "lang": "EN",
   "desc": "配音與數位人",
   "labs": [
    "03"
   ],
   "partial": true,
   "kind": "project",
   "id": "r143",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Clastron：用 Codex 做 Landing Page",
   "url": "https://medium.com/@clastron/how-i-built-a-1k-quality-landing-page-with-codex-and-a-few-tools-1ecb983f2dca",
   "lang": "EN",
   "desc": "Codex 版案例",
   "labs": [
    "04"
   ],
   "partial": true,
   "kind": "project",
   "id": "r144",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Troy Scott：一晚做 Phaser 射擊遊戲",
   "url": "https://troyscott.ca/posts/building-2d-shooter-phaser-claude/",
   "lang": "EN",
   "desc": "工作坊規模",
   "labs": [
    "05"
   ],
   "partial": true,
   "kind": "project",
   "id": "r145",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "Higgsfield Games",
   "url": "https://higgsfield.ai/blog/Higgsfield-Games",
   "lang": "EN",
   "desc": "Game Studio 官方示範",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "project",
   "id": "r146",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "知乎：MCP 案例 Claude+Blender 全自動 3D 建模",
   "url": "https://zhuanlan.zhihu.com/p/31434985574",
   "lang": "ZH",
   "desc": "中文實測",
   "labs": [
    "06"
   ],
   "partial": true,
   "kind": "project",
   "id": "r147",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "知乎：做 AI 影片，先讓 Blender 把鏡頭演一遍",
   "url": "https://zhuanlan.zhihu.com/p/2063312464255756192",
   "lang": "ZH",
   "desc": "白模預演",
   "labs": [
    "11"
   ],
   "partial": true,
   "kind": "project",
   "id": "r148",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Intercom Fin",
   "url": "https://www.intercom.com/help/en/articles/12508017-fin-as-a-customer-agent-for-service-sales-and-more",
   "lang": "EN",
   "desc": "同一 Agent 延伸到 Service / Sales / Ecommerce，以 Procedures 執行業務流程",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "B"
   ],
   "id": "r149",
   "patterns": []
  },
  {
   "name": "OpenAI Agents SDK",
   "url": "https://openai.github.io/openai-agents-python/",
   "lang": "EN",
   "desc": "開發框架：Agents、Handoffs、Guardrails、Sessions、MCP",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "B"
   ],
   "id": "r150",
   "patterns": []
  },
  {
   "name": "Dify / Coze",
   "url": "https://docs.dify.ai/",
   "lang": "EN",
   "desc": "低程式碼對話與工作流平台",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "B"
   ],
   "id": "r151",
   "patterns": []
  },
  {
   "name": "n8n Agents",
   "url": "https://blog.n8n.io/introducing-n8n-agents/",
   "lang": "EN",
   "desc": "2026-09-25 推出（preview）：自然語言定義 Agent，工具可為 MCP / 整合 / workflow，支援人工核准",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "F"
   ],
   "id": "r152",
   "patterns": []
  },
  {
   "name": "Zapier Agents",
   "url": "https://zapier.com/agents",
   "lang": "EN",
   "desc": "連接 9,000+ App；另有 Zapier MCP",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "F"
   ],
   "id": "r153",
   "patterns": []
  },
  {
   "name": "Meshy",
   "url": "https://www.meshy.ai/mcp",
   "lang": "EN",
   "desc": "圖生 3D、自動綁骨（人形、四足）、500+ 動畫、官方 MCP",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "C",
    "E"
   ],
   "id": "r154",
   "patterns": []
  },
  {
   "name": "Descript Underlord",
   "url": "https://www.descript.com/underlord",
   "lang": "EN",
   "desc": "「agentic video co-editor」，文字剪輯介面中的批次編修",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "C",
    "E"
   ],
   "id": "r155",
   "patterns": []
  },
  {
   "name": "Adobe Premiere AI Assistant",
   "url": "https://news.adobe.com/news/2026/06/adobe-unveils-major-expansion",
   "lang": "EN",
   "desc": "2026-06 公開測試：整理素材、找訪談問題、組粗剪；2026-09 擴及 After Effects",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "C",
    "E"
   ],
   "id": "r156",
   "patterns": []
  },
  {
   "name": "Remotion Claude Code plugin",
   "url": "https://www.remotion.dev/docs/ai/claude-code-plugin",
   "lang": "EN",
   "desc": "官方 plugin，讓 Coding Agent 用 React 寫影片",
   "labs": [],
   "partial": false,
   "kind": "product",
   "cats": [
    "C",
    "E"
   ],
   "id": "r157",
   "patterns": []
  },
  {
   "name": "Model Context Protocol",
   "url": "https://modelcontextprotocol.io",
   "lang": "EN",
   "desc": "工具存取的開放標準",
   "labs": [],
   "partial": false,
   "kind": "tool",
   "id": "r158",
   "cats": [],
   "patterns": []
  },
  {
   "name": "browser-use",
   "url": "https://github.com/browser-use/browser-use",
   "lang": "EN",
   "desc": "Python 瀏覽器 Agent",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r159",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "name": "ComfyUI",
   "url": "https://github.com/comfyanonymous/ComfyUI",
   "lang": "EN",
   "desc": "節點式影像/影片/音訊/3D 生成",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r160",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "Remotion",
   "url": "https://github.com/remotion-dev/remotion",
   "lang": "EN",
   "desc": "用 React 寫程式剪輯影片",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r161",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "name": "n8n",
   "url": "https://github.com/n8n-io/n8n",
   "lang": "EN",
   "desc": "工作流自動化（可自架）",
   "labs": [
    "02",
    "07"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r162",
   "cats": [
    "A",
    "B",
    "F"
   ],
   "patterns": [
    "P2",
    "P4",
    "P5"
   ]
  },
  {
   "name": "Dify",
   "url": "https://github.com/langgenius/dify",
   "lang": "EN",
   "desc": "LLM 應用與工作流平台",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r163",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "name": "Ollama",
   "url": "https://github.com/ollama/ollama",
   "lang": "EN",
   "desc": "本地執行開源模型",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r164",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "name": "Phaser",
   "url": "https://github.com/phaserjs/phaser",
   "lang": "EN",
   "desc": "2D 網頁遊戲引擎",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r165",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "name": "Three.js",
   "url": "https://github.com/mrdoob/three.js",
   "lang": "EN",
   "desc": "網頁 3D",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r166",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Astro",
   "url": "https://github.com/withastro/astro",
   "lang": "EN",
   "desc": "內容型網站框架",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r167",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Anthropic Skills",
   "url": "https://github.com/anthropics/skills",
   "lang": "EN",
   "desc": "Claude 的技能套件（含 frontend-design）",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r168",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "name": "Claude Quickstarts",
   "url": "https://github.com/anthropics/claude-quickstarts",
   "lang": "EN",
   "desc": "官方範例：客服 Agent、Computer Use 等",
   "labs": [
    "02",
    "08"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r169",
   "cats": [
    "A",
    "B",
    "G"
   ],
   "patterns": [
    "P2",
    "P4",
    "P6"
   ]
  },
  {
   "name": "Claude Cookbooks",
   "url": "https://github.com/anthropics/claude-cookbooks",
   "lang": "EN",
   "desc": "官方範例：RAG、Contextual Retrieval",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r170",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "name": "OpenAI Agents SDK",
   "url": "https://github.com/openai/openai-agents-python",
   "lang": "EN",
   "desc": "Agent 框架",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "tool",
   "id": "r171",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r172",
   "name": "NotebookLM 完整教學！93%的人還不知道的8個隱藏用法，完勝ChatGPT| 分析報告 | 會議記錄 | 自動生成Podcast、教學影片",
   "url": "https://www.youtube.com/watch?v=zgWerTIynVA",
   "lang": "ZH-TW",
   "desc": "繁中入門，路線 A（零程式）直接照做",
   "see": "NotebookLM 的實務用法",
   "kol": "大有牧森 Austin Chou",
   "date": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r173",
   "name": "使用 Dify 打造 AI 客服知識庫 | 10 秒完成匯入！Embedding + Rerank + RAG 混合查詢全攻略 (附 CC 字幕)",
   "url": "https://www.youtube.com/watch?v=n64_cF4KGLY",
   "lang": "ZH-TW",
   "desc": "用繁中講清楚「檢索品質」這個本題核心難點",
   "see": "Excel 匯入、Embedding、Rerank、混合檢索",
   "kol": "凱文大叔AI程式設計教室",
   "date": "2024-12",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r174",
   "name": "NotebookLM 最全教程： AI 学习神器！  一款 AI 笔记本居然让我 1 分钟变身英文播客主播",
   "url": "https://www.youtube.com/watch?v=6a7Ei8rcnTQ",
   "lang": "ZH",
   "desc": "簡中圈最完整的 NotebookLM 教學",
   "see": "NotebookLM 完整功能",
   "kol": "回到Axton",
   "date": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r175",
   "name": "Learn 80% of NotebookLM in Under 13 Minutes!",
   "url": "https://www.youtube.com/watch?v=EOmgC3-hznM",
   "lang": "EN",
   "desc": "最快看懂「有來源依據的問答」長什麼樣",
   "see": "上傳來源、提問、附引用的回答、Audio Overview",
   "kol": "Jeff Su",
   "date": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r176",
   "name": "Getting started with projects in Claude.ai",
   "url": "https://www.youtube.com/watch?v=GJ5jTgcbRHA",
   "lang": "EN",
   "desc": "對應路線 A 的 Claude Projects 做法",
   "see": "建立 Project、上傳知識文件、撰寫指示",
   "kol": "Anthropic",
   "date": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r177",
   "name": "Getting started with research in Claude.ai",
   "url": "https://www.youtube.com/watch?v=R-KJgjIrh24",
   "lang": "EN",
   "desc": "延伸挑戰 Deep Research 的官方示範",
   "see": "多來源的 Research 模式",
   "kol": "Anthropic",
   "date": "2025-12-02",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r178",
   "name": "How to Create an RAG Chatbot AI Agent with n8n (No Code, Step-by-Step Tutorial)",
   "url": "https://www.youtube.com/watch?v=6w0MshwAqBQ",
   "lang": "EN",
   "desc": "零程式碼走完 RAG 全流程",
   "see": "PDF 放進向量資料庫、組 Agent、寫 prompt、測試",
   "kol": "Nate Herk",
   "date": "",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r179",
   "name": "Build Your First RAG Pipeline for Better RAG (step-by-step)",
   "url": "https://www.youtube.com/watch?v=5uw1wE6niGc",
   "lang": "EN",
   "desc": "規章會改版，這支教怎麼讓資料保持同步",
   "see": "Google Drive 同步到 Supabase，處理新增、更新、刪除文件",
   "kol": "Nate Herk",
   "date": "2025-10",
   "labs": [
    "01"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A"
   ],
   "patterns": [
    "P2"
   ]
  },
  {
   "id": "r180",
   "name": "🚀 n8n 串接 Line & Telegram 打造 AI Chatbot | 從零開始實作自動化微電商客服 (整合 Google Sheet / 多元訊息與選單鍵盤)",
   "url": "https://www.youtube.com/watch?v=l-7IKXu9qKg",
   "lang": "ZH-TW",
   "desc": "<strong>幾乎就是本題的原型</strong>",
   "see": "LINE + n8n 客服，Google Sheet 當商品資料，加上選單鍵盤",
   "kol": "HC AI說人話",
   "date": "2025-04",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r181",
   "name": "🤖 用n8n打造LINE官方AI客服機器人！(保姆級教學！) | 0程式基礎也能上手！",
   "url": "https://www.youtube.com/watch?v=v7ur0PFGd1w",
   "lang": "ZH-TW",
   "desc": "零基礎也能完成 LINE 串接",
   "see": "LINE 官方帳號 webhook 串到 n8n 與 LLM",
   "kol": "G股團長 金睿",
   "date": "2025-08",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r182",
   "name": "使用 Dify 免費打造進階 AI 客服系統 | RAG 設定、禁用字、自訂回答、內容優化完整教學 (附 CC 字幕)",
   "url": "https://www.youtube.com/watch?v=wb6wHNBIqgs",
   "lang": "ZH-TW",
   "desc": "補上客服需要的安全護欄（對應惡意測試）",
   "see": "禁用字、固定回答、RAG 設定",
   "kol": "凱文大叔AI程式設計教室",
   "date": "2024-12",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r183",
   "name": "n8n AI Agent Tutorial: Chatbot + Google Sheets Automation (2026)",
   "url": "https://www.youtube.com/watch?v=ENZddcRMOdw",
   "lang": "EN",
   "desc": "示範用 tool calling 寫入訂單",
   "see": "AI Agent 讀寫 Google Sheets",
   "kol": "Fayyaz Ahmed",
   "date": "2026-04",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r184",
   "name": "n8n Human in the Loop: Add Approval to AI Agents",
   "url": "https://www.youtube.com/watch?v=4wsV1GgIsrs",
   "lang": "EN",
   "desc": "「下單前確認」與轉人工的基礎",
   "see": "Agent 執行動作前先等人工核准",
   "kol": "Leon van Zyl",
   "date": "2025-02",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r185",
   "name": "n8n AI Chatbot — Monitor, Control & Reply as Human (Free Template + Full Guide)",
   "url": "https://www.youtube.com/watch?v=O-5dWAGCQ4E",
   "lang": "EN",
   "desc": "直接示範轉真人客服",
   "see": "Telegram Bot，真人可以接手回覆",
   "kol": "Shafik Alsalem",
   "date": "",
   "labs": [
    "02"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "B"
   ],
   "patterns": [
    "P2",
    "P4"
   ]
  },
  {
   "id": "r186",
   "name": "一根香腸也能拍出電影級廣告！Google Flow × Veo 3.1 AI影片實戰",
   "url": "https://www.youtube.com/watch?v=5d6RhJX3kGY",
   "lang": "ZH-TW",
   "desc": "<strong>最接近本題</strong>：普通小吃也能做出廣告",
   "see": "Google Flow + Veo 3.1 把一般食品拍成電影感廣告",
   "kol": "ROBERT WU",
   "date": "2026-09",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r187",
   "name": "【手把手教程】新手小白必看！手把手教你用AI做專業產品大片 | 如何用AI工具製作高端商業廣告片 | AI產品廣告片 完整製作全流程，產品一致",
   "url": "https://www.youtube.com/watch?v=jdub0xIGY98",
   "lang": "ZH",
   "desc": "處理本題最難的「商品一致性」",
   "see": "商品照到廣告的完整流程，每鏡商品保持一致",
   "kol": "Joy",
   "date": "2026-01",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r188",
   "name": "2026 AI廣告製作從0到成片｜腳本+角色+生成+剪輯，全流程教學",
   "url": "https://www.youtube.com/watch?v=UHNa0BKNlO0",
   "lang": "ZH",
   "desc": "與本題步驟一一對應",
   "see": "腳本 → 角色 → 生成 → 剪輯",
   "kol": "马尔科Mark",
   "date": "2026-04",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r189",
   "name": "[ 分享 ] 用 MoneyPrinterTurbo AI 自動化產生 YouTube 短影音 Shorts！我用 Mac 跟 Windows 做示範！",
   "url": "https://www.youtube.com/watch?v=vWBf5p--fr4",
   "lang": "ZH-TW",
   "desc": "路線 A（開源一條龍）的繁中操作示範",
   "see": "在 Mac 與 Windows 安裝執行 MoneyPrinterTurbo：主題 → 腳本 → 配音 → 字幕",
   "kol": "程式猿（AFA）",
   "date": "",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r190",
   "name": "【AI圖片+影片生成】AI影像製作終極整合？Higgsfield Popcorn 顛覆設計師、攝影師、剪輯師的未來神器！",
   "url": "https://www.youtube.com/watch?v=lFjDGXUGZzo",
   "lang": "ZH-TW",
   "desc": "繁中的 Higgsfield 說明",
   "see": "用 Higgsfield Popcorn 做品牌視覺",
   "kol": "XUAN 鉉創意",
   "date": "2025-11",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r191",
   "name": "The NEW Way to Create Cinematic AI Ads (Kling 3.0 + Nano Banana Pro)",
   "url": "https://www.youtube.com/watch?v=GdazHmK1lro",
   "lang": "EN",
   "desc": "乾淨的兩工具管線：先定圖、再動起來",
   "see": "Nano Banana Pro 靜態圖 → Kling 3.0 圖生影片 → 廣告",
   "kol": "Tao Prompts",
   "date": "2026-02",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r192",
   "name": "How To Make Realistic AI UGC (Tutorial)",
   "url": "https://www.youtube.com/watch?v=Sej-1olOCBc",
   "lang": "EN",
   "desc": "學會 UGC 廣告這種格式",
   "see": "製作 UGC 風格的見證式影片",
   "kol": "Rourke Heath",
   "date": "2025-11",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r193",
   "name": "Create Unlimited AI Videos with Claude + Higgsfield MCP (Full Tutorial)",
   "url": "https://www.youtube.com/watch?v=DE34Xps1wFE",
   "lang": "EN",
   "desc": "路線 B（Agent + MCP）的直接示範",
   "see": "把 Higgsfield MCP 接上 Claude，再用對話生成影片",
   "kol": "A Tech Creations",
   "date": "2026-07-22",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r194",
   "name": "How To Make A.I Ads With Higgsfield And Claude - Full Tutorial",
   "url": "https://www.youtube.com/watch?v=XIli9Ac-ECI",
   "lang": "EN",
   "desc": "最新的 Claude + Higgsfield 完整廣告流程",
   "see": "Claude 寫廣告概念，Higgsfield 生成",
   "kol": "Isaiah Garcia",
   "date": "2026-09",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r195",
   "name": "I Created 10+ Beauty Ads in 1 Hour — No Agency Needed",
   "url": "https://www.youtube.com/watch?v=fmgVm-fxPDM",
   "lang": "EN",
   "desc": "官方示範「一次多版、人只負責挑」",
   "see": "在 Higgsfield 批次產出多支產品廣告",
   "kol": "Higgsfield AI",
   "date": "2026-05",
   "labs": [
    "03"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "F"
   ],
   "patterns": [
    "P1",
    "P4"
   ]
  },
  {
   "id": "r196",
   "name": "還在羨慕別人用 AI 開發酷產品？Claude Code 保姆級教學讓你輕鬆體驗 Vibe Coding, 動動嘴就能做出 Anything！",
   "url": "https://www.youtube.com/watch?v=2pM-7fBXc_M",
   "lang": "ZH-TW",
   "desc": "零程式基礎的繁中入門起點",
   "see": "安裝 Claude Code，用對話做出一個產品",
   "kol": "PAPAYA 電腦教室",
   "date": "",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "id": "r197",
   "name": "超強的 AI 前端設計師來了！Claude Design 跟你聊聊天就把網站設計出來，而且還貼心地幫你一鍵上線！",
   "url": "https://www.youtube.com/watch?v=JxaI6HK2onc",
   "lang": "ZH-TW",
   "desc": "正好是本題「Brief → 網站 → 上線」的流程",
   "see": "和 Claude Design 對話設計網站，再一鍵上線",
   "kol": "PAPAYA 電腦教室",
   "date": "2026-04-26",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "id": "r198",
   "name": "【Cursor 教學】入門到實戰，用 AI Agent 自動化你的工作流！",
   "url": "https://www.youtube.com/watch?v=kVniOF36GEk",
   "lang": "ZH-TW",
   "desc": "想用 Cursor 路線的同學從這支開始",
   "see": "Cursor Agent 模式從入門到實戰",
   "kol": "工程師下班有約",
   "date": "",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "id": "r199",
   "name": "Build & Deploy Apps with Claude Code + Vercel in 15 Minutes!",
   "url": "https://www.youtube.com/watch?v=oA7ttvBWSXg",
   "lang": "EN",
   "desc": "用 15 分鐘補齊「部署」這一步",
   "see": "Claude Code 開發 → 推上 GitHub → Vercel 部署",
   "kol": "Josh Uses Ai",
   "date": "2026-01-02",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "id": "r200",
   "name": "Watch Me Build a $5,000 AI Website in 18 Minutes (Claude Code + Framer)",
   "url": "https://www.youtube.com/watch?v=CQabEZH-4-0",
   "lang": "EN",
   "desc": "對照 Coding Agent 與 Framer 外部 Agent 路線",
   "see": "Claude Code 與 Framer 搭配做商業等級網站",
   "kol": "Shaz Mathew",
   "date": "2026-04-02",
   "labs": [
    "04"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D"
   ],
   "patterns": [
    "P3"
   ]
  },
  {
   "id": "r201",
   "name": "【 Vibe Coding 快速上手 20+ 堂課 】01、認識 Vibe Coding：程式不再是拼邏輯，而是拼「感覺」",
   "url": "https://www.youtube.com/watch?v=GO7U-WR6TOQ",
   "lang": "ZH-TW",
   "desc": "中文背景知識；目前沒找到完整的中文做遊戲示範，以此替代",
   "see": "Vibe Coding 的概念與系列課程導覽",
   "kol": "STEAM 教育學習網（OXXOSTUDIO）",
   "date": "",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r202",
   "name": "Full Tutorial: Zero to Shipped Game with Claude Code in 20 Minutes",
   "url": "https://www.youtube.com/watch?v=247Z3jdw_hs",
   "lang": "EN",
   "desc": "20 分鐘從零到可玩，一堂課剛好看完",
   "see": "Claude Code 用 Phaser 做復古射擊遊戲（關卡、Boss、道具）並上線",
   "kol": "Peter Yang",
   "date": "",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r203",
   "name": "Vibe Code a Complete 2D Beat 'Em Up Game From Scratch - Full Tutorial (Codex, Phaser, Images 2.0)",
   "url": "https://www.youtube.com/watch?v=NwKZOn3O5oI",
   "lang": "EN",
   "desc": "唯一完整涵蓋「程式 + 生成美術音效」的示範，對應本題的 P3 + P1",
   "see": "Codex + Phaser，AI 生成背景、音效、音樂，加上畫面震動與粒子",
   "kol": "Chong-U（AI Oriented Dev）",
   "date": "2026-05",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r204",
   "name": "Vibe Coding 2D Games with Claude Code & Agent Skills (Full Tutorial)",
   "url": "https://www.youtube.com/watch?v=QPZCMd5REP8",
   "lang": "EN",
   "desc": "看 Skills 如何讓品質可重複",
   "see": "用 Claude Code Skills 做 2D 遊戲",
   "kol": "Chong-U（AI Oriented Dev）",
   "date": "2026-02",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r205",
   "name": "Ditch Unity: How I Vibe Code 3D Games With AI - Full Tutorial (Codex CLI, Claude Code, Cursor)",
   "url": "https://www.youtube.com/watch?v=fu7NZ3t3sLM",
   "lang": "EN",
   "desc": "Three.js 路線，附工具比較；也是 Lab 09 的前導",
   "see": "Three.js 3D 遊戲，比較 Codex CLI、Claude Code、Cursor",
   "kol": "Chong-U（AI Oriented Dev）",
   "date": "2026-02",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r206",
   "name": "Three.js Game Development & Claude Code is NUTS",
   "url": "https://www.youtube.com/watch?v=VG_HKh-zfOs",
   "lang": "EN",
   "desc": "補上設計師的視角",
   "see": "Claude Code 寫 Three.js 遊戲",
   "kol": "DesignCourse",
   "date": "2026-05",
   "labs": [
    "05"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "D"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r207",
   "name": "3D設計師實測Claude AI+Blender MCP！用來做自動室內設計可以嗎？Autobuilder Pro插件教學",
   "url": "https://www.youtube.com/watch?v=KrmIX7sRxv8",
   "lang": "ZH",
   "desc": "專業設計師判斷 AI 室內佈局到底能不能用，適合討論驗收標準",
   "see": "Claude 透過 Blender MCP 做室內佈局，搭配 Autobuilder Pro 外掛",
   "kol": "Neo Chan",
   "date": "2026-07-31",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r208",
   "name": "Claude 3 7 MCP：Blender 3D創作力無窮（for Mac 教學）",
   "url": "https://www.youtube.com/watch?v=W4ABKoQdSRk",
   "lang": "ZH-TW",
   "desc": "用 Mac 的同學照著做就能完成環境設定",
   "see": "安裝 Python/uv、設定 Claude、安裝 Blender 外掛",
   "kol": "數位敘事力期刊",
   "date": "2025-04-28",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r209",
   "name": "Design a Room using Blender-MCP and Claude AI demo",
   "url": "https://www.youtube.com/watch?v=wxgQmjm9wfM",
   "lang": "EN",
   "desc": "和本題任務幾乎相同",
   "see": "用提示詞一步步建出一個房間",
   "kol": "Data Science in your pocket",
   "date": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r210",
   "name": "Create 3D with Claude AI with Blender MCP - Full 26-min Tutorial",
   "url": "https://www.youtube.com/watch?v=lCyQ717DuzQ",
   "lang": "EN",
   "desc": "節奏適合初學者，從頭到尾一次看完",
   "see": "完整安裝，然後反覆迭代建構場景",
   "kol": "DesignCode",
   "date": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r211",
   "name": "Blender MCP and The Future Of Creative Tools - Siddharth Ahuja",
   "url": "https://www.youtube.com/watch?v=nnktgWtfJHE",
   "lang": "EN",
   "desc": "理解 MCP 能做到什麼、做不到什麼",
   "see": "blender-mcp 作者示範約 5 分鐘做出低多邊形場景，並談設計想法",
   "kol": "AI Engineer",
   "date": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r212",
   "name": "Generate 3D Objects with Spline AI",
   "url": "https://www.youtube.com/watch?v=Wyu-helznio",
   "lang": "EN",
   "desc": "Spline 路線（延伸挑戰）的官方示範",
   "see": "Spline AI 從文字或圖片生成物件並放進場景",
   "kol": "Spline",
   "date": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r213",
   "name": "Blender Model In React-Three-Fiber Scene With Physics",
   "url": "https://www.youtube.com/watch?v=XJRrhfh6oig",
   "lang": "EN",
   "desc": "補上「GLB 放上網頁」這最後一步",
   "see": "Blender 匯出 glTF，放進有物理的 R3F 場景",
   "kol": "Jacob Bolda",
   "date": "",
   "labs": [
    "06"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "D",
    "E"
   ],
   "patterns": [
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r214",
   "name": "學會 n8n 為你省下 80% 時間！(EP.1) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！",
   "url": "https://www.youtube.com/watch?v=r9mi3ZJIWbg",
   "lang": "ZH-TW",
   "desc": "繁中最貼近本題前半段的一支",
   "see": "觸發器、抓 RSS 新聞、合併資料流、加上 AI",
   "kol": "PAPAYA 電腦教室",
   "date": "",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r215",
   "name": "學會 n8n 為你省下 80% 時間！(EP.2) 這個 AI 助理只認你這個主人，不但使命必達且全天候待命！",
   "url": "https://www.youtube.com/watch?v=sRU6Y7DXkLI",
   "lang": "ZH-TW",
   "desc": "接在 EP.1 後面看，對應推播步驟",
   "see": "EP.1 續集，把助理延伸成 Bot",
   "kol": "PAPAYA 電腦教室",
   "date": "",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r216",
   "name": "n8n x AI：自動化新聞自媒體，輕鬆打造你的專屬新聞播報！",
   "url": "https://www.youtube.com/watch?v=Akr2f0iwU7M",
   "lang": "ZH-TW",
   "desc": "包含推播到 LINE 的部分",
   "see": "抓取、摘要，推播到 LINE 或 Gmail",
   "kol": "Darks",
   "date": "",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r217",
   "name": "n8n 零基礎 AI 自動化教學｜6 大實戰 Lab 打造 LLM 與 AI Agent 工作流｜EP-25 免費模板",
   "url": "https://www.youtube.com/watch?v=V-0UKJTqjSA",
   "lang": "ZH-TW",
   "desc": "熟悉分類與摘要用的 AI 節點",
   "see": "6 個 LLM 與 AI Agent 節點實作",
   "kol": "Alex Hsieh 相談室 | AI Brain",
   "date": "",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r218",
   "name": "n8n Quick Start Tutorial: Build Your First AI Agent [2026]",
   "url": "https://www.youtube.com/watch?v=GuaKeDS6UKU",
   "lang": "EN",
   "desc": "課前預習",
   "see": "官方 AI Agent 節點入門",
   "kol": "n8n",
   "date": "2026-02-13",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r219",
   "name": "n8n + Tavily + RSS = Your Ultimate Custom Newsletter! | Easy Tutorial",
   "url": "https://www.youtube.com/watch?v=rggz_jdvoJo",
   "lang": "EN",
   "desc": "從資料來源到摘要的完整流程",
   "see": "RSS + Tavily 搜尋，由 LLM 產出電子報",
   "kol": "Chase AI",
   "date": "2025-05-06",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r220",
   "name": "Watch Me Build a Multi-Agent Newsletter System in n8n (step-by-step)",
   "url": "https://www.youtube.com/watch?v=pxzo2lXhWJE",
   "lang": "EN",
   "desc": "進階：延伸挑戰改用 Agent 的參考",
   "see": "研究、規劃、撰寫、編輯四個 Agent 分工，附引用",
   "kol": "Nate Herk",
   "date": "2025-08-21",
   "labs": [
    "07"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "F"
   ],
   "patterns": [
    "P2",
    "P5"
   ]
  },
  {
   "id": "r221",
   "name": "Playwright MCP：看看 AI agents 如何控制您的瀏覽器",
   "url": "https://www.youtube.com/watch?v=jkRzlCCRKFI",
   "lang": "ZH-TW",
   "desc": "最完整的繁中 Playwright MCP 入門",
   "see": "安裝 Playwright MCP，看 Agent 操作瀏覽器",
   "kol": "Will 保哥",
   "date": "2025-03-29",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r222",
   "name": "複雜爬蟲掰掰！Playwright MCP + AI 輕鬆實現 PTT 圖片自由！",
   "url": "https://www.youtube.com/watch?v=3u7m4XPT8Zs",
   "lang": "ZH-TW",
   "desc": "在地網站案例，和本題抓校園活動最接近",
   "see": "Playwright MCP + Cline 抓 PTT 資料，附 GitHub",
   "kol": "沈弘哲",
   "date": "2025-06-14",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r223",
   "name": "什麼是 MCP（Model Context Protocol）｜小高白話科技",
   "url": "https://www.youtube.com/watch?v=MxsjS6CWy6Y",
   "lang": "ZH-TW",
   "desc": "完全新手先看這支建立概念",
   "see": "用 USB-C 比喻解釋 MCP",
   "kol": "小高白話科技",
   "date": "2026-03-24",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r224",
   "name": "Cursor + Playwright MCP 教學｜AI 自動化測試完整入門Cursor + Playwright MCP Tutorial | AI Automated Testing",
   "url": "https://www.youtube.com/watch?v=oOAE0mSADfQ",
   "lang": "ZH-TW",
   "desc": "Cursor 版本的設定方式",
   "see": "Cursor 搭配 Playwright MCP 操作真實網頁",
   "kol": "曾語 Chance Language",
   "date": "2026-04-10",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r225",
   "name": "一句话命令AI操作浏览器替我打工，Browser Use原理+实战",
   "url": "https://www.youtube.com/watch?v=rnitNByhJBE",
   "lang": "ZH",
   "desc": "browser-use 路線的中文入口",
   "see": "browser-use 原理解說加實際任務",
   "kol": "技術爬爬蝦 TechShrimp",
   "date": "",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r226",
   "name": "【AI小白入門】全網超🔥的MCP是什麼？怎麼用？概念+實戰講解｜讓AI能力瞬間翻倍，普通人也能用｜Cursor/Trae/Claude",
   "url": "https://www.youtube.com/watch?v=NCtc5lIV7pM",
   "lang": "ZH",
   "desc": "從概念一路到實際使用",
   "see": "MCP 概念，以及在 Cursor、Trae、Claude 中設定",
   "kol": "木子AI研究所",
   "date": "2025-05-02",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r227",
   "name": "Using Claude Code with Microsoft Playwright to Drive Your Browser",
   "url": "https://www.youtube.com/watch?v=-qZo8O7l1_w",
   "lang": "EN",
   "desc": "和本題工具組合完全相同",
   "see": "Claude Code + Playwright 操作瀏覽器",
   "kol": "Nick Sarafa",
   "date": "",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r228",
   "name": "BrowserUse: Open Source AI Agent CONTROLS Your Browser! 🚀 (Complete Tutorial)",
   "url": "https://www.youtube.com/watch?v=cPOGZApkbdk",
   "lang": "EN",
   "desc": "完整的英文安裝流程",
   "see": "從 Python 安裝到 browser-use Agent 運作",
   "kol": "Build Fast with AI",
   "date": "2025-01-23",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r229",
   "name": "Claude for Chrome brings AI where you're already working",
   "url": "https://www.youtube.com/watch?v=IypXvHej9eY",
   "lang": "EN",
   "desc": "官方示範，可討論「送出前人工確認」",
   "see": "Claude 在瀏覽器中點擊、填表",
   "kol": "Anthropic",
   "date": "2025-09-29",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r230",
   "name": "Claude NEW Computer Use in 6 Minutes",
   "url": "https://www.youtube.com/watch?v=ZUBJqLGKoZI",
   "lang": "EN",
   "desc": "6 分鐘快速理解截圖 → 動作迴圈",
   "see": "Computer Use 示範",
   "kol": "Developers Digest",
   "date": "2026-03-24",
   "labs": [
    "08"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "G"
   ],
   "patterns": [
    "P4",
    "P6"
   ]
  },
  {
   "id": "r231",
   "name": "教你用一張照片製作實體公仔！ #公仔製作 #3D列印 #Tripo3D AI",
   "url": "https://www.youtube.com/watch?v=9P_9nHDhJBI",
   "lang": "ZH-TW",
   "desc": "一個人走完「圖 → 3D → 實體」整條管線（延伸挑戰：3D 列印）",
   "see": "設計圖 → Tripo 轉 3D → 修比例 → 渲染 → 列印上色",
   "kol": "土豆醬tudojohn",
   "date": "",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r232",
   "name": "【模型製作】自己的公仔自己做!!  用AI圖片轉3D生成屬於自己的公仔",
   "url": "https://www.youtube.com/watch?v=ClXyNELkDXA",
   "lang": "ZH-TW",
   "desc": "台灣模型玩家的實測觀點",
   "see": "AI 圖片轉 3D 做公仔",
   "kol": "RealFun",
   "date": "",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r233",
   "name": "【AI 3D模型】最强AI生成3D模型，Hunyuan3D V2，效果超强，仅需6G显存！支持文字和图片生成3D模型，一键启动整合包! | Hunyuan3D | 3D模型 | Trellis",
   "url": "https://www.youtube.com/watch?v=5fJUHgFzuNc",
   "lang": "ZH",
   "desc": "免費路線，學校電腦也可能跑得動（路線 C）",
   "see": "安裝並使用本地混元 3D 整合包",
   "kol": "与AI同行",
   "date": "",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r234",
   "name": "强强联合！Hunyuan 3D 2.0 + GPT4o 生成超棒多视角渲染图 ComfyUI原生支持混元3D 低门槛3D建模 AI模型实测+插件对比",
   "url": "https://www.youtube.com/watch?v=wangw40w8oA",
   "lang": "ZH",
   "desc": "看懂為什麼多視角輸入（V2）能改善模型品質",
   "see": "先用 GPT-4o 產生多視角圖，再進 ComfyUI 的混元 3D；外掛比較",
   "kol": "氪學家",
   "date": "",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r235",
   "name": "How to create 3D charater in Tripo AI and Rig in Mixamo",
   "url": "https://www.youtube.com/watch?v=i6fusxS4KUs",
   "lang": "EN",
   "desc": "本題最核心的「模型 → 綁骨」交接",
   "see": "Tripo 生成角色 → Mixamo 自動綁骨",
   "kol": "Peace Growba",
   "date": "",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r236",
   "name": "The AI Rigging Tool That Blew My Mind (feat Tripo)",
   "url": "https://www.youtube.com/watch?v=mwrahXPj-HU",
   "lang": "EN",
   "desc": "平衡看待 AI 綁骨做對與做錯的地方",
   "see": "動畫師檢視 Tripo 自動綁骨",
   "kol": "Moby Motion",
   "date": "2026-08-08",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r237",
   "name": "How to rig a character in AccuRig and add Rigify controls in Blender 4.2 | Tutorial #Rigging",
   "url": "https://www.youtube.com/watch?v=0HIYozgL2E4",
   "lang": "EN",
   "desc": "免費的 AccuRig 路線",
   "see": "AccuRig 綁骨 → Blender Rigify",
   "kol": "Jen Abbott Creates",
   "date": "2024-11",
   "labs": [
    "09"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r238",
   "name": "AI 真的會剪片了！Claude Code 零基礎教學：丟影片、講人話，就能自動剪輯＋上字幕",
   "url": "https://www.youtube.com/watch?v=lP0rUMMIhKU",
   "lang": "ZH-TW",
   "desc": "<strong>本題路線 B 的零基礎繁中版</strong>",
   "see": "丟入影片、用白話下指令，Claude Code 自動剪輯並上字幕",
   "kol": "藍諾Eleanor Jiang",
   "date": "",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r239",
   "name": "Claude Code 自動幫我剪片：不會剪輯也能做(Codex也適用)",
   "url": "https://www.youtube.com/watch?v=3XcsdSQtdc8",
   "lang": "ZH-TW",
   "desc": "真實創作者的工作流，Codex 也適用",
   "see": "Claude Code / Codex 自動剪輯管線",
   "kol": "追日Gucci-AI效率革命聯盟",
   "date": "",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r240",
   "name": "AI 剪片神器：從素材到上字幕，自動化你的剪輯流程",
   "url": "https://www.youtube.com/watch?v=14XmF5aosjk",
   "lang": "ZH-TW",
   "desc": "最新的繁中自動剪輯示範",
   "see": "從原始素材到上字幕的自動化流程",
   "kol": "BPW 學習日誌",
   "date": "2026-08",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r241",
   "name": "告别传统剪辑！说几句话让Claude Code自动帮你剪完视频：停顿、水词、文字动画、字幕、转场、音乐一键完成",
   "url": "https://www.youtube.com/watch?v=65h-zjVuvmI",
   "lang": "ZH",
   "desc": "把 Claude 能處理的剪輯步驟逐項列出",
   "see": "去停頓與贅字、文字動畫、字幕、轉場、配樂",
   "kol": "Automate with Bonnie",
   "date": "",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r242",
   "name": "【零基礎攻略】AI剪輯將改變一切，剪映AI新手攻略，十大AI功能讓你的剪輯效率提升N倍｜剪映AI教學",
   "url": "https://www.youtube.com/watch?v=N7vS6XvZX_w",
   "lang": "ZH",
   "desc": "路線 C 與不寫程式同學的圖形介面選項",
   "see": "剪映的 10 個 AI 功能（自動字幕等）",
   "kol": "學長Ethan",
   "date": "2025",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r243",
   "name": "How I Fully Automated My Video Editing (Claude Code)",
   "url": "https://www.youtube.com/watch?v=XeTAlZiIWHE",
   "lang": "EN",
   "desc": "最關鍵的英文參考",
   "see": "Claude Code 剪輯管線處理真實素材",
   "kol": "Jason Cooperson",
   "date": "2026-07",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r244",
   "name": "Claude edited this entire video in ONE SHOT",
   "url": "https://www.youtube.com/watch?v=7MaARoS9o2s",
   "lang": "EN",
   "desc": "看全自動剪輯的成果長什麼樣，再討論哪裡該人工把關",
   "see": "Claude 用一次指令剪完整支影片",
   "kol": "Jason Cooperson",
   "date": "2026-09",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r245",
   "name": "Your Videos Don't Have to Look Amateur Anymore (Claude + Remotion)",
   "url": "https://www.youtube.com/watch?v=i5bZ-Be9cAQ",
   "lang": "EN",
   "desc": "延伸挑戰：用 Remotion 做片頭模板",
   "see": "Claude + Remotion 做動態圖形與標題",
   "kol": "vidIQ",
   "date": "2026-07",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r246",
   "name": "CapCut AI Clipper Tutorial: Turn Long Videos Into Engaging Shorts! (AI Video Editing)",
   "url": "https://www.youtube.com/watch?v=zwrDWaINaPY",
   "lang": "EN",
   "desc": "同一個任務的圖形介面版本",
   "see": "CapCut AI Clipper：長片 → 精華短片",
   "kol": "Artificial Quotient",
   "date": "2026-05",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r247",
   "name": "OpusClip Tutorial 2026: Turn Long Videos Into Viral Shorts With AI",
   "url": "https://www.youtube.com/watch?v=emLL4MSdiao",
   "lang": "EN",
   "desc": "商業產品基準，可和 Claude 路線比較",
   "see": "OpusClip 選精華、上字幕、轉直式",
   "kol": "Nexus Alex",
   "date": "",
   "labs": [
    "10"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "A",
    "C"
   ],
   "patterns": [
    "P2",
    "P3",
    "P4"
   ]
  },
  {
   "id": "r248",
   "name": "AI视频的终极答案！GPT-6 Astra × Blender × Seedance 2.5",
   "url": "https://www.youtube.com/watch?v=a3G69PTuT_M",
   "lang": "ZH",
   "desc": "和本題的管線完全相同，中文講解",
   "see": "AI 驅動 Blender 搭白模 → Seedance 參考影片模式",
   "kol": "DeepWhite",
   "date": "",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r249",
   "name": "Seedance 2.0 竟有導演大腦，目前最強 AI 影片生成！電影級運鏡+單素材、多素材，超穩角色一致性實測",
   "url": "https://www.youtube.com/watch?v=FQTbe7zV10Y",
   "lang": "ZH-TW",
   "desc": "台灣媒體的 Seedance 入門（沒有 Blender，先理解影片模型能力）",
   "see": "Seedance 運鏡與多參考圖角色一致性實測",
   "kol": "T客邦影新聞",
   "date": "",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r250",
   "name": "Seedance + Blender Unlocks Advanced AI Filmmaking Techniques",
   "url": "https://www.youtube.com/watch?v=miIDu04N7_4",
   "lang": "EN",
   "desc": "清楚示範白模畫面如何驅動 AI 渲染",
   "see": "Blender 設定鏡頭與走位 → Seedance 渲染",
   "kol": "Dan Kieft",
   "date": "",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r251",
   "name": "Control MULTIPLE CONSISTENT CHARACTERS + CAMERA with this FREE AI Workflow [Blender + ComfyUI]",
   "url": "https://www.youtube.com/watch?v=PZVs4lqG6LA",
   "lang": "EN",
   "desc": "透過 3D 維持多角色一致性（延伸挑戰）",
   "see": "Blender 擺好 3D 角色 → ComfyUI 分區渲染",
   "kol": "Mickmumpitz",
   "date": "",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r252",
   "name": "We Built a FREE AI Render Engine for CG & Facial Animation (ComfyUI + Blender)",
   "url": "https://www.youtube.com/watch?v=7J7hi-Hxpac",
   "lang": "EN",
   "desc": "免費本地路線（路線 B），不需付費影片 API",
   "see": "Blender 渲染通道 → 本地 ComfyUI 渲染，含臉部動畫",
   "kol": "Mickmumpitz",
   "date": "2026-06",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r253",
   "name": "Stop Wasting AI Credits! Higgsfield Blender Plugin Workflow Tutorial",
   "url": "https://www.youtube.com/watch?v=HRe7LxuyHy4",
   "lang": "EN",
   "desc": "一站式外掛路線（路線 C），並說明怎麼省點數",
   "see": "Higgsfield 外掛：先在 Blender 設好鏡頭再生成",
   "kol": "Aaron Randall",
   "date": "2026-09",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  },
  {
   "id": "r254",
   "name": "Wan 2.2 VACE in ComfyUI",
   "url": "https://www.youtube.com/watch?v=-gOhCVU_ogY",
   "lang": "EN",
   "desc": "Wan VACE 的官方參考",
   "see": "以深度控制影片的 VACE 工作流",
   "kol": "ComfyUI",
   "date": "",
   "labs": [
    "11"
   ],
   "partial": false,
   "kind": "video",
   "cats": [
    "C",
    "E"
   ],
   "patterns": [
    "P1",
    "P3",
    "P4",
    "P6"
   ]
  }
 ],
 "kols": [
  {
   "name": "PAPAYA 電腦教室",
   "url": "https://www.youtube.com/@papayaclass",
   "handle": "@papayaclass",
   "lang": "ZH-TW",
   "focus": "工具教學、Claude Code、Claude Design、n8n",
   "why": "台灣最知名的工具教學頻道，零基礎也跟得上",
   "labs": [
    "04",
    "07"
   ]
  },
  {
   "name": "Will 保哥",
   "url": "https://www.youtube.com/@Will_Huang",
   "handle": "@Will_Huang",
   "lang": "ZH-TW",
   "focus": "MCP、AI Agent、開發工具",
   "why": "台灣 Microsoft MVP，Playwright MCP 講得最完整",
   "labs": [
    "08"
   ]
  },
  {
   "name": "沈弘哲",
   "url": "https://www.youtube.com/@twtrubiks",
   "handle": "@twtrubiks",
   "lang": "ZH-TW",
   "focus": "Python / MCP 實作",
   "why": "用 PTT 等在地案例示範，實作性強，附 GitHub",
   "labs": [
    "08"
   ]
  },
  {
   "name": "工程師下班有約",
   "url": "https://www.youtube.com/@dlcorner",
   "handle": "@dlcorner",
   "lang": "ZH-TW",
   "focus": "Cursor、Agent 工作流",
   "why": "Cursor 從入門到實戰",
   "labs": [
    "04"
   ]
  },
  {
   "name": "STEAM 教育學習網（OXXOSTUDIO）",
   "url": "https://www.youtube.com/@steam.oxxostudio",
   "handle": "@steam.oxxostudio",
   "lang": "ZH-TW",
   "focus": "Vibe Coding 系列課程",
   "why": "20 多堂的結構化課程，適合教學場景",
   "labs": [
    "05"
   ]
  },
  {
   "name": "小高白話科技",
   "url": "https://www.youtube.com/@LittleGaussTech",
   "handle": "@LittleGaussTech",
   "lang": "ZH-TW",
   "focus": "白話科技解說",
   "why": "用生活比喻講清楚 MCP 這類概念",
   "labs": [
    "08"
   ]
  },
  {
   "name": "曾語 Chance Language",
   "url": "https://www.youtube.com/@chancelang3251",
   "handle": "@chancelang3251",
   "lang": "ZH-TW",
   "focus": "Cursor + Playwright MCP",
   "why": "中英雙語，從自動化測試角度切入",
   "labs": [
    "08"
   ]
  },
  {
   "name": "數位敘事力期刊",
   "url": "https://www.youtube.com/@Journal_of_Digital_Narrative",
   "handle": "@Journal_of_Digital_Narrative",
   "lang": "ZH-TW",
   "focus": "Claude MCP、數位敘事",
   "why": "少數繁中的 Blender MCP 安裝教學",
   "labs": [
    "06"
   ]
  },
  {
   "name": "土豆醬tudojohn",
   "url": "https://www.youtube.com/@tudojohn",
   "handle": "@tudojohn",
   "lang": "ZH-TW",
   "focus": "AI 公仔、3D 列印",
   "why": "一個人從一張圖做到印出來上色的實體公仔",
   "labs": [
    "09"
   ]
  },
  {
   "name": "RealFun",
   "url": "https://www.youtube.com/@RealFun3D",
   "handle": "@RealFun3D",
   "lang": "ZH-TW",
   "focus": "模型製作、AI 圖轉 3D",
   "why": "模型玩家實測多種圖生 3D 工具",
   "labs": [
    "09"
   ]
  },
  {
   "name": "Alex Hsieh 相談室 | AI Brain",
   "url": "https://www.youtube.com/@ai-brain-alex",
   "handle": "@ai-brain-alex",
   "lang": "ZH-TW",
   "focus": "n8n、LINE API",
   "why": "繁中 n8n 系列，每集附免費範本",
   "labs": [
    "07"
   ]
  },
  {
   "name": "HC AI說人話",
   "url": "https://www.youtube.com/@HC-AIChannel",
   "handle": "@HC-AIChannel",
   "lang": "ZH-TW",
   "focus": "n8n、RAG、LINE / Telegram Bot",
   "why": "繁中少數把 RAG 與客服機器人完整做一遍的頻道",
   "labs": [
    "02"
   ]
  },
  {
   "name": "凱文大叔AI程式設計教室",
   "url": "https://www.youtube.com/@pg-kt",
   "handle": "@pg-kt",
   "lang": "ZH-TW",
   "focus": "Dify 客服、RAG",
   "why": "Dify 知識庫客服系列，附 CC 字幕",
   "labs": [
    "01",
    "02"
   ]
  },
  {
   "name": "G股團長 金睿",
   "url": "https://www.youtube.com/@ginray",
   "handle": "@ginray",
   "lang": "ZH-TW",
   "focus": "n8n + LINE 官方帳號",
   "why": "保姆級 LINE 客服教學",
   "labs": [
    "02"
   ]
  },
  {
   "name": "大有牧森 Austin Chou",
   "url": "https://www.youtube.com/@austinchou888",
   "handle": "@austinchou888",
   "lang": "ZH-TW",
   "focus": "NotebookLM",
   "why": "NotebookLM 的實務用法",
   "labs": [
    "01"
   ]
  },
  {
   "name": "Darks",
   "url": "https://www.youtube.com/@darkschen",
   "handle": "@darkschen",
   "lang": "ZH-TW",
   "focus": "n8n 新聞自動化",
   "why": "做過新聞摘要推播到 LINE",
   "labs": [
    "07"
   ]
  },
  {
   "name": "劉彥廷 Ernie Liu",
   "url": "https://www.youtube.com/@ernie-liu",
   "handle": "@ernie-liu",
   "lang": "ZH-TW",
   "focus": "n8n 完整課程",
   "why": "由淺入深的長篇教學",
   "labs": []
  },
  {
   "name": "藍諾Eleanor Jiang",
   "url": "https://www.youtube.com/@EleanorJiang",
   "handle": "@EleanorJiang",
   "lang": "ZH-TW",
   "focus": "Claude Code 新手教學",
   "why": "台灣創作者，零基礎教 Claude Code 剪片",
   "labs": [
    "10"
   ]
  },
  {
   "name": "追日Gucci-AI效率革命聯盟",
   "url": "https://www.youtube.com/@GuccixAI",
   "handle": "@GuccixAI",
   "lang": "ZH-TW",
   "focus": "Claude Code / Codex 自動化",
   "why": "公開自己實際使用的自動剪輯管線",
   "labs": [
    "10"
   ]
  },
  {
   "name": "XUAN 鉉創意",
   "url": "https://www.youtube.com/@xuancrtv",
   "handle": "@xuancrtv",
   "lang": "ZH-TW",
   "focus": "品牌用 AI 影像工具",
   "why": "從品牌行銷角度評測 Higgsfield 等工具",
   "labs": [
    "03"
   ]
  },
  {
   "name": "技術爬爬蝦 TechShrimp",
   "url": "https://www.youtube.com/@tech-shrimp",
   "handle": "@tech-shrimp",
   "lang": "ZH",
   "focus": "開源 AI 工具實戰",
   "why": "同時講原理與實作，browser-use 解說清楚",
   "labs": [
    "08"
   ]
  },
  {
   "name": "木子AI研究所",
   "url": "https://www.youtube.com/@muziailab",
   "handle": "@muziailab",
   "lang": "ZH",
   "focus": "MCP 入門",
   "why": "概念加實作，適合完全新手",
   "labs": [
    "08"
   ]
  },
  {
   "name": "Neo Chan",
   "url": "https://www.youtube.com/@neochanyl",
   "handle": "@neochanyl",
   "lang": "ZH",
   "focus": "AI 室內與 3D 設計",
   "why": "專業 3D 設計師用真實室內案件測試 Claude + Blender MCP",
   "labs": [
    "06"
   ]
  },
  {
   "name": "氪學家",
   "url": "https://www.youtube.com/@kexue",
   "handle": "@kexue",
   "lang": "ZH",
   "focus": "Hunyuan3D、ComfyUI",
   "why": "混元 3D 外掛的實測與比較",
   "labs": [
    "09"
   ]
  },
  {
   "name": "与AI同行",
   "url": "https://www.youtube.com/@walkingwithai1996",
   "handle": "@walkingwithai1996",
   "lang": "ZH",
   "focus": "本地部署 AI 工具",
   "why": "低顯存也能跑的混元 3D 整合包",
   "labs": [
    "09"
   ]
  },
  {
   "name": "DeepWhite",
   "url": "https://www.youtube.com/@DeepWhiteAI",
   "handle": "@DeepWhiteAI",
   "lang": "ZH",
   "focus": "Blender 白模 → 影片模型",
   "why": "正好是「白模預演變 AI 影片」這個主題",
   "labs": [
    "11"
   ]
  },
  {
   "name": "回到Axton",
   "url": "https://www.youtube.com/@axtonliu",
   "handle": "@axtonliu",
   "lang": "ZH",
   "focus": "NotebookLM、AI 工具評測",
   "why": "簡中圈品質很高的工具評測",
   "labs": [
    "01"
   ]
  },
  {
   "name": "马尔科Mark",
   "url": "https://www.youtube.com/@%E9%A9%AC%E5%B0%94%E7%A7%91Mark",
   "handle": "@马尔科Mark",
   "lang": "ZH",
   "focus": "AI 廣告完整製作",
   "why": "一支影片走完腳本到成片",
   "labs": [
    "03"
   ]
  },
  {
   "name": "Chong-U（AI Oriented Dev）",
   "url": "https://www.youtube.com/@AIOriented",
   "handle": "@AIOriented",
   "lang": "EN",
   "focus": "Vibe Coding 做遊戲",
   "why": "用 AI 做遊戲最完整的頻道，涵蓋 2D、3D 與生成美術音效",
   "labs": [
    "05"
   ]
  },
  {
   "name": "Peter Yang",
   "url": "https://www.youtube.com/@PeterYangYT",
   "handle": "@PeterYangYT",
   "lang": "EN",
   "focus": "產品人用 Claude Code",
   "why": "短時間從零做到上線的完整示範",
   "labs": [
    "05"
   ]
  },
  {
   "name": "Anthropic",
   "url": "https://www.youtube.com/@anthropic-ai",
   "handle": "@anthropic-ai",
   "lang": "EN",
   "focus": "官方發表",
   "why": "Claude Projects、Research、Computer Use、Claude for Chrome 等官方示範",
   "labs": [
    "01",
    "08"
   ]
  },
  {
   "name": "Shaz Mathew",
   "url": "https://www.youtube.com/@theShazM",
   "handle": "@theShazM",
   "lang": "EN",
   "focus": "Claude Code + Framer 網站",
   "why": "可以對照 Coding Agent 與設計工具兩條路線",
   "labs": [
    "04"
   ]
  },
  {
   "name": "Josh Uses Ai",
   "url": "https://www.youtube.com/@JoshUsesAi",
   "handle": "@JoshUsesAi",
   "lang": "EN",
   "focus": "Claude Code 部署",
   "why": "短而聚焦的部署教學",
   "labs": [
    "04"
   ]
  },
  {
   "name": "DesignCourse",
   "url": "https://www.youtube.com/@DesignCourse",
   "handle": "@DesignCourse",
   "lang": "EN",
   "focus": "前端與 Three.js",
   "why": "設計師視角看 AI 做 3D 遊戲",
   "labs": [
    "05"
   ]
  },
  {
   "name": "Developers Digest",
   "url": "https://www.youtube.com/@DevelopersDigest",
   "handle": "@DevelopersDigest",
   "lang": "EN",
   "focus": "AI 開發新功能速覽",
   "why": "幾分鐘看懂一個新功能",
   "labs": [
    "08"
   ]
  },
  {
   "name": "Mickmumpitz",
   "url": "https://www.youtube.com/@mickmumpitz",
   "handle": "@mickmumpitz",
   "lang": "EN",
   "focus": "Blender + ComfyUI 影片管線",
   "why": "提供免費工作流檔案，用 3D 解決角色一致性",
   "labs": [
    "11"
   ]
  },
  {
   "name": "Dan Kieft",
   "url": "https://www.youtube.com/@Dankieft",
   "handle": "@Dankieft",
   "lang": "EN",
   "focus": "AI 電影製作",
   "why": "示範用 Blender 當 Seedance 的控制層",
   "labs": [
    "11"
   ]
  },
  {
   "name": "AI Engineer",
   "url": "https://www.youtube.com/@aiDotEngineer",
   "handle": "@aiDotEngineer",
   "lang": "EN",
   "focus": "工程演講（含 blender-mcp 作者）",
   "why": "聽 blender-mcp 作者本人講設計理由",
   "labs": [
    "06"
   ]
  },
  {
   "name": "DesignCode",
   "url": "https://www.youtube.com/@DesignCodeTeam",
   "handle": "@DesignCodeTeam",
   "lang": "EN",
   "focus": "設計與程式教學",
   "why": "節奏清楚的完整 Blender MCP 教學",
   "labs": [
    "06"
   ]
  },
  {
   "name": "Moby Motion",
   "url": "https://www.youtube.com/@MobyMotion",
   "handle": "@MobyMotion",
   "lang": "EN",
   "focus": "動畫、綁骨",
   "why": "動畫師角度檢視 AI 自動綁骨的優缺點",
   "labs": [
    "09"
   ]
  },
  {
   "name": "ComfyUI",
   "url": "https://www.youtube.com/@comfyorg",
   "handle": "@comfyorg",
   "lang": "EN",
   "focus": "ComfyUI 官方",
   "why": "Wan VACE 等工作流的官方說明",
   "labs": [
    "11"
   ]
  },
  {
   "name": "Nate Herk",
   "url": "https://www.youtube.com/@nateherk",
   "handle": "@nateherk",
   "lang": "EN",
   "focus": "n8n Agent、RAG",
   "why": "每週都有從零實作的 n8n 教學，步驟清楚並附免費範本",
   "labs": [
    "01",
    "07"
   ]
  },
  {
   "name": "Cole Medin",
   "url": "https://www.youtube.com/@ColeMedin",
   "handle": "@ColeMedin",
   "lang": "EN",
   "focus": "n8n RAG Agent、本地 AI",
   "why": "他的 RAG Agent 範本常被當成業界參考",
   "labs": []
  },
  {
   "name": "Leon van Zyl",
   "url": "https://www.youtube.com/@leonvanzyl",
   "handle": "@leonvanzyl",
   "lang": "EN",
   "focus": "n8n、Flowise、聊天機器人",
   "why": "短而清楚，涵蓋網站嵌入與人工審核",
   "labs": [
    "02"
   ]
  },
  {
   "name": "Jeff Su",
   "url": "https://www.youtube.com/@JeffSu",
   "handle": "@JeffSu",
   "lang": "EN",
   "focus": "NotebookLM、職場 AI",
   "why": "十幾分鐘講完一個工具八成的用法",
   "labs": [
    "01"
   ]
  },
  {
   "name": "Liam Ottley",
   "url": "https://www.youtube.com/@LiamOttley",
   "handle": "@LiamOttley",
   "lang": "EN",
   "focus": "客服與業務 Agent",
   "why": "把 Agent 放進真實商業情境討論",
   "labs": []
  },
  {
   "name": "n8n",
   "url": "https://www.youtube.com/@n8n-io",
   "handle": "@n8n-io",
   "lang": "EN",
   "focus": "n8n 官方",
   "why": "官方入門教學與 AI Agent 節點說明",
   "labs": [
    "07"
   ]
  },
  {
   "name": "Chase AI",
   "url": "",
   "handle": "",
   "lang": "EN",
   "focus": "n8n 電子報與內容自動化",
   "why": "示範 RSS + 搜尋 + LLM 產出電子報",
   "labs": [
    "07"
   ]
  },
  {
   "name": "Tao Prompts",
   "url": "https://www.youtube.com/@taoprompts",
   "handle": "@taoprompts",
   "lang": "EN",
   "focus": "Kling / Veo / Nano Banana 廣告流程",
   "why": "每有新模型就更新，從 prompt 到廣告講得清楚",
   "labs": [
    "03"
   ]
  },
  {
   "name": "Rourke Heath",
   "url": "https://www.youtube.com/@RourkeHeath",
   "handle": "@RourkeHeath",
   "lang": "EN",
   "focus": "AI UGC 廣告、Veo",
   "why": "示範小店最常用的 UGC 見證式廣告格式",
   "labs": [
    "03"
   ]
  },
  {
   "name": "Higgsfield AI",
   "url": "https://www.youtube.com/@HiggsfieldAI",
   "handle": "@HiggsfieldAI",
   "lang": "EN",
   "focus": "Higgsfield 官方",
   "why": "產品廣告、Marketing Studio 等官方示範",
   "labs": [
    "03"
   ]
  },
  {
   "name": "Theoretically Media",
   "url": "https://www.youtube.com/@TheoreticallyMedia",
   "handle": "@TheoreticallyMedia",
   "lang": "EN",
   "focus": "跨工具 AI 影片流程",
   "why": "不綁特定工具，適合用來選模型",
   "labs": []
  },
  {
   "name": "Curious Refuge",
   "url": "https://www.youtube.com/@curiousrefuge",
   "handle": "@curiousrefuge",
   "lang": "EN",
   "focus": "AI 廣告與電影製作",
   "why": "AI 影像製作最有代表性的課程品牌",
   "labs": []
  },
  {
   "name": "Jason Cooperson",
   "url": "https://www.youtube.com/@jasoncooperson",
   "handle": "@jasoncooperson",
   "lang": "EN",
   "focus": "Claude Code 剪輯",
   "why": "用真實素材完整示範 Claude 剪片",
   "labs": [
    "10"
   ]
  }
 ]
};
