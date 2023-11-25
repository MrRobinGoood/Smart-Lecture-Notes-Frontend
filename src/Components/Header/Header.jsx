import React from 'react';
import {Link} from "react-router-dom";
import s from "./Header.module.scss"
import {useSelector} from "react-redux";
const Header = () => {

    const text = useSelector(state => state.Text)
    function exportHTML(){
        let header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
            "xmlns:w='urn:schemas-microsoft-com:office:word' "+
            "xmlns='http://www.w3.org/TR/REC-html40'>"+
            "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
        let footer = "</body></html>";
        let sourceHTML = header+text+footer;
        let source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        let fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'document.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }

    return (
        <header className={s.header}>
            <img src="/geekbrains-logo.png" alt="" className={s.img}/>
            <navbar>
                <Link to="/">
                    <button className={s.buttonBack}>Вернуться к выбору аудио-файла</button>
                </Link>
            </navbar>
            <button className={s.buttonDownload} onClick={exportHTML}>Скачать конспект</button>
        </header>
    );
};

export default Header;