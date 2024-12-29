import React, { useEffect, useState } from "react";
import { Trans } from "react-i18next";
import * as yup from "yup";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RenterVerifyCode({ renterId, showVerificationInput, SetIdErrorMsg }) {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [OTPisLoading, setOTPIsLoading] = useState(false);
  const [RequirdMessage, setRequirdMessage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (showVerificationInput) {
      setTimeLeft(300);
      setIsTimeUp(false);
    }
  }, [showVerificationInput]);

  useEffect(() => {
    if (!showVerificationInput || timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const updatedTime = Math.max(prevTime - 1, 0);
        if (updatedTime === 0) {
          setIsTimeUp(true);
        }
        return updatedTime;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [showVerificationInput, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const isRTL = document.body.dir === "rtl";

  useEffect(() => {
    if (isRTL) {
      setRequirdMessage("ادخل رمز التحقق ");
    } else {
      setRequirdMessage("Enter verification code");
    }
    setErrorMsg("");

  }, [isRTL]);

  const validationSchema = yup.object({
    OTP: yup.string().required(RequirdMessage),
  });

  const formik = useFormik({
    initialValues: {
      RenterId: renterId || "",
      OTP: "",
    },
    enableReinitialize: true,
    validationSchema,
    onSubmit: async () => {
      try {
        setIsLoading(true);
        const { RenterId, OTP } = formik.values;

        const response = await axios.post(
          `https://bnan.ghyum.sa/BnanApi/api/Renters/VerifyOtp?RenterId=${RenterId}&OTP=${OTP}`,
          {},
          {
            headers: {
              'Content-Type': 'application/problem+json',
            },
          }
        );

        if (response.data.code === 200) {
          navigate('/DocumentsData', {
            state: {
              RenterId,
              OTP,
            },
          });
        }

      } catch (error) {

        if (isRTL) {
          setErrorMsg(error.response?.data?.arMessage);
        } else {
          setErrorMsg(error.response?.data?.enMessage);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });


  useEffect(() => {
    formik.resetForm();
  }, [RequirdMessage]);

  const handleResendOTP = async () => {
    try {
      setOTPIsLoading(true);
      const response = await axios.get("https://bnan.ghyum.sa/BnanApi/api/Renters/SendVerificationCode/", {
        params: { RenterId: renterId },
      });
      setTimeLeft(300);
      setIsTimeUp(false);
    } catch (error) {
      if (isRTL) {
        SetIdErrorMsg(error.response?.data?.arMessage);
      } else {
        SetIdErrorMsg(error.response?.data?.enMessage);
      }
    } finally {
      setOTPIsLoading(false);
    }
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row g-3 p-1" id="varificationInput">
        <div className="col-lg-12">
          <div className="row align-items-end g-1">
            <div className="col-lg-5">
              <label htmlFor="OTP" className="form-label">
                <Trans i18nKey="OTP">رمز التحقق</Trans>
              </label>
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  formik.handleChange(e);
                  if (value.trim() === "") {
                    setErrorMsg(undefined);
                  }
                }}
                value={formik.values.OTP}
                type="text"
                className="form-control contract_input mb-2"
                id="OTP"
                name="OTP"
                disabled={!showVerificationInput || isLoading}
              />
              {formik.errors.OTP && formik.touched.OTP && (
                <p className="alert alert-danger mb-1 py-1 px-2">
                  {formik.errors.OTP}
                </p>
              )}
              {errorMsg && (
                <div className="alert alert-danger mb-1 py-1 px-2 ">{errorMsg}</div>
              )}
            </div>
            <div className="col-lg-8 OTP-alert">
              <p>
                {showVerificationInput ? (
                  <>
                    <i className="mx-1 bi bi-exclamation-octagon-fill"></i>
                    <Trans i18nKey="OtpAlert">برجاء ادخال الرمز المرسل الي رقم هاتفك في خلال</Trans>
                    {" "}
                    {formatTime(timeLeft)}
                  </>
                ) : (
                  ""
                )}
              </p>

            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row g-3 mb-1">
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary search-button px-4 py-2"
                disabled={!showVerificationInput || isLoading}
              >
                {isLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : <Trans i18nKey="Confirm">تأكيد</Trans>}
              </button>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-primary search-button px-4 py-2"
                onClick={handleResendOTP}
                disabled={!showVerificationInput}
              >
                {OTPisLoading ? <i className="fa-solid fa-spinner fa-spin"></i> : <Trans i18nKey="resend">إعادة ارسال</Trans>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}