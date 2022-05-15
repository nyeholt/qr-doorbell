import { Action } from "redux";

export const ActionType = {
    SET_USERNAME: "SET_USERNAME",
    LOAD_PLAYERS: "LOAD_PLAYERS"
}

export interface BaseAction extends Action {
    payload: any
}