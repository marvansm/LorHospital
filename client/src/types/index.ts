export interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
  experience?: string;
  patientCount?: number;
  reviewCount?: number;
  position?: string;
  center?: string;
  education?: string[];
  treatments?: string[];
}

export interface InfoCard {
  id: number;
  date: string;
  title: string;
  image: string;
  link: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface SocialLink {
  platform: "facebook" | "instagram" | "youtube" | "whatsapp" | "linkedin";
  href: string;
}
