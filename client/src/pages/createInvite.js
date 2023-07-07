import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

function Invite() {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedFit, setSelectedFit] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedCancelTime, setSelectedCancelTime] = useState('');
    const [message, setMessage] = useState('');

    //Datepicker code
    const [startDate, setDate] = useState(new Date());


    const handleSelectChange = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'getUsers':
                setSelectedUsers(Array.from(e.target.selectedOptions, (option) => option.value));
                break;
            case 'getLocations':
                setSelectedLocation(value);
                break;
            case 'getFit':
                setSelectedFit(value);
                break;
            case 'getPrice':
                setSelectedPrice(value);
                break;
            case 'getCancelTime':
                setSelectedCancelTime(value);
                break;
            default:
                break;
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };


    return (
        <div className="container my-1">
            <Link to="/home">← Back to Home</Link>
            <h2>Create Plans</h2>
            <p>To create plans please select the Who When and Where with our pre-selected options. The rest of the options are not required, but does help your friends when making the plans!</p>

            <form onSubmit={handleSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="getUsers"><strong>Who</strong> are you inviting?</label>
                    <label>*Required</label>
                    <select
                        id="getUsers"
                        value={selectedUsers}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Select Your Friends</option>
                        <option value="user1">Option 1</option>
                        <option value="user2">Option 2</option>
                        <option value="user3">Option 3</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <label><strong>When</strong></label>
                <div className="flex-row space-between my-2">
                    <label htmlFor="date">Date</label>
                    <label>*Required</label>
                    {/* DatePicker code */}
                    <DatePicker selected={startDate} onChange={(date) => setDate(date)} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="date">Time</label>
                    <label>*Required</label>
                    <input
                        placeholder="Time"
                        name="date"
                        type="text"
                        id="date"
                        required
                    />
                </div>

                <div className="flex-row space-between my-2">
                    <label htmlFor="address"><strong>Where</strong> are you going?</label>
                    <label>*Required</label>
                    <select
                        id="getLocations"
                        value={selectedLocation}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Select Your Location</option>
                        <option value="location1">Starbucks</option>
                        <option value="location2">Library</option>
                        <option value="location3">Downtown</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="flex-row space-between my-2">
                    <label htmlFor="fit">The Fit</label>
                    <select
                        id="getFit"
                        value={selectedFit}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Your Outfit</option>
                        <option value="fit1">Cute and Comfy</option>
                        <option value="fit2">Insta Worthy</option>
                        <option value="fit3">Jeans and up</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="price">Price Range</label>
                    <select
                        id="getPrice"
                        value={selectedPrice}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Your Price Range</option>
                        <option value="price1">$5-$10</option>
                        <option value="price2">$10-$20</option>
                        <option value="price3">$20-$30</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="cancelTime">When is too late to cancel</label>
                    <select
                        id="getCancelTime"
                        value={selectedCancelTime}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select a time</option>
                        <option value="cancel1">30min before</option>
                        <option value="cancel2">Day before</option>
                        <option value="cancel3">Never too late</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="message">Quick Message</label>
                    <textarea
                        placeholder="Write a message to your friends"
                        value={message}
                        onChange={handleMessageChange}
                    />
                </div>

                <div className="flex-row flex-end">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div >
    );
}

export default Invite;