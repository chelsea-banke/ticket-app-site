import "./button.css";

export const Button = ({text, style='red', className}) => {
    const redStyle = 'red bg-red-700 text-white'
    const whiteStyle = 'white bg-white text-black'
    return (
        <button className={`button text-sm px-8 py-2 border-2 border-gray-950 font-semibold ${style == 'red' ? redStyle : style == 'white' ? whiteStyle : ''} ${className}`}>{text}</button>
    )
}