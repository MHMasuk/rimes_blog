import React, { useEffect, useState } from "react";
import { IoAdd } from "react-icons/io5";

import SingleBlog from "@/components/Blog/SingleBlog";
import Link from "next/link";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  // const [modalOpen, setModalOpen] = useState(false);
  // const [postIdToDelete, setPostIdToDelete] = useState(null);

  // const handleDelete = () => {
  //   fetch(`http://114.31.28.234:3001/post/${postIdToDelete}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then(() => {
  //       // toast.success("Post deleted successfully");
  //       console.log("post id deleted!!");
  //       setPosts((prevPosts) =>
  //         prevPosts.filter((post) => post.id !== postIdToDelete)
  //       );
  //       setModalOpen(false);
  //       setPostIdToDelete(null);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //       setPostIdToDelete(null);
  //     });
  // };

  useEffect(() => {
    fetch("http://114.31.28.234:3001/post")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, [posts]);

  // const Modal = () => (
  //   <div className="absolute top-0 left-0 h-full w-full">
  //     <div
  //       onClick={() => setModalOpen(false)}
  //       className="fixed top-0 left-0 bg-black/30 h-full w-full"
  //     ></div>
  //     <div className="h-20 w-80 bg-white rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
  //       modal
  //       <button onClick={handleDelete}>Delete</button>
  //     </div>
  //   </div>
  // );

  // const handleModalShow = () => {
  //   setModalOpen(true)
  //   setPostIdToDelete()
  // }

  return (
    <div className="py-10">
      <Link
        href="/post-add"
        className="px-3 py-1.5 bg-green-400 rounded-md mb-6 text-white flex items-center gap-2 w-max ml-auto"
      >
        <span>Add new post</span>
        <IoAdd className="text-white" />
      </Link>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <SingleBlog
            key={index}
            post={post}
            // handleDelete={handleDelete}
            // setModalOpen={setModalOpen}
            // handleModalShow={handleModalShow}
          />
        ))}
      </div>

      {/* {modalOpen && <Modal />} */}
    </div>
  );
};

export default BlogList;
