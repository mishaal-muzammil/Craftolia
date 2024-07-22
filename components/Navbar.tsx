import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function Navbar() {
    const {isAuthenticated} = getKindeServerSession();
    return(
        <nav className="backdrop-blur-xl bg-transparent h-[9vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-primary text-3xl">Craftolia</h1>
                </Link>

                <div className="flex items-center gap-x-3">
                    <ThemeToggle/>

                    

                        {(await isAuthenticated()) ? (
                            <div className="flex items-center gap-x-3">
                                <Button variant="outline" asChild>
                                    <Link href="/dashboard">Dashboard</Link>
                                </Button>
                                <LogoutLink><Button variant="outline">Logout</Button></LogoutLink>
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-3">                       
                                <LoginLink><Button variant={"secondary"}>Sign In</Button></LoginLink>
                                <RegisterLink><Button>Get Started</Button></RegisterLink>
                            </div>

                        )}
                        
                    </div>            
                
            </div>
        </nav>
    );
}