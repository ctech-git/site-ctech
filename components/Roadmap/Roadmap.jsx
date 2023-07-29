import { useHorizontalScroll } from "@/lib/hooks/useHorizontalScroll";
import React from "react";
import RoadmapItem from "./RoadmapItem";
import { useTranslation } from "next-i18next";

const Roadmap = () => {

  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração
  const roadmap_items = t('Roadmap3', { returnObjects: true });

  const scrollRef = useHorizontalScroll();

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-8">
            <div className="section-title text-center mb-60">
              <span className="sub-title">  {t("Roadmap1")}</span>
              <h2 className="title">
                {t("Roadmap2")}
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar"
              ref={scrollRef}
              style={{ overflow: "auto" }}
            >
              <div className="bt-roadmap-wrap">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
