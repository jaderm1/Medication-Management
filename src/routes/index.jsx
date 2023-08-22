import { BrowserRouter,Routes, Route } from 'react-router-dom'
import {Login}  from '../pages/login'
import { Map } from '../pages/map'
import { PharmacyRegistry } from '../pages/pharmacy-registry'
import { MedicationRegistry } from '../pages/medication-registry'

function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path='/' />
                <Route element={<Map/>} path='/map'/>
                <Route element={<PharmacyRegistry/>} path='/pharmacy-registry'/>
                <Route element={<MedicationRegistry/>} path='/medication-registry'/>



                 
            </Routes>

        </BrowserRouter>
    )
}
export { RoutesApp }