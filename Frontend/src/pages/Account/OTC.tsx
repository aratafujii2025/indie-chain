import Exit from '../../icons/Exit';
import {useNavigate} from 'react-router-dom';

function OTC(){
    const navigate = useNavigate();
    const navOTC = () => {
        navigate('/account/edit/otc');
    }

    return(
        <div className="bg-black bg-opacity-50 w-full h-full justify-center items-center flex">
            <div className= "bg-white rounded-3xl w-[36rem] h-[20rem]">
                <div className="ml-[32.5rem] mt-7">
                    <Exit color="#A9A9A9"/>
                </div>

                <h3 className="italic font-semibold ml-10 text-b3">Verify Identity</h3>

                <h5 className="font-semibold ml-20 mt-6 mb-5 text-b3">Send a one time use code to my</h5>

                <div className="ml-96 bg-button-grey w-32 h-8 rounded-full text-b3 font-semibold flex items-center justify-center">
                    Send
                </div>

            </div>
        </div>
    )
}

export default OTC