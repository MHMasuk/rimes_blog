import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

const PostDetail = () => {
    const [post, setPost] = useState({})

    const router = useRouter()
    console.log(router)
    const {post_id} = router.query
    console.log(post_id)

    useEffect(() => {
        fetch(`http://114.31.28.234:3001/post/${post_id}`)
            .then((response) => response.json())
            .then((data) => {
                    setPost(data)
                }
            );

        console.log(post)
    }, [])

    return (
        <>
            <Header/>
            <main>
                <div className="max-w-4xl mx-auto py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                            <p className="text-gray-700 text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Sed vehicula ex sit amet nulla lacinia, vel ultricies dolor consequat. Sed
                                eget augue vel sapien maximus ultricies. Vivamus consectetur urna ac sem vestibulum,
                                non congue augue bibendum. Maecenas rutrum ex vitae eros tincidunt, at semper arcu
                                commodo. Aenean eu enim velit. Integer vitae orci ultrices, vehicula mi vel,
                                ullamcorper ipsum. Pellentesque habitant morbi tristique senectus et netus et
                                malesuada fames ac turpis egestas.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default PostDetail