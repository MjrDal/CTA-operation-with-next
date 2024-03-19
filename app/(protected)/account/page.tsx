import { auth } from "@/auth";
import LogOutButton from "@/components/auth/logout-button";
import { UserAvatar } from "@/components/layout/Avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const AccountPage = async () => {
  const session = await auth();

  session?.user.id;

  return (
    <div>
      page account {JSON.stringify(session)}
      <Card>
        <CardHeader>
          <CardTitle>
            <UserAvatar />
            Account
          </CardTitle>
          <CardDescription>Vos information</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Nom : {session?.user.name}</p>
          <p>Email : {session?.user.email}</p>
          <p>Role : {session?.user.role}</p>
        </CardContent>
        <CardFooter>
          <Button className="mr-4">Modifier</Button>
          <Link href="/settings">
            <Button className="mr-4">Admin</Button>
          </Link>
          <LogOutButton />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountPage;
