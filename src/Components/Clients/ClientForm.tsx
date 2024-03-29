import React, {FormEvent, useState} from "react";
import {Client, NewClient} from "./Model";
import {postClient} from "./Service";
import {useNavigation} from "react-router-dom";

const ClientForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('+38');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const client = {email, phoneNumber, firstName, lastName, address, city};
        await postClient(client as NewClient);
    }

    return(
        <div className="container">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPhoneNumber" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputPhoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputFirstName"
                        placeholder="Maksym"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputLastName"
                        placeholder="Mahaz"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required/>
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputCity"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </div>
    );
}



export default ClientForm;