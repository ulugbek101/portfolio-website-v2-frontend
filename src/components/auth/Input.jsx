import { useState } from "react";
import Icon from "../UI/Icon";

function Input({ name, label, inputClasses = "", type = "text", autoComplete = "off", icon = null, iconClasses = "" }) {
    const [passwordIsShown, setPasswordIsShown] = useState(false);

    return <>
        <div className="relative w-full">
            <input
                autoComplete={autoComplete}
                placeholder=" "
                id={name}
                type={passwordIsShown ? "text" : type}
                className={`${inputClasses} relative outline-none pt-6 pb-2 peer w-full`}
            />
            {icon && <Icon name={icon} extraClasses="absolute top-1/2 -translate-y-1/2 right-5 text-gray-400" />}
            {type === "password" && <Icon tabIndex={0} onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    e.target.click();
                }
            }} name={`${passwordIsShown ? 'visibility_off' : 'visibility'}`} extraClasses="hover:cursor-pointer active:scale-90 transition absolute top-1/2 -translate-y-1/2 right-14 text-gray-400" onClick={() => setPasswordIsShown(!passwordIsShown)} />}
            
            <label
                htmlFor={name}
                className="hover:cursor-pointer select-none absolute left-4 transition-all duration-200
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:-translate-y-0 peer-focus:text-xs
                peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:-translate-y-0 peer-not-placeholder-shown:text-xs"
            >
                {label}
            </label>
        </div>
    </>
}

export default Input;