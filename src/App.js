import React, { useReducer, useState } from 'react';
import "./index.css";
import logo from './bloglogo.png';
import Posts from "./Posts.jsx";

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}


const App = () => {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

 const handleChange = event => {
            setFormData({
                name: event.target.name,
                value: event.target.value,
            });
 }

    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)

       
    }
        return (
            <body>
                <div className="wrap">
                    <h1 className="header"> Blog App using React JS
                    </h1>
                    <img src={logo} className="logo" alt="" />
                    
                        {submitting &&
                            <div> You are submitting following information:
                                <ul>
                                    {Object.entries(formData).map(([name, value]) => (
                                        <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                                    ))}
                                </ul>
                            </div>
                        }
                        <form onSubmit={handleSubmit} >
                            <fieldset>
                                <label>
                                    <p>Name</p>
                                    <input name="name" onChange={handleChange} />
                                </label>
                            </fieldset>
                            <button type="submit">Submit</button>
                        </form>
                        <Posts />
                   
                </div>
            </body>
        );
    }

export default App;
