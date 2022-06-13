import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name:'contact',
    initialState:{
        listForm:{Form:{title:'',input:null,button:''}},
        submitForm:{Name:'',Email:'',Subject:'',Message:''}
    },
    reducers:{
        setListForm:(state,action)=>{
            state.listForm=action.payload;
        },
        getSubmitForm:(state,action)=>{
            const {key,value}=action.payload
            state.submitForm={...state.submitForm,[key]:value};
        }
    }
})

export default contactSlice.reducer;

export const {setListForm,getSubmitForm} =contactSlice.actions;

export const updatesubmitForm=(value)=>(dispatch)=>{
    dispatch(getSubmitForm(value));
}

export const fetchContactForm=(findLanguage,findJob)=>(dispatch)=>{
    let api={
        Form:{
            "title":'Contact me!',
            "input":[
                {"type":"text","Name":"Name","NameInp":"Name","SpaceNumCol":6},
                {"type":"email","Name":"Email","NameInp":"Email","SpaceNumCol":6},
                {"type":"text","Name":"Subject","NameInp":"Subject","SpaceNumCol":12},
                {"label":"textarea","Name":"Message","NameInp":"Message","SpaceNumCol":12}
            ],
            "button":"Send Message!"
        },
        Image:"base64/155"
    }
    dispatch(setListForm(api))
}

