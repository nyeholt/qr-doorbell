import { AnyAction } from "@reduxjs/toolkit";

interface Data {
    people: { [key: string]: string }
    numbers: number[]
}

const default_data: Data = {
    people: {},
    numbers: []
}


const sampleReducer = (state: Data = default_data, action: AnyAction) => {

    if (action.type === 'ADD_USER') {
        // add user expects a name and address
        const data = action.payload;

        // if we were being strict with typescript, we'd be clearer here!
        const newState = {
            ...state,
            people: {
                ...state.people,
                [data.name]: data.address
            }
        }
        return newState;
    }
    
    return state;
}

export default sampleReducer;