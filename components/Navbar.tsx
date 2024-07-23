"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useState } from "react";
import { Menu } from "lucide-react";

interface RouteProps {
  label: string;
  href: string;
}
const navMenuRoutes: RouteProps[] = [
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isAuthenticated } = useKindeBrowserClient();
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-transparent w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-[8vh] px-8 w-screen flex justify-between">
          <NavigationMenuItem className="font-bold text-foreground dark:text-primary text-3xl">
            <Link href="/">Craftolia</Link>
          </NavigationMenuItem>

          {/* Mobile Nav */}
          <span className="flex md:hidden">
            <ThemeToggle />

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                </Menu>
              </SheetTrigger>

              <SheetContent className="w-full rounded-b-xl" side={"top"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-center text-2xl">
                  Craftolia
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {navMenuRoutes.map(({ href, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {navMenuRoutes.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-x-3">
                <Button variant="outline" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <LogoutLink>
                  <Button variant="outline">Logout</Button>
                </LogoutLink>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <LoginLink>
                  <Button
                    className="border dark:border-none"
                    variant="secondary"
                  >
                    Sign In
                  </Button>
                </LoginLink>
                <RegisterLink>
                  <Button>Get Started</Button>
                </RegisterLink>
              </div>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
