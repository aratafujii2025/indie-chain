interface Props {
    color: string
}

function Exit(props: Props){
    const {color} = props;
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            {...props}
        >
            <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth={3}
            d="M2.12 2 22 22M2 22 21.88 2"
            />
        </svg>
    )
}

export default Exit