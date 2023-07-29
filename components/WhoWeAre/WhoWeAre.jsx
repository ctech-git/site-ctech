import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const WhoWeAre = () => {

  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  return (
    <section id="about" className="about-area pt-130 pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={"/img/images/about_img01.png"} alt="" />
              <img
                src={"/img/images/about_img02.png"}
                alt=""
                className="img-two"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <span className="sub-title">{t("About1")}</span>
                <h2 className="title" dangerouslySetInnerHTML={{ __html: t("About2") }}></h2>
              </div>
              <p>
                {t("About3")}
              </p>
              <Link href="#contact" className="btn">
                {t("ButtonAbout")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
