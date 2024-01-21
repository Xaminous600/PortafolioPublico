import { useContext} from "react"
import { LanguajeContext } from "../context/languajeState";

export function About(){
    const {initialStateLanguaje} = useContext(LanguajeContext);

    return(
        <section class ='xl:w-2/3 w-3/3 mx-5 grid auto-rows-[192px] grid-cols-5 gap-4 mt-20'>
            <div class='row-span-2 col-span-6 rounded-3xl bg-white xl:col-span-3 relative flex'> 
                <div class='absolute w-full h-full bg-transparent'></div>
                <div class='flex justify-center w-full h-full'>
                    <img class='rounded-2xl z-10 object-cover w-auto drop-shadow-2xl'src='' alt='Foto Personal'/>
                </div>
                
                <div class='absolute w-full h-full bg-gradient-to-r from-[#AB8B63] to-[#A0CDEC] rounded-2xl opacity-100' >

                </div>

                <div class='absolute w-full h-full z-20 '>
                    <div class='absolute flex w-auto bottom-0 flex-col pb-4 pl-4 pt-2'>
                        <h1 class='text-white font-bold text-3xl mb-2 leading-7'>NAME</h1>
                        <h2 class='text-white font-bold text-1xl mb-3'>{initialStateLanguaje == 'esp' ? 'Desarrollador Full Stack':'Full Stack Developer'}</h2>
                        <div class='flex flex-row gap-5 w-full'>
                            <a href='' class ='hover:animate-pulse flex-row flex gap-1 bg-white rounded-2xl px-3 py-1 justify-center items-center border border-neutral-600'>
                                <img class='w-5 h-5 mr-1 xl:mr-2' src='github.png' alt='Github'/>
                                <span class='font-semibold'>Github</span>
                            </a>
                            <a href="" class ='hover:animate-pulse flex-row flex gap-1 bg-white rounded-2xl px-3 py-1 justify-center items-center border border-neutral-600'>
                                <img class='w-5 h-5 mr-1 xl:mr-2' src='linkedin.png' alt='Github'/>
                                <span class='font-semibold'>LinkedIn</span>
                            </a>
                            <a href='' class ='hover:animate-pulse flex-row flex gap-1 bg-white rounded-2xl px-3 py-1 justify-center items-center border border-neutral-600'>
                                <img class='w-5 h-5 mr-1 xl:mr-2' src='email.png' alt='Github'/>
                                <span class='font-semibold'>Email</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class='xl:col-span-2 col-span-6 rounded-3xl flex justify-center flex-col px-10 bg-[#1C1E23]'> 
                <span class='text-white font-bold text-2xl mb-2'>{initialStateLanguaje == 'esp' ? 'Sobre mí' : 'About me'}</span>
                <p class='text-slate-200 opacity-70'>{initialStateLanguaje == 'esp' ? 'Desarrollador Full Stack amante de la resolución de problemas y el aprendizaje continuo.' : 'Full Stack developer passionate about problem-solving and continuous learning.'} </p>
            </div>
            <div class='xl:col-span-1 col-span-3 flex flex-col items-center rounded-3xl justify-center bg-[#1C1E23]'> 
                <span class='text-white font-bold text-7xl mb-5'>+1 </span>
                <span class='text-slate-200 opacity-70'>{initialStateLanguaje == 'esp' ? 'Año de experiencia' : 'Year of experience'}</span>
            </div>
            <div class='xl:col-span-1 col-span-3 relative flex'>
                <img class = 'w-full h-full rounded-2xl absolute' src='mapa.png'/>
                <div class ='w-full h-full absolute opacity-0 hover:opacity-100'>
                    <div class='w-full h-10 backdrop-blur-sm absolute left-0 bottom-0 flex items-center justify-center rounded-2xl ease-in duration-300'>
                        <span class ='text-slate-900 italic font-bold text-base '>Cádiz, España</span>
                    </div>
                </div>
            </div>
        </section>
    )
}