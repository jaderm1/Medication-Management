import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'




function Map() {
  
return(

  <>
  <Menu/>

    
<MainStyled>
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ width:'100%', height: "100%" }}>
<TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  /> 
  <Marker position={[51.505, -0.09]}>
  <Popup>
    A pretty CSS3 popup. <br /> Easily customizable.
  </Popup>
</Marker>
  </MapContainer>
</MainStyled>

  </>
)

}
export {Map};