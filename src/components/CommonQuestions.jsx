
import axios from 'axios';
import SearchQuestion from './SearchQuestion';
import React, { useEffect, useState } from 'react';
import { useTranslation , Trans } from 'react-i18next';

export default  function CommonQuestions  () {
  const { t , i18n} = useTranslation()
  const [searchQuery, setSearchQuery] = useState('');
  const[AdminQuestionsList , SetAdminQuestionsList]=useState([]);
  const[BranchesQuestionsList , SetBranchesQuestionsList]=useState([]);
  const[OwnersQuestionsList , SetOwnersQuestionsList]=useState([]);

  async function GetQuestions() {

    try {
        const { data } = await axios.get('https://bnan.ghyum.sa/BnanApi/api/Questions/')
        const AdminFilteredQuestions = data?.filter(question => question.system == 2);
        SetAdminQuestionsList(AdminFilteredQuestions);

        const BranchesQuestionsList = data?.filter(question => question.system == 5);
        SetBranchesQuestionsList(BranchesQuestionsList);

        const OwnersQuestionsList = data?.filter(question => question.system == 6);
        SetOwnersQuestionsList(OwnersQuestionsList);

      } catch (error) {
        console.log(error)
    }

}
useEffect(()=>{
  GetQuestions();
},[])
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



  return (
    <div className="container tabb">
      <h2 className="text-center common-question-title"> <Trans i18nKey="common-question-title">مهمتنا مساعدتك </Trans>!   </h2>

      <div className="section pt-4">
   
      <SearchQuestion
        AdminQuestionsList={AdminQuestionsList}
        BranchesQuestionsList={BranchesQuestionsList}
        OwnersQuestionsList={OwnersQuestionsList}
        searchQuery={searchQuery}
      />     
         <div>
        </div>

      </div>
    </div>
  );
}



