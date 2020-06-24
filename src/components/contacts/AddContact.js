import React, {Component} from 'react';
import {Consumer} from "../../context";
import TextInputGroup from "../layout/TesxtInputGroup";
//import {v1 as uuid} from 'uuid';
import axios from 'axios';

class AddContact extends Component {

    state = {
        name:  '',
        email: '',
        phone: '',
        errors: {}
    };

    onChange = event => this.setState({[event.target.name]: event.target.value});

    onSubmit = async (dispatch, event) => {
        event.preventDefault();
        const {name, email, phone} = this.state;
        //check for errors
        if(name === ''){
            this.setState({errors : {name : 'Name is required '}});
            return;
        }
        if(email === ''){
            this.setState({errors : {email : 'Email is required '}});
            return;
        }
        if(phone === ''){
            this.setState({errors : {phone : 'phone is required '}});
            return;
        }

        const newContact = {
            //id: uuid(),
            name,
            email,
            phone
        };

       const res = await  axios.post('https://jsonplaceholder.typicode.com/users', newContact);

        dispatch({type: 'ADD_CONTACT', payload: res.data});




        //clear state after submiteed to clean inputs
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {

        const {name, email, phone, errors} = this.state

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                                <div className="card-body">
                                    <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                        <TextInputGroup
                                            label="Name"
                                            value={name}
                                            placeHolder="Enter name"
                                            name="name"
                                            onChange={this.onChange}
                                            error = {errors.name}
                                        />
                                        <TextInputGroup
                                            label="Email"
                                            type="email"
                                            value={email}
                                            placeHolder="Enter email"
                                            name="email"
                                            onChange={this.onChange}
                                            error = {errors.email}
                                        />
                                        <TextInputGroup
                                            label="Phone"
                                            value={phone}
                                            placeHolder="Enter phone"
                                            name="phone"
                                            onChange={this.onChange}
                                            error = {errors.phone}
                                        />
                                        <input
                                            type="submit"
                                            value="Add Contact"
                                            className="btn btn-light btn-block"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );


    }
}

export default AddContact;