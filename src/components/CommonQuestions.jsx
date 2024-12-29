
import axios from 'axios';
import SearchQuestion from './SearchQuestion';
import React, { useEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import logo from '../../src/Assets/images/benan_logo.svg';

export default function CommonQuestions() {
  const { t, i18n } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('');
  const [AdminQuestionsList, SetAdminQuestionsList] = useState([]);
  const [BranchesQuestionsList, SetBranchesQuestionsList] = useState([]);
  const [OwnersQuestionsList, SetOwnersQuestionsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function GetQuestions() {

    try {
      setIsLoading(true)

      const { data } = await axios.get('https://bnan.ghyum.sa/BnanApi/api/Questions/')
      const AdminFilteredQuestions = data?.filter(question => question.system == 2);
      SetAdminQuestionsList(AdminFilteredQuestions);

      const BranchesQuestionsList = data?.filter(question => question.system == 5);
      SetBranchesQuestionsList(BranchesQuestionsList);

      const OwnersQuestionsList = data?.filter(question => question.system == 6);
      SetOwnersQuestionsList(OwnersQuestionsList);

      setIsLoading(false)


    } catch (error) {
      console.log(error)
      setIsLoading(false)

    }

  }
  useEffect(() => {
    GetQuestions();
  }, [])
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <section id="contract" className="contract section ">
      <div className="container">
      <div className="tabb">
        <h2 className="text-center common-question-title"> <Trans i18nKey="common-question-title">مهمتنا مساعدتك </Trans>!   </h2>
        <div className="section inner-container pt-4 ">
          {isLoading ?
            <div className="loader_container">

              <div className="loader">
                <img src={logo} className="imj" alt='logo loader' />
                <svg viewBox="0 0 80 80">
                  <rect x="8" y="8" width="64" height="64"></rect>
                </svg>
              </div>
            </div> :
            <div style={{ width: '90%' }}>
              <SearchQuestion
                AdminQuestionsList={AdminQuestionsList}
                BranchesQuestionsList={BranchesQuestionsList}
                OwnersQuestionsList={OwnersQuestionsList}
                searchQuery={searchQuery}
              />
              <div>
              </div>
              </div>
          }
          <div>
          </div>

        </div>
      </div>
      </div>
    </section>
  );
}



