//router.tsx:
import { RouteObject, createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/login";
import { Destinations } from '../Pages/destination';
import Home from "../Components/Home";
import DestinationDetail from "../Pages/destinationDetail";

const routes: RouteObject[] = [
    // {
    //     path: "/",
    //     element: <div>First Page</div>
    // },
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/Home",
        element: <Home />
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
        element: <div>ACCOMODATIONS MIAU MIAU</div>
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
        path: "/Booking",
        element: <div>Book now!</div>
    }
];

export const router = createBrowserRouter(routes)