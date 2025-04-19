import { useState } from "react"
import { Logo } from "../logo/logo"
import { Button } from "../button/button"
import { Link } from "react-router"
import './header.css'

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="section bg-white p-2 w-full border-b-2 border-gray-600 flex justify-between items-center py-4 sticky top-0 z-20">
            <Logo />
            <div className="hidden md:flex gap-4 mt-2 font-semibold">
                <Link className="link" to={'/'}>Nos Solutions</Link>
                <Link className="link" to={'/events'}>Nos Envenements</Link>
                <Link className="link" to={'/news'} >Nos actualites</Link>
            </div> 
            <div className="hidden md:flex gap-4 items-center">
                <Button text={"Publish in environment"} link={'/organizer-registration'} />
                <Button text={"Get connected"} style="white" link={'/login'} />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={toggleMenu}
                    className="text-gray-600 focus:outline-none"
                >
                    <span className="material-icons">menu</span>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="section absolute top-16 left-0 w-full bg-white shadow-md border-t-2 border-gray-600 md:hidden py-8">
                    <div className="flex flex-col gap-4 font-semibold">
                        <Link onClick={toggleMenu}>Our Solutions</Link>
                        <Link onClick={toggleMenu}>Our Environments</Link>
                        <Link onClick={toggleMenu}>What's New</Link>
                    </div>
                    <div className="flex flex-col gap-4 mt-10">
                        <Button text={"Publish in environment"} link={'organizer-registration'}/>
                        <Button text={"Get connected"} style="white" link={'/login'} />
                    </div>
                </div>
            )}
        </header>
    );
};