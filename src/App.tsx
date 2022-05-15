import React, { useState } from 'react';
// import logo from './logo.svg';

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { GameData } from './type/GameData';
import { ActionType } from './type/Actions';
import UserGame from './components/UserGame';

function App() {

    const [username, setUsername] = useState("");

    const user = useSelector((state: GameData) => state.username);
    const dispatch = useDispatch();

    const login = () => {
        return {
            type: ActionType.SET_USERNAME,
            payload: username
        };
    }

    return (
        <div className="App container">
            {
                !user && <div>
                    <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    {username && username.length > 3 &&
                        <button onClick={() => {
                            setUsername("");
                            return dispatch(login())
                        }}>Login</button>
                    }
                </div>
            }
            {
                user && <UserGame />
            }
        </div>
    );
}

export default App;
