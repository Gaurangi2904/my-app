import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FavoriteProvider } from "@/app/context/FavoriteContext";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "🛍️ Sharwari Collection",
  description:
    "Modern online fashion store for kids, men & girls – worldwide delivery available",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50`}
      >
        {/* GLOBAL PROVIDERS */}
        <FavoriteProvider>
          {/* GLOBAL NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="mt-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

              <div>
                <h3 className="text-xl font-bold mb-2">🛍️ Sharwari Collection</h3>
                <p className="text-sm opacity-90">
                  Stylish western & traditional clothes for all.
                  Worldwide delivery available 🌍
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Quick Links</h4>
                <ul className="space-y-1 text-sm">
                  <li>🏠 Home</li>
                  <li>👗 Shop</li>
                  <li>❤️ Favorites</li>
                  <li>📞 Contact</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-sm">📍 India</p>
                <p className="text-sm">📞 +91 XXXXX XXXXX</p>
                <p className="text-sm">✉️ sharwari@shop.com</p>
              </div>

            </div>

            <div className="text-center text-sm py-4 bg-black/10">
              © {new Date().getFullYear()} Sharwari Collection. All rights reserved.
            </div>
          </footer>
        </FavoriteProvider>
      </body>
    </html>
  );
}
