import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "../../utils/axios";

export const getLaws = createAsyncThunk(
    'laws/getLaws',
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios('/laws')
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

const lawsSlice = createSlice({
    name: 'laws',
    initialState,
    reducers: {},
    extraReducers : {
        [getLaws.rejected] : (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getLaws.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getLaws.fulfilled] : (state, action) => {
            state.status = 'done'
            state.data = action.payload
        }
    }

})


export default lawsSlice.reducer;
