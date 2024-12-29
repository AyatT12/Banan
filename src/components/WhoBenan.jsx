import React, { useEffect } from 'react'
import BenanLogo from '../../src/Assets/images/benan_logo.svg'
import { useTranslation , Trans } from 'react-i18next';
import WOW from 'wowjs';

export default function WhoBenan() {
 const { t , i18n} = useTranslation()

 useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);
 
  
    return <>
    <section className="feature section   wow fadeInUp"     > 
    <div className="container inner-container">
    <div className="benan_container wow fadeInRigh w-100" data-wow-delay=".5s">
            <div className="row">
                <div className="col-12">
                    <div className="section-title-sm text-center mb-5">
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">
                        <Trans  i18nKey="benan"> بنان </Trans>
                        </h2>
                        <h5 className="wow fadeInUp p-3" data-wow-delay=".3s"> <Trans i18nKey="subtitle">الخيار الأمثل لإدارة شركات ومكاتب تأجير السيارات</Trans>
                        </h5>
                    </div>
                </div>
            </div>

            <div className="single-head  h-75 pt-4 ">
                <div className="row h-100 align-items-center">
                    <div id="carouselExampleIndicators" className="carousel  carousel-dark   slide"
                        data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
                                aria-label="Slide 4"></button>

                        </div>
                        <div className="carousel-inner h-100">
                            <div className="carousel-item active benan-carousel-item">
                                <div className="row  align-items-center ">
                                    <div className="col-lg-8  ">

                                        <h3><Trans i18nKey="about">لمحة عن بنان </Trans> </h3>
                                        <p className="pt-2"> <Trans i18nKey="about-description">يوفر نظام بنان احتياجات شركات و مكاتب تأجير السيارات مع
                                            خاصية الربط الآلي مع الجهات ذات العلاقة و تحويل المنشأة إلى نظام آلي
                                            متكامل، و نعتني بوجود كافة البيانات، ورفع حالة جميع الوثائق من تصاريح
                                            ورخص، مع بيان حالة استيفائها، ومواعيد تجديدها أو انتهائها ، الإحاطة
                                            الشاملة مع توفير كافة البيانات المتعلقة بوثائق السيارات وحالة تأمينها
                                            وسريان فحصها.</Trans></p>

                                    </div>
                                    <div className="col-lg-4">
                                        <img src={BenanLogo} alt="logo_image" className="w-100" />

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item  benan-carousel-item">
                                <div className="row  align-items-center ">

                                    <div className="col-lg-8">
                                        <h3><Trans  i18nKey="who-us"> من نحن</Trans></h3>
                                        <p className="pt-2"><Trans i18nKey="about-us-des">بنان منظومة إلكترونية سحابية، لإدارة شركات و مكاتب تأجير
                                            السيارات بالمملكة العربية السعودية من خلال وسائل وآليات دقيقة تحقق أعلى
                                            مستويات التنظيم والدقة والفاعلية.</Trans>
</p>

                                    </div>
                                    <div className="col-lg-4">
                                        <img src={BenanLogo} alt="logo_image" className="w-100" />

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item benan-carousel-item">
                                <div className="row  align-items-center ">

                                    <div className="col-lg-8">
                                        <h3><Trans  i18nKey="vision"> رؤيتنا </Trans></h3>
                                        <p className="pt-2"><Trans i18nKey="vision-desc">أن نكون محل ثقة المستثمرين بصناعة تأجير السيارات بالمملكة
                                            العربية السعودية من خلال العمل على المساندة الفنية و التطوير المستمر
                                            الذي يذلل المعوقات و التحديات التي تواجه المتغيرات و المستجدات التي تطرأ
                                            على التطوير و الاحترافية بالصناعة.</Trans></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <img src={BenanLogo} alt="logo_image" className="w-100" />

                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item benan-carousel-item">
                                <div className="row  align-items-center ">

                                    <div className="col-lg-8">
                                        <h3><Trans  i18nKey="mission"> مهمتنا </Trans> </h3>
                                        <p className="pt-2"><Trans i18nKey="missin-desc">نسعى في بنان إلى الارتقاء وأتمته شركات ومكاتب تأجير السيارات
                                            بكل احترافيه و مرونة و دقة.</Trans></p>
                                    </div>
                                    <div className="col-lg-4">
                                        <img src={BenanLogo} alt="logo_image" className="w-100" />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
        </section>
       
    </>
}
