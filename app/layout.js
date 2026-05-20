
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


// app/layout.js

export const metadata = {
  title: "ArtRellic - Web Development Agency",
  description:
    "ArtRellic builds modern websites, dashboards, ecommerce apps and UI designs using Next.js and React.",

  keywords: [
    "Next.js Developer",
    "React Developer",
    "Web Design",
    "Dashboard UI",
    "Ecommerce Website",
  ],

  authors: [{ name: "Parshuram Sahani" }],

  openGraph: {
    title: "ArtRellic",
    description: "Modern Web Development Agency",
    url: "https://yourwebsite.com",
    siteName: "ArtRellic",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
