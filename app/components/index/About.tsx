import Heading from "~/components/Heading";
import Section from "~/components/Section";

function About() {
    return (
        <Section>
            <Heading/>
            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-6 flex flex-col gap-5">
                    <p className="font-semibold uppercase text-[#647bff]">about me</p>
                    <h2 className="font-bold text-4xl">Software Engineer</h2>
                    <button className="rounded-lg py-3 px-4 flex flex-row items-center gap-2 bg-[#647bff] max-w-max">
                        <span>Download CV</span>
                        <i className="bx bx-download"></i>
                    </button>
                </div>
                <div className="col-span-6"></div>
            </div>
        </Section>
    )
}

export default About;