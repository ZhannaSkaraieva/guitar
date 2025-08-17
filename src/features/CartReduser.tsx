import React from "react";

const initialState = {
  guitars: [],
};

interface Guitar {
  id: number;
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
  payload: { id: number };
}

interface IncreaseQuantityAction {
  type: "Increase";
  payload: { id: number };
}

interface DecreaseQuantityAction {
  type: "Decrease";
  payload: { id: number };
}

type Action =
  | AddGuitarAction
  | RemoveGuitarAction
  | IncreaseQuantityAction
  | DecreaseQuantityAction;

export const totalProductPrice = (guitars: Guitar[]) => {
  return guitars.reduce(
    (total, guitar) => total + guitar.price * (guitar.quantity || 1),
    0,
  );
};



const CartReduser = (state: State, action: Action): State => {
  switch (action.type) {
    case "Add":
      const cartProduct = state.guitars.find(
        (guitar: { id: number }) => guitar.id === action.payload.id,
      );
      if (cartProduct) {
        return {
          ...state,
          guitars: state.guitars.map((guitars) =>
            guitars.id === action.payload.id
              ? { ...guitars, quantity: guitars.quantity + 1 }
              : guitars,
          ),
        };
      } else {
        return {
          ...state,
          guitars: [...state.guitars, { ...action.payload, quantity: 1 }],
        };
      }

    case "Delete":
      return {
        ...state,
        guitars: state.guitars.filter(
          (guitar) => guitar.id !== action.payload.id,
        ),
      };

    case "Increase":
      return {
        ...state,
        guitars: state.guitars.map((guitar) =>
          guitar.id === action.payload.id
            ? { ...guitar, quantity: guitar.quantity + 1 }
            : guitar,
        ),
      };

    case "Decrease":
      return {
        ...state,
        guitars: state.guitars.map((guitar) =>
          guitar.id === action.payload.id && guitar.quantity > 1
            ? { ...guitar, quantity: guitar.quantity - 1 }
            : guitar,
        ),
      };

    default:
      return state;
  }
};

export default CartReduser;
