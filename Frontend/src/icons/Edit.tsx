/* current only filling with image
interface IProps {
    color: string
}
*/

function Edit(){
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={231}
            height={220}
            fill="none"
        >
            <path fill="url(#a)" d="M.5.5h230v219H.5V.5Z"/>
            <defs>
                <pattern
                    id="a"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#b" transform="scale(.00435 .00457)" />
                </pattern>
                <image
                    xlinkHref="data:image/png;base64,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"
                    id="b"
                    width={35}
                    height={24}
                />
            </defs>
        </svg>
    )
}

export default Edit
