import { HomeIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AvatarCard from "./avatar";
import { getAuthSession } from "@/utils/auth";
import Link from "next/link";

type CardProps = React.ComponentProps<typeof Card>;

export default async function AccessDenied({ className, ...props }: CardProps) {
  const session = await getAuthSession();

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card
        className={cn("w-[330px] sm:w-[500px] sm:h-[300px]", className)}
        {...props}
      >
        <CardHeader className="sm:mt-7">
          <CardTitle className="text-center md:text-lg font-bold">
            Access Denied
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 justify-items-center">
          <div className=" flex items-center space-x-4 rounded-md p-4">
            <div className="flex justify-center mx-auto">
              <AvatarCard image={session?.user.image as string} />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {session?.user.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {session?.user.email}
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Link href="/" className="w-full sm:w-72">
            <Button className="w-full">
              <HomeIcon className="mr-2 h-4 w-4" /> Go to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
