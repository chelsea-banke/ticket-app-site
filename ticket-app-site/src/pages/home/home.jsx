import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "../../components/button/button"
import { Carousel } from "../../components/carousel/carousel"
import { Header } from "../../components/header/header"
import { TicketSelector } from "../../components/ticket-selector/ticket-selector"
import { EventsWithPagination } from "../../components/event-cards/event-cards"
import { TestimonialCarousel } from "../../components/textimonial-carousel/testimonial-carousel"
import { Footer } from "../../components/footer/footer"

export const HomePage = () => {
    const item = <div><img src={'../../../public/env.jpg'} alt="" /></div>
    const items = [item, item];
    return (
        <div>
            <Header/>
            <section className="section h-[75vh] justify-between items-center md:flex mt-10 md">
                <div className="md:w-1/2">
                    <p className="text-4xl md:text-6xl">Decouvrez , partager et vivez des experiences uniques</p>
                    <p className="mt-5"> Nous innovons constamment pour répondre à vos envies en proposant une solution de billetterie innovante et performante </p>
                    <Button text={'Publier un evenement'} className={'mt-5'}/>
                    <form action="" className="md:w-11/12 mt-5 border-2 border-gray-950 flex justify-between">
                        <input type="text" placeholder="Search..." className="px-4 py-1 text-sm w-full" />
                        <button className="text-sm font-semibold px-4 border-2 border-gray-950 py-1">Chercher</button>
                    </form>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-[-200px] relative">
                    <Carousel carouselItems={items} />
                    <div className="absolute w-full bottom-[-125px] md:bottom-[-150px] flex justify-center">
                        <TicketSelector className={'w-11/12 md:w-8/12'}/>
                    </div>
                </div>
            </section>
            <section className="section bg-[#cccccc] w-full md:py-20 pt-40 pb-20 text-center">
                <div className="md:text-3xl text-2xl font-semibold text-gray-700"> Comment ça marche ?</div>
                <div className="md:text-6xl text-5xl mt-3 font-medium">C'est très simple </div>
                <div className="md:flex block">
                    <div className="mt-20">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="6x" className="md:inline hidden" />
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="3x" className="inline md:hidden" />
                        <div className="font-bold text-xl"> Trouvez ce dont vous avez envie</div>
                        <div className="text-base"> Recherchez le convert, le film, l'evenement bref , cherchez tout ce qui vous fait envie</div>
                    </div>
                    <div className="mt-20">
                        <FontAwesomeIcon icon="fa-solid fa-ticket" size="6x" className="md:inline hidden" />
                        <FontAwesomeIcon icon="fa-solid fa-ticket" size="3x" className="inline md:hidden" />
                        <div className="font-bold text-xl">  Reserver votre ticket</div>
                        <div className="text-base"> Recherchez le convert, le film, l'evenement bref , cherchez tout ce qui vous fait envie</div>
                    </div>
                    <div className="mt-20">
                        <FontAwesomeIcon icon="fa-solid fa-credit-card" size="6x" className="md:inline hidden"/>
                        <FontAwesomeIcon icon="fa-solid fa-credit-card" size="3x" className="inline md:hidden"/>
                        <div className="font-bold text-xl"> Effectuer votre paieme</div>
                        <div className="text-base"> Recherchez le convert, le film, l'evenement bref , cherchez tout ce qui vous fait envie</div>
                    </div>
                </div>
            </section>
            <section className="section w-full py-20 text-center">
                <div className="text-3xl font-semibold text-red-700">Pour qui ?</div>
                <div className="md:text-6xl text-3xl mt-3 font-medium">Une solution qui s'adapte <br /> <span className="text-red-700">a vos evenements</span></div>
                <div className="mt-10">
                    {[0, 0, 0].map((item) => {
                        return(
                            <div className="md:flex block w-full justify-center gap-12">
                                <Button text={'Publier un evenement'} className={'mt-5 md:w-1/4 w-9/12'}/>
                                <Button text={'Publier un evenement'} className={'mt-5 md:w-1/4 w-full'}/>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="section w-full py-20 pb-48 text-center bg-[#cccccc] border-b-2 border-gray-900">
                    <EventsWithPagination/>
            </section>
            <section className="section h-screen py-20 mb-40">
                <div className="text-center border-2 border-gray-900 md:px-20 px-5 py-10 w-fit m-auto mt-[-250px] bg-black text-white">
                    <div className="md:text-2xl font-semibold text-red-700"> Lancez-vous!</div>
                    <div className="md:text-6xl text-3xl mt-3 font-medium text-wrap">Une solution qui s'adapte <br /> <span className="text-red-700">a vos evenements</span></div>
                    <div className="font-semibold text-xl mt-5">Creer un compte sans engagement et rejoignez des milliers d'organisateurs convaincus</div>
                    <Button text={'Publish Environment'} className={'mt-5'} />
                </div>
                <div className="text-center mt-20">
                    <div className="text-2xl font-semibold text-red-700">  Temoignages</div>
                    <div className="md:text-5xl text-4xl mt-3 font-medium">  Vos avis comptent pour nous </div>
                    <div className="text-5xl font-medium text-red-700">organisateur</div>
                    <div className="font-semibold text-xl mt-5">Creer un compte sans engagement et rejoignez des milliers <br /> d'organisateurs convaincus</div>
                    <div className="md:flex block gap-8 justify-center ">
                        <Button text={'Publish Environment'} className={'mt-5 md:w-fit w-full'} />
                        <Button text={'Publish Environment'} className={'mt-5 md:w-fit w-full'} style="2" />
                    </div>     
                </div>
                <TestimonialCarousel />
            </section>
            <section className="section text-center bg-[#cccccc] md:py-20 pt-40 pb-20">
                <div className="md:text-5xl text-4xl mt-3 font-medium"> Vous aussi devenez </div>
                <div className="font-semibold text-xl mt-2">Creer un compte sans engagement et rejoignez des milliers <br /> d'organisateurs convaincus</div>
                <div className="border-2 border-gray-900 p-10 mt-5 md:flex md:w-3/4 block w-full m-auto justify-between gap-4">
                    <div className="h-50 bg-white w-2/5" />
                    <p className="md:w-3/5 w-full text-justify">
                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullam
                        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                        laborum. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    </p>
                </div>
            </section>
            <Footer/>
        </div>
    )
}