import { auth } from "@/auth";
import { LogoutForm } from "@/components/auth/logout-form";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGear } from "react-icons/fa6";
import { UserAvatar } from "./Avatar";

export const Header = async () => {
  const session = await auth();

  session?.user.id;
  return (
    <header className="p-5 w-full flex flex-row justify-between bg-slate-400">
      <div>
        <Image
          src="/images/logo.png"
          width={50}
          height={35}
          alt="logo du site"
        />
      </div>
      <nav className="flex flex-row items-center">
        <div className="mr-2">Opérateur: {session?.user.name}</div>
        <UserAvatar />
        <Link href="/account">
          <Button className="mr-2" variant="outline" size="sm">
            <FaGear />
          </Button>
        </Link>
        <LogoutForm />
      </nav>
    </header>
  );
};
