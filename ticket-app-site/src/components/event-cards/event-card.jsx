import { Button } from "../button/button.jsx";

export const EventCard = ({ event, className }) => (
    <div className={`border-2 rounded flex flex-col items-center md:w-fit w-full ${className}`}>
        <div className="w-full h-40 bg-white" />
        <div className="p-4">
            <h3 className="text-xl font-semibold text-center">{event.title}</h3>
            <p className="text-md font-semibold text-red-600">{event.location} - {event.date}</p>
            <p className="my-2 text-sm text-center"> {event.description} </p>
            <Button text={' Reserver mon ticket'} style="white" />
        </div>
    </div>
)