import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Login}  from '../pages/login'
import { Map } from '../pages/map'
import { PharmacyRegistry } from '../pages/pharmacy-registry'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path='/' />
                <Route element={<Map/>} path='/map'/>
                <Route element={<PharmacyRegistry/>} path='/pharmacy-registry'/>



                 
            </Routes>

        </BrowserRouter>
    )
}
export { RoutesApp }