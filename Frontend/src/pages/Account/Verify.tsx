import * as React from 'react';
import Exit from '../../icons/Exit';

interface vProps {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
    setNext: React.Dispatch<React.SetStateAction<boolean>>
    email: string;
}

function Verify(props: vProps){
    const {email} = props;

    return(
        <div className="bg-black bg-opacity-25 backdrop-blur-sm w-full h-full justify-center items-center flex">
            <div className= "bg-white rounded-3xl w-[36rem] h-[20rem]">
                <div onClick={() => props.setVisible(false)} className="ml-[32.5rem] mt-7">
                    <Exit color="#A9A9A9"/>
                </div>

                <h3 className="italic font-semibold ml-10 text-b3">Verify Identity</h3>

                <>
                    <h5 className="font-semibold ml-20 mt-6 mb-5 text-b3">Send a one time use code to my</h5>
                    <div className="ml-20">
                        <label className="block mb-4 text-lg text-b3">
                            <input defaultChecked={true} value="email" type="radio" name="choose where to send code"/>
                            <>
                                <div className="inline-block font-semibold px-3">Email</div>
                                <div className="inline-block px-3">{email}</div>
                            </>
                        </label>
                        <label className="block mb-4 text-lg text-silver-dark">
                            <input disabled={true} value="phone" type="radio" name="choose where to send code"/>
                            <>
                                <div className="inline-block font-semibold px-3">Phone</div>
                                <div className="inline-block px-3">Coming Soon!</div>
                            </>
                        </label>
                    </div>
                </>

                <div onClick={() => {
                    props.setNext(true)
                    props.setVisible(false)
                    //send email to user with one time use code 
                }}
                    className="ml-96 cursor-pointer bg-button-grey w-32 h-8 rounded-full text-b3 font-semibold flex items-center justify-center">
                    Send
                </div>

            </div>
        </div>
    )
}

export default Verify