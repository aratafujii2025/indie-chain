import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import Artist from '../components/Artist';

function Search() {
    // branch called searchPage
    const menuOptions = [
        "Newest",
        "Most Popular", 
        "Alphabetical",
        "Cards Available 🡑",
        "Cards Available 🡓"
    ];

    const artistList = [
        0, 1, 2, 3, 4, 5, 6, 
        7, 8, 9, 10, 11, 12, 
        13, 14, 15, 16
    ];

    return (
        <div className="bg-cream w-full h-full overflow-auto">
            <Header />
            <h1 className="text-b3 left font-bold italic mx-16 my-5">Discover</h1>
            <div className="relative z-50">
                <Dropdown options={menuOptions} />
            </div>

            <div className="container relative z-0">
                {artistList.map(artist => {
                    return(
                        <div> {<Artist />} </div>
                    )
                })}
            </div>
            
            <Footer />
        </div>
    )
}

export default Search