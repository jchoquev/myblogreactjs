import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name:'languages',
    initialState:{
        list:[],
        listNavLanguage:[]
    },
    reducers:{
        setLanguageList:(state,action)=>{
            state.list=action.payload;
        },
        setListNavLanguage:(state,action)=>{
            state.listNavLanguage=action.payload;
        }
    }
})

export const {setLanguageList,setListNavLanguage} =languageSlice.actions;

export default languageSlice.reducer;

export const fetchAllLanguage=(findLanguage)=>(dispatch)=>{
    let api=[
        {  
            "_Id":"asdasda6sd4as1",
            "Name":"es",
            "ListNav":[
                {"_Id":"abcrsd665sdasd1","Name":"Quien soy","Url":"about",IsNav:true},
                {"_Id":"abcrsd665sdasd2","Name":"Mis Habilidades","Url":"myskills",IsNav:true},
                {"_Id":"abcrsd665sdasd3","Name":"Mis Trabajos","Url":"works",IsNav:true},
                {"_Id":"abcrsd665sdasd4","Name":"Contactame","Url":"contact",IsNav:false},
                {"_Id":"abcrsd665sdasd5","Name":"Blog","Url":"posts",IsNav:true}
            ]
        },
        {  
            "_Id":"asdasda6sd4as2",
            "Name":"en",
            "ListNav":[
                {"_Id":"abcrsd665sdasd1","Name":"About","Url":"about",IsNav:true},
                {"_Id":"abcrsd665sdasd2","Name":"My Skills","Url":"myskills",IsNav:true},
                {"_Id":"abcrsd665sdasd3","Name":"Works","Url":"works",IsNav:true},
                {"_Id":"abcrsd665sdasd4","Name":"Contact","Url":"contact",IsNav:false},
                {"_Id":"abcrsd665sdasd5","Name":"Posts","Url":"posts",IsNav:true}
            ]
        }
    ]
    dispatch(setLanguageList(api))
    dispatch(setListNavLanguage(api.find(val=>val.Name===findLanguage).ListNav))
}