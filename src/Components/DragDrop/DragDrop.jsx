import s from "./DragDrop.module.scss"
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {toggleFile} from "../../redux/reducer";
import {toggleIsFetching,downloadText,toggleGlossaryText,toggleFullText} from "../../redux/reducer";
import axios from "axios";

const DragDrop = () => {
    const [ drag,setDrag ] = useState(false);
    const [ disabled,setDisabled ] = useState(false)
    const dispatch = useDispatch();
    const inputRef = React.useRef(null);
    const navigate = useNavigate()
    const AudioFile = useSelector(state => state.AudioFile)
    function dragStartHandler(e) {
        e.preventDefault()
        setDrag(true)
    }
    function dragLeaveHandler(e) {
        e.preventDefault()
        setDrag(false)
    }

    function onDropHandler (e)  {
        e.preventDefault()
        dispatch(toggleFile(e.dataTransfer.files[0]))
        setDrag(false)
        setDisabled(true)
    }
    function handleChange (e) {
        e.preventDefault();
        dispatch(toggleFile(e.target.files[0]))
        setDisabled(true)
    }

    const onButtonClick = () => {
        inputRef.current.click();
    };

    const handleClick = async (e) =>{
        e.preventDefault()
        dispatch(toggleIsFetching(true))
        const formData = new FormData()
        formData.append("file",AudioFile)
        navigate("/textEditor")
        try{
            await axios({
                method: "post",
                url: "http://127.0.0.1:8000/audio",
                data: formData,
                headers: { "Content-Type": "form-data" },
            }).then(response =>{
                    dispatch(downloadText(response.data.summary))
                    console.log(response)
                    dispatch(toggleIsFetching(false))
                    dispatch(toggleFullText(response.data.raw))
                    dispatch(toggleGlossaryText(response.data.glossary))
                }
            )
        } catch (error){
            console.log(error)
        }
    }


    return (
            <div className={s.dragDrop}>
                {drag
                    ? <div
                        onDragStart={e=> dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                        onDrop={e => onDropHandler(e)}
                        className={s.dropAreaAfter}>
                        Отпустите файлы, чтобы загрузить их</div>
                    : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}
                     className={s.dropArea}>
                        <input ref={inputRef} type="file" className={s.DragInput} onChange={handleChange} accept=".mp3" multiple={false}/>
                        <button className={s.DragButton} onClick={onButtonClick}>Нажмите или перетащите файл в область</button>
                    </div>
                }
                <em className={s.em}>(Можно загрузить лишь один файл за раз для ускорения процесса)</em>
                {disabled  ?
                    <ul className={s.text}>
                    <li>Файл :  {AudioFile.name}</li>
                    <li>Размер : {AudioFile.size}кб</li>
                    </ul>
                    :
                    <div className={s.text1}>Вы не загрузили ни один файл</div>
                }
                {disabled ?
                    <button type="submit" onClick={handleClick} className={s.loadButton}>Отправить аудио-файл на обработку</button>
                    : <div></div>
                }
            </div>
    );
};

export default DragDrop;