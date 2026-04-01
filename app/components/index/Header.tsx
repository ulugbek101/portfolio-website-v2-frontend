import ContactBoubles from "~/components/ContactBoubles";
import Section from "~/components/Section";

function Header() {
    return <>
        <Section>
            <div className="flex flex-col items-center gap-4">
                <img src="https://avatars.githubusercontent.com/u/94630185?v=4" alt="Ulugbek Umaraliev"
                     className="rounded-full w-[180px]"/>
                <div className="flex flex-col justify-center items-center gap-2">
                    <div className="flex flex-row items-center gap-1">
                        <span className="h-[2px] w-5 bg-[#647bff]"></span>
                        <span className="text-[#647bff] font-semibold text-xl">Hello</span>
                        <span className="h-[2px] w-5 bg-[#647bff]"></span>
                    </div>
                    <div className="max-w-150 text-center">
                        I'm a <span className="text-[#647bff]">Full Stack</span> web developer with 3+ years of
                        experience and strong passion for building
                        <span className="text-[#647bff]"> Web Applications,</span> <span className="text-[#647bff]">multifunctional Telegram Bots, microservices, </span>
                         and <span className="text-[#647bff]">REST API's. </span>
                        Here's a bit more <span className="text-[#647bff]">about me</span>
                    </div>
                    <ContactBoubles />
                </div>
            </div>
        </Section>
    </>
}

export default Header;