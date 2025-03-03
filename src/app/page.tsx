import ModeToggle from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
<<<<<<< Updated upstream
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle/>
      <Button variant={"secondary"}>Click Me</Button>
=======
      <h1>Home page content</h1>
>>>>>>> Stashed changes
    </div>
  );
}
