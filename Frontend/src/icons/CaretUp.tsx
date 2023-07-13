interface CaretUpProps{
    color: string
}

function CaretUp(props: CaretUpProps){
    const {color} = props;

    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={31}
            height={31}
            className="scale-50"
        >
            <path
                fill={color}
                d="M25.807 19.875a.96.96 0 0 1-1.358 0l-8.92-8.92-8.919 8.92a.96.96 0 1 1-1.358-1.358l9.599-9.598a.96.96 0 0 1 1.358 0l9.598 9.598a.96.96 0 0 1 0 1.358Z"
                />
        </svg>
    )
}

export default CaretUp
