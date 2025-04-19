import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

export const OrganizerRegistrationForm = () => {
	return (
        <div>
            <Header/>
            <section className="section min-h-[80vh] pt-10 pb-20 flex flex-col justify-center items-center bg-white">
		    	<h2 className="text-3xl font-bold text-center mb-2">
		    		C'est <span className="text-red-600">parti</span>
		    	</h2>
		    	<p className="text-sm text-gray-600 text-center mb-8">
		    		Creer des maintenant votre compte organisateur en <br /> remplissant tous les champs ci-dessous
		    	</p>

		    	<div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl items-start">
		    		{/* Placeholder for image or illustration */}
		    		<div className="w-full lg:w-1/2 border-2 border-gray-700 h-[400px] relative">
		    			<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-400 text-xl">
		    				<ImagePlaceholder />
		    			</div>
		    		</div>

		    		{/* Form */}
		    		<form className="w-full lg:w-1/2 space-y-4">
		    			<input type="text" placeholder="Nom de l'organisation" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="text" placeholder="Prenoms" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="text" placeholder="Noms" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="tel" placeholder="Numero de telephone" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="email" placeholder="Adresse email" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="password" placeholder="Mot de passe" className="w-full border-b border-black focus:outline-none py-1" />
		    			<input type="password" placeholder="Confirmation mot de passe" className="w-full border-b border-black focus:outline-none py-1" />
                        <Button text={'Enregistrer'} className={'w-full'} />
		    		</form>
		    	</div>
		    </section>
            <Footer className={'bg-[#cccccc]'}/>
        </div>
	);
};

// Optional placeholder for image box
const ImagePlaceholder = () => (
	<svg width="100%" height="100%" className="stroke-gray-400">
		<line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="2" />
		<line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="2" />
	</svg>
)