import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import trailGif from '../../src/Assets/images/contact1.gif';

export default function TrialVersion() {
  const { t, i18n } = useTranslation();
  const [isloading , setisloading] = useState(false)
  const [submitted , setsubmitted] = useState(false)

  const validationSchema = Yup.object({
    Name: Yup.string().required('هذا الحقل مطلوب '),
    Phone: Yup.string().required('هذا الحقل مطلوب '),
    Email: Yup.string().email('البريد الالكتروني المدخل غير صحيح').required('هذا الحقل مطلوب'),
  });

  const { values, handleSubmit, handleChange, errors, touched , handleBlur } = useFormik({
    initialValues: {
      Name: "",
      Phone: "",
      City: "",
      District: "",
      Email: "",
      Subject: "",
      Body: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      setisloading(true)

      const formData = new FormData();
      for (const key in values) {
        formData.append(key, values[key]);
      }
      try {
        const response = await axios.post('http://45.63.18.63/BnanApi/api/Email', formData);
        console.log(response);
        setsubmitted(true)
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
      setisloading(false)

    },
    validationSchema

  })

  React.useEffect(() => {
    const inputFields = document.querySelectorAll('input, textarea');
    const handleInputChange = (event) => {
      setsubmitted(false);
    };
    inputFields.forEach((inputField) => {
      inputField.addEventListener('input', handleInputChange);
    });
    return () => {
      inputFields.forEach((inputField) => {
        inputField.removeEventListener('input', handleInputChange);
      });
    };
  }, []);

  return (
    <>
      <div className="section">
        <div className="container pt-5 mt-5">
          <div className="row  align-items-center pt-100">
            <div className="col-md-10 col-lg-7  p-5 contact-form-div">
              <h1 className="fs-2">
                <Trans i18nKey="TrialTitle">طلب نسخة تجريبية</Trans>
              </h1>
              <p className="mt-2 mb-4 fs-5">
                <Trans i18nKey="TrialSubTitle">لطلب نسخة تجريبية يرجى تعبئة البيانات أدناه</Trans>
              </p>
              <div className="contact-form">
                <form onSubmit={handleSubmit} id="contactForm">
                  <div className="row">
                    <div className={`col-md-6 mb-3 `}>
                       <label htmlFor="Name" className="form-label"> <Trans i18nKey="name-input">الاسم</Trans> </label>
                        <input type="text" className={`form-control`} id="Name" name="Name" value={values.Name} onChange={handleChange} onBlur={handleBlur} /> 
                        {errors.Name && touched.Name && <p className="alert alert-danger py-1 mx-0 ">{<Trans i18nKey="Name-error">{errors.Name}</Trans>}</p>} 
                        </div>

                        <div className={`col-md-6 mb-3 `}> 
                       <label htmlFor="Phone" className="form-label"> <Trans i18nKey="phone-input">رقم الهاتف</Trans> </label>
                         <input type="text" className={`form-control`} id="Phone" name="Phone" value={values.Phone} onChange={handleChange} onBlur={handleBlur}  />
                         {errors.Phone  && touched.Phone &&<p className="alert alert-danger py-1 mx-0 ">{<Trans i18nKey="Phone-error">{errors.Phone}</Trans>}</p>}
                          </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="City" className="form-label">
                        <Trans i18nKey="city-input">المدينة</Trans>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="City"
                        name="City"
                        value={values.City}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="District" className="form-label">
                        <Trans i18nKey="district-input">الحي</Trans>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="District"
                        name="District"
                        value={values.District}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className={`mb-3 has-error`}>
                     <label htmlFor="Email" className="form-label"> <Trans i18nKey="email">البريد الإلكتروني</Trans> </label> 
                     <input type="Email" className={`form-control`} id="Email" name="Email" value={values.Email} onChange={handleChange} onBlur={handleBlur}  /> 
                     {errors.Email && touched.Email && <p className="alert alert-danger py-1 mx-0 ">{<Trans i18nKey="error-email">{errors.Email}</Trans>}</p>} 
                     </div>
                  <div className="mb-3">
                    <label htmlFor="Subject" className="form-label">
                      <Trans i18nKey="subject-input">الموضوع</Trans>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Subject"
                      name="Subject"
                      value={values.Subject}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="Body" className="form-label">
                      <Trans i18nKey="message-input">الرسالة</Trans>
                    </label>
                    <textarea
                      className="form-control"
                      id="Body"
                      name="Body"
                      rows="2"
                      value={values.Body}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {isloading ? <button disabled type='button' className='btn btn-primary btn-trial text-white d-block '> <i className='fas fa-spin fa-spinner px-4'></i> </button>
                  : submitted ?
                     <button  type='button' className='btn  btn-primary btn-trial text-white  d-block '><i className='fas fa-check px-2'></i> <Trans i18nKey="success-button"></Trans>  </button> : 
                     <button type="submit" className="btn btn-primary btn-trial">
                    <Trans i18nKey="send-button" >إرسال</Trans>
                  </button>}
                </form>
              </div>

            </div>
            <div className="col-md-5 d-none d-md-block">
              <img src={trailGif} alt="Trial Gif" className="contat_img" />
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}