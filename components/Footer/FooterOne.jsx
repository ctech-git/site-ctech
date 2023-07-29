import { scrollToTop } from "@/lib/helpers";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const FooterOne = () => {

  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          {/* <div className="footer-top">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link href="/" className="f-logo">
                    <img src={"/img/logo/logo.png"} alt="BigTech Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>{t("FooterText")}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-sm-6">
                 <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Useful Links</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="/">Contact us</Link>
                      </li>
                      <li>
                        <Link href="/">How it Works</Link>
                      </li>
                      <li>
                        <Link href="/">Create</Link>
                      </li>
                      <li>
                        <Link href="/">Explore</Link>
                      </li>
                      <li>
                        <Link href="/">Terms & Services</Link>
                      </li>
                    </ul>
                  </div>
                </div> 
              </div>
            </div>
          </div> */}
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>{t("Copyright")}</p>
                </div>
              </div>
              <div className="col-lg-6 d-none d-sm-block">
                <div className="footer-menu">
                  {/* <ul>
                    <li>
                      <Link href="#">Terms and conditions</Link>
                    </li>
                    <li>
                      <Link href="#">Privacy policy</Link>
                    </li>
                    <li>
                      <Link href="#">Login / Signup</Link>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
