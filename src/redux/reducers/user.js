import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {
        inn: ''
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fillUser : (state,action) => {
            state.user = action.payload
        },
        logOutUser : (state,action) => {
            state.user = {login : ''}
        }
    },

})


export const {fillUser, logOutUser} = userSlice.actions
export default userSlice.reducer;
