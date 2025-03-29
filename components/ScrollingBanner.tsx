import React from "react";
import { Separator } from "@/components/ui/separator";

// Définition de l'interface des props
interface ScrollingBannerProps {
  className?: string;
}

const ScrollingBanner = ({ className = "" }: ScrollingBannerProps) => {
  return (
    <div className={`w-full ${className}`}>
<div className="w-full bg-blue-700 text-white overflow-hidden py-1 h-[29px] whitespace-nowrap"> 
            <div
          className="flex items-center gap-2 animate-scroll"
          style={{
            animation: "scroll 20s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="mx-2 font-bold">
              $KNOWLEDGE
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default ScrollingBanner;
