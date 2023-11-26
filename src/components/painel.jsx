import Botao from "./buttons"

export default function Painel(){
    return(

        <div className="mt-36 justify-center items-center flex bg-slate-900 flex-wrap rounded-3xl " >
            <img className="w-72 h-full rounded-3xl mr-28 " src="https://m.media-amazon.com/images/I/91Aa9ZIAaoL.jpg" alt="" />

            <div className=" flex flex-col text-center gap-5 mr-10">
            <h1>Melhor Jogo Zelda</h1>
            <span className="w-64">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet placeat, recusandae deleniti quidem, illum quod ea consectetur, nihil odio nam fugit accusamus libero iusto enim aliquid quisquam inventore ex!</span>
            <Botao texto={"Saiba Mais"} />
            </div>
        </div>

    )
}