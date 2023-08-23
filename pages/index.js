// pages/index.js

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Home() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://basic-blog.teamrabbil.com/api/post-categories")
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

      <section className=" p-6 text-center   bg-offwhite  mx-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Blog!</h1>
        <p>Stay updated with our latest news and articles.</p>
      </section>

      <section className=" min-h-screen p-6 bg-offwhite mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">Blog Categories</h2>
        <div className="flex flex-col justify-center items-center">
          <ul className="grid grid-cols-2 gap-4 rounded-lg">
            {blogItems.map((blog) => (
              <li
                key={blog.id}
                className="mb-4 p-4 border rounded-lg bg-burlywood"
              >
                <h3 className="text-xl text-center text-white  mx-auto ">
                  {blog.name}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}
