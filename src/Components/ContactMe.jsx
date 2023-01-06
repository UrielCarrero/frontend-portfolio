import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../Style/ContactMe.css'
import {RiMailSendFill} from 'react-icons/ri'

export const ContactMe = ({language, changeSuccessfullySent}) => {

    const form = useRef();
    const [formInputs, setFormInputs] = useState({
                                                    name:"",
                                                    email:"",
                                                    message:""
                                                })
    const [inputActive, setInputActive] = useState({
                                                    name:false,
                                                    email:false,
                                                    message:false
                                                    })

    const sendEmail = (e) => {

        e.preventDefault();
        emailjs.sendForm('service_wwet4d4', 
        'template_e8d24qm', 
        form.current, 
        '8BUj3XQ8QgiN5leNt')
            .then((result) => {
                if(language==="Español")
                    changeSuccessfullySent("Envio Exitoso", "successfull")
                else
                    changeSuccessfullySent("Message Sent", "successfull")
                setFormInputs({
                    name:"",
                    email:"",
                    message:""
                })
            }, (error) => {
                if(language==="Español")
                    changeSuccessfullySent("Error, Intentalo de Nuevo", "failed")
                else
                    changeSuccessfullySent("Error, Try it Again", "failed")
                console.log(error.text);
            });
    }

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value

        if(name==="user_name"){
            setFormInputs({...formInputs,name:value})
        }
        else if(name==="user_email"){
            setFormInputs({...formInputs,email:value})
        }
        else if(name==="message"){
            setFormInputs({...formInputs,message:value})
        }

    } 

    return(
    <>
    <div className='contactme__container'>
        <h3>{language==="Español"?'Enviame Un Mensaje!':'Send Me a Message!'}</h3>
        <p>Email: urielcarrerocuadrado@gmail.com</p>
        <div className='col-md-6 col-12 form__contactcontainer'>
            <form ref={form} onSubmit={sendEmail}>
                <div
                 onClick={()=>setInputActive({...inputActive, name:true})}
                 onBlur={()=>{
                    if(formInputs.name===""){
                        setInputActive({...inputActive, name:false})
                    }
                 }}
                 className={`${inputActive.name?'inputform__activecontainer':''} inputform__name inputform__container`}>
                    <label htmlFor='user__name'>{language==="Español"?"Nombre":"Your Name"}</label>
                    <input id="user__name" onChange={(e)=>handleChange(e)} type="text" name="user_name"  value={formInputs.name} required/>
                </div>
                <div                  
                onClick={()=>setInputActive({...inputActive, email:true})}
                 onBlur={()=>{
                    if(formInputs.email===""){
                        setInputActive({...inputActive, email:false})
                    }
                 }}
                 className={`${inputActive.email?'inputform__activecontainer':''} inputform__container`}>
                    <label htmlFor='user__email'>{language==="Español"?"Correo Electronico":"Your Email"}</label>
                    <input id="user__email" onChange={(e)=>handleChange(e)} type="email" name="user_email"  value={formInputs.email} required/>
                </div>
                <div 
                onClick={()=>setInputActive({...inputActive, message:true})}
                onBlur={()=>{
                   if(formInputs.message===""){
                       setInputActive({...inputActive, message:false})
                   }
                }}
                className={`${inputActive.message?'inputform__activecontainer':''} inputform__messsage inputform__container`}>
                    <label htmlFor='message'>{language==="Español"?"Mensaje":"Message"}</label>
                    <textarea id="message" onChange={(e)=>handleChange(e)} name="message" value={formInputs.message} required/>
                </div>
                <div className='messagesend__btn'>
                    <RiMailSendFill />
                    <input type="submit" value={language==="Español"?"Enviar":"Send"} />
                </div>
                
            </form>
        </div>

    </div>
    
    </>)
}