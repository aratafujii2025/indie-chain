interface dtProps{
    label: string
    text: string
    color: string
}

function DisplayText(props: dtProps) {
    const {label, text, color} = props;

    const labelClass:string = "inline-block pl-4 pr-8 text-".concat(color);
    const textClass:string = "inline-block pl-2 text-".concat(color);

    return (
        <div className="mb-2">
            <div className={labelClass}> {label} </div>
            <div className={textClass}> {text} </div>
        </div>
    )
}

export default DisplayText