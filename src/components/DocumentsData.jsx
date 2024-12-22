import React, { useEffect, useState } from 'react'

import { useTranslation, Trans } from 'react-i18next';
import axios from 'axios';
import logo from '../../src/Assets/images/benan_logo.svg';
import { useLocation } from 'react-router-dom';

export default function DocumentsData() {

  const location = useLocation();
  const { RenterId, OTP } = location.state || {}; 
  console.log("Navigating with:", { RenterId, OTP });

  const { t, i18n } = useTranslation()
  const [Isloading, setIsloading] = useState(false)
  const [RenterName, SetRenterName] = useState()
  const [Categories, SetCategories] = useState()
  const [Files, SetFiles] = useState()
  const [Data, SetData] = useState()

  const [activeCategory, setActiveCategory] = useState(
    Categories && Categories.length > 0 ? Categories[0].id : null
  );
  useEffect(() => {
    GetRenterInfo()
  }, []);

  useEffect(() => {
    if (Categories && Categories.length > 0) {
      setActiveCategory(Categories[0].id);
      SetFiles(Data?.data.data.find((index) => index.id === Categories[0].id)?.files);
    }

  }, [Categories]);

  async function GetRenterInfo() {
    setIsloading(true)
    try {
      const data = await axios.get('https://bnan.ghyum.sa/BnanApi/api/Renters/GetFiles', {
        params: { RenterId: RenterId , OTP: OTP },
      });
      SetData(data)
      SetCategories(data.data.data)
      SetRenterName(data.data.renterInfo)
      SetFiles(data?.data.data.find((index) => index.id === activeCategory)?.files)
      console.log(Files)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
    setIsloading(false)
  }
  const handleButtonClick = (id) => {
    setActiveCategory(id);
    SetFiles(Data?.data.data.find((index) => index.id === id)?.files);
  };

  return <>
    <div className="section">
      <div className="container mt-5 pt-3">
        <h4>{document.body.dir === 'rtl' ? RenterName?.arName : RenterName?.enName}</h4>

        <div className="row pt-5  ">
          <div className="col-lg-3 col-xl-2 car-catogeries d-flex gap-3 pb-4 ">

            <div id="scrollContainer" className='w-100'>
              <div className="d-flex gap-1" id="buttonContainer">
                {Categories?.map((index, i) => (
                  <div key={i}>
                    <button
                      type="button"
                      className={`btn btn-primary categoray-button ${activeCategory === index.id ? 'active' : ''}`}
                      onClick={() => handleButtonClick(index.id)}
                    >
                      {document.body.dir === 'rtl' ? index.arName : index.enName}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="col-lg-9 col-xl-10 scrollable-content">
            {Isloading ?
              <div className="loader_container">

                <div className="loader">
                  <img src={logo} className="imj" />
                  <svg viewBox="0 0 80 80">
                    <rect x="8" y="8" width="64" height="64"></rect>
                  </svg>
                </div>
              </div>
              : <table width="100%" className="table table-hover" id="document-table" >
                <tbody>
                  {Files?.map((index, i) => (
                    <tr key={i}>
                      <td>
                        <div className="row">
                          <div className="col col-xl-9">
                            <div className="row">
                              <div className="col-md-auto">
                                <p className='Titles'> 
                                <Trans i18nKey="RenterContract">الرقم :</Trans></p>
                              </div>
                              <div className="col-md-auto">
                                <p>{index.fileId}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-auto">
                                <p className='Titles' > 
                                  <Trans i18nKey="RenterDate"> التاريخ : </Trans>
                                </p>
                              </div>
                              <div className="col-md-auto">
                                <p>{index.date}</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-auto">
                                <p className='Titles' >

                                  <Trans i18nKey="RenterComany"> الشركة :</Trans>
                                </p>
                              </div>
                              <div className="col-md-auto">
                                <p>{document.body.dir === 'rtl' ? index.arLessorName : index.enLessorName }</p>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-auto">
                                <p className='Titles'> 
                                 <Trans i18nKey="RenterBranche"> الفرع :</Trans>
                                </p>
                              </div>
                              <div className="col-md-auto">
                                <p>{ document.body.dir === 'rtl' ? index.arBranchName : index.enBranchName}</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-auto">
                            <button className="btn btn-Pictures">
                              <a
                                href={document.body.dir === 'rtl' ?`https://system.ghyum.sa${index.arPdfPath}`.replace(/~/g, ''):`https://system.ghyum.sa${index.enPdfPath}`.replace(/~/g, '')}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                              <Trans i18nKey="DownloadDoc">تحميل المستند</Trans>
                             </a>
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>}

          </div>
        </div>
      </div>
    </div>
  </>
}
