import Navbar from "../../components/NavBar.jsx";
import PageContainer from "../../components/PageContainer.jsx";
import PostItem from "../../components/posts/PostItem.jsx";
import PageTitle from "../../components/UI/PageTitle.jsx";
import Icon from "../../components/UI/Icon.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function PostsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [allPosts, setAllPosts] = useState([]); // original list
    const [searchTerm, setSearchTerm] = useState("");

    async function fetchPosts() {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:8000/main/posts/');
            setPosts(response.data);
            setAllPosts(response.data);
        } catch (error) {
            console.log("Error while fetching posts");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();

        const searchInput = document.getElementById("search");
        const handler = (e) => {
            if (document.activeElement !== searchInput) {
                if (e.key === "/") {
                    e.preventDefault();
                    searchInput?.focus();
                }
                if (e.ctrlKey && e.key.toLowerCase() === "k") {
                    e.preventDefault();
                    searchInput?.focus();
                }
            }
        };

        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, []);

    // Filter posts dynamically when searchTerm changes
    useEffect(() => {
        if (!searchTerm.trim()) {
            setPosts(allPosts);
            return;
        }
        const lowerTerm = searchTerm.toLowerCase();
        const filtered = allPosts.filter(post =>
            post.title.toLowerCase().includes(lowerTerm) ||
            post.short_description.toLowerCase().includes(lowerTerm)
        );
        setPosts(filtered);
    }, [searchTerm, allPosts]);

    return (
        <>
            <Navbar />
            <PageContainer>
                <PageTitle>All posts</PageTitle>
                <div className="w-1/2 mx-auto">
                    <div className="relative">
                        {searchTerm && <Icon name="close" extraClasses="absolute top-1/2 right-0 select-none -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer active:scale-95 transition" onClick={() => setSearchTerm("")} />}
                        <input
                            className="focus:border-gray-400 w-full my-10 border border-gray-700 placeholder:text-gray-400 placeholder:font-normal focus:outline-none text-gray-400 px-10 py-2 font-normal rounded-lg"
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Search post by title, description, tags, ..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Icon name="search" extraClasses="absolute top-1/2 left-5 -translate-x-1/2 -translate-y-1/2 text-gray-400" />
                    </div>
                </div>
                <div className="flex items-center flex-col gap-5 w-full">
                    {isLoading && <p className="text-gray-400">Loading...</p>}
                    {!isLoading && posts.length === 0 && <p className="text-gray-400">No posts found</p>}
                    {!isLoading && posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            </PageContainer>
        </>
    );
}

export default PostsPage;
