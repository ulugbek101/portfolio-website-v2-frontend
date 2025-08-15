import { Link } from "react-router-dom";
import formatDateTime from "../../utils/helperFunctions";
import PostTagItem from "./PostTagItem";

function PostItem({ post }) {
    console.log(post)
    return <>
        <Link to={"/"} key={post.id} className="flex flex-col rounded-xl border border-gray-700 hover:border-gray-400 hover:cursor-pointer focus:outline-none focus:border-gray-400 p-4 w-1/2 gap-3 transition">
            <div className="flex flex-row items-center justify-between">
                <h3 className="font-bold text-gray-400 text-4xl">{post.title}</h3>
                <p className="text-md text-gray-400 text-end">{formatDateTime(post.created)}</p>
            </div>
            <p className="text-lg text-gray-400 text-justify">
                {post.short_description}
            </p>
            {post.tags.length > 0 && (
                <div className="flex flex-row items-center gap-5 mt-5">
                    <h3 className="text-gray-400 text-lg">Tags: </h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {post.tags.map(tag => <PostTagItem name={tag.name} />)}
                    </div>
                </div>
            )}
        </Link>
    </>
}

export default PostItem;
