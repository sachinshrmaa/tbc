import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "The Basics Class",
  description: "The Basics Class",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
