import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
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
                    <input type="text" value={this.state.value} onChange={this.handleChange} />

                    <label>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />

                    <label>Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default App;
