import { Col, Row } from "react-bootstrap";
import AnimationLottie from "@/components/share/animation-lottie";
import codingJSON from 'assets/lottie/coding.json';
import { DEVELOPMENT_LOTTIE } from "assets/lottie/string/development";
import { CONTACT_LOTTIE } from "assets/lottie/string/contact";
import GlowCard from "components/share/glow-card";
import { FaGraduationCap } from "react-icons/fa6";
import Divider from "components/sections/divider";
import { APP_DATA } from "helpers/data";
import SocialMedia from "components/sections/social.media";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./about.scss"
type TLanguage = "vi"|"en"
const About = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const { t, i18n } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage) as TLanguage;
  const [isClick,setIsClick]= useState<boolean>(false)
  const handleClick = () => {
    setIsClick(!isClick)
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

    setIsClick(!isClick)
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm("service_mwsnbdd", "template_6dmpoxm", form.current, {
          publicKey: "JQs1DuzHduzuWmGNd",
        })
        .then(
          () => {
            if (!form.current) {
              console.error("Form reference is null");
              return;
            }
            form.current.reset();
            console.log("SUCCESS!")
            toast.success("send email success!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          },
          (error) => {
            console.log("FAILED...", error.text);
            toast.error("send email failed!", {
              position: "top-center",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
        );
    }
  };
    return (
        <>
            <Row>
                <Col md={6} xs={12}>
                    {currentLanguage == "en" ? <>
                      <h3 className="text-center mb-md-5 mb-2">Some things about <span className="brand-red">me</span> </h3>
                      </> :
                      <>
                      <h3 className="text-center mb-md-5 mb-2">Một số điều về <span className="brand-red">tôi</span> </h3>
                      </>
                      }
                    <div>
                        <div>
                            <p>{ t("about.line1")}</p>

                            <p>{ t("about.line2")}</p>

                            <p>{ t("about.line3")}</p>
                        </div>
                    </div>
                    <div>
                        <p>{ t("about.line4")}
                        </p>
                        <ul>
                            <li>{ t("about.ul1")}</li>
                            <li>{ t("about.ul2")}</li>
                            <li>{ t("about.ul3")}</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-center brand-red">{ t("about.maxim")}</p>
                        <p className="text-center brand-red">--{ t("about.auth")}</p>
                    </div>
                </Col >
                <Col md={6} xs={12} className="d-flex align-items-center justify-content-center">
                    <AnimationLottie
                        width="80%"
                        animationPath={codingJSON} />
                </Col>
            </Row>

            <Row>
                <Col md={6} xs={12}
                    className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
                >
                    <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
                    />
                </Col>
                <Col md={6} xs={12} className="mt-md-5 mt-3">
                    <div className="d-flex flex-column align-items-center gap-3">
                        <div><h4 className="text-center brand-red">{t("education.title")}</h4></div>
                        <div >
                            <GlowCard identifier={`experience-5`}>
                                <div className="p-3 relative">
                                    <div className="experience-container">
                                        <div className="duration-text">
                                            <p>2019-2023</p>
                                        </div>
                                        <div className="details">
                                            <div className="icon">
                                                <FaGraduationCap size={36} />
                                            </div>
                                            <div className="info">
                                                <p className="title">{t("education.major")}</p>
                                                <p className="company">{t("education.university")}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    </div>
                </Col>
            </Row>

            <Divider />
            <Row>
                <Col md={6} xs={12} className= " mt-md-5 ps-md-7 mt-3">
                <div className={`${isClick ? 'd-flex justify-content-center align-items-center mb-md-5 mb-2 ': 'mb-md-5 mb-2'}`}>
                    {currentLanguage == "en" ? <h3 className="me-md-5">FIND ME ON </h3>: <h3 className="me-md-5">Tìm tôi trên</h3>}
                    <div>
                    <SocialMedia
                    // youtube={APP_DATA.YOUTUBE_URL}
                    facebook={APP_DATA.FACEBOOK_URL}
                    tiktok={APP_DATA.TIKTOK_URL}
                    // udemy={APP_DATA.UDEMY_URL}
                    github={APP_DATA.GIT_URL}
                    instagram={APP_DATA.INSTAGRAM_URL}
                />
                    </div>
                    </div>
                </Col >
                
                <Col md={6} xs={12} className="">
                   <div className={`${isClick? 'visually-hidden':"d-flex flex-column  align-items-center justify-content-center "}`}
                        onClick={handleClick}>
                   <AnimationLottie
                        width="50%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    <h4 className="text-center">{t("contact.title")}</h4>
                   </div>
                    
                </Col>
                <Row className={`  ${isClick ? 'd-flex justify-content-end' : 'visually-hidden' }`} >
                <Col md={6} xs={12} className="d-flex justify-content-end mt-md-5">
                <div className="d-flex justify-content-end " onClick={()=>{setIsClick(!isClick)}}>
                  <AnimationLottie
                        width="40%"
                        //animation with rp => convert sang text
                        // https://github.com/airbnb/lottie-web/issues/2070
                        animationPath={JSON.parse(CONTACT_LOTTIE)}
                    />
                    </div>
                </Col>
                <Col md={5} xs={12} className="  ">
                <h4 className="text-center">{t("contact.title")}</h4>
               <div className="wrap-all mt-md-5">
               <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="contact_form"
                    id="contact_form"
                  >
                    
                    <div className="wrap">
                      <input
                        id="name"
                        type="text"
                        name="from_name"
                        placeholder={t("contact.name")}
                      />
                    </div>
                    <div className="wrap">
                      <input
                        id="email"
                        type="text"
                        name="from_email"
                        placeholder={t("contact.email")}
                      />
                    </div>
                    <div className="wrap">
                      <textarea
                        id="message"
                        placeholder={t("contact.message")}
                        name="message"
                      ></textarea>
                    </div>
                    <div className="arlo_tm_button d-flex justify-content-center">
                      <input
                        type="submit"
                        id="send_message"
                        value={t("contact.button")}
                      />
                    </div>
                  </form>
               </div>
                </Col>
                </Row>
            </Row>
            <div className="mb-5"></div>
        </>
    )
}

export default About;