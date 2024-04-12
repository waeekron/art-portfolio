"use client"
import Link from "next/link"
import { Drawer, DrawerContent, DrawerHeader } from "./ui/drawer"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function MainNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 z-20 flex h-screen ">
        <span
          role="button"
          className="fixed z-50 px-4 pt-1 text-xl font-bold text-text-secondary transition-all duration-150 hover:underline  md:text-3xl lg:pl-14 "
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? "sulje" : "valikko"}
        </span>
        <div
          id="menu"
          className={`${open ? "translate-y-[0%]" : "translate-y-[150%]"}  fixed z-10 h-screen transition-all duration-500 ease-in-out`}
        >
          <div className=" h-dvh w-screen max-w-none  ">
            {" "}
            <div className="flex  h-screen flex-col justify-around bg-menu_bg align-baseline">
              {" "}
              <ul className="ml-4 mt-4 flex w-fit items-center gap-7 border-b-8 border-attention pb-3 md:ml-14">
                <li
                  role="button"
                  className="mr-2 size-8  rounded-full bg-attention pt-2 text-center text-2xl font-extrabold text-white"
                ></li>
                <li>
                  <Link
                    href={"https://www.instagram.com/anni_keskipoikela/"}
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 cursor-pointer hover:fill-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href={"mailto:annikeskipoikela@gmail.com"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7 cursor-pointer hover:fill-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                  </Link>
                </li>
              </ul>
              <ul
                className="ml-4 mt-4 flex flex-col gap-16 text-text-secondary md:ml-12"
                onClick={() => setOpen(!open)}
              >
                <li className=" width-[100%] mt-2 md:block">
                  <Link
                    href={"/"}
                    className="block w-full py-2  text-5xl font-semibold transition-all duration-100  hover:text-slate-100 md:inline  md:text-7xl"
                  >
                    Etusivu
                  </Link>
                </li>

                <li className="">
                  <Link
                    href={"/taide-portfolio"}
                    className="block w-full py-2 text-5xl font-semibold  transition-all  duration-100 hover:text-slate-100 md:inline md:text-7xl "
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
              <div className="self-end">
                <Image
                  className="self-end pr-8"
                  src="/images/karhu.png"
                  width={100}
                  height={100}
                  sizes=""
                  alt="_"
                ></Image>
              </div>
            </div>
          </div>
        </div>

        {/* 
 <div className="bg-menu_bg flex h-svh  flex-col justify-around  ">
            {" "}
            <ul className="ml-4 flex gap-7  md:ml-14">
              <li className="bg-attention size-8 rounded-full"></li>
              <li>
                <Link
                  href={"https://www.instagram.com/anni_keskipoikela/"}
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 cursor-pointer hover:fill-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href={"mailto:annikeskipoikela@gmail.com"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 cursor-pointer hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                  </svg>
                </Link>
              </li>
            </ul>
            <ul
              className="text-text-secondary ml-4 mt-4 flex flex-col gap-16 md:ml-12"
              onClick={() => setOpen(!open)}
            >
              <li className=" width-[100%] mt-2 md:block">
                <Link
                  href={"/"}
                  className="block w-full py-2 pl-4 text-5xl font-semibold transition-all duration-100  hover:text-slate-100 md:inline  md:text-7xl"
                >
                  Etusivu
                </Link>
              </li>

              <li className="">
                <Link
                  href={"/taide-portfolio"}
                  className="block w-full py-2 pl-4 text-5xl font-semibold  transition-all  duration-100 hover:text-slate-100 md:inline md:text-7xl "
                >
                  Portfolio
                </Link>
              </li>
            </ul>
            <Image
              className="self-end pr-2"
              src="/images/karhu.png"
              width={100}
              height={100}
              sizes=""
              alt="_"
            ></Image>
          </div>
            <NavigationMenu className="hidden  sm:flex ">
                <NavigationMenuList className="gap-12">
                    <NavigationMenuItem>
                        <Link href={"/"} className="font-semibold">
                            Minä
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href={"#"} className="font-semibold">
                            Opettaja portfolio
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link
                            href={"/taide-portfolio"}
                            className="font-semibold"
                        >
                            Taide portfolio
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu> */}
      </div>
    </>
  )
}
