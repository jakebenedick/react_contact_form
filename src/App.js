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
            mailSent: false,
            error: null
          }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.fname + ", " + this.state.lname);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <p>Contact Me</p>
                
                <form onSubmit={this.handleSubmit}>

                <label>First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."
                    value={this.state.fname}
                    onChange={e => this.setState({ fname: e.target.value })}
                />

                <label>Last Name</label>
                <input type=" text" id="lname" name="lastname" placeholder="Your last name.."
                    value={this.state.lname}
                    onChange={e => this.setState({ lname: e.target.value })}
                />

                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                />


                <label>Message</label>
                <textarea id="message" name="message" placeholder="Write something.."
                    onChange={e => this.setState({ message: e.target.value })}
                    value={this.state.message}
                ></textarea>

                <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default App;
