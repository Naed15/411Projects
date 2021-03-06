import React, { useState, useEffect } from "react";
import { Container, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { addBusiness } from "../Redux/Actions";
import GoogleMapReact from "./Maps";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Css = withStyles({
        root: {
            "& label.Mui-focused": {
                color: "rgb(60,179, 113)"
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "rgb(60,179, 113)"
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: "rgb(60,179, 113)"
                },
                "&:hover fieldset": {
                    borderColor: "rgb(60,179, 113)"
                },
                "&.Mui-focused fieldset": {
                    borderColor: "rgb(60,179, 113)"
                }
            }
        }
    })(TextField);
    

const AddListing = ({ history, addBusiness, listings }) => {
        const [name, setName] = useState("");
        const [address, setAddress] = useState("austin tx");
        const [hours, setHours] = useState("");
        const [description, setDescription] = useState("");
        const [lat] = useState(30.266666);
        const [lng] = useState(-97.73333);
    
        const handleSubmit = e => {
            e.preventDefault();
            let id = listings.length + 1;
            const lists = { id, name, address, hours, description };
    
            addBusiness(lists);
        };
    
        const onChangeName = e => {
            setName(e.target.value);
        };
        const onChangeAddress = e => {
            setAddress(e.target.value);
        };
        const onChangeHours = e => {
            setHours(e.target.value);
        };
        const onChangeDescription = e => {
            setDescription(e.target.value);
        };
        useEffect(() => {
            async function google() {
                const url = `https://maps.google.com/maps/api/geocode/json?key=$
            AIzaSyArHvqUDp1vE1t0y5C_vZRG7LTVEorLlAQ&address=${
                        listings[listings.length - 1].address
                    }`;
                const response = await fetch(url);
                const data = await response.json();
                console.log(data, process.env.REACT_APP, "ADD");
            }
                // setLat(data.results[0].geometry.location.lat);
                // setLng(data.results[0].geometry.location.lng);
            google();
        });
        return (
         <Container className={Css.container}>
            <form className={Css.form} onSubmit={handleSubmit}>
                <Css
                   id="name"
                       onChange={onChangeName}
                       label="Name"
                       type="text"
                       margin="normal"
                    />
                    <Css
                        id="address"
                        onChange={onChangeAddress}
                        label="Address"
                        type="text"
                        margin="normal"
                    />
                    <Css
                        id="hours"
                        onChange={onChangeHours}
                        label="Hours (ex. 8AM - 9PM)"
                        type="text"
                        margin="normal"
                    />
                    <Css
                        id="description"
                        onChange={onChangeDescription}
                        label="Description"
                        type="text"
                        margin="normal"
                    />
                    <Button
                        style={{ backgroundColor: "rgb(60,179, 113)", color: "white" }}
                        type="submit"
                    >
                        Save
                    </Button>
                </form>
                <GoogleMapReact lat={lat} lng={lng} />
            </Container>
        );
    };
    
    const mapStateToProps = state => {
        return {
            listings: state.listings
        };
    };
    
    const mapDispatchToProps = dispatch => {
        return {
            addBusiness: listing => dispatch(addBusiness(listing))
        };
    };
    
    export default withRouter(
        connect(mapStateToProps, mapDispatchToProps)(AddListing)
    );
