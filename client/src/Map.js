import React from "react";
import {
  GoogleMap,
  useLoadScript,

} from "@react-google-maps/api"; //npm i @react-google-maps/api


const libraries = ["places"];
const mapContainerStyle = {
width : '70vw',
height : '70vh',
}
const center = { //center of map
  lat: 0,
  lng: 0,
}
const radius = 8050;

const options = { //map configuration

  disableDefaultUI : true  
}


function setCenter(latitude,longitude,mapRef){
    center.lat = latitude;
    center.lng = longitude; 
}



const request = `pediatrician`;
function Map() {
  const { isLoaded, loadError} = useLoadScript({
    googleMapsApiKey : 'AIzaSyBaYw3r0OoiYB49FB55t9crBsON5j8SSeo',
    googlePlacesApiKey : 'AIzaSyAojVaSyLL9vdWYYVKOai2JVu54GUWYd2E',
    libraries,

  });


  const url = new URL(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${request}&location=${center.lat},${center.lng}&radius=${radius}&key=AIzaSyAojVaSyLL9vdWYYVKOai2JVu54GUWYd2E`);
  url.toJSON();

  



  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => { mapRef.current = map;}, [])
  navigator.geolocation.getCurrentPosition((position) => { 
    
    setCenter(position.coords.latitude,position.coords.longitude,mapRef)

  }, () => null); //position.coords.latitude



if (loadError) return "Error loading maps";
if (!isLoaded) return "Loading Maps";

  return (
    <div> 
      <GoogleMap mapContainerStyle = {mapContainerStyle}
       zoom ={11} 
       center={center}
       options = {options}
       onLoad = {onMapLoad}>
       </GoogleMap>
    </div>
    
  );
}

export default Map;
