import countries from '../images/countries.png'
import form from '../images/form.png'
import agecalc from '../images/agecalc.png'
import expense from '../images/expense.png/'
import ticket from '../images/ticket.png'
import spacet from '../images/spacetour.png'
import audiop from '../images/audiop.png'
import designo from '../images/designoo.png'
import charcounter from '../images/charcounter.png'
import coffee from '../images/coffee.png'
import photosnap from '../images/photosnap.png'
import homepage from '../images/roomhomepage.png'
import agency from '../images/agency.png'
import productlist from '../images/productlist.png'
import todo from '../images/todo.png'
import fylo from '../images/fylo.png'

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
    },
    {
        id : 9,
        image : charcounter,
        name : 'Character counter',
        description : "this is a project that counts the number of characters entered into a text area in real time. It demonstrates fundamental React concepts like state management and event handling.",
        link : 'https://francoraymond.github.io/char-count/',
        code : 'https://github.com/FrancoRaymond/char-count',
        tools : ['Vite', 'React', 'Tailwind']    
    },
    {
        id : 10,
        image : coffee,
        name : 'Coffeeroasters subscription site',
        description : 'A sleek and responsive subscription website for coffee roasters, built to showcase a premium coffee delivery service. Users can customize their preferences through a multistep form.',
        link : 'https://francoraymond.github.io/coffeeroasters/',
        code : 'https://github.com/FrancoRaymond/coffeeroasters',
        tools : ['React JS','Tailwind','React-Router']     
    },
    ,
    {
        id : 11,
        image : photosnap,
        name : 'Photosnap',
        description : "This is a multi-page marketing website for a photo-sharing application. It emphasizes responsive design and modern frontend practices.",
        link : 'http://photosnap-omega-eight.vercel.app',
        code : 'https://github.com/FrancoRaymond/photosnap',
        tools : ['React JS', 'vite', 'Tailwind']     
    },
    {
        id : 12,
        image : homepage,
        name : 'Room homepage',
        description : "This showcases modern interior design solutions. It features an interactive image and text slider, optimized layouts for various screen sizes, and smooth navigation to enhance user engagement. ",
        link : 'https://francoraymond.github.io/room-homepage/',
        code : 'https://github.com/FrancoRaymond/room-homepage',
        tools : ['Vite', 'React', 'SCSS']    
    },
    {
        id : 13,
        image : agency,
        name : 'Agency landing page',
        description : "This is a single-page website built with React and Vite, showcasing a clean and modern design suitable for creative agencies.",
        link : 'https://francoraymond.github.io/agency-landing-page/',
        code : 'https://github.com/FrancoRaymond/agency-landing-page',
        tools : ['React', 'CSS']    
    },
    {
        id : 14,
        image : productlist,
        name : 'Product list with cart',
        description : "This project enables users to browse a list of products, add or remove items from a shopping cart, adjust item quantities, and confirm orders",
        link : 'https://francoraymond.github.io/item-list-with-cart/',
        code : 'https://github.com/FrancoRaymond/item-list-with-cart',
        tools : ['React', 'Tailwind']    
    },
    {
        id : 15,
        image : todo,
        name : 'Todo app',
        description : "This to-do project allows users to add, reorder (via drag-and-drop), complete, and delete tasks, with persistent storage handled through the browser's local storage",
        link : 'https://francoraymond.github.io/todo-app/',
        code : 'https://github.com/FrancoRaymond/todo-app',
        tools : ['React', 'Tailwind', 'Frame-motion']    
    },
    {
        id : 16,
        image : fylo,
        name : 'Fylo landing page',
        description : "This is a responsive landing page for Fylo, developed using React, Tailwind CSS, and Vite all presented within a modern dark-themed design.",
        link : 'https://francoraymond.github.io/fylo-landing-page/',
        code : 'https://github.com/FrancoRaymond/fylo-landing-page',
        tools : ['React', 'Tailwind']    
    }
]