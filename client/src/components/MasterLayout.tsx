import Header from "./Header";

interface MasterLayoutProps {
  child: React.ReactNode;
}
export default function MasterLayout({ child }: MasterLayoutProps) {
  return (
    <>
      <Header />
      {child}
    </>
  );
}
