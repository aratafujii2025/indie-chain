interface IProps{
    color: string
}

function CaretDown(props: IProps){
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
                d="m26.064 12.197-9.598 9.598a.961.961 0 0 1-1.358 0L5.51 12.197a.96.96 0 0 1 1.358-1.358l8.92 8.92 8.918-8.92a.958.958 0 0 1 1.358 0 .96.96 0 0 1 0 1.358Z"
            />
        </svg>
    )
}

export default CaretDown
