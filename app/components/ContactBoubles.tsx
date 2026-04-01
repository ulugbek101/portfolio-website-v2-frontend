import {Link} from "react-router";

function ContactBoubles() {
    return <>
        <div className="mt-5"></div>
        <div className="flex flex-row items-center gap-3">
            <Link to="https://t.me/thedevu101" target="_blank" title="Telegram">
                <i className="text-[1.3rem] bx bxl-telegram p-2.5 rounded-full bg-[#171b3c] hover:bg-[#647bff] transition duration-400"></i>
            </Link>
            <Link to="https://github.com/ulugbek101" target="_blank" title="GitHub">
                <i className="text-[1.3rem] bx bxl-github p-2.5 rounded-full bg-[#171b3c] hover:bg-[#647bff] transition duration-400"></i>
            </Link>
            <Link to="tel:+998996937308" target="_blank" title="Mobile Phone">
                <i className="text-[1.3rem] bx bxs-phone p-2.5 rounded-full bg-[#171b3c] hover:bg-[#647bff] transition duration-400"></i>
            </Link>
        </div>
    </>
}

export default ContactBoubles;