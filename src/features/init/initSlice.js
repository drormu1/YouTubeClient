import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import  {apiService} from './../../api/apiService';


const initialState = {
  user : {
     userId: '',  
     role:''
  }
}

export const callInitAsync = createAsyncThunk(
  'counter/callInitAsync',    
  async (thunkAPI) => {       
    const res = await new apiService().callInitAsync();     
  return res;
})

export const initSlice = createSlice({
  name: 'init',
  initialState,
  reducers: {
    //   saveInitInfo: (state,action) => {},
  },
    extraReducers: (builder)=>{
      builder.addCase(callInitAsync.fulfilled, (state, action) => {       
        state.user.userId = action.payload.userId;
        state.user.role = action.payload.title;
      });
      builder.addCase(callInitAsync.pending, (state, action) => {            
      });
      builder.addCase(callInitAsync.rejected, (state, action) => {            
      }); 
      
      
   
  }

})


//export const { saveInitInfo } = initSlice.actions;
export const userState = (state) => state.init.user;

export default initSlice.reducer;