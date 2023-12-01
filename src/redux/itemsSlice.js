import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        list: [
            {
                productName: `Apple `,
                brand: 'apple',
                price: `$ ${123}`,
                quantity: 1,
                total: `$ ${123}`,
                status: '',
            },
            {
                productName: 'Mango',
                brand: 'Mango',
                price: `$ ${14}`,
                quantity: 2,
                total: `$ ${14}`,
                status: '',
            },
            {
                productName: 'chco',
                brand: 'chco',
                price: `$ ${114}`,
                quantity: 2,
                total: `$ ${114}`,
                status: '',
            },
            {
                productName: 'chciken',
                brand: 'saguna',
                price: `$ ${142}`,
                quantity: 1,
                total: `$ ${142}`,
                status: '',
            },
            {
                productName: 'mutton',
                brand: 'saguna',
                price: `$ ${4}`,
                quantity: 1,
                total: `$ ${4}`,
                status: '',
            },
            {
                productName: 'cake',
                brand: 'harleys',
                price: `$ ${34}`,
                quantity: 3,
                total: `$ ${34}`,
                status: '',
            },
        ],
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload, 'action.payload');
            state.list.push(action.payload);
        },
        approveItem: (state, action) => {
            const { id, updatedItem } = action.payload;
            console.log(action.payload, 'approveItem');
            const index = state.list.findIndex((item, Lid) => Lid === id);
            console.log('updatedItem,', updatedItem, 'index', index);
            state.list[index] = { ...state.list[index], ...updatedItem };
        },
        missingItem: (state, action) => {
            const { id, updatedItem } = action.payload;
            console.log(action.payload, 'missing');
            const index = state.list.findIndex((item, Lid) => Lid === id);
            console.log('updatedItem,', updatedItem, 'index', index);
            state.list[index] = { ...state.list[index], ...updatedItem };
        },
    },
});

export const { addItem, approveItem, missingItem } = itemsSlice.actions;
export default itemsSlice.reducer;
