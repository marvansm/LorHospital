"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
import { NAVIGATION_LINKS } from "@/constants";

const NavItem = ({ link }: { link: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={link.href}
        className={`text-[#8A8A8A] hover:text-[#009EE2] font-inter font-bold text-[18px] cursor-pointer transition-colors flex items-center gap-1 py-5 ${
          isOpen ? "text-[#009EE2]" : ""
        }`}
      >
        {link.name}
        {link.dropdown && (
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      <AnimatePresence>
        {isOpen && link.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 min-w-[280px] bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.08)] rounded-[12px] py-4 z-100 border border-[#F2F2F2]"
          >
            <ul className="flex flex-col gap-1">
              {link.dropdown.map((sub: any) => (
                <li key={sub.name}>
                  <Link
                    href={sub.href}
                    className="block px-6 py-2.5 text-[16px] font-medium font-inter text-[#464646] hover:bg-[#F8F9FA] hover:text-[#009EE2] transition-all"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="w-full relative bg-white z-50">
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
            <div
              className="relative flex items-center gap-2 cursor-pointer group py-1"
              onMouseEnter={() => setIsLangOpen(true)}
              onMouseLeave={() => setIsLangOpen(false)}
            >
              <Globe
                size={18}
                className={`transition-colors ${
                  isLangOpen
                    ? "text-[#009EE2]"
                    : "text-[#8A8A8A] group-hover:text-[#464646]"
                }`}
              />
              <span
                className={`text-[14px] font-inter flex items-center gap-1 transition-colors ${
                  isLangOpen
                    ? "text-[#009EE2]"
                    : "text-[#8A8A8A] group-hover:text-[#464646]"
                }`}
              >
                Az{" "}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`}
                />
              </span>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[70px] bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-[8px] py-2 z-[110] border border-[#F2F2F2]"
                  >
                    {/* Small Arrow */}
                    <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white"></div>

                    <ul className="flex flex-col text-center">
                      <li className="px-3 py-1 text-[13px] font-bold text-[#8A8A8A] hover:text-[#009EE2] transition-colors cursor-pointer">
                        RU
                      </li>
                      <li className="px-3 py-1 text-[13px] font-bold text-[#8A8A8A] hover:text-[#009EE2] transition-colors cursor-pointer">
                        ENG
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>

      <nav className="border-b border-[#F2F2F2]">
        <Container className="flex items-center justify-between">
          <div className="shrink-0 py-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Lor Hospital Logo"
                width={160}
                height={50}
                className="h-auto w-auto object-contain"
              />
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-8 h-full">
            {NAVIGATION_LINKS.map((link) => (
              <NavItem key={link.name} link={link} />
            ))}
          </ul>

          <div className="flex items-center gap-4 py-4">
            <div className="hidden xl:flex items-center gap-2 border border-[#E8E8E8] rounded-full px-4 py-2 w-[220px] focus-within:border-[#009EE2] transition-colors">
              <Search size={18} className="text-[#8A8A8A]" />
              <input
                type="text"
                placeholder="Axtarış"
                className="outline-none border-none text-[16px] w-full font-inter placeholder:text-[#8A8A8A] bg-transparent"
              />
            </div>

            <Button icon={Phone} className="pl-1 pr-5 py-1 h-[48px]">
              <span className="text-[24px] font-bold">
                <span className="text-[18px] font-normal align-top">*</span>0111
              </span>
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
