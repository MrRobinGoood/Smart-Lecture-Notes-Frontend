import React, {useEffect, useState} from 'react';
import s from "./Editor.module.scss"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useDispatch, useSelector} from "react-redux";
import {ChangeText} from "../../redux/reducer";
import {CKEditor} from '@ckeditor/ckeditor5-react';


const CustomEditor = () => {

    const text = useSelector(state => state.Text)
    const [ EditorText , setText ] = useState(text)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ChangeText(EditorText))
    },[EditorText])


    return (
            <div className={s.editor}>
                <h1>Автоматически-сформированный конспект</h1>
                <CKEditor
                    editor={ClassicEditor}
                    onChange={(e,editor) =>{
                        const data = editor.getData()
                        setText(data)
                    }
                    }
                    data={EditorText}
                />
            </div>
    );
};

export default CustomEditor;