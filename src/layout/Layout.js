import React, {useState} from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar';
import { Container } from './LayoutStyles'



export const Layout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Header toggle={toggle}/>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <main>{children}</main> 
      <Footer/>
    </Container>
  )
}
