import * as React from 'react';
import Exit from '../../icons/Exit';

interface OTCProps {
    visible: boolean
    setPrev: React.Dispatch<React.SetStateAction<boolean>>
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    setNext: React.Dispatch<React.SetStateAction<boolean>>
}

function OTC(props: OTCProps){
    const code:string = "123456";
    const [userInput, setUserInput] = React.useState("");
    const [tries, setTries] = React.useState(3);

    return(
        <div className="bg-black bg-opacity-25 backdrop-blur-sm w-full h-full justify-center items-center flex">
            <div className= "bg-white rounded-3xl w-[36rem] h-[20rem]">
                <div onClick={() => props.setVisible(false)} className="ml-[32.5rem] mt-7">
                    <Exit color="#A9A9A9"/>
                </div>

                <h3 className="italic font-semibold ml-10 text-b3">Verify Identity</h3>
                
                <div className="hover:ring mt-6 ml-24 rounded-xl border-2 border-silver-light w-96 h-24 flex justify-center items-center">
                    <label className="text-3xl p-10">
                        <input 
                        onChange={(e) => setUserInput(e.target.value)}
                        className="outline-none text-center text-5xl w-80" placeholder="Enter Code" autoComplete="one-time-code" type="text" name="usercode" autoFocus={true} alt="enter one time use code"/>
                    </label>
                </div>

                <>
                <h6 
                    onClick={() => {
                        props.setPrev(true);
                        props.setVisible(false);
                        setTries(3); 
                    }} 
                    className="ml-24 text-sm text-silver-dark inline-block cursor-pointer">Resend Code</h6>                
                <h6 className=" ml-60 mb-4 text-sm text-red-600 inline-block">{tries} tries left</h6>
                </>

                <div 
                onClick={() => {
                    if(tries > 0){
                        if(userInput === code){
                            props.setNext(true);
                            props.setVisible(false);
                        }else{
                            setTries(tries - 1);
                            setUserInput("");
                        }
                    }else{
                        props.setPrev(true);
                        props.setVisible(false);
                        setTries(3);
                    }
                }} 
                className="ml-96 cursor-pointer bg-button-grey w-32 h-8 rounded-full text-b3 font-semibold flex items-center justify-center">
                    Verify
                </div>

            </div>
        </div>
    )
}

export default OTC