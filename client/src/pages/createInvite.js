import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting'
import Auth from '../utils/auth';
import DatePicker from 'react-datepicker'
import {ADD_EVENT} from '../utils/mutations'
import {useMutation} from '@apollo/client'
import 'react-datepicker/dist/react-datepicker.css';
// import FriendAvatar from '../components/Avatar';

function Invite() {
    const [addEvent] = useMutation(ADD_EVENT);

    //Datepicker code
    const [startDate, setDate] = useState(new Date());

    const [formState, setFormState] = useState({ eventInvitees: '', eventDate: '', eventTime: '', eventLocation: '', eventOutfit: '', 
    eventPrice: '', eventCancelWindow: '', eventMessage: '' });



    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value })
    };

    // const handleMessageChange = (e) => {
    //     setMessage(e.target.value);
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        const mutationResponse = await addEvent({
            variables: {
            eventInvitees: formState.eventInvitees,
            eventDate: formState.eventDate,
            eventTime: formState.eventTime,
            eventLocation: formState.eventLocation,
            eventOutfit: formState.eventOutfit,
            eventPrice: formState.eventPrice,
            eventCancelWindow: formState.eventCancelWindow,
            eventMessage: formState.eventMessage
            },
        });
        const token = mutationResponse.data.addEvent.token;
        Auth.login(token);
    };


    return (


        <div className="grid grid-cols-1 md:grid-cols-2 w-full p-10 my-1 bg-gradient-to-l from-purple-900  from-10% via-purple-500 via-90% to-purple-500 to-30% min-h-screen">

            <div className='icon-container'>
                {/* signout icon */}
                <div className='flex'>
                    <Link className='p-0 font-mono text-white justify-center' to="/"><i class="fa-solid fa-arrow-right-from-bracket fa-lg"></i>

                    </Link>
                    
                        {/* user-icon to userhome */}
                        <Link className=" ml-5 text-white" to="/userHome"><i class="fa-regular fa-user fa-lg"></i>
                            {/* <Greeting /> */}
                        </Link>
                   
                </div>



            </div>
            <div className='flex'>
                <h2 className=" justify-center mt-1 ml-24 text-center text-2xl font-bold leading-9 tracking-tight text-white">Create Some Plans</h2>
            </div>

            <div className='className="flex flex-col  justify-center items-center'>
                <img className='mt-8 mr-15' src='./images/calender.svg' />

            </div>

            <form className="w-1/2 text-purple-800 bg-transparent pl-20 m-5 block h-screen" onSubmit={handleSubmit}>
                <div className="flex-row space-between my-4">
                    <label htmlFor="getUsers"></label>
                    {/* <label className='block font-bold text-pink-300 p-1'>*Required</label> */}
                    <select className='rounded-lg'
                        id="getUsers"
                        name="eventInvitees"
                        value={formState.eventInvitees}
                        onChange={handleSelectChange}
                        required
                    >
                        <option value="">Who do you want to invite?</option>
                        <option value="user1">Alex</option>
                        <option value="user2">Kim</option>
                        <option value="user3">Rob</option>
                        {/* Add more options as needed*/}

                    </select>

                </div>

                <div className="block flex-row space-between my-4">
                    {/* <label htmlFor="date">When</label> */}
                    {/* <label className='font-bold text-pink-300 p-1'>*Required</label> */}
                    {/* DatePicker code */}
                    <DatePicker className='rounded-lg' selected={startDate} onChange={(date) => setDate(date)} />
                </div>
                <div className="flex-row space-between my-2 rounded-lg">
                    {/* <label htmlFor="date">Time</label> */}
                    {/* <label  className='block font-bold text-pink-300 p-1'>*Required</label> */}
                    <input className='block rounded-lg'
                        placeholder="Time"
                        name="eventTime"
                        value={formState.eventTime}
                        onChange={handleSelectChange}
                        type="text"
                        id="date"
                        required
                    />
                </div>

                <div className="flex-row space-between my-4">
                    {/* <label htmlFor="address"><strong>Where</strong> are you going?</label> */}
                    {/* <label  className='block font-bold text-pink-300 p-1'>*Required</label> */}
                    <select className='rounded-lg'
                        id="getLocations"
                        name="eventLocation"
                        value={formState.eventLocation}
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

                <div className="flex-row space-between my-4">
                    {/* <label htmlFor="fit">The Fit</label> */}
                    <select className='rounded-lg'
                        id="getFit"
                        name="eventOutfit"
                        value={formState.eventOutfit}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Your Outfit</option>
                        <option value="fit1">Cute and Comfy</option>
                        <option value="fit2">Insta Worthy</option>
                        <option value="fit3">Jeans and up</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-4">
                    {/* <label htmlFor="price">Price Range</label> */}
                    <select className='rounded-lg'
                        id="getPrice"
                        name="eventPrice"
                        value={formState.eventPrice}
                        onChange={handleSelectChange}
                    >
                        <option value="">Select Your Price Range</option>
                        <option value="price1">$5-$10</option>
                        <option value="price2">$10-$20</option>
                        <option value="price3">$20-$30</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-4">
                    {/* <label htmlFor="cancelTime">When is too late to cancel</label> */}
                    <select className='rounded-lg'
                        id="getCancelTime"
                        name="eventCancelWindow"
                        value={formState.eventCancelWindow}
                        onChange={handleSelectChange}
                    >
                        <option value="">Cancel Deadline</option>
                        <option value="cancel1">30min before</option>
                        <option value="cancel2">Day before</option>
                        <option value="cancel3">Never too late</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className="flex-row space-between my-4">
                    {/* <label htmlFor="message">Quick Message</label> */}
                    <textarea className='rounded-lg'
                        placeholder="Write a message to your friends"
                        type="text"
                        name="eventMessage"
                        value={formState.eventMessage}
                        onChange={handleSelectChange}
                    />
                </div>

                <div className="flex-row flex-end">
                    <button className="rounded-full w-40 h-10 leading-none  bg-black hover:bg-purple-400   font-mono text-white" type="submit"><i class="fa-regular fa-envelope"></i> Send</button>
                </div>
            </form>
            
           

        </div >

    );
}

export default Invite;