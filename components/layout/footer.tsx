import Link from "next/link"
import { Mail, Phone, Linkedin, Instagram, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Shrajin Maharjan
            </h3>
            <p className="text-gray-400 text-sm">
              ITSD Analyst | AI Enthusiast passionate about transforming businesses through technology and automation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                Home
              </Link>
              <Link href="/shop" className="text-gray-400 hover:text-white transition-colors text-sm">
                Shop & Services
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
              <Link href="/auth" className="text-gray-400 hover:text-white transition-colors text-sm">
                Login
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400" />
                <a
                  href="mailto:shrajinmaharjan@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  shrajinmaharjan@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href="tel:+9779869370599" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +977 9869370599
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <a
              href="https://linkedin.com/in/shrajin-maharjan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com/techwith_shrajin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Shrajin Maharjan. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>in Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
