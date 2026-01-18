"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#009EE2] pt-20 pb-10 text-white relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 px-4 xl:px-0">
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative w-[180px] h-[60px]">
                <Image
                  src="/images/whiteLogo.png"
                  alt="Lor Hospital Logo"
                  fill
                  sizes="(max-width: 768px) 180px, 180px"
                  className="object-contain"
                />
              </div>
              <p className="text-[24px] font-bold font-inter leading-[32px] max-w-[320px]">
                <span className="text-[24px] font-normal leading-[32px]">
                  Qafqazın ilk və yeganə
                </span>{" "}
                <br />
                QULAQ BURUN BOĞAZ VƏ <br />
                BAŞ-BOYUN MƏRKƏZİ!
              </p>
            </div>

            <div className="flex items-center gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: MessageCircle, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                >
                  <social.Icon size={24} className="text-[#009EE2]" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col gap-6">
            <h3 className="text-[24px] font-bold font-inter uppercase tracking-wide">
              ƏLAQƏ
            </h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <Phone size={22} className="shrink-0 mt-1" />
                <span className="text-[20px] font-bold font-inter">*0111</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={22} className="shrink-0 mt-1" />
                <a
                  href="mailto:info@lorhospital.az"
                  className="text-[18px] font-medium font-inter underline underline-offset-4"
                >
                  info@lorhospital.az
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={22} className="shrink-0 mt-1" />
                <span className="text-[18px] font-medium font-inter leading-relaxed">
                  Bakı ş., Nərimanov r., Əhməd <br />
                  Rəcəbli 19K, AZ1075
                </span>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-[24px] font-bold font-inter uppercase tracking-wide">
                ABUNƏ OLUN
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Facebook size={20} />
                  <span className="text-[18px] font-medium font-inter">
                    Lor Hospital
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={20} />
                  <span className="text-[18px] font-medium font-inter">
                    Lor Hospital
                  </span>
                </div>
              </div>
            </div>

            <div className="relative mt-4">
              <div className="flex items-center justify-between bg-[#009EE2] border border-white/50 rounded-full pl-6 pr-2 py-2">
                <input
                  type="text"
                  placeholder="Sualınız var?"
                  className="bg-transparent text-white placeholder:text-white/70 outline-none text-[18px] font-inter w-full"
                />
                <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#009EE2] transition-transform hover:scale-105 cursor-pointer">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-10 flex justify-end">
          <button
            onClick={scrollToTop}
            className="w-[50px] h-[50px] border border-white/40 rounded-full flex items-center justify-center transition-all hover:bg-white/10 cursor-pointer"
          >
            <ChevronUp size={30} />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
