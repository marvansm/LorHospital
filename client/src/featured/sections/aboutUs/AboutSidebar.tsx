"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const SIDEBAR_LINKS = [
  { name: "Tariximiz", href: "/about-us/history" },
  { name: "Missiya və Məqsəd", href: "/about-us/mission" },
  { name: "Keyfiyyət siyasəti", href: "/about-us/quality-policy" },
  { name: "Keyfiyyətə nəzarət", href: "/about-us/quality-control" },
  { name: "Sertifikatlar", href: "/about-us/certificates" },
  { name: "Beynəlxalq Əməkdaşlıq", href: "/about-us/international" },
  { name: "Mərkəzlərimiz", href: "/about-us/centers" },
  { name: "Həkimlərimiz", href: "/about-us/doctors" },
  { name: "Məmnunluq anketi", href: "/about-us/survey" },
];

const AboutSidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-[340px] shrink-0">
      <div className="flex flex-col gap-3 ">
        {SIDEBAR_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center justify-between px-6 py-4 rounded-[12px] group transition-all duration-300 ${
                isActive
                  ? "bg-[#F4F9FF] text-[#3F3F3F]"
                  : "bg-[#F9F9F9] hover:bg-[#F4F9FF] text-[#3F3F3F]"
              }`}
            >
              <span
                className={`text-[18px] font-medium font-inter ${
                  isActive ? "text-[#3F3F3F]" : "text-[#464646]"
                }`}
              >
                {link.name}
              </span>
              <div
                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive
                    ? "bg-[#009EE2] text-white"
                    : "bg-white text-[#009EE2] group-hover:bg-[#009EE2] group-hover:text-white shadow-sm"
                }`}
              >
                <ChevronRight size={18} />
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default AboutSidebar;
