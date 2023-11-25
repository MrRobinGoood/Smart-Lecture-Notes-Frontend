import React, { useState} from 'react';
import Header from "../../Components/Header/Header";
import {connect, useSelector} from "react-redux";
import {toggleIsFetching} from "../../redux/reducer";
import Loader from "../../UI/loader";
import Editor  from "../../Components/Editor/Editor";
import s from "./EditorPage.module.scss"
const EditorPage = (props) => {
    const [ change, setChange ] = useState(false)
    let button = null;
    const handleClick = () =>{
        setChange(!change)
    }

    if(change){
        button = <div>
            <button onClick={handleClick} className={s.buttonChange}>Сменить на глоссарий</button>
        </div>
    }
    else{
        button = <div>
            <button onClick={handleClick} className={s.buttonChange}>Сменить на расшифровку лекции</button>
        </div>
    }

    return (
        <div>
            <Header/>
            {props.isFetching ? <Loader/> : <div className={s.container}>
                <Editor/>
                <div className={s.changeContainer}>
                    {button}
                    <Change change={change}/>
                </div>
            </div>}
        </div>
    );
};

function Glossary() {
    const FullText = useSelector(state => state.FullText)
    return <textarea readOnly={true} className={s.textarea}>{FullText}</textarea>
}

function OutputText() {
    const GlossaryText = useSelector(state => state.GlossaryText)
    return <textarea readOnly={true} className={s.textarea}>{GlossaryText}</textarea>
}

function Change(props) {
    const change = props.change;
    if (change) {
        return <Glossary/>;
    }
    return <OutputText/>;
}

const mapStateToProps = (state) => ({
    Text: state.Text,
    isFetching: state.isFetching,
    File: state.AudioFile
})

export const EditorPageContainer = connect(mapStateToProps,{toggleIsFetching})(EditorPage)