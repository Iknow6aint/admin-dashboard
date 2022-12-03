import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: null,
        isFetching: false,
        erorr: false
    },
    reducers: {
        // get all
        getProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        getProductSucess: (state, action) => {
            state.isFetching = false;
            state.product = action.payload
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        },
        //delete
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        deleteProductSucess: (state, action) => {
            state.isFetching = false;
            state.product.splice(
                state.product.findIndex(item => item.id === action.payload),
                1
            )
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        },
        //update
        updateProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.product[state.product.findIndex(item => item.id === action.payload.id)]
                = action.payload.user
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        },
        //add product
        addProductStart: (state) => {
            state.isFetching = true;
            state.erorr = false
        },

        addProductSuccess: (state, action) => {
            state.isFetching = false;
            state.product.push(action.payload)
        },
        addProductFailure: (state) => {
            state.isFetching = false;
            state.erorr = true
        }
    }
})


export const {
    getProductFailure,
    getProductStart,
    getProductSucess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSucess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess
} = productSlice.actions;
export default productSlice.reducer;