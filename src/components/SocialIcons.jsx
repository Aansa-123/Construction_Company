import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGoogle } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function SocialIcons() {
  const icons = [
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "Facebook", icon: <FaFacebookF /> },
    { name: "LinkedIn", icon: <FaLinkedinIn /> },
    { name: "Google", icon: <FaGoogle /> },
  ]

  return (
    <div className="flex gap-4">
      {icons.map((social) => (
        <Link
          key={social.name}
          to="#"
          title={social.name}
          className="inline-block transform-gpu transition-all duration-500 hover:rotate-y-180"
        >
          <span className="text-white text-lg hover:text-orange-500 transition-colors duration-300">
            {social.icon}
          </span>
        </Link>
      ))}
    </div>
  )
}
