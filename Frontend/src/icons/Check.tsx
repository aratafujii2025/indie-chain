interface cProps {
    color: string
    visible: boolean
}

function Check(props: cProps){
    const {color, visible} = props
    
    if(visible){
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={25}
                fill="none"
                {...props}
            >
                <path
                stroke={color}
                strokeLinecap="round"
                strokeWidth={2.5}
                d="m2 14 5.736 8.192M8 22.509 24.023 2"
                />
            </svg>
        )
    }else{
        return(null)
    }
}
export default Check
