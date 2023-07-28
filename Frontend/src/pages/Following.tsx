import * as React from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Dropdown from '../components/Dropdown';
import Artist from '../components/Artist';
import data from '../mockData.json';

function Following() {
    const [search, setSearch] = React.useState("");
    const [sort, setSort] = React.useState("alph");
    const menuOptions = [
        {id: "alph", display: "Alphabetical"},
        {id: "dateAsc", display: "Date Added 🡑"},
        {id: "dateDesc", display: "Date Added 🡓"}
    ];
    const [artists, setArtists] = React.useState([]);

    const API_URL = "http://localhost:5173/";
    async function getArtists(){
        try{
            const response = await axios.get(API_URL + "/artists?order=".concat(sort));
            setArtists(response.data);
        }catch(error){
            console.log(error);
        }
    }
    getArtists();

    return (
        <div className="bg-cream w-full h-full overflow-auto">
            <Header />

            <div className="m-5 w-[30rem] h-8 rounded-full bg-gradient-to-b from-white from-opacity-70 border-b3 border-[1.5px]">
                <form>
                    <input 
                    onChange={(e) => setSearch(e.target.value)}
                    className="focus:outline-none bg-transparent w-[30rem] text-md text-center"
                    type="search" value={search}/>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={31}
                        height={31}
                        fill="none"
                        className="inline-block -ml-10 -mt-[0.1rem] scale-75"
                    >
                        <path
                        fill="#282828"
                        d="m27.554 26.196-6.007-6.006a10.571 10.571 0 1 0-1.357 1.357l6.006 6.007a.96.96 0 0 0 1.358-1.358ZM4.799 13.437a8.638 8.638 0 1 1 8.638 8.639A8.647 8.647 0 0 1 4.8 13.437Z"
                        />
                    </svg>
                </form>
            </div>

            <h1 className="text-b3 left font-bold italic mx-16 my-5">Following</h1>
            <div className="relative z-50">
                <Dropdown options={menuOptions} setFilter={setSort}/>
            </div>

            <div className="container relative z-0">
                {data
                    .filter((artist) => {
                        return search.toLowerCase() === "" 
                        ? artist 
                        : artist.username.toLowerCase().includes(search.toLowerCase())
                    })
                    .map(artist => {
                        return(
                            <div> {<Artist username={artist.username} url={artist.url}/>} </div>
                        )})}
            </div>
        </div>
    )
}

export default Following