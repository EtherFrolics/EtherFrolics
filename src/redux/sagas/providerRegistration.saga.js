import { takeLatest } from "@redux-saga/core/effects";
import axios from "axios";

function* postProvider(action) {
    try {
      yield axios.post('/api/provider', action.payload);
    } catch (error) {
      console.log('Error in providerRegistration saga', error);
    }
  }
  

function* putProviderAddress(action) {
  try {
    yield axios.put('/api/provider/address', action.payload)
  } catch (error) {
    console.log('Error in providerResgistration saga, putProviderAddress', error);
  }
}

function* addWorkHistoryItem(action) {
  try {
    yield axios.post('/api/provider/workhistoryitem', action.payload)
  } catch (error) {
    console.log('Error in providerResgistration saga, addWorkHistoryItem', error);
  }
}

function* putWorkHistory(action) {
  try {
    yield axios.put('/api/provider/workhistory', action.payload)
  } catch (error) {
    console.log('Error in providerResgistration saga, addWorkHistory', error);
  }
}


  function* providerRegistrationSaga() {
    yield takeLatest('POST_PROVIDER_GENERAL', postProvider);
    yield takeLatest('PUT_PROVIDER_ADDRESS', putProviderAddress);
    yield takeLatest('ADD_WORK_HISTORY_ITEM', addWorkHistoryItem);
    yield takeLatest('PUT_WORK_HISTORY', putWorkHistory);
   
  }
  
  export default providerRegistrationSaga;