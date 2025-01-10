import "styles/tailwind.css"
import Header from "../components/Header/Header"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* The Header is now globally visible */}
        {children} {/* Render the content of each page here */}
      </body>
    </html>
  )
}
