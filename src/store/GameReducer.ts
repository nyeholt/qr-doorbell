import { Action, AnyAction } from "@reduxjs/toolkit";
import { ActionType } from "../type/Actions";
import { GameData } from "../type/GameData";
import { ReducerMap } from "../type/ReducerMap";




const default_data : GameData = {
    guesses: {},
    username: "",
    players: [],
    gameState: "INIT"
}

const reducers : ReducerMap<GameData> = {
    [ActionType.SET_USERNAME]: (state: GameData, action: AnyAction) : GameData => {
        console.log("Setting username to ", action);
        return {
            ...state,
            username: action.payload
        }
    }   
}


const gameReducer = (state: GameData = default_data, action: Action) => {
    return reducers[action.type] ? reducers[action.type].call(this, state, action) : state;
}

export default gameReducer;