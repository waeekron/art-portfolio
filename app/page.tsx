import Image from "next/image"
export default function Home() {
  return (
    <main className="mt-10  lg:text-lg">
      <div className="flex flex-wrap items-center justify-evenly px-4 md:container  md:mx-auto  lg:h-screen lg:flex-nowrap  lg:text-lg  ">
        <div className="md:max-h-svh  ">
          <h1 className="text-5xl font-bold md:text-7xl">Anni Keskipoikela</h1>
          <div className="h-svh md:h-fit">
            <div className="mt-4 divide-x-8 pl-1 text-xl font-thin md:text-3xl">
              <span>kuvataideopettaja</span>
              <span>&</span>
              <span>taiteilija</span>
            </div>
            <div className=" mt-16 flex gap-1  ">
              <Image
                src="/images/keskittyy.jpg"
                height={170}
                width={170}
                alt="napero"
                sizes="(max-width: 600px) 50vw, (max-width: 1024px) 50vw, 50vw"
                layout="responsive"
                className="block  translate-y-12 md:hidden"
              />

              <Image
                height={170}
                sizes="(max-width: 500px) 50%, 170px"
                width={170}
                alt="napero"
                layout="responsive"
                className=" block  md:hidden"
                src="/images/sormi.jpg"
              />
            </div>
          </div>
          <article className="max-w-lg lg:mt-12">
            <h1 className="mb-8 text-4xl md:hidden">Minusta</h1>
            <p className="text-lg leading-relaxed tracking-wide lg:mt-8">
              Olen Kokkolassa (1999) syntynyt, sittemmin rovaniemeläistynyt
              kuvataideopettaja ja kuvataiteilija. Ikävöin merta ja ihailen
              vaaramaisemia. Erityisesti rakastan kaikkea käsillä tekemistä,
              retkeilyä ja kahvia. Onnellisimmillani olen oivalluksen äärellä.
              Aloillani olen harvoin. Iloa saan erityisesti jaetuista hetkistä,
              taiteesta ja kauneudesta arjessa. Luonteeltani olen toimelias,
              ihmisläheinen, utelias ja herkästi innostuva. Muiden toimesta
              minua on kuvailtu ymmärtäväiseksi, vahvan vision omaavaksi ja
              vastuuntuntoiseksi.
            </p>
          </article>
        </div>
        <div className=" lg:h[300px] mt-16 flex  justify-center gap-1  ">
          <Image
            src="/images/keskittyy.jpg"
            height={220}
            width={240}
            alt="napero"
            className=" hidden  md:block"
          />
          <Image
            height={240}
            width={240}
            alt="napero"
            className=" hidden translate-y-12 md:block"
            src="/images/sormi.jpg"
          />
        </div>
      </div>
      <section className="mx-auto mt-32  px-4 md:container ">
        <h1 className="text-4xl ">Erityisosaaminen</h1>
        <div className="mt-8 flex max-w-4xl   flex-col gap-6 font-medium leading-relaxed tracking-wide">
          <p className="border-text-secondary">
            Opinnot ja elämä pohjoisessa on tuonut mukanaan taitoja, joista koen
            olevan hyötyä työssäni sekä taiteilijana, että opettajana:
            ympäröivän luonnon sekä vuodenkierron tarkka kuuntelu ja lempeä
            elämänrytmi ovat iso osa työtäni molemmissa rooleissa. Olen myös
            tutustunut luontokasvatukseen ja ympäristötaidekasvatukseen, joiden
            tiimoilta kirjoitan parhaillaan gradua.
          </p>
          <p>
            Minulle erityisen tärkeitä ovat erilaisten vähemmistöryhmien ja
            erityistarpeita omaavien oikeudet. Olen myös perehtynyt näiden
            filosofisiin, pedagogisiin ja poliittisiin ulottuvuuksiin. Nämä
            arvot näkyvät niin taiteellisen työskentelyni aiheissa kuin työssäni
            opettajana.
          </p>
          <p>
            Olen erityisesti suuntautunut kokeelliseen
            sekatekniikkatyöskentelyyn, kuten kollaasiin sekä luonnon- ja
            kierrätysmateriaaleihin. Näitä hyödynnän sekä opettajuudessani että
            omassa taiteessani.
          </p>
          <p>
            Minulla on laaja materiaalitietämys ja kokemusta useista taiteen
            tekniikoista.
          </p>
        </div>
      </section>
      <div className="mx-auto mt-36 px-4 md:container  ">
        <h1 className="text-4xl">Ota yhteyttä</h1>
        <ul className="mt-8 flex flex-col gap-2">
          <li className="flex gap-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-7 w-7"
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
                className="h-7 w-7"
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
              className="h-7 w-7 "
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
      <div className="h-[200px]"></div>
    </main>
  )
}
