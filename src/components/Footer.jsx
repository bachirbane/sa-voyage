// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#002c22] via-[#014d3f] to-[#002c22] text-white mt-10 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide">
            Sa-Voyage
          </h2>
          <p className="leading-7 text-gray-200">
            Address: Town, City, Country
            <br />
            Phone:{" "}
            <a href="tel:xxxxxx" className="hover:underline">
              +xxxxxxxxxx
            </a>{" "}
            <br />
            Email:{" "}
            <a href="mailto:contact@sa-voyage.com" className="hover:underline">
              contact@sa-voyage.com
            </a>
          </p>
        </div>

        {/* Google Map */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Our Location</h2>
          <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.8232501251886!2d-17.454706285698474!3d14.737014776515079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729f1a7c4799%3A0xb03c5cbfdb26a3f1!2sScat%20Urbam%2C%20Dakar%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sen!2ssn!4v1717580000000!5m2!1sen!2ssn"
              title="Google Map location of Scat Urbam Dakar"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              frameBorder="0"
              className="w-full h-60"
            ></iframe>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Follow Us</h2>
          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/+15512835150"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-green-400 transition duration-300"
            >
              <FaWhatsapp size={28} /> WhatsApp
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={28} /> Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={28} /> Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-10 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Sa-Voyage. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
