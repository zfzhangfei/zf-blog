import React from 'react'
import './ImitationPortfolio.scss'
import NavBar from './Components/navbar/NavBar'
import Hero from './Components/hero/Hero'
import Parallax from './Components/parallax/Parallax'
import Services from './Components/services/Services'

export default function ImitationPortfolio() {
    return (
        <div id='ImitationPortfolio'> 
            <section id='Homepage'>
                <NavBar></NavBar>
                <Hero></Hero>
                </section>
            <section id='Services'><Parallax type="services"/></section>
            <section><Services></Services></section>
            <section id='Portfolio'><Parallax type="portfolio"/></section>
            <section>Hero</section>
            <section>Hero</section>
            <section>Hero</section>
            <section>Hero</section>
            <section>Hero</section>
        </div>
    )
}
