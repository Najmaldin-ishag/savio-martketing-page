"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
}

export function SavioLogo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-savio-orange", className)}
    >
      {/* Savio asterisk/star logo */}
      <path
        d="M16 2L18.5 12.5L28 10L20.5 16L28 22L18.5 19.5L16 30L13.5 19.5L4 22L11.5 16L4 10L13.5 12.5L16 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SavioLogoFull({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* <SavioLogo size={28} /> */}
      <Image src="/imgs/icon.png" alt="savio icon" width={28} height={28} />
      <span className="text-xl font-semibold text-savio-text">Savio</span>
    </div>
  );
}
