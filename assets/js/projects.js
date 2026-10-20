/* Project catalogue. Each entry renders as a card and a detail panel.
 * cat:     saas | mobile | industrial | ai | ecommerce | enterprise | web
 * status:  live | site | built | rd | concept
 * country: sa | pk | ca | us
 */
window.PROJECTS = [
  {
    slug: "washtrack",
    cat: ["saas"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "REST API", "PWA", "EN/AR · RTL", "469 tests"],
    en: {
      title: "WashTrack",
      tagline: "Multi-tenant SaaS that runs car wash companies end to end",
      problem: "Car washes in Saudi Arabia ran on cash drawers, WhatsApp groups and paper loyalty cards. Owners with several branches had no single view of washes, cash, staff or customers.",
      built: "One installation serving many car wash companies, each isolated, billed on a plan and unlocking modules by entitlement. Four separate planes: a staff app with six roles, a super-admin control plane, a corporate fleet portal and a customer portal with phone + one-time code sign-in. Inside: wash pricing by service × vehicle class, shifts and cash reconciliation, tanker records, loyalty points ledger, wash packages, coupons, a generic campaign engine, expenses with approvals, P&L, HR and payroll, VAT-compliant invoicing and a REST API for the mobile apps.",
      outcome: "Running in production for Speed Track. 469 automated tests guard it, including cross-tenant isolation on every tenant-owned model and loyalty balances proven equal to their ledger. One cron entry drives point expiry, billing sweeps and notifications, on plain shared hosting."
    },
    ar: {
      title: "واش تراك",
      tagline: "منصة SaaS متعددة المستأجرين لإدارة مغاسل السيارات بالكامل",
      problem: "كانت مغاسل السيارات في السعودية تعمل بالدُرج النقدي ومجموعات واتساب وبطاقات الولاء الورقية، ولم يكن لدى أصحاب الفروع المتعددة رؤية موحدة للغسلات والنقد والموظفين والعملاء.",
      built: "نسخة واحدة تخدم شركات مغاسل متعددة، لكل منها بيانات معزولة واشتراك وخطة تفتح الوحدات حسب الصلاحيات. أربع بوابات منفصلة: تطبيق الموظفين بستة أدوار، ولوحة تحكم المشرف العام، وبوابة عملاء الشركات، وبوابة العملاء بتسجيل الدخول برقم الجوال ورمز لمرة واحدة. تشمل تسعير الغسيل حسب الخدمة وفئة المركبة، والورديات ومطابقة النقد، وسجلات الصهاريج، ودفتر نقاط الولاء، والباقات، والكوبونات، ومحرك حملات، والمصروفات مع الموافقات، والأرباح والخسائر، والموارد البشرية والرواتب، وفوترة متوافقة مع ضريبة القيمة المضافة، وواجهة REST لتطبيقات الجوال.",
      outcome: "تعمل في بيئة الإنتاج لدى سبيد تراك. تحميها 469 اختبارًا آليًا، منها اختبار عزل البيانات بين المستأجرين على كل نموذج، وإثبات تطابق أرصدة الولاء مع دفترها. مهمة مجدولة واحدة تدير انتهاء النقاط والفوترة والإشعارات على استضافة مشتركة عادية."
    }
  },
  {
    slug: "washtrack-apps",
    cat: ["mobile", "saas"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["Flutter", "Dart", "REST API", "Push notifications", "WhatsApp OTP", "EN/AR · RTL", "Android & iOS"],
    en: {
      title: "WashTrack Mobile Apps",
      tagline: "Two apps from one Flutter codebase: a loyalty card in your pocket, and a fast counter app",
      problem: "Customers lost paper stamp cards, and counter staff typed plates and phone numbers by hand at a busy lane.",
      built: "One Flutter codebase with two flavours. WashTrack (customers): sign in with a Saudi mobile and a WhatsApp code, an offline QR loyalty card, points and tiers with progress to the next free wash, wash packages, visit history with VAT in SAR, offers, ratings and problem reports with photos. WashTrack Business (staff and fleets): scan the card QR or search by Saudi plate or phone, record a wash with a live total, role-based alerts and history, and corporate fleets issuing wash vouchers to drivers as QR codes over WhatsApp.",
      outcome: "Built for Saudi Arabia from day one: full Arabic RTL and English, plates drawn as they look on the car with Arabic above Latin, phone fields that only accept Saudi mobiles, the new Riyal symbol, and push notifications that open the right screen."
    },
    ar: {
      title: "تطبيقات واش تراك",
      tagline: "تطبيقان من كود Flutter واحد: بطاقة ولاء في جيبك وتطبيق سريع للكاونتر",
      problem: "كان العملاء يفقدون بطاقات الأختام الورقية، وكان موظفو الكاونتر يكتبون اللوحات وأرقام الجوال يدويًا في المسار المزدحم.",
      built: "كود Flutter واحد بنسختين. تطبيق واش تراك للعملاء: دخول برقم جوال سعودي ورمز عبر واتساب، وبطاقة ولاء QR تعمل دون إنترنت، ونقاط ومستويات مع شريط تقدم للغسلة المجانية، والباقات، وسجل الزيارات مع الضريبة بالريال، والعروض، والتقييم، والإبلاغ عن مشكلة مع الصور. وتطبيق واش تراك للأعمال للموظفين والأساطيل: مسح رمز البطاقة أو البحث باللوحة السعودية أو الجوال، وتسجيل الغسلة بإجمالي مباشر، وتنبيهات حسب الدور، وإصدار قسائم غسيل للسائقين كرموز QR عبر واتساب.",
      outcome: "مصمم للسعودية من اليوم الأول: عربي كامل من اليمين لليسار وإنجليزي، ولوحات مرسومة كما تبدو على السيارة، وحقول جوال لا تقبل إلا الأرقام السعودية، ورمز الريال الجديد، وإشعارات تفتح الشاشة الصحيحة."
    }
  },
  {
    slug: "speed-s3-plc-hmi",
    cat: ["industrial"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["Delta DVP-EC3 PLC", "WPLSoft ladder", "Delta DOP-107DV HMI", "DOPSoft", "Weintek MT8071iE", "EasyBuilder Pro", "SASO wiring"],
    en: {
      title: "Speed S3 · PLC & HMI",
      tagline: "Automatic car wash machine control, rewritten from scratch",
      problem: "The Speed S3 automatic car wash machine ran an old ladder program with fixed parameters, no fault codes and no way to see what the machine was doing.",
      built: "A new ladder program for the Delta DVP-EC3 PLC in WPLSoft, with operator-adjustable wash parameters and versioned releases (program check registers confirm the version on site). HMI screens for Delta DOP-107DV and Weintek MT8071iE showing live motion and machine status, with settings operators can change. Weintek EasyAccess 2.0 for secure remote HMI access, and the full wiring and electrical diagram prepared for SASO certification.",
      outcome: "The machine is in service with a program the company owns and understands, adjustable on site and reachable remotely, with the paperwork ready for certification."
    },
    ar: {
      title: "سبيد S3 · PLC و HMI",
      tagline: "برمجة التحكم في ماكينة غسيل السيارات الأوتوماتيكية من الصفر",
      problem: "كانت ماكينة سبيد S3 تعمل ببرنامج سلّمي قديم بمعاملات ثابتة، دون رموز أعطال ودون أي رؤية لما تفعله الماكينة.",
      built: "برنامج سلّمي جديد لوحدة Delta DVP-EC3 عبر WPLSoft بمعاملات غسيل قابلة للتعديل وإصدارات مرقّمة يمكن التحقق منها في الموقع. شاشات HMI لأجهزة Delta DOP-107DV و Weintek MT8071iE تعرض الحركة وحالة الماكينة مباشرة مع إعدادات يغيّرها المشغّل. وصول آمن عن بُعد عبر Weintek EasyAccess 2.0، ومخطط الأسلاك والكهرباء كاملًا لاعتماد ساسو.",
      outcome: "الماكينة في الخدمة ببرنامج تملكه الشركة وتفهمه، قابل للتعديل في الموقع والوصول عن بُعد، مع وثائق جاهزة للاعتماد."
    }
  },
  {
    slug: "speed-s3-gateway",
    cat: ["industrial", "saas"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["ESP32-S3", "C++ / Arduino", "Modbus RTU", "RS-485", "Offline flash buffer", "Laravel 12", "MySQL"],
    en: {
      title: "Speed S3 · Cloud Gateway",
      tagline: "An ESP32-S3 that reads the PLC over RS-485 and reports every machine to the cloud",
      problem: "Installed machines were black boxes. When one stopped at a customer site, the only way to find out why was to send a technician.",
      built: "Firmware for a Waveshare ESP32-S3 relay board wired to the PLC's COM2 port over RS-485 Modbus. It polls machine state, counters and sensor transitions, derives faults in software, stores every event in flash when offline and uploads when WiFi returns. A Laravel portal (installedmachine.speedtrackauto.com) lists every machine with live status, alarms, counters and an event log, and lets logged-in users send commands. Setup is a hotspot page: join S3-Setup-<serial>, enter WiFi, serial and API key.",
      outcome: "The company sees each installed machine remotely, diagnoses faults before driving out, and loses no data when a site's internet drops. Safety stays hard-wired: the E-stop never depends on the gateway."
    },
    ar: {
      title: "سبيد S3 · البوابة السحابية",
      tagline: "وحدة ESP32-S3 تقرأ الـ PLC عبر RS-485 وترسل بيانات كل ماكينة إلى السحابة",
      problem: "كانت الماكينات المركّبة صناديق مغلقة؛ إذا توقفت إحداها عند العميل فالطريقة الوحيدة لمعرفة السبب هي إرسال فني.",
      built: "برنامج ثابت للوحة Waveshare ESP32-S3 موصولة بمنفذ COM2 في الـ PLC عبر Modbus على RS-485. يقرأ حالة الماكينة والعدادات وتغيّرات الحساسات، ويستنتج الأعطال برمجيًا، ويحفظ كل حدث في الذاكرة عند انقطاع الإنترنت ثم يرفعه عند عودته. وبوابة Laravel تعرض كل ماكينة بحالتها المباشرة وإنذاراتها وعداداتها وسجل أحداثها، وتسمح للمستخدمين المسجلين بإرسال الأوامر. الإعداد عبر نقطة اتصال: تتصل بشبكة S3-Setup وتُدخل الواي فاي والرقم التسلسلي ومفتاح الواجهة.",
      outcome: "ترى الشركة كل ماكينة مركّبة عن بُعد، وتشخّص الأعطال قبل الخروج للموقع، ولا تفقد أي بيانات عند انقطاع الإنترنت. والسلامة تبقى سلكية: زر الطوارئ لا يعتمد على البوابة أبدًا."
    }
  },
  {
    slug: "speed-s3-remote",
    cat: ["mobile", "industrial"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["Flutter", "Bluetooth LE", "ESP32-S3", "PIN + settings code", "Signed payloads"],
    en: {
      title: "Speed S3 Remote",
      tagline: "Android app that monitors and operates the wash machine over Bluetooth",
      problem: "Technicians needed to see and drive the machine from beside it, without a laptop, a cable or an internet connection.",
      built: "A Flutter app that finds the gateway over Bluetooth LE, logs in with a PIN and shows live machine state, counters and alarms. Operators can run commands and jog motors, with jog stopping the instant a finger lifts or Bluetooth drops. Settings sit behind a separate 8-digit code, and remote web control can be switched off per machine from the app.",
      outcome: "The machine can be checked and operated from a phone on site. Remote commands are only accepted while a logged-in phone is connected, so the floor stays safe."
    },
    ar: {
      title: "سبيد S3 ريموت",
      tagline: "تطبيق أندرويد لمراقبة ماكينة الغسيل وتشغيلها عبر البلوتوث",
      problem: "احتاج الفنيون إلى رؤية الماكينة وتشغيلها من جانبها دون حاسوب أو كابل أو اتصال بالإنترنت.",
      built: "تطبيق Flutter يجد البوابة عبر Bluetooth LE ويسجل الدخول برمز PIN ويعرض حالة الماكينة والعدادات والإنذارات مباشرة. يمكن للمشغل تنفيذ الأوامر وتحريك المحركات يدويًا، ويتوقف التحريك فور رفع الإصبع أو انقطاع البلوتوث. الإعدادات محمية برمز من 8 أرقام، ويمكن إيقاف التحكم عبر الويب لكل ماكينة من التطبيق.",
      outcome: "يمكن فحص الماكينة وتشغيلها من الجوال في الموقع، ولا تُقبل الأوامر عن بُعد إلا أثناء اتصال جوال مسجّل، فتبقى السلامة مضمونة."
    }
  },
  {
    slug: "installment-lock",
    cat: ["industrial", "saas"],
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["PLC v3.12", "ESP32-S3 1.3.1", "Signed unlock codes", "Laravel", "Flutter app relay"],
    en: {
      title: "Machine Installment Lock",
      tagline: "Sell a machine on instalments: it runs until a date, then asks for a code",
      problem: "The company wanted to sell machines on monthly instalments, with a fair way to pause a machine when a payment is missed.",
      built: "The PLC keeps a lock date and stops the machine with a 'please contact the company' screen when it passes. After payment the portal issues a one-time code derived from the machine's API key, entered on the app or pushed over the internet. For machines without WiFi, the phone app relays: the gateway signs its upload, the phone carries it to the server over mobile data, and brings back a signed reply with the new code, settings and time.",
      outcome: "A new sales model for the business. The lock is off until the first code, so machines without a plan run normally, and every code and date is verifiable end to end."
    },
    ar: {
      title: "قفل الأقساط للماكينات",
      tagline: "بيع الماكينة بالتقسيط: تعمل حتى تاريخ محدد ثم تطلب رمزًا",
      problem: "أرادت الشركة بيع الماكينات بأقساط شهرية مع طريقة عادلة لإيقاف الماكينة مؤقتًا عند تأخر الدفع.",
      built: "يحتفظ الـ PLC بتاريخ القفل ويوقف الماكينة بشاشة «يرجى التواصل مع الشركة» عند حلوله. بعد الدفع تُصدر البوابة رمزًا لمرة واحدة مشتقًا من مفتاح الماكينة، يُدخل في التطبيق أو يُرسل عبر الإنترنت. وللماكينات دون واي فاي يعمل الجوال كوسيط: البوابة توقّع بياناتها، والجوال ينقلها إلى الخادم عبر بيانات الجوال، ثم يعيد ردًا موقّعًا بالرمز الجديد والإعدادات والوقت.",
      outcome: "نموذج بيع جديد للشركة. القفل معطّل حتى إدخال أول رمز، فتعمل الماكينات دون خطة بشكل طبيعي، وكل رمز وتاريخ قابل للتحقق من الطرف إلى الطرف."
    }
  },
  {
    slug: "machine-control-panel",
    cat: ["industrial", "web"],
    country: "sa",
    status: "built",
    year: 2026,
    stack: ["HTML", "CSS", "JavaScript", "Live I/O", "Diagnostics", "Event log"],
    en: {
      title: "Machine Control Panel",
      tagline: "Web dashboard for the wash machine: I/O, self-test, diagnostics and statistics",
      problem: "Engineers needed a clear screen to read inputs and outputs, test each actuator and review what the machine had been doing.",
      built: "A multi-page control panel: a live dashboard, an I/O status map of every input and output, guided self-test, diagnostics, an event log, wash statistics and operating instructions, styled in the Speed Track brand.",
      outcome: "Commissioning and fault-finding moved from reading PLC registers to looking at a page."
    },
    ar: {
      title: "لوحة تحكم الماكينة",
      tagline: "لوحة ويب لماكينة الغسيل: المداخل والمخارج، والاختبار الذاتي، والتشخيص، والإحصاءات",
      problem: "احتاج المهندسون إلى شاشة واضحة لقراءة المداخل والمخارج واختبار كل مشغّل ومراجعة ما فعلته الماكينة.",
      built: "لوحة تحكم متعددة الصفحات: لوحة مباشرة، وخريطة لحالة كل مدخل ومخرج، واختبار ذاتي موجّه، وتشخيص، وسجل أحداث، وإحصاءات الغسيل، وتعليمات التشغيل، بهوية سبيد تراك.",
      outcome: "انتقل التشغيل الأولي وتتبع الأعطال من قراءة سجلات الـ PLC إلى النظر في صفحة."
    }
  },
  {
    slug: "smart-tracker",
    cat: ["industrial"],
    country: "sa",
    status: "live",
    year: 2025,
    stack: ["ESP32", "Arduino", "C++", "PHP", "MySQL", "Offline-first sync"],
    en: {
      title: "Smart Tracker",
      tagline: "ESP32 hardware wired into car wash PLCs, syncing every wash to the cloud",
      problem: "Owners had no independent record of how many washes their machines performed. Counts lived inside the PLC: invisible, unauditable and easy to dispute.",
      built: "A custom ESP32 device wired to the PLC of each machine. It listens for wash signals on the wire, logs each wash to a central PHP/MySQL server, and keeps working through outages: events are stored locally and sync the moment the connection returns.",
      outcome: "Every wash across every branch is counted independently of the machine, with zero data loss during network drops. Hardware, firmware and server, built by one person."
    },
    ar: {
      title: "المتتبع الذكي",
      tagline: "جهاز ESP32 موصول بـ PLC المغسلة يزامن كل غسلة مع السحابة",
      problem: "لم يكن لدى الملاك سجل مستقل لعدد الغسلات؛ فالعدّ موجود داخل الـ PLC فقط، غير مرئي ولا يمكن تدقيقه.",
      built: "جهاز ESP32 مخصص موصول بـ PLC كل ماكينة، يلتقط إشارات الغسيل من السلك ويسجلها في خادم PHP/MySQL مركزي، ويستمر في العمل عند الانقطاع: تُخزن الأحداث محليًا وتُزامن فور عودة الاتصال.",
      outcome: "كل غسلة في كل فرع تُعد بشكل مستقل عن الماكينة دون فقدان أي بيانات. العتاد والبرنامج الثابت والخادم من تنفيذ شخص واحد."
    }
  },
  {
    slug: "loyalty-software",
    cat: ["saas"],
    country: "sa",
    status: "live",
    year: 2025,
    stack: ["Laravel", "Node.js", "MySQL", "WhatsApp API", "QR codes"],
    en: {
      title: "Loyalty Software",
      tagline: "QR loyalty engine running live in Saudi car wash branches",
      problem: "Car washes in Makkah had no way to recognise repeat customers. Paper punch cards were lost, faked and impossible to track across branches.",
      built: "A loyalty programme built around QR cards. Supervisors scan a card in seconds; the system logs the visit, sends the customer an instant WhatsApp alert and tracks progress toward rewards: a free wash after 5 visits and on birthdays.",
      outcome: "Running daily in real branches in Makkah. Customers get WhatsApp confirmation on every visit, and owners see who comes back and how often."
    },
    ar: {
      title: "برنامج الولاء",
      tagline: "نظام ولاء بالـ QR يعمل مباشرة في فروع المغاسل السعودية",
      problem: "لم تكن لدى مغاسل مكة طريقة للتعرف على العملاء المتكررين، وكانت بطاقات الأختام الورقية تضيع وتُزوّر.",
      built: "برنامج ولاء قائم على بطاقات QR: يمسح المشرف البطاقة في ثوانٍ، فيسجل النظام الزيارة ويرسل للعميل تنبيه واتساب فوريًا ويتابع التقدم نحو المكافآت: غسلة مجانية بعد 5 زيارات وفي يوم الميلاد.",
      outcome: "يعمل يوميًا في فروع حقيقية بمكة. يتلقى العملاء تأكيدًا عبر واتساب مع كل زيارة، ويرى الملاك من يعود وكم مرة."
    }
  },
  {
    slug: "membership-system",
    cat: ["saas"],
    country: "sa",
    status: "live",
    year: 2025,
    stack: ["Laravel", "MySQL", "Telr payments", "WhatsApp API", "Multi-tenant"],
    en: {
      title: "Membership System",
      tagline: "Multi-tenant memberships with instant QR activation and Telr payments",
      problem: "Businesses selling recurring service packages needed to sell, activate and verify memberships across branches without manual bookkeeping.",
      built: "A multi-tenant membership platform: dynamic packages, instant QR generation on purchase, branch-level scanning, WhatsApp activation alerts and a full admin panel, with payments through the Telr gateway.",
      outcome: "One codebase serves several businesses in isolation. A customer buys a package and holds an active, scannable membership within seconds."
    },
    ar: {
      title: "نظام العضويات",
      tagline: "عضويات متعددة المستأجرين مع تفعيل QR فوري ودفع عبر Telr",
      problem: "احتاجت الشركات التي تبيع باقات خدمات متكررة إلى بيع العضويات وتفعيلها والتحقق منها في الفروع دون دفاتر يدوية.",
      built: "منصة عضويات متعددة المستأجرين: باقات ديناميكية، وإنشاء QR فوري عند الشراء، ومسح في الفروع، وتنبيهات تفعيل عبر واتساب، ولوحة إدارة كاملة، والدفع عبر بوابة Telr.",
      outcome: "كود واحد يخدم عدة شركات بشكل معزول، ويحصل العميل على عضوية فعالة قابلة للمسح خلال ثوانٍ."
    }
  },
  {
    slug: "number-plate-recognition",
    cat: ["saas", "mobile", "ai"],
    country: "sa",
    status: "live",
    year: 2025,
    stack: ["Mobile camera", "OCR", "Laravel", "REST API"],
    en: {
      title: "Number Plate Recognition",
      tagline: "Point a phone camera at a car and the plate is read and ready",
      problem: "Identifying a returning car meant typing its plate by hand: slow at a busy branch, and one typo breaks the customer's history.",
      built: "A camera-based plate reader on an ordinary phone. Staff snap the car; the system extracts the plate's letters and numbers and hands them to visit logging, loyalty lookup and membership checks.",
      outcome: "A car is identified in the time it takes to take a photo, and plate entry errors disappear."
    },
    ar: {
      title: "التعرف على لوحات السيارات",
      tagline: "وجّه كاميرا الجوال إلى السيارة فتُقرأ اللوحة وتصبح جاهزة",
      problem: "كان التعرف على السيارة العائدة يتطلب كتابة اللوحة يدويًا، وهو بطيء في الفرع المزدحم وخطأ واحد يكسر سجل العميل.",
      built: "قارئ لوحات بالكاميرا على جوال عادي: يصوّر الموظف السيارة فيستخرج النظام الحروف والأرقام ويمررها لتسجيل الزيارة والبحث في الولاء والتحقق من العضوية.",
      outcome: "تُعرف السيارة في وقت التقاط الصورة، وتختفي أخطاء إدخال اللوحات."
    }
  },
  {
    slug: "whatsapp-ai-bot",
    cat: ["ai", "saas"],
    featured: true,
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["Laravel", "Green API", "LLM API", "Webhooks", "Shared hosting"],
    en: {
      title: "WhatsApp AI Support Bot",
      tagline: "Answers customers on WhatsApp, only from the business manual",
      problem: "The car wash's WhatsApp number got the same questions all day (prices, hours, branches) and replies depended on whoever was free.",
      built: "An auto-reply bot on Green API and Laravel. Each incoming message is verified, de-duplicated, stored and acknowledged immediately, then answered by an LLM grounded only in the business manual. When it can't help, it hands the chat to a human. Built to run on Hostinger shared hosting: no VPS, no Node, no Redis, no queue worker, with a one-time /setup page instead of SSH.",
      outcome: "Customers get instant, accurate replies at any hour, and staff only step in for the conversations that need a person."
    },
    ar: {
      title: "بوت واتساب بالذكاء الاصطناعي",
      tagline: "يرد على العملاء في واتساب من دليل النشاط التجاري فقط",
      problem: "كان رقم واتساب المغسلة يتلقى الأسئلة نفسها طوال اليوم (الأسعار، المواعيد، الفروع) والرد يعتمد على من يكون متفرغًا.",
      built: "بوت رد آلي على Green API و Laravel: كل رسالة واردة يُتحقق منها وتُمنع تكراراتها وتُحفظ ويُرد بالاستلام فورًا، ثم يجيب عنها نموذج لغوي مقيّد بدليل النشاط فقط، ويحوّل المحادثة لموظف عند الحاجة. مصمم لاستضافة Hostinger المشتركة دون خادم خاص أو Node أو Redis، مع صفحة إعداد لمرة واحدة بدل SSH.",
      outcome: "يحصل العملاء على ردود فورية ودقيقة في أي ساعة، ولا يتدخل الموظفون إلا في المحادثات التي تحتاج إلى شخص."
    }
  },
  {
    slug: "whatsapp-marketing-system",
    cat: ["saas"],
    country: "sa",
    status: "live",
    year: 2025,
    stack: ["Meta WhatsApp Business API", "Laravel", "MySQL", "Webhooks", "REST API"],
    en: {
      title: "WhatsApp Marketing System",
      tagline: "Campaign engine on the official Meta WhatsApp platform, with its own API",
      problem: "Businesses had customer lists but no compliant way to reach them on WhatsApp at scale. Bulk-sender hacks get numbers banned.",
      built: "Template-based campaigns to segmented lists on the official Meta WhatsApp Business platform, with webhook delivery tracking and scheduling, plus a REST API of my own so any other system can trigger messages and campaigns.",
      outcome: "WhatsApp marketing became a system instead of a chore, and other products plug into the same engine through one endpoint."
    },
    ar: {
      title: "نظام التسويق عبر واتساب",
      tagline: "محرك حملات على منصة واتساب الرسمية من Meta مع واجهة برمجية خاصة",
      problem: "كانت لدى الشركات قوائم عملاء دون طريقة نظامية للوصول إليهم عبر واتساب على نطاق واسع، فبرامج الإرسال الجماعي تؤدي لحظر الأرقام.",
      built: "حملات بالقوالب لقوائم مقسّمة على منصة واتساب للأعمال الرسمية، مع تتبع التسليم عبر Webhooks والجدولة، وواجهة REST خاصة تسمح لأي نظام آخر بإطلاق الرسائل والحملات.",
      outcome: "أصبح التسويق عبر واتساب نظامًا لا عبئًا، وتتصل المنتجات الأخرى بالمحرك نفسه عبر نقطة واحدة."
    }
  },
  {
    slug: "devtrack",
    cat: ["saas", "enterprise"],
    country: "sa",
    status: "live",
    year: 2026,
    stack: ["PHP 8", "MySQL", "MERN port", "Bootstrap 5", "Chart.js", "WhatsApp alerts", "EN/AR · RTL"],
    en: {
      title: "DevTrack",
      tagline: "Task and development tracking with an assign → accept → approve workflow and WhatsApp alerts",
      problem: "Work was assigned in chat messages and tracked in people's heads. Nobody could prove a task was accepted, finished or signed off.",
      built: "A cross-department task lifecycle (New, In Progress, Ready for Testing, Completed, On Hold) with attachments, comments, search and filters. Role-based access for admin, manager, developer and user, CSRF protection, soft deletes and a full audit history, with configurable WhatsApp alert triggers and a delivery log. Later ported in full to MongoDB, Express, React and Node, keeping every screen, permission and the bilingual Arabic/English RTL interface.",
      outcome: "Every task has an owner, a state and a paper trail from assignment to approval, and the WhatsApp alerts chase people so managers don't have to."
    },
    ar: {
      title: "ديف تراك",
      tagline: "تتبع المهام والتطوير بسير عمل إسناد ← قبول ← اعتماد وتنبيهات واتساب",
      problem: "كانت المهام تُسند في رسائل المحادثة وتُتابع في الذاكرة، ولا أحد يستطيع إثبات قبول المهمة أو إنجازها أو اعتمادها.",
      built: "دورة حياة مهام بين الأقسام (جديدة، قيد التنفيذ، جاهزة للاختبار، مكتملة، معلّقة) مع المرفقات والتعليقات والبحث والفلاتر. صلاحيات حسب الدور، وحماية CSRF، وحذف ناعم، وسجل تدقيق كامل، ومحفزات تنبيه واتساب قابلة للضبط مع سجل التسليم. ثم نُقل بالكامل إلى MongoDB و Express و React و Node مع كل الشاشات والصلاحيات والواجهة العربية والإنجليزية.",
      outcome: "لكل مهمة مالك وحالة وسجل من الإسناد حتى الاعتماد، وتنبيهات واتساب تتابع الناس بدل المديرين."
    }
  },
  {
    slug: "manufacturing-inventory",
    cat: ["enterprise"],
    country: "sa",
    status: "built",
    year: 2026,
    stack: ["Laravel 12", "MySQL", "Tailwind CSS", "Alpine.js", "Weighted-average costing", "Audit log"],
    en: {
      title: "Manufacturing & Inventory Tracking",
      tagline: "Tracks every part in every machine built, and what each machine really cost",
      problem: "When the factory built a car wash machine, parts came from the warehouse or were bought directly, and nobody could say who took what or what the machine actually cost.",
      built: "Manufacturing orders where every part is traced from source to final status: warehouse parts through request, approval and issue; direct purchases through request, approval, invoice and receiving. Named roles for admin, inventory registration and requesters, moving weighted-average costing, configurable currency and VAT, and a full audit log.",
      outcome: "The true cost of each manufactured machine is a report, not a guess, and every part has a name against it."
    },
    ar: {
      title: "تتبع التصنيع والمخزون",
      tagline: "يتتبع كل قطعة في كل ماكينة مصنّعة والتكلفة الحقيقية لكل ماكينة",
      problem: "عند تصنيع ماكينة غسيل كانت القطع تأتي من المستودع أو تُشترى مباشرة، ولم يكن أحد يعرف من أخذ ماذا ولا كم كلّفت الماكينة فعلًا.",
      built: "أوامر تصنيع تُتتبع فيها كل قطعة من مصدرها حتى حالتها النهائية: قطع المستودع عبر الطلب والموافقة والصرف، والمشتريات المباشرة عبر الطلب والموافقة والفاتورة والاستلام. أدوار محددة للإدارة وتسجيل المخزون والطلب، وتكلفة بالمتوسط المرجح المتحرك، وعملة وضريبة قابلة للضبط، وسجل تدقيق كامل.",
      outcome: "أصبحت التكلفة الحقيقية لكل ماكينة تقريرًا لا تخمينًا، ولكل قطعة اسم مسؤول عنها."
    }
  },
  {
    slug: "warranty-claims",
    cat: ["enterprise"],
    country: "sa",
    status: "built",
    year: 2026,
    stack: ["PHP", "MySQL", "Media uploads", "Analytics", "Reports"],
    en: {
      title: "Warranty Claim System",
      tagline: "From a customer's warranty claim to a decision, with photos and a status trail",
      problem: "Warranty claims arrived by phone and chat with photos scattered across devices, and there was no record of what was decided or why.",
      built: "Claim creation with photo and video uploads, a status workflow with notes on every change, a claims dashboard, analytics on claim types and outcomes, and printable claim reports.",
      outcome: "Every claim has its evidence, its history and its decision in one place."
    },
    ar: {
      title: "نظام مطالبات الضمان",
      tagline: "من مطالبة العميل بالضمان حتى القرار، مع الصور وسجل الحالة",
      problem: "كانت مطالبات الضمان تصل عبر الهاتف والمحادثات والصور متفرقة بين الأجهزة، دون سجل لما تقرر ولماذا.",
      built: "إنشاء المطالبة مع رفع الصور والفيديو، وسير عمل للحالة مع ملاحظة عند كل تغيير، ولوحة للمطالبات، وتحليلات لأنواع المطالبات ونتائجها، وتقارير قابلة للطباعة.",
      outcome: "لكل مطالبة أدلتها وتاريخها وقرارها في مكان واحد."
    }
  },
  {
    slug: "maintenance-workflow",
    cat: ["enterprise", "saas"],
    country: "sa",
    status: "built",
    year: 2025,
    stack: ["Laravel", "MySQL", "QR codes", "Real-time notifications", "PDF"],
    en: {
      title: "Maintenance Workflow System",
      tagline: "End-to-end task visibility for maintenance operations",
      problem: "Maintenance requests disappeared into phone calls and chat threads. Nobody could say what was pending, who owned it or how long it had been sitting.",
      built: "A workflow covering the full life of a maintenance order: equipment and sub-components, technician diagnosis, start and complete work, temporary fixes, parts repair, requests for more time or outside support, QR labels and real-time status.",
      outcome: "Managers see the whole maintenance pipeline at a glance, and tasks stopped falling through the cracks."
    },
    ar: {
      title: "نظام سير عمل الصيانة",
      tagline: "رؤية كاملة لمهام الصيانة من البداية إلى النهاية",
      problem: "كانت طلبات الصيانة تضيع في المكالمات والمحادثات، ولا أحد يعرف ما المعلّق ومن المسؤول ومنذ متى.",
      built: "سير عمل يغطي حياة أمر الصيانة كاملة: المعدات ومكوناتها، وتشخيص الفني، وبدء العمل وإنهاؤه، والإصلاح المؤقت، وإصلاح القطع، وطلب وقت إضافي أو دعم خارجي، وملصقات QR، وحالة مباشرة.",
      outcome: "يرى المديرون خط الصيانة كاملًا بنظرة واحدة، وتوقفت المهام عن الضياع."
    }
  },
  {
    slug: "erp-system",
    cat: ["enterprise"],
    country: "sa",
    status: "built",
    year: 2025,
    stack: ["Laravel", "MySQL", "WhatsApp API", "PDF", "QR scanning", "i18n"],
    en: {
      title: "Multi-branch ERP",
      tagline: "Multi-branch, multi-language ERP for a foreign enterprise client",
      problem: "A growing multi-branch business ran on spreadsheets: sales, purchases, stock, staff and orders in disconnected files.",
      built: "Daily sales and purchase entry, employee management, WhatsApp notifications, PDF reports, multi-branch support, QR scanning, order tracking, stock control, an evaluation system and multi-language support throughout.",
      outcome: "Every sale, purchase and stock movement across branches runs through one system, with reports a click away."
    },
    ar: {
      title: "نظام ERP متعدد الفروع",
      tagline: "نظام ERP متعدد الفروع واللغات لعميل مؤسسي أجنبي",
      problem: "كان نشاط متعدد الفروع يعمل بجداول منفصلة للمبيعات والمشتريات والمخزون والموظفين والطلبات.",
      built: "إدخال المبيعات والمشتريات اليومية، وإدارة الموظفين، وإشعارات واتساب، وتقارير PDF، ودعم الفروع، ومسح QR، وتتبع الطلبات، ومراقبة المخزون، ونظام تقييم، ودعم لغات متعددة.",
      outcome: "كل بيع وشراء وحركة مخزون في الفروع تمر عبر نظام واحد، والتقارير بنقرة."
    }
  },
  {
    slug: "aqz-erp",
    cat: ["enterprise"],
    country: "pk",
    status: "rd",
    year: 2026,
    stack: ["Laravel 12", "PHP 8.3", "MySQL 8", "Double-entry ledger", "Spatie Permission", "DataTables", "TCPDF"],
    en: {
      title: "AQZ Contractors Financial ERP",
      tagline: "Financial ERP for a contracting company, built on a mandatory double-entry ledger",
      problem: "A contractor's money moved through projects, suppliers, staff and petty cash, and balances drifted because they were edited directly.",
      built: "A phased Laravel 12 build with a service and repository layer, where every money mutation goes through a single LedgerService and no balance is ever updated directly. Soft deletes and created_by/updated_by on every table, permissions per module, and each phase closing with migration, model, seeder, permission, UI and test.",
      outcome: "Balances can always be rebuilt from the ledger, so the books reconcile by design rather than by effort."
    },
    ar: {
      title: "نظام AQZ المالي للمقاولات",
      tagline: "نظام ERP مالي لشركة مقاولات مبني على دفتر قيد مزدوج إلزامي",
      problem: "كانت أموال المقاول تتحرك بين المشاريع والموردين والموظفين والعهد، والأرصدة تنحرف لأنها تُعدّل مباشرة.",
      built: "بناء على مراحل بـ Laravel 12 بطبقة خدمات ومستودعات، تمر فيه كل حركة مالية عبر خدمة دفتر واحدة ولا يُعدّل أي رصيد مباشرة. حذف ناعم وتتبع المنشئ والمعدّل في كل جدول، وصلاحيات لكل وحدة، وكل مرحلة تُغلق بالترحيل والنموذج والبيانات والصلاحية والواجهة والاختبار.",
      outcome: "يمكن دائمًا إعادة بناء الأرصدة من الدفتر، فتتطابق الحسابات بالتصميم لا بالجهد."
    }
  },
  {
    slug: "pharmacy-pos",
    cat: ["enterprise"],
    country: "pk",
    status: "concept",
    year: 2026,
    stack: ["Tauri", "SQLite", "Offline-first", "Batch inventory"],
    en: {
      title: "Pharmacy ERP / POS",
      tagline: "Wholesale and retail in one, with offline-first billing",
      problem: "Pharmacies lose sales when the internet drops, and expiry dates live on batches, not products.",
      built: "A design for a desktop POS on Tauri + SQLite with wholesale and retail modes, offline-first billing that syncs later, and batch-level inventory with expiry tracking.",
      outcome: "A clear architecture ready to build: the counter never waits for the network, and stock is accurate down to the batch."
    },
    ar: {
      title: "نظام صيدلية ERP / نقاط بيع",
      tagline: "الجملة والتجزئة في نظام واحد مع فوترة تعمل دون إنترنت",
      problem: "تخسر الصيدليات المبيعات عند انقطاع الإنترنت، وتواريخ الانتهاء مرتبطة بالدفعات لا بالمنتجات.",
      built: "تصميم لنظام نقاط بيع مكتبي على Tauri و SQLite بوضعَي الجملة والتجزئة، وفوترة تعمل دون اتصال وتُزامن لاحقًا، ومخزون على مستوى الدفعة مع تتبع الانتهاء.",
      outcome: "بنية واضحة جاهزة للتنفيذ: الكاشير لا ينتظر الشبكة، والمخزون دقيق حتى مستوى الدفعة."
    }
  },
  {
    slug: "emp-lms",
    cat: ["saas"],
    country: "pk",
    status: "rd",
    year: 2026,
    stack: ["React", "TypeScript", "Node/Express", "MongoDB", "Redis", "Socket.IO", "Stripe", "JazzCash / Easypaisa", "Docker", "Nginx", "GitHub Actions"],
    en: {
      title: "Education Management Platform",
      tagline: "Multi-tenant school management + LMS with seven roles",
      problem: "Schools juggle separate tools for admissions, fees, classes, staff and learning, and none of them talk to each other.",
      built: "An architecture for a seven-role platform (Super Admin, Org Admin, Teacher, Student, Parent, Finance, HR) with per-tenant branding, subdomains and data isolation. JWT with refresh tokens and RBAC, real-time updates over Socket.IO, local and card payments, and CI/CD with Docker and GitHub Actions. Documented in PlantUML and an SRS before a line of code, with a six-phase roadmap.",
      outcome: "A fully specified platform with its foundations in place and a roadmap each school can be onboarded against."
    },
    ar: {
      title: "منصة إدارة التعليم",
      tagline: "إدارة مدارس متعددة المستأجرين مع نظام تعلم بسبعة أدوار",
      problem: "تتعامل المدارس مع أدوات منفصلة للقبول والرسوم والفصول والموظفين والتعلم، ولا تتواصل فيما بينها.",
      built: "بنية لمنصة بسبعة أدوار (مشرف عام، مدير مؤسسة، معلم، طالب، ولي أمر، مالية، موارد بشرية) مع هوية ونطاق فرعي وعزل بيانات لكل مؤسسة. مصادقة JWT مع رموز تحديث وصلاحيات حسب الدور، وتحديثات فورية عبر Socket.IO، ومدفوعات محلية وبالبطاقة، وتكامل ونشر مستمر بـ Docker و GitHub Actions. موثّقة بـ PlantUML ووثيقة متطلبات قبل كتابة أي كود، مع خارطة طريق من ست مراحل.",
      outcome: "منصة محددة بالكامل بأسس جاهزة وخارطة طريق لإضافة كل مدرسة."
    }
  },
  {
    slug: "docurag",
    cat: ["ai"],
    featured: true,
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["Python", "FastAPI", "Qdrant", "PostgreSQL", "Redis", "Groq", "React", "SSE streaming", "Docker"],
    en: {
      title: "DocuRAG",
      tagline: "Grounded Q&A over your own documents, with a citation for every claim",
      problem: "Chatbots over company documents sound confident even when the answer isn't in the documents at all.",
      built: "Upload a PDF, DOCX, HTML or TXT and ask in natural language. A restart-safe ingestion pipeline, hybrid retrieval (dense vectors + keyword) fused with Reciprocal Rank Fusion and re-ranked with a cross-encoder, then grounded generation that cites every claim and explicitly refuses when the documents don't contain the answer. Streaming chat, a Retrieval Lab to inspect what was found, a scored evaluation harness over a fixed corpus, and per-IP rate limiting.",
      outcome: "Answers you can check, measured by an evaluation suite instead of by feel."
    },
    ar: {
      title: "DocuRAG",
      tagline: "أسئلة وأجوبة موثّقة من مستنداتك، مع مرجع لكل معلومة",
      problem: "تبدو روبوتات المحادثة على مستندات الشركة واثقة حتى عندما لا تكون الإجابة موجودة في المستندات أصلًا.",
      built: "ارفع ملف PDF أو DOCX أو HTML أو TXT واسأل بلغتك. مسار إدخال آمن عند إعادة التشغيل، واسترجاع هجين (متجهات وكلمات مفتاحية) مدمج بـ Reciprocal Rank Fusion ومعاد ترتيبه بنموذج cross-encoder، ثم توليد مقيّد يذكر مرجع كل معلومة ويرفض صراحة عندما لا تحتوي المستندات على الإجابة. محادثة متدفقة، ومختبر استرجاع لفحص النتائج، ومنظومة تقييم بالدرجات، وحد للطلبات لكل عنوان IP.",
      outcome: "إجابات يمكن التحقق منها، تُقاس بمنظومة تقييم لا بالانطباع."
    }
  },
  {
    slug: "agentdesk",
    cat: ["ai"],
    country: "pk",
    status: "rd",
    year: 2026,
    stack: ["FastAPI", "LangGraph", "gRPC", "Qdrant", "PostgreSQL"],
    en: {
      title: "AgentDesk",
      tagline: "Multi-agent customer support assistant",
      problem: "One big prompt can't route, look things up, act and escalate reliably.",
      built: "A support assistant where specialised agents (routing, knowledge retrieval, actions, escalation) are coordinated as a LangGraph state machine, with Qdrant for knowledge, PostgreSQL for conversations and gRPC between services.",
      outcome: "Each step is a small, testable agent instead of one opaque prompt."
    },
    ar: {
      title: "AgentDesk",
      tagline: "مساعد دعم عملاء متعدد الوكلاء",
      problem: "موجّه واحد كبير لا يستطيع التوجيه والبحث والتنفيذ والتصعيد بشكل موثوق.",
      built: "مساعد دعم تُنسَّق فيه وكلاء متخصصة (التوجيه، استرجاع المعرفة، التنفيذ، التصعيد) كآلة حالات في LangGraph، مع Qdrant للمعرفة و PostgreSQL للمحادثات و gRPC بين الخدمات.",
      outcome: "كل خطوة وكيل صغير قابل للاختبار بدل موجّه واحد غامض."
    }
  },
  {
    slug: "khabarhub",
    cat: ["ai", "web"],
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["Laravel", "MySQL", "LLM rewriting", "Social auto-posting"],
    en: {
      title: "KhabarHub",
      tagline: "News platform with AI rewriting and automatic social posting",
      problem: "A small news team spent more time reformatting and re-posting stories than reporting them.",
      built: "A Laravel news platform where editors publish once: an LLM rewrites and summarises stories into house style, and each article is auto-posted to the team's social channels.",
      outcome: "Publishing went from a chain of copy-paste steps to one button."
    },
    ar: {
      title: "خبر هب",
      tagline: "منصة أخبار مع إعادة صياغة بالذكاء الاصطناعي ونشر تلقائي على التواصل الاجتماعي",
      problem: "كان فريق أخبار صغير يقضي وقتًا في إعادة التنسيق والنشر أكثر من كتابة الأخبار.",
      built: "منصة أخبار على Laravel ينشر فيها المحرر مرة واحدة: نموذج لغوي يعيد صياغة الخبر وتلخيصه بأسلوب الموقع، ويُنشر كل خبر تلقائيًا على قنوات التواصل.",
      outcome: "تحوّل النشر من سلسلة نسخ ولصق إلى زر واحد."
    }
  },
  {
    slug: "techspot-downloader",
    cat: ["web"],
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["Laravel 12", "yt-dlp", "ffmpeg", "Vite", "Self-hosted"],
    en: {
      title: "TechSpot Video Downloader",
      tagline: "Paste a link, pick a quality, get the file",
      problem: "Downloader sites are full of ads and depend on third-party APIs that break without warning.",
      built: "A Laravel 12 app for public videos from YouTube, Facebook, Instagram and TikTok, with no accounts, no queue workers and no external API. yt-dlp and ffmpeg are bundled, fonts and assets self-hosted, and Linux and Windows hosting builds are scripted.",
      outcome: "If a CDN, registry or Google Fonts goes down, the site keeps working: the only outside servers it talks to are the video platforms themselves."
    },
    ar: {
      title: "تك سبوت لتنزيل الفيديو",
      tagline: "الصق الرابط واختر الجودة واحصل على الملف",
      problem: "مواقع التنزيل مليئة بالإعلانات وتعتمد على واجهات خارجية تتعطل دون إنذار.",
      built: "تطبيق Laravel 12 لتنزيل الفيديوهات العامة من يوتيوب وفيسبوك وإنستغرام وتيك توك، دون حسابات أو طوابير أو واجهات خارجية. أدوات yt-dlp و ffmpeg مضمّنة، والخطوط والملفات مستضافة ذاتيًا، وبناء الاستضافة على لينكس وويندوز مؤتمت.",
      outcome: "إذا تعطلت شبكة توزيع أو خطوط جوجل يبقى الموقع يعمل؛ فالخوادم الخارجية الوحيدة التي يتصل بها هي منصات الفيديو نفسها."
    }
  },
  {
    slug: "university-admission-system",
    cat: ["enterprise"],
    country: "pk",
    status: "built",
    year: 2025,
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "PDF", "Excel exports", "OTP via email & WhatsApp"],
    en: {
      title: "University Admission System",
      tagline: "Full admission pipeline for CUVAS, from application to merit list",
      problem: "Admissions ran on paper forms, bank queues and manual merit calculations. Applicants had no visibility, and staff re-entered the same data at every stage.",
      built: "Three roles. Students register with OTP (email and WhatsApp), save drafts, upload documents and print their form and fee challan. Admins manage cycles, departments and programmes, verify applications in bulk, record entry tests with an automatic re-test loop and publish merit lists. Department heads get read-only oversight, and every report exports to Excel.",
      outcome: "The whole cycle, from application to enrolment, runs through one system, and applicants track their own status instead of calling the office."
    },
    ar: {
      title: "نظام القبول الجامعي",
      tagline: "مسار القبول الكامل لجامعة CUVAS من الطلب حتى قائمة الاستحقاق",
      problem: "كان القبول يعتمد على النماذج الورقية وطوابير البنوك وحساب الاستحقاق يدويًا، دون أي رؤية للمتقدمين.",
      built: "ثلاثة أدوار: يسجل الطلاب برمز تحقق (بريد وواتساب) ويحفظون المسودات ويرفعون المستندات ويطبعون النموذج وقسيمة الرسوم. يدير المسؤولون الدورات والأقسام والبرامج، ويتحققون من الطلبات جماعيًا، ويسجلون اختبارات القبول مع إعادة تلقائية، وينشرون قوائم الاستحقاق. ولرؤساء الأقسام صلاحية اطلاع، وكل تقرير يُصدَّر إلى Excel.",
      outcome: "الدورة كاملة من الطلب حتى التسجيل في نظام واحد، والمتقدمون يتابعون حالتهم بأنفسهم."
    }
  },
  {
    slug: "cuvas-website",
    cat: ["web", "enterprise"],
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["Laravel", "Blade", "CMS admin", "67 tests", "cPanel deploy"],
    en: {
      title: "CUVAS University Website",
      tagline: "71 static pages migrated to a Laravel CMS, byte-identical",
      problem: "The university's site was 71 hand-edited HTML files. Every sitewide change meant editing all of them.",
      built: "A rebuild of cuvas.edu.pk as a Laravel application with content editable at /admin. The old pages were kept as the specification, and rendered output was diffed against them through a nine-phase migration.",
      outcome: "All 71 pages render byte-identical to the originals, 4,151 internal links resolve, 67 tests with 708 assertions pass, and content is now edited in a browser."
    },
    ar: {
      title: "موقع جامعة CUVAS",
      tagline: "نقل 71 صفحة ثابتة إلى نظام إدارة محتوى Laravel بتطابق تام",
      problem: "كان موقع الجامعة 71 ملف HTML يُعدّل يدويًا، وكل تغيير عام يعني تعديلها جميعًا.",
      built: "إعادة بناء cuvas.edu.pk كتطبيق Laravel مع تحرير المحتوى من /admin. احتُفظ بالصفحات القديمة كمواصفة، وقورن الناتج بها عبر نقل على تسع مراحل.",
      outcome: "الصفحات الـ 71 مطابقة تمامًا للأصل، و4,151 رابطًا داخليًا يعمل، و67 اختبارًا بـ 708 تحققات تنجح، والمحتوى يُحرّر الآن من المتصفح."
    }
  },
  {
    slug: "medical-proteins-analytics",
    cat: ["enterprise"],
    country: "pk",
    status: "built",
    year: 2024,
    stack: ["PHP", "MySQL", "JavaScript", "Charts", "PDF/PNG/JPG export"],
    en: {
      title: "Medical Proteins Analytics",
      tagline: "100,000+ row scientific datasets, sorted and graphed in moments",
      problem: "Researchers needed to explore protein datasets of over 100,000 rows, far beyond what spreadsheets could sort or plot without freezing.",
      built: "Server-side sorting and filtering over 100k+ rows, dynamic graph generation, and one-click export to PDF, PNG or JPG.",
      outcome: "Analysis that used to crash spreadsheets takes seconds, and every chart is ready for papers and presentations."
    },
    ar: {
      title: "تحليلات البروتينات الطبية",
      tagline: "بيانات علمية تتجاوز 100,000 صف تُفرز وتُرسم في لحظات",
      problem: "احتاج الباحثون إلى استكشاف بيانات بروتينات تتجاوز 100,000 صف، وهو ما يفوق قدرة جداول البيانات.",
      built: "فرز وتصفية من جهة الخادم لأكثر من 100 ألف صف، ورسوم بيانية ديناميكية، وتصدير بنقرة إلى PDF أو PNG أو JPG.",
      outcome: "تحليل كان يعطّل جداول البيانات يتم الآن في ثوانٍ، وكل رسم جاهز للأبحاث والعروض."
    }
  },
  {
    slug: "sparkles-by-amal",
    cat: ["ecommerce"],
    featured: true,
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["Laravel 12", "MySQL", "Bootstrap 5", "GSAP", "Stripe / PayPal", "JazzCash / EasyPaisa", "Green API", "Sanctum API"],
    en: {
      title: "Sparkles By Amal",
      tagline: "Luxury jewellery e-commerce where every section is managed from the admin",
      problem: "A jewellery brand wanted a storefront that feels like a boutique, and a back office they could run without a developer.",
      built: "A bespoke storefront (animated hero, AJAX filters, variants, 360° and video, reviews and Q&A, wishlist, compare, cart drawer) and a checkout with zone shipping, COD, bank transfer, Stripe, PayPal, JazzCash and EasyPaisa, wallet, reward points and gift cards. The admin has 12 roles and 50+ permissions, a homepage builder, a marketing suite (flash sales, bundles, spin wheel), WhatsApp automation for orders, OTP and abandoned carts, full SEO tooling and a REST API for mobile apps.",
      outcome: "The owners change products, campaigns, payments, couriers and messages themselves, without touching code."
    },
    ar: {
      title: "سباركلز باي أمل",
      tagline: "متجر مجوهرات فاخر يُدار كل قسم فيه من لوحة التحكم",
      problem: "أرادت علامة مجوهرات متجرًا يشبه البوتيك، ولوحة إدارة تعمل دون مطوّر.",
      built: "واجهة مصممة خصيصًا (واجهة متحركة، فلاتر AJAX، خيارات المنتج، عرض 360° وفيديو، تقييمات وأسئلة، مفضلة، مقارنة، سلة جانبية) ودفع يدعم الشحن حسب المنطقة والدفع عند الاستلام والتحويل البنكي و Stripe و PayPal و JazzCash و EasyPaisa والمحفظة والنقاط وبطاقات الهدايا. لوحة إدارة بـ 12 دورًا وأكثر من 50 صلاحية، ومنشئ للصفحة الرئيسية، وأدوات تسويق، وأتمتة واتساب للطلبات والتحقق والسلال المتروكة، وأدوات SEO كاملة، وواجهة REST لتطبيقات الجوال.",
      outcome: "يدير أصحاب المتجر المنتجات والحملات والمدفوعات وشركات الشحن والرسائل بأنفسهم دون لمس الكود."
    }
  },
  {
    slug: "farmer-baskets",
    cat: ["ecommerce"],
    country: "pk",
    status: "live",
    year: 2025,
    link: "https://farmerbaskets.com",
    stack: ["Laravel", "PHP 8", "MySQL", "JavaScript", "POS", "Order tracking"],
    en: {
      title: "Farmer's Basket",
      tagline: "Mango e-commerce and POS shipping orchard-fresh fruit across Pakistan",
      problem: "Mango season is short and intense. Sales ran on phone calls and walk-ins, with no online ordering, no live stock by variety, and counter sales in a separate ledger.",
      built: "A storefront and point of sale in one system: a variety catalogue (Chounsa, Sindhri, Anwar Ratol) with live stock, cart and checkout, accounts, wishlists, real-time order and shipment tracking, and an integrated POS drawing from the same inventory. Plus a full SEO and performance audit.",
      outcome: "Live at farmerbaskets.com. Online and in-person sales share one stock count, so numbers stay true through the peak-season rush."
    },
    ar: {
      title: "فارمرز باسكت",
      tagline: "متجر إلكتروني ونقاط بيع للمانجو يشحن الفاكهة الطازجة في أنحاء باكستان",
      problem: "موسم المانجو قصير ومكثف، وكانت المبيعات بالهاتف والحضور الشخصي دون طلب إلكتروني ولا مخزون مباشر حسب الصنف.",
      built: "متجر ونقطة بيع في نظام واحد: كتالوج الأصناف مع المخزون المباشر، والسلة والدفع، والحسابات، والمفضلة، وتتبع الطلبات والشحنات، ونقطة بيع متكاملة من المخزون نفسه، مع تدقيق كامل للسيو والأداء.",
      outcome: "يعمل على farmerbaskets.com، والمبيعات الإلكترونية والحضورية تشترك في مخزون واحد طوال ذروة الموسم."
    }
  },
  {
    slug: "casual-country-outfitters",
    cat: ["ecommerce"],
    country: "us",
    status: "site",
    year: 2024,
    link: "https://casualcountryusa.com",
    stack: ["PHP", "MySQL", "JavaScript", "Payments"],
    en: {
      title: "Casual Country Outfitters",
      tagline: "E-commerce store for a US western-wear brand",
      problem: "A US outfitter needed a fast, dependable store for a large catalogue.",
      built: "Product catalogue, cart and checkout, order management and an admin side for running the store day to day.",
      outcome: "The brand sells online at casualcountryusa.com with a store they run themselves."
    },
    ar: {
      title: "كاجوال كنتري أوتفترز",
      tagline: "متجر إلكتروني لعلامة أزياء أمريكية",
      problem: "احتاجت علامة أمريكية إلى متجر سريع وموثوق لكتالوج كبير.",
      built: "كتالوج المنتجات والسلة والدفع وإدارة الطلبات ولوحة لتشغيل المتجر يوميًا.",
      outcome: "تبيع العلامة عبر casualcountryusa.com بمتجر تديره بنفسها."
    }
  },
  {
    slug: "casha",
    cat: ["saas", "web"],
    country: "ca",
    status: "site",
    year: 2024,
    link: "https://cashaedu.com",
    stack: ["PHP", "MySQL", "JavaScript", "REST APIs"],
    en: {
      title: "Casha",
      tagline: "Remote learning platform with personalised student dashboards",
      problem: "A Canadian education provider needed to deliver courses remotely, with each student seeing their own progress.",
      built: "An EdTech platform with personalised dashboards, course delivery and progress tracking for students across time zones.",
      outcome: "Students learn remotely at cashaedu.com with a dashboard that reflects their own journey."
    },
    ar: {
      title: "كاشا",
      tagline: "منصة تعلم عن بُعد بلوحات مخصصة لكل طالب",
      problem: "احتاج مزود تعليم كندي إلى تقديم الدورات عن بُعد بحيث يرى كل طالب تقدمه.",
      built: "منصة تعليمية بلوحات مخصصة وتقديم الدورات وتتبع التقدم لطلاب في مناطق زمنية مختلفة.",
      outcome: "يتعلم الطلاب عن بُعد عبر cashaedu.com بلوحة تعكس رحلتهم."
    }
  },
  {
    slug: "speed-track-auto",
    cat: ["web"],
    country: "sa",
    status: "live",
    year: 2025,
    link: "https://speedtrackauto.com",
    stack: ["Laravel", "MySQL", "EN/AR · RTL", "WhatsApp"],
    en: {
      title: "Speed Track Auto",
      tagline: "Bilingual Laravel site for a Saudi car wash chain, rebuilt from WordPress",
      problem: "The old WordPress site was a static brochure that couldn't present packages, loyalty or branches in both Arabic and English.",
      built: "A ground-up Laravel rebuild: fully bilingual with proper RTL, monthly wash subscriptions, the five-visit loyalty programme, corporate vouchers and branch pages for Makkah and Jeddah, with WhatsApp contact built in.",
      outcome: "Live at speedtrackauto.com, connected to the systems that run the business."
    },
    ar: {
      title: "سبيد تراك أوتو",
      tagline: "موقع Laravel ثنائي اللغة لسلسلة مغاسل سعودية، أعيد بناؤه من ووردبريس",
      problem: "كان موقع ووردبريس القديم كتيبًا ثابتًا لا يعرض الباقات والولاء والفروع باللغتين.",
      built: "إعادة بناء كاملة بـ Laravel: ثنائي اللغة مع دعم RTL صحيح، واشتراكات الغسيل الشهرية، وبرنامج الولاء، وقسائم الشركات، وصفحات فروع مكة وجدة، مع تواصل واتساب مدمج.",
      outcome: "يعمل على speedtrackauto.com ومتصل بالأنظمة التي تدير النشاط."
    }
  },
  {
    slug: "uh-builders",
    cat: ["web"],
    country: "pk",
    status: "built",
    year: 2026,
    stack: ["PHP 8", "SQLite", "Admin panel", "Visitor analytics"],
    en: {
      title: "UH Builder & Electrician",
      tagline: "Company website with its own admin panel and analytics, zero setup",
      problem: "A construction and electrical company needed a site they could update themselves, on cheap hosting, with no database to configure.",
      built: "A PHP 8 + SQLite website and admin panel: upload the folder and it runs. The admin edits content and shows page views, unique and first-time visitors and change versus the previous period. Data and includes are blocked from the web.",
      outcome: "The owner updates the site and sees its traffic without a developer or a database server."
    },
    ar: {
      title: "UH للبناء والكهرباء",
      tagline: "موقع شركة بلوحة إدارة وتحليلات خاصة، دون أي إعداد",
      problem: "احتاجت شركة بناء وكهرباء إلى موقع تحدّثه بنفسها على استضافة رخيصة دون إعداد قاعدة بيانات.",
      built: "موقع ولوحة إدارة بـ PHP 8 و SQLite: ارفع المجلد ويعمل. تحرّر اللوحة المحتوى وتعرض المشاهدات والزوار الفريدين والجدد ومقارنة بالفترة السابقة، والملفات الحساسة محجوبة عن الويب.",
      outcome: "يحدّث المالك الموقع ويرى زياراته دون مطوّر أو خادم قاعدة بيانات."
    }
  },
  {
    slug: "noble-cuts",
    cat: ["web"],
    country: "ca",
    status: "site",
    year: 2024,
    link: "https://noblecuts.ca",
    stack: ["HTML/CSS/JS", "PHP"],
    en: { title: "Noble Cuts", tagline: "Brand site for a Canadian business", problem: "The business needed a web presence that matched the quality of its service.", built: "A fast, responsive brand site with clear service presentation and contact paths.", outcome: "Live at noblecuts.ca." },
    ar: { title: "نوبل كتس", tagline: "موقع علامة تجارية لنشاط كندي", problem: "احتاج النشاط إلى حضور على الويب يليق بجودة خدمته.", built: "موقع سريع ومتجاوب يعرض الخدمات بوضوح مع طرق تواصل مباشرة.", outcome: "يعمل على noblecuts.ca." }
  },
  {
    slug: "avcpa",
    cat: ["web"],
    country: "ca",
    status: "site",
    year: 2024,
    link: "https://avcpaprofessionalcorp.com",
    stack: ["HTML/CSS/JS", "PHP"],
    en: { title: "AVCPA Professional Corporation", tagline: "Website for a Canadian accounting practice", problem: "An accounting firm needed a credible site that earns trust at first glance.", built: "A clean professional-services site presenting the practice, its services and clear contact routes.", outcome: "Live at avcpaprofessionalcorp.com." },
    ar: { title: "AVCPA للمحاسبة", tagline: "موقع لمكتب محاسبة كندي", problem: "احتاج مكتب محاسبة إلى موقع موثوق يكسب الثقة من النظرة الأولى.", built: "موقع خدمات مهنية نظيف يعرض المكتب وخدماته وطرق التواصل.", outcome: "يعمل على avcpaprofessionalcorp.com." }
  },
  {
    slug: "ask-associates",
    cat: ["web"],
    country: "pk",
    status: "site",
    year: 2023,
    link: "https://ask.associates",
    stack: ["HTML/CSS/JS", "PHP"],
    en: { title: "ASK Associates", tagline: "Corporate site for a consulting firm", problem: "The firm needed a corporate presence that presents its services with authority.", built: "A corporate site with structured service pages and a professional visual identity.", outcome: "Live at ask.associates." },
    ar: { title: "ASK أسوشيتس", tagline: "موقع مؤسسي لشركة استشارات", problem: "احتاجت الشركة إلى حضور مؤسسي يعرض خدماتها بثقة.", built: "موقع مؤسسي بصفحات خدمات منظمة وهوية بصرية احترافية.", outcome: "يعمل على ask.associates." }
  },
  {
    slug: "care-group",
    cat: ["web"],
    country: "pk",
    status: "site",
    year: 2023,
    link: "https://caregroup.com.pk",
    stack: ["HTML/CSS/JS", "PHP"],
    en: { title: "Care Group", tagline: "Website for a Pakistani services group", problem: "The group needed one site presenting its services under one brand.", built: "A multi-section brand site with service overviews and contact integration.", outcome: "Live at caregroup.com.pk." },
    ar: { title: "كير جروب", tagline: "موقع لمجموعة خدمات باكستانية", problem: "احتاجت المجموعة إلى موقع واحد يعرض خدماتها تحت علامة واحدة.", built: "موقع متعدد الأقسام بنظرة عامة على الخدمات وتكامل للتواصل.", outcome: "يعمل على caregroup.com.pk." }
  },
  {
    slug: "syed-usama-zohaib",
    cat: ["web"],
    country: "pk",
    status: "site",
    year: 2023,
    link: "https://syedusamazohaib.live",
    stack: ["HTML/CSS/JS"],
    en: { title: "Syed Usama Zohaib", tagline: "Personal site for a professional", problem: "A professional needed a personal site to anchor their online identity.", built: "A fast personal website focused on their work and contact details.", outcome: "Live at syedusamazohaib.live." },
    ar: { title: "سيد أسامة زهيب", tagline: "موقع شخصي لمحترف", problem: "احتاج محترف إلى موقع شخصي يرسّخ هويته على الإنترنت.", built: "موقع شخصي سريع يركّز على أعماله وبيانات التواصل.", outcome: "يعمل على syedusamazohaib.live." }
  }
];
