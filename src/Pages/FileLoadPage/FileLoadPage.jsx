import React from 'react';
import DragDrop from "../../Components/DragDrop/DragDrop";
import {connect} from "react-redux";
import {toggleFile, toggleIsFetching} from "../../redux/reducer";


const FileLoadPage = () => {
    return (
        <div>
            <DragDrop/>
        </div>
    );
};


const mapStateToProps = (state) => ({
    Text: state.Text,
    isFetching: state.isFetching,
    File: state.AudioFile
})

export const FileLoadPageContainer = connect(mapStateToProps,{toggleIsFetching,toggleFile})(FileLoadPage)