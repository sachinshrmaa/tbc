import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "The Basics Class",
  description:
    "TBC is an initiative by Sachin Sharma to personally teach students in the field of Software Engineering.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
