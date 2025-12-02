import { Header } from "components/composed/header";
import { MobileMenu } from "components/composed/mobile-menu";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <Header />
      <MobileMenu />
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
}
