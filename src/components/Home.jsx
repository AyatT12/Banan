import WhoBenan from './WhoBenan'
import BenanFeatures from './BenanFeatures'
import WhyBenan from './WhyBenan'
import Partners from './Partners'
import { useTranslation, Trans } from 'react-i18next';
import { Link } from 'react-router-dom'
import Swipe from './Swipe'
export default function Home() {
    const { t, i18n } = useTranslation()
    return <>
        <section className="hero-area mb-5" id="hero" >
            <div className="hero-inner d-flex align-items-center">
                <div className="container hero-container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-4 block1">
                            <div className="home-slider">
                                <div className="hero-text">
                                    <h1 className="wow fadeInUp" data-wow-delay=".3">
                                        <Trans i18nKey="benan" >
                                            بنان
                                        </Trans>
                                    </h1>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">
                                        <Trans i18nKey="start">

                                            يكفيك الكثير ...  
                                            <br />
                                            نعمل للارتقاء بقطاع تأجير السيارات وتوفير تقنيات متقدمة
                                        </Trans>
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 "data-wow-delay=".7s">
                           <div className="block2 wow fadeInUp">
                           <Swipe/>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <section className="feature section   wow fadeInUp  " id="benan" data-wow-delay=".9s"   >
            <WhoBenan />
        </section>

        <section className="features section pt-5">
            <BenanFeatures />
        </section>
        <section className="why-benan section mt-5">
            <WhyBenan />
        </section>
        <section className="newsletter-area section ">
            <Partners />
        </section>
        <section className="newsletter-area section pt-5">
            <div className="container">
                <div className="row justify-content-center p-3 p-lg-0">

                    <div className="subscribe-text wow fadeInLeft row position-relative" data-wow-delay=".4s">

                        <div className="col-lg-6 col-12">
                            <h6 className="text-white mb-md-4 mb-2 mt-2 mt-md-5">

                                <Trans i18nKey="benan"> بنان</Trans>
                            </h6>
                            <p>
                                <Trans i18nKey="benan-features-subtitle"> أفضل خيار لإدارة شركات و مكاتب تأجير السيارات </Trans>
                            </p>
                            <div className="button">
                                <Link to={'/trialversion'} href="Request_Trial.html" className="btn btn-white mx-lg-2">
                                    <Trans i18nKey="trial-request">
                                        اطلب نسخة تجريبية
                                    </Trans>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    </>
}
