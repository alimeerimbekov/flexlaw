import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../utils/axios";

export const getMyLaws = createAsyncThunk(
    'myLaws/getMyLaws',
    async (filter, {rejectWithValue}) => {
        try {
            const res = await axios(`/laws/${filter._id}`)
            if (res.statusText !== 'OK') {
                throw new Error('ERROR !!!')
            }
            return res.data
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)


const initialState = {
    data: [],
    filter: {},
    error: '',
    status: ''
}

const myLawsSlice = createSlice({
    name: 'myLaws',
    initialState,
    reducers: {},
    extraReducers : {
        [getMyLaws.rejected] : (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getMyLaws.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getMyLaws.fulfilled] : (state, action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }

})


export default myLawsSlice.reducer;
