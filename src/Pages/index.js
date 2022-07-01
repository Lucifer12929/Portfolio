import React,{useState} from 'react'
import {Fragment} from 'react';
import About from '../components/AboutSection'
import Contact from '../components/ContactSection'
import HeroSection from '../components/HomeSection'
import Navbar from '../components/Navbar'
import Portfolio from '../components/PortfolioSection'
import Sidebar from '../components/Sidebar'
import Skills from '../components/SkillsSection'
import './MainPage.css'

function Main() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        console.log(isOpen)
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <div style={{overflowY:"scroll", height:"0px"}}></div> 
            <HeroSection />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </>
    )
}

export default Main
