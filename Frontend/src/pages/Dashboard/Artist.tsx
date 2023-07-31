import Header from "../../components/Header"
import CaretDown from "../../icons/CaretDown"
import ArtistStats from "../../components/Dashboard/ArtistStats"
import Graph from "../../components/Dashboard/Graph"
import CardStats from "../../components/Dashboard/CardsStats"

function Artist(){
    return(
        <div className="bg-cream w-full h-full">
            <Header/>
            <h1 className="text-b3 italic font-medium mx-16 mb-3 mt-1">Manage and Browse Artist Stats</h1>
            
            <div>
                <div className="overflow-hidden w-[83rem] h-20 mx-16 flex items-center justify-center rounded-3xl">
                    <img
                    className="object-fill" 
                    src="https://images.squarespace-cdn.com/content/v1/52d42be4e4b0c7af5ad3f4d4/1631650850103-FPPXKPUFGT3AD5X5IFTL/BIT4A_Blog_Header_01.png?format=2500w"
                    alt="artist dashboard header photo"
                    />
                </div>
                <div className="relative -mt-12">
                    <div className="ml-24 inline-block">
                        <img
                        className="rounded-full h-20 w-20 object-cover ring-2 ring-cream"
                        src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                        alt="artist profile picture"
                        />
                    </div>
                    <h5 className="mx-2 text-b3 font-semibold inline-block">ARTIST NAME</h5>
                    <div className="inline-block h-6">
                        <CaretDown color="#4F4F4F"/>
                    </div>
                    <h6 className="ml-[58rem] inline-block text-sm text-[#A6A6A6]">Edit Profile</h6>
                </div>
            </div>
            

            <div className="ml-16 bg-black w-[83rem] h-72 rounded-3xl mx-10 my-2">
            </div>

            <div className="ml-6">
                <div className="inline-block ml-10"> 
                    <ArtistStats card={(50).toLocaleString()} sales={(1000).toLocaleString()}/> 
                </div>
                <div className="mx-2 inline-block">
                    <Graph/>
                </div>
                <div className="inline-block mr-10">
                    <CardStats gold={5} silver={7} bronze={12}/>
                </div>
            </div>

        </div>
    )
}


export default Artist