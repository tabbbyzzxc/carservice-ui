import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { Contacts } from "./Model";

interface ContactsProps {
    contacts: Contacts;
    onChanged: (e: Contacts) => void
}
const ContactTab: React.FC<ContactsProps> = ({contacts, onChanged}) => {


    return(

        <div className="container">
            <form className="row g-3">
                <div className={"col-md-6"}>
                    <label className="form-label">Country</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="earth-europe"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.country : ""}
                            onChange={(e) => onChanged({...contacts, country: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">State</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="location-arrow"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.state : ""}
                            onChange={(e) => onChanged({...contacts, state: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">City</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="city"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.city : ""}
                            onChange={(e) => onChanged({...contacts, city: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">Street</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="street-view"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.street : ""}
                            onChange={(e) => onChanged({...contacts, street: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">Zip code</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="house"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.zipcode : ""}
                            onChange={(e) => onChanged({...contacts, zipcode: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">Phone number</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="phone"/></span>
                        <input
                            type="text"
                            className="form-control"
                            value={contacts ? contacts.phoneNumber : ""}
                            onChange={(e) => onChanged({...contacts, phoneNumber: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
                <div className={"col-md-6"}>
                    <label className="form-label">Email</label>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><FontAwesomeIcon icon="at"/></span>
                        <input
                            type="email"
                            className="form-control"
                            value={contacts ? contacts.email : ""}
                            onChange={(e) => onChanged({...contacts, email: e.target.value})}
                            aria-describedby="basic-addon1"
                            required/>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ContactTab;