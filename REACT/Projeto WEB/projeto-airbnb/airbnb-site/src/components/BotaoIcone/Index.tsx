interface BotaoIconeProps {
    icone: React.ReactNode
    children: React.ReactNode
}

const BotaoIcone = (props: BotaoIconeProps) => {
    return (
        <>
        <button className="rounded-xl border-gray-300 border-2 flex items-center px-4 py-2 hover:border-gray-400 gap-2">
            <span>{props.icone}</span>
            <span>{props.children}</span>
        </button>
        </>
    )
}

export default BotaoIcone