import "./globals.css";
import Nav from "@/components/home/Nav";

export const metadata = {
  title: "Quiz App",
  description: "Quiz App Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-montserrat'>
        <Nav />
        {children}
      </body>
    </html>
  );
}
