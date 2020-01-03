import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function StyledComponents() {
  return <MyButton>Styled Components</MyButton>;
}
          const { name, description, hours, address } = props.lists;
          const [lat, setLat] = useState(30.266666);
          const [lng, setLng] = useState(-97.73333);
        
          useEffect(() => {
            async function google() {
              const url = `https://maps.google.com/maps/api/geocode/json?key=process.env.REACT_APP `;
              const response = await fetch(url);
              const data = await response.json();
              console.log(data)
              setLat(data.results[0].spherical.lat);
              setLng(data.results[0].spherical.lng);
            }
            google();
          });
        
          return (
            <div>
              <a href="">
                <p onClick={handleOpen}>{name}</p>
              </a>
                <div>
                  <h1>{name}</h1>
                  <h3>{address}</h3>
                  <h3>Hours: {hours}</h3>
                  <p>{description}</p>
                </div>
              
            </div>
          ); 