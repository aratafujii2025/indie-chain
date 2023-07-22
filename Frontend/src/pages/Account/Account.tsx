import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header';
import Edit from '../../icons/Edit';
import Copy from '../../icons/Copy';

interface dtProps{
    label: string
    text: string
}

function DisplayText(props: dtProps) {
    const {label, text} = props;

    var textColor:string = "text-b3";
    if(label === "Phone"){
        textColor = "text-silver-dark";
    }

    var textClassName:string = textColor.concat(" inline-block pl-2");

    return (
        <div className="mb-2">
            <div className="inline-block pl-4 pr-8 text-b3">
                {label}
            </div>
            <div className={textClassName}>
                {text} 
            </div>
        </div>
    )
}

// header not showing
// copy icon not showing, could display full metamask address
// w-2/3 h-4/5
function Account() {
    const navigate = useNavigate();

    const navEdit = () => {
        navigate('/account/edit');
    }

    return (
        <div className="bg-cream w-full h-full overflow-auto flex flex-nowrap flex-col">
            <Header/>            
            <h1 className="text-b3 left font-bold italic mx-16 my-5">Account</h1>

            <div className="bg-white w-[64rem] h-[50rem] rounded-3xl mb-10 ml-52">
                <div className="inline-block w-96 mr-9 opacity-0"/>
                <div className="inline-block pt-6 pb-1 px-6">
                    <img 
                        className="w-36 h-36 rounded-full"
                        src="data:image/jpeg;base64,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"
                        alt="user profile picture"
                    />
                </div>

                <div onClick={navEdit} className="inline-block w-7 h-7 ml-[17rem] -mb-2 opacity-50"> 
                    <Edit />
                </div>

                <div className="flex flex-nowrap flex-col items-center mb-6">
                    <div className="py-4 px-6 mb-2 w-[50rem] h-36 mt-2 rounded-3xl border-2 border-silver-light">
                        <h4 className="italic font-semibold mb-4">Profile</h4>
                        <DisplayText label={"Username"} text={"lizgran28"}/>
                        <DisplayText label={"Password"} text={"••••••••••••••••"}/>
                    </div>

                    <div className="py-4 px-6 mb-2 w-[50rem] h-36 mt-2 rounded-3xl border-2 border-silver-light">
                        <h4 className="italic font-semibold mb-4">Personal</h4>
                        
                        <div className="columns-2">
                            <DisplayText label={"First Name"} text={"Elizabeth"}/>
                            <DisplayText label={"Last Name"} text={"Grant"}/>

                            <DisplayText label={"Email"} text={"elizabeth.grant@gmail.com"}/>
                            <DisplayText label={"Phone"} text={"Coming Soon!"}/>
                        </div>
                    </div>

                    <div className="py-4 px-6 mb-2 w-[50rem] h-36 mt-2 rounded-3xl border-2 border-silver-light">
                        <h4 className="italic font-semibold mb-4">Details</h4>
                        <DisplayText label={"Arpeggio User ID"} text={"0123"}/>
                        <DisplayText label={"MetaMask Address"} text={"0xa12b3 . . . qp9q6"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Account