import React from "react"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex min-h-svh w-[100vw] items-center justify-center  bg-[#E4E5E9] text-[#184133]">
        {children}
      </main>
    </>
  )
}
