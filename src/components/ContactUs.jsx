import React, { useEffect } from 'react'
import QRcode from '../../src/Assets/images/QR.png'
import { Trans, useTranslation } from 'react-i18next'
import WOW from 'wowjs';

export default function ContactUs() {
  const { t , i18n} = useTranslation()

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
  return <>
    <section id="contact" className="contact section ">
        <div className="container inner-container">
            <div className="row  align-items-center pt-5 justify-content-center mt-5  w-100">
                <div className="col-md-7  p-4 py-5 contact-form-div text-center wow  fadeInUp " data-wow-delay=".2s">
                   <h1 className="fs-2">    <Trans i18nKey="contact-channels"> قنوات التواصل   </Trans>  </h1>
                   <p className="pt-2 contact-channels-subtitle "> <Trans i18nKey="contact-channels-subtitle">   يسعدنا استقبال أسئلتكم واستفساراتكم عبر القنوات التالي  </Trans>     </p>
                 <div className="row align-items-center justify-content-center g-5 pt-5">
                  <div className="col-lg-auto  ">
                    <div className="row align-items-center ">
                        <div className="col-auto">
                            <div className="contact_icon_div" ><i className="fa-solid fa-headset contact_icon"></i> </div>
                        </div>
                        <div className="col-auto ContactAnchors">
                            <h5 className="contact_anchor " ><a href="mailto:sales@ghyom.net" target="_blank">sales@ghyom.net</a></h5>
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                           <div className="contact_icon_div" ><i className="fa-solid fa-envelope contact_icon"></i> </div>
                        </div>
                        <div className="col-auto ContactAnchors">
                            <h5 className="contact_anchor"><a href="mailto:Support@ghyom.net" target="_blank">Support@ghyom.net</a></h5 >
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                           <div className="contact_icon_div" ><i className="fa-brands fa-youtube contact_icon"></i> </div>
                        </div>
                        <div className="col-auto ContactAnchors">
                           <h5 className="contact_anchor"><a href="https://www.youtube.com/@Ghyom0" target="_blank">youtube.com/@Ghyom0</a></h5> 
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                            <div className="contact_icon_div" ><i className="fa-solid fa-phone  contact_icon"></i></div>
                        </div>
                        <div className="col-auto ContactAnchors">
                           <h5 className="contact_anchor"><a href="https://wa.me/966530648535" target="_blank" htmlFor= "">966530648535+</a> </h5> 
                        </div>
                      </div>
                      
                  </div>
                  <div className="col-6 col-lg-5 ">
                    <img src={QRcode} className="w-100" alt="QRcode for whatsapp chat"/>
                  </div>
                 </div>
                </div>
          
            </div>
        </div>
    </section>
  </>
}
