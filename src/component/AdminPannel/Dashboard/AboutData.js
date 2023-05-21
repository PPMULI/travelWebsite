import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { icons } from "react-icons";
import TrainIcon from "@mui/icons-material/Train";
import * as IoIcons from "react-icons/io";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import ApartmentSharpIcon from "@mui/icons-material/ApartmentSharp";
import HistoryIcon from "@mui/icons-material/History";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FeedIcon from "@mui/icons-material/Feed";
 
export const AboutData = [
  {
    title: "My Profile",
    path: "/userdetails",
    icon: <AccountCircleIcon />,
    cName: "nav-text",
  },
 
  {
    title: "Home",
    path: "/dashboard",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },

 

  {
    title: "Booking History",
    path: "/bookinghistory",
    icon: <HistoryIcon />,
    cName: "nav-text",
  },

  {
    title: "Check passenger",
    path: "/checkpassenger",
    icon: <HistoryIcon />,
    cName: "nav-text",
  },
 
];
