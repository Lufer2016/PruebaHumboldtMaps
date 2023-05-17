import "./styles.css";
import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapPruebaHumboldt extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        //Coordenadas geográficas de Colombia
        initialCenter={{
          lat: 4.570868, //Latitud Colombia
          lng: -74.297333 //Longitud Colombia
        }}
      />
    );
  }
}
// LLave privada "apiKey" que brinda google en google.cloud.com
/* Previamente se creó una cuenta con verificación de tarjeta de
crédito, por si se genera tráfico hacer un cobro por parte de 
google */
export default GoogleApiWrapper({
  apiKey: "YOUR_API_KEY"
})(MapPruebaHumboldt);
