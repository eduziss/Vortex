"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';    
import { useState } from 'react';
export default function Card({titulo,nota,imgs}){
    const [favorito, setFavorito] = useState(false)

    function favoritar(){
        setFavorito(true)
    
    }
    function desfavoritar(){
        setFavorito(false)
    
    }
    return(
            <div className="flex flex-col items-center w-48  relative "  >
                {
                    favorito ? 
                    <FavoriteIcon onClick={desfavoritar} className=" cursor-pointer absolute top-2 right-2"/>:
                    <FavoriteBorderIcon onClick={favoritar}  className=" cursor-pointer absolute top-2 right-2"/>
                }
               
                <img className="h-32 rounded" src= {imgs} alt="" />

                <span className="text-lg font-bold line-clamp-1" >{titulo}</span>
                <div>
                    <i></i>
                    <span>{nota}</span>
                </div>
                <a className="bg-amber-50 text-black w-full rounded py-1 text-center" href="">Detalhes</a>
            </div>
     

    )
} 