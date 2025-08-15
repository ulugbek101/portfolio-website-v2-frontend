import { Link } from "react-router-dom";
import Icon from "../../components/UI/Icon";
import LoadingSpinner from "../../components/UI/LoadingSpinner";
import { useState } from "react";
import Input from "../../components/auth/Input";

function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setIsLoading(true);
        } catch (error) {
            console.log("Error while login");
        } finally {
            // setIsLoading(false);
        }
    }

    return <>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/4">
            <form method="post" className="flex flex-col gap-5 mx-auto border border-gray-600 rounded-lg p-20" onSubmit={handleSubmit}>
                <Link to="/" className="mb-20 focus:border-gray-200 focus:outline-none flex flex-row items-center gap-1 rounded-lg px-4 py-2 max-w-max hover:bg-gray-900 hover:cursor-pointer active:scale-95 transition bg-gray-950 p-0 text-gray-400">
                    <Icon name="keyboard_arrow_left" />
                    <span>Home page</span>
                </Link>
                <h2 className="text-white font-semibold text-3xl text-center">Sign in to your account</h2>

                <Input name="email" type="email" label="E-mail" icon="person" />

                <Input name="password" type="password" label="Password" icon="key" />

                <button disabled={isLoading} className="disabled:border-black disabled:hover:cursor-not-allowed disabled:hover:bg-black disabled:active:scale-100 flex justify-center items-center focus:outline-none w-full border border-gray-600 focus:border-white active:focus:border-gray-600 hover:cursor-pointer active:scale-95 transition rounded-lg py-4 text-center font-semibold text-gray-400 hover:text-gray-200 hover:bg-gray-900 focus:bg-gray-900 focus:text-gray-200">
                    {isLoading && <LoadingSpinner />}
                    {!isLoading && "Login"}
                </button>

                <div className="flex flex-row items-center justify-center gap-2 mt-5">
                    <span>Don't have an account yet ?</span>
                    <Link className="text-blue-500 hover:text-blue-600 border-none p-0 max-w-max mt-0 bg-black font-normal focus:outline-none focus:underline" to="/registration">Create an account</Link>
                </div>
            </form>
        </div>
    </>
}

export default LoginPage;
