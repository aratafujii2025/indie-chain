import axios from "axios";
import * as React from 'react';
import Exit from '../../icons/Exit';
import Check from "../../icons/Check";

interface cProps {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    username: string
}

function ChangePw(props: cProps){
    const [newPass, setNewPass] = React.useState("");
    const [confirm, setConfirm] = React.useState("");
    const [check, setCheck] = React.useState(false);

    return(
        <div className="bg-black bg-opacity-25 backdrop-blur-sm w-full h-full justify-center items-center flex">
            <div className= "bg-white rounded-3xl w-[36rem] h-[20rem]">
                <div onClick={() => props.setVisible(false)} className="ml-[32.5rem] mt-7">
                    <Exit color="#A9A9A9"/>
                </div>

                <h3 className="italic font-semibold ml-10 text-b3">Change Password</h3>
                
                <div className="font-semibold my-10 ml-14 whitespace-pre-wrap">
                    <div className="mb-2">
                        <label className="inline-block pl-4 pr-8 text-b3">New Password      </label>
                        <input 
                        onChange={(e) => setNewPass(e.target.value)}
                        required type="password" defaultValue="" className="inline-block text-b3 hover:outline-none hover:ring focus:outline-silver-light outline-1 pl-2 rounded-full pr-2"/>
                    </div>
                    <div className="h-2"/>
                    <div className="mb-2">
                        <label className="inline-block pl-4 pr-8 text-b3">Confirm Password</label>
                        <input
                        onChange={(e) => {
                            setConfirm(e.target.value)
                            if(newPass === confirm){
                                setCheck(true);
                            }else{
                                setCheck(false);
                            }
                        }} 
                        required type="password" defaultValue="" className="inline-block text-b3 hover:outline-none hover:ring focus:outline-silver-light outline-1 pl-2 rounded-full pr-2"/>
                        <div className="inline-block ml-4">
                            <Check color="#8CDBA9" visible={check}/>
                        </div>
                    </div>
                </div>

                <div 
                onClick={() => {
                    if(check){

                    }else{

                    }
                }}
                className="ml-96 cursor-pointer bg-button-grey w-32 h-8 rounded-full text-b3 font-semibold flex items-center justify-center">
                    Save
                </div>

            </div>
        </div>
    )
}

export default ChangePw