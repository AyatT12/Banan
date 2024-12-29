import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import WOW from 'wowjs';
import RenterIDCheck from './RenterIDCheck';
import RenterVerifyCode from './RenterVerifyCode';

export default function ContractCheck() {
  const { t, i18n } = useTranslation();
  const [renterId, setRenterId] = useState("");
  const [submittedRenterId, setSubmittedRenterId] = useState(""); // NEW STATE
  const [showVerificationInput, setShowVerificationInput] = useState(false);
  const [IdErrorMsg, SetIdErrorMsg] = useState("");

  const handleShowVerificationInput = (value) => {
    setShowVerificationInput(value);
  };

  const handleRenterIdSubmit = () => {
    setSubmittedRenterId(renterId); // Save the renterId at the time of submission
  };

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <section id="contract" className="contract section">
        <div className="container inner-container">
          <div className="row align-items-center pt-5 justify-content-center mt-5 w-100">
            <div className="col-md-8 contact-form-div wow fadeInUp" data-wow-delay=".2s">
              <div className="container">
                <h1 className="fs-2 text-center my-3">
                  <Trans i18nKey="Verify">تحقق من المستند</Trans>
                </h1>
                <div className="row g-3 p-3 pb-2 justify-content-around">
                  <RenterIDCheck
                    setShowVerificationInput={setShowVerificationInput}
                    renterId={renterId}
                    setRenterId={setRenterId}
                    IdErrorMsg={IdErrorMsg}
                    SetIdErrorMsg={SetIdErrorMsg}
                    onSubmit={handleRenterIdSubmit} // Pass submission handler
                  />
                </div>
                <div className="varificationCard m-2 mb-3">
                  <RenterVerifyCode
                    renterId={submittedRenterId} // Use submitted ID
                    showVerificationInput={showVerificationInput}
                    SetIdErrorMsg={SetIdErrorMsg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
