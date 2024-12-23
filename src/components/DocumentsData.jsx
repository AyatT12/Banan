import React, { useEffect, useState } from 'react'

import { useTranslation, Trans } from 'react-i18next';
import axios from 'axios';
import logo from '../../src/Assets/images/benan_logo.svg';
import { useLocation } from 'react-router-dom';
import contractslogo from '../../src/Assets/images/contract.svg';
import Invoice from '../../src/Assets/images/Invoice.svg';
import naql from '../../src/Assets/images/naql.svg';
import Pdf from '../../src/Assets/images/pdf.png';

export default function DocumentsData() {

  const location = useLocation();
  const { RenterId, OTP } = location.state || {}; 
  const { t, i18n } = useTranslation()
  const [Isloading, setIsloading] = useState(false)
  const [RenterName, SetRenterName] = useState()
  const [Categories, SetCategories] = useState()
  const [Files, SetFiles] = useState()
  const [Data, SetData] = useState()
  const[FileICon , SetFileIcon]  = useState()
  const [activeCategory, setActiveCategory] = useState(
    Categories && Categories.length > 0 ? Categories[0].id : null
  );
  useEffect(() => {
    GetRenterInfo()
  }, []);

  useEffect(() => {
    if (Categories && Categories.length > 0) {
      const initialCategory = Categories[0].id;
      setActiveCategory(initialCategory);
      SetFiles(Data?.data.data.find((index) => index.id === initialCategory)?.files);
  
      if (initialCategory === "401") {
        SetFileIcon(contractslogo);
      } else if (initialCategory === "308" || initialCategory === "309") {
        SetFileIcon(Invoice);
      } else {
        SetFileIcon(Pdf);
      }
    }
  }, [Categories, Data]);
  

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
    
    } catch (error) {
      console.log(error)
    }
    setIsloading(false)
  }
  const handleButtonClick = (id) => {
    setActiveCategory(id);
    SetFiles(Data?.data.data.find((index) => index.id === id)?.files);
    if (id === "401") {
      SetFileIcon(contractslogo);
    } else if (id === "308" || id === "309") {
      SetFileIcon(Invoice);
    } else {
      SetFileIcon(Pdf);
    }
  }
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
                          <div className="col ">
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
                            <button className="btn PdfIcon">
                              <a
                                href={document.body.dir === 'rtl' ?`https://system.ghyum.sa${index.arPdfPath}`.replace(/~/g, ''):`https://system.ghyum.sa${index.enPdfPath}`.replace(/~/g, '')}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                               <img src={FileICon}/> 
                             </a>
                            </button>
                             {activeCategory === "401"&&(
                              <button className="btn PdfIcon">
                              <a
                                href={`https://system.ghyum.sa${index.tgaPdfPath}`.replace(/~/g, '')}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                              <img src={naql}/> 
                             </a>
                            </button>
                            )}
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
