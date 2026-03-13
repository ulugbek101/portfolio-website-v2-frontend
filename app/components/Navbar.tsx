import {useEffect, useState} from "react";
import {Link, NavLink} from "react-router";
import {NAV_ITEMS} from "~/constants";
import Button from "~/components/ui/Button";
import LinkButton from "~/components/ui/Button";

function Navbar() {
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setIsTouched(window.scrollY > 0);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header>
            <nav
                className={`fixed top-0 w-full transition ${
                    isTouched ? "bg-[#0d0f26]" : "bg-[#090a1a]"
                }`}
            >
                <div className="w-full flex justify-center gap-20 py-5 mx-auto">
                    <Link to="/" className="text-xl font-semibold text-[#647bff]">
                        Ulugbek Umaraliev
                    </Link>

                    <ul className="flex flex-row items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.path} className="active:scale-95 transition">
                                <NavLink
                                    to={item.path}
                                    className={({isActive}) =>
                                        `${isActive ? 'text-[#647bff] bg-[#171b3c]' : ''} rounded py-1.5 px-3 transition hover:text-[#647bff] hover:bg-[#171b3c] ${
                                            isActive ? "text-[#647bff] bg-[#171b3c]" : ""
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <LinkButton to="/login">
                        Login
                    </LinkButton>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;