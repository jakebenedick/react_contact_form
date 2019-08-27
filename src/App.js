import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
          }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <p>Contact Me</p>
                <form onSubmit={this.handleSubmit}>
                    <label>First Name</label>
                    <input type="text" id="fname" name="firstname" value={this.state.fname} onChange={this.handleChange} placeholder="Your first name.."/>

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" value={this.state.lname} onChange={this.handleChange} placeholder="Your last name.." />

                    <label>Email</label>
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your email" />

                    <label>Subject</label>
                    <textarea id="subject" name="subject" value={this.state.message} onChange={this.handleChange} placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default App;
