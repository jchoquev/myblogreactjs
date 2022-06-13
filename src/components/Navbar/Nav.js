import React,{useEffect} from "react";
import './Nav.css';
import { NavLink,Link,useParams } from "react-router-dom";
import { fetchAllLanguage } from "../../store/slices/languages";
import { useDispatch,useSelector } from "react-redux";

const Navbar=()=>{
    const {language,job}=useParams();
    const dispatch=useDispatch();
    const {list:languages,listNavLanguage}=useSelector(state=>state.languages)

    useEffect(()=>{
        dispatch(fetchAllLanguage(language));
    },[dispatch,language])

    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to={`/${language}/${job}`}>
                    <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
                    JuanCho
                </Link>                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end navbar--text" id="navbarContent">
                    <ul className="navbar-nav">
                        <ListNav List={listNavLanguage} language={language} job={job}/>
                        <LanguageDropdown List={languages} language={language} job={job}/>
                        <li className="nav-item">
                            <Link className="nav-link" to="?"><i className="fas fa-adjust"></i> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
} 

const ListNav=({List,language,job})=>{
    return List.map((val)=>{
        if(val.IsNav) return <ListNavLink key={val._Id} Name={val.Name} Url={`/${language}/${job}/${val.Url}`}/>
        return <ListLink key={val._Id} Name={val.Name} Url={`/${language}/${job}/${val.Url}`}/>
    })
}


const ListNavLink=({Url,Name})=>{
    return (
        <li className="nav-item">
            <NavLink className={({ isActive }) => isActive ?'nav-link isActive' : 'nav-link'} to={Url}>{Name}</NavLink>
        </li>
    );
}

const ListLink=({Url,Name})=>{
    return (
        <li className="nav-item">
            <Link className={'nav-link'} to={Url} data-bs-toggle="modal" data-bs-target="#Contact">{Name}</Link>
        </li>
    );
}

const LanguageDropdownLink=({List,job})=>{
    const dispatch=useDispatch();
    const ChangeLanguage=(lang)=>{
        dispatch(fetchAllLanguage(lang));
    }
    return (List.map((val)=>{
        return (
            <li key={val._Id}><Link className="dropdown-item" onClick={()=>ChangeLanguage(val.Name)} to={(`/${val.Name}/${job}`).toLowerCase()}>{(val.Name).toUpperCase()}</Link></li>
        );
    }));
}

const LanguageDropdown=({List,job})=>{
    return(
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="?" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="fas fa-globe"></i>
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <LanguageDropdownLink List={List} job={job}/>
            </ul>
        </li>
    )
}


export default Navbar;
