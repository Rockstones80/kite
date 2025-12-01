"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudioPage = pathname?.startsWith("/Studio");

  return (
    <>
      {!isStudioPage && <Navbar />}
      {children}
      {!isStudioPage && <Footer />}
    </>
  );
}
