import {
IconPhoto,
IconToolsKitchen2,
IconDesk,
IconPool,
IconBrandCarbon,
IconSailboat,
IconWifi,
IconParking,
IconAlarmSmoke,
IconDog
} from '@/assets/icones'
import { Accommodation } from '@/types/AirbnbDados'

interface AcomodacaoDetalhesProps {
    accommodation: Accommodation
}

const AcomodacaoDetalhes = (
    props: AcomodacaoDetalhesProps
) => {

    const acomodacao = props.accommodation

    return (
        <div className="w-full py-4">
           <h2 className="text-xl font-bold">{acomodacao.location.description}</h2>
           
           <ul className="flex flex-row gap-5">
                <li>10 hóspedes</li>
                <li>&middot;</li>
                <li>5 quartos</li>
                <li>&middot;</li>
                <li>5 camas</li>
                <li>&middot;</li>
                <li>6 banheiros</li>
            </ul>
            
            <h2 className="pt-4 text-xl font-bold">O que esse lugar oferece?</h2>

            <ul className="grid py-6 grid-cols-2 items-center gap-y-6">
                <li className="flex gap-1.5">
                    <IconPhoto />
                    <span>Vista para as montanhas</span>
                </li>
                <li className="flex gap-1.5">
                    <IconToolsKitchen2 />
                    <span>Cozinha</span>
                </li>
                <li className="flex gap-1.5">
                    <IconDesk />
                    <span>Espaço de trabalho</span>
                </li>
                <li className="flex gap-1.5">
                    <IconPool />
                    <span>Piscina privativa</span>
                </li>
                <li className="flex gap-1.5">
                    <IconBrandCarbon />
                    <span className='line-through'>Alarme de segurança p/ gás</span>
                </li>
                <li className="flex gap-1.5">
                    <IconSailboat />
                    <span>Vista para as águas</span>
                </li>
                <li className="flex gap-1.5">
                    <IconWifi />
                    <span>Wi-Fi rápido</span>
                </li>
                <li className="flex gap-1.5">
                    <IconParking />
                    <span>Estacionamento incluso</span>
                </li>
                <li className="flex gap-1.5">
                    <IconAlarmSmoke />
                    <span>Detector de fumaça</span>
                </li>
                <li className="flex gap-1.5">
                    <IconDog />
                    <span>Pet Friendly</span>
                </li>
            </ul>         
        </div>
    )
}

export default AcomodacaoDetalhes