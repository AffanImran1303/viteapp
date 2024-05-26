import React, { useEffect, useState } from 'react';
type Post={
    userId:string;
    id:number;
    title:string;
    body:string;
}

const Postpage = () => {
    const [posts,setPosts]=useState<Post[]>([]);
    const getPost=async()=>{
        const resp= await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonResp=await resp.json();
        setPosts(jsonResp);
        console.log(jsonResp);
    }
    useEffect(()=>{
        getPost();
    },[]);
  return (
    <section>
        <div>PostPage</div>
        {
            posts.map(postItem=>{
                return<div className="my-10">
                    <h2 className="text-xl">{postItem.title}</h2>
                    <p>{postItem.body}</p>
                </div>
            })
        }
    </section>
  )
}

export default Postpage