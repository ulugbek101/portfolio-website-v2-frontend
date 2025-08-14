import Navbar from "../components/NavBar.jsx";
import Container from "../components/Container.jsx";
import PostItem from "../components/posts/PostItem.jsx";
import axios from "axios";
import { useEffect, useState } from "react";

function PostsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchPosts() {
        try {
            setIsLoading(true);
            const response = await axios.get('http://localhost:8000/main/posts/');
            setPosts(response.data);
        } catch (error) {
            console.log("Error while fetching posts");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return <>
        <Navbar />
        <Container>
            <h1 className="font-bold opacity-80 text-gray-400 text-5xl text-center">All posts</h1>
            <div className="w-1/2 mx-auto">
                <input className="w-full my-10 border border-gray-700 placeholder:text-gray-400 placeholder:font-normal focus:outline-none text-gray-400 px-2 py-2 font-normal rounded-lg" type="search" name="search" id="search" placeholder="Search post by title, description, tags, ..." />
            </div>
            <div className="flex items-center flex-col gap-5 w-full">
                {posts && posts.map(post => <PostItem post={post} />)}
            </div>
        </Container>
    </>
}

export default PostsPage;
