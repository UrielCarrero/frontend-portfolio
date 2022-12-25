import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import '../Style/ContactMe.css'

export const ContactMe = ({language, changeSuccessfullySent}) => {

    const form = useRef();
    const [formInputs, setFormInputs] = useState({
                                                    name:"",
                                                    email:"",
                                                    message:""
                                                })

    const sendEmail = (e) => {
        e.preventDefault();
        changeSuccessfullySent("Envio Exitoso", "successfull")
        /*emailjs.sendForm('service_wwet4d4', 
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
            });*/
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
        
        <div className='form__contactcontainer'>
            <form ref={form} onSubmit={sendEmail}>
                <div>
                    <label>{language==="Español"?"Nombre : ":"Your Name : "}</label>
                    <input onChange={(e)=>handleChange(e)} type="text" name="user_name"  value={formInputs.name} required/>
                </div>
                <div>
                    <label>{language==="Español"?"Correo Electronico : ":"Your Email : "}</label>
                    <input onChange={(e)=>handleChange(e)} type="email" name="user_email"  value={formInputs.email} required/>
                </div>
                <div>
                    <label>{language==="Español"?"Mensaje : ":"Message : "}</label>
                    <textarea onChange={(e)=>handleChange(e)} name="message" value={formInputs.message} required/>
                </div>
                <div>
                    <input type="submit" value={language==="Español"?"Enviar":"Send"} />
                </div>
                
            </form>
        </div>

    </div>
    
    </>)
}