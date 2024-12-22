import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { useTranslation, Trans } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchQuestion = ({ AdminQuestionsList, BranchesQuestionsList , OwnersQuestionsList}) => {

  const { t, i18n } = useTranslation()
  const [searchQuery, setSearchQuery] = useState('');
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentQuestionTitle, setCurrentQuestionTitle] = useState('');

  const AdminQuestionsListarray = AdminQuestionsList

  const BranchesQuestionsListarray = BranchesQuestionsList

  const OwnersQuestionsListarray = OwnersQuestionsList


    const handleVideoClick = (videoLink, questionTitle) => {
      setCurrentVideo(videoLink);
      setCurrentQuestionTitle(questionTitle);
      setIsVideoOpen(true);
      document.body.classList.add('modal-open'); 
    };

    const closeModal = () => {
      setIsVideoOpen(false);
      document.body.classList.remove('modal-open'); 
    };
    const renderBackdrop = () => {
      if (!isVideoOpen) return null;
      return <div className="modal-backdrop fade show"></div>;
    };
    const renderVideoPlayer = () => {
      if (!isVideoOpen) return null;
  
      return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="VideoModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg ">
            <div className="modal-content videoModal">
              <div className="modal-header border-0">
                <h6 className="modal-title m-auto video-Modal-title" id="VideoModalLabel">{currentQuestionTitle}</h6>
                <button type="button" className=" m-0" onClick={closeModal} aria-label="Close"><i className="fa-solid fa-xmark fs-5 video-x-mark"></i></button>
              </div>
              <div className="modal-body d-flex align-items-center justify-content-center video-modal-body">
                <video controls style={{ width: '100%', maxWidth: '600px' }}>
                  <source src={currentVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      );
    };
  
  
  const handleSearch = (array) => {
    const words = searchQuery.split(' ').filter(word => word !== '');
    let matchQuestion
    let matchSubItems
    const filtered = array.filter(item => {
      if (document.body.dir === 'rtl') {
        matchQuestion = words.some(word =>
          item.arName?.toLowerCase().includes(word.toLowerCase())
        );
        matchSubItems = item.questionsAndAnswers.some(questionsAndAnswers =>
          words.some(word => questionsAndAnswers?.arQuestion?.toLowerCase().includes(word.toLowerCase()))
        );
      } else {
        matchQuestion = words.some(word =>
          item.enName?.toLowerCase().includes(word.toLowerCase())
        );
        matchSubItems = item?.questionsAndAnswers?.some(questionsAndAnswers =>
          words.some(word => questionsAndAnswers?.enQuestion?.toLowerCase().includes(word.toLowerCase()))
        );
      }

      return matchQuestion || matchSubItems;
    });

    return filtered;
  };

  const renderAccordionItems = (array) => {
    if (searchQuery !== '') {
      const filteredItems = handleSearch(array);
      if (filteredItems.length !== 0) {
        return filteredItems.map((item, index) => (
          <AccordionItem key={index}>
            <h2>
              <AccordionButton className="main-tab py-4 my-2">
                <Box flex="1" textAlign={document.body.dir === 'rtl' ? 'right' : 'left'} >
                  {document.body.dir === 'rtl' ? item.arName : item.enName}
                </Box >
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Accordion allowToggle>
                {item.questionsAndAnswers?.map((questionsAndAnswers, subIndex) => (
                  <AccordionItem key={subIndex}>
                    <h3>
                      <AccordionButton className="inner-tab py-4 my-2">
                        <Box flex="1" textAlign={document.body.dir === 'rtl' ? 'right' : 'left'} >
                          {document.body.dir === 'rtl' ? questionsAndAnswers.arQuestion : questionsAndAnswers.enQuestion}
                        </Box >
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pb={2}>
                      <p>{document.body.dir === 'rtl' ? questionsAndAnswers.arAnswer : questionsAndAnswers.enAnswer}</p>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionPanel>
          </AccordionItem>
        ));
      } else {
        return <div>
          <p id="errorMessage" className='error p-3 mt-3'> <Trans i18nKey="common-question-Error">هذا السؤال غير موجود يمكنك التواصل معانا الاجابة عن سؤالك</Trans></p>
        </div>

      }

    } else {
      return array?.map((item, index) => (
        <AccordionItem key={index} >
          <h2>
            <AccordionButton className="main-tab py-4 my-2">
              <Box flex="1" textAlign={document.body.dir === 'rtl' ? 'right' : 'left'} >
                {document.body.dir === 'rtl' ? item.arName : item.enName}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Accordion allowToggle>
              {item.questionsAndAnswers?.map((questionsAndAnswers, subIndex) => (
                <AccordionItem key={subIndex}>
                  <h3>
                    <AccordionButton className="inner-tab py-4 my-2">
                      <Box flex="1" textAlign={document.body.dir === 'rtl' ? 'right' : 'left'}>
                        {document.body.dir === 'rtl' ? questionsAndAnswers.arQuestion : questionsAndAnswers.enQuestion}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h3>
                  <AccordionPanel pb={2}>
                    <p>{document.body.dir === 'rtl' ? questionsAndAnswers.arAnswer : questionsAndAnswers.enAnswer}</p>
                    <button   className='VideoBtn' onClick={() => handleVideoClick(questionsAndAnswers.videoLink, document.body.dir === 'rtl' ? questionsAndAnswers.arQuestion : questionsAndAnswers.enQuestion)}>
                        <Trans i18nKey="VideoBtn">                      
                            عرض فيديو توضيحي 
                            <i className="fa-solid fa-video"></i>
                        </Trans>
                    </button>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionPanel>
        </AccordionItem>
      ));
    }
  };

  return (
    <div>
      {renderBackdrop()}
      <div className="my-5">
        <div className="row gap-1 align-items-center justify-content-center">
          <div className="col-md-6 col-lg-10">
            <input
              type="search"
              className="form-control "
              id="searchInput"
              placeholder={document.body.dir === 'rtl' ? "يمكنك البحث عن سؤالك هنا ..." : "You can search for your question here..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}

            />
          </div>

        </div>
      </div>
      <h2 className="faq-title mb-4" > <Trans i18nKey="common-question-mangement">الأسئلة الشائعة عن النظام الإداري :</Trans> </h2>
      <Accordion allowToggle>
        {renderAccordionItems(AdminQuestionsListarray)}
      </Accordion>

      <h2 className="faq-title mb-3 mt-3" > <Trans i18nKey="common-question-mangement">الأسئلة الشائعة عن نظام الفروع :</Trans> </h2>
      <Accordion allowToggle>
        {renderAccordionItems(BranchesQuestionsListarray)}
      </Accordion>

      <h2 className="faq-title mb-3 mt-3" > <Trans i18nKey="common-question-mangement">الأسئلة الشائعة عن نظام الملاك :</Trans> </h2>
      <Accordion allowToggle>
        {renderAccordionItems(OwnersQuestionsListarray)}
      </Accordion>
      {renderVideoPlayer()}
    </div>
  )
}
export default SearchQuestion;
