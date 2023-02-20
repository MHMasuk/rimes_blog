import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Header = () => {
    return (
            <header className="bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold">My App</h1>
            </header>
            );
};

const Footer = () => {
    return (
            <footer className="bg-gray-800 text-white p-4">
                <p>&copy; 2023 My App</p>
            </footer>
            );
};

export default function Home() {
  return (
    <>
         <div>
                <Header />
                <main className="p-4">
                    {/* Your app content goes here */}
                </main>
                <Footer />
         </div>
    </>
  )
}
