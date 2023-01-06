import React,{} from 'react'
import Slider from 'react-slick'
import '../Style/ProjectCard.css'
import {IoDocumentAttachOutline} from 'react-icons/io5'
import {HiCursorClick} from 'react-icons/hi'
import {BsGithub} from 'react-icons/bs'

export const ProjectCard = ({gitHubLink , link, images, language, title, description, showModal, loginInfo}) => {

    const settings = {
        arrows: false,
        centerMode: false,
        autoplaySpeed: 1500,
        infinite: true,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        speed: 700, 
        dots: true, 
        autoplay: true,
        fade: true,
      };


      
    return(<>
        <div className='card__container'>
        <Slider {...settings}>
            {images.map((item, index)=>{
                return(
                <span  key={index} className='screenshot__container'>
                    <img style={{ marginRight: `${item.padding}%`, marginLeft:`${item.padding}%`, width:`${100-(2*item.padding)}%`}} src={item.img} alt={`Proyect_image${index}`}/>
                </span>
                )
            })}
        </Slider>
        <div className='card__buttons'>
                <button onClick={()=>showModal(title)}>
                    <div><IoDocumentAttachOutline className='cardbtn__icon'/></div>
                    {language==="Español"?'Conocer más':'Know more'}
                </button>  
                <a href={link}>
                <button>
                    <div><HiCursorClick className='cardbtn__icon'/></div>
                    {language==="Español"?'Provar Online':'Test Online'}
                </button>
                </a>
                <a href={gitHubLink}>
                <button>
                    <div>< BsGithub className='cardbtn__icon'/></div>
                    {language==="Español"?'Revisar en GitHub':'Check on GitHub'}
                </button> 
                </a> 
        </div>
        <div className='content__card'>

            <h3>{title}</h3>
            <div className='card__description'>
                <p className='text__description'>{description}</p>
            </div>
            {
                loginInfo!==undefined?
                <>
                <h4>{language==="Español"?'Informacion de Ingreso:':'Log In Info:'}</h4>
                <div>
                    <span><b>{language==="Español"?'Usuario: ':'User: '}</b></span><span>{loginInfo.user}</span>
                </div>
                <div style={{marginBottom:"10px"}}>
                    <span><b>{language==="Español"?'Contraseña: ':'Password: '}</b></span><span>{loginInfo.password}</span>
                </div>
                </>:<></>
            }
        </div>

        </div>    
    </>)
}