import Image from "next/image";
import { ReactNode } from "react";
import BackgroundImage from "@/public/background-image.jpg";
import Logo from "@/public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-screen w-screen flex flex-col items-center justify-center">
      <Image
        src={BackgroundImage}
        alt="background image"
        className="sm:object-cover -z-10 brightness-50"
        priority
        fill
      />

      <Image
        src={Logo}
        alt="Logo"
        width={140}
        height={140}
        priority
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
      />
      {children}
    </div>
  );
}
