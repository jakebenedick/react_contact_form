import React from 'react';
import './App.css';

class FormApp extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        this.setState({
            res: stringifyFormData(data),
        });
    }

    render() {
        return (
            <div class = "App container">
                <form onSubmit={this.handleSubmit}>
                    <input id="name" name="name" type="text" placeholder = "Name" required/>

                    <input id="email" name="email" type="email" placeholder = "Email" required/>

                    <textarea id="message" name="message" type="text" placeholder = "Leave me a message..." required/>

                    <button>Send data!</button>
                </form>


                {this.state.res && (
                    <div className="res-block">
                        <h3>Data to be sent:</h3>
                        <pre>FormData {this.state.res}</pre>
                    </div>
                )}

            </div>
        );
    }
}

function stringifyFormData(fd) {
    const data = {};
      for (let key of fd.keys()) {
        data[key] = fd.get(key);
    }
    return JSON.stringify(data, null, 2);
  }

export default FormApp;
