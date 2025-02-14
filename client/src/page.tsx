import { ReactElement } from "react";
import Hero from "./components/Sections/Hero";
import BestSeller from "./components/Sections/BestSeller";
import Nomarl from "./components/Sections/Nomarl";
import Discount from "./components/Sections/Discount";

const Page = () : ReactElement => {
    return (
      <>
        <Hero />
        <BestSeller />
        <Discount/>
        <Nomarl />
      </>
    );
}

export default Page;