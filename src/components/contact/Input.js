import { useDispatch,useSelector } from "react-redux";
import { updatesubmitForm } from "../../store/slices/contact";
import './input.css'
export const ListInput=({List})=>{
    const {submitForm}=useSelector(state=>state.contact)
    return (
        <>
        {
            List.map((val,i)=>{ 
                val={...val,value:submitForm[val.NameInp]}
                return (<Input key={i} {...val}/>)
            })
        
        }
        </>
    )
}
const Input=({type,label,Name,NameInp,SpaceNumCol,value})=>{
    const dispatch=useDispatch();
    const handleChange=(e)=>{
        const {name,value} = e.target;
        dispatch(updatesubmitForm({key:name,value:value}))
    }
    if(label==='textarea') {
        return (
            <div className={"col-md-"+SpaceNumCol}>
                <div className="form-floating">
                    <textarea className="form-control" value={value} onChange={handleChange} name={NameInp}  placeholder={Name} rows="4" required/>
                    <label>{Name}</label>
                </div>
            </div>
        )
    }
    return (
        <div className={"col-md-"+SpaceNumCol}>
            <div className="form-floating">
                <input type={type} className="form-control" value={value} onChange={handleChange} name={NameInp} placeholder={Name} required/>
                <label>{Name}</label>
            </div>
        </div>
    );
}

