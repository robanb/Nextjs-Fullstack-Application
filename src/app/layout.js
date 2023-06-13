import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter, Roboto, Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

export const metadata = {
  title: "Next.js Fullstack Application",
  description: "Next.js Fullstack Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
