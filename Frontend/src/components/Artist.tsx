import Arrow from '../icons/Arrow';

// add interface, props
// pass in url to artist photo and artist name

// randomize gradient color, choose from brand colors (including b3)

function Artist() {
    return(
        //<div className="image-cropper">
        <div className="relative">
            <img 
            //className="profile-pic"
            className="absolute z-10 w-48 h-48 rounded-full shadow-md shadow-pink"
            src="https://upload.wikimedia.org/wikipedia/en/b/bf/SZA_-_Ctrl_cover.png"
            alt="artist profile picture"
            />

            <div className="absolute top-24 pt-24 pl-3 z-0 bg-gradient-to-br from-pink from-40% to-pink-opacity-0 to-85% w-48 h-34 rounded-b-3xl">
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

export default Artist;