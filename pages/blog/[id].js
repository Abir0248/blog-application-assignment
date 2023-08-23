import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/header";
import Footer from "../../components/footer";

function SingleBlog({ blog }) {
  if (!blog) return <div>Loading...</div>;

  console.log(blog); // Log the blog data for debugging

  return (
    <div className="container mx-auto p-6">
      <Header />
      <section className="mt-6 mb-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img
          src={blog.img}
          alt={blog.content}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <p className="text-lg mb-4">{blog.description}</p>
      </section>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  let blog = null;

  const apiUrl = `https://basic-blog.teamrabbil.com/api/post-details/${id}`;
  console.log(apiUrl); // Log the API URL for debugging

  try {
    const response = await axios.get(apiUrl);
    blog = response.data;
  } catch (error) {
    console.error("Error fetching single blog post:", error);
  }

  return {
    props: {
      blog,
    },
  };
}

export default SingleBlog;
