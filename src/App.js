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

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter your name</label>
                    <input id="name" name="name" type="text" />

                    <label htmlFor="email">Enter your email</label>
                    <input id="email" name="email" type="email" />

                    <label htmlFor="birthdate">Enter your birth date</label>
                    <input id="birthdate" name="birthdate" type="text" />

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

export default FormApp;
