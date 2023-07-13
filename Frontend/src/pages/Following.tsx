import Header from '../components/Header';
import Footer from '../components/Footer';
import Dropdown from '../components/Dropdown';
import Artist from '../components/Artist';

function Following() {
    // branch called searchPage
    const menuOptions = [
        "Alphabetical",
        "Date Added 🡑",
        "Date Added 🡓"
    ];

    const artistList = [
        0, 1, 2, 3, 4, 
        5, 6, 7, 8
    ];

    return (
        <div className="bg-cream w-full h-full overflow-auto">
            <Header />
            <h1 className="text-b3 left font-bold italic mx-16 my-5">Following</h1>
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

export default Following