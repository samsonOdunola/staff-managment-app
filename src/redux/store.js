import { configureStore } from "@reduxjs/toolkit";
import states from "./reducers/states";

export default configureStore({
  reducer: { states },
});
