import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Columns from "@/components/Columns.jsx";
import Video from "@/components/Video.jsx";
import Header from "@/components/Header.jsx";
import WelcomeCard from "@/components/WelcomeCard.jsx";
import DiningSightsCard from "@/components/DiningSightsCard";
import HistoryCard from "@/components/HistoryCard";
import RoomsAndGrounds from "@/components/RoomsAndGrounds";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hilltop Manor</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Video />
      <div
        name="main-container"
        style={{
          display: "flex",
          position: "relative",
          marginTop: ".50rem",
          margin: "0 auto",
          flexWrap: "wrap",
          flex: 1,
          width: "66vw",
          minHeight: "100vh",
          backgroundColor: "translucent",
        }}
      >
        <div
          name="header-container-placeholder-in-main"
          style={{
            display: "flex",
            margin: "0 auto",
            flex: 1,
            alignItems: "center",
            backgroundColor: "translucent",
            width: "99.1vw",
            height: "9.5vh",
          }}
        ></div>
        {/* <Header /> */}
        <div
          name="video-place-holder"
          style={{
            width: "99.1vw",
            height: "90vh",
            display: "flex",
            backgroundColor: "translucent",
          }}
        ></div>
        <WelcomeCard />
        <DiningSightsCard />
        <HistoryCard />
        <RoomsAndGrounds />
      </div>
      <Footer />
    </>
  );
}
