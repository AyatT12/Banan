import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

export default function CarsTable({ car }) {
    const { t , i18n} = useTranslation()
    const imagePath = `https://system.ghyum.sa/${car.imagePath}`.replace(/~/g, '');
    return (
            <td>
                <div className="row">
                    <div className="col-md-6 col-xl-3 p-1">
                        <img src={imagePath} className="w-75" alt="Car" />
                    </div>
                    <div className="col-sm-12 col-md-12 pt-3 col-xl-5 d-flex flex-column gap-2">
                        <p className="car-brand">{document.body.dir =='rtl'? car.carArName :car.carEnName}</p>
                        <p className="carPrice">
                            <Trans i18nKey="car-price">السعر</Trans> /{" "}
                            <span className="price-tag">{car.price}</span>
                        </p>
                        <p>
                            <Trans i18nKey="car-reading">القراءة الحالية : </Trans>
                            <span >{car.currentMeter}</span>

                        </p>
                    </div>
                    <div className="col-sm-12 col-md-12 col-xl-4 pt-3">
                        <div className="row flex-column gap-2">
                            <p>
                               <span className='Titles'> <Trans i18nKey="company-name">اسم الشركة : </Trans></span>
                                <span >{document.body.dir =='rtl' ?car.companyArName:car.companyEnName}</span>

                            </p>
                            <p>
                               <span className='Titles'><Trans i18nKey="contact-num">رقم التواصل : </Trans></span> 
                                <span >{car.telephoneContact}</span>

                            </p>
                            <p>
                               <span className='Titles'> <Trans i18nKey="email">البريد الالكتروني  </Trans> : </span>
                                <span >{car.email}</span>

                            </p>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-Pictures">
                                    <Trans i18nKey="details">تفاصيل</Trans>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </td>
    )
}
