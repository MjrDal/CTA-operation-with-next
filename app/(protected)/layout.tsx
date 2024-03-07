import { Header } from "@/components/layout/Header";
function Protectedlayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default Protectedlayout;
