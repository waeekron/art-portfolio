export default function NayttelySivu({ params }: { params: { nimi: string } }) {
  return (
    <>
      <h1>{params.nimi}</h1>
    </>
  )
}
