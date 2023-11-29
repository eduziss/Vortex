import Botao from "./buttons"
import './animation.css'
export default function Painel(){
    return(

        <div className=" gap-10 border-white justify-evenly items-center flex flex-wrap bg-gradient-to-t from-sky-950 to-sky-900 border-b-8  p-10" >
            <div className=" flex flex-col text-center gap-4">
            <h1>Melhor Jogo Zelda</h1>
            <span className="text-white w-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet placeat, recusandae deleniti quidem, illum quod ea consectetur, nihil odio nam fugit accusamus libero iusto enim aliquid quisquam inventore ex git accusamus l git accusamus l git accusamus l!</span>
            <Botao texto={"Saiba Mais"} />
            </div>

            <img className=" jogo w-72 h-72 rounded-full mr-28 " src="https://m.media-amazon.com/images/I/91Aa9ZIAaoL.jpg" alt="" />
        </div>

    )
}