import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';
import logo from '../../src/Assets/images/benan_logo.svg';

const lngs = {
  ar: { nativeName: 'Arabic' },
  en: { nativeName: 'English' }
};

export default function Navbar() {
  
  const { t, i18n } = useTranslation();
  const [PathName, setPathName] = useState('/');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const collapseRef = useRef();
  useEffect(() => {
    document.body.dir = i18n.dir();
    setPathName(location.pathname);
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [location.pathname]);

  const handleLanguageToggle = () => {
    const newLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.body.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    collapseRef.current.classList.remove('show'); 
    handleLanguageToggle2()

  };
  const handleLanguageToggle2 = () => {
    document.title = document.body.dir === 'ltr'
      ? t('Banan - for managing car rental companies and offices')
      : t('بنان - لإدارة شركات ومكاتب تأجير السيارات');
  }
  useEffect(()=>{
    document.body.dir = i18n.dir();
    handleLanguageToggle2()
  },[])
  const handleLinkClick = () => {
    collapseRef.current.classList.remove('show'); 

  };
  
  return (
    <>
      <div className={`NavbarArea navbar-area `}>
        <nav className={`navbar navbar-expand-lg fixed-top .custom-navbar ${isScrolled ? 'scrolled' : ''}`} id="nav">
          <div className="container navbar-container">
            <Link to={'home'} className="navbar-brand logo" >
              <img className="logo1" src={logo} alt="Logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup"  ref={collapseRef}>
              <div className="navbar-nav">
              <Link
                  onClick={() => {
                    setPathName('/home');
                    handleLinkClick();
                  }}
                  className={PathName === '/home' ? 'active nav-link' : 'nav-link'}
                  to="/home"
                  aria-current="page"
                >
                  <Trans i18nKey="home">الرئيسية</Trans>
                </Link>

                <Link
                  onClick={() =>{ setPathName('/whobenan');
                  handleLinkClick();

                }}
                  className={PathName === '/whobenan' ? 'active nav-link' : 'nav-link'}
                  to="/whobenan"
                >
                  <Trans i18nKey="who-us">  من نحن     </Trans>
                </Link>
                <Link
                  onClick={() => {setPathName('/commonquestions');
                  handleLinkClick();
                }}
                  className={PathName === '/commonquestions' ? 'active nav-link' : 'nav-link'}
                  to="/commonquestions"
                >
                  <Trans i18nKey="commonQ">الاسئلة الشائعة</Trans>
                </Link>
                <Link
                  onClick={() => {setPathName('/contractcheck');
                  handleLinkClick();
                }}
                  className={PathName === '/contractcheck' ? 'active nav-link' : 'nav-link'}
                  to="/contractcheck"
                >
                  <Trans i18nKey="Verify">التحقق من المستند</Trans>
                </Link>
                <Link
                  onClick={() => {setPathName('/cars');
                  handleLinkClick();
                }}
                  className={PathName === '/cars' ? 'active nav-link' : 'nav-link'}
                  to="/cars"
                >
                  <Trans i18nKey="cars">سيارات للبيع</Trans>
                </Link>
                <Link
                  onClick={() => {setPathName('/contactus');          
                                handleLinkClick();
                                }}
                  className={PathName === '/contactus' ? 'active nav-link' : 'nav-link'}
                  to="/contactus"
                >
                  <Trans i18nKey="contactUs">تواصل معنا</Trans>
                </Link>
              </div>
              <div className="row buttond-flex flex-column flex-md-row align-items-start align-items-md-center mb-3">
                <div className="row button wow flex-row fadeInUp d-flex align-items-center g-2 flex-lg-nowrap buttons-div " data-wow-delay=".2s">
                  <div className='col-auto' >
                    <a href='http://45.63.18.63/' target='blank' className="btn btn-default-outline  ">
                      <Trans i18nKey="benan-system">نظام بنان</Trans>
                    </a>
                  </div>
                  <div className='col-auto' >
                    <Link to={'trialversion'} href="Request_Trial.html" className="btn btn-primary mx-lg-2 ">
                      <Trans i18nKey="trial-request">اطلب نسخة تجريبية</Trans>
                    </Link>
                  </div>

                  <div className="col-sm-3 col-lg-3">
                  <div className="row buttond-flex flex-column flex-md-row align-items-start align-items-md-center ">
                <div className="row button wow flex-row fadeInUp d-flexjustify-content-center" data-wow-delay="0.2s">
                  <a onClick={handleLanguageToggle} className='language-anchor'>
                    {currentLanguage === 'ar' ? t('English') : t('Arabic')}
                  </a>
                </div>
              </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}