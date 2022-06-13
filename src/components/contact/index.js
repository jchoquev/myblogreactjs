import { fetchContactForm } from "../../store/slices/contact";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { ListInput } from "./Input";

const Contacts=()=>{
    const {language,job}=useParams();
    const dispatch=useDispatch();
    const {listForm:{Form:{button:btnName,input:InputList,title}}}=useSelector(state=>state.contact)
    
    useEffect(()=>{
        dispatch(fetchContactForm(language,job));
    },[dispatch,language,job])

    const handleSubmit=(e)=>{
        e.preventDefault();
        
    }
    return(
        <div className="modal fade" id="Contact"  aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form className="row g-3 needs-validation" id="formContact" onSubmit={handleSubmit}>
                        <ListInput List={InputList||[]}/>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="submit" form="formContact" className="btn btn-primary">{btnName}</button>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;