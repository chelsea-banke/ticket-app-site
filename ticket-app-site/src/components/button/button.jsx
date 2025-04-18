import "./button.css";

export const Button = ({text, style='1', className}) => {
    const style1 = 'bg-red-700 text-white'
    const style2 = 'bg-white text-black'
    return (
        <button className={`button text-sm px-8 py-2 border-2 border-gray-950 font-semibold ${style == '1' ? style1 : style == '2' ? style2 : ''} ${className}`}>{text}</button>
    )
}