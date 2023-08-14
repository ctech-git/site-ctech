import { React, useState } from "react";
import Link from "next/link";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useTranslation } from "next-i18next";



const WhitePaper = () => {
  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  const [telefone, setTelefone] = useState('');

  const handleChange = (event) => {
    setTelefone(event.target.value);
  };


  const enviarWhatsapp = () => {

    // const numberFormatted = telefone.replace(/\D/g, '');

    let body = {
      "to": telefone,
      "language": "pt"
    };

    console.log(body);

    let url = `https://api.zapmais.app/send-site-text/`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => {
      console.log(response);
    }
    );


  };


  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 order-2 order-lg-0">
            <div
              className="document-img text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <img src={"/img/images/print_iphone.png"} alt="" />
            </div>
          </div>

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title"> {t("Whitepaper1")}</span>
                <h2 className="title" dangerouslySetInnerHTML={{ __html: t("Whitepaper2") }}></h2>
              </div>
              <div className="footer-newsletter">
                <form action="#a">

                  <PhoneInput
                    placeholder={t("Whitepaper3")}
                    defaultCountry="BR"
                    value={telefone}
                    onChange={setTelefone} />

                </form>
              </div>

              <Link href="#a" onClick={enviarWhatsapp} className="btn" style={{ marginTop: 10 }}>
                {t("Whitepaper4")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
