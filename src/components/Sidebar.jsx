import { Search } from "lucide-react"

export default function Sidebar() {
  const categories = [
    { name: "Research (203)", count: 203 },
    { name: "Travel (102)", count: 102 },
    { name: "Modern technology (231)", count: 231 },
    { name: "Product (111)", count: 111 },
    { name: "Inspiration (119)", count: 119 },
    { name: "Health Care (119)", count: 119 },
  ]

  const recentPosts = [
    { id: 1, title: "From the sea you...", date: "January 12, 2019", image: "/blog_post1.webp" },
    { id: 2, title: "The Amazing Habitats", date: "January 10, 2019", image: "/blog_post2.webp" },
    { id: 3, title: "Astronomy Or...", date: "October 2, 2018", image: "/blog_post3.webp" },
    { id: 4, title: "Telescope", date: "October 1, 2018", image: "/blog_post4.webp" },
  ]

  const tags = ["project", "love", "technology", "travel", "design", "inspiration"]

  return (
    <div className="space-y-8">
      {/* Search */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Search</h3>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="SEARCH..."
            className="flex-1 border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-orange-500"
          />
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Category</h3>
        <div className="space-y-3">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center text-gray-600 hover:text-orange-500 cursor-pointer"
            >
              <span className="text-sm">{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Post</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3 pb-4 border-b last:border-b-0">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-800 hover:text-orange-500 cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tag Clouds */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Tag Clouds</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-orange-500 hover:text-white cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Instagram Feed */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Instagram Feeds</h3>
      <div className="grid grid-cols-3 gap-2">
  {['insta1', 'insta2', 'insta3', 'insta4', 'insta5', 'insta6'].map((item) => (
    <img
      key={item}
      src={`/${item}.webp`}
      alt={`Instagram ${item}`}
      className="w-full h-20 object-cover rounded hover:opacity-80 cursor-pointer"
    />
  ))}
</div>

      </div>

      {/* Newsletter */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Newsletter</h3>
        <input
          type="email"
          placeholder="Your email..."
          className="w-full border border-gray-300 px-4 py-2 rounded mb-3 focus:outline-none focus:border-orange-500"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 font-semibold">
          SUBSCRIBE
        </button>
      </div>
    </div>
  )
}
