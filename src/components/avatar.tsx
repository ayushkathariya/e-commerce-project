import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type AvatarCardProps = {
  image: string;
};

export default function AvatarCard({ image }: AvatarCardProps) {
  return (
    <Avatar>
      <Image src={image} alt="avt" width={50} height={50} />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
  );
}
