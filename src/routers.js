import {TEXT_EDITOR_PAGE, FILE_LOAD_PAGE} from "./consts";
import {EditorPageContainer} from "./Pages/EditorPage/EditorPage";
import {FileLoadPageContainer} from "./Pages/FileLoadPage/FileLoadPage";

export const AllRouters = [
    {
        path: TEXT_EDITOR_PAGE,
        Component: <EditorPageContainer/>
    },
    {
        path: FILE_LOAD_PAGE,
        Component: <FileLoadPageContainer/>
    },

]