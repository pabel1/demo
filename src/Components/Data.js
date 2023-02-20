import cardImg1 from "../Assests/image/download (1) 1.png";
import cardImg2 from "../Assests/image/download (1) 1.png";
import cardImg3 from "../Assests/image/download (1) 1.png";
import cardImg4 from "../Assests/image/download (1) 1.png";

// icon
import { MdOutlineDashboard } from "react-icons/md";
import { BiWalletAlt, BiBookmarkMinus } from "react-icons/bi";
import { TbReportMoney } from "react-icons/tb";
import { HiOutlineCreditCard } from "react-icons/hi";

export const tableData = [
  {
    cardImg: cardImg1,
    cardType: "Primary",
    bank: "ABC Bank",
    cardNumber: "**** **** **** 2256",
    nameinCard: "Eren Yeager",
  },
  {
    cardImg: cardImg2,
    cardType: "Secondary",
    bank: "Finefine Bank",
    cardNumber: "**** **** **** 6551",
    nameinCard: "Eren Yeager",
  },
  {
    cardImg: cardImg3,
    cardType: "Secondary",
    bank: "Finefine Bank",
    cardNumber: "**** **** **** 6551",
    nameinCard: "Eren Yeager",
  },
  {
    cardImg: cardImg4,
    cardType: "Secondary",
    bank: "Finefine Bank",
    cardNumber: "**** **** **** 6551",
    nameinCard: "Eren Yeager",
  },
];

export const sidebarLinkData = [
  {
    name: "Home",
    icon: cardImg1,
    
  },
  {
    name: "My Wallet",
    icon: BiWalletAlt,
    link: "wallet",
    text: "",
  },
  {
    name: "Transactions",
    icon: TbReportMoney,
    link: "transactions",
    text: "75",
  },
  {
    name: "Invoices",
    icon: BiBookmarkMinus,
    link: "/",
    text: "",
  },
  {
    name: "Cards",
    icon: HiOutlineCreditCard,
    link: "cards",
    text: "",
  },
];
