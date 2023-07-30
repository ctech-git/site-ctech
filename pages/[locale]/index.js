import Head from "next/head";
import Banner from "@/components/Banner/Banner";
import ContactOne from "@/components/Contact/ContactOne";
import Roadmap from "@/components/Roadmap/Roadmap";
import TopPartners from "@/components/TopPartners/TopPartners";
import WhitePaper from "@/components/WhitePaper/WhitePaper";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import LayoutOne from "@/layouts/LayoutOne";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getStaticPaths } from "@/lib/getStatic";

export default function Home() {
  return (
    <>
      <Head>
        <title>CTECH</title>
        <meta name="description" content="" />
      </Head>

      <LayoutOne>
        <main className="fix">
          <Banner />
          <WhoWeAre />

          <TopPartners />
          <WhyChooseUs />
          {/* <Sales /> */}

          <div className="area-bg">
            <Roadmap />
            <WhitePaper />
          </div>

          {/* <TeamOne /> */}
          <ContactOne />
        </main>
      </LayoutOne>
    </>
  );
}

export { getStaticPaths };

export async function getStaticProps({ params }) {
  console.log(params);
  return {
    props: {
      ...(await serverSideTranslations(params.locale || "pt", ["common"])),
    },
    revalidate: 600,
  };
}
