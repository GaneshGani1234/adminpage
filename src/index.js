import {createRoot} from 'react-dom/client';
import App2 from './App2';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contents from './contents';
import Student from './Student';
// import Faculty from './Faculty';
import Course from './Course';
import Faculty2 from './Faculty2';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
 <Router>
    <Routes>
                <Route path="/" element={<App2/>}/>
                <Route path="contents" element={<Contents/>}/>
                <Route path="student" element={<Student/>}/>
                <Route path="faculty" element={<Faculty2/>}/>
                <Route path="course" element={<Course/>}/>
    </Routes>
 </Router>
);