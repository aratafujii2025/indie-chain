import Arrow from '../icons/Arrow';

// randomize gradient color, choose from brand colors and black

interface aProps {
    username: string
    url: string
}

function Artist(props: aProps) {
    const {username, url} = props;
    return(
        //<div className="image-cropper">
        <div className="relative">
            <img 
            //className="profile-pic"
            className="absolute z-10 w-48 h-48 rounded-full shadow-b3"
            src={url}
            alt="artist profile picture"
            />

            <div className="absolute shadow-xl top-24 pt-[6.5rem] pl-3 z-0 bg-gradient-to-br from-b3 from-40% to-90% w-48 h-34 rounded-b-3xl">
                <>
                    <div className="inline-block">
                        <h4 className="text-white text-ellipsis overflow-hidden w-[8.5rem]">{username}</h4>
                    </div>
                    <div className="inline-block absolute right-3">
                        <Arrow bgColor={"#FFFFFF"} arrowColor={"#000000"} />
                    </div>
                </>
            </div>
        </div> 
    )
}

export default Artist;