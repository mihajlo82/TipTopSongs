import React from 'react'
import Header from './header/Header';
import mainStyle from './Main.module.css';
import CustomizedTables from './table/CustomizedTables';

const Main = () => {
  return (
   <main className={mainStyle.mainWrapp}>
     <Header />
     <CustomizedTables />
   </main>
  )
}
export default Main