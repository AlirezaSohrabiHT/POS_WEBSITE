import "styles/tailwind.css"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
export const metadata = {
  title: "سیستم نقطه فروش اکسیر",
  description: "اکسیر POS",
  icons: {
    icon: "assets/favicon.ico", // Default favicon
    shortcut: "assets/favicon.ico", // For older browsers
    // apple: "/apple-touch-icon.png", // Apple touch icon
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <body>
        <Header /> {/* The Header is now globally visible */}
        {children} {/* Render the content of each page here */}
        <Footer/>
      </body>
    </html>
  )
}
