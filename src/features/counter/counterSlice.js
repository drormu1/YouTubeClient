import { ConstructionOutlined } from '@mui/icons-material'
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import  {apiService} from './../../api/apiService';


const initialState = {
  value: 0,
  load : false,
}

export const getRandomNumber = createAsyncThunk(
    'counter/getRandomNumber',    
    async (thunkAPI) => { 
           
      const res = await new  apiService().getRandomApi();     
    return res;
})


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {    
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder)=>{
    builder.addCase(getRandomNumber.pending, (state, action) => {
      // Add user to the state array
      state.loading = true;
    });
    builder.addCase(getRandomNumber.fulfilled, (state, action) => {
      state.loading = false;
      state.value = action.payload[0]
    });
    builder.addCase(getRandomNumber.rejected, (state, action) => {
      // Add user to the state array
      state.loading = false;
    });    
  },
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount  } = counterSlice.actions

export default counterSlice.reducer