import React,{useState} from 'react'
import '../Style/Navbar.css'
import * as SpainFlag from '../Assets/spainflag.png'
import * as BritishFlag from '../Assets/britishflag.jfif'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

export const Navbar = ({language, changeLanguage, handleClickScroll}) => {

    const [hoverSelector, setHoverSelector] = useState()
    const [showNavMenu, setShowNavMenu] = useState(false)


    return(<>
    
    <div className='navbar__container'>

        <span onClick={()=>setShowNavMenu(!showNavMenu)} className='navbar__menu'>
            {!showNavMenu?<AiOutlineMenu />:< AiOutlineClose />}
        </span>

        <div className={`nav__options ${showNavMenu?'show__navmenu':'hide__navmenu'} `}>
            <div onClick={()=>{
                setShowNavMenu(false)
                handleClickScroll('about-me')
                }}>
                {language==="Español"?"Acerca de Mi":"About Me"}
            </div>
            <div onClick={()=>{
                setShowNavMenu(false)
                handleClickScroll('projects')
                }}>
                {language==="Español"?"Proyectos":"Projects"}
            </div>
            <div onClick={()=>{
                setShowNavMenu(false)
                handleClickScroll('contact-me')
                }}>
                {language==="Español"?"Contactame":"Contact Me"}
            </div>
        </div>

        <span className='navbar__text'>
            <span onClick={()=>{handleClickScroll('about-me')}}>
                {language==="Español"?"Acerca de Mi":"About Me"}
            </span>
            <span onClick={()=>{handleClickScroll('projects')}}>
                {language==="Español"?"Proyectos":"Projects"}
            </span>
            <span onClick={()=>{handleClickScroll('contact-me')}}>
                {language==="Español"?"Contactame":"Contact Me"}
            </span>
        </span>
        <span className='navbar__icons'>
        <span
        onMouseEnter={()=>{setHoverSelector(true)}} onMouseLeave={()=>{setHoverSelector(false)}} 
        className={`${hoverSelector?'language__selector-hover':'language__selector-hide'} language__selector`}>
            <span onClick={()=>{setHoverSelector(true)}} >
            {
            language==="Español"?
                <> <img style={{height:"1.2rem", borderRadius:"5%"}} src={SpainFlag} alt="SpainFlag"/> Español </>:
                <> <img style={{height:"0.9rem", borderRadius:"5%"}} src={BritishFlag} alt="BritainFlag"/> English </>
            }
            <i className="ri-arrow-down-s-line"></i>
            </span>
            <div 
            className={`${hoverSelector?' options__containerhover':' options__containerhide'} options__container`}>
                <div>
                {
                language==="Español"?
                    <span onClick={()=>{
                                        setHoverSelector(false)
                                        changeLanguage("English")
                                    }}> 
                        <img style={{height:"0.9rem", borderRadius:"5%"}} src={BritishFlag} alt="BritainFlag"/> English 
                    </span>:
                    <span onClick={()=>{
                                        setHoverSelector(false)
                                        changeLanguage("Español")
                                    }}> 
                        <img style={{height:"1.2rem", borderRadius:"5%"}} src={SpainFlag} alt="SpainFlag"/> Español 
                    </span>
                }
                </div>
            </div>
        </span>

        </span>
    </div>

    </>)
}