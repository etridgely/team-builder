import React, { useState } from "react";

const Form = props => {
    const [newMember, setNewMember] = useState({ name: "", email: "", role: ""});
    const changeHandler = event => {
        console.log(event.target.value);
        setNewMember({...newMember, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        const newTeammate = {
            ...newMember,
            id: Date.now()
        };
        props.addNewTeammate(newTeammate);
        setNewMember({ name: "", email: "", role: ""});
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Name</label>
            <input 
                type="text"
                name="name"
                placeholder="Please enter your name"
                value={newMember.name}
                onChange={changeHandler}
            />
            <label htmlFor="email">Email</label>
            <input 
                type="text"
                name="email"
                placeholder="Please enter your email"
                value={newMember.email}
                onChange={changeHandler}
            />
            <label htmlFor="role">Role</label>
            <input 
                type="text"
                name="role"
                placeholder="What's your role?"
                value={newMember.role}
                onChange={changeHandler}
            />
            <button type="submit">Add Teammate</button>
        </form>
    );
};

export default Form;