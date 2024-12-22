import React, { useEffect, useState } from 'react'
import ghoumLogo from '../../src/Assets/images/C 1.svg'
import { useTranslation, Trans } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
    const [PathName, setPathName] = useState('/');
    const location = useLocation();
    const { t , i18n} = useTranslation()

    useEffect(() => {
        setPathName(location.pathname);
    }, [location.pathname]);

    return <>
        <footer className="footer">
            <div className="container footer-container">
                <div className=" row pt-5">
                    <div className="col-md-4">
                        <div className="row justify-content-center align-items-center">
                            <p className="text-center"> <Trans i18nKey="opration-company">   تطوير وتشغيل شركة غيوم الودق لتقنية المعلومات  </Trans></p>
                            <img src={ghoumLogo} className="footer-logo" />

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-center align-items-center  footerAnchors">
                            <Link
                                onClick={() => setPathName('/home')}
                                className="footer_anchors"
                                to="/home"
                                aria-current="page"
                            >
                                <Trans i18nKey="home">

                                    الرئيسية

                                </Trans>

                            </Link>


                            <a href="/home#benan" onClick={() => setPathName('/home#benan')}
                                className="footer_anchors">
                                <Trans i18nKey="who-us">

                                    من نحن
                                </Trans>

                            </a>
                            <Link
                  onClick={() => setPathName('/commonquestions')}
                  className="footer_anchors"
                  to="/commonquestions"
                >
                  <Trans i18nKey="commonQ">
                    الاسئلة الشائعة
                  </Trans>

                </Link>
                <Link
                  onClick={() => setPathName('/contractcheck')}
                  className="footer_anchors"
                  to="/contractcheck"
                >
                  <Trans i18nKey="Verify">
                    التحقق من العقد
                  </Trans>
                </Link>
                <Link
                  onClick={() => setPathName('/cars')}
                  className="footer_anchors"
                  to="/cars"
                >
                  <Trans i18nKey="cars">
                    سيارات للبيع
                  </Trans>

                </Link>
                <Link
                  onClick={() => setPathName('/contactus')}
                  className="footer_anchors"
                  to="/contactus"
                >
                  <Trans i18nKey="contactUs">تواصل معنا</Trans>
                </Link>
                         
                         </div>
                        <div className="footer-middle ">
                            <div className="row justify-content-center align-items-center gap-3">
                                <div className="footer_icon_div"> <a href="mailto:sales@ghyom.net" target="_blank"><i
                                    className="fa-solid fa-headset footer_icon"></i></a> </div>
                                <div className="footer_icon_div"> <a href="mailto:Support@ghyom.net" target="_blank"><i
                                    className="fa-solid fa-envelope footer_icon"></i></a></div>
                                <div className="footer_icon_div"><a href="https://www.youtube.com/@Ghyom0" target="_blank"><i
                                    className="fa-brands fa-youtube footer_icon"></i></a></div>
                            </div>
                            <div className="row justify-content-center align-items-center flex-row-reverse  p-0">
                                <i className="fa-solid fa-phone  footer_icon "></i>
                                <div className='fit-content'>
                                    <p>966530648535+</p>
                                </div>
                            </div>
                            <div className="row justify-content-center align-items-center ">
                                <p className='fit-content'><Trans  i18nKey= "copy-rights">جميع الحقوق محفوظة © غيوم 2022  </Trans></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    </>
}
