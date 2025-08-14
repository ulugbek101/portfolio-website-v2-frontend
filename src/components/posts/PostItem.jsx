import PostTagItem from "./PostTagItem";

function PostItem({ post }) {
    return <>
        <div key={post.id} className="flex flex-col rounded-xl border border-gray-700 p-4 w-1/2 gap-3">
            <div className="flex flex-row items-center justify-between">
                <h3 className="font-bold text-gray-400 text-3xl">{post.title}</h3>
                <p className="text-sm font-normal text-gray-400 text-end">{post.created}</p>
            </div>
            <p className="text-lg font-normal text-gray-400 text-justify">
                {post.content}
            </p>
            {post.tags.lenght > 0 && (
                <div className="flex flex-row items-center gap-5 mt-5">
                    <h3 className="text-gray-400 text-lg font-normal">Tags: </h3>
                    <div className="flex flex-row flex-wrap items-center gap-2">
                        {post.tags.map(tag => <PostTagItem name={tag.name} />)}
                    </div>
                </div>
            )}
        </div>
    </>
}

export default PostItem;
