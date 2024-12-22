import React from 'react'
import QRcode from '../../src/Assets/images/Untitled.png'
export default function ContactUs() {
  return <>
    <section id="contact" className="contact section mt-5">
        <div className="container">
            <div className="row  align-items-center pt-5 justify-content-center">
                <div className="col-md-7  p-4 p-lg-5 contact-form-div text-center wow zoomIn" data-wow-delay=".2s">
                   <h1 className="fs-2">قنوات التواصل </h1>
                   <p className="pt-2" >يسعدنا استقبال أسئلتكم واستفساراتكم عبر القنوات التالي </p>
                 <div className="row align-items-center ">
                  <div className="col-lg-6  pt-5">
                    <div className="row align-items-center ">
                        <div className="col-auto">
                            <div className="contact_icon_div" ><i className="fa-solid fa-headset contact_icon"></i> </div>
                        </div>
                        <div className="col-lg-9 ContactAnchors">
                            <h5 className="contact_anchor " ><a href="mailto:sales@ghyom.net" target="_blank">sales@ghyom.net</a></h5>
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                           <div className="contact_icon_div" ><i className="fa-solid fa-envelope contact_icon"></i> </div>
                        </div>
                        <div className="col-lg-9 ContactAnchors">
                            <h5 className="contact_anchor"><a href="mailto:Support@ghyom.net" target="_blank">Support@ghyom.net</a></h5 >
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                           <div className="contact_icon_div" ><i className="fa-brands fa-youtube contact_icon"></i> </div>
                        </div>
                        <div className="col-lg-9 ContactAnchors">
                           <h5 className="contact_anchor"><a href="https://www.youtube.com/@Ghyom0" target="_blank">youtube.com/@Ghyom0</a></h5> 
                        </div>
                      </div>
                      <div className="row pt-4 align-items-center">
                        <div className="col-auto">
                            <div className="contact_icon_div" ><i className="fa-solid fa-phone  contact_icon"></i></div>
                        </div>
                        <div className="col-lg-9 ContactAnchors">
                           <h5 className="contact_anchor"><a href="https://wa.me/966530648535" target="_blank" htmlFor= "">966530648535+</a> </h5> 
                        </div>
                      </div>
                      
                  </div>
                  <div className="col-lg-5 pt-5">
                    <img src={QRcode} className="w-100" alt="QRcode for whatsapp chat"/>
                  </div>
                 </div>
                </div>
          
            </div>
        </div>
    </section>
  </>
}
