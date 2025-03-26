import Link from "next/link"

const Rodape = () => {
    return (
        <div className="container mx-auto py-5">
            <span className="text-lg font-semibold pb-3">&copy; AirBNB INC</span>
            <ul className="flex flex-row gap-5">
                <li><Link className="hover:text-red-500" rel="stylesheet" href="/"> Privacidade </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" rel="stylesheet" href="/"> Termos </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" rel="stylesheet" href="/"> Mapa do Site </Link></li>
                <li>&middot;</li>
                <li><Link className="hover:text-red-500" rel="stylesheet" href="/"> Informações da Empresa </Link></li>
            </ul>
        </div>
    )
}

export default Rodape