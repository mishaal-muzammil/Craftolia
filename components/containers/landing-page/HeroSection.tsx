'use client';

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import ShineBorder from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";

import {useKindeBrowserClient, LoginLink} from "@kinde-oss/kinde-auth-nextjs";

import { ArrowRight, ChevronRight, Link } from "lucide-react";

export default function Hero() {
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <section>
      <div className="relative h-screen max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-3 py-4 lg:py-12">
        
        <p className="2xl:text-[4rem] mt-6 max-w-xl text-center text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-none">
          Create your <span className="opacity-[.5]">perfected</span> portfolio{" "}
          <span className="opacity-[0.5]">- no coding</span>
        </p>

        <p className="2xl:text-md text-center text-base text-muted-foreground md:text-lg ">
        Skip the design work and create a professional online presence in minutes with our diverse range of pre-built templates. Customize and launch your portfolio with ease.
.
        </p>

        <div className="mx-auto mt-6 sm:max-w-none sm:flex sm:justify-center gap-x-3">
          {(isAuthenticated) ? (
            <Button>Start Building</Button>
          ) : (
            <Button size="default">
              <LoginLink>Get Started Now</LoginLink>
            </Button>
          )}
        </div>

        <div className="backdrop-shadow -z-10"></div>
      </div>
    </section>
  );
}

export function Blur() {
  return (
    <div
      className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 pointer-events-none"
    >
      <div className="fix-safari-blur blur-[126px] h-32 bg-gradient-to-br from-blue-500 to-blue-900 dark:from-blue-700"></div>
      <div className="fix-safari-blur blur-[186px] h-40 bg-gradient-to-b from-blue-400 to-blue-500 dark:to-blue-600"></div>
    </div>
  );
}
