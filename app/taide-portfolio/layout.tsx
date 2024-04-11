import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-svh bg-[#E4E5E9] pt-12 text-[#184133]">
        {children}
      </main>
    </>
  )
}
