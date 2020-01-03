// import React from "react";
// import GoogleMap from "google-map-react";
// import { Container } from "@material-ui/core";
// import LocationOnIcon from "@material-ui/icons/LocationOn"; 


//     GoogleMap = props => {
//     const AnyReactComponent = ({ text }) => (
//     <div>
//       <LocationOnIcon className="text-red" />
//     </div>
//   );

//   const defaultProps = {
//     center: {
//       lat: props.lat,
//       lng: props.lng
//     },
//     zoom: 11
//   };

//   return (
//     <Container style={{ height: "400px", width: "450px" }}>
//       <GoogleMap
//         bootstrapURLKeys={{ key: process.env.REACT_APP }}
//         center={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         yesIWantToUseGoogleMapApiInternals
//       >
//         <AnyReactComponent lat={props.lat} lng={props.lng} />
//       </GoogleMap>
//     </Container>
//   );
// };
// export default GoogleMap;