import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

async function getTaidePortfolioData() {
  const token = process.env.SB_TOKEN
  const version = process.env.VERSION
  const url = `https://api.storyblok.com/v2/cdn/stories/art-portfolio?version=${version}&token=${token}`
  let req = await fetch(url, { cache: "no-store" })

  const storyData = await req.json()
  /*@ts-ignore*/
  console.log(storyData)
  const { artist_statement } = storyData.story.content.body[0]
  return artist_statement
}

export default async function TaidePortfolio() {
  const data = await getTaidePortfolioData()
  console.log(data)
  return (
    <div className="">
      <div className="h-svh">
        <h1 className=" mb-2 ml-4 text-4xl font-bold tracking-widest sm:ml-12 md:ml-4 md:mt-12 md:hidden md:text-7xl">
          Portfolio
        </h1>{" "}
        <div className=" flex justify-center md:max-h-svh">
          <h1 className=" hidden text-4xl font-bold tracking-widest [writing-mode:vertical-rl] md:block md:text-7xl">
            Portfolio
          </h1>{" "}
          <span className=" mt-2 block text-xl font-bold  [text-orientation:upright] [writing-mode:vertical-rl] md:mr-2 ">
            Anni Keskipoikela
          </span>
          <div className="mr-1 grid grid-cols-2 gap-1 md:gap-4">
            <Image
              src="/images/soutaja.webp"
              width={300}
              height={300}
              alt=""
              className=" md:self-auto"
            />
            <Image
              src="/images/putin.webp"
              className=""
              width={300}
              height={300}
              alt=""
            />
            <Image
              src="/images/milja.webp"
              width={300}
              height={300}
              alt=""
              className="self-end md:self-center"
            />

            <Image src="/images/tauko.webp" width={300} height={300} alt="" />
          </div>{" "}
        </div>{" "}
      </div>
      <div className="mt-28 w-full px-4">
        <div className="flex flex-wrap justify-evenly">
          <div className="flex flex-col items-start justify-start lg:text-lg ">
            <h2 className="border-b-8 border-text-primary text-2xl font-bold uppercase tracking-widest underline  decoration-double decoration-4 md:text-4xl ">
              Artist statement
            </h2>
            <p className="mt-8 max-w-3xl leading-relaxed">
              Viime vuodet olen työskennellyt enimmäkseen sekatekniikan parissa.
              Yhdistelen teoksissani esimerkiksi akryylimaalausta, kollaasia,
              liituja, luonnonmateriaaleja ja tekstiilejä. Viimeisimpänä mukaan
              on tullut myös installaatio ja keramiikka. Tekemiseni on lähes
              aina sarjallista.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed">
              Olen tehnyt myös kuvituksia, ja tällä hetkellä työstän
              lastenkirjaa, joka on Pro gradu-tutkimukseni loppuprodukti.
              Lisäksi työskentelen keramiikkasarjan parissa, joka käsittelee
              sairautta osana luontoa ja sen kiertokulkua.
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed">
              Ilmaisuni yhdistelee mimeettistä ja ekspressiivistä jälkeä, ja
              pyrin jatkuvasti rouheampaan ja viitteellisempään suuntaan.
              Teosten aiheet nousevat omista kokemuksistani, ja kiinnittyvät
              usein luontoon, paikkaan ja hetkeen. Minua viime vuosina
              erityisesti kiinnostavia teemoja ovat olleet ihmisen suhde
              ympäristöönsä, muutos ja kasvu. Tutkin teoksissani emotionaalista
              ja aistiperustaista kytköstä paikkoihin, ihmisiin ja kokemuksiin
              sekä sitä, miten ne kytkeytyvät yhteen.
            </p>
          </div>
        </div>
        {/* <div className="-mx-4  flex flex-wrap justify-evenly gap-10 overflow-hidden">
          <Image
            className="mt-24 self-start md:hidden lg:mt-0"
            src="/images/kollaasi.png"
            width={500}
            height={500}
            alt="s"
          />

          <div className="-mx-4 mt-72 hidden flex-wrap justify-evenly gap-10 overflow-hidden md:flex">
            <Image
              className="mt-8  self-start lg:mt-0"
              src="/images/putin.png"
              width={400}
              height={400}
              alt="s"
            />
            <Image
              className="mt-8  self-start lg:mt-0"
              src="/images/ämpärit_ilman_taustaa.png"
              width={400}
              height={400}
              alt="s"
            />
            <Image
              className="mt-8  self-center lg:mt-0"
              src="/images/karuselli-ilman-taustaa.png"
              width={165}
              height={174}
              alt="s"
            />

            <Image
              className="mt-8  self-center lg:mt-0"
              src="/images/milja.png"
              width={400}
              height={400}
              alt="s"
            />
          </div>
        </div> */}
      </div>
      <div className="my-56 w-full">
        <div className="mx-4 flex flex-col flex-wrap items-start justify-center gap-14 lg:mx-44">
          <h2 className=" self-center text-4xl font-bold uppercase tracking-widest text-blue-950 md:text-center  ">
            näyttelyt
          </h2>
          <div className="flex w-full flex-wrap justify-evenly gap-14  ">
            <Link href={"/nayttelyt/muuttolinnut"}>
              <Card className="max-w-[500px] rounded-xl border-none bg-transparent shadow-none">
                {" "}
                <CardHeader className="p-0">
                  <Image
                    className=" rounded-xl"
                    src="/images/muuttolinnut.png"
                    alt="kuva muuttolinnuista"
                    height={500}
                    width={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  ></Image>
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="text-2xlfont-bold tracking-wide lg:text-2xl">
                    <span>Muuttolinnut</span>
                    <span className="block text-sm font-thin">2023</span>
                  </CardTitle>
                  {/* <CardDescription className="mt-1">
                  <span className="mt-1 text-lg">
                    Touko-kesäkuussa 2023 pidettiin Rovaniemellä galleria
                    Valossa Lapin yliopiston kuvataidekasvatuksen opiskelijoiden
                    yhteisnäyttely Yhteyksiä. Siellä oli esillä minun ja
                    tekstiilitaiteilija Milja Rummukaisen yhteisteos
                    Muuttolinnut, joka käsitteli paikkaan ja yhteisöön
                    kuulumista, kodin rakentamista ja Rovaniemeä paikkana, joka
                    on monelle koti vain hetken. Teos koostuu keraamisista ja
                    ryijytekniikalla valmistetuista joutsenista.
                  </span>
                </CardDescription> */}
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>{" "}
      <div className="my-56 w-full">
        <div className="mx-4 flex flex-col flex-wrap items-start justify-center gap-14 lg:mx-44">
          <h2 className="4 self-center text-center text-4xl font-bold uppercase tracking-widest text-blue-950  ">
            kokoelmat
          </h2>
          <div className="flex w-full flex-wrap justify-evenly gap-14  ">
            <Link href={"#"}>
              <Card className="max-w-[500px] rounded-xl border-none bg-transparent shadow-none">
                {" "}
                <CardHeader className="p-0">
                  <Image
                    className=" rounded-xl"
                    src="/images/muuttolinnut.png"
                    alt="kuva muuttolinnuista"
                    height={500}
                    width={500}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  ></Image>
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="text-2xlfont-bold tracking-wide lg:text-2xl">
                    <span>Muuttolinnut</span>
                    <span className="block text-sm font-thin">2023</span>
                  </CardTitle>
                  {/* <CardDescription className="mt-1">
                  <span className="mt-1 text-lg">
                    Touko-kesäkuussa 2023 pidettiin Rovaniemellä galleria
                    Valossa Lapin yliopiston kuvataidekasvatuksen opiskelijoiden
                    yhteisnäyttely Yhteyksiä. Siellä oli esillä minun ja
                    tekstiilitaiteilija Milja Rummukaisen yhteisteos
                    Muuttolinnut, joka käsitteli paikkaan ja yhteisöön
                    kuulumista, kodin rakentamista ja Rovaniemeä paikkana, joka
                    on monelle koti vain hetken. Teos koostuu keraamisista ja
                    ryijytekniikalla valmistetuista joutsenista.
                  </span>
                </CardDescription> */}
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
