// pages/index.js

import { useEffect, useState } from "react";
import axios from "axios";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

export default function Home() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://basic-blog.teamrabbil.com/api/post-newest")
      .then((response) => {
        setBlogItems(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blog items:", error);
      });
  }, []);

  return (
    <div>
      {/* <Header /> */}

      <section className=" p-6 text-center  bg-offwhite w-4/5 mx-auto ">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog!</h1>
        <p>Stay updated with our latest news and articles.</p>
      </section>

      <section className=" p-6 bg-offwhite w-4/5 mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col justify-center items-center">
          <ul className="grid grid-cols-2 gap-4 rounded-lg">
            {blogItems.slice(0, 4).map((blog) => (
              <li
                key={blog.id}
                className="mb-4 p-4 border rounded-lg bg-burlywood"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-sm">{blog.short}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
