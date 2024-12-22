import React from 'react'
import {Trans } from 'react-i18next';

export default function WhyBenan() {
  return<>
   
   <div className="container">
            <div className="row">
                <div className="col-lg-12 section-title">
                    <h2 className="wow fadeInUp pb-5" data-wow-delay=".4s">
                    <Trans i18nKey="why-benan">
                    لماذا بنان  
                    </Trans>
                    </h2>
                </div>
                <div className="col-lg-6 col-12 p-3 p-md-0">

                    <div className="why-content ">
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay=".5s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3"> <Trans i18nKey="why-1">متابعة مستندات و عقود الفروع من خلال التنبيهات و إلاشعارات </Trans> </div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay=".6s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3">  <Trans i18nKey="why-2">
                                
                            الإحاطة الشاملة بكافة البيانات المتعلقة بوثائق و صيانة  السيارات 
                                </Trans></div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay=".7s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3">
                            <Trans i18nKey="why-3">
                            سهولة إدارة بيانات وحسابات المستأجرين و المستخدمين
                            </Trans>
                            </div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay=".8s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3">
                            <Trans i18nKey="why-4">
                            إعطــاء تنبيــه بمــدى نشــاط أو اســتيفاء كل وثيقــة وموعــد تجديدهــا

                            </Trans>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-lg-6 col-12">

                    <div className="why-content">
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay=".5s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3"> <Trans i18nKey="why-5">
                            ارشفة العقود وجميع التعامالت
                                </Trans> </div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay="1s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3"> <Trans i18nKey="why-6">
                            نظام دقيق ومرن آللية تسعير السيارات
                                </Trans> </div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay="1.1s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3"> 
                            <Trans i18nKey="why-7">
                                آلية صلاحية العقد للموظفين
                            </Trans>

                            </div>

                        </div>
                        <div className="why-item bg-white mb-3 d-flex align-items-center   wow fadeInUp"
                            data-wow-delay="1.2s">
                            <div className="flex-shrink-0 icon">
                            <i className="fa-regular fa-circle-check why-fa-check"></i>
                            </div>
                            <div className="flex-grow-1 px-3">
                            <Trans i18nKey="why-8">
                            آلية شروط التنبيهات و اإلشعارات

                            </Trans>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
  </>
}
