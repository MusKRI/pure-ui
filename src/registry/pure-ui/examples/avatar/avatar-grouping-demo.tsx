import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/pure-ui/ui/avatar";

export function AvatarGroupingDemo() {
  return (
    <div className="-space-x-[0.6rem] flex">
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          alt="U1"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          alt="U2"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="ring-2 ring-background">
        <AvatarImage
          alt="U3"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
    </div>
  );
}
