import { BlocksNav } from "components/composed/blocks-nav";

export default function BlocksPathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-64px)] relative">
      <div className="h-full flex-1 flex flex-row">
        <BlocksNav />
        <div className="flex-1 lg:ml-[340px]">{children}</div>
      </div>
    </div>
  );
}
