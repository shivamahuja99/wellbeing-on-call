import { Mail, MapPin, Instagram } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => (
  <>
    <Header />
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-secondary/20 min-h-screen flex items-center justify-center">
      <div className="container px-4 max-w-2xl mx-auto">
        <div className="rounded-xl shadow-md bg-white border border-gray-100 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Instagram className="text-pink-500 h-6 w-6" />
              <a
                href="https://www.instagram.com/illandpill/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                instagram.com/illandpill
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-green-600 h-6 w-6" />
              <a
                href="mailto:connect@illandpill.com"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                connect@illandpill.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-red-500 h-6 w-6" />
              <a
                href="https://www.google.com/maps/place/M3m+65th+Avenue/@28.405648,77.0632704,17z/data=!3m1!4b1!4m6!3m5!1s0x390d226651e7ca9b:0x67b528c6b42beac0!8m2!3d28.405648!4d77.0658453!16s%2Fg%2F11f3cthc0p?coh=219816&entry=tts&g_ep=EgoyMDI0MDgwNy4wKgBIAVAD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                M3m 65th Avenue (Google Maps)
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-gray-500 h-6 w-6" />
              <span className="text-lg font-medium text-foreground">
                Address: M3m 65th Avenue
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default Contact;
