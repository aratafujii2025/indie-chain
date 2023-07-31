interface Props{
    card: string
    sales: string
}

function ArtistStats(props: Props){
    const {card, sales} = props
    return(
        <div className="font-semibold w-80 h-48 rounded-3xl p-5 bg-gradient-to-tr from-navy from-40% to-[#501FDC]">
            <div className="w-60 h-24">
                <h5 className="text-white italic tracking-wide">Artist Stats</h5>
            </div>            
            <div className="">
                <h5 className="text-white inline-block tracking-wide">${card}</h5>
                <h6 className="text-white text-sm inline-block ml-3">Average Card Price</h6>
            </div>
            <div>
                <h3 className="text-white inline-block tracking-wide">{sales}+ </h3>
                <h6 className="text-white text-sm inline-block ml-3">Total Sales</h6>
            </div>
        </div>
    )
}

export default ArtistStats