import {Link} from "react-router";
import type {ReactNode} from "react";

interface Props {
    to: string
    additionalStyles?: string
    children: ReactNode
}

function LinkButton({ children, to, additionalStyles = "" }: Props) {
    const className = "transition active:scale-95 text-md flex flex-row gap-1 justify-center items-center text-center text-white bg-[#647bff] hover:bg-[#546eff] hover:cursor-pointer rounded-md py-2 px-4"
    return <Link to={to} className={`${additionalStyles} ${className}`}>
        {children}
    </Link>
}

export default LinkButton;