/**
 * Monetic Website Bilingual Engine (EN / RO)
 * Allows seamless 1-tap switching with persistent localStorage memory.
 */
const MONETIC_TRANSLATIONS = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_features: "Features",
    nav_tour: "App Tour",
    nav_analytics: "Analytics",
    nav_pro: "💎 PRO",
    nav_security: "Security",
    nav_terms: "Terms",
    nav_privacy: "Privacy",
    nav_delete_account: "Delete Account",
    nav_legal_hub: "Legal Hub",

    // Hero
    hero_badge_offline: "🔒 100% Offline-First",
    hero_badge_sync: "⚡ Multi-Device Real-Time AutoSync",
    hero_badge_cloud: "☁️ Google Drive &amp; Firebase",
    hero_badge_currencies: "💱 49 Currencies",
    hero_title: 'Take complete control of your finances <span class="gradient-text">with real-time sync &amp; zero compromises on privacy.</span>',
    hero_desc: "Monetic is an intuitive, privacy-first personal finance and expense tracking mobile app for Android and iOS. Built with multi-device real-time sync (Firebase), private Google Drive backups, hardware-backed encryption, 15 AMOLED themes, and rich visual budgeting.",
    hero_btn_tour: "📱 Explore Guided Tour",
    hero_btn_docs: "📑 Legal &amp; Privacy Docs",
    hero_card_storage: "Local Storage",
    hero_card_income: "Monthly Income",

    // Why Monetic Pillars
    pillars_badge: "Why Monetic",
    pillars_title: "Built from the ground up for modern financial clarity",
    pillars_desc: "Traditional finance apps monetize your transactions or demand invasive bank logins. Monetic keeps your financial life completely yours.",
    pillar1_title: "Local-First &amp; Encrypted",
    pillar1_desc: "Your records reside directly on your physical device. Backed by Android File-Based Encryption (FBE) and iOS Data Protection, completely isolated from outside apps.",
    pillar2_title: "49 Currencies &amp; Crypto",
    pillar2_desc: "Seamlessly manage international accounts in EUR, USD, RON, GBP, CHF, and cryptocurrencies with live conversion rates computed directly in the app.",
    pillar3_title: "Visual Interactive Analytics",
    pillar3_desc: "Rich donut charts, expense breakdown rings, multi-month income vs. expense comparison bars, and portfolio net worth tracking curves.",
    pillar4_title: "Real-Time Sync &amp; Free Cloud Backup",
    pillar4_desc: "Use Monetic on multiple phones and tablets simultaneously with instant Firebase AutoSync. Plus, backup 1:1 directly to your private Google Drive <code>appDataFolder</code> — free for all users.",

    // App Tour
    tour_badge: "Functional Walkthrough",
    tour_title: "Explore Monetic Screen by Screen",
    tour_desc: "Click any screen preview to open it in full-resolution detail. Follow the walkthrough to see how Monetic transforms your daily budgeting routine.",
    filter_all: "All Modules",
    filter_tracking: "Daily Tracking",
    filter_accounts: "Accounts &amp; Wallets",
    filter_analytics: "Charts &amp; Budgets",
    filter_automation: "Subscriptions &amp; Bills",
    filter_personalization: "Themes &amp; Settings",
    filter_security: "Cloud &amp; Security",

    // Chapter 1
    ch1_badge: "Chapter 01 • Daily Operations",
    ch1_title: "Effortless Dashboard &amp; Lightning Fast Logging",
    ch1_lead: "Everything starts on the dashboard. Get an instant glance at your net balance, monthly income, total expenses, and custom categories.",
    ch1_step1_h: "Interactive Ring Breakdown",
    ch1_step1_p: "Toggle seamlessly between Income and Expenses. The interactive donut ring updates live with exact percentages per category.",
    ch1_step2_h: "Quick Add with Paper Receipts",
    ch1_step2_p: "Tap the floating \"+\" button to log an expense in seconds. Select account, category, and attach up to 3 receipt photos (up to 15 MB) for audit-ready proof of purchase.",
    ch1_step3_h: "Chronological Ledger &amp; Filter",
    ch1_step3_p: "Filter your financial timeline by Day, Week, Month, Year, or custom date period. View net balance changes day by day.",

    // Chapter 2
    ch2_badge: "Chapter 02 • Wallets &amp; Funds",
    ch2_title: "Multi-Account Management &amp; Instant Transfers",
    ch2_lead: "Keep your cash, main bank accounts, savings pools, meal vouchers, and investment portfolios strictly separated yet centrally visible.",
    ch2_step1_h: "Diverse Account Types",
    ch2_step1_p: "Organize checking, physical cash, savings, and investments across multiple foreign currencies (EUR, USD, RON) with cumulative net worth calculation.",
    ch2_step2_h: "Deep Visual Customization &amp; Favorite Colors",
    ch2_step2_p: "Assign custom photographic logos, emojis, and pick from a 360° color wheel with saturation, brightness, and quick presets. <strong>Save up to 6 custom favorite colors</strong> to your personal palette for instant 1-tap reuse across accounts and categories.",
    ch2_step3_h: "Zero-Distortion Transfers",
    ch2_step3_p: "Move funds between accounts with one tap. Transfers are recorded as internal liquidity shifts without skewing your monthly income or expense totals.",

    // Chapter 3
    ch3_badge: "Chapter 03 • Insights",
    ch3_title: "Visual Budgeting, Trend Lines &amp; Net Worth Growth",
    ch3_lead: "Transform raw transaction data into actionable financial wisdom. Monetic provides 5 powerful charting perspectives to eliminate spending leaks.",
    ch3_step1_h: "Dynamic Budget vs. Average Lines",
    ch3_step1_p: "Track your spending against customizable budget targets and historical averages with responsive wave trend graphs.",
    ch3_step2_h: "Interactive Donut &amp; Pie Slices",
    ch3_step2_p: "Touch any slice on the Donut or Pie charts to drill down into category details, exact sums, and percentages.",
    ch3_step3_h: "Portfolio Net Worth Evolution",
    ch3_step3_p: "Monitor the long-term upward trajectory of your total accumulated capital across all accounts combined.",

    // Chapter 4
    ch4_badge: "Chapter 04 • Automation",
    ch4_title: "Subscriptions, Recurring Bills &amp; Smart Reminders",
    ch4_lead: "Stop unwanted subscription auto-renewals from catching you off guard. Manage all fixed recurring expenses in one clean list.",
    ch4_step1_h: "Scheduled Payments",
    ch4_step1_p: "Track rent, utility invoices, mobile subscriptions, and streaming services with exact monthly billing dates and notification times.",
    ch4_step2_h: "Daily Logging &amp; Utility Index Alerts",
    ch4_step2_p: "Set gentle local device reminders (e.g. daily at 20:00, or index reading on the 25th) so your records always remain up to date.",

    // Chapter 5
    ch5_badge: "Chapter 05 • Experience",
    ch5_title: "15 Handcrafted Themes, 49 Currencies &amp; Full Bilingual Support",
    ch5_lead: "Tailor Monetic to your aesthetic preferences and device display. Features 15 tailor-made themes engineered for true AMOLED battery savings and visual elegance.",
    ch5_step1_h: "15 Complete Handcrafted Themes",
    ch5_step1_p: "Monetic offers <strong>15 distinct themes</strong>: Midnight OLED (#000000 true black for AMOLED battery efficiency), Royal Amethyst, Emerald Forest, Sapphire Ocean, Sunset Amber, Rose Gold, Nordic Slate, Mocha Espresso, Crimson Velvet, Sepia Night Shift (zero blue-light eye comfort), Mint Sage Light, Nordic Frost Light, Classic Light, Classic Dark, and System Default.",
    ch5_step2_h: "49 Currencies with Real-Time Conversions",
    ch5_step2_p: "From USD, EUR, and RON to GBP, JPY, and crypto, instantly check current conversion equivalents.",
    ch5_step3_h: "Bilingual Precision (EN &amp; RO)",
    ch5_step3_p: "Full 100% string parity between English and Romanian across all screens, dialogs, and notifications.",

    // Chapter 6
    ch6_badge: "Chapter 06 • Multi-Device Sync &amp; Privacy",
    ch6_title: "Real-Time Multi-Device AutoSync &amp; Private Google Drive Backup",
    ch6_lead: "Use Monetic seamlessly across multiple phones and tablets. Real-time Firebase AutoSync propagates your transactions instantaneously, while Google Drive provides private 1:1 backups — completely free for all users.",
    ch6_step1_h: "Firebase Real-Time AutoSync Across Multiple Devices",
    ch6_step1_p: "Log a transaction on your smartphone and watch it appear instantaneously on your tablet or secondary device in real time. Firebase listeners handle real-time state synchronization seamlessly in the background without manual imports.",
    ch6_step2_h: "Private 1:1 Google Drive Backups",
    ch6_step2_p: "Backups are saved directly into your personal Google Drive account in the hidden application data folder (<code>appDataFolder</code>). 100% isolated, confidential, and costs $0 in cloud storage fees.",
    ch6_step3_h: "Offline-First Resilience",
    ch6_step3_p: "No internet connection needed to log transactions or track budgets. Everything is stored locally in SQLite Room. The moment your device reconnects to Wi-Fi or cellular data, AutoSync syncs everything effortlessly.",
    ch6_step4_h: "Hardware-Backed PIN, Biometrics &amp; Right to Erasure",
    ch6_step4_p: "PINs are hashed using PBKDF2-HMAC-SHA256 (100,000 rounds) and protected in Android Keystore / iOS Keychain. Biometric credentials never leave your device's hardware Secure Enclave, with 1-tap permanent data erasure anytime.",

    // PRO Section
    pro_badge: "💎 MONETIC PRO",
    pro_title: "Unlock the Ultimate Financial Experience",
    pro_subtitle: "Enjoy complete financial focus with zero ads, all 15 handcrafted AMOLED themes, unlimited custom accounts &amp; categories, and priority support. Transparent pricing with no hidden fees.",
    pro_feat1_h: "100% Ad-Free Experience",
    pro_feat1_p: "Zero video ads, banners, or tracking interruptions. Pure, uninterrupted focus on your budgeting.",
    pro_feat2_h: "All 15 Handcrafted Themes",
    pro_feat2_p: "Full access to Midnight OLED (#000000 true black), Royal Amethyst, Rose Gold, Emerald Forest, Sapphire Ocean, and more.",
    pro_feat3_h: "Unlimited Accounts &amp; Categories",
    pro_feat3_p: "Create as many checking, cash, savings, and crypto wallets as you need with custom logos and saved favorite color palettes.",
    pro_feat4_h: "Priority Support &amp; Early Access",
    pro_feat4_p: "Get fast-track direct developer assistance and early access to upcoming features and experimental tools.",
    pro_trial_title: "14-Day Free Trial for Everyone",
    pro_trial_desc: "Every new install includes 14 days of unrestricted PRO access. No credit card, payment details, or subscription required.",
    plan_monthly_name: "Monthly",
    plan_monthly_desc: "Maximum flexibility with no long-term commitment.",
    plan_monthly_subtext: "Billed monthly • Cancel anytime",
    plan_monthly_period: "/ month",
    plan_monthly_f1: "Full access to all PRO features",
    plan_monthly_f2: "Month-to-month flexibility",
    plan_monthly_f3: "Cancel anytime in 1 tap",
    plan_monthly_f4: "Standard in-app updates",
    plan_yearly_badge: "MOST POPULAR • SAVE 28%",
    plan_yearly_name: "Yearly",
    plan_yearly_desc: "Our best-value annual subscription for committed savers.",
    plan_yearly_subtext: "Only ~5 RON / month • Save 28%",
    plan_yearly_period: "/ year",
    plan_yearly_f1: "Full access to all PRO features",
    plan_yearly_f2: "Save 28% compared to monthly",
    plan_yearly_f3: "Early access to new features",
    plan_yearly_f4: "Priority developer support",
    plan_lifetime_badge: "ONE-TIME PAYMENT • LIFETIME",
    plan_lifetime_name: "Lifetime",
    plan_lifetime_desc: "Pay once, own it forever. Zero subscriptions or recurring fees.",
    plan_lifetime_subtext: "Single payment • Permanent access",
    plan_lifetime_period: "one-time",
    plan_lifetime_f1: "Full access to all current &amp; future PRO features",
    plan_lifetime_f2: "Pay once, never pay again",
    plan_lifetime_f3: "Priority developer support",
    plan_lifetime_f4: "Lifetime VIP supporter status",
    plan_lifetime_f5: "Support an independent developer",
    pro_guarantee: "🔒 Processed securely through Google Play &amp; Apple App Store. Subscriptions can be managed or canceled anytime in your store account with zero data loss.",

    // Comparison Table
    comp_badge: "Comparison",
    comp_title: "How Monetic compares to traditional finance apps",
    comp_th_feature: "Feature",
    comp_th_monetic: "Monetic",
    comp_th_others: "Typical Banking / Budgeting Apps",
    comp_r1_f: "Default Data Storage",
    comp_r1_m: "✓ 100% On-Device (SQLite Room)",
    comp_r1_o: "✗ Mandatory 3rd-party servers",
    comp_r2_f: "Bank Account Credentials",
    comp_r2_m: "✓ Never Requested (Zero Risk)",
    comp_r2_o: "✗ Requires Open Banking screen scraping",
    comp_r3_f: "Commercial Data Monetization",
    comp_r3_m: "✓ Strict Zero Selling Guarantee",
    comp_r3_o: "✗ Often brokered to credit bureaus",
    comp_r4_f: "Security Architecture",
    comp_r4_m: "✓ PBKDF2 (100k iters) &amp; Secure Enclave",
    comp_r4_o: "✗ Varies / Cloud password storage",
    comp_r5_f: "Supported Currencies",
    comp_r5_m: "✓ 49 Fiat &amp; Crypto Currencies",
    comp_r5_o: "✗ Usually restricted to single fiat",
    comp_r6_f: "Multi-Device Real-Time Sync",
    comp_r6_m: "✓ Instant AutoSync (Firebase) across phones &amp; tablets",
    comp_r6_o: "✗ Often delayed batch sync or desktop-only",
    comp_r7_f: "Backup Ownership &amp; Freedom",
    comp_r7_m: "✓ Free for all users • Personal Google Drive + Firebase Sync",
    comp_r7_o: "✗ Proprietary locked cloud format or paywalled",

    // Documentation & Legal Hub
    docs_badge: "Documentation &amp; Support Hub",
    docs_title: "Official Disclosures &amp; Legal Governance",
    docs_desc: "Access our statutory data safety documentation, GDPR privacy disclosures, terms of service, and dedicated support channels:",
    doc1_title: "📄 Privacy Policy",
    doc1_desc: "Comprehensive GDPR, DSA, CCPA, sub-processors, and local data protection disclosures.",
    doc2_title: "📑 Terms &amp; Conditions",
    doc2_desc: "Binding terms of service, Monetic Pro subscription policies, licensing, and financial disclaimers.",
    doc3_title: "🗑️ Account &amp; Data Deletion",
    doc3_desc: "Google Play &amp; Apple compliant instructions for immediate, permanent self-service data erasure.",
    doc4_title: "✉️ Customer Support &amp; DSA Contact",
    doc4_desc: "Direct developer contact for inquiries, technical assistance, or bug reports (English &amp; Romanian).",

    // Footer
    footer_home: "Home",
    footer_delete: "Delete Account",
    footer_support: "Support",
    footer_rights: "All rights reserved.",

    // Screenshot Lightbox Captions
    cap_dashboard_expenses: "Dashboard - Expenses Breakdown &amp; Quick Add",
    cap_dashboard_income: "Dashboard - Income by Category &amp; Monthly View",
    cap_add_transaction: "Add Transaction Screen - Categorization &amp; Receipt Attachment",
    cap_transactions: "Transactions Screen - Timeline &amp; Net Balance",
    cap_accounts: "Accounts Screen - Multi-Account Balances",
    cap_create_account: "Create Account - Custom Logo &amp; Color Spectrum Picker",
    cap_transfers: "Transfers History - Inter-Account Movements",
    cap_trend: "Charts &amp; Analytics - Trend Curve &amp; Budget Line",
    cap_analytics: "Charts &amp; Analytics - Period Wave Curve",
    cap_net_worth: "Charts &amp; Analytics - Portfolio Net Worth Growth",
    cap_monthly_bar: "Charts &amp; Analytics - Monthly Income vs Expenses Bar Chart",
    cap_pie_expenses: "Charts &amp; Analytics - Expense Pie Chart",
    cap_donut_expenses: "Charts &amp; Analytics - Donut Total Expenses",
    cap_donut_detail: "Charts &amp; Analytics - Donut Slice Detail Inspection",
    cap_category_breakdown: "Charts &amp; Analytics - Category Breakdown &amp; Savings Rate",
    cap_regular_payments: "Regular Payments - Subscriptions &amp; Recurring Bills",
    cap_reminders: "Reminders - Daily Expense Alerts &amp; Bill Notifications",
    cap_themes: "Themes &amp; Appearance - Dark, AMOLED &amp; Light Presets",
    cap_currency: "Select Currency - 49 Global Currencies",
    cap_language: "Select Language - English &amp; Română",
    cap_settings: "Settings Hub &amp; Monetic PRO",
    cap_cloud_backup: "Account &amp; Cloud Backup - Real-Time Multi-Device AutoSync &amp; Google Drive"
  },

  ro: {
    // Navigation
    nav_home: "Acasă",
    nav_features: "Funcționalități",
    nav_tour: "Turul Aplicației",
    nav_analytics: "Statistici",
    nav_pro: "💎 PRO",
    nav_security: "Securitate",
    nav_terms: "Termeni",
    nav_privacy: "Confidențialitate",
    nav_delete_account: "Șterge Contul",
    nav_legal_hub: "Centru Legal",

    // Hero
    hero_badge_offline: "🔒 100% Offline-First",
    hero_badge_sync: "⚡ Sincronizare în Timp Real Multi-Dispozitiv",
    hero_badge_cloud: "☁️ Google Drive &amp; Firebase",
    hero_badge_currencies: "💱 49 de Monede",
    hero_title: 'Preia controlul complet al finanțelor tale <span class="gradient-text">cu sincronizare în timp real și zero compromisuri de confidențialitate.</span>',
    hero_desc: "Monetic este o aplicație mobilă intuitivă de finanțe personale și evidență a cheltuielilor pentru Android și iOS. Construită cu sincronizare în timp real între dispozitive (Firebase), backup privat în Google Drive, securitate hardware, 15 teme AMOLED și bugetare vizuală avansată.",
    hero_btn_tour: "📱 Explorează Turul Ghidat",
    hero_btn_docs: "📑 Documentație Legală &amp; Confidențialitate",
    hero_card_storage: "Stocare Locală",
    hero_card_income: "Venit Lunar",

    // Why Monetic Pillars
    pillars_badge: "De Ce Monetic",
    pillars_title: "Construit de la zero pentru claritate financiară modernă",
    pillars_desc: "Aplicațiile financiare tradiționale îți monetizează tranzacțiile sau cer parole bancare invazive. Monetic îți păstrează datele financiare complet private.",
    pillar1_title: "Local-First și Criptat",
    pillar1_desc: "Înregistrările tale rămân direct pe dispozitivul fizic. Protejate prin criptare la nivel de fișier Android (FBE) și iOS Data Protection, complet izolate de alte aplicații.",
    pillar2_title: "49 de Monede &amp; Cripto",
    pillar2_desc: "Gestionează conturi internaționale în EUR, USD, RON, GBP, CHF și criptomonede cu rate de schimb calculate direct în aplicație.",
    pillar3_title: "Statistici Vizuale Interactive",
    pillar3_desc: "Grafice interactive tip donut, diagrame de cheltuieli pe categorii, bare comparative venituri vs. cheltuieli și curbe de evoluție a valorii nete.",
    pillar4_title: "Sincronizare în Timp Real &amp; Backup Gratuit",
    pillar4_desc: "Folosește Monetic pe mai multe telefoane și tablete simultan cu Firebase AutoSync instantaneu. În plus, backup 1:1 direct în Google Drive privat (<code>appDataFolder</code>) — gratuit pentru toți utilizatorii.",

    // App Tour
    tour_badge: "Tur Funcțional Ghidat",
    tour_title: "Explorează Monetic Ecran cu Ecran",
    tour_desc: "Apasă pe orice ecran pentru a-l deschide la rezoluție maximă. Urmărește ghidul pas cu pas pentru a vedea cum Monetic îți simplifică gestionarea banilor.",
    filter_all: "Toate Modulele",
    filter_tracking: "Evidență Zilnică",
    filter_accounts: "Conturi &amp; Portofele",
    filter_analytics: "Grafice &amp; Bugete",
    filter_automation: "Abonamente &amp; Facturi",
    filter_personalization: "Teme &amp; Setări",
    filter_security: "Cloud &amp; Securitate",

    // Chapter 1
    ch1_badge: "Capitolul 01 • Operațiuni Zilnice",
    ch1_title: "Panou de Control Intuitiv &amp; Înregistrare Rapidă",
    ch1_lead: "Totul începe din ecranul principal. Vezi dintr-o privire soldul net, venitul lunar, totalul cheltuielilor și categoriile personalizate.",
    ch1_step1_h: "Grafic Interactiv Inelar",
    ch1_step1_p: "Comută ușor între Venituri și Cheltuieli. Inelul interactiv se actualizează în timp real cu procentul exact pe fiecare categorie.",
    ch1_step2_h: "Adăugare Rapidă cu Bonuri Fiscale",
    ch1_step2_p: "Apasă butonul „+” pentru a salva o tranzacție în câteva secunde. Alege contul, categoria și atașează până la 3 poze cu bonul (până la 15 MB) pentru o evidență impecabilă.",
    ch1_step3_h: "Istoric Cronologic &amp; Filtrare",
    ch1_step3_p: "Filtrează tranzacțiile pe Zi, Săptămână, Lună, An sau o perioadă personalizată. Urmărește evoluția soldului net zi de zi.",

    // Chapter 2
    ch2_badge: "Capitolul 02 • Portofele &amp; Fonduri",
    ch2_title: "Gestionare Multi-Cont &amp; Transferuri Instantanee",
    ch2_lead: "Păstrează numerarul, conturile bancare, economiile, bonurile de masă și portofoliile separate, dar vizibile într-un singur loc.",
    ch2_step1_h: "Tipuri Diverse de Conturi",
    ch2_step1_p: "Organizează conturi curente, numerar, economii și investiții în multiple monede (EUR, USD, RON) cu calcularea valorii nete totale.",
    ch2_step2_h: "Personalizare Vizuală &amp; Culori Favorite",
    ch2_step2_p: "Alege sigle foto, emoji-uri și nuanțe dintr-un spectru de 360° cu luminozitate și presetări. <strong>Salvează până la 6 culori favorite</strong> în paleta ta personală pentru reutilizare rapidă la conturi și categorii.",
    ch2_step3_h: "Transferuri Fără Distorsiuni",
    ch2_step3_p: "Mută bani între conturi printr-o singură atingere. Transferurile sunt înregistrate intern fără a denatura totalul veniturilor sau cheltuielilor lunare.",

    // Chapter 3
    ch3_badge: "Capitolul 03 • Statistici &amp; Perspective",
    ch3_title: "Bugetare Vizuală, Linii de Trend &amp; Valoare Netă",
    ch3_lead: "Transformă datele brute în decizii financiare inteligente. Monetic oferă 5 perspective grafice avansate pentru a elimina risipa de bani.",
    ch3_step1_h: "Buget Dinamic vs. Medie Istorică",
    ch3_step1_p: "Urmărește cheltuielile în raport cu obiectivele tale de buget și media istorică prin grafice de trend continue.",
    ch3_step2_h: "Segmente Interactive Donut &amp; Pie",
    ch3_step2_p: "Apasă pe orice felie din graficele rotunde pentru a vedea detaliile categoriei, sumele exacte și procentul din total.",
    ch3_step3_h: "Evoluția Valorii Nete a Portofoliului",
    ch3_step3_p: "Monitorizează traiectoria ascendentă a capitalului tău acumulat în toate conturile combinate.",

    // Chapter 4
    ch4_badge: "Capitolul 04 • Automatizare",
    ch4_title: "Abonamente, Facturi Recurente &amp; Mementouri Inteligente",
    ch4_lead: "Nu mai lăsa reînnoirile automate de abonamente să te ia prin surprindere. Gestionează toate plățile recurente într-o listă clară.",
    ch4_step1_h: "Plăți Programate",
    ch4_step1_p: "Gestionează chiria, facturile de utilități, abonamentele de telefon și serviciile de streaming cu date exacte de plată și notificări.",
    ch4_step2_h: "Alerte Zilnice &amp; Memento Citire Index",
    ch4_step2_p: "Setează notificări locale pe telefon (ex: zilnic la 20:00, sau citirea indexului pe data de 25) pentru o evidență mereu actualizată.",

    // Chapter 5
    ch5_badge: "Capitolul 05 • Experiență Vizuală",
    ch5_title: "15 Teme Speciale, 49 de Monede &amp; Suport Bilingv Complet",
    ch5_lead: "Personalizează Monetic după gustul tău. Include 15 teme optimizate pentru ecrane AMOLED (economisire de baterie) și eleganță vizuală.",
    ch5_step1_h: "15 Teme Lucrate Manual",
    ch5_step1_p: "Monetic include <strong>15 teme distincte</strong>: Midnight OLED (#000000 negru pur pentru economisirea bateriei pe AMOLED), Royal Amethyst, Emerald Forest, Sapphire Ocean, Sunset Amber, Rose Gold, Nordic Slate, Mocha Espresso, Crimson Velvet, Sepia Night Shift (fără lumină albastră, confort nocturn), Mint Sage Light, Nordic Frost Light, Classic Light, Classic Dark și System Default.",
    ch5_step2_h: "49 de Monede cu Conversii în Timp Real",
    ch5_step2_p: "De la USD, EUR și RON până la GBP, JPY și cripto, verifică instant echivalentul tranzacțiilor la cursul curent.",
    ch5_step3_h: "Precizie Bilingvă (EN &amp; RO)",
    ch5_step3_p: "Paritate 100% între limbile engleză și română în toate ecranele, meniurile, casetele de dialog și notificările aplicației.",

    // Chapter 6
    ch6_badge: "Capitolul 06 • Sincronizare Multi-Dispozitiv &amp; Securitate",
    ch6_title: "AutoSync în Timp Real pe Mai Multe Dispozitive &amp; Backup Privat Google Drive",
    ch6_lead: "Folosește Monetic pe mai multe telefoane și tablete simultan. Sincronizarea Firebase AutoSync propagă tranzacțiile instantaneu în timp real, iar Google Drive oferă backup privat 1:1 — complet gratuit pentru toți utilizatorii.",
    ch6_step1_h: "Firebase AutoSync în Timp Real pe Mai Multe Dispozitive",
    ch6_step1_p: "Adaugă o cheltuială pe telefon și o vezi apărând instantaneu pe tabletă sau pe al doilea telefon în timp real. Sincronizarea se face automat în fundal, fără importuri manuale de fișiere.",
    ch6_step2_h: "Backup Privat 1:1 în Google Drive",
    ch6_step2_p: "Copiile de rezervă sunt salvate direct în contul tău personal Google Drive în dosarul ascuns al aplicației (<code>appDataFolder</code>). 100% izolat, confidențial și fără costuri de stocare.",
    ch6_step3_h: "Arhitectură Offline-First",
    ch6_step3_p: "Nu ai nevoie de conexiune la internet pentru a nota cheltuieli sau urmări bugete. Totul este salvat local în SQLite Room. În momentul în care dispozitivul se reconectează, modificările se sincronizează automat.",
    ch6_step4_h: "Cod PIN Securizat Hardware, Biometrie &amp; Ștergerea Datelor",
    ch6_step4_p: "Codul PIN este protejat cu PBKDF2-HMAC-SHA256 (100.000 iterații) în Android Keystore / iOS Keychain. Datele biometrice nu părăsesc enclava de securitate a telefonului, cu opțiune de ștergere totală a datelor la un singur tap.",

    // PRO Section
    pro_badge: "💎 MONETIC PRO",
    pro_title: "Deblochează Experiența Financiară Completă",
    pro_subtitle: "Bucură-te de o aplicație curată fără reclame, toate cele 15 teme AMOLED, conturi și categorii personalizate nelimitate și suport prioritar. Prețuri transparente, fără costuri ascunse.",
    pro_feat1_h: "Experiență 100% Fără Reclame",
    pro_feat1_p: "Fără reclame video, bannere sau întreruperi de tracking. Doar claritate și concentrare pe bugetul tău.",
    pro_feat2_h: "Toate Cele 15 Teme Speciale",
    pro_feat2_p: "Acces complet la Midnight OLED (#000000 negru pur), Royal Amethyst, Rose Gold, Emerald Forest, Sapphire Ocean și multe altele.",
    pro_feat3_h: "Conturi &amp; Categorii Nelimitate",
    pro_feat3_p: "Creează oricâte portofele de numerar, conturi curente, economii sau cripto ai nevoie, cu sigle proprii și palete de culori favorite.",
    pro_feat4_h: "Suport Prioritar &amp; Acces Anticipat",
    pro_feat4_p: "Asistență directă prioritară de la dezvoltator și acces timpuriu la funcționalități și instrumente noi.",
    pro_trial_title: "14 Zile de Testare Gratuită pentru Toți",
    pro_trial_desc: "Fiecare instalare nouă include 14 zile de acces complet PRO gratuit. Fără card bancar, fără date de plată și fără abonament necesar.",
    plan_monthly_name: "Lunar",
    plan_monthly_desc: "Flexibilitate maximă, fără angajamente pe termen lung.",
    plan_monthly_subtext: "Facturare lunară • Anulare oricând",
    plan_monthly_period: "/ lună",
    plan_monthly_f1: "Acces complet la funcțiile PRO",
    plan_monthly_f2: "Flexibilitate lună de lună",
    plan_monthly_f3: "Anulare oricând într-un singur tap",
    plan_monthly_f4: "Actualizări regulate incluse",
    plan_yearly_badge: "CEL MAI POPULAR • ECONOMISEȘTI 28%",
    plan_yearly_name: "Anual",
    plan_yearly_desc: "Cel mai avantajos abonament pentru cei care își gestionează activ finanțele.",
    plan_yearly_subtext: "Doar ~5 RON / lună • Economisești 28%",
    plan_yearly_period: "/ an",
    plan_yearly_f1: "Acces complet la funcțiile PRO",
    plan_yearly_f2: "Economisești 28% față de abonamentul lunar",
    plan_yearly_f3: "Acces anticipat la noile funcționalități",
    plan_yearly_f4: "Suport prioritar de la dezvoltator",
    plan_lifetime_badge: "PLATĂ UNICĂ • ACCES PE VIAȚĂ",
    plan_lifetime_name: "Permanent",
    plan_lifetime_desc: "Plătești o singură dată și este al tău pentru totdeauna. Fără abonamente.",
    plan_lifetime_subtext: "Plată unică • Acces permanent",
    plan_lifetime_period: "plată unică",
    plan_lifetime_f1: "Acces la toate funcțiile PRO prezente și viitoare",
    plan_lifetime_f2: "Plătești o singură dată, fără reînnoiri",
    plan_lifetime_f3: "Suport prioritar de la dezvoltator",
    plan_lifetime_f4: "Statut permanent de susținător VIP",
    plan_lifetime_f5: "Susții un dezvoltator independent",
    pro_guarantee: "🔒 Tranzacții securizate prin Google Play &amp; Apple App Store. Abonamentele pot fi gestionate sau anulate oricând din contul magazinului, fără pierderea datelor.",

    // Comparison Table
    comp_badge: "Comparație",
    comp_title: "Cum se compară Monetic cu aplicațiile financiare tradiționale",
    comp_th_feature: "Funcționalitate",
    comp_th_monetic: "Monetic",
    comp_th_others: "Aplicații Bancare Tradiționale",
    comp_r1_f: "Stocare Implicită a Datelor",
    comp_r1_m: "✓ 100% Pe Dispozitiv (SQLite Room)",
    comp_r1_o: "✗ Servere terțe obligatorii",
    comp_r2_f: "Date de Conectare Bancară",
    comp_r2_m: "✓ Niciodată Solicitate (Zero Risc)",
    comp_r2_o: "✗ Necesită Open Banking &amp; acces la conturi",
    comp_r3_f: "Monetizarea Comercială a Datelor",
    comp_r3_m: "✓ Garanție Strictă: Zero Vânzare Date",
    comp_r3_o: "✗ Date partajate sau vândute partenerilor",
    comp_r4_f: "Arhitectură de Securitate",
    comp_r4_m: "✓ PBKDF2 (100k iterații) &amp; Secure Enclave",
    comp_r4_o: "✗ Variază / Parole salvate în cloud",
    comp_r5_f: "Monede Suportate",
    comp_r5_m: "✓ 49 de Monede Fiat &amp; Cripto",
    comp_r5_o: "✗ De regulă limitat la o singură monedă",
    comp_r6_f: "Sincronizare Multi-Dispozitiv în Timp Real",
    comp_r6_m: "✓ AutoSync instant (Firebase) pe telefoane &amp; tablete",
    comp_r6_o: "✗ Adesea sincronizare întârziată sau limitată",
    comp_r7_f: "Proprietatea Asupra Backup-ului",
    comp_r7_m: "✓ Gratuit pentru toți • Google Drive Personal + Firebase Sync",
    comp_r7_o: "✗ Format cloud blocat sau contra-cost",

    // Documentation & Legal Hub
    docs_badge: "Centru de Documentație &amp; Suport",
    docs_title: "Politici Oficiale &amp; Guvernanță Legală",
    docs_desc: "Accesează documentația oficială de securitate, politicile de confidențialitate GDPR, termenii de utilizare și canalele de suport:",
    doc1_title: "📄 Politica de Confidențialitate",
    doc1_desc: "Politici detaliate privind GDPR, DSA, procesatori terți și protecția datelor personale.",
    doc2_title: "📑 Termeni &amp; Condiții",
    doc2_desc: "Termeni legali de utilizare, politicile abonamentelor Monetic PRO, licențiere și disclaimere.",
    doc3_title: "🗑️ Ștergerea Contului &amp; a Datelor",
    doc3_desc: "Instrucțiuni conforme Google Play &amp; Apple pentru ștergerea imediată și definitivă a datelor.",
    doc4_title: "✉️ Suport Clienți &amp; Contact DSA",
    doc4_desc: "Contact direct cu dezvoltatorul pentru întrebări, asistență tehnică sau sesizări (română și engleză).",

    // Footer
    footer_home: "Acasă",
    footer_delete: "Șterge Contul",
    footer_support: "Suport",
    footer_rights: "Toate drepturile rezervate.",

    // Screenshot Lightbox Captions
    cap_dashboard_expenses: "Panou Principal - Cheltuieli &amp; Adăugare Rapidă",
    cap_dashboard_income: "Panou Principal - Venituri pe Categorii &amp; Vizualizare Lunară",
    cap_add_transaction: "Ecran Adăugare Tranzacție - Categorisire &amp; Atașare Bonuri",
    cap_transactions: "Ecran Tranzacții - Cronologie &amp; Sold Net",
    cap_accounts: "Ecran Conturi - Solduri Multi-Cont",
    cap_create_account: "Creare Cont - Logo Personalizat &amp; Spectru de Culori",
    cap_transfers: "Istoric Transferuri - Mișcări între Conturi",
    cap_trend: "Grafice &amp; Statistici - Curbă de Trend &amp; Linie de Buget",
    cap_analytics: "Grafice &amp; Statistici - Curbă de Val a Perioadei",
    cap_net_worth: "Grafice &amp; Statistici - Creșterea Valorii Nete a Portofoliului",
    cap_monthly_bar: "Grafice &amp; Statistici - Bare Lunare Venituri vs Cheltuieli",
    cap_pie_expenses: "Grafice &amp; Statistici - Diagramă Pie Cheltuieli",
    cap_donut_expenses: "Grafice &amp; Statistici - Diagramă Donut Cheltuieli Totale",
    cap_donut_detail: "Grafice &amp; Statistici - Inspectare Detaliu Segment Donut",
    cap_category_breakdown: "Grafice &amp; Statistici - Detaliu Categorii &amp; Rată de Economisire",
    cap_regular_payments: "Plăți Regulate - Abonamente &amp; Facturi Recurente",
    cap_reminders: "Mementouri - Alerte Zilnice &amp; Notificări Facturi",
    cap_themes: "Teme &amp; Aspect - Presetări Dark, AMOLED &amp; Light",
    cap_currency: "Selectare Monedă - 49 de Monede Globale",
    cap_language: "Selectare Limbă - English &amp; Română",
    cap_settings: "Centru de Setări &amp; Monetic PRO",
    cap_cloud_backup: "Cont &amp; Backup Cloud - AutoSync în Timp Real &amp; Google Drive"
  }
};

// Global language state
window.currentMoneticLang = 'en';

/**
 * Retrieves a translated string by key
 */
window.getMoneticTranslation = function(key, fallback) {
  const lang = window.currentMoneticLang || 'en';
  if (MONETIC_TRANSLATIONS[lang] && MONETIC_TRANSLATIONS[lang][key]) {
    return MONETIC_TRANSLATIONS[lang][key];
  }
  if (MONETIC_TRANSLATIONS['en'] && MONETIC_TRANSLATIONS['en'][key]) {
    return MONETIC_TRANSLATIONS['en'][key];
  }
  return fallback || key;
};

/**
 * Initializes and switches language across the document
 */
function setSiteLanguage(lang) {
  if (!MONETIC_TRANSLATIONS[lang]) {
    lang = 'en';
  }

  window.currentMoneticLang = lang;

  // Set html lang attribute
  document.documentElement.lang = lang;

  // Persist preference
  try {
    localStorage.setItem('monetic_preferred_lang', lang);
  } catch (e) {
    // LocalStorage might be restricted
  }

  // Update switcher button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Apply translations to all data-i18n elements
  const t = MONETIC_TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update document title & meta description if needed
  const path = window.location.pathname;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (path.includes('privacy')) {
    document.title = (lang === 'ro')
      ? "Politica de Confidențialitate - Monetic"
      : "Privacy Policy - Monetic";
    if (metaDesc) {
      metaDesc.content = (lang === 'ro')
        ? "Politica de confidențialitate și securitatea datelor pentru Monetic, aplicație independentă de evidență financiară și bugetare."
        : "Privacy Policy and Data Safety disclosures for Monetic, an independent personal finance and budget tracking mobile application.";
    }
  } else if (path.includes('terms')) {
    document.title = (lang === 'ro')
      ? "Termeni și Condiții - Monetic"
      : "Terms and Conditions - Monetic";
    if (metaDesc) {
      metaDesc.content = (lang === 'ro')
        ? "Termeni și condiții oficiale de utilizare pentru Monetic, aplicație de finanțe personale și monitorizare a cheltuielilor."
        : "Terms and conditions of service for Monetic, an independent personal finance and budget tracking application.";
    }
  } else {
    document.title = (lang === 'ro')
      ? "Monetic - Aplicație Inteligentă de Buget & Finanțe Personale | Offline-First"
      : "Monetic - Smart Personal Finance & Budget Tracker | Offline-First";
    if (metaDesc) {
      metaDesc.content = (lang === 'ro')
        ? "Descoperă Monetic: o aplicație mobilă avansată, offline-first, de finanțe personale și evidență a bugetului pentru Android și iOS. 49 de monede, securitate hardware."
        : "Discover Monetic: an advanced, offline-first personal finance and budget tracking mobile app for Android and iOS. 49 currencies, hardware-backed security, zero bank credentials.";
    }
  }
}

// Auto-run on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Check localStorage, then browser language, fallback to en
  let initialLang = 'en';
  try {
    const saved = localStorage.getItem('monetic_preferred_lang');
    if (saved === 'ro' || saved === 'en') {
      initialLang = saved;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('ro')) {
      initialLang = 'ro';
    }
  } catch (e) {
    // Fallback to default
  }

  setSiteLanguage(initialLang);

  // Bind click handlers to language switchers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.getAttribute('data-lang');
      setSiteLanguage(targetLang);
    });
  });
});
