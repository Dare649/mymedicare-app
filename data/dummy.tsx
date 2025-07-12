import { LuLayoutDashboard, LuUserRound } from "react-icons/lu";
import { MdOutlineCalendarMonth, MdOutlineFindInPage } from "react-icons/md";
import { GiMedicines } from "react-icons/gi";
import { CiWallet, CiSettings } from "react-icons/ci";
import { PiProjectorScreenChartThin, PiCoinsLight } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoCreditCard } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";




export const nav = [
    {
        title: "home",
        path: '#'
    },
    {
        title: "about",
        path: '#about'
    },
    {
        title: "contact",
        path: '#contact'
    },
    
];



export const patientNav = [
    {
        title: 'dashboard',
        icon: <LuLayoutDashboard size={25}/>,
        path: "/patient/dashboard"
    },

    {
        title: "schedules",
        icon: <MdOutlineCalendarMonth size={25}/>,
        path: "/patient/schedules"
    },
    {
        title: "records",
        icon: <PiProjectorScreenChartThin size={25}/>,
        path: "/patient/records"
    },
    {
        title: "medications",
        icon: <GiMedicines size={25}/>,
        path: "/patient/medications"
    },
    {
        title: "transactions",
        icon: <CiWallet size={25}/>,
        path: "/patient/transactions"
    },
    {
        title: "settings",
        icon: <CiSettings size={25}/>,
        path: "/patient/settings",
        gap: true
    },
]



export const professionalNav = [
    {
        title: "dashboard",
        icon: <LuLayoutDashboard size={25}/>,
        path: "/professional/dashboard"
    },
    {
        title: "schedule",
        icon: <MdOutlineCalendarMonth size={25}/>,
        path: "/professional/schedule"
    },
    {
        title: "people",
        icon: <CgProfile size={25}/>,
        path: "/professional/people",
    },
    {
        title: "chat",
        icon: <IoChatbubbleEllipsesOutline size={25}/>,
        path: "/professional/chat",
    },
]


export const adminNav = [
    {
        title: "dashboard",
        icon: <LuLayoutDashboard size={25}/>,
        path: "/admin/dashboard"
    },
    {
        title: "consultations",
        icon: <MdOutlineCalendarMonth size={25}/>,
        path: "/admin/consultations"
    },
    {
        title: "prescriptions",
        icon: <CgProfile size={25}/>,
        path: "/admin/prescriptions",
    },
    {
        title: "investigations",
        icon: <IoChatbubbleEllipsesOutline size={25}/>,
        path: "/admin/investigations",
    },
    {
        title: "users",
        icon: <IoChatbubbleEllipsesOutline size={25}/>,
        path: "/admin/users",
    },
    {
        title: "partners",
        icon: <IoChatbubbleEllipsesOutline size={25}/>,
        path: "/admin/partners",
    },
    {
        title: "subscriptions",
        icon: <IoChatbubbleEllipsesOutline size={25}/>,
        path: "/admin/subscriptions",
    },
]




export const heroText = [
    'quick access', 'healthcare', 'monitoring', 'personalized', 'technology'
];


export const skipText = [
    'quick access', 'virtual consultations', 'no queues', 'time saving', 'home care'
]


export const price1 = [
    'record your vitals', 'track your response to treatment', 'professional remote monitoring', 'monthly repoort'
]

export const price2 = [
    'virtual consultation', 'request lab tests', 'request prescription'
]


export const faq = [
    {
        qst: 'How do I sign up',
        ans: 'Download the app from the Play Store or App Store, create an account, and enter your referral code (if you have one).'
    },
    {
        qst: 'What can I do with this app?',
        ans: 'You can log blood pressure and blood sugar readings, get insights and reminders, and share progress with your doctor.'
    },
    {
        qst: 'How does this app help my doctor?',
        ans: ' It allows your doctor to view your readings remotely and make informed decisions between visits.'
    },
    {
        qst: 'Can I use the app without a doctor?',
        ans: 'Yes, you can use it for personal tracking. Having a doctor linked just enhances the support you receive.'
    },
    {
        qst: 'Who can see my health information?',
        ans: 'Only you and the health professional you choose to share it with. We never sell or share your data with third parties.'
    },
]



export const footerNav = [
    {
        title: 'home',
        path: '#'
    },
    {
        title: 'about',
        path: '#about'
    },
    {
        title: 'privacy policy',
        path: ''
    },
    {
        title: 'plans',
        path: ''
    },
    {
        title: 'contact us',
        path: '#contact'
    },
    {
        title: 'terms of service',
        path: ''
    },
  
]


export const adminDashboardAnalytics = [
    {
        title: 'missed appointments',
        icon: <MdOutlineCalendarMonth size={23.33}/>,
        figure: '20 appointments',
        rate: '+80%'
    },
    {
        title: 'user approval',
        icon: <LuUserRound size={23.33}/>,
        figure: '20 accounts',
        rate: '+80%'
    },
    {
        title: 'pending payments',
        icon: <GoCreditCard size={23.33}/>,
        figure: '20 payments',
        rate: '+150%'
    },
    {
        title: 'unfulfiled deliveries',
        icon: <TbTruckDelivery size={23.33}/>,
        figure: '20 orders',
        rate: '+20%'
    },
]


export const adminDashboardSummary = [
    {
        title: 'total consultations',
        icon: <img src="/consultations.png" alt="mymedicare" />,
        figure: 39001,
        rate: '+80%'
    },
    {
        title: 'total prescription',
        icon: <img src="/Outline.png" alt="mymedicare" />,
        figure: 45,
        rate: '+80%'
    },
    {
        title: 'active subscriptions',
        icon: <img src="/subscription.png" alt="mymedicare" />,
        figure: 392,
        rate: '+150%'
    },
    {
        title: 'total clients',
        icon: <img src="/userfour.png" alt="mymedicare" />,
        figure: 4000,
        rate: '+20%'
    },
    {
        title: 'investigations',
        icon: <img src="/cross.png" alt="mymedicare" />,
        figure: 20,
        rate: '+20%'
    },
]


export const partnersTable = [
    {
        id: '001',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '002',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Rejected",
    },
    {
        id: '003',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Suspended",
    },
    {
        id: '004',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Suspended",
    },
    {
        id: '005',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Suspended",
    },
    {
        id: '006',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Suspended",
    },
    {
        id: '007',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Suspended",
    },
    {
        id: '008',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Rejected",
    },
    {
        id: '009',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Rejected",
    },
    {
        id: '010',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Rejected",
    },
    {
        id: '011',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '012',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '013',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '014',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '015',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '016',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '017',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '018',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '019',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '020',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '021',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Approved",
    },
    {
        id: '022',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '023',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '024',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '025',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '026',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '027',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '028',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '029',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
    {
        id: '030',
        companyName: "AXA Mansard",
        address: "45 Maple Avenue, Victoria Island, Lagos, Nigeria",
        contactInfo: "hezekiahpeters@gmail.com, +23490000000",
        type: "Insurance",
        status: "Pending",
    },
   
]
