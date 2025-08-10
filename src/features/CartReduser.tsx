import React from 'react'

const initialState = {
    guitars: []
};

interface Guitar {
    id: string;
    name: string;
    quantity: number;
    [key: string]: any;
}

interface State {
    guitars: Guitar[];
}

interface AddGuitarAction {
    type: "Add";
    payload: Guitar;
}

interface RemoveGuitarAction {
    type: "Delete";
    payload: { id: string };
}

interface IncreaseQuantityAction {
    type: "Increase";
    payload: { id: string };
}

interface DecreaseQuantityAction {
    type: "Decrease";
    payload: { id: string };
}

type Action =
    | AddGuitarAction
    | RemoveGuitarAction
    | IncreaseQuantityAction
    | DecreaseQuantityAction;

const CartReduser = (state: State, action: Action): State => {
    switch (action.type) {
      
        case "Add":
            return {
                ...state,
                guitars: [...state.guitars, action.payload],
            }
        
            ;
        
        case "Delete":
            
        
        case "Increase":

            
        
        case "Decrease":
            
        
        default:
            return state;
    }
            
}

export default CartReduser