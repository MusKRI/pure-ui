import { Sidebar } from "@/core/components/composed/sidebar";

export default function PureUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="h-full flex-1 flex flex-row mt-16">
        <Sidebar />
        <div className="flex-1 lg:ml-[260px]">{children}</div>
      </div>
    </div>
  );
}
