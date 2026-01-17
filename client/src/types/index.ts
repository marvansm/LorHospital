export interface Doctor {
  id: number;
  name: string;
  title: string;
  image: string;
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
