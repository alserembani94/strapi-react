import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [loaded, setLoaded] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            let response = await fetch("https://strapi-react.herokuapp.com/users");
            if (!response.ok) {
                return;
            }
            let users = await response.json();
            setUsers(users);
            setLoaded(true);
        }
        fetchData();
    }, []);
    
    return (
        <div className="App">
            <header className="App-header">
                {
                    loaded
                    ? users.map((user, index) => {
                        return (<div key={index}>
                            <h1>{user.fullName}</h1>
                            <p>Confirmed: {user.confirmed.toString()}</p>
                            <p>Email: {user.email}</p>
                            <p>Provider: {user.provider}</p>
                        </div>)
                    })
                    : <p>Waiting for API</p>
                }
            </header>
        </div>
    );
}

export default App;

{/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header> */}