import { createSlice } from '@reduxjs/toolkit';
import { getUsersSuccessAction } from '../user/actions/ActionCreators'

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     value: 0,
//   },
//   reducers: {
//     increment: state => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1;
//     },
//     decrement: state => {
//       state.value -= 1;
//     },
//     incrementByAmount: (state, action) => {
//       state.value += action.payload;
//     },
//   },
// });

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
let masterResponse = null;

export const httpRequest = (
  successAction,
  failedAction,
  method = 'GET'
  , api) => async dispatch => {

    // await
    // setTimeout(() => {
    //   dispatch(incrementByAmount(amount));
    // }, 1000);
    const app_id = '5ffc8db5e24832254e0c829e'
    let fetchOptions = {
      method: method,
      headers: {
        'app-id': app_id,
      },
    }
    const BASE_URL = 'https://dummyapi.io/data/api';
    let url = BASE_URL + api
    try {
      fetch(url.toString(), fetchOptions)
        .then(response => response.json())
        .then(data => {
          masterResponse = data
          dispatch(successAction(data))

          console.log(masterResponse, 'then used')
        });



      //  then((response,err)=>{
      //     console.log(response,'then used')
      //     // dispatch(callback.success(responseData))

      //     // err => dispatch(fetchOffersError(err))
      //   }

      // )

      // const responseData = await response.json()
      // if(responseData){

      // }
      // console.log(responseData,'result from the dummy')

    } catch (error) {
      dispatch(failedAction(error))
      // dispatch(callback.failed(error))


    }

  };


const httpChain = async (dispatch, callback, api) => {

}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`

// export const selectCount = state => state.counter.value;

// export default counterSlice.reducer;
