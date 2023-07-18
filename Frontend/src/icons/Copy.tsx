function Copy(){    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={25}
            height={25}
            fill="none"
        >
            <path fill="url(#a)" d="M0 0h25v25H0z" />
            <defs>
                <pattern
                    id="a"
                    width={1}
                    height={1}
                    patternContentUnits="objectBoundingBox"
                >
                    <use xlinkHref="#b" transform="scale(.00444)" />
                </pattern>
                <image
                    xlinkHref="data:image/png;base64,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"
                    id="b"
                    width={225}
                    height={225}
                />
            </defs>
        </svg>
    )
}

export default Copy