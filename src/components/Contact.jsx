"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    subject: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Message Textarea */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full h-32 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-700"
              />

              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-700"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-700"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter Subject"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-orange-500 placeholder-gray-400 text-gray-700"
              />

              {/* Send Button */}
              <button
                type="submit"
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-semibold uppercase tracking-wide hover:bg-orange-500 hover:text-white transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Buttonwood, California.</p>
                <p className="text-gray-500 text-sm">Rosemead, CA 91770</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">+1 253 565 2365</p>
                <p className="text-gray-500 text-sm">Mon to Fri 9am to 8pm</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">support@colorlib.com</p>
                <p className="text-gray-500 text-sm">Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
