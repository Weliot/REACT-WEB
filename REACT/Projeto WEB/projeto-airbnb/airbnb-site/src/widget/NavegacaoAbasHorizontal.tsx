'use client'
import { IconAdjustmentsHorizontal } from "@/assets/icones"
import BotaoIcone from "@/components/BotaoIcone/Index"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const NavegacaoAbasHorizontal = () => {
    
    return (

        <div className="flex flex-row items-center">
            {/* Navegação de Filtro*/}
            
            <Swiper 
            spaceBetween={10}
            slidesPerView={3}
            breakpoints={{
                640:{},
                764:{},
                1024:{},
                1280:{},
            }}
            ></Swiper>

            {/* Ícone de Filtro*/}
            <BotaoIcone
            icone={(<IconAdjustmentsHorizontal
                aria-label="Ajuste Horizontal"
            />)}>icone

            </BotaoIcone>
        </div>
    )
}

export default NavegacaoAbasHorizontal