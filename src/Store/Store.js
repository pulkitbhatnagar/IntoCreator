import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Features/Formslice";
export default configureStore({
  reducer: { form: formReducer },
});
