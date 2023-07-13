import * as React from 'react';
import CaretDown from '../icons/CaretDown';
import CaretUp from '../icons/CaretUp';

interface DropdownProps{
    options: string[]
}

function Dropdown({options}: DropdownProps){
    const[isOpen, setOpen] = React.useState(false);
    const[opt, setOpt] = React.useState(options[0]);

    return(
        <div className="mx-20 rounded-full">
            <button 
                className="pl-4 bg-white bg-opacity-75 w-52 h-8 flex items-center justify-between rounded-full border-2 border-white"
                onClick={e => setOpen(!isOpen)}
            > 
                {opt}
                {!isOpen?(
                    <CaretDown color={"#282828"} /> ):( <CaretUp color={"#282828"} />
                )}
            </button>

            {isOpen && (
                <div className="absolute mt-1 max-h-0 overflow-visible"> 
                    <div className="bg-white bg-opacity-75 flex flex-col rounded-xl p-1 top-14 w-52">
                        {options.map(opt => {
                            return (
                                <h5 
                                className="p-0.5 w-full hover:bg-white rounded-lg text-sm pl-4"
                                onClick={e => {setOpt(opt); setOpen(false);}}
                                >
                                    {opt}
                                </h5>
                            )})
                        }
                    </div>
                </div>
            )}

        </div>
    )
}

export default Dropdown;