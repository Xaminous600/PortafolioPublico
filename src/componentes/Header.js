import { useContext, useState } from "react"
import { LanguajeContext } from "../context/languajeState";

export function Header(){
    const [openModalLanguage, setOpenModalLanguage] = useState(false);
    const {initialStateLanguaje, changeLanguaje} = useContext(LanguajeContext);
    
    return(
        <header class = 'w-full h-20 fixed top-0 z-10 rounded-b-sm z-20'>
            <div class='w-full h-full p-5 backdrop-blur-sm flex bg-white bg-opacity-10 absolute rounded-b-lg'>
                <nav class='flex content-center justify-between w-full'>
                    <div class= 'p-5 h-7 w-7 bg-white opacity-100 flex justify-center items-center'>
                        <span class = 'font-bold'>JH</span>
                    </div>

                    <div class ='flex items-center gap-6'>
                        <div class='flex flex-col gap-2'>
                            <button onClick={()=>{setOpenModalLanguage(!openModalLanguage)}}>
                                <img class = 'w-6 h-6' src="traducir.png" alt= 'Traducir página'/>
                            </button>
                            {openModalLanguage && 
                                <div class='absolute mt-10 flex flex-col p-4 rounded-2xl z-10 bg-[#1C1E23] gap-2'>
                                    <button class='text-white font-medium text-sm' onClick={()=>{changeLanguaje('en'); setOpenModalLanguage(!openModalLanguage)}}>English</button>
                                    <button class='text-white font-medium text-sm' onClick={()=>{changeLanguaje('esp'); setOpenModalLanguage(!openModalLanguage)}}>Español</button>
                                </div>
                            }
                        </div>

                        <a href="" class ='hover:animate-pulse bg-white px-4 py-2 br-1 rounded-3xl flex gap-2 justify-center items-center'>
                            <img class ='w-5 h-5' src='descargar.png' alt ='Descargar CV'/>
                            <span class='flex font-medium'>{initialStateLanguaje == 'esp' ? 'Descargar CV' : 'Download CV'}</span>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}