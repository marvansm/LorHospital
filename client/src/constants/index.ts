import { Doctor, InfoCard, Testimonial } from "@/types";

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Nigar Muradova",
    title: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "/images/nigar.png",
  },
  {
    id: 2,
    name: "Dr. Nuray Şükürova",
    title: "Qulaq Burun Boğaz cərrahı",
    image: "/images/xayyam.png",
  },
  {
    id: 3,
    name: "Dr. Kamilə Allahverdiyeva",
    title: "Qulaq Burun Boğaz həkimi",
    image: "/images/aqil.png",
  },
  {
    id: 4,
    name: "Dr. Mahtaban Qədiməli",
    title: "Qulaq Burun Boğaz cərrahı",
    image: "/images/xayyam.png",
  },
];

export const INFO_CARDS: InfoCard[] = [
  {
    id: 1,
    date: "28 mart 2025",
    title: "Qulaq xəstəlikləri",
    image: "/images/Timpanometriya.png",
    link: "#",
  },
  {
    id: 2,
    date: "24 iyun 2025",
    title: "Burun xəstəlikləri",
    image: "/images/burun.png",
    link: "#",
  },
  {
    id: 3,
    date: "1 avqust 2025",
    title: "Baş-Boyun cərrahiyyəsi",
    image: "/images/bogaz.png",
    link: "#",
  },
  {
    id: 4,
    date: "28 mart 2025",
    title: "Lor əməliyyatı zamanı anesteziya",
    image: "/images/lor.png",
    link: "#",
  },
  {
    id: 5,
    date: "15 aprel 2025",
    title: "Uşaq lor xəstəlikləri",
    image: "/images/bogaz.png",
    link: "#",
  },
  {
    id: 6,
    date: "10 may 2025",
    title: "Endoskopik burun cərrahiyyəsi",
    image: "/images/burun.png",
    link: "#",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    rating: 5,
    avatar: "/images/avatar.png",
  },
  {
    id: 2,
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    rating: 5,
    avatar: "/images/avatar.png",
  },
  {
    id: 3,
    name: "Aysel Bağışlı",
    text: "5 ilə yaxındır müraciət etdiyimiz və xidmətindən razı qaldığımız hospital! Hər birinizə uğurlar.",
    rating: 5,
    avatar: "/images/avatar.png",
  },
];

export const NAVIGATION_LINKS = [
  {
    name: "Haqqımızda",
    href: "/about-us",
    dropdown: [
      { name: "Tariximiz", href: "/about-us/history" },
      { name: "Missiya və məqsəd", href: "/about-us/mission" },
      { name: "Keyfiyyət siyasəti", href: "/about-us/quality-policy" },
      { name: "Keyfiyyətə nəzarət", href: "/about-us/quality-control" },
      { name: "Sertifikatlar", href: "/about-us/certificates" },
      { name: "Beynəlxalq Əməkdaşlıq", href: "/about-us/international" },
      { name: "Mərkəzlərimiz", href: "/about-us/centers" },
      { name: "Həkimlərimiz", href: "/about-us/doctors" },
      { name: "Məmnunluq anketi", href: "/about-us/survey" },
    ],
  },
  {
    name: "Xidmətlər",
    href: "/services",
    dropdown: [
      { name: "Başgicəllənmə Mərkəzi", href: "/services/dizziness" },
      {
        name: "Estetik və Plastik Cərrahiyyə Mərkəzi",
        href: "/services/aesthetic",
      },
      { name: "Səs Mərkəzi", href: "/services/voice" },
      { name: "Eşitmə Mərkəzi", href: "/services/hearing" },
      {
        name: "Üz və Çənə Cərrahiyyə Mərkəzi",
        href: "/services/maxillofacial",
      },
      { name: "Astma və Ağciyər Mərkəzi", href: "/services/asthma-lung" },
      { name: "Yuxu Mərkəzi", href: "/services/sleep" },
      { name: "Koxlear implantasiya", href: "/services/cochlear" },
    ],
  },
  { name: "Referans Eşitmə", href: "/reference-hearing" },
  { name: "Xəbərlər", href: "/news" },
  { name: "Əlaqə", href: "/contact" },
];
