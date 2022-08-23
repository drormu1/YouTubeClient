import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import  {apiService} from './../../api/apiService';

const initialState = {
  term: '',
  results :'',
  activeMenuItem:''
}

export const callSearchAsync = createAsyncThunk(
  'counter/callSearchAsync',    
  async (thunkAPI) => {       
    const res = await new apiService().callSearchAsync();     
  return res;
})

export const operationsSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    saveTerm: (state, action) => { 
      console.log(action.payload);
      state.term =action.payload;
    },    
    saveActiveMenuItem: (state, action) => {
      console.log('inside reeducer saveActiveMenuItem  ' +action.payload );
      state.term = '';
      state.activeMenuItem = action.payload;
    },     
  },
  extraReducers: (builder)=>{
    builder.addCase(callSearchAsync.fulfilled, (state, action) => {       
      state.results = action.payload;
    });
    builder.addCase(callSearchAsync.pending, (state, action) => {            
    });
    builder.addCase(callSearchAsync.rejected, (state, action) => {            
    }); 
  }
})
// Action creators are generated for each case reducer function
export const { saveTerm, saveResults, saveActiveMenuItem } = operationsSlice.actions
export const operationsState = (state) => state.operations;

export const termState = (state) => state.operations.term;
export const resultsState = (state) => state.operations.results;
export const activeMenuItemState = (state) => state.operations.activeMenuItem;

export default operationsSlice.reducer