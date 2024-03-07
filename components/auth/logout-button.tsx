import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const LogOutButton = async () => {
  const session = await auth();

  session?.user.id;

  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button className="w-full" type="submit" variant="destructive">
          Log out
        </Button>
      </form>
    </div>
  );
};

export default LogOutButton;
