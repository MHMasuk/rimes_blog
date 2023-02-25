import Link from "next/link";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleBlog = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);

  const handleDelete = () => {
    fetch(`http://114.31.28.234:3001/post/${props.post.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // toast.success("Post deleted successfully");
        console.log("post id deleted!!");
        // setPosts((prevPosts) =>
        //   prevPosts.filter((post) => post.id !== postIdToDelete)
        // );
        setModalOpen(false);
        setPostIdToDelete(null);
      })
      .catch((error) => {
        console.error("Error:", error);
        setPostIdToDelete(null);
      });
  };

  const Modal = () => (
    <div className="absolute top-0 left-0 h-full w-full">
      <div
        onClick={() => setModalOpen(false)}
        className="fixed top-0 left-0 bg-black/30 h-full w-full"
      />
      <div className="w-[400px] px-4 py-8 bg-white rounded-xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <p className="text-center text-xl text-gray-700">
          Are you sure, You want to delete ?
        </p>
        <div className="flex justify-around items-center mt-6">
          <button
            className="text-white px-3 py-1.5 bg-red-500 rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="text-white px-3 py-1.5 bg-gray-500 rounded-md"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-2">{props.post.title}</h2>
          <p className="text-gray-700">{props.post.body}</p>
        </div>
        <div className="flex justify-between items-center">
          <Link href={`/post-detail/${props.post.id}`} legacyBehavior>
            <a className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Read More
            </a>
          </Link>

          <div className="flex gap-3">
            <Link href={`/post-update/${props.post.id}`}>
              <AiFillEdit className="text-yellow-400" />
            </Link>
            <button onClick={() => setModalOpen(true)}>
              <RiDeleteBin6Line className="text-red-400" />
            </button>
          </div>
        </div>
      </div>
      {modalOpen && <Modal />}
    </>
  );
};

export default SingleBlog;
