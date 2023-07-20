import {Routes, Route } from 'react-router-dom'; 
import { DescriptionSection,
         Specials} from "../components/Main";
import { BookingPage } from "../components/pages/BookingPage";
import { ConfirmedBooking } from "../components/pages/ConfirmedBooking";
import { OnlineMenu } from './pages/OnlineMenu';

export function Routing () {
    return (

<Routes>
<Route path="/about" element={<DescriptionSection/>}/>
<Route path="/menu" element={<Specials/>}/>
<Route path="/reservation" element={<BookingPage/>}/>
<Route path="/confirmation" element={<ConfirmedBooking/>}/>
<Route path="/onlineMenu" element={<OnlineMenu/>} />
</Routes>

 )
}
