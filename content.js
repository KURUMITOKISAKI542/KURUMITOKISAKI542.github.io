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
  name: { th: "[ชื่อ นามสกุล]", en: "[Firstname Lastname]" },
  nickname: { th: "[ชื่อเล่น]", en: "[Nickname]" },
  callsign: "[CALLSIGN]",                 // ชื่อเรียกขานภาษาอังกฤษสั้นๆ เช่น STAMP · NOVA · ใช้บนบัตรขึ้นเครื่อง
  role: { th: "ผู้สมัครคณะการบิน", en: "Aviation Applicant" },
  tagline: {
    th: "[ประโยคสั้นๆ ที่บอกว่าคุณคือใคร เช่น นักเรียนที่หลงใหลการบินและชอบสร้างเทคโนโลยี]",
    en: "[One line about you, e.g. A student who loves flight and builds technology]",
  },
  photo: "images/profile.jpg",           // รูปหน้าตรงของคุณ (แนวตั้ง 3:4 สวยสุด)

  school: { th: "[ชื่อโรงเรียน]", en: "[School name]" },
  target: { th: "[คณะ / สาขาที่ยื่น · มหาวิทยาลัย]", en: "[Faculty / Program · University]" },

  // บัตรขึ้นเครื่อง (รหัส 3 ตัวอักษรแบบสนามบิน — ตั้งเองได้ตามใจ)
  boarding: {
    from: "[SCH]",          // ตัวย่อโรงเรียน
    to: "[AVN]",            // ตัวย่อคณะ/มหาวิทยาลัย
    flight: "TCAS69",
    gate: "A1",
    seat: "01A",
    date: "[2569]",
  },

  // ----------------------------------------------------------------- แนะนำตัว (PRE-FLIGHT)
  about: {
    th: "[เขียนแนะนำตัว 3–5 ประโยค: เป็นใคร เรียนสายอะไร นิสัยแบบไหน และอะไรทำให้สนใจการบิน]",
    en: "[Introduce yourself in 3–5 sentences: who you are, what you study, your personality, and what drew you to aviation]",
  },

  // หน้าปัดเครื่องวัด  type: "dial" = ตัวเลขเทียบเต็ม · "level" = ระดับขั้น (เช่น CEFR)
  stats: [
    { type: "dial", label: { th: "เกรดเฉลี่ยสะสม", en: "GPAX" }, value: "[3.50]", max: 4, decimals: 2, note: { th: "[ภาคเรียนล่าสุด]", en: "[latest term]" } },
    { type: "level", label: { th: "ภาษาอังกฤษ", en: "English" }, value: "[B2]", scale: ["A1", "A2", "B1", "B2", "C1", "C2"], note: { th: "[เช่น TOEIC 750]", en: "[e.g. TOEIC 750]" } },
    { type: "dial", label: { th: "ฟิสิกส์", en: "Physics" }, value: "[3.5]", max: 4, decimals: 1, note: { th: "[เกรดวิชาฟิสิกส์]", en: "[physics grade]" } },
    { type: "dial", label: { th: "คณิตศาสตร์", en: "Mathematics" }, value: "[3.5]", max: 4, decimals: 1, note: { th: "[เกรดวิชาคณิต]", en: "[math grade]" } },
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
        { name: { th: "AI / LLM (Gemini API)", en: "AI / LLM (Gemini API)" }, status: "PROJECT" },
        { name: "Live2D · VTube Studio API", status: "PROJECT" },
        { name: { th: "บอท Discord", en: "Discord bots" }, status: "PROJECT" },
      ],
    },
    {
      group: { th: "การบิน", en: "Aviation" },
      items: [
        { name: { th: "[อ่านรายงานอากาศ METAR]", en: "[Reading METAR weather reports]" }, status: "[BASIC]" },
        { name: { th: "[ตัวอักษรวิทยุ ALFA–ZULU]", en: "[Phonetic alphabet ALFA–ZULU]" }, status: "[FLUENT]" },
        { name: { th: "[เครื่องจำลองการบิน]", en: "[Flight simulator]" }, status: "[50 HRS]" },
      ],
    },
    {
      group: { th: "ทักษะทำงาน", en: "Soft skills" },
      items: [
        { name: { th: "[ทำงานเป็นทีม]", en: "[Teamwork]" }, status: "✓" },
        { name: { th: "[ภาวะผู้นำ]", en: "[Leadership]" }, status: "✓" },
        { name: { th: "[ตัดสินใจภายใต้ความกดดัน]", en: "[Decisions under pressure]" }, status: "✓" },
      ],
    },
  ],

  // ----------------------------------------------------------------- การศึกษา (TAXI)
  education: [
    {
      years: "[2566–2569]",
      title: { th: "[มัธยมศึกษาตอนปลาย · แผนวิทย์–คณิต]", en: "[Upper secondary · Science–Math]" },
      place: { th: "[ชื่อโรงเรียน]", en: "[School name]" },
      detail: { th: "[เกรดเฉลี่ย / วิชาที่ถนัด / ตำแหน่งในโรงเรียน]", en: "[GPA / strong subjects / school roles]" },
    },
    {
      years: "[2563–2566]",
      title: { th: "[มัธยมศึกษาตอนต้น]", en: "[Lower secondary]" },
      place: { th: "[ชื่อโรงเรียน]", en: "[School name]" },
      detail: { th: "[สิ่งที่โดดเด่นช่วงนี้]", en: "[Highlights from this period]" },
    },
  ],

  // ----------------------------------------------------------------- แรงบันดาลใจ (TAKEOFF)
  whyAviation: {
    text: {
      th: "[เล่าว่าทำไมอยากเรียนการบิน — จุดเริ่มต้น ช่วงเวลาที่ตัดสินใจ และสิ่งที่อยากทำให้ได้ 4–6 ประโยค]",
      en: "[Why aviation — how it started, the moment you decided, and what you want to achieve. 4–6 sentences]",
    },
    points: [
      { call: "V1", title: { th: "[จุดเริ่มต้น]", en: "[The spark]" }, text: { th: "[เหตุการณ์ที่ทำให้เริ่มสนใจ]", en: "[What first got you interested]" } },
      { call: "ROTATE", title: { th: "[ช่วงที่ตัดสินใจ]", en: "[The decision]" }, text: { th: "[อะไรทำให้มั่นใจว่าใช่]", en: "[What made you sure]" } },
      { call: "POSITIVE RATE", title: { th: "[สิ่งที่เตรียมตัวมา]", en: "[How you prepared]" }, text: { th: "[สิ่งที่ทำไปแล้วเพื่อเป้าหมายนี้]", en: "[What you have already done]" } },
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
    image: "images/airi.png",            // รูปไอริ (พื้นใสสวยสุด) — เอารูปใหม่มาทับไฟล์นี้ได้เลย
    ownerCall: { th: "พี่[ชื่อเล่น]", en: "[Nickname]" },   // ไอริเรียกคุณว่าอะไร
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
