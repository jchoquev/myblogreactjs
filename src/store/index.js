import { configureStore } from "@reduxjs/toolkit";
//reducers
import languages from "./slices/languages";
import contact from "./slices/contact";
export default configureStore({
    reducer:{
        languages,contact
    }
})