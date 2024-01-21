export function Footer(){
    return(
        <footer class='xl:w-2/3 w-3/3 mb-5 flex bg-[#1C1E23] justify-between px-20 rounded-2xl py-10'>
            <div class='flex flex-col justify-center w-full'>
                <h1 class='text-[#EFEEF2] opacity-90 font-serif'>© 2024 Javier Herrera Armario. All rights reserved.</h1>
                <p class='text-[#EFEEF2] opacity-80 mt-2 font-serif'>Realizado con React y Tailwind</p>
            </div>

            <div>
                <p class='text-[#EFEEF2] opacity-50 font-serif hidden xl:block'>Última actualización: Viernes 19 de Enero de 2024 </p>
            </div>
        </footer>   
    )
}