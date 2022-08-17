import {Route, Routes} from "react-router-dom";
import {BookList} from "./BookList";
import {CreatePage} from "./CreatePage"
import {UpdateBook} from "./UpdateBook";
import {NavBar} from "./shared/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/update' element={<UpdateBook/>}/>
                <Route path='/create' element={<CreatePage/>}/>
                <Route path='/' element={<BookList/>}/>
            </Routes>
        </>
    );
}
export default App;
