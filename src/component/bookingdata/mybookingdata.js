import React from "react";
import booking from "../images/booking.png";
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
export const mybookingdate = 
    [
        {
            title: "Booking history",
            path: "/mybookinghistory",
            icon: "../images/booking.png",
            cName: 'nav-text'
        },

        {
            title: "My profile",
            path: "/myprofile",
            icon: <AccountCircleIcon />,
            cName: 'nav-text'
        },

        {
            title: "My rewards",
            path: "/rewards",
            icon: <EmojiEventsIcon />,
            cName: 'nav-text'
        },
    ]