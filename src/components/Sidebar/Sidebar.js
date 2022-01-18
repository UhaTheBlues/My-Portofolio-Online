import React from 'react'
import styled from "styled-components";
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
} from './SidebarStyles'

const Sidebar = ({isOpen, toggle}) => {

    const router = useRouter();
    
    return (
       <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                <Link href="#aboutme">
                    <SidebarLink>Tentang Saya</SidebarLink>
                </Link>
                <Link href="#sertifikat">
                    <SidebarLink>Sertifikat</SidebarLink>
                </Link>
                <Link href="#projects">
                    <SidebarLink>Projects</SidebarLink>
                </Link>
                <Link href="#projectsvideo">
                    <SidebarLink>Video</SidebarLink>
                </Link>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
