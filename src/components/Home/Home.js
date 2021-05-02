import React from 'react';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Projects></Projects>
            <Resume></Resume>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;