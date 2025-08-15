import { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer";
import Container from "../../components/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import PageTitle from "../../components/UI/PageTitle";
import { Link } from "react-router-dom";
import Icon from "../../components/UI/Icon";
import DOMPurify from "dompurify";

function PostDetail() {
    const { postId } = useParams();
    const [post, setPost] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    async function fetchPost() {
        try {
            const response = await axios.get(`http://localhost:8000/main/posts/${postId}/`);
            setPost(response.data);
        } catch (error) {
            console.log("Error while fetching post details");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return <>
        <PageContainer>
            <Container>
                <NavBar />
                <div className="flex flex-row items-center gap-1 border border-gray-600 rounded-lg px-4 py-2 max-w-max hover:bg-gray-900 hover:cursor-pointer active:scale-95 transition">
                    <Icon name="keyboard_arrow_left" />
                    <Link to="/posts" className="text-gray-400">Posts</Link>
                </div>
                <div className="flex flex-col gap-5">
                    <PageTitle>{post?.title}</PageTitle>
                    <p className="text-gray-400 text-xl">{post?.short_description}</p>
                    <div
                        className="text-gray-400 text-xl"
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post?.content) }}
                    />
                </div>
            </Container>
        </PageContainer>
    </>
}

export default PostDetail;
