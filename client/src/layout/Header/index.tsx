import Image from "next/image";
import {
  ChevronDown,
  CircleUser,
  Facebook,
  Globe,
  Instagram,
  Phone,
  Search,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const Header = () => {
  return (
    <header className="w-full">
      <div className="border-b border-[#F2F2F2]">
        <Container className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <Facebook
              size={16}
              className="text-[#8A8A8A] cursor-pointer hover:text-[#0095DA] transition-colors"
            />
            <Instagram
              size={16}
              className="text-[#8A8A8A] cursor-pointer hover:text-[#E4405F] transition-colors"
            />
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer group">
              <CircleUser
                size={18}
                className="text-[#8A8A8A] group-hover:text-[#464646]"
              />
              <span className="text-[14px] text-[#8A8A8A] group-hover:text-[#464646] font-inter">
                Daxil olun
              </span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer group">
              <Globe
                size={18}
                className="text-[#8A8A8A] group-hover:text-[#464646]"
              />
              <span className="text-[14px] text-[#8A8A8A] group-hover:text-[#464646] font-inter flex items-center gap-1">
                Az <ChevronDown size={14} />
              </span>
            </div>
          </div>
        </Container>
      </div>
      <nav>
        <Container className="py-5 flex items-center justify-between">
          <div className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Lor Hospital Logo"
              width={180}
              height={60}
              className="h-auto w-auto object-contain"
            />
          </div>

          <ul className="flex items-center gap-8">
            {[
              "Haqqımızda",
              "Xidmətlər",
              "Referans Eşitmə",
              "Xəbərlər",
              "Əlaqə",
            ].map((link) => (
              <li
                key={link}
                className="text-[#8A8A8A] hover:text-[#464646] font-inter font-bold text-[18px] cursor-pointer transition-colors"
              >
                {link}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border border-[#E8E8E8] rounded-full px-4 py-2 w-[220px]">
              <Search size={18} className="text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Axtarış"
                className="outline-none border-none text-[16px] w-full font-inter placeholder:text-[#8A8A8A]"
              />
            </div>

            <Button icon={Phone} className="pl-1 pr-5 py-1">
              <span className="text-[28px]">
                <span className="text-[20px] font-normal align-top">*</span>0111
              </span>
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
