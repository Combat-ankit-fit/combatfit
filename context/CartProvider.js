import React, { useContext, useReducer, useMemo } from 'react';
import useLocalStorageReducer from '../hooks/use-local-storage-reducer';
import { Map } from 'immutable';

// Reducers
const initialCartValues = {
    cartDetails: {},
    cartCount: 0,
    totalPrice: 0,
};

const addItem = (state = {}, product = null, quantity = 1, size = null) => {
    if (quantity <= 0 || !product) return state;

    const identifier = product?.identifier;

    let entry = state?.cartDetails?.[identifier];

    // adding a clothing product first time
    if (product?.type === 'clothing' && !entry) {
        entry = {
            [identifier]: {
                ...product,
                quantity: (entry?.quantity || 0) + Number(quantity),
                selectedSize: size,
            },
        };

        return {
            ...state,
            cartDetails: {
                ...state.cartDetails,
                [identifier]: entry[identifier],
            },
            cartCount: Math.max(0, state.cartCount + Number(quantity)),
        };
    }

    // clothingproduct already exists and size is being changed
    if (product?.type === 'clothing' && entry && size) {
        if (entry?.selectedSize !== size) {
            const existingItemQuantity = entry?.quantity;

            // remove the existing entry and then add the product altogether newly
            const immutableCartDetails = Map(state?.cartDetails);

            const newMap = immutableCartDetails?.delete(identifier);
            entry = {
                [identifier]: {
                    ...product,
                    quantity: Number(quantity),
                    selectedSize: size,
                },
            };
            return {
                ...state,
                cartDetails: {
                    ...newMap?.toJS(),
                    [identifier]: entry[identifier],
                },
                cartCount: Math.max(
                    0,
                    state.cartCount + Number(quantity) - existingItemQuantity
                ),
            };
        }

        if (entry?.selectedSize === size) {
            entry = {
                [identifier]: {
                    ...product,
                    quantity: (entry?.quantity || 0) + Number(quantity),
                    selectedSize: size,
                },
            };

            return {
                ...state,
                cartDetails: {
                    ...state.cartDetails,
                    [identifier]: entry[identifier],
                },
                cartCount: Math.max(0, state.cartCount + Number(quantity)),
            };
        }
    }

    // This is for all non-clothing items
    if (product?.type !== 'clothing') {
        entry = {
            [identifier]: {
                ...product,
                quantity: (entry?.quantity || 0) + Number(quantity),
            },
        };

        return {
            ...state,
            cartDetails: {
                ...state.cartDetails,
                [identifier]: entry[identifier],
            },
            cartCount: Math.max(0, state.cartCount + Number(quantity)),
        };
    }
};

const removeItem = (state = {}, product = null, quantity = 0) => {
    if (quantity <= 0 || !product) return state;

    const identifier = product?.identifier;

    let entry = state?.cartDetails?.[identifier];

    const immutableCartDetails = Map(state?.cartDetails);

    if (entry?.quantity === 1) {
        const newMap = immutableCartDetails?.delete(identifier);
        return {
            ...state,
            cartDetails: newMap?.toJS(),
            cartCount: state?.cartCount - 1,
        };
    }

    if (entry?.quantity !== 1) {
        const newMap = immutableCartDetails?.update(identifier, (item) => {
            const newItem = Map(item).set('quantity', item?.quantity - 1);
            return newItem;
        });

        return {
            ...state,
            cartDetails: newMap?.toJS(),
            cartCount: state?.cartCount - 1,
        };
    }
};

const clearCart = () => {
    return initialCartValues;
};

const cartReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItem(state, action.product, action.quantity, action.size);
        case 'REMOVE_ITEM':
            return removeItem(state, action.product, action.quantity);
        case 'CLEAR_CART':
            return clearCart();
        default:
            return state;
    }
};

// Context + Provider
const CartContext = React.createContext();

export const CartProvider = ({ currency = 'USD', children = null }) => {
    const [cart, dispatch] = useLocalStorageReducer(
        'cart',
        cartReducer,
        initialCartValues
    );

    const contextValue = useMemo(
        () => [
            {
                ...cart,
                currency,
            },
            dispatch,
        ],
        [cart, currency]
    );

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

// Hook
export const useShoppingCart = () => {
    const [cart, dispatch] = useContext(CartContext);

    const addItem = (product, quantity = 1, size = null) =>
        dispatch({ type: 'ADD_ITEM', product, quantity, size });

    const removeItem = (product, quantity = 1) =>
        dispatch({ type: 'REMOVE_ITEM', product, quantity });

    const clearCart = () => dispatch({ type: 'CLEAR_CART' });

    const shoppingCart = {
        ...cart,
        addItem,
        removeItem,
        clearCart,
    };

    return shoppingCart;
};
