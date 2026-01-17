import { Doctor, InfoCard, Testimonial } from "@/types";

export const DOCTORS: Doctor[] = [
  {
    id: 1,
    name: "Dr. Aqil Ağayev",
    title: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "/images/aqil.png",
  },
  {
    id: 2,
    name: "Dr. Nigar Muradova",
    title: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "/images/nigar.png",
  },
  {
    id: 3,
    name: "Dr. Xəyyam Musayev",
    title: "Qulaq Burun Boğaz və Baş-Boyun Cərrahiyyəsi uzmanı",
    image: "/images/xayyam.png",
  },
  {
    id: 4,
    name: "Dr. Aqil Ağayev",
    title: "Qulaq Burun Boğaz cərrahı, Otonevroloq",
    image: "/images/aqil.png",
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
    href: "/haqqimizda",
    dropdown: [
      { name: "Tariximiz", href: "/haqqimizda/tariximiz" },
      { name: "Missiya və məqsəd", href: "/haqqimizda/missiya" },
      { name: "Keyfiyyət siyasəti", href: "/haqqimizda/keyfiyyet-siyaseti" },
      { name: "Keyfiyyətə nəzarət", href: "/haqqimizda/keyfiyyete-nezaret" },
      { name: "Sertifikatlar", href: "/haqqimizda/sertifikatlar" },
      { name: "Beynəlxalq Əməkdaşlıq", href: "/haqqimizda/emekdasliq" },
      { name: "Mərkəzlərimiz", href: "/haqqimizda/merkezlerimiz" },
      { name: "Həkimlərimiz", href: "/haqqimizda/hekimlerimiz" },
      { name: "Məmnunluq anketi", href: "/haqqimizda/anket" },
    ],
  },
  {
    name: "Xidmətlər",
    href: "/xidmetler",
    dropdown: [
      { name: "Başgicəllənmə Mərkəzi", href: "/xidmetler/basgicellenme" },
      {
        name: "Estetik və Plastik Cərrahiyyə Mərkəzi",
        href: "/xidmetler/estetik",
      },
      { name: "Səs Mərkəzi", href: "/xidmetler/ses" },
      { name: "Eşitmə Mərkəzi", href: "/xidmetler/esitme" },
      { name: "Üz və Çənə Cərrahiyyə Mərkəzi", href: "/xidmetler/uz-cene" },
      { name: "Astma və Ağciyər Mərkəzi", href: "/xidmetler/astma" },
      { name: "Yuxu Mərkəzi", href: "/xidmetler/yuxu" },
      { name: "Koxlear implantasiya", href: "/xidmetler/koxlear" },
    ],
  },
  { name: "Referans Eşitmə", href: "/referans-esitme" },
  { name: "Xəbərlər", href: "/xeberler" },
  { name: "Əlaqə", href: "/elaqe" },
];
