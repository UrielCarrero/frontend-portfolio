import React,{useState, useEffect} from "react";
import '../../Style/MainPage.css';
import { Navbar } from "../Navbar";
import { ProjectCard } from "../ProjectCard";
import { ContactMe } from "../ContactMe";
import * as CV from '../../Assets/CV Uriel Carrero.pdf'
import * as Resume from '../../Assets/Resume Uriel Carrero.pdf'
import * as RestIcon from '../../Assets/APIREST.png'
import * as MainImage from '../../Assets/Computer4.jpg'
import { AiOutlineHtml5} from 'react-icons/ai';
import {SiJavascript, SiJupyter, SiPython, SiRedux, SiVisualstudiocode, SiTypescript} from 'react-icons/si';
import {DiCss3, DiGit, DiIllustrator, DiPhotoshop} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {BsBootstrap, BsGithub} from 'react-icons/bs'
import {HiOutlineCommandLine, HiOutlineDocumentArrowDown} from 'react-icons/hi2'
import {HiCursorClick} from 'react-icons/hi'
import {FaNodeJs} from 'react-icons/fa'
import {IoLogoFirebase} from 'react-icons/io5'
import {Modal, ModalHeader, ModalBody} from 'reactstrap';
import Slider from 'react-slick';
import * as RVYImg1 from '../../Assets/RVY Store/HomePage.png'
import * as RVYImg2 from '../../Assets/RVY Store/DetailedProductInfo .png'
import * as RVYImg3 from '../../Assets/RVY Store/Electronics Page.png'
import * as RVYImg4 from '../../Assets/RVY Store/EmailValidation.png'
import * as RVYImg5 from '../../Assets/RVY Store/Favorites.png'
import * as RVYImg6 from '../../Assets/RVY Store/Checkout.png'
import * as RVYImg7 from '../../Assets/RVY Store/MenPage.png'
import * as RVYImg8 from '../../Assets/RVY Store/ModifyUserInfo.png'
import * as RVYImg9 from '../../Assets/RVY Store/Responsive.png'

import * as ConfusionImg1 from '../../Assets/confusion/HomePage.png'
import * as ConfusionImg2 from '../../Assets/confusion/ContactUs.png'
import * as ConfusionImg3 from '../../Assets/confusion/AboutUs.png'
import * as ConfusionImg4 from '../../Assets/confusion/MenuPage.png'

import * as Netflix1 from '../../Assets/netflix-clone/ColPage.png'
import * as Netflix2 from '../../Assets/netflix-clone/ColPage2.png'
import * as Netflix3 from '../../Assets/netflix-clone/Browse.png'
import * as Netflix4 from '../../Assets/netflix-clone/Browse2.png'
import * as Netflix5 from '../../Assets/netflix-clone/Description.png'
import * as Netflix6 from '../../Assets/netflix-clone/Watch.png'



const skillsSize = {
        size: "3rem",
}


const skillsList=[
        {
                name:'HTML',
                icon:<AiOutlineHtml5 className="skills__icon" {...skillsSize}/>
        },
        {
                name:'CSS',
                icon:<DiCss3 className="skills__icon" {...skillsSize}/>   
        },
        {
                name:'JavaScript',
                icon:<SiJavascript className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'ReactJS',
                icon:<GrReactjs className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'TypeScript',
                icon:<SiTypescript className="skills__icon" {...skillsSize}/>
        }
        ,
        {
                name:'NodeJS',
                icon:<FaNodeJs className="skills__icon" {...skillsSize}/>
        }
        ,
        {
                name:'Git',
                icon:<DiGit className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'GitHub',
                icon:<BsGithub className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'Bootstrap',
                icon:<BsBootstrap className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'Redux',
                icon:<SiRedux className="skills__icon" {...skillsSize}/>        
        }
        ,
        {
                name:'RESTful API',
                icon:<img src={RestIcon} className="rest__icon" alt="rest_icon"/>
                //https://icons8.com/icons/set/rest-api
        }
        ,
        {
                name:'Command Line',
                icon:<HiOutlineCommandLine className="skills__icon" {...skillsSize}/>
        }
        ,
        {
                name:'Jupyter',
                icon:<SiJupyter className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'Python',
                icon:<SiPython className="skills__icon" {...skillsSize}/>       
        }
        ,
        {
                name:'Visual Code',
                icon:<SiVisualstudiocode className="skills__icon" {...skillsSize}/>
        }
        ,
        {
                name:'Illustrator',
                icon:<DiIllustrator className="skills__icon" {...skillsSize}/>
        }
        ,
        {
                name:'Photoshop',
                icon:<DiPhotoshop className="skills__icon" {...skillsSize}/>
        }
        
]

export const MainPage = () => {

    let [scrolledDown, setScrolledDown] = useState(0)
    let [mainTextTransition, setMainTextTransition] = useState(false)
    let [language, setLanguage] = useState("English")
    let [displayRightPopUp, setDisplayRightPopUp] = useState(false)
    let [rightPopUpMessage, setRightPopUpMessage] = useState({
                                                        message:"", 
                                                        icon:<></>
                                                        })
    let [isModalOpen, setIsModalOpen] = useState(false)
    let [projectDetailedInfo, setProjectDetailedInfo] = useState({
                                                                        title:'',
                                                                        images:[],
                                                                        description_es:[],
                                                                        description_en:[],
                                                                        gitHubLink:'',
                                                                        link:'',
                                                                        stack:[]
                                                                })
 
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const showModal = (title) => {
        let project = projects.find(item => item.title === title)
        setProjectDetailedInfo(project)
        setIsModalOpen(true)
    }

    const changeLanguage = (language) => {
        setLanguage(language)
    }

    const changeSuccessfullySent = (message, type) => {
        setDisplayRightPopUp(true)
        if(type==="successfull"){
                setRightPopUpMessage({message:message, icon:<i class="check__message ri-check-line"></i>})
        }
        else if(type==="failed"){
                setRightPopUpMessage({message:message, icon:<i class="error__message">!</i>})
        }
        setTimeout(()=>{setDisplayRightPopUp(false)},8000)
    }

    const handleClickScroll = (elementId) => {
        const element = document.getElementById(elementId)

        if(element){
                element.scrollIntoView({behavior: 'smooth'})
        }

    }

    const skillsCards = skillsList.map((item, index)=>{
        return(
                <span key={index} className="icon__container">
                        <div>{item.icon}</div>
                        <div className="icon__name">{item.name}</div>
                </span>
        )
    })

    const softSkills = [
        {es:'amor por el conocimiento', en:'love to knowledge'},
        {es:'perseverante', en:'perseverant'},
        {es:'autodidacta', en:'self taught'},
        {es:'creativo', en:'creative'},
        {es:'mentalidad de crecimiento', en:'growing mindset'},
        {es:'trabajo en equipo', en:'team player'},
    ]

    const nonProfessionalInterest = [
        {es:'Dibujo', en:'Drawing'},
        {es:'Futbol', en:'Soccer'},
        {es:'Perros', en:'Dogs'},
        {es:'Viajes', en:'Trips'},
        {es:'Mindfulness', en:'Mindfulness'},
    ]

    const projects = [
        {
                title:'Confusion Restaurant',
                description_es:
                [
                        "Este proyecto consiste en el sitio web de un restaurante, el cual cuenta con una pagina inicial para publicar las principales promociones, una pagina para presentar los platos dentro del menu donde cada plato puede ser revisado a detalle al observar la descripción del plato junto con la correspondiente imagen y los comentarios de los clientes, siendo posible añadir nuevos comentarios a cada plato, adicionalmente cuenta con una pagina de contacto donde se presenta un formulario para enviar retroalimentación del servicio recibido y consultar la información de contacto.",
                        "Este proyecto fue desarrollado como parte de un curso de React en coursera con la Universidad de Hong Kong, a lo largo del desarrollo de este proyecto encontré diferentes desafios debido a que el curso no manejaba librerias ni documentación actualizada de React y Javascript, por lo tanto para conseguir finalizar el proyecto decidi actualizar las librerias y filtrar la información enseñada para identificar la que no era actual para posteriormente implementar de acuerdo a lo investigado las tecnicas enseñadas."
                ],
                description_en:
                [
                        "This project consists of the website of a restaurant, which has a home page to publish the main promotions, a page to present the dishes within the menu where each dish can be reviewed in detail by observing the description of the dish along with the corresponding image and customer comments, being possible to add new comments to each dish, additionally has a contact page where a form is presented to send feedback on the service received and consult the contact information.",
                        "This project was developed as part of a React course with the University of Hong Kong, throughout the development of this project I found different challenges because the course did not handle libraries or updated documentation of React and Javascript, therefore to get the project completed I decided to update the libraries and filter the information taught to identify what was not current and then implement according to the researched techniques taught."
                ],
                images:
                [
                        {img:ConfusionImg1, padding:0},
                        {img:ConfusionImg2, padding:0},
                        {img:ConfusionImg3, padding:0},
                        {img:ConfusionImg4, padding:32.5},
                ],
                stack:
                [
                        'JavaScript', 'CSS', 'HTML', 'Redux','ReactJS', 'NodeJS', 'Bootstrap'
                ],
                link:'https://confusion-restaurant-uriel.web.app/home',
                gitHubLink:'https://github.com/UrielCarrero/Confusion-Restaurant'
        },
        {
                title:'RVY Store',
                description_es:
                [
                        "Este proyecto consiste en un e-commerce que permite ingresar con un usuario registrado en una API o crear un nuevo usuario para comprar los productos deseados (contando con los respectivos metodos de validación de formularios), tiene con 4 paginas para las categorias de los productos (Hombre, Mujer, Joyeria y Electrodomesticos). Se puede seleccionar y revisar los productos favoritos del usuario, añadir al carrito productos y realizar un checkout de los productos a comprar, addicionalmente es posible modificar y añadir la información del usuario para la entrega de los productos.",
                        "Este proyecto fue basado en el funcionamiento de tiendas como adidas y nike para el cual hice uso de la API fakestoreapi, fue mi primer proyecto con Typescript en el cual encontré obstaculos para implementar el consumo de la API y la arquitectura Flux con el uso de Redux ya que se presentan diferentes errores al no saber ni definir de manera adecuada los tipos utilizados en las acciones y los estados manejados dentro de la store, sin embargo logré realizar la implementación de la pagina web con Typescript gracias al estudio de la documentación y los consejos de los desarrolladores de Typescript."
                ],
                description_en:
                [
                        "This project consists of an e-commerce that allows to enter with a registered user in an API or create a new user to buy the desired products (with the respective methods of validation of forms), has 4 pages for the categories of products (Men, Women, Jewelry and Appliances). You can select and review the user's favorite products, add products to the cart and checkout the products to buy, additionally it is possible to modify and add the user's information for the delivery of the products.",
                        "This project was based on the operation of stores like adidas and Nike for which I made use of the API fakestoreapi, was my first project with Typescript in which I found obstacles to implement the consumption of the API and Flux architecture with the use of Redux as different errors are presented by not knowing or properly define the types used in the actions and states handled within the store, however I managed to implement the website with Typescript thanks to the study of the documentation and advice from Typescript developers."
                ],
                images:
                [
                        {img:RVYImg1, padding:0},
                        {img:RVYImg2, padding:0},
                        {img:RVYImg3, padding:0},
                        {img:RVYImg4, padding:0},
                        {img:RVYImg5, padding:0},
                        {img:RVYImg6, padding:0},
                        {img:RVYImg7, padding:0},
                        {img:RVYImg8, padding:0},
                        {img:RVYImg9, padding:32.5},
                ],
                stack:
                [
                        'JavaScript', 'CSS', 'HTML', 'Redux','ReactJS', 'NodeJS', 'Bootstrap'
                ],
                link:'https://clothes-ecommerce-d82a9.web.app/home',
                gitHubLink:'https://github.com/UrielCarrero/RVY-Store'
        },
        {
                title:'Netflix Clone',
                description_es:
                [
                        "En este proyecto logre realizar una copia de la interfaz de usuario de Netflix, construyendo la pagina de inicio, login y las paginas de exploración de peliculas y series. Dentro de este proyecto se cuenta con funcionalidades como el inicio de sesión, la selección de peliculas favoritas, la obtención de la descripción de cada una de las peliculas presentadas en las paginas de exploracióm y el seleccionar la pelicula a mirar siendo redirigido a otra pagina para consumir el contenido disponible.",
                        "Este proyecto fue desarrollado con la intención de mejorar mis habilidades para construir un layout con un diseño y animaciones determinadas, ya que Netflix cuenta con diferentes elementos que manejan estilos avanzados, al implementar estos elementos conseguí aprender funciones de CSS avanzadas tales como las transiciones de estilo, las CSS queries para un diseño responsive y el uso de gradientes en las imagenes y colores de fondo en los elementos. Adicionalmente aprendi como implementar los event listener que ofrece React y funciones avanzadas que ofrecen los elementos del mismo. Esto mediante la lectura de la documentación disponible en linea."
                ],
                description_en:
                [
                        "In this project I managed to make a copy of the user interface of Netflix, building the home page, login and the exploration pages of movies and series. Within this project there are functionalities such as the login, the selection of favorite movies, obtaining the description of each of the movies presented in the exploration pages and selecting the movie to watch being redirected to another page to consume the available content.",
                        "This project was developed with the intention of improving my skills to build a layout with a certain design and animations, since Netflix has different elements that handle advanced styles, by implementing these elements I managed to learn advanced CSS features such as style transitions, CSS queries for responsive design and the use of gradients in the images and background colors in the elements. Additionally I learned how to implement the event listener that React offers and advanced functions that React elements offer. This by reading the documentation available online."
                ],
                images:
                [
                        {img:Netflix1, padding:0},
                        {img:Netflix2, padding:0},
                        {img:Netflix3, padding:0},
                        {img:Netflix4, padding:0},
                        {img:Netflix5, padding:0},
                        {img:Netflix6, padding:0},
                ],
                stack:
                [
                        'JavaScript', 'CSS', 'HTML', 'Redux','ReactJS', 'NodeJS', 'Bootstrap'
                ],
                link:'https://netflixclone-uriel.web.app',
                gitHubLink:'https://github.com/UrielCarrero/Netflix-Clone'

        }
        
    ]

    const personalDescription = {
        es:"Hola soy Uriel Carrero! Ingeniero electrónico de 22 años graduado de la universidad Santo Tomas en Bogotá, apasionado por la programación y el diseño de interfaces de usuario interactivas e inteligentes. Cuento con nivel de ingles B2, el cual me ha permitido trabajar en equipos de trabajo internacionales (sin embargo tengo la meta alcanzar el nivel avanzado en los próximos años).",
        en:"Hi, I'm Uriel Carrero! I'm a 22 year old electronic engineer graduated from Santo Tomas University in Bogota, passionate about programming and designing interactive and intelligent user interfaces. I have a B2 level of English, which has allowed me to work in international teams."
    }

    const sliderSettings = {
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
      };    

      useEffect(()=>{
        if (typeof window !== "undefined" ) {
                window.addEventListener("scroll", () =>{
                    setScrolledDown(window.pageYOffset)
                });
              }

        setTimeout(setMainTextTransition(true) , 500)
        
        
      },[mainTextTransition])

    return(<>
        <div className={`${scrolledDown>40?'navbar__hide':'navbar__show'} nav__maincontainer`}>
                <Navbar language={language} changeLanguage={changeLanguage} handleClickScroll={handleClickScroll}/>
        </div>
        
        <Modal className='main__modal' isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader style={{fontWeight:"450", textTransform:"capitalize"}} toggle={toggleModal}>{projectDetailedInfo.title}</ModalHeader>
                <ModalBody>
                        <Slider {...sliderSettings}>
                                {projectDetailedInfo.images.map((item, index)=>{
                                        return(
                                        <span key={index} className='modalscreenshot__container'>
                                                <img style={{ marginRight: `${item.padding}%`, marginLeft:`${item.padding}%`, width:`${100-(2*item.padding)}%`}} src={item.img} alt={`Proyect_image${index}`}/>
                                        </span>
                                        )
                                })}
                        </Slider>
                        <div className="modalinput__container">
                                <a href={projectDetailedInfo.link} >
                                <button>
                                        <div><HiCursorClick className='modalbtn__icon'/></div>
                                        {language==="Español"?'Provar Online':'Test Online'}
                                </button>
                                </a>
                                <a href={projectDetailedInfo.gitHubLink} >
                                <button>
                                        <div>< BsGithub className='modalbtn__icon'/></div>
                                        {language==="Español"?'Revisar en GitHub':'Check on GitHub'}
                                </button>
                                </a>
                        </div>
                        {language==="Español"?
                                projectDetailedInfo.description_es.map((item, index)=>{
                                        return(<>
                                                {index===0?<h2 className="modal__title">{"Descripción"}</h2>:<></>}
                                                {index===1?<h2 className="modal__title">{"Desafios y Aprendizajes"}</h2>:<></>}
                                                <div key={index}>
                                                        {item}
                                                </div>
                                        </>
                                        )
                                })
                                :
                                projectDetailedInfo.description_en.map((item, index)=>{
                                        return(<>
                                                {index===0?<h2 className="modal__title">{"Description"}</h2>:<></>}
                                                {index===1?<h2 className="modal__title">{"Challenges & Lessons"}</h2>:<></>}
                                                <div key={index}>
                                                        {item}
                                                </div>
                                        </>

                                        )
                                })
                        }
                        <h3 className="modal__title">Stack</h3>
                        {
                                projectDetailedInfo.stack.map((item, index)=>{
                                        let element = skillsList.find((skill)=>skill.name===item)
           
                                        return(
                                                <span key={index} className="icon__container">
                                                        {
                                                        element===undefined?<>{item}</>:
                                                        <>
                                                        <div>{element.icon}</div>
                                                        <div className="icon__name">{element.name}</div>
                                                        </>
                                                        }

                                                </span>
                                        )


                                })
                        }
                        <span className="icon__container">
                                <div><IoLogoFirebase {...skillsSize}/></div>
                                <div className="icon__name">Firebase</div>  
                        </span>
                </ModalBody>
        </Modal>


        <div className={`${displayRightPopUp?'show__mainpopup':'hide__mainpopup'} main__popup`}>
                {rightPopUpMessage.icon}
                {rightPopUpMessage.message}
                <i onClick={()=>{setDisplayRightPopUp(false)}} className="close__popup ri-close-line"></i>
        </div>

        <div className="mainimg__container">
                {/*<img src={MainImage} alt="main image" />*/}
                <div className="mainimg__text">
                        <div>
                                <div className={`${mainTextTransition?"show__name":"hide__name"} name`}>{"Uriel Carrero"}</div>
                                <div className="personal__title">
                                        
                                        <span className={`${mainTextTransition?"showside__text":"hideleftside__text"} leftside__text`}>{"Front-End Developer"}</span>
                                        <span className="maintext__symbol">{"|"}</span>
                                        <span className={`${mainTextTransition?"showside__text":"hiderightside__text"} rightside__text`}>{language==="Español"?"Ingeniero Electrónico":"Electronic Engineer"}</span>   
                                </div>
                                
                        </div>
                        <button onClick={()=>handleClickScroll("about-me")}>{language==="Español"?"Conoce mi trabajo!":"Let's get started!"}</button>
                </div>
        </div>
        
        <div className="about__container" id="about-me">
                <h3>{language==="Español"?"Acerca de Mi":"About Me"}</h3>
                <span className="about__description">
                <p>
                {            
                        language==="Español"?personalDescription.es:personalDescription.en
                }
                </p>
                </span>
                <a href={language==="Español"?CV:Resume} download={language==="Español"?"CV Uriel Carrero.pdf":"Resume Uriel Carrero.pdf"}>
                        <button className="download__button">
                                < HiOutlineDocumentArrowDown  className="download__icon"/>
                                {language==="Español"?"Descarga mi CV en formato pdf ":"Download my resume in pdf format "}
                        </button>
                </a>
                <h3>{language==="Español"?"Habilidades Tecnicas":"Technical Skills"}</h3>
                <div className='skills__containers'>
                        {skillsCards}
                </div>
                <div className="about__personalinfo row">
                        <span className="soft__skills col-md-6 col-12">
                                <h3>{language==="Español"?"Habilidades Blandas":"Soft Skills"}</h3>
                                <p>
                                {
                                language==="Español"?
                                <ul>
                                        {
                                        softSkills.map((item, index)=>{
                                                return(
                                                        <li key={index}>{item.es}</li>
                                                )
                                        })
                                        }
                                </ul>:
                                <ul>
                                        {
                                        softSkills.map((item, index)=>{
                                                return(
                                                        <li key={index}>{item.en}</li>
                                                )
                                        })
                                        }
                                </ul> 
                                }
                                </p>
                        </span>
                        <span className="col-md-6 col-12">
                                <h3>{language==="Español"?"Intereses No Profesionales":"Non-Professional Interests"}</h3>
                                <p>
                                {
                                language==="Español"?
                                <ul>
                                        {
                                        nonProfessionalInterest.map((item, index)=>{
                                                return(
                                                        <li key={index}>{item.es}</li>
                                                )
                                        })
                                        }
                                </ul>:
                                <ul>
                                        {
                                        nonProfessionalInterest.map((item, index)=>{
                                                return(
                                                        <li key={index}>{item.en}</li>
                                                )
                                        })
                                        }
                                </ul> 
                                }
                                </p>
                        </span>
                </div>
        </div>
        
        <div className="proyect__container" id="projects">
                <h3>{language==="Español"?"Proyectos":"Projects"}</h3>

                <div style={{width:"100%"}} className="row cardsproject__container">
                        {
                                projects.map((item, index)=>{
                                        let description = language==="Español"?item.description_es[1]:item.description_en[1]

                                        return(
                                        <span key={index} className="col-md-4 col-12 individualcard__container">
                                                <ProjectCard gitHubLink={item.gitHubLink} link={item.link} images={item.images} showModal={showModal} language={language} title={item.title} description={description}/>
                                        </span>
                                        )
                                })
                        }

                </div>
        </div>
        
        <div className="contactme__maincontainer" id="contact-me">
                <ContactMe language={language} changeSuccessfullySent={changeSuccessfullySent}/>        
        </div>
        

        </>)
}