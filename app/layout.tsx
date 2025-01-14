import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Alegría Gatuna App",
  description: "Aplicación web para el Hogar de paso Alegría Gatuna",
  icons: {
    icon: [
      { url: '/new_favicon.ico' },
    ]
  },
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main >
            <Header />
            <NavBar />
            <div>
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
