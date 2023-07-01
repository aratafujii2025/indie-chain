interface IProps{
    bgColor: string
    arrowColor: string
}

function Arrow (props: IProps){
    const {bgColor, arrowColor} = props;

    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
        >
            <g filter="url(#a)">
            <circle cx={16.136} cy={15.662} r={15.432} fill={bgColor} />
            <path
                fill={arrowColor}
                d="M21.691 10.724v8.025a.618.618 0 0 1-1.234 0v-6.535l-8.823 8.824a.618.618 0 0 1-.873-.874l8.823-8.823H13.05a.617.617 0 1 1 0-1.234h8.025a.618.618 0 0 1 .617.617Z"
            />
            </g>
            <defs>
            <filter
                id="a"
                width={38.864}
                height={38.864}
                x={-3.296}
                y={-3.77}
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation={2} />
                <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_148_1043"
                />
                <feBlend
                in="SourceGraphic"
                in2="effect1_backgroundBlur_148_1043"
                result="shape"
                />
            </filter>
            </defs>
        </svg>
    )
}

export default Arrow
