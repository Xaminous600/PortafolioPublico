import { useContext} from "react"
import { LanguajeContext } from "../context/languajeState";

export function Proyects(){
    const {initialStateLanguaje} = useContext(LanguajeContext);

    return(
        <div class='mt-4 flex flex-col xl:w-2/3 w-3/3 text-center mb-10 mr-5 ml-5'>
            <h1 class='text-white leading-7 font-semibold text-3xl my-3'>{initialStateLanguaje == 'esp' ? 'Proyectos' : 'Projects'}</h1>
            <h2 class='text-white'>{initialStateLanguaje == 'esp' ? 'Trabajos en los que me he embarcado para aprender una tecnología o llevar acabo un proyecto personal:' :' Projects I´ve embarked on to learn a technology or carry out a personal project:' }</h2>

            <div class='grid auto-rows-[250px] grid-cols-8 gap-5 mt-5 xl:auto-rows-[350px]'>

                <div class='row-span-2 col-span-8 xl:row-span-2 xl:col-span-4 relative'>
                    <div class='w-full h-full bg-[#1C1E23] rounded-2xl flex p-10 flex-col'>
                        <h1 class='text-white leading-10 font-semibold text-3xl'>Where's Michi?</h1>
                        <p class='text-[#EFEEF2] mt-2 opacity-70'>{initialStateLanguaje == 'esp' ? 'Aplicación móvil y web dedicada a la búsqueda, localización y adopción de animales perdidos.' : 'Mobile and web application dedicated to the search, location, and adoption of lost animals.'}</p>
                        <ul class='flex flex-row gap-4 mt-5 justify-center mb-5 flex-wrap'>
                            <li class='text-sm text-[#EFEEF2]'>React Native</li>
                            <li class='text-sm text-[#EFEEF2]'>React</li>
                            <li class='text-sm text-[#EFEEF2]'>Html</li>
                            <li class='text-sm text-[#EFEEF2]'>Css</li>
                            <li class='text-sm text-[#EFEEF2]'>Js</li>
                            <li class='text-sm text-[#EFEEF2]'>Firebase</li>
                            <li class='text-sm text-[#EFEEF2]'>IA</li>
                            <li class='text-sm text-[#EFEEF2]'>TensorFlow</li>
                        </ul>

                        <div class='w-full h-full flex overflow-hidden justify-center'>
                            <img class='rounded-md' src='proyectoPet.png' alt='Proyecto personal Where´s Michi?'/>
                        </div>

                        <a href='https://github.com/Xaminous600/Where-s-Michi-' class='absolute right-5 top-5 hover:-translate-y-1 hover:scale-110'>
                            <img class='w-8 h-8 xl:w-10 xl:h-10' src='redirigir.png' alt='Redirigir a Github'/>
                        </a>
                    </div>

                </div>

                <div class='row-span-2 col-span-8 xl:row-span-2 xl:col-span-4 relative'>
                    <div class='w-full h-full bg-[#1C1E23] rounded-2xl flex p-10 flex-col'>
                        <h1 class='text-white leading-10 font-semibold text-3xl'>{initialStateLanguaje == 'esp' ? 'Proyectos React' : 'React Projects'}</h1>
                        <p class='text-[#EFEEF2] mt-2 opacity-70'>{initialStateLanguaje == 'esp' ? 'Creación de una librería, bazar online, portafolio...' : 'Creation of a library, online bazaar, portfolio...' }</p>
                        <ul class='flex flex-row gap-4 mt-5 justify-center mb-5 flex-wrap'>
                            <li class='text-sm text-[#EFEEF2]'>React</li>
                            <li class='text-sm text-[#EFEEF2]'>Html</li>
                            <li class='text-sm text-[#EFEEF2]'>Css</li>
                            <li class='text-sm text-[#EFEEF2]'>Js</li>
                            <li class='text-sm text-[#EFEEF2]'>Next JS</li>
                            <li class='text-sm text-[#EFEEF2]'>Tailwind</li>
                        </ul>

                        <div class='w-full h-full flex overflow-hidden justify-center rounded-md '>
                            <img class='w-full' src='reactProyectos.png' alt='Proyectos Personales de React'/>
                        </div>

                        <a href='https://github.com/Xaminous600/bazarOnline' class='absolute right-5 top-5 hover:-translate-y-1 hover:scale-110'>
                            <img class='w-8 h-8 xl:w-10 xl:h-10' src='redirigir.png' alt='Redirigir a Github'/>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}