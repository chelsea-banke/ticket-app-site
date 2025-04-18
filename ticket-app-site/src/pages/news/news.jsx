import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
import { NewsCard } from "../../components/news-card/news-card"

const mockNews = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: "Actualités",
    link: "/",
    date: "24 Janvier 2024",
    description: "lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ",
}))

export const NewsPage = () => {
    return(
        <div>
            <Header/>
            <section className="section text-center py-20 md:h-[75vh] h-screen bg-[#cccccc] border-b-2 border-gray-900">
			    <h2 className="text-3xl font-bold mb-2"> Nos actualites</h2>
			    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
			    	lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
			    	eiusmod tempor incididunt ut labore et
			    </p>

			    {/* Categories */}
			    <div className="flex flex-wrap justify-center items-center gap-3">
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
            <section className="section py-20 ">
                <div className="border-2 border-gray-900 p-10 mt-[-230px] md:flex md:w-3/4 block w-full m-auto justify-between gap-4  bg-white">
                    <div className="h-50 bg-white w-2/5" />
                    <div className="md:w-3/5 w-full text-justify">
                        <h2 className="text-xl text-red-700 font-bold"> Actualités</h2>
                        <p className="font-semibold">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor </p>
                        <div className="text-xs pt-2 pb-4"> 24 Janvier 2024</div>
                        <p className="text-sm">
                            laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        </p>
                        <div className="text-xs pt-4 font-semibold text-red-700"> Lire l'article  -{'>'}</div>
                    </div>
                </div>
            </section>
            <section className="section flex justify-between flex-wrap pt-10 pb-20 gap-8 w-full">
				{mockNews.map((news) => {
					return(
                        <NewsCard news={news} key={news.key} className={'border border-gray-800 md:w-[22%]'} />
					)
				})}
			</section>
            <Footer className={'bg-[#cccccc]'}/>
        </div>
    )
}