import "./globals.css";
import { Inter, Poppins } from 'next/font/google';
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Providers } from './providers';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: "Rinku Kumar | MERN Stack Developer",
  description: "Professional Portfolio of Rinku Kumar - Expert MERN Stack Developer",
  keywords: "MERN Stack, React, Node.js, MongoDB, Full Stack Developer, Portfolio",
  openGraph: {
    title: "Rinku Kumar | MERN Stack Developer",
    description: "Professional Portfolio of Rinku Kumar",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="font-sans bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 overflow-x-hidden">
        <Providers>
          {/* Responsive Animated Background */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            {/* Desktop-only large orbs */}
            <div className="hidden md:block absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            
            {/* Mobile-friendly smaller orbs */}
            <div className="md:hidden absolute -top-20 -right-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
            <div className="md:hidden absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            
            {/* Grid Pattern - Responsive sizing */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          </div>

          {/* Responsive Particles */}
          <div className="fixed inset-0 -z-10 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float hidden sm:block"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
            {/* Mobile particles */}
            {[...Array(6)].map((_, i) => (
              <div 
                key={`mobile-${i}`}
                className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-float sm:hidden"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          <Navbar />
          
          <main className="relative pt-16 md:pt-24 min-h-screen">
            {/* Gradient Orbs - Responsive sizing */}
            <div className="absolute top-0 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-r from-blue-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin-slow-reverse"></div>
            
            {/* Main Content Container */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              {children}
            </div>
          </main>
          
          <Footer />
        </Providers>
      </body>
    </html>
  )
}