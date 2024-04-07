import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default async function TaidePortfolio() {
  return (
    <>
      <h1 className="text-center  text-2xl font-extrabold uppercase tracking-wider text-zinc-900 md:text-5xl lg:text-6xl">
        Taiteilijaportfolio
      </h1>
      <span className="mt-2 block text-center text-2xl text-zinc-600">
        Anni Keskipoikela
      </span>

      <div className="mt-24 w-full px-4">
        <div className="flex flex-wrap justify-evenly">
          <div className="flex max-w-lg flex-col items-start justify-start">
            <h2 className="text-xl font-bold uppercase tracking-widest text-blue-950 underline decoration-double decoration-4 ">
              Artist statement
            </h2>
            <p className="text-md mt-8 max-w-3xl font-medium leading-relaxed">
              Viime vuodet olen työskennellyt enimmäkseen sekatekniikan parissa.
              Yhdistelen teoksissani esimerkiksi akryylimaalausta, kollaasia,
              liituja, luonnonmateriaaleja ja tekstiilejä. Viimeisimpänä mukaan
              on tullut myös installaatio ja keramiikka. Tekemiseni on lähes
              aina sarjallista.
            </p>
            <p className="text-md mt-4 max-w-3xl font-medium leading-relaxed">
              Olen tehnyt myös kuvituksia, ja tällä hetkellä työstän
              lastenkirjaa, joka on Pro gradu-tutkimukseni loppuprodukti.
              Lisäksi työskentelen keramiikkasarjan parissa, joka käsittelee
              sairautta osana luontoa ja sen kiertokulkua.
            </p>
            <p className="text-md mt-4 max-w-3xl font-medium leading-relaxed">
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

          <Image
            className="mt-8 rounded-3xl lg:mt-0"
            src="/images/valineet.webp"
            width={488}
            height={799}
            alt="s"
          />
        </div>
      </div>
      <div className="mt-56 w-full">
        <div className="mx-4 flex flex-col flex-wrap items-start justify-center gap-14 lg:mx-44">
          <h2 className="self-center text-center text-4xl font-bold uppercase tracking-widest text-blue-950 underline decoration-double decoration-4 ">
            näyttelyt
          </h2>
          <div className="flex w-full flex-wrap justify-evenly gap-14  ">
            <Link href="#">
              <Card className="max-w-[350px] rounded-xl border-none bg-transparent shadow-none">
                {" "}
                <CardHeader className="p-0">
                  <Image
                    className=" rounded-xl"
                    src="/images/muuttolinnut.png"
                    alt="kuva muuttolinnuista"
                    height={350}
                    width={350}
                  ></Image>
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="text-lg font-bold tracking-wide">
                    <span>Muuttolinnut</span>
                    <span className="block text-xs font-thin">2023</span>
                  </CardTitle>
                  <CardDescription className="mt-1">
                    <span className="mt-1 text-sm">
                      Touko-kesäkuussa 2023 pidettiin Rovaniemellä galleria
                      Valossa Lapin yliopiston kuvataidekasvatuksen
                      opiskelijoiden yhteisnäyttely Yhteyksiä. Siellä oli esillä
                      minun ja tekstiilitaiteilija Milja Rummukaisen yhteisteos
                      Muuttolinnut, joka käsitteli paikkaan ja yhteisöön
                      kuulumista, kodin rakentamista ja Rovaniemeä paikkana,
                      joka on monelle koti vain hetken. Teos koostuu
                      keraamisista ja ryijytekniikalla valmistetuista
                      joutsenista.
                    </span>
                  </CardDescription>
                </CardContent>
                <CardFooter className="float-end mt-2">
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="rounded-2xl"
                  >
                    Katso lisää
                  </Button>
                </CardFooter>
              </Card>
            </Link>

            <Link href="#">
              <Card className="max-w-[350px] rounded-xl border-none bg-transparent shadow-none">
                {" "}
                <CardHeader className="p-0">
                  <Image
                    className=" rounded-xl"
                    src="/images/muuttolinnut.png"
                    alt="kuva muuttolinnuista"
                    height={350}
                    width={350}
                  ></Image>
                </CardHeader>
                <CardContent className="p-2">
                  <CardTitle className="text-lg font-bold tracking-wide">
                    <span>Muuttolinnut</span>
                    <span className="block text-xs font-thin">2023</span>
                  </CardTitle>
                  <CardDescription className="mt-1">
                    <span className="mt-1 text-sm">
                      Touko-kesäkuussa 2023 pidettiin Rovaniemellä galleria
                      Valossa Lapin yliopiston kuvataidekasvatuksen
                      opiskelijoiden yhteisnäyttely Yhteyksiä. Siellä oli esillä
                      minun ja tekstiilitaiteilija Milja Rummukaisen yhteisteos
                      Muuttolinnut, joka käsitteli paikkaan ja yhteisöön
                      kuulumista, kodin rakentamista ja Rovaniemeä paikkana,
                      joka on monelle koti vain hetken. Teos koostuu
                      keraamisista ja ryijytekniikalla valmistetuista
                      joutsenista.
                    </span>
                  </CardDescription>
                </CardContent>
                <CardFooter className="float-end mt-2">
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="rounded-2xl"
                  >
                    Katso lisää
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
