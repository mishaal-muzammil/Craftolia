import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";


export async function Navbar() {
    const {isAuthenticated} = getKindeServerSession();
    return(
        <nav className="border-b bg-background h-[10vh] flex items-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-bold text-3xl">Craftolia</h1>
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
                                <RegisterLink><Button variant="secondary">Sign Up</Button></RegisterLink>
                                <LoginLink><Button>Sign In</Button></LoginLink>
                            </div>

                        )}
                        
                    </div>            
                
            </div>
        </nav>
    );
}