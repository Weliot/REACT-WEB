import { IconSearch } from "@tabler/icons-react"

const BarraPesquisa = () => {
    return (
        <div className="border border-gray-200 rounded-full flex items-center 
        px-3 py-2 w-full max-w-2xl mx-auto shadow-lg shadow-gray-200">

            <input className=" px-3 w-full focus:outline-none" type="text" placeholder="Digite sua pesquisa" />
            <button className=" bg-red-500 rounded-full p-2">
            <IconSearch
              aria-label="Ícone de pesquisa"
              size={32}
              color="white"/>
            </button>
        
        </div>
    )
}

export default BarraPesquisa