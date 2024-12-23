import React from 'react'
import { useTranslation , Trans } from 'react-i18next';

export default function BenanFeatures() {

    return <>
        <div className="container">
            <div className="heading-block text-center my-5 wow fadeInUp" data-wow-delay=".5s">
                <h2><Trans i18nKey="benan-features">
                    مميزات بنان
                    </Trans> 
               </h2>
                {/* <h5 className="pt-3"> <Trans i18nKey="benan-features-subtitle">افضل خيار لإدارة شركات و مكاتب تأجير السيارات</Trans></h5> */}
            </div>
            <div className="row col-mb-50 mb-0 mt-4 g-5  wow fadeInUp " data-wow-delay=".5s">
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-bell feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3><Trans i18nKey="features1-h">نظام ذكي</Trans> </h3>
                            <p className="feautrs_text pt-3">
                            <Trans i18nKey="features1-s">يدعم بنان	نظام رسائل SMS ذكية للدعاية والإعلان والتهنئة ورسائل تنبيهه للمستأجر</Trans>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-circle-check  feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3><Trans i18nKey="features2-h"> فحص ظاهري </Trans> </h3>
                            <p className="feautrs_text pt-3">
                            <Trans i18nKey="features2-s">  الفحص الظاهري بتصوير حالة السيارة
                                ميدانيا ورفع تلك الصور من ضمن العقد </Trans>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-desktop feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3>  <Trans i18nKey="features3-h">إدارة متكاملة </Trans>  </h3>
                            <p className="feautrs_text pt-3"
                            >
                                <Trans i18nKey="features3-s">

                                إدارة متكاملة لكافة الفروع
                                و السيارات و العقود و المستأجرين والمستخدمين

                                </Trans></p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-scroll feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3>   <Trans i18nKey="features4-h">تقارير تفصيلية </Trans> </h3>
                            <p className="feautrs_text pt-3">

                            <Trans i18nKey="features4-s">
                                 تقارير
                                تفصيلية عن الاجراءات الإدارية
                                والمالية بالاضافة الي تقارير ومؤشرات
                                إحصائية عن
                                السيارات والعقود
                                والمستأجرين
                            </Trans>
                            </p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-handshake feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3>  <Trans i18nKey="features5-h">  خدمات
                                العقد  </Trans>  </h3>
                            <p className="feautrs_text pt-3"><Trans i18nKey="features5-s"> الربط الآلي 
                                مع الجهات ذات
                                العلاقة بالاضافة الي ترحيل عهدة
                                الموظف الي إلادارة
                                و تغذية الصندوق
                                من إلادارة المالية
                                إلى الموظف
                            </Trans></p>
                        </div>
                    </div>

                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="feature-box d-flex gap-3">
                        <div className="icon_div">
                            <i className="fa-solid fa-calculator feautrs_icon"></i>
                        </div>
                        <div className="content_div">
                            <h3> <Trans i18nKey="features6-h"> القيمة المضافة </Trans> </h3>
                            <p className="feautrs_text pt-3">
                            <Trans i18nKey="features6-s"> يدعم بنان احتساب القيمة المضافة</Trans>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
}
