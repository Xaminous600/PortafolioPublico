import { useContext} from "react"
import { LanguajeContext } from "../context/languajeState";

export function Technologies(){
    const {initialStateLanguaje} = useContext(LanguajeContext);

    return(
        <div class='mt-4 flex flex-col xl:w-2/3 w-3/3 text-center mr-5 ml-5'>
            <h1 class='text-white leading-7 font-semibold text-3xl my-3'>{initialStateLanguaje == 'esp' ? 'Tecnologías' : 'Technologies'}</h1>
            <h2 class='text-white'>{initialStateLanguaje == 'esp' ? 'Algunas tecnologías con las que he trabajado' : 'Some technologies I have worked with:'}</h2>

            <div class='bg-[#1C1E23] w-full mt-5 rounded-3xl overflow-x-hidden'>
                <div class="relative flex overflow-x-hidden">
                    <div class="py-12 animate-marquee whitespace-nowrap flex flex-row w-full gap-10">
                        <img class='w-22 h-20' src='react.png' alt='React'/>
                        <img class='w-21 h-20' src='javascript.png' alt='JavaScript'/>
                        <img class='w-22 h-20 mr-5' src='html.png' alt='Html'/>
                        <img class='w-22 h-20 mr-5' src='css.png' alt='Css'/>
                        <img class='w-20 h-20 mr-5' src='tailwind.png' alt='Tailwind'/>
                        <img class='w-22 h-20' src='c++.png' alt='C++'/>
                    </div>

                    <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex flex-row gap-10 w-full invisible xl:visible">
                        <img class='w-22 h-20' src='react.png' alt='React'/>
                        <img class='w-21 h-20' src='javascript.png' alt='JavaScript'/>
                        <img class='w-22 h-20 mr-5' src='html.png' alt='Html'/>
                        <img class='w-22 h-20 mr-5' src='css.png' alt='Css'/>
                        <img class='w-20 h-20 mr-5' src='tailwind.png' alt='Tailwind'/>
                        <img class='w-22 h-20' src='c++.png' alt='C++'/>
                    </div>
                </div>
            </div>
        </div>
    )
}