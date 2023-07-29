import React from "react";
import { useTranslation } from "next-i18next";

const TopPartners = () => {
  const partners_list = [
    { src: "/img/partner/eventozz.svg", link: "https://eventozz.com/" },
    { src: "/img/partner/zap.png", link: "https://zapmais.app/" },
    { src: "/img/partner/1.svg", link: "https://multti.com/" },
    { src: "/img/partner/2.svg", link: "https://www.sorteesportiva.bet/" },
    { src: "/img/partner/3.png", link: "https://aprincipalbb.com.br" },
    { src: "/img/partner/4.png", link: "https://investsolar.com.br/" },
    { src: "/img/partner/5.svg", link: "https://dippi.com.br/" },
    { src: "/img/partner/6_2.png", title: "https://www.maspara.com.br/" },
    { src: "/img/partner/7.png", title: "https://intergraos.com/" },
    { src: "/img/partner/9.png", title: "https://providencesaude.com/" }
  ];

  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  return (
    <div className="partner-area pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-10">
              <span className="sub-title">  {t("Partners")}</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="partner-wrap">
              <ul>
                {partners_list.map((item, index) => (
                  <li key={index}
                    onClick={
                      () => {
                        window.open(item.link, '_blank'); // Redirecionar para outra aba
                      }
                    }
                  >
                    <img src={item.src} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPartners;
