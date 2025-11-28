import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/pure-ui/ui/avatar";

export function AvatarSizeDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  );
}
