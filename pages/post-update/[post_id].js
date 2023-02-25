import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PostUpdate() {
  const router = useRouter();
  const { post_id } = router.query;
  console.log("post_id", post_id);
  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(`http://114.31.28.234:3001/post/${post_id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setPost(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [post_id]);

  const handleUpdate = (event) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value,
      body: event.target.body.value,
    };

    fetch(`http://114.31.28.234:3001/post/${post_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success("Post created successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        router.push(`/post-detail/${post_id}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="max-w-xl mx-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleUpdate}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter post title"
              defaultValue={post.title}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="body"
            >
              Body
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="body"
              placeholder="Enter post body"
              rows="5"
              defaultValue={post.body}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Post
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default PostUpdate;
