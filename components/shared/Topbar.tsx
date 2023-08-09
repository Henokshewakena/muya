import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton } from "@clerk/nextjs";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex-items-center gap-4">
        <Image src="/assets/logo.png" alt="logo" width={70} height={70} />
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <UserButton />
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
