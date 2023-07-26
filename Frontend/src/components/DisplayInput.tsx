interface diProps{
    label: string
    labelColor: string
    defaultVal: string
    type: string
    req?: boolean
}

function DisplayInput(props: diProps) {
    const {label, labelColor, defaultVal, type, req} = props; 
    const labelClass:string = "inline-block pl-4 pr-8 text-".concat(labelColor);
    
    if(req != null && req){
        return(
            <div className="mb-2">
                <label className={labelClass}>{label}</label>
                <input required type={type} defaultValue={defaultVal} className="inline-block text-b3 hover:outline-none hover:ring focus:outline-silver-light outline-1 pl-2 rounded-full pr-2"/>
            </div>
        )
    }else{
        return(
            <div className="mb-2">
                <label className={labelClass}>{label}</label>
                <input type={type} defaultValue={defaultVal} className="inline-block text-b3 hover:outline-none hover:ring focus:outline-silver-light outline-1 pl-2 rounded-full pr-2"/>
            </div>
        )
    }
}

export default DisplayInput