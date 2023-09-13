import "./globals.css";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Quiz App",
  description: "Quiz App Created by Kisakye Moses",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className="bg-secondary">
        <Hero />
        {children}
      </body>
    </html>
  );
}
