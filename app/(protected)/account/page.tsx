import { auth } from "@/auth";
import LogOutButton from "@/components/auth/logout-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AccountPage = async () => {
  const session = await auth();

  session?.user.id;

  return (
    <div>
      page account {JSON.stringify(session)}
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>Vos information</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Nom : {session?.user.name}</p>
          <p>Email : {session?.user.email}</p>
          <p>Role : {session?.user.role}</p>
        </CardContent>
        <CardFooter>
          <Button className="mr-4">Modifier</Button>
          <LogOutButton />
        </CardFooter>
      </Card>
    </div>
  );
};

export default AccountPage;
