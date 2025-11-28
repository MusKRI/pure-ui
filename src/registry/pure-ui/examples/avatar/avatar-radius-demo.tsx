import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/pure-ui/ui/avatar";

export function AvatarRadiusDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-none">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-md">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-xl">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-full">
        <AvatarImage
          alt="User"
          src="https://pbs.twimg.com/profile_images/1904866883041714179/MhesgL6S_400x400.jpg"
        />
        <AvatarFallback>AV</AvatarFallback>
      </Avatar>
    </div>
  );
}
