

import debounce from "lodash.debounce";
import React from "react";
import { useDispatch } from "react-redux";
import { clearName, findName } from "../../redux/search/slice";


import style from "./Search.module.scss"

export const Search: React.FC = () => {
const [inputSearch, setInputSearch] = React.useState('')
const inputRef = React.useRef<HTMLInputElement>(null);

const dispatch = useDispatch();


const debounce_fun = React.useCallback(
    debounce((value) => {
        dispatch(findName(value) )
        },500)
, [] ); 

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        
            setInputSearch(event.target.value)
            debounce_fun(event.target.value)   
    }

const onClickClearName = () => {
    dispatch(clearName());
    setInputSearch('')
    if(inputRef.current){
        inputRef.current.focus()
    }

}

    return(
        <div className={style.wrapper}>
         <svg className={style.img}  id="Layer_1"  version="1.1" viewBox="0 0 512 512"><path d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"/></svg>
        <input 
        ref={inputRef}
        placeholder="Назва піци"
        value={inputSearch}
        className={style.input}
        onChange={(event) => onChangeInput(event) }
         />
         {
            inputSearch? <svg
            onClick={() => onClickClearName()} 
            className={style.exit}
            data-name="Capa 1"
            id="Capa_1"
            viewBox="0 0 20 19.84"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z"/></svg>
            : ""
         }
         
        
        </div>
    )
}
