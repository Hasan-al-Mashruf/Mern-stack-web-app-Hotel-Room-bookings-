import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Admin/Dashboard";
import Main from "../../Layout/Main/Main";
import DashboardInterface from "../../Pages/Admin/DashboardInterface";
import Home from "../../Pages/Home";
import Shop from "../../Pages/Shop";
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import RoomDetails from "../../Pages/RoomDetails";
import ProtectedRoutes from "./ProtectedRoutes";
import Error from "../../Pages/Error";
import RoomList from "../../Pages/Admin/RoomList";
import ReviewsPage from "../../Pages/Admin/ReviewsPage";
import Bookings from "../../Pages/Admin/Bookings";
import Checkout from "../../Pages/Checkout";
import DashboardProtected from "./DashboardProtected";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            {
                path: '/roomDetails/:id',
                loader: ({ params }) => fetch(`https://hotelbookings-server.vercel.app/roomDetails/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }),
                element: <ProtectedRoutes>< RoomDetails /></ProtectedRoutes>
            },
            { path: '/shop', element: <Shop /> },
            { path: '/checkout', element: <Checkout /> },
            { path: '/signin', element: <Signin /> },
            { path: '/signup', element: <Signup /> },
        ],
    },
    {
        path: "/dashboard",
        element: <DashboardProtected>< Dashboard /></DashboardProtected>,
        children: [
            { path: '/dashboard', element: <DashboardInterface /> },
            { path: '/dashboard/roomList', element: <RoomList /> },
            { path: '/dashboard/reviewsPage', element: <ReviewsPage /> },
            { path: '/dashboard/bookings', element: <Bookings /> },
        ]
    }
]);

export default router;