// Daily AI Briefing — running feed data. Each run APPENDS new items (dedupe by id, keep ~30 days).
window.FEED = [
 {
  "id": "2026-06-22-visa-agentic-uae",
  "date": "2026-06-22",
  "cat": "UAE & Middle East",
  "title": "Visa onboards UAE banks to agent commerce",
  "summary": "Visa's 'Agentic Ready' programme has signed up ADCB, ADIB, Emirates NBD, Emirates Islamic, Mashreq, Tabby, Wio and Ziina to let AI agents initiate transactions in a controlled production environment — ~60% of UAE businesses say they're actively exploring agentic commerce.",
  "src": "Zawya / Visa",
  "url": "https://www.zawya.com/en/business/banking-and-insurance/visa-launches-agentic-ready-programme-in-uae-mwbub6lj"
 },
 {
  "id": "2026-06-22-trump-frontier-order",
  "date": "2026-06-22",
  "cat": "Worth a Glance",
  "title": "US wants 30-day look before model release",
  "summary": "Trump's 2 Jun executive order asks frontier labs to voluntarily give the US government up to 30 days of pre-release access to 'covered frontier models' for cyber-capability evaluation — softer than the original 90-day draft, with no mandatory licensing.",
  "src": "CNBC / White House",
  "url": "https://www.cnbc.com/2026/06/02/trump-executive-order-ai.html"
 },
 {
  "id": "2026-06-22-stc-humain-extension",
  "date": "2026-06-22",
  "cat": "UAE & Middle East",
  "title": "Saudi stc + HUMAIN extend AI DC deal",
  "summary": "Saudi Telecom (stc) and PIF-backed HUMAIN extended their AI data-centre JV MoU by six months (Tadawul filing 18 Jun), buying time to finalise the 1GW (250MW initial) venture in which HUMAIN holds 51% and stc 49% — built through stc's center3 subsidiary.",
  "src": "Arab News",
  "url": "https://www.arabnews.com/node/2647674/business-economy"
 },
 {
  "id": "2026-06-22-spacex-cursor-60b",
  "date": "2026-06-22",
  "cat": "Top AI News",
  "title": "SpaceX buys Cursor for $60B all-stock",
  "summary": "SpaceX signed a binding merger to acquire AI code editor Cursor at $60B (16 Jun) — the largest acquisition ever of a VC-backed startup; Cursor's ARR grew from ~$100M in early 2025 to ~$4B by Jun 2026, with deployment across 64% of the Fortune 500.",
  "src": "CNBC / Bloomberg",
  "url": "https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html"
 },
 {
  "id": "2026-06-22-shazeer-openai",
  "date": "2026-06-22",
  "cat": "Top AI News",
  "title": "Gemini co-lead Shazeer jumps to OpenAI",
  "summary": "Noam Shazeer — co-lead of Gemini and co-author of the 2017 'Attention Is All You Need' transformer paper — is leaving Google for OpenAI (18 Jun), only two years after Google paid ~$2.7B to bring him back from CharacterAI.",
  "src": "CNBC",
  "url": "https://www.cnbc.com/2026/06/18/google-gemini-co-lead-noam-shazeer-leaves-for-openai.html"
 },
 {
  "id": "2026-06-22-pentagon-multi-vendor",
  "date": "2026-06-22",
  "cat": "Enterprise & Banking AI",
  "title": "Pentagon moves AI work off Anthropic",
  "summary": "The Pentagon has shifted at least two-thirds of its AI workload away from Anthropic to OpenAI, Google and Microsoft after a use-policy dispute, formalising a multi-vendor strategy across classified networks — a reminder that single-vendor AI is now a procurement risk for any large enterprise.",
  "src": "Federal News Network / Wikipedia",
  "url": "https://en.wikipedia.org/wiki/Anthropic%E2%80%93United_States_Department_of_Defense_dispute"
 },
 {
  "id": "2026-06-22-jumper-anthropic",
  "date": "2026-06-22",
  "cat": "Top AI News",
  "title": "Nobel laureate Jumper joins Anthropic",
  "summary": "John Jumper — 2024 Nobel chemistry laureate and co-creator of AlphaFold — announced on 19 Jun he is leaving Google DeepMind after nearly nine years to join Anthropic, deepening Anthropic's life-sciences push.",
  "src": "TheNextWeb / TechTimes",
  "url": "https://thenextweb.com/news/john-jumper-nobel-deepmind-leaves-anthropic-alphafold"
 },
 {
  "id": "2026-06-22-anthropic-seoul-naver",
  "date": "2026-06-22",
  "cat": "Top AI News",
  "title": "NAVER goes all-in on Claude Code",
  "summary": "At its 17 Jun Seoul opening (third APAC office after Tokyo and Bengaluru), Anthropic disclosed NAVER is deploying Claude Code across its entire engineering org; Samsung SDS is rolling Claude across Samsung Electronics; LG CNS across LG Group.",
  "src": "Anthropic",
  "url": "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem"
 },
 {
  "id": "2026-06-22-anthropic-korea-mou",
  "date": "2026-06-22",
  "cat": "Worth a Glance",
  "title": "Anthropic signs Korea AI-safety MOU",
  "summary": "Anthropic signed an MOU with Korea's Ministry of Science and ICT on AI safety (19 Jun) and is giving 60 researchers at KAIST, Korea University, Yonsei and POSTECH free Claude access — even as US export rules still restrict Korean access to its top models.",
  "src": "TechTimes",
  "url": "https://www.techtimes.com/articles/318637/20260619/anthropic-opens-its-seoul-office-even-us-export-ban-cuts-korean-access-its-top-models.htm"
 },
 {
  "id": "2026-06-19-tml-interaction",
  "date": "2026-06-19",
  "cat": "Worth a Glance",
  "title": "An AI that listens while it talks",
  "summary": "Mira Murati's Thinking Machines (ex-OpenAI CTO) shipped TML-Interaction-Small (276B MoE, 12B active) — processes audio/video/text in 200ms chunks instead of turn-taking, replacing the 'speak then wait' model used by voice assistants today.",
  "src": "Thinking Machines Lab",
  "url": "https://thinkingmachines.ai/blog/interaction-models/"
 },
 {
  "id": "2026-06-19-stargate-uae-q3",
  "date": "2026-06-19",
  "cat": "UAE & Middle East",
  "title": "Stargate UAE: first 200MW lands Q3",
  "summary": "G42's update confirms the first 200MW block of Stargate UAE — OpenAI, Oracle, NVIDIA, Cisco, SoftBank, $30B+, 1GW total in Abu Dhabi — is on track for Q3 2026 delivery, the largest AI data-centre campus outside the US.",
  "src": "G42",
  "url": "https://www.prnewswire.com/news-releases/g42-provides-update-on-construction-of-stargate-uae-ai-infrastructure-cluster-302586430.html"
 },
 {
  "id": "2026-06-19-stanford-hai-88pct",
  "date": "2026-06-19",
  "cat": "Worth a Glance",
  "title": "88% use AI, but few use agents",
  "summary": "Stanford HAI's 2026 AI Index: 88% of organisations use AI in at least one function, but agent deployment is still in single digits across nearly every business function — adoption is wide, autonomy is shallow.",
  "src": "Stanford HAI",
  "url": "https://hai.stanford.edu/ai-index/2026-ai-index-report"
 },
 {
  "id": "2026-06-19-ms-mcp-agents",
  "date": "2026-06-19",
  "cat": "Enterprise & Banking AI",
  "title": "Morgan Stanley opens its pipes to outside agents",
  "summary": "Morgan Stanley is exposing ShareWorks and Equity Edge ($1.2T in stock-plan assets, 3,400 clients) to clients' own AI agents via MCP (Anthropic's open standard) — the first major US bank to let external agents call core platforms directly.",
  "src": "CNBC",
  "url": "https://www.cnbc.com/2026/06/03/ai-agents-morgan-stanley-wealth-management-funnel.html"
 },
 {
  "id": "2026-06-19-jpm-hour-agents",
  "date": "2026-06-19",
  "cat": "Enterprise & Banking AI",
  "title": "JPMorgan: agents that run for hours",
  "summary": "Chief analytics officer Derek Waldron told CNBC (9 Jun) JPMorgan will deploy long-running autonomous agents this year that can work an hour or two on a single goal — overnight market screening already drove a 20% gross-sales lift in private banking.",
  "src": "CNBC",
  "url": "https://www.cnbc.com/2026/06/09/jpmorgan-chase-ai-agents.html"
 },
 {
  "id": "2026-06-19-gartner-demote",
  "date": "2026-06-19",
  "cat": "Enterprise & Banking AI",
  "title": "Gartner: many agents will be downgraded",
  "summary": "Gartner (26 May) said 40% of enterprises will demote or decommission autonomous agents by 2027 because they apply one-size-fits-all governance — recommending tiered controls by autonomy level instead.",
  "src": "Gartner",
  "url": "https://www.gartner.com/en/newsroom/press-releases/2026-05-26-gartner-says-applying-uniform-governance-across-ai-agents-will-lead-to-enterprise-ai-agent-failure"
 },
 {
  "id": "2026-06-19-g42-cerebras-india",
  "date": "2026-06-19",
  "cat": "UAE & Middle East",
  "title": "G42 to deploy 8 exaflops in India",
  "summary": "G42 signed a deal (15 May) to build an 8-exaflop supercomputer in India using 64 Cerebras systems — a sovereign-AI play that bypasses Google/Microsoft and gives Abu Dhabi a stake in India's AI base.",
  "src": "G42",
  "url": "https://www.g42.ai/resources/news/uae-deploy-8-exaflop-supercomputer-india-strengthen-local-sovereign-ai-infrastructure"
 },
 {
  "id": "2026-06-19-fable5-launches",
  "date": "2026-06-19",
  "cat": "Top AI News",
  "title": "Claude Fable 5 launches at #1",
  "summary": "Anthropic released Claude Fable 5 on 9 Jun — first public Mythos-class model — scoring 64.9 on the Artificial Analysis Intelligence Index, nearly 5 points ahead of GPT-5.5 (the largest gap any lab has held in a year).",
  "src": "Artificial Analysis",
  "url": "https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index"
 },
 {
  "id": "2026-06-19-fable5-export-suspended",
  "date": "2026-06-19",
  "cat": "Top AI News",
  "title": "US government pulls Fable 5 globally",
  "summary": "Three days after launch, the US Commerce Department's BIS sent Anthropic an 'Is Informed' letter (12 Jun, 5:21pm ET) requiring an export licence for any foreign-national access; Anthropic disabled Fable 5 and Mythos 5 worldwide — the first time a US lab has been ordered to shut down a model post-release.",
  "src": "Fortune",
  "url": "https://fortune.com/2026/06/13/anthropic-disables-fable-mythos-export-controls-national-security-threat/"
 },
 {
  "id": "2026-06-19-eu-ai-act-delay",
  "date": "2026-06-19",
  "cat": "Worth a Glance",
  "title": "EU pushes high-risk AI rules to 2027",
  "summary": "Under the Digital Omnibus deal (provisional, 7 May), the EU AI Act's high-risk deadline — covering credit scoring, AML and loan approval — slips from Aug 2026 to 2 Dec 2027, giving banks ~16 more months but not removing the obligation.",
  "src": "Legal Nodes",
  "url": "https://www.legalnodes.com/article/eu-ai-act-2026-updates-compliance-requirements-and-business-risks"
 },
 {
  "id": "2026-06-19-anthropic-recursive",
  "date": "2026-06-19",
  "cat": "Top AI News",
  "title": "Anthropic: AI now writes 80% of its code",
  "summary": "In its 4 Jun 'When AI builds itself' paper, Anthropic disclosed that 80%+ of code in its main repo is now Claude-authored, engineers commit ~8x more code/day than 2024, and Claude is delivering 52x speedups on refactor tasks — and called for a 'verifiable, multilateral' frontier slowdown.",
  "src": "Anthropic",
  "url": "https://www.anthropic.com/institute/recursive-self-improvement"
 },
 {
  "id": "2026-06-17-servicenow-project-arc",
  "date": "2026-06-17",
  "cat": "Worth a Glance",
  "title": "A desktop agent that self-improves",
  "summary": "NVIDIA and ServiceNow unveiled 'Project Arc', a long-running, self-evolving desktop agent for knowledge workers — pointing to always-on assistants that learn your work over time.",
  "src": "NVIDIA / ServiceNow",
  "url": "https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026"
 },
 {
  "id": "2026-06-17-opus48-tops-index",
  "date": "2026-06-17",
  "cat": "Top AI News",
  "title": "Claude Opus 4.8 tops the rankings",
  "summary": "Claude Opus 4.8 is the first model to clear 60 on the Artificial Analysis Intelligence Index (61.4), just ahead of GPT-5.5 (60.2) and Gemini 3.x Pro (~57).",
  "src": "Artificial Analysis",
  "url": "https://artificialanalysis.ai/leaderboards/models"
 },
 {
  "id": "2026-06-17-openai-files-ipo",
  "date": "2026-06-17",
  "cat": "Top AI News",
  "title": "OpenAI files to go public too",
  "summary": "OpenAI filed confidentially for an IPO on 8 June, one week after Anthropic (1 June); both are targeting valuations near $1 trillion.",
  "src": "IG / Reuters",
  "url": "https://www.ig.com/en/news-and-trade-ideas/spacex-openai-anthropic-2026-ipo-deals-260520"
 },
 {
  "id": "2026-06-17-mckinsey-agent-value",
  "date": "2026-06-17",
  "cat": "Worth a Glance",
  "title": "The size of the agent prize",
  "summary": "McKinsey estimates AI agents could add $2.6–4.4 trillion in value a year across business uses — a reminder of why every vendor is racing into 'agentic' tools.",
  "src": "McKinsey",
  "url": "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier"
 },
 {
  "id": "2026-06-17-humain-1gw",
  "date": "2026-06-17",
  "cat": "UAE & Middle East",
  "title": "Saudi HUMAIN plans 1GW of AI compute",
  "summary": "Saudi AI firm HUMAIN plans ~500MW of AMD gear (~$10B) plus ~500MW of Nvidia systems over five years, starting with an 18,000-unit order of Nvidia's GB300.",
  "src": "SemiAnalysis",
  "url": "https://newsletter.semianalysis.com/p/ai-arrives-in-the-middle-east-us-strikes-a-deal-with-uae-and-ksa"
 },
 {
  "id": "2026-06-17-glasswing-10000-flaws",
  "date": "2026-06-17",
  "cat": "Top AI News",
  "title": "Claude found 10,000+ security flaws",
  "summary": "Anthropic's Project Glasswing used its Mythos model to flag 10,000+ high/critical software bugs in one month; the program expanded to ~150 organisations (incl. JPMorgan, AWS, Google) on 4 June.",
  "src": "Anthropic",
  "url": "https://www.anthropic.com/research/glasswing-initial-update"
 },
 {
  "id": "2026-06-17-g42-greenshield",
  "date": "2026-06-17",
  "cat": "UAE & Middle East",
  "title": "G42 launches sovereign AI model",
  "summary": "Abu Dhabi's G42 unveiled 'Greenshield' and a Digital Embassies framework letting nations run AI while keeping legal control of data; Microsoft and G42 are adding 200MW of UAE data-centre capacity via Khazna.",
  "src": "G42",
  "url": "https://www.g42.ai/resources/news/microsoft-and-g42-accelerate-uaes-digital-future-major-data-centre-expansion"
 },
 {
  "id": "2026-06-17-fis-anthropic-aml",
  "date": "2026-06-17",
  "cat": "Enterprise & Banking AI",
  "title": "FIS + Anthropic build an AML agent",
  "summary": "FIS and Anthropic are building a Financial Crimes AI agent that cuts anti-money-laundering investigations from hours to minutes; BMO and Amalgamated Bank are piloting, with general availability planned for H2 2026.",
  "src": "FIS / Business Wire",
  "url": "https://www.businesswire.com/news/home/20260504126906/en/FIS-Brings-Agentic-AI-to-Banking-with-Anthropic-Starting-with-Financial-Crimes"
 },
 {
  "id": "2026-06-17-agent-spend-vs-cancellations",
  "date": "2026-06-17",
  "cat": "Enterprise & Banking AI",
  "title": "Agent spend booms, but so do failures",
  "summary": "Purpose-built AI-agent software is forecast at ~$206.5B in 2026 (up from $86.4B), yet Gartner warns 40%+ of agentic projects may be scrapped by 2027 and 88% of deployments report production incidents.",
  "src": "Gartner",
  "url": "https://www.gartner.com/en/newsroom/press-releases/2026-05-12-gartner-predicts-40-percent-of-organizations-deploying-ai-will-use-ai-observability-to-monitor-model-performance-by-2028"
 },
 {
  "id": "2026-06-15-uae-train-80000",
  "date": "2026-06-15",
  "cat": "UAE & Middle East",
  "title": "UAE to train 80,000 on AI",
  "summary": "The UAE is teaching 80,000 workers to use AI agents, aiming to run half of all government services with AI within two years.",
  "src": "Computer Weekly",
  "url": "https://www.computerweekly.com/news/366642771/UAE-launches-sovereign-AI-driven-Cyber-Factory-security-initiative"
 },
 {
  "id": "2026-06-15-uae-banks-responsible",
  "date": "2026-06-15",
  "cat": "UAE & Middle East",
  "title": "UAE banks top responsible-AI index",
  "summary": "Emirates NBD and First Abu Dhabi Bank rank #1 and #2 in a new Middle East & Africa responsible-AI index; Mashreq came 10th.",
  "src": "IndexBox",
  "url": "https://www.indexbox.io/blog/uae-banks-lead-responsible-ai-index-in-middle-east-and-africa/"
 },
 {
  "id": "2026-06-15-minimax-m3",
  "date": "2026-06-15",
  "cat": "Worth a Glance",
  "title": "AI is getting cheaper to run",
  "summary": "A new model, MiniMax M3, cuts the computing cost per word to about 1/20th of before. Cheaper AI means lower prices and wider use over time.",
  "src": "LLM-Stats",
  "url": "https://llm-stats.com/ai-news"
 },
 {
  "id": "2026-06-15-microsoft-mai",
  "date": "2026-06-15",
  "cat": "Top AI News",
  "title": "Microsoft builds its own AI",
  "summary": "Microsoft launched seven new in-house models and a new advanced-AI lab — a move to rely less on partners like OpenAI.",
  "src": "Microsoft AI",
  "url": "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
 },
 {
  "id": "2026-06-15-meta-wearables",
  "date": "2026-06-15",
  "cat": "Worth a Glance",
  "title": "Meta bets on wearables",
  "summary": "Meta is testing an AI pendant and a work version called 'Wearables for Work', plus more AI glasses — pushing AI off the screen and onto your body.",
  "src": "buildfastwithai",
  "url": "https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026"
 },
 {
  "id": "2026-06-15-karpathy-anthropic",
  "date": "2026-06-15",
  "cat": "Worth a Glance",
  "title": "Star researcher joins Anthropic",
  "summary": "Andrej Karpathy, a well-known AI scientist, joined Anthropic to work hands-on on future models — a sign of where top talent is heading.",
  "src": "buildfastwithai",
  "url": "https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026"
 },
 {
  "id": "2026-06-15-fsb-rules",
  "date": "2026-06-15",
  "cat": "Enterprise & Banking AI",
  "title": "New safety rules for bank AI",
  "summary": "The Financial Stability Board published 12 safe-use practices (10 Jun). A survey found 72% of banks aren't ready to handle an AI breakdown.",
  "src": "The Asian Banker",
  "url": "https://www.theasianbanker.com/updates-and-articles/financial-stability-board-points-banks-towards-ai-monitoring-ai-as-human-oversight-reaches-its-limits"
 },
 {
  "id": "2026-06-15-banks-ai-agents",
  "date": "2026-06-15",
  "cat": "Enterprise & Banking AI",
  "title": "Most banks now use AI helpers",
  "summary": "62% of finance firms use AI agents (software that does tasks on its own), mostly behind the scenes for paperwork. The real payback today is faster internal work.",
  "src": "Cloud Security Alliance",
  "url": "https://finance.yahoo.com/sectors/technology/articles/financial-services-industry-shifts-ai-120000294.html"
 },
 {
  "id": "2026-06-15-apple-siri-choice",
  "date": "2026-06-15",
  "cat": "Top AI News",
  "title": "Apple's Siri gets a choice of brain",
  "summary": "From the next iPhone software you pick which AI runs Siri — ChatGPT, Gemini, or Claude. Apple pays Google about $1B/yr for a custom Gemini model as the default.",
  "src": "buildfastwithai",
  "url": "https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026"
 },
 {
  "id": "2026-06-15-anthropic-ipo",
  "date": "2026-06-15",
  "cat": "Top AI News",
  "title": "Anthropic files to go public",
  "summary": "Anthropic (maker of Claude) filed paperwork to sell shares; yearly revenue jumped to ~$47B. OpenAI is expected to file within weeks.",
  "src": "MarketingProfs",
  "url": "https://www.marketingprofs.com/opinions/2026/54909/ai-update-june-5-2026-ai-news-and-views-from-the-past-week"
 },
 {
  "id": "2026-06-15-ai-owner",
  "date": "2026-06-15",
  "cat": "Enterprise & Banking AI",
  "title": "An AI owner = results",
  "summary": "94% of firms that name a clear owner for AI report real business value, versus 75% for everyone else.",
  "src": "NVIDIA",
  "url": "https://blogs.nvidia.com/blog/ai-in-financial-services-survey-2026/"
 }
];
