// pages/index.js

import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";

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
    <div className="container mx-auto p-6">
      <Header />

      <section className=" p-6 text-center  bg-offwhite w-full mx-auto ">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog!</h1>
        <p>Stay updated with our latest news and articles.</p>
      </section>

      <section className="p-6  bg-offwhite mx-auto ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Why Read Our Blog?
        </h2>
        <p className="mb-4">
          Our blog offers unique insights into a range of topics. Whether you're
          looking to stay updated with the latest trends, deepen your knowledge
          about specific subjects, or simply find entertainment, we have
          something for everyone. Our team of dedicated writers ensures that
          every piece is well-researched, engaging, and insightful. Join our
          community and discover the world through our eyes.
        </p>
      </section>

      <section className="  bg-offwhite mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Latest Blog Posts
        </h2>
        <div className="flex flex-col justify-center p-6 mx-auto items-center">
          <ul className="grid grid-cols-2 gap-4 rounded-lg">
            {blogItems.slice(0, 4).map((blog) => (
              <li
                key={blog.id}
                className=" bg-peru text-white  mb-4 p-4 border rounded-lg"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <h3 className="text-lg font-bold mb-2 text-center">
                  {blog.title}
                </h3>
                <p className="text-sm">{blog.short}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
