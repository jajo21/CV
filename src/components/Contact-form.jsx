import React, {useRef, useState, useEffect} from 'react'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();
    const [sent, setSent] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    });

    useEffect(() => {
        if(watch('name') !== '' || watch('email') !== '' || watch('message') !== '') {
            setSent(false);
        }
    }, [watch('name'), watch('email'), watch('message')])

    const sendEmail = (data, e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'jjakobsson.se', form.current, 'q1LaHj6VMf8SM_Nct')
            .then((result) => {
                console.log(result.text);
                if(result.text == 'OK') {
                    setSent(!sent);
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div>
            <form
                name="email-form"
                ref={form}
                className='email-form'
                onSubmit={handleSubmit(sendEmail)}>
                <label htmlFor="name">Namn</label> <br />
                <input
                    {...register("name", {
                        required: "Fältet är obligatoriskt."
                    })}
                    type="text"
                    name="name"
                />
                <p className='error'>{errors.name?.message}</p>

                <label htmlFor="email">E-mail</label> <br />
                <input
                    {...register("email", {
                        required: "Fältet är obligatoriskt.",
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Vänligen skriv in en giltig email-address.'
                        }
                    })}
                    type="text"
                    name="email"
                />
                <p className='error'>{errors.email?.message}</p>

                <label htmlFor="message">Meddelande</label> <br />
                <textarea
                    {...register("message", {
                        required: "Fältet är obligatoriskt."
                    })}
                    name="message"
                />
                <p className='error'>{errors.message?.message}</p>

                <button className='send-button' type='submit'>Skicka</button>

                {sent && 
                    <div className='message-sent'>
                        <p>Tack så mycket för ditt meddelande! Jag svarar inom kort.</p>
                    </div>
                }
                
            </form>
        </div>
    )
}

export default ContactForm;