

function Posts(){
    return ( <ul className="posts">
    {posts.map((Posts) => {
        <li key={posts.id}>
            return(
            <p>{posts.id}</p>
            <img src='{posts.image}'/>
            <p>{posts.mess}</p>
        ) 
        </li>}
        </ul>)}

export default Posts