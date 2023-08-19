import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Login}  from '../pages/login'
import { Map } from '../pages/map'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path='/' />
                <Route element={<Map/>} path='/map'></Route>


                 
            </Routes>

        </BrowserRouter>
    )
}
export { RoutesApp }