import { Header } from "components/composed/header";
import { PureUILayoutWrapper } from "components/composed/content-ui";

export default function PureUILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-svh">
      <Header />
      <PureUILayoutWrapper>{children}</PureUILayoutWrapper>
    </div>
  );
}
