import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const Arrayone = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "team" },
    {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "invoices",
    },
];

export const Arraytow = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "calendar" },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "faq",
    },
];

export const Arraythree = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "geography" },
];