

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function Selectboxes() {
  const [selected, setSelected] = useState("english")

  return (
    <div>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Selectboxes</h3>
      <div className="relative">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </select>
        <ChevronDown className="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
      </div>
    </div>
  )
}
