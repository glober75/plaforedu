import 'antd/dist/antd.css'
import './App.less';

import { Routes, Route, Link } from "react-router-dom";

import EditPage from '../pages/EditPage'
import HeaderGov from '../components/HeaderGov';
import HeaderUser from '../components/HeaderUser';
import HomePage from '../pages/HomePage';
import FooterGov from '../components/FooterGov';

import {
  Layout
} from 'antd'

function App() {

  return (
    <Layout style={{minHeight:'100vh'}}>
      <HeaderGov/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/editor' element={<EditPage/>}/>
      </Routes>
      <FooterGov/>
    </Layout>
  );
}

export default App;
