import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faWhatsapp,
    faLinkedinIn,
    faSkype,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Logo } from "../logo/logo";
import { Button } from "../button/button";

export const Footer = ({className}) => {
    return (
        <footer className={`section border-t pt-10 ${className}`}>
            <div className="text-sm text-gray-700">
                {/* Logo and description */}
                <div className="flex justify-between flex-wrap">
                    <div>
                        <Logo/>
                        <p className="mt-2">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et
                        </p>
                    </div>
                    {/* App store badges */}
                    <div className="mt-4 space-x-2 flex gap-4">
                        <button className="border border-gray-600 px-3 py-1 rounded flex items-center gap-2">
                            <FontAwesomeIcon icon="fa-brands fa-app-store-ios" size="3x" />
                            <span className="text-xs">
                                Disponible sur <br /> <strong>Apple Store</strong>
                            </span>
                        </button>
                        <button className="border border-gray-600 px-3 py-1 rounded flex items-center gap-2">
                            <FontAwesomeIcon icon="fa-brands fa-google-play" size="3x" />
                            <span className="text-xs">
                                Disponible sur <br /> <strong>Google Play</strong>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="flex md:justify-between justify-start gap-8 mt-10 flex-wrap">
                    {/* Examples */}
                    <div>
                        <h4 className="font-bold mb-2">Exemples</h4>
                        <ul className="space-y-1">
                            <li>Festival</li>
                            <li>Concert</li>
                            <li>Clubs sportifs</li>
                            <li>Vie nocturne</li>
                            <li>Parc & Musee</li>
                            <li>Salons et expositions</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="font-bold mb-2">Ressources</h4>
                        <ul className="space-y-1">
                            <li>Blog</li>
                            <li>Aide</li>
                            <li>Questions fréquentes</li>
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-bold mb-2">A propos</h4>
                        <ul className="space-y-1">
                            <li>Qui sommes-nous ?</li>
                            <li>Frais de service</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-bold mb-2">Legal</h4>
                        <ul className="space-y-1">
                            <li>Condition d'utilisation</li>
                            <li>Confidentialité</li>
                            <li>Mentions légales</li>
                        </ul>
                    </div>

                    {/* Social + newsletter */}
                    <div className="md:col-span-2 md:text-right">
                        <h4 className="font-bold mb-2">Suivez-nous</h4>
                        <div className="flex gap-3 text-lg mb-2 md:justify-end justify-start">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faWhatsapp} />
                            <FontAwesomeIcon icon={faLinkedinIn} />
                            <FontAwesomeIcon icon={faSkype} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <p className="text-sm mb-2">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor
                        </p>
                        <div className="flex w-full justify-end">
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-gray-900 px-3 py-1 w-8/12 rounded-l"
                            />
                            {/* <button className="bg-red-600 text-white px-4 py-1 rounded-r hover:bg-red-700 text-sm">
                                
                            </button> */}
                            <Button text={'Je m’abonne'} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="text-center text-xs text-gray-500 mt-10 py-4 border-t border-gray-600">
                © 2024 Tous droits réservés
            </div>
        </footer>
    );
};