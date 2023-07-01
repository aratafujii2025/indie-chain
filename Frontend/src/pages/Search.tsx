import * as React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import Arrow from '../icons/Arrow';

/*
function SortBy(){
// sort dropdown menu
    const[sort, setSort] = React.useState('popular');
    // how to change position of dropdown arrow? needs to be moved left, padding?

    return (
        <select className="h-8 w-52 text-center rounded-full mx-20 bg-white bg-opacity-50 border-2 border-white"
            value={sort} 
            onChange={e => setSort(e.target.value)}
        > 
            <option value="popular"> Most Popular </option>
            <option value="newest"> Newest </option>
            <option value="alphabetical"> Alphabetical </option>
            <option value="cards-inc"> Cards Available 🡑 </option>
            <option value="cards-dec"> Cards Available 🡓 </option>
        </select>
    )
}*/

function ArtistPfp() {
    return(
        //<div className="image-cropper">
        <div className="relative">
            <img 
            //className="profile-pic"
            className="absolute z-10 object-scale-down w-48 h-48 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png"
            alt="artist profile picture"
            />

            <div className="absolute top-24 pt-24 pl-3 z-0 bg-gradient-to-br from-pink from-40% to-pink-opacity-0 w-48 h-34 rounded-b-3xl">
                <>
                    <span className="inline-block">
                        <h4 className="text-white text-ellipsis overflow-hidden drop-shadow-text">SZA</h4>
                    </span>
                    <span className="inline-block absolute right-3">
                        <Arrow bgColor={"#FFFFFF"} arrowColor={"#000000"} />
                    </span>
                </>
            </div>
        </div> 
    )
}

function Search() {
    // branch called searchPage
    const artistList = [
        0, 1, 2, 3, 4, 5, 6, 
        7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16
    ];

    return (
        <div className="bg-cream w-full h-full overflow-auto">
            <Header />
            <h1 className="text-b3 left font-bold italic mx-10 my-5">Discover</h1>
            <Dropdown />

            <div className="container">
                {artistList.map(artist => {
                    return(
                        <div> {<ArtistPfp />} </div>
                    )
                })}
            </div>
            
            <Footer />
        </div>
    )
}

export default Search