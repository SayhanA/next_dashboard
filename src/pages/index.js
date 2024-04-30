import { Inter } from "next/font/google";
import Head from "next/head";
import Dashboard from "./dashboard";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main
        className={`min-h-screen flex flex-col justify-between items-center ${inter.className}`}
      >
        <Header />
        <SideMenu />
        <Dashboard />
      </main>
    </>
  );
}
