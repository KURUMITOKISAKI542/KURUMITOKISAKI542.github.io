/* =====================================================================
   ข้อมูลพอร์ตโฟลิโอ — แก้ไฟล์นี้ไฟล์เดียวพอ (หน้าเว็บกับไอริดึงข้อมูลจากที่นี่)
   ---------------------------------------------------------------------
   • ข้อความที่อยู่ใน [วงเล็บเหลี่ยม] = ตัวอย่างที่ต้องแก้ (หน้าเว็บจะขีดเส้นประสีส้มไว้
     และมีแถบเตือนบอกว่ายังเหลือกี่ช่อง) แก้เสร็จให้ลบวงเล็บออกด้วย
   • ข้อความแบบ { th: "...", en: "..." } = ภาษาไทย / อังกฤษ (ไม่ใส่ en ก็ได้ จะใช้ภาษาไทยแทน)
   • รูป: เอาไฟล์ไปไว้ในโฟลเดอร์ images แล้วใส่ชื่อไฟล์ตรง image / photo
     ยังไม่มีรูป = หน้าเว็บขึ้นกรอบ "ใส่รูป" ให้เอง
   • ไม่อยากได้หัวข้อไหน ลบรายการในหัวข้อนั้นให้เหลือ [] หัวข้อนั้นจะหายไปเอง
   • ระวังลูกน้ำ , คั่นระหว่างรายการ และเครื่องหมายคำพูด " ต้องครบคู่
   ===================================================================== */
window.PORTFOLIO = {
  lang: "th",            // ภาษาตอนเปิดเว็บ: "th" หรือ "en"
  bilingual: true,       // มีปุ่มสลับ TH / EN

  // ----------------------------------------------------------------- ตัวตน
  name: { th: "กวีกร เพ็งโคนา", en: "Kaweekoen Pengcona" },
  nickname: { th: "กอล์ฟ", en: "Golf" },
  callsign: "542G",                  // ชื่อเรียกขานภาษาอังกฤษสั้นๆ เช่น STAMP · NOVA · ใช้บนบัตรขึ้นเครื่อง
  role: { th: "ผู้สมัครคณะการบิน", en: "Aviation Applicant" },
  tagline: {
    th: "สวัสดีครับ ผมเป็นนักเรียนที่รักการบินและสร้างเทคโนโลยีต่างๆ และจะชอบพุ่งไปในสิ่งที่ตัวเองสนใจ",
    en: "Hello, I am a student who loves aviation and creating various technologies, and I enjoy diving into things that interest me.",
  },
  photo: "images/profile.jpg",           // รูปหน้าตรงของคุณ (แนวตั้ง 3:4 สวยสุด)

  school: { th: "นวมินทราชินูทิศ สตรีวิทยา 2", en: "nawaminthrachinuthit satriwitthaya 2" },
  target: { th: "หลักสูตรวิศวกรรมการบินและนักบินพาณิชย์ · สจล.", en: "IAAI · KMITL." },

  // บัตรขึ้นเครื่อง (รหัส 3 ตัวอักษรแบบสนามบิน — ตั้งเองได้ตามใจ)
  boarding: {
    from: "NMRSW2",          // ตัวย่อโรงเรียน
    to: "IAAI",            // ตัวย่อคณะ/มหาวิทยาลัย
    flight: "TCAS69",
    gate: "A1",
    seat: "01A",
    date: "[2569]",
  },

  // ----------------------------------------------------------------- แนะนำตัว (PRE-FLIGHT)
  about: {
    th: "สวัดดีครับ ผมนายกวีกร เพ็งโคนา ชื่อเล่นกอล์ฟ เป็นนักเรียนชั้นมัธยมศึกษาตอนปลายที่รักการบินและเทคโนโลยี ผมสนใจด้านวิศวกรรมการบินและเทคโนโลยี ซึ่งเป็นสิ่งที่ผมหลงใหลมาตั้งแต่เด็ก ความคิดสร้างสรรค์และความมุ่งมั่นในการเรียนรู้เป็นส่วนหนึ่งของบุคลิกภาพของผม และผมหวังว่าจะได้มีโอกาสพัฒนาทักษะเหล่านี้ในอนาคต",
    en: "Hello, my name is Kaweekoen Pengcona, nicknamed Golf. I am a high school student who loves aviation and technology. I am interested in aviation engineering and technology, which has been my passion since childhood. Creativity and a strong desire to learn are part of my personality, and I hope to have the opportunity to further develop these skills in the future.",
  },

  // หน้าปัดเครื่องวัด  type: "dial" = ตัวเลขเทียบเต็ม · "level" = ระดับขั้น (เช่น CEFR)
  stats: [
    { type: "dial", label: { th: "เกรดเฉลี่ยสะสม", en: "GPAX" }, value: "[3.50]", max: 4, decimals: 2, note: { th: "[ภาคเรียนล่าสุด]", en: "[latest term]" } },
    { type: "level", label: { th: "ภาษาอังกฤษ", en: "English" }, value: "[B2]", scale: ["A1", "A2", "B1", "B2", "C1", "C2"], note: { th: "[เช่น TOEIC 750]", en: "[e.g. TOEIC 750]" } },
    { type: "dial", label: { th: "ฟิสิกส์", en: "Physics" }, value: "[3.5]", max: 4, decimals: 1, note: { th: "[เกรดวิชาฟิสิกส์]", en: "[physics grade]" } },
    { type: "dial", label: { th: "คณิตศาสตร์", en: "Mathematics" }, value: "[4]", max: 4, decimals: 1, note: { th: "[เกรดวิชาคณิต]", en: "[math grade]" } },
  ],

  // เช็กลิสต์ทักษะ  status = ระดับ/คำสั้นๆ ที่แสดงท้ายบรรทัด
  skills: [
    {
      group: { th: "ภาษา", en: "Languages" },
      items: [
        { name: { th: "ภาษาไทย", en: "Thai" }, status: "NATIVE" },
        { name: { th: "ภาษาอังกฤษ", en: "English" }, status: "[B2]" },
        { name: { th: "[ภาษาที่สาม]", en: "[Third language]" }, status: "[BASIC]" },
      ],
    },
    {
      group: { th: "เทคโนโลยี", en: "Technology" },
      items: [
        { name: "Python", status: "PROJECT" },
        { name: { th: "AI / LLM", en: "AI / LLM" }, status: "PROJECT" },
        { name: "Live2D · VTube Studio API", status: "PROJECT" },
        { name: { th: "ROBOTIC", en: "Discord bots" }, status: "WRG" },
      ],
    },
    {
      group: { th: "การบิน", en: "Aviation" },
      items: [
        { name: { th: "การบินจริง", en: "Actual flying" }, status: "Cessna 172" },
        { name: { th: "จำลองการบิน", en: "Flight simulator" }, status: "20HRS+" },
        { name: { th: "การอ่านรายงานอากาศ", en: "Reading METAR weather reports" }, status: "50 HRS" },
      ],
    },
    {
      group: { th: "ทักษะทำงาน", en: "Soft skills" },
      items: [
        { name: { th: "ทำงานเป็นทีม", en: "Teamwork" }, status: "✓" },
        { name: { th: "ภาวะผู้นำ", en: "Leadership" }, status: "✓" },
        { name: { th: "ตัดสินใจภายใต้ความกดดัน", en: "Decisions under pressure" }, status: "✓" },
      ],
    },
  ],

  // ----------------------------------------------------------------- การศึกษา (TAXI)
  education: [
    {
      years: "[2566–2569]",
      title: { th: "มัธยมศึกษาตอนปลาย · แผนวิทย์–คณิต(เตรียมวิศวกรรม)", en: "Upper secondary · Science–Math (Pre-Engineering)" },
      place: { th: "นวมินทราชินูทิศ สตรีวิทยา 2", en: "nawaminthrachinuthit satriwitthaya 2" },
      detail: { th: "3.50 / Math&IOT / Drone pilot", en: "3.50 / Math&IOT / Drone pilot" },
    },
    {
      years: "[2563–2566]",
      title: { th: "มัธยมศึกษาตอนต้น · MEP", en: "Lower secondary · MEP" },
      place: { th: "นวมินทราชินูทิศ สตรีวิทยา 2", en: "nawaminthrachinuthit satriwitthaya 2" },
      detail: { th: "Music&Codeing", en: "Music&Codeing" },
    },
  ],

  // ----------------------------------------------------------------- แรงบันดาลใจ (TAKEOFF)
  whyAviation: {
    text: {
      th: "ผมสนใจในด้านเทคโนโลยีเแป็นทุนเดิมอยู่แล้ว และก็ลองมาหลายอย่างแล้ว ทั้ง Codeing, Robotics, AI, Scurity แต่เมื่อผมได้ลองสัมผัสโลกของการบิน ผมก็เริ่มค้นพบตัวเองตั้งแต่ตอนนั้น และตั้งใจพัฒนามาด้านนี่โดยตรง ผมอยากเป็นนักบินที่มีความสามารถด้านเทคโนโลยีควบคู่กันไปด้วย เพื่อที่จะสามารถพัฒนาการบินไทยให้ก้าวหน้าและเป็นที่ทั่วถึงมากขึ้น",
      en: "I have always been interested in technology, and I have explored various fields such as coding, robotics, AI, and security. However, when I experienced the world of aviation, I discovered my true passion and decided to focus on this field. I aspire to become a pilot with strong technological skills, enabling me to contribute to the advancement and accessibility of aviation in Thailand.",
    },
    points: [
      { call: "V1", title: { th: "การได้เห็นเสน่ห์ของโลกการบิน", en: "The Appeal of the Aviation World" }, text: { th: "ตั้งแต่ผมเด็กๆผมเห็นเครื่องบิน บินผ่านไปมาทุกวันเลยตั้งคำถาม ว่าถ้าผมเป็นคนที่คุมมันได้จะเป็นยังไง", en: "Ever since I was a child, I’ve seen airplanes flying by every day, which led me to wonder: what would it be like if I were the one in control of one?" } },
      { call: "ROTATE", title: { th: "ด้านนี่มันเวอร์กที่สุดแล้ว", en: "This is the best field for me" }, text: { th: "ในตอน ม.1-ม.3 ผมได้ทำหลายๆอย่างทั้งดนตรีและเทคโนโลยี แต่เมื่อมา ม.4 ผมก็ได้ลงแข่งการแข่งขันต่างๆ แต่ก็คิด...เราไปได้สุดก็จริง แต่มันยังไม่ใช่", en: "I’ve managed to take charge of things for students in grades 7–9 (M.1–M.3) on several occasions—everything from music to dinner events. By the time they reach grades 10–12 (M.4–M.6), they can participate in various types of competitions. While it’s true that we can push them to their absolute best, that’s not the case for the majority." } },
      { call: "POSITIVE RATE", title: { th: "การได้สัมผัสกับโลกการบิน", en: "Experiencing the Aviation World" }, text: { th: "ตอนแรกผมได้มาที่ Aero admistion camp และก็ได้แนวทางมากมาย ก่อนที่ผมอยากได้สัมผัสกับท้องฟ้ามากกว่านี่และได้ ซื้อโดรนมาเก็บภาพต่างๆจากมุมสูง และผมชอบมันมาก ส้วนหลังจากนั้นผมก็ได้ไปบินจริงๆที่ Bravo flight club ทำให้รู้ว่า...เรามาถูกทางแล้ว", en: "It all started when I attended the Aero Admission Camp, where I gained a wealth of insight. Wanting to experience the skies even more, I bought a drone to capture footage from above—and I absolutely loved it. Later, I had the chance to fly for real at the Bravo Flight Club, which confirmed that I was on the right path." } },
    ],
  },

  // ----------------------------------------------------------------- กิจกรรม (CLIMB) — แบบสมุดบันทึกการบิน
  // hours = จำนวนชั่วโมง (ไม่รู้ใส่ 0) · image = รูปกิจกรรม (กดแล้วขยาย)
  logbook: [
    { date: "[03/2568]", title: { th: "[ชื่อกิจกรรม / ค่าย]", en: "[Activity / camp]" }, org: { th: "[ผู้จัด · สถานที่]", en: "[Organizer · place]" }, role: { th: "[ผู้เข้าร่วม]", en: "[Participant]" }, hours: 24, remarks: { th: "[ได้เรียนรู้อะไร]", en: "[What you learned]" }, image: "images/activity-1.jpg" },
    { date: "[10/2567]", title: { th: "[ชื่อกิจกรรม]", en: "[Activity]" }, org: { th: "[ผู้จัด]", en: "[Organizer]" }, role: { th: "[หัวหน้าทีม]", en: "[Team lead]" }, hours: 16, remarks: { th: "[ผลลัพธ์]", en: "[Outcome]" }, image: "images/activity-2.jpg" },
    { date: "[06/2567]", title: { th: "[จิตอาสา / งานโรงเรียน]", en: "[Volunteer / school event]" }, org: { th: "[ผู้จัด]", en: "[Organizer]" }, role: { th: "[สตาฟ]", en: "[Staff]" }, hours: 8, remarks: { th: "[หมายเหตุ]", en: "[Remarks]" }, image: "" },
  ],

  // รูปกิจกรรมเพิ่มเติม
  gallery: [
    { src: "images/gallery-1.jpg", caption: { th: "[คำบรรยายรูป]", en: "[Caption]" } },
    { src: "images/gallery-2.jpg", caption: { th: "[คำบรรยายรูป]", en: "[Caption]" } },
    { src: "images/gallery-3.jpg", caption: { th: "[คำบรรยายรูป]", en: "[Caption]" } },
  ],

  // ----------------------------------------------------------------- ผลงาน (CRUISE)
  // airi: true = การ์ดนี้มีปุ่ม "คุยกับไอริ"   (แก้คำอธิบายให้ตรงกับที่ทำจริงนะ)
  projects: [
    {
      featured: true,
      airi: true,
      title: { th: "ไอริ — AI VTuber พูดภาษาไทย", en: "Airi — a Thai-speaking AI VTuber" },
      summary: {
        th: "ผู้ช่วย AI ที่คุยด้วยเสียงภาษาไทยแบบเรียลไทม์ ขยับตัวละคร Live2D ตามอารมณ์ คุยกับเพื่อนในห้อง Discord และลอยบนเดสก์ท็อปในกรอบ HUD — พัฒนาด้วย Python โดยใช้ AI ช่วยเขียนโค้ด",
        en: "An AI companion that holds real-time voice conversations in Thai, animates a Live2D character by emotion, joins Discord voice calls and floats on the desktop inside a HUD frame. Built in Python with AI-assisted coding.",
      },
      highlights: {
        th: [
          "ฟังเสียง → ถอดความ → คิดคำตอบด้วย Gemini → พูดด้วยเสียงสังเคราะห์ภาษาไทย",
          "คุมท่าทาง/สีหน้าโมเดล Live2D ผ่าน VTube Studio API",
          "บอท Discord: เข้าห้องเสียง ฟังเพื่อนในคอล และดูรูปที่ส่งในแชทได้",
          "หน้าต่างมาสคอตแนวไซเบอร์ (PySide6) พร้อมแผงเพลง Spotify",
        ],
        en: [
          "Listen → transcribe → think with Gemini → speak with Thai text-to-speech",
          "Drives Live2D expressions through the VTube Studio API",
          "Discord bot that joins voice calls, hears friends and reads images in chat",
          "Cyber-style desktop mascot window (PySide6) with a Spotify music panel",
        ],
      },
      tags: ["Python", "Gemini API", "Live2D", "VTube Studio", "Discord", "PySide6"],
      image: "images/airi-project.jpg",
      link: "",            // ลิงก์วิดีโอ/GitHub (ไม่มีเว้นว่าง)
    },
    {
      title: { th: "[ชื่อผลงาน / โครงงาน]", en: "[Project title]" },
      summary: { th: "[ทำอะไร ทำไม และได้ผลอย่างไร 2–3 ประโยค]", en: "[What, why and the result in 2–3 sentences]" },
      tags: ["[Tag]", "[Tag]"],
      image: "images/project-2.jpg",
      link: "",
    },
  ],

  awards: [
    { year: "[2568]", title: { th: "[ชื่อรางวัล / เกียรติบัตร]", en: "[Award / certificate]" }, by: { th: "[หน่วยงานที่มอบ]", en: "[Issued by]" }, image: "images/award-1.jpg" },
    { year: "[2567]", title: { th: "[ชื่อรางวัล]", en: "[Award]" }, by: { th: "[หน่วยงาน]", en: "[Issuer]" }, image: "images/award-2.jpg" },
    { year: "[2567]", title: { th: "[เกียรติบัตร]", en: "[Certificate]" }, by: { th: "[หน่วยงาน]", en: "[Issuer]" }, image: "images/award-3.jpg" },
  ],

  // ----------------------------------------------------------------- เป้าหมาย (APPROACH) — แผนการบินของชีวิต
  goals: [
    { eta: "[2569]", title: { th: "[เข้าเรียนคณะการบิน]", en: "[Start the aviation program]" }, text: { th: "[ตั้งใจทำอะไรในปีแรก]", en: "[Plans for year one]" } },
    { eta: "[2571]", title: { th: "[ฝึกบิน / ใบอนุญาต]", en: "[Flight training / licence]" }, text: { th: "[เป้าหมายระหว่างเรียน]", en: "[Goals during study]" } },
    { eta: "[2573]", title: { th: "[เริ่มงานสายการบิน]", en: "[Join an airline]" }, text: { th: "[ตำแหน่งที่อยากเริ่ม]", en: "[First role]" } },
    { eta: "[อนาคต]", title: { th: "[กัปตัน / เป้าหมายสูงสุด]", en: "[Captain / ultimate goal]" }, text: { th: "[อยากเป็นคนแบบไหนในวงการการบิน]", en: "[Who you want to become in aviation]" } },
  ],

  // ----------------------------------------------------------------- ติดต่อ (LANDING)
  // ไม่ใช้ช่องไหนเว้นว่าง "" ได้เลย
  contact: {
    email: "[you@example.com]",
    phone: "[08x-xxx-xxxx]",
    line: "[line id]",
    instagram: "",          // เช่น "@yourname"
    facebook: "",           // ลิงก์เต็ม https://...
    github: "",             // ลิงก์เต็ม https://github.com/...
    location: { th: "[จังหวัด]", en: "[Province], Thailand" },
  },
  closing: {
    th: "[ขอบคุณที่สละเวลาอ่านพอร์ตโฟลิโอนี้ — ประโยคปิดท้ายของคุณ]",
    en: "[Thank you for reading — your closing line]",
  },

  // ----------------------------------------------------------------- ไอริ (กล่องถาม-ตอบมุมจอ)
  airi: {
    endpoint: "https://airi-portfolio.stamp850035.workers.dev/",
    image: "images/airi.png",            // รูปไอริ (พื้นใสสวยสุด) — เอารูปใหม่มาทับไฟล์นี้ได้เลย
    ownerCall: { th: "พี่กอล์ฟ", en: "Golf" },   // ไอริเรียกคุณว่าอะไร
    greeting: {
      th: "สวัสดีค่ะ หนูชื่อไอริ เป็น AI ผู้ช่วยของ{owner} ✈️ อยากรู้อะไรเกี่ยวกับ{owner} พิมพ์ถามหนูได้เลยนะคะ",
      en: "Hi, I'm Airi, {owner}'s AI assistant ✈️ Ask me anything about {owner}!",
    },
    // คำถามเพิ่มเอง: q = คำที่ต้องมีในคำถาม (มีคำใดคำหนึ่งก็พอ · "ทำไม+สอบ" = ต้องมีทั้งสองคำ)
    // goto = พาไปหัวข้อ: preflight / taxi / takeoff / climb / cruise / approach / landing
    faq: [
      { q: ["จุดเด่น", "จุดแข็ง", "ข้อดี", "เก่งอะไร", "strength"], a: { th: "[จุดแข็ง 2–3 ข้อของคุณ พร้อมตัวอย่างสั้นๆ]", en: "[Your 2–3 strengths with a short example]" } },
      { q: ["จุดอ่อน", "ข้อเสีย", "ต้องปรับปรุง", "weakness"], a: { th: "[จุดที่กำลังพัฒนา และกำลังแก้อย่างไร]", en: "[Something you are improving and how]" } },
      { q: ["งานอดิเรก", "ชอบทำอะไร", "เวลาว่าง", "hobby", "free time"], a: { th: "[งานอดิเรกของคุณ]", en: "[Your hobbies]" } },
      { q: ["สุขภาพ", "สายตา", "ส่วนสูง", "ตรวจร่างกาย", "medical", "height", "eyesight"], a: { th: "[ความพร้อมด้านร่างกาย เช่น ผลตรวจสายตา/ส่วนสูง — ไม่อยากบอกก็ลบข้อนี้ได้]", en: "[Medical readiness, e.g. eyesight/height — delete this entry if you prefer]" } },
    ],
  },
};
