import React, { useEffect, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function RenterIDCheck({ setShowVerificationInput, renterId, setRenterId, IdErrorMsg, SetIdErrorMsg }) {
  const { t } = useTranslation();
  const [errorMsg, setErrorMsg] = useState();
  const [RequirdMessage, setRequirdMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isRTL = document.body.dir === "rtl";
  useEffect(() => {
    if (isRTL) {
      setRequirdMessage("ادخل رقم الهوية");
    } else {
      setRequirdMessage("ID Number is Required");
    }
    setErrorMsg("");
    SetIdErrorMsg("")
  }, [isRTL]);

  const validationSchema = yup.object({
    RenterId: yup.string().required(RequirdMessage),
  });

  const formik = useFormik({
    initialValues: {
      RenterId: renterId,
    },
    validationSchema,
    onSubmit: async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://bnan.ghyum.sa/BnanApi/api/Renters/SendVerificationCode/", {
          params: { RenterId: renterId },
        });

        if (response.data.code === 200) {
          setShowVerificationInput(true);
        } else {
          setShowVerificationInput(false);
        }
      } catch (error) {
        if (isRTL) {
          setErrorMsg(error.response?.data?.arMessage);
        } else {
          setErrorMsg(error.response?.data?.enMessage);
        }
        setShowVerificationInput(false);
      } finally {
        setIsLoading(false);
      }
    },
  });

  useEffect(() => {
    formik.resetForm();
  }, [RequirdMessage]);

  const AlertFunction = () => {
    const message = isRTL
      ? "هذه الخدمة غير متوفرة حاليا"
      : "This service is not available";

    toast.error(message, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="col-lg-12" id="inputs">
          <div className="row g-3 align-items-start">
            <div className="col-lg-5">
              <label htmlFor="RenterId" className="form-label">
                <Trans i18nKey="ID number">رقم الهوية</Trans>
              </label>
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  setRenterId(value);
                  formik.handleChange(e);
                  if (value.trim() === "") {
                    setErrorMsg(undefined);
                    SetIdErrorMsg(undefined);

                  }
                }}
                value={formik.values.RenterId}
                type="text"
                className="form-control contract_input mb-2 w-100"
                id="RenterId"
                name="RenterId"
                autoComplete="off"
              />
              {formik.errors.RenterId && formik.touched.RenterId && (
                <p className="alert alert-danger mb-1 py-1 px-2">{formik.errors.RenterId}</p>
              )}
              {(errorMsg || IdErrorMsg) && <div className="alert alert-danger">{errorMsg || IdErrorMsg}</div>}
            </div>
            <div className="col-lg-4">
              <div className="row g-2">
                <p> <Trans i18nKey="SendOption"> تحقق من خلال  </Trans> </p>
                <div className="col-auto">
                  <button
                    className="SendwayBtn"
                    type="submit"
                    id="Whatsapp"
                    disabled={isLoading}
                  >
                    {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : <i className="bi bi-whatsapp SendWayIcon"></i>}
                  </button>
                </div>
                <div className="col-auto">
                  <button className="SendwayBtn" type="button" id="SMS" onClick={AlertFunction}>
                    <i className="bi bi-chat-square-text SendWayIcon"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer rtl={isRTL} />
    </>
  );
}