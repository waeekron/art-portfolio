import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-dvh  bg-slate-50 pt-12">{children}</main>
    </>
  );
}
