import { useReducer } from "react";
import React from "react";
import { BookingForm } from "./BookingForm";
import { fetchAPI} from "../BookingAPI";



export const BookingPage = ( ) =>{
   
    const updateTimes = (state, action) =>{
        switch (action.type) {
            case 'addTimes':
              const newDate = new Date(action.payload)
              return (
                fetchAPI(newDate)
              )
            default:
              return state
          }
    };
    const initializeTimes = () => { 
        return (
            fetchAPI(new Date())
        )
    }
    const [availableTimes, dispatch] = useReducer (updateTimes,initializeTimes());

    return(
     <div className="reservation-section">
      <h3 className="reservation-title">A TABLE RESERVATION IN THE LITTLE LEMON RESTAURANT</h3>
     <BookingForm availableTimes={availableTimes} updateTimes={dispatch}  />
     </div>
    )
}
