
import BlogCard from "../components/BlogCard"
import Sidebar from "../components/Sidebar"
import { Outlet, useLocation } from "react-router-dom";
import Loader from "../components/Loader";
import { useEffect, useState } from "react";
export default function BlogPage() {

   const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds

    return () => clearTimeout(timeout);
  }, [location.pathname]); 
  const blogPosts = [
    {
      id: 1,
      date: "15",
      image: "/blog1.webp",
      title: "Google inks pact for new 35-storey office",
      description:
        "That dominion stars lights dominion divide years for fourth don stars is that he earth it without heaven in place seed it second morning saying.",
      author: "Travel Lifestyle",
      comments: 2,
    },
    {
      id: 2,
      date: "15",
      image: "/blog2.webp",
      title: "Google inks pact for new 35-storey office",
      description:
        "That dominion stars lights dominion divide years for fourth don stars is that he earth it without heaven in place seed it second morning saying.",
      author: "Travel Lifestyle",
      comments: 2,
    },
    {
      id: 3,
      date: "15",
      image: "/blog3.webp",
      title: "Google inks pact for new 35-storey office",
      description:
        "That dominion stars lights dominion divide years for fourth don stars is that he earth it without heaven in place seed it second morning saying.",
      author: "Travel Lifestyle",
      comments: 2,
    },
    {
      id: 4,
      date: "15",
      image: "/blog4.webp",
      title: "Google inks pact for new 35-storey office",
      description:
        "That dominion stars lights dominion divide years for fourth don stars is that he earth it without heaven in place seed it second morning saying.",
      author: "Travel Lifestyle",
      comments: 2,
    },
    {
      id: 5,
      date: "15",
      image: "/blog5.webp",
      title: "Google inks pact for new 35-storey office",
      description:
        "That dominion stars lights dominion divide years for fourth don stars is that he earth it without heaven in place seed it second morning saying.",
      author: "Travel Lifestyle",
      comments: 2,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
     {loading && <Loader />}
      <div className={`${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
        <Outlet /> {/* your routed page content */}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                date={post.date}
                image={post.image}
                title={post.title}
                description={post.description}
                author={post.author}
                comments={post.comments}
              />
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
