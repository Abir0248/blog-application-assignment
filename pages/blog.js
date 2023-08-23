import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Blog() {
  const [blogItems, setBlogItems] = useState([]);

  const fetchData = async (pageNumber = 1) => {
    try {
      const response = await axios.get(
        `https://basic-blog.teamrabbil.com/api/post-list/${pageNumber}`
      );
      if (response.data && response.data.length > 0) {
        setBlogItems((prevBlogItems) => [...prevBlogItems, ...response.data]);
        fetchData(pageNumber + 1); // Fetch the next page
      }
    } catch (error) {
      console.error(`Error fetching data from page ${pageNumber}:`, error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <Header />
      <section className="p-6 w-full mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-center">All Blog Posts</h2>
        <div className="flex flex-col justify-center items-center">
          <ul className="grid grid-cols-2 gap-4 rounded-lg">
            {blogItems.map((blog) => (
              <li
                key={blog.id}
                className="bg-peru text-white text-center mb-4 p-4 border rounded-lg"
              >
                <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                <p className="text-sm mb-4">{blog.short}</p>
                <Link href={`/blog/${blog.id}`}>
                  <span className="cursor-pointer text-sm bg-sienna hover:bg-burlywood text-white px-4 py-2 rounded">
                    See Full Post
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
}
