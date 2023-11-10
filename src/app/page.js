import Card from "@/components/cards";
import Titulo from "@/components/title";
import Painel from "@/components/painel";
import "./animation.css"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
       <nav className = "flex gap-4 bg-slate-700 w-full items-center justify-between px-50 h-24" >
      <h1 className='m-3 flex items-center gap-2 text-4xl text-neutral-200 font-bold uppercase' > 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12">
      <path d="M16.5 7.5h-9v9h9v-9z" />
     <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clip-rule="evenodd" />
      </svg>
      Vortex
      </h1>
      <div className='flex items-center gap-10 mr-5' >
      <a className='m-3' href="/sobre" >Sobre</a>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
      <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
      <path fill-rule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7">
    <path fill-rule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clip-rule="evenodd" />
      </svg>
      </div>
      </nav>

      <section className=" flex justify-center items-center  border-b-4 border-amber-50 w-full h-96 bg-gradient-to-t from-cyan-900 to-blue-500" >
      <div className="circle"></div>

        <Painel/>

      </section>


<div className="mt-24" >
<Titulo>Jogos em alta </Titulo>
    <section className="flex flex-wrap gap-4 p-4">
    <Card titulo = "StreetFight 6" nota={10.0} imgs ={"https://artcetera.art/wp-content/uploads/2023/03/jogos-mais-esperados-de-2023-950x500.jpg"}/>
    <Card titulo = "Zelda" nota = {9.8} imgs={"https://s2-techtudo.glbimg.com/bFZoPLP_moYz4ZQfMy7nzSWkU18=/0x0:695x434/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/I/B/iDPi3ZTGysr35Lr6SBAQ/2014-09-26-legend-of-zelda-aniversary.jpg"}/>
    <Card titulo={"Tekken 7"} nota={7.0} imgs={"https://cdn.awsli.com.br/800x800/1610/1610163/produto/177701600/poster-tekken-7-a-ab89feec.jpg"} />
    <Card titulo={"Elden Ring"} nota={8.7} imgs={"https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg"} />
    <Card titulo={"Blasphomeus"} nota={9.5} imgs={"https://cdn1.epicgames.com/offer/eddb735dde6b47cda8193f2643cff886/EGS_Blasphemous_TheGameKitchen_S3_2560x1440-f1a83630b91b3f128e8f9dd58f3f8eed"} />
    <Card titulo={"Mario Wonder"} nota={8.2} imgs={"https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/ncom/software/switch/70010000068688/a13441a9532b1c9e90f657ee1c67255de073707543ff6735ceb57b472faec691"} />
    </section>
 
    <Titulo>Novidade</Titulo>
    <Titulo>Lançamentos</Titulo>

</div>


   
    

    </main>
  )
}
