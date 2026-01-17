import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  showIconContainer?: boolean;
  iconPosition?: "left" | "right";
  fillIcon?: boolean;
  strokeWidth?: number;
}

const Button = ({
  children,
  icon: Icon,
  variant = "primary",
  className = "",
  onClick,
  showIconContainer = true,
  iconPosition = "left",
  fillIcon = true,
  strokeWidth = 1,
}: ButtonProps) => {
  const variants = {
    primary: "bg-linear-to-r from-[#0095DA] to-[#19B6FF]",
    secondary: "bg-linear-to-r from-[#19B6FF] to-[#0095DA]",
  };

  const iconClasses =
    "w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0";

  const renderIcon = () => {
    if (!Icon || !showIconContainer) return null;

    return (
      <div className={iconClasses}>
        <Icon
          size={20}
          color="white"
          strokeWidth={strokeWidth}
          fill={fillIcon ? "white" : "none"}
        />
      </div>
    );
  };

  return (
    <button
      onClick={onClick}
      className={`relative flex items-center justify-between rounded-full gap-3 cursor-pointer shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-105 active:scale-95 ${variants[variant]} ${className}`}
    >
      {iconPosition === "left" && renderIcon()}
      <span className="text-white font-inter font-bold leading-tight">
        {children}
      </span>
      {iconPosition === "right" && renderIcon()}
      {!showIconContainer && Icon && <Icon className="text-white" size={20} />}
    </button>
  );
};

export default Button;
