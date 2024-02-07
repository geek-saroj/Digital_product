import Image from "next/image";
import Carts from "./components/Cartslide";
import Hero from "./components/Hero";
import Mid from "./components/mid";
import Hero2 from "./components/Hero2";
import {PageWrapper } from "./page-wrapper"

export default function Home() {
  return (
    <>
    <PageWrapper>
    <Hero/>
    <Hero2/>
    {/* <Mid/> */}
    <Carts/>
    </PageWrapper>
 

    </>
  );
}
