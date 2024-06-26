import Image from "next/image"
export default function Home() {
  return (
    <main className=" mb-8 min-h-screen lg:text-lg">
      <div className="flex flex-wrap items-center justify-evenly px-4 pt-10 md:container md:mx-auto  lg:h-screen lg:flex-nowrap  lg:text-lg  ">
        <div className="">
          <div className="  min-h-svh  sm:h-auto sm:min-h-fit">
            <div className="flex gap-8 ">
              <div className="flex">
                <div className="self-start text-end text-7xl font-extrabold [text-orientation:upright] [writing-mode:vertical-rl] ">
                  anni
                </div>
                <div className="pb-5 text-end text-xl font-bold tracking-widest [text-orientation:upright] [writing-mode:vertical-rl]">
                  keskipoikela
                </div>
              </div>
              <div className="flex w-full flex-col justify-center">
                <Image
                  alt="Kuva Anni Keskipoikelasta"
                  src={"/images/anskupansku.jpg"}
                  width={360}
                  height={360}
                  className=" rounded-full "
                />
              </div>
            </div>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-start">
              <article className="h-fit  max-w-xl px-4">
                <q className="text-lg font-semibold italic leading-relaxed tracking-wide">
                  Olen Kokkolassa (1999) syntynyt, sittemmin rovaniemeläistynyt
                  kuvataideopettaja ja kuvataiteilija. Ikävöin merta ja ihailen
                  vaaramaisemia. Erityisesti rakastan kaikkea käsillä tekemistä,
                  retkeilyä ja kahvia. Onnellisimmillani olen oivalluksen
                  äärellä. Aloillani olen harvoin. Iloa saan erityisesti
                  jaetuista hetkistä, taiteesta ja kauneudesta arjessa.{" "}
                </q>
              </article>
            </div>{" "}
            {/* <div className="flex flex-col justify-end align-bottom  sm:hidden">
              <h1 className="mt-6  text-xl font-semibold">Ota yhteyttä</h1>
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </span>
                  <span className="self-end"> ankeskip@ulapland.fi</span>
                </li>
                <li className="flex gap-4">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </span>
                  <span className="items-end self-end">0406741709</span>
                </li>
                <li className="flex gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="items-end self-end">Rovaniemi, Lappi</span>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="mt-8 px-4">
            <h1 className="text-xl font-semibold">Ota yhteyttä</h1>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="flex gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <span className="self-end"> ankeskip@ulapland.fi</span>
              </li>
              <li className="flex gap-4">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </span>
                <span className="items-end self-end">0406741709</span>
              </li>
              <li className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="items-end self-end">Rovaniemi, Lappi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
