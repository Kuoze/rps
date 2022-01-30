/* 
const state = {
    theme: 'dark|light'
};

const themeAction = {
    type: types.theme,
    payload: {
        theme: 'light'
    }
}
*/

import { types } from "../types/types";

export const themeReducer = ( state = { theme: 'light'}, { type, payload }) => {

    switch( type ) {
        case types.theme:
            return {
               ...payload
            }
        default: 
            return state;
    }
}