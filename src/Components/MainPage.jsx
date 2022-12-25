import React,{useState, useEffect} from "react";
import '../Style/MainPage.css';
import { Navbar } from "./Navbar";
import { ProjectCard } from "./ProjectCard";
import { ContactMe } from "./ContactMe";
import * as CV from '../Assets/CV Uriel Carrero.pdf'
import * as Resume from '../Assets/Resume Uriel Carrero.pdf'
import * as RestIcon from '../Assets/APIREST.png'
import * as MainImage from '../Assets/Computer3.jpg'
import { AiOutlineHtml5} from 'react-icons/ai';
import {SiJavascript, SiJupyter, SiPython, SiRedux, SiVisualstudiocode, SiTypescript} from 'react-icons/si';
import {DiCss3, DiGit, DiIllustrator, DiPhotoshop} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {BsBootstrap, BsGithub} from 'react-icons/bs'
import {HiOutlineCommandLine, HiOutlineDocumentArrowDown} from 'react-icons/hi2'
import {FaNodeJs} from 'react-icons/fa'


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
    let [language, setLanguage] = useState("Español")
    let [displayRightPopUp, setDisplayRightPopUp] = useState(false)
    let [rightPopUpMessage, setRightPopUpMessage] = useState({
                                                        message:"", 
                                                        icon:<></>
                                                        })

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
                description_es:"Este proyecto consiste en el sitio web de un restaurante, el cual cuenta con una pagina inicial para publicar las principales promociones, una pagina para presentar los platos dentro del menu donde cada plato puede ser revisado a detalle al observar la descripción del plato junto con la correspondiente imagen y los comentarios de los clientes, siendo posible añadir nuevos comentarios a cada plato, adicionalmente cuenta con una pagina de contacto donde se presenta un formulario para enviar retroalimentación del servicio recibido y consultar la información de contacto.",
                description_en:"This project consists of the website of a restaurant, which has a home page to publish the main promotions, a page to present the dishes within the menu where each dish can be reviewed in detail by observing the description of the dish along with the corresponding image and customer comments, being possible to add new comments to each dish, additionally has a contact page where a form is presented to send feedback on the service received and consult the contact information."
        },
        {
                title:'RVY Store',
                description_es:"Este proyecto consiste en un e-commerce que permite ingresar con un usuario registrado en una API o crear un nuevo usuario para comprar los productos deseados (contando con los respectivos metodos de validación de formularios), tiene con 4 paginas para las categorias de los productos (Hombre, Mujer, Joyeria y Electrodomesticos). Se puede seleccionar y revisar los productos favoritos del usuario, añadir al carrito productos y realizar un checkout de los productos a comprar, addicionalmente es posible modificar y añadir la información del usuario para la entrega de los productos.",
                description_en:"This project consists of an e-commerce that allows to enter with a registered user in an API or create a new user to buy the desired products (with the respective methods of validation of forms), has 4 pages for the categories of products (Men, Women, Jewelry and Appliances). You can select and review the user's favorite products, add products to the cart and checkout the products to buy, additionally it is possible to modify and add the user's information for the delivery of the products."
        },
        {
                title:'Netflix Clone',
                description_es:"En este proyecto logre realizar una copia de la interfaz de usuario de Netflix, construyendo la pagina de inicio, login y las paginas de exploración de peliculas y series. Dentro de este proyecto se cuenta con funcionalidades como el inicio de sesión, la selección de peliculas favoritas, la obtención de la descripción de cada una de las peliculas presentadas en las paginas de exploracióm y el seleccionar la pelicula a mirar siendo redirigido a otra pagina para consumir el contenido disponible.",
                description_en:"In this project I managed to make a copy of the user interface of Netflix, building the home page, login and the exploration pages of movies and series. Within this project there are functionalities such as the login, the selection of favorite movies, obtaining the description of each of the movies presented in the exploration pages and selecting the movie to watch being redirected to another page to consume the available content."
        }
        
    ]

    const personalDescription = {
        es:"Hola soy Uriel Carrero! Ingeniero electrónico de 22 años graduado de la universidad Santo Tomas en Bogotá, apasionado por la programación y el diseño de interfaces de usuario interactivas e inteligentes. Cuento con nivel de ingles B2, el cual me ha permitido trabajar en equipos de trabajo internacionales (sin embargo tengo la meta alcanzar el nivel avanzado en los próximos años).",
        en:"Hi, I'm Uriel Carrero! I'm a 22 year old electronic engineer graduated from Santo Tomas University in Bogota, passionate about programming and designing interactive and intelligent user interfaces. I have a B2 level of English, which has allowed me to work in international teams."
    }

    useEffect(()=>{
        if (typeof window !== "undefined" ) {
        window.addEventListener("scroll", () =>{
                setScrolledDown(window.pageYOffset)
        });
        }
    },[])

    return(<>
        <div className={`${scrolledDown>40?'navbar__hide':'navbar__show'} nav__maincontainer`}>
                <Navbar language={language} changeLanguage={changeLanguage} handleClickScroll={handleClickScroll}/>
        </div>
        
        <div className={`${displayRightPopUp?'show__mainpopup':'hide__mainpopup'} main__popup`}>
                {rightPopUpMessage.icon}
                {rightPopUpMessage.message}
                <i onClick={()=>{setDisplayRightPopUp(false)}} className="close__popup ri-close-line"></i>
        </div>

        <div className="mainimg__container">
                <img src={MainImage} alt="main image" />
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
                                {language==="Español"?"Descarga mi CV en formato pdf ":"Download my resume in pdf format "}
                                < HiOutlineDocumentArrowDown />
                        </button>
                </a>
                <h3>{language==="Español"?"Habilidades Tecnicas":"Technical Skills"}</h3>
                <div className='skills__containers'>
                        {skillsCards}
                </div>
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
        </div>
        
        <div className="proyect__container" id="projects">
                <h3>{language==="Español"?"Proyectos":"Projects"}</h3>

                <div style={{width:"100%"}} className="row cardsproject__container">
                        {
                                projects.map((item, index)=>{
                                        let description = language==="Español"?item.description_es:item.description_en

                                        return(
                                        <span key={index} className="col-md-4 col-12 individualcard__container">
                                                <ProjectCard language={language} title={item.title} description={description}/>
                                        </span>
                                        )
                                })
                        }

                </div>
        </div>
        
        {/*
        Netflix-clone

        En este proyecto logre realizar una copia de la interfaz de usuario de Netflix, construyendo la pagina de inicio, login y las paginas de exploración de peliculas y series. Dentro de este proyecto se cuenta con funcionalidades como el inicio de sesión, la selección de peliculas favoritas, la obtención de la descripción de cada una de las peliculas presentadas en las paginas de exploracióm y el seleccionar la pelicula a mirar siendo redirigido a otra pagina para consumir el contenido disponible.

Este proyecto fue desarrollado con la intención de mejorar mis habilidades para construir un layout con un diseño y animaciones determinadas, ya que Netflix cuenta con diferentes elementos que manejan estilos avanzados, al implementar estos elementos conseguí aprender funciones de CSS avanzadas tales como las transiciones de estilo, las CSS queries para un diseño responsive y el uso de gradientes en las imagenes y colores de fondo en los elementos. Adicionalmente aprendi como implementar los event listener que ofrece React y funciones avanzadas que ofrecen los elementos del mismo. Esto mediante la lectura de la documentación disponible en linea.

        E-commerce

        Este proyecto consiste en un e-commerce que permite ingresar con un usuario registrado en una API o crear un nuevo usuario para comprar los productos deseados (contando con los respectivos metodos de validación de formularios), tiene con 4 paginas para las categorias de los productos ( Hombre, Mujer, Joyeria y Electrodomesticos ). Se puede seleccionar y revisar los productos favoritos del usuario, añadir al carrito productos y realizar un checkout de los productos a comprar, addicionalmente es posible modificar y añadir la información del usuario para la entrega de los productos.

Este proyecto fue basado en el funcionamiento de tiendas como adidas y nike para el cual hice uso de la API fakestoreapi, fue mi primer proyecto con Typescript en el cual encontré obstaculos para implementar el consumo de la API y la arquitectura Flux con el uso de Redux ya que se presentan diferentes errores al no saber ni definir de manera adecuada los tipos utilizados en las acciones y los estados manejados dentro de la store, sin embargo logré realizar la implementación de la pagina web con Typescript gracias al estudio de la documentación y los consejos de los desarrolladores de Typescript.


        Confusion Restaurant

        Este proyecto consiste en el sitio web de un restaurante, el cual cuenta con una pagina inicial para publicar las principales promociones, una pagina para presentar los platos dentro del menu donde cada plato puede ser revisado a detalle al observar la descripción del plato junto con la correspondiente imagen y los comentarios de los clientes, siendo posible añadir nuevos comentarios a cada plato, adicionalmente cuenta con una pagina de contacto donde se presenta un formulario para enviar retroalimentación del servicio recibido y consultar la información de contacto.

Este proyecto fue desarrollado como parte de un curso de React en coursera con la Universidad de Hong Kong, a lo largo del desarrollo de este proyecto encontré diferentes desafios debido a que el curso no manejaba librerias ni documentación actualizada de React y Javascript, por lo tanto para conseguir finalizar el proyecto tuve que filtrar la información enseñada para identificar la que no era actualizada y posteriormente implementar de acuerdo a lo investigado las tecnicas enseñadas.

Stack: React JS, Javascript, CSS, HTML, Redux, Fetch
        

        */}
        <div className="contactme__maincontainer" id="contact-me">
                <ContactMe language={language} changeSuccessfullySent={changeSuccessfullySent}/>        
        </div>
        

        </>)
}