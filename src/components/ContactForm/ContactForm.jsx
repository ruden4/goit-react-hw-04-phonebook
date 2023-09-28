import css from './ContactForm.module.css';

import { useState } from 'react';

export function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const reset = () => {
        setName('')
        setNumber('')
    }
    const handleInput = e => {
        const {name, value} = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setNumber(value)
                break;
            default:
                break;
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number}); 
        reset();
    };
    
     return (
            <form className={css.form} onSubmit={handleSubmit}> 
                <label className={css.label}>
                    Name
                    <input
                        onChange={handleInput}
                        value={name}
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                 </label> 
                 <label className={css.label}>Number
                    <input
                        onChange={handleInput}
                        value={number}
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button className={css.addBtn}>Add Contact</button>
            </form>
            )
}

