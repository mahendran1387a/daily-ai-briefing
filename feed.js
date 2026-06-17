// Daily AI Briefing — running feed data. Each run APPENDS new items (dedupe by id, keep ~30 days).
window.FEED = [
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
  "id": "2026-06-17-glasswing-10000-flaws",
  "date": "2026-06-17",
  "cat": "Top AI News",
  "title": "Claude found 10,000+ security flaws",
  "summary": "Anthropic's Project Glasswing used its Mythos model to flag 10,000+ high/critical software bugs in one month; the program expanded to ~150 organisations (incl. JPMorgan, AWS, Google) on 4 June.",
  "src": "Anthropic",
  "url": "https://www.anthropic.com/research/glasswing-initial-update"
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
  "id": "2026-06-17-g42-greenshield",
  "date": "2026-06-17",
  "cat": "UAE & Middle East",
  "title": "G42 launches sovereign AI model",
  "summary": "Abu Dhabi's G42 unveiled 'Greenshield' and a Digital Embassies framework letting nations run AI while keeping legal control of data; Microsoft and G42 are adding 200MW of UAE data-centre capacity via Khazna.",
  "src": "G42",
  "url": "https://www.g42.ai/resources/news/microsoft-and-g42-accelerate-uaes-digital-future-major-data-centre-expansion"
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
  "id": "2026-06-17-servicenow-project-arc",
  "date": "2026-06-17",
  "cat": "Worth a Glance",
  "title": "A desktop agent that self-improves",
  "summary": "NVIDIA and ServiceNow unveiled 'Project Arc', a long-running, self-evolving desktop agent for knowledge workers — pointing to always-on assistants that learn your work over time.",
  "src": "NVIDIA / ServiceNow",
  "url": "https://www.buildfastwithai.com/blogs/ai-news-today-june-8-2026"
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
  "id": "2026-06-15-microsoft-mai",
  "date": "2026-06-15",
  "cat": "Top AI News",
  "title": "Microsoft builds its own AI",
  "summary": "Microsoft launched seven new in-house models and a new advanced-AI lab — a move to rely less on partners like OpenAI.",
  "src": "Microsoft AI",
  "url": "https://microsoft.ai/news/building-a-hillclimbing-machine-launching-seven-new-mai-models/"
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
  "id": "2026-06-15-fsb-rules",
  "date": "2026-06-15",
  "cat": "Enterprise & Banking AI",
  "title": "New safety rules for bank AI",
  "summary": "The Financial Stability Board published 12 safe-use practices (10 Jun). A survey found 72% of banks aren't ready to handle an AI breakdown.",
  "src": "The Asian Banker",
  "url": "https://www.theasianbanker.com/updates-and-articles/financial-stability-board-points-banks-towards-ai-monitoring-ai-as-human-oversight-reaches-its-limits"
 },
 {
  "id": "2026-06-15-ai-owner",
  "date": "2026-06-15",
  "cat": "Enterprise & Banking AI",
  "title": "An AI owner = results",
  "summary": "94% of firms that name a clear owner for AI report real business value, versus 75% for everyone else.",
  "src": "NVIDIA",
  "url": "https://blogs.nvidia.com/blog/ai-in-financial-services-survey-2026/"
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
  "id": "2026-06-15-uae-train-80000",
  "date": "2026-06-15",
  "cat": "UAE & Middle East",
  "title": "UAE to train 80,000 on AI",
  "summary": "The UAE is teaching 80,000 workers to use AI agents, aiming to run half of all government services with AI within two years.",
  "src": "Computer Weekly",
  "url": "https://www.computerweekly.com/news/366642771/UAE-launches-sovereign-AI-driven-Cyber-Factory-security-initiative"
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
  "id": "2026-06-15-minimax-m3",
  "date": "2026-06-15",
  "cat": "Worth a Glance",
  "title": "AI is getting cheaper to run",
  "summary": "A new model, MiniMax M3, cuts the computing cost per word to about 1/20th of before. Cheaper AI means lower prices and wider use over time.",
  "src": "LLM-Stats",
  "url": "https://llm-stats.com/ai-news"
 }
];
