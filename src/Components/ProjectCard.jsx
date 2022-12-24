import React,{} from 'react'
import Slider from 'react-slick'
import '../Style/ProjectCard.css'
import {IoDocumentAttachOutline} from 'react-icons/io5'
import {HiCursorClick} from 'react-icons/hi'
import {BsGithub} from 'react-icons/bs'

export const ProjectCard = ({language, title, description}) => {

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
            <span className='screenshot__container'>
                <img src="https://imgs.search.brave.com/1G8B3zAmQntXGtJ29VzUMev60IVnRniO1QW0ggJfLWg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pLnJl/ZGQuaXQvN2MxM2E3/b29wenU0MS5qcGc" alt="1"/>
            </span>
            <span className='screenshot__container'>
                <img src="https://imgs.search.brave.com/aUxlRCQEkk6ksZj1KdmLMaLXowPRr6276zN9MNZbmTY/rs:fit:1000:506:1/g:ce/aHR0cHM6Ly9iZ3Iu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA4L25ldy1u/ZXQtMS5qcGc" alt="2"/>
            </span>
        </Slider>
        <div className='card__buttons'>
                <button>
                    <div><IoDocumentAttachOutline className='cardbtn__icon'/></div>
                    {language==="Español"?'Conocer más':'Know more'}
                </button>   
                <button>
                    <div><HiCursorClick className='cardbtn__icon'/></div>
                    {language==="Español"?'Provar Online':'Test Online'}
                </button>
                <button>
                    <div>< BsGithub className='cardbtn__icon'/></div>
                    {language==="Español"?'Revisar en GitHub':'Check on GitHub'}
                </button> 
        </div>
        <div className='content__card'>
            <h3>{title}</h3>
            <div className='card__description'>
                <p className='text__description'>{description}</p>
            </div>
        </div>

        </div>    
    </>)
}