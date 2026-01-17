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
  { name: "Haqqımızda", href: "/about" },
  { name: "Xidmətlər", href: "/services" },
  { name: "Həkimlər", href: "/doctors" },
  { name: "Əlaqə", href: "/contact" },
];
