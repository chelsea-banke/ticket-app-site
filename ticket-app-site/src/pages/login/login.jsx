import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";

export const LoginForm = () => {
	return (
        <div>
            <Header/>
		    <section className="section min-h-[85vh] flex flex-col items-center justify-center bg-white px-4">
		    	<div className="w-full max-w-md space-y-6 text-center">
		    		<h2 className="text-3xl font-bold">Se connecter</h2>
		    		<p className="text-sm text-gray-600">Connectez-vous et explorez les evenements</p>

		    		<form className="space-y-4 text-left">
		    			{/* Identifiant */}
		    			<div className="relative">
		    				<label className="block text-sm mb-1">Identifiant</label>
                            <div className="flex border-b border-black">
		    				    <input
		    				    	type="text"
		    				    	className="w-full focus:outline-none pr-8"
		    				    />
                                <FontAwesomeIcon icon="fa-solid fa-smile" />
                            </div>
		    			</div>

		    			{/* Mot de passe */}
		    			<div className="relative">
		    				<label className="block text-sm mb-1">Mot de passe</label>
                            <div className="flex border-b border-black">

		    				    <input
		    				    	type="password"
		    				    	className="w-full focus:outline-none pr-8"
		    				    />
                                <FontAwesomeIcon icon="fa-solid fa-eye-slash" />
                            </div>
		    			</div>

		    			<div className="text-right text-sm">
		    				<a href="#" className="text-blue-600 hover:underline">
		    					Mot de passe oublié ?
		    				</a>
		    			</div>

                        <Button text={"Se connecter"} className="w-full" link={'/'} />

		    			<p className="text-sm text-center">
		    				Pas de compte ?{" "}
		    				<a href="#" className="text-blue-600 hover:underline">
		    					S'inscrire
		    				</a>
		    			</p>
		    		</form>

		    		{/* Divider */}
		    		<div className="flex items-center justify-center gap-4 text-sm text-gray-500">
		    			<div className="h-px w-1/3 bg-black" />
		    			<span>Ou</span>
		    			<div className="h-px w-1/3 bg-black" />
		    		</div>
		    	</div>
                {/* Social Buttons */}
		    	<div className="flex gap-4 mt-8 w-full justify-center">
                    <Button text={'Se Connecter avec Google'} className="w-full md:w-fit" style="white"/>
                    <Button text={'Se Connecter avec Appla'} className="w-full md:w-fit" style="white"/>
		    	</div>
		    </section>
            <Footer className={'bg-[#cccccc]'}/>
        </div>
	)
}
