import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <Header />

      <section className="mt-6 mb-6 min-h-screen">
        <h1 className="text-3xl font-bold mb-4">About the Blog</h1>
        <p className="text-lg mb-4">
          Welcome to our Blog Application, a place where thoughts are shared,
          ideas are nurtured, and voices are heard. Our blog is dedicated to
          sharing stories from diverse topics ranging from tech to lifestyle,
          from latest trends to age-old traditions.
        </p>

        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to empower writers and readers alike. To give a
          platform for those who want to share, and an oasis for those who seek
          to learn or simply enjoy a good read.
        </p>

        <h2 className="text-2xl font-bold mb-4">The Team</h2>
        <p className="text-lg">
          Behind this platform is a team of passionate individuals, writers,
          developers, and creatives, who believe in the power of sharing
          knowledge and experiences.
        </p>
      </section>

      <Footer />
    </div>
  );
}
