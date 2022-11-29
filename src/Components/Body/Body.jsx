import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Checkbox from '../Animações/CheckBox/Checkbox.jsx'
import './Body.css'
import { BodyScroll, BodySection, BodySection2, BodySection3 } from './BodyStyles.jsx'


const Body = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
  return (
    <BodyScroll>
        <BodySection style={{
            'height': '400px'
        }} data-aos='slide-down'>
            <div>
                <h1 className='title'>
                    <span className="title-word title-word-1">Olá!</span>
                </h1>
                <h2>
                    <span className="title-word title-word-2">Como </span>
                    <span className="title-word title-word-3">vai?</span>
                </h2>
            </div>
        </BodySection>
        <BodySection data-aos='zoom-in'>
            <h1 data-aos='fade-up' style={{'cursor': 'default', 'margin': '30px'}}>
                Esta é uma página para testar alguns conceitos de animação!
            </h1>
        </BodySection>
        <BodySection data-aos='fade-right'>
            <h1 className='text' data-aos='fade-up' style={{
                'cursor': 'default'
            }}> Estou feliz de te ver por aqui! </h1>
        </BodySection>
        <BodySection2 >
            <div data-aos-duration='500' data-aos='fade' style={{
                'padding': '10px'
            }} className="b">B</div>
            <div data-aos-duration='600' data-aos='fade' style={{
                'padding': '10px'
            }} className="o">O</div>
            <div data-aos-duration='700' data-aos='fade' style={{
                'padding': '10px'
            }} className="u">U</div>
            <div data-aos-duration='800' data-aos='fade' style={{
                'padding': '10px'
            }} className="n">N</div>
            <div data-aos-duration='900' data-aos='fade' style={{
                'padding': '10px'
            }} className="c">C</div>
            <div data-aos-duration='1000' data-aos='fade' style={{
                'padding': '10px'
            }} className="e">E</div>
            <div data-aos-duration='1100' data-aos='fade' style={{
                'padding': '10px'
            }} className="shadow"></div>
            <div data-aos-duration='1200' data-aos='fade' style={{
                'padding': '10px'
            }} className="shadow-two"></div>
            <div data-aos-duration='1300' data-aos='fade' style={{
                'padding': '0px'
            }} className="basket">⚽</div>
        </BodySection2>
        <BodySection3 data-aos='fade-down'>
            <h1 style={{
                'cursor': 'default'
            }}>Gostou?</h1>
            <Checkbox data-aos='fade-down'/>
        </BodySection3>
    </BodyScroll>
  )
}

export default Body