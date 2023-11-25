import {DOWNLOAD_TEXT, TOGGLE_IS_FETCHING,FILE_LOAD,CHANGE_TEXT,FULLTEXT_TEXT,GLOSSARY_TEXT} from "../consts";


const initialState = {
    Text: "Текст",
    isFetching: true,
    AudioFile: null,
    GlossaryText: "Глоссарий",
    FullText: "Чистый текст лекции"
}



export const Reducer = (state = initialState, action) => {
    switch (action.type){
        case DOWNLOAD_TEXT:
            return {...state, Text: action.Text}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case FILE_LOAD:
            return {...state, AudioFile: action.AudioFile}
        case CHANGE_TEXT:
            return {...state,Text: action.Text}
        case GLOSSARY_TEXT:
            return {...state,GlossaryText: action.GlossaryText}
        case FULLTEXT_TEXT:
            return {...state,FullText: action.FullText}
        default:
            return state

    }
}


export const downloadText = (Text) => ({type: DOWNLOAD_TEXT, Text})
export const toggleFile = (AudioFile) => ({type: FILE_LOAD, AudioFile})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const ChangeText = (Text) => ({type: CHANGE_TEXT, Text})
export const toggleFullText = (FullText) => ({type:FULLTEXT_TEXT,FullText})
export const toggleGlossaryText = (GlossaryText) => ({type:GLOSSARY_TEXT,GlossaryText})