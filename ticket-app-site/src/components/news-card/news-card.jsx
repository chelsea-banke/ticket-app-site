import { Link } from "react-router";
import { Button } from "../button/button.jsx";

export const NewsCard = ({ news, className }) => (
    <div className={`border-2 rounded flex flex-col items-center w-full ${className}`}>
        <div className="w-full h-40 bg-white" />
        <div className="p-4">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-md font-semibold text-red-600">{news.date}</p>
            <p className="my-2 text-sm text-justify w-fit font-semibold"> {news.description} </p>
            <Link className="text-md font-semibold text-red-600 ">Lire l'article  -{'>'}</Link>
        </div>
    </div>
)