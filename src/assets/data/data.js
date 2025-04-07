import countries from '../images/countries.png'
import form from '../images/form.png'
import agecalc from '../images/agecalc.png'
import expense from '../images/expense.png/'
import ticket from '../images/ticket.png'
import spacet from '../images/spacetour.png'
import audiop from '../images/audiop.png'
import designo from '../images/designoo.png'

export const projects = [
    {
        id : 1,
        image : audiop,
        name : 'Audiophile',
        description : 'This is a dynamic e-commerce store with a seamless shopping experience. It includes real-time price calculation and user can review their order details before finalizing their purchase.',
        link : 'https://francoraymond.github.io/audiophile/',
        code : 'https://github.com/FrancoRaymond/audiophile',
        tools : ['React js','Tailwind','Framer-motion,', 'React router']  
    },
    {
        id : 2,
        image : countries,
        name : 'Rest countres API',
        description : 'This is a REST Countries API app that displays country details like population and region. It includes search and filter functionality, with detailed info on selected countries.',
        link : 'https://francoraymond.github.io/react-rest-countries-api/',
        code : 'https://github.com/FrancoRaymond/react-rest-countries-api',
        tools : ['React JS','Tailwind','Context API', 'REST API', 'Framer-motion']    
    },
    {
        id : 3,
        image : designo,
        name : 'Designo website',
        description : 'This is a responsive 7-page website emphasizing a clean UI and interactive elements, it featuring dynamic hover effects, smooth transitions, and form validation to enhance the user experience.',
        link : 'https://francoraymond.github.io/designo/',
        code : 'https://github.com/FrancoRaymond/designo',
        tools : ['React JS','Tailwind','React-Router']     
    },
    {
        id : 4,
        image : spacet,
        name : 'Space tourism website',
        description : 'This website provides a seamless experience, users can engage with hover effects on interactive elements and switch between tabs to access detailed information on each page.',
        link : 'https://space-tourism-ivory-five.vercel.app/',
        code : 'https://github.com/FrancoRaymond/space-tourism',
        tools : ['React JS','Tailwind','React-Router']     
    },
    {
        id : 5,
        image : form,
        name : 'Multi-step form',
        description : 'This is a multi-step form with step-by-step validation, plan selection, and real-time total calculation. It features smooth transitions between steps and a summary before submission.',
        link : 'https://francoraymond.github.io/multi-step-form-main/',
        code : 'https://github.com/FrancoRaymond/multi-step-form-main',
        tools : ['HTML','CSS','Javascript']  
    },
    {
        id : 6,
        image : expense,
        name : 'Expense monitor',
        description : "This is an app for tracking income, expenses, and balance in real time. It features persistent data storage, dynamic balance updates, and a categorized transaction history.",
        link : 'https://francoraymond.github.io/expense-monitor/',
        code : 'https://github.com/FrancoRaymond/expense-monitor',
        tools : ['React JS', 'Tailwind', 'Vite', 'Context API']     
    },
    {
        id : 7,
        image : ticket,
        name : 'Conference ticket generator',
        description : "This app includes a registration form with drag-and-drop avatar upload, input validation, and personalized ticket generation.",
        link : 'https://francoraymond.github.io/conference-ticket-generator/',
        code : 'https://github.com/FrancoRaymond/conference-ticket-generator/tree/main',
        tools : ['React JS', 'Tailwind'] 
    },
    {
        id : 8,
        image : agecalc,
        name : 'Age calculator',
        description : "This is an age calculator that instantly calculates exact age in years, months, and days from a given birth date, with intuitive date validation.",
        link : 'https://francoraymond.github.io/age-calculator-app/',
        code : 'https://github.com/FrancoRaymond/age-calculator-app',
        tools : ['HTML', 'CSS', 'Javascript']     
    }
]