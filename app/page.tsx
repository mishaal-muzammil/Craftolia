import { Button } from "@/components/ui/button";
import { ThemeToggle } from "../components/ThemeToggle";
import HeroSection from "@/components/containers/landing-page/HeroSection";

export default async function LandingPage() {
  return (
    <><div className="absolute top-0 -z-10 h-full w-full">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[20%] translate-y-[20%] rounded-full bg-primary/50 opacity-50 blur-[80px]" />
      <div className="hidden md:flex absolute left-0 bottom-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/50 opacity-50 blur-[80px]" />
    </div><HeroSection /></>
  );
}
