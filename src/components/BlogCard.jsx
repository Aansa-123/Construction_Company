import { User, MessageCircle } from "lucide-react"

export default function BlogCard({ image, date, title, description, author, comments }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 left-4 bg-orange-500 text-white w-12 h-12 flex items-center justify-center font-bold rounded">
          {date}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-orange-500 cursor-pointer">{title}</h3>

        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <div className="flex gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle size={16} />
            <span>{comments} Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
