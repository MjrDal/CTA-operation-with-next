import { auth } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserAvatar = async () => {
  const session = await auth();
  const placeHolderImage = `https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${session?.user.email}`;
  const finalImage = session?.user.image ?? placeHolderImage;
  session?.user.id;
  return (
    <Avatar className="mr-5">
      <AvatarImage src={finalImage} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
