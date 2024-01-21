import { useContext} from "react"
import { LanguajeContext } from "../context/languajeState";

export function Experience(){
    const {initialStateLanguaje} = useContext(LanguajeContext);

    return(
        <div class='mt-4 flex flex-col xl:w-2/3 w-3/3 text-center mb-10 mr-5 ml-5'>
            <h1 class='text-white leading-7 font-semibold text-3xl my-3'>{initialStateLanguaje=='esp' ? 'Experiencia' : 'Experience' }</h1>
            <h2 class='text-white'>{initialStateLanguaje == 'esp' ? 'He trabajado para las siguientes empresas:' : 'I have worked for the following companies:'}</h2>

            <div class='grid auto-rows-[350px] grid-cols-8 gap-5 mt-5 xl:auto-rows-[250px]'>
                <div class='row-span-2 col-span-4 xl:col-span-2  hidden xl:block'></div>

                <div class='row-span-1 col-span-8 xl:col-span-2 xl:row-span-2 relative'>
                    <img class='w-full h-full rounded-2xl absolute opacity-70 'src='global.png' alt='Logo Academia Global'/>
                    <div class='w-full h-full relative'>
                        <div class='w-full flex flex-col text-center items-center h-full'>
                            <div class='backdrop-blur-sm rounded-2xl items-center flex flex-col'>
                                <img class='xl:w-2/3 xl:h-200 w-60 mt-10'src='globalLogo.png'/>
                                <h1 class='text-white font-semibold text-xl leading-2'>Full Stack Developer</h1>
                                <h2 class='text-white font-semibold text-base'>Feb. 2023 - Jul. 2023</h2>
                            </div>

                            <a href='https://global-es.com/' class='hover:animate-pulse absolute bottom-0 text-white bg-[#0568fe] py-2 px-4 mb-5 rounded-2xl font-semibold'>{initialStateLanguaje == 'esp' ? 'Visitar Global' : 'Visit Global'}</a>
                        </div>
                    </div>
                </div>  

                <div class='row-span-1 col-span-8 xl:col-span-2 xl:row-span-2 relative'>
                    <img class='w-full h-full rounded-2xl absolute opacity-70 'src='UCA.png' alt='Universidad de Cádiz'/>
                    <div class='w-full h-full relative'>
                        <div class='w-full flex flex-col text-center items-center h-full'>
                            <div class='backdrop-blur-sm rounded-2xl items-center flex flex-col'>
                                <img class='xl:w-20 xl:h-200 w-20 mt-4'src='logoUCA.png' alt='Logo Universidad de Cádiz'/>
                                <h1 class='text-white font-semibold text-xl leading-2 mt-1'>Full Stack Developer</h1>
                                <h2 class='text-white font-semibold text-base'>Nov. 2022 - Dic. 2023</h2>
                            </div>

                            <a href='https://play.google.com/apps/internaltest/4701708081768714903' class='hover:animate-pulse absolute bottom-0 text-white bg-[#0568fe] py-2 px-4 mb-5 rounded-2xl font-semibold'>{initialStateLanguaje == 'esp' ? 'Visitar Proyecto' : 'Visit Project'}</a>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}