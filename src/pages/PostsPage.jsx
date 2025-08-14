import Navbar from "../components/NavBar.jsx";
import Container from "../components/Container.jsx";

function PostsPage() {
    return <>
        <Navbar />
        <Container>
            <h1 className="font-bold opacity-80 text-gray-400 text-5xl text-center">All posts</h1>
            <div className="max-w-1/2 mx-auto">
                <input className="w-full my-10 border border-gray-700 placeholder:text-gray-400 placeholder:font-normal focus:outline-none text-gray-400 px-2 py-2 font-normal rounded-lg" type="search" name="search" id="search" placeholder="Search post by title, description, tags, ..." />
            </div>
            <div className="flex items-center flex-col gap-5">
                <div className="flex flex-col rounded-xl border border-gray-700 p-4 max-w-1/2 gap-3">
                    <div className="flex flex-row items-center justify-between">
                        <h3 className="font-bold text-gray-400 text-3xl">Some post title</h3>
                        <p className="text-sm font-normal text-gray-400 text-end">14.08.2025 12:08</p>
                    </div>
                    <p className="text-lg font-normal text-gray-400 text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto commodi deleniti doloribus facilis fugit laborum laudantium, natus nulla omnis pariatur quasi quibusdam quidem quo sequi, tempora voluptas voluptate voluptatem!
                    </p>
                    <div className="flex flex-row items-center gap-5 mt-5">
                        <h3 className="text-gray-400 text-lg font-normal">Tags: </h3>
                        <div className="flex flex-row flex-wrap items-center gap-2">
                            <span className="text-gray-400 font-normal text-sm rounded-lg py-1 px-2 border border-gray-400">#js</span>
                            <span className="text-gray-400 font-normal text-sm rounded-lg py-1 px-2 border border-gray-400">#python</span>
                            <span className="text-gray-400 font-normal text-sm rounded-lg py-1 px-2 border border-gray-400">#django</span>
                            <span className="text-gray-400 font-normal text-sm rounded-lg py-1 px-2 border border-gray-400">#react</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </>
}

export default PostsPage;