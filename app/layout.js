
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


export const metadata = {
  title: "ART-RELLIC Technology",
  description: "ART-RELLIC Technology is a cutting-edge platform that combines art and technology to create immersive and interactive experiences. Our mission is to revolutionize the way people engage with art by leveraging the power of technology. We offer a wide range of services, including virtual reality art exhibitions, augmented reality installations, and digital art creation tools. With ART-RELLIC Technology, artists can push the boundaries of creativity and audiences can explore art in new and exciting ways.",
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
