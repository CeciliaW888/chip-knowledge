# Book Index —《芯片战争》余盛 (2021, 华中科技大学出版社)

A user-owned, high-trust industry history. EPUB at `reference/芯片战争 (余盛) (Z-Library).epub`.
Especially strong on the **Asian/Chinese** story, **ASML's origin**, the **foundry wars**, and **memory** — the areas English sources skim. Use it to ground lessons historically (how moats were actually won = how durable they are).

> To extract a chapter's text:
> `PYTHONIOENCODING=utf-8 PYTHONUTF8=1 python` → `zipfile.ZipFile(epub).read('OEBPS/Text/<file>').decode('utf-8')`, then strip tags.

## 上部 · 全球芯风云 (Global chip history)

| File | Chapter | Grounds which lesson(s) |
|---|---|---|
| 020010 | 1 · 从晶体管到芯片 — transistor → IC (TI, Fairchild) | origins / "what is a chip" |
| 020020 | 2 · 存储器公司英特尔 — Intel, Moore's Law, DRAM, Japan VLSI | Intel, memory, the cycle |
| 020030 | 3 · 英特尔向CPU转型 — US–Japan chip war, Intel→CPU, AMD/IBM | cycle, US–Japan war |
| 020040 | 4 · 存储器新势力 — Micron, NAND flash, Samsung memory, Taiwan DRAM | **memory = commodity moat** |
| 020050 | 5 · 丑小鸭阿斯麦尔 — **ASML origin** (Philips litho, founding, AMD breakthrough) | **L2 (process) · L3 (ASML)** |
| 020060 | 6 · 芯片食物链 — **the "chip food chain" (value chain)**, TSMC founding, Zeiss optics | **L1 (value chain) · L3 (ASML/Zeiss)** |
| 020070 | 7 · 美国完胜海湾战争 — Korea beats Japan in memory, USSR, China's early efforts | geopolitics |
| 020080 | 8 · 亚洲金融危机 — Samsung's US-style success, Hynix, Taiwan DRAM | cycle, Samsung moat |
| 020090 | 9 · 晶圆代工群雄逐鹿 — **foundry wars** (TSMC vs UMC), GlobalFoundries, immersion litho (dry vs wet) | **foundry moat · ASML** |
| 020100 | 10 · 全球金融风暴大洗牌 — Elpida, memory bust, DRAM → 3 players | **the cycle · memory consolidation** |
| 020110 | 11 · 日本芯片的黄昏 — Toshiba sells flash, Japan's decline | why incumbents lose moats |

## 下部 · 中国芯势力 (China's chip rise)

| File | Chapter | Grounds which lesson(s) |
|---|---|---|
| 030120 | 12 · "909工程" — Hua Hong NEC | China supply chain |
| 030130 | 13 · 设计中国芯 — domestic CPU, Spreadtrum, Hanxin fraud | China design |
| 030140 | 14 · 张江的中芯国际 — **SMIC founding** (Richard Chang) | SMIC |
| 030150 | 15 · 中国芯片的至暗时刻 — SMIC loses TSMC lawsuit | IP moats / litigation |
| 030160 | 16 · 十年坎坷芯路 — Tsinghua Unigroup / Unisoc | China consolidation |
| 030170 | 17 · 中国大陆存储器突破 — **YMTC (长江存储), CXMT (长鑫), Jinhua** | China memory |
| 030180 | 18 · 越过28纳米节点 — **3D (FinFET) transistor, TSMC vs Samsung, end of Moore's Law** | **nodes · foundry moat** |
| 030190 | 19 · 极紫外线光刻难题 — **EUV LLC, EUV machine arrives, China can't get one** | **L3 (ASML/EUV) · export controls** |
| 030200 | 20 · 被特朗普打压的中国芯片 — SMIC 7nm, US–China gap, politics & capital | **geopolitics & moats** |
| 030210 | 21 · 处理器的新战场 — **ARM rise, Lisa Su's AMD, Nvidia vs AMD** | **fabless moats · ARM/x86** |
| 030220 | 22 · 云计算与人工智能 — **cloud wars, datacenter CPUs, AIoT** | **AI compute demand** |
| 040000 | 尾声 — US chip anxiety | synthesis |
| 050000 | 主要参考书籍 — bibliography (for further sources) | resource mining |

**Caveat:** published 2021 — written from a Chinese vantage point. Treat its framing (esp. geopolitics) as one informed perspective; cross-check current figures against [[RESOURCES]] (SemiAnalysis, SIA). For *history and structure* it is reliable and rich.
