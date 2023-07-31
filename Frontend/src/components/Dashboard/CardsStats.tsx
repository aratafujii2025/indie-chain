interface Props {
    gold: number
    silver: number
    bronze: number
}

function CardStats(props: Props){
    const {gold, silver, bronze} = props
    return (
        <div className="p-5 bg-gradient-to-tr from-black from-40% to-[#686868]  w-64 h-48 rounded-3xl">
            <div className="w-1 h-14"/>
            <div>
                <div className="inline-block">
                    <div className="flex flex-col items-center">
                        <h6 className="italic text-gold-dark text-sm font-semibold">Gold</h6>
                        <h5 className="italic text-white text-shadow shadow-gold-light/75">{gold}</h5>
                    </div>
                </div>
                <div className="inline-block mx-5">
                    <div className="flex flex-col items-center">
                        <h6 className="italic text-silver-dark text-sm font-semibold">Silver</h6>
                        <h5 className="italic text-white text-shadow shadow-silver-light/75">{silver}</h5>
                    </div>
                </div>
                <div className="inline-block">
                    <div className="flex flex-col items-center">
                        <h6 className="italic text-bronze-dark text-sm font-semibold">Bronze</h6>
                        <h5 className="italic text-white text-shadow shadow-bronze-light/75">{bronze}</h5>
                    </div>
                </div>
            </div>
            <div className="mt-2">
                <h3 className="inline-block italic text-white text-shadow shadow-white/50">{(gold + silver + bronze).toString()}</h3>
                <h6 className="inline-block text-white text-sm font-semibold ml-3">Total Cards</h6>
            </div>
        </div>
    )
}

export default CardStats