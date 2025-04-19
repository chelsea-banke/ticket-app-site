import { useNavigate } from "react-router";
import "./button.css";

export const Button = ({text, style='red', className, link}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (link) {
            navigate(link)
        }
        else {
            console.log('Button clicked!')
        }
    }

    const redStyle = 'red bg-red-700 text-white'
    const whiteStyle = 'white bg-white text-black'
    return (
        <button className={`button text-sm px-8 py-2 border-2 border-gray-950 font-semibold ${style == 'red' ? redStyle : style == 'white' ? whiteStyle : ''} ${className}`}
            onClick={()=>{handleClick()}}>
            {text}
        </button>
    )
}