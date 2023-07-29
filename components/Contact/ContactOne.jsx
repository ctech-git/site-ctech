import React from "react";
import ContactOneForm from "./ContactOneForm";
import ContactOneInfoItem from "./ContactOneInfoItem";
import { useTranslation } from "next-i18next";

const ContactOne = () => {
  const { t, i18n } = useTranslation(); // 'common' é o namespace definido na configuração

  const info_items = [
    {
      icon: "fa-envelope",
      content: (
        <>
          contato@portalctech.com <br /> portalctech@gmail.com
        </>
      ),
    },
    {
      icon: "fa-phone",
      content: (
        <>
          +55 94 99100 6004
          <br /> +351 930 600 399
        </>
      ),
    },
    {
      icon: "fa-map-marker-alt",
      content: (
        <>Av. Pedro Marinho, 1962 Sala 01.<br /> Marabá - PA, Brasil</>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-area pt-70 pb-110">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="sub-title">  {t("Contact")}</span>
              <h2 className="title" dangerouslySetInnerHTML={{ __html: t("Contact_sub") }}></h2>
            </div>
          </div>
        </div>
        <div className="contact-info-wrap">
          <div className="row justify-content-center">
            {info_items.map((x, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <ContactOneInfoItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactOne;
