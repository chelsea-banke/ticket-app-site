import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Header } from "../../components/header/header"
import { EventCard } from "../../components/event-cards/event-card"
import { Footer } from "../../components/footer/footer";

export const mockEvents = Array.from({ length: 8 }, (_, i) => ({
	id: i + 1,
	title: "Concert Session d'as",
	location: "Douala Bercy",
	date: "20/12",
	description: "Artiste incroyable, ambiance garantie!",
}));

export const EventsPage = () => {
    return (
        <div className="flex flex-col">
            <Header/>
            <section className="section text-center py-20 bg-[#cccccc]">
			    <h2 className="text-3xl font-bold mb-2">Les évènements a venir</h2>
			    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
			    	lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			    	eiusmod tempor incididunt ut labore et
			    </p>

			    {/* Search bar */}
			    <div className="flex justify-center items-center mb-6">
			    	<button className="px-3 py-3 border-r border-gray-700 bg-white rounded-l text-sm font-medium">
			    		Chercher
			    	</button>
			    	<div className="relative w-full max-w-lg">
			    		<span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
			    			{/* <FaSearch /> */}
                            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="md:inline hidden" />
			    		</span>
			    		<input
			    			type="text"
			    			className="w-full py-2 pl-10 pr-4 rounded-r outline-none"
			    			placeholder="ticket de concert , de cinéma …"
			    		/>
			    	</div>
			    </div>

			    {/* Categories */}
			    <div className="flex flex-wrap justify-center items-center gap-3">
			    	<span className="font-medium">categories :</span>
			    	<button className="flex items-center gap-2 border px-4 py-2 rounded-full bg-white">
			    		<FontAwesomeIcon icon={'fa fa-film'} /> films & cinéma
			    	</button>
			    	<button className="flex items-center gap-2 border px-4 py-2 rounded-full bg-white">
			    		<FontAwesomeIcon icon={'fa fa-gift'} /> cadeaux & bons
			    	</button>
			    	<button className="flex items-center gap-2 border px-4 py-2 rounded-full bg-white">
			    		<FontAwesomeIcon icon={'fa fa-music'} /> Musique & concert
			    	</button>
			    	<button className="flex items-center gap-2 border px-4 py-2 rounded-full bg-white">
			    		<FontAwesomeIcon icon={'fa fa-cocktail'} /> vie nocturne
			    	</button>
			    </div>
            </section>
			<section className="section text-center flex justify-between flex-wrap py-20 gap-8">
				{mockEvents.map((event) => {
					return(
						<EventCard event={event} key={event.id} className={'border border-gray-800'} />
					)
				})}
			</section>
			<Footer className={'bg-[#cccccc]'}/>
        </div>
    )
}