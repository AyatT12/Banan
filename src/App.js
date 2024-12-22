import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home';
import CarsForSale from './components/CarsForSale';
import CommonQuestions from './components/CommonQuestions';
import ContactUs from './components/ContactUs';
import ContractCheck from './components/ContractCheck';
import NotFound from './components/NotFound';
import TrialVersion from './components/TrialVersion';
import { ChakraProvider } from '@chakra-ui/react'
import WhoBenan from './components/WhoBenan';
import DocumentsData from './components/DocumentsData';

function App() {
  const router = createHashRouter([
    {
      path : '' , element:<Layout/> , children : [
      {path : '' , element: <Navigate to ={'home'}/>},
      {path : 'whobenan' , element: <WhoBenan/>},
      {path : 'home' , element: <Home/>},
      {path : 'cars' , element: <CarsForSale/>},
      {path : 'commonquestions' , element: <CommonQuestions/>},
      {path : 'contactus' , element: <ContactUs/>},
      {path : 'contractcheck' , element: <ContractCheck/>},
      {path : 'trialversion' , element: <TrialVersion/>},
      {path :'*' , element:<NotFound/> },
      {path :'DocumentsData' , element:<DocumentsData/> },

  ]}
])
  return <>

  
  <ChakraProvider>
  <RouterProvider router = {router}></RouterProvider>
  </ChakraProvider>
  </>
}

export default App;
