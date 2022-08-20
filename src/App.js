import {Route, Routes} from "react-router-dom";
import {BookList} from "./BookList";
import {CreateBook} from "./CreateBook"
import {UpdateBook} from "./UpdateBook";
import {NavBar} from "./shared";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/update-book/:id' element={<UpdateBook/>}/>
                <Route path='/create-book' element={<CreateBook/>}/>
                <Route path='/' element={<BookList/>}/>
            </Routes>
        </>
    );
}
export default App;
