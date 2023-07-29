import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import { useTranslation } from "next-i18next";

const Banner = () => {

  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img
          src={"/img/banner/banner_shape01.png"}
          alt=""
          className="img-one"
        />
        <img
          src={"/img/banner/banner_shape02.png"}
          alt=""
          className="img-two"
        />
        <img
          src={"/img/banner/banner_shape03.png"}
          alt=""
          className="img-three"
        />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              {/* <img src={"/img/icon/fire.png"} alt="" /> */}
              <h2 className="title"
                dangerouslySetInnerHTML={{ __html: t("MainHeader") }}
              ></h2>
            </div>
            <div className="banner-progress-wrap">
              <ul>
                <li>{t("services.One")}</li>
                <li>{t("services.Two")}</li>
                <li>{t("services.Three")}</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "100%" }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              {/* <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4> */}
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <h2 className="title">ICO Will Start In..</h2>

              <CountDownOne />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Banner;
