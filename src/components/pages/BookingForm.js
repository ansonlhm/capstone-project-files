import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";

export function BookingForm ({ availableTimes = []}){

    const [name,setName] = useState('');
    const [date,setDate] = useState('');
    const [time, setTime] = useState('');
    const [number, setNumber] = useState('');
    const [occasion, setOccasion] = useState('');
    const [email,setEmail] = useState('');
    

    let navigate = useNavigate ();
    const handleSubmit = (e)=> {
      // Prevent the browser from reloading the page
      e.preventDefault();
      navigate('/confirmation');      
    }

    return(
        <div className="reservation">
        <form method="post" onSubmit={handleSubmit}>
            <fieldset className="field-reservation">
            <div className='form-reservation'>
              <label htmlFor="res-name" className="label-reservation">Your name</label>
              <input type="name"
                     id="res-name"
                     className="input-reservation"
                     minLength={2}
                     value={name}
                     onChange={(e)=>setName(e.target.value)}/>
             </div>
             <div className='form-reservation'>
              <label htmlFor="res-date" className="label-reservation">Choose date</label>
              <input type="date"
                     id="res-date"
                     className="input-reservation"
                     required
                     value={date}
                     onChange={(e) => {setDate(e.target.value);}}/>
             </div>
             <div className='form-reservation'>
              <label htmlFor="res-time" className="label-reservation">Choose time</label>
              <select id="res-time"
                      className="input-reservation"
                      value={time}
                      onChange={(e) =>setTime(e.target.value)}>
              {availableTimes.map((available) => (
          <option key={available} value={available}>{available}</option>
        ))}
              </select>
              </div>
              <div className='form-reservation'>
                <label htmlFor="guests" className="label-reservation">Number of guests</label>
                <input type="number"
                       placeholder="1"
                       required min={2}
                       id="guests"
                       className="input-reservation"
                       value={number}
                       onChange={(e)=>setNumber(e.target.value)}/>
              </div>
              <div className='form-reservation'>
                <label htmlFor="occasion" className="label-reservation">Occasion</label>
                <select id="occasion"
                        className="input-reservation"
                        value={occasion}
                        onChange={(e)=>setOccasion(e.target.value)}>
                 <option>Birthday</option>
                 <option>Anniversary</option>
                </select>
              </div>
              <div className='form-reservation'>
              <label htmlFor="res-email" className="label-reservation">Your email</label>
              <input type="email"
                     id="res-email"
                     className="input-reservation"
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}
                     required/>
             </div>
             <input type="submit" value="Make Your reservation" className="button" disabled={!name} aria-label="On Click"></input>
            </fieldset>
         </form>
   </div>
    )
}
