import React from 'react';
import Header from '../header';
//import Main from '../main';
import Footer from '../footer';
import Aboutme from '../aboutme';
import Skills from '../skills';
import Portfolio from '../portfolio';
import Contacts from '../contact';
import Blog from '../blog';
import ExtraFooter from '../extrafooter';
import Carousel from '../carousel';
import VerticalLinearStepper from '../stepper';

const HomePage = () => {
    return(
        <div>
            <Header />
            <Carousel />
            <Footer />
        </div>
    )
}

const AboutmePage = () => {
    return(
        <div>
            <Header />
            <Aboutme />
            <VerticalLinearStepper />
            <Footer />
        </div>
    )
}
const SkillsPage = () => {
    return(
        <div>
            <Header />
            <Skills />
            <ExtraFooter />
        </div>
        
    )
}

const PortfolioPage = () => {
    return(
        <div>
            <Header />
            <Portfolio />
            <Footer />
        </div>
    )
}

const ContactsPage = () => {
    return(
        <div>
            <Header />
            <Contacts />
            <Footer />
        </div>
    )
}

const BlogPage = () => {
    return(
        <div>
            <Header />
            <Blog />
            <Footer />
        </div>
    )
}

export {HomePage, AboutmePage, SkillsPage, PortfolioPage, ContactsPage, BlogPage};