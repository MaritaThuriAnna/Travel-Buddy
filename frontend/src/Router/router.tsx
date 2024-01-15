//router.tsx:
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/login";
import { Destinations } from '../Pages/destination';
import Home from "../Components/Home";
import DestinationDetail from "../Pages/destinationDetail";
import Booking from "../Pages/booking";
import Cazari from "../Components/Cazari";
import Profile from "../Pages/Profile";
import Register from "../Pages/Register";
import Accommodations from "../Pages/accom";
import { Admin } from "../Pages/Admin";
import { DestinationAdmin } from "../Pages/DestinationAdmin";
import { AccommodationAdmin } from "../Pages/AccommodationAdmin";
import { AttractionAdmin } from "../Pages/AttractionAdmin";
import { UserAdmin } from "../Pages/userAdmin";


const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login />
    },
    {
        path:"/Register",
        element: <Register />
    },
    {
        path:"/Admin",
        element: <Admin />
    },
    {
        path:"/DestinationAdmin",
        element: <DestinationAdmin />
    },
    {
        path:"/AccommodationAdmin",
        element: <AccommodationAdmin />
    },
    {
        path:"/AttractionAdmin",
        element: <AttractionAdmin />
    },
    {
        path:"/userAdmin",
        element: <UserAdmin />
    },
    {
        path: "/Cazari",
        element:<Cazari accommodations={""}/>
    },
    {
        path: "/Home/:userId",
        element: <Home />
    },    
    {
        path: "/Profile/:userId",
        element: <Profile />
    },
    {
        path: "/Destinations",
        element: <Destinations />
    },
    {
        path: '/Destinations/:destinationId',
        element: <DestinationDetail />
    },
    {
        path: '/Destinations/:destinationId/Attractions',
        element: <div>ATTRACTIONS MIAU MIAU</div>
    },
    {
        path: '/Destinations/:destinationId/Accommodations',
        element: <Accommodations />
    },
    {
        path: "/Accommodations",
        element: <div>Where will you be staying?</div>
    },
    {
        path: "/Attractions",
        element: <div>check out the locat attractions!</div>
    },
    {
        path:"/Booking/:userId",
        element: <Booking/>
    }
];

export const router = createBrowserRouter(routes)