import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import ShineBorder from "@/components/magicui/shine-border";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { Button } from "@/components/ui/button";

import {
  getKindeServerSession,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight, ChevronRight, Link } from "lucide-react";

export default async function Hero() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <section>
    <BackgroundGradientAnimation className="pt-40 h-20" size="25%" interactive firstColor="hsl(var(--primary))" secondColor="#82D4FC" thirdColor="#3114B3" gradientBackgroundStart="hsl(var(--background))" gradientBackgroundEnd="hsl(var(--secondary))" pointerColor="var(--destructive)">

      <div className="z-50 relative max-w-3xl mx-auto text-center flex flex-col items-center justify-center gap-3 py-4 lg:py-12">

        { /*
        <p
          className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full  bg-transparent px-6 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:bg-white/5" target="_blank"
        >
          <p className="text-sm font-semibold text-muted-foreground [text-wrap:balance]">
            Introducing Personal Portfolio Builder
            </p>
          <div className="group relative flex items-center">
          <ChevronRight className="absolute -ml-1 h-3.5 w-3.5 transition-all group-hover:translate-x-1 group-hover:opacity-0" />
            <ArrowRight className="absolute -ml-1 h-3.5 w-3.5 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
          </div>
        </p>

        gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",

        */}

        <p className="2xl:text-[5rem mt-6 max-w-xl text-center text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-none">
          {/*<Balancer>*/}
          {/* <span className="hero-underline underline	decoration-purple-300 decoration-solid"> */}
          Create your <span className="opacity-[.5]">perfected</span> portfolio{" "}
          <span className="opacity-[0.5]">- no coding</span>
          {/*</Balancer>*/}
        </p>

        <p className="2xl:text-md text-center text-base text-muted-foreground md:text-lg">
        Skip the design work and create a professional online presence in minutes with our diverse range of pre-built templates. Customize and launch your portfolio with ease.
.
        </p>

        <div className="mx-auto mt-6 sm:max-w-none sm:flex sm:justify-center gap-x-3">
          {(await isAuthenticated()) ? (
            <Button>Start Building</Button>
          ) : (
            <Button>
              <LoginLink>Get Started for Free</LoginLink>
            </Button>
          )}
        </div>
      </div>
            </BackgroundGradientAnimation>
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
