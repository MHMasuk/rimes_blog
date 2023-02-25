// import React, {use} from 'react';
// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'
import BlogList from "@/components/Blog/BlogList";

import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

// const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main className="p-4">
          <BlogList />
        </main>
        <Footer />
      </div>
    </>
  );
}
