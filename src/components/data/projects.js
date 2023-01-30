import movieapp from "../../assets/portfolio/movieapp.png";
import travellocity from "../../assets/portfolio/travellocity.png";
import myhours from "../../assets/portfolio/myhours.png";
import foodapp from "../../assets/portfolio/foodapp.png";
import weather from "../../assets/portfolio/weather.png";
import zee5 from "../../assets/portfolio/zee5.png";
import flipkart from "../../assets/portfolio/Fipkartclone.png";
import shoping from "../../assets/portfolio/shopingCartRedux.png";
import jobsearch from "../../assets/portfolio/JobSearchUserJbSearchpage.png";

import reactMovieapp from "../../assets/portfolio/MovieApp-Redux-React.png";

const projects = [
  {
    id: 0,
    title: "Flipkart",
    src: flipkart,
    link: "https://filpkart-clone-clientgc.onrender.com/",
    git: "https://github.com/Gowtham-Chokkalingam/E-Com-Clone",
    style: "hover:text-blue-400 duration-200",
    disc: "A clone of the famous e-commerce website Flipkart. I have implemented various features in this project like User authentication using context API, searching products, and adding products into the cart with quantity updating buttons. I have used React to build the Front-end and MongoDB for the Back-end. & MUI used for styling",
    techStack: ["ReactJs", "MongoDB", "NodeJS", "Redux"],
  },
  {
    id: 1,
    title: "Mern-Job-Search-APP",
    src: jobsearch,
    link: "https://mern-job-search-app.netlify.app/",
    git: "https://github.com/Gowtham-Chokkalingam/Job-Search-App-Mern",
    style: "hover:text-blue-400 duration-200",
    disc: "This is MERN stack job search website With a user-friendly front-end design, made with React-Chakra UI and state is efficiently managed through Redux store. And Backend is features advanced backend technology with MongoDB, Node.js, Express, and Mongoose, ensuring seamless data storage and API operations and with this advanced security measures implemented in the backend. Using JWT and password hashing with Node.js and Express.js, sensitive user data is protected.",
    techStack: ["React", "ChakraUI", "Redux", "NodeJS"],
  },
  {
    id: 2,
    title: "Zee5.com",
    src: zee5,
    link: "https://vidfy-elastic-punishment.netlify.app/",
    git: "https://github.com/Pradyumancoder/elastic-punishment-3534",
    style: "hover:text-blue-400 duration-200",
    disc: "Zee5 is online video streaming  platform for watching Tv-shows & movies etc.This was a group project. We have built this website with the help of ReactJs. My contribution in this project was to create 3 pages including landing page and its functionalities",
    techStack: ["React", "ChakraUI", "Tailwind", "NodeJS"],
  },

  {
    id: 3,
    title: "React Movie-Searching App",
    src: reactMovieapp,
    link: "https://moive-app-gowtham-chokkalingam.vercel.app/",
    git: "https://github.com/Gowtham-Chokkalingam/react-projects/tree/master/moive-app",
    style: "hover:text-blue-400 duration-200",
    disc: "This is Movie App built by using React, SCSS and React-Redux-Toolkit. This app will give you the information about Movies which we search and also displays the trending moives by default.",
    techStack: ["React", "SCSS", "Redux-Toolkit", "Axios-API"],
  },
  {
    id: 4,
    title: "Myhours",
    src: myhours,
    link: "https://gowtham-chokkalingam-makes-great-sites.netlify.app/",
    git: "https://github.com/Gowtham-Chokkalingam/great-account-499/tree/main/myhours",
    style: "hover:text-blue-400 duration-200",
    disc: "MyHour is task and time tracking website used for tracking live project status.This was an Individual Project. In this I have created on Homepage, Login page with help of React , Chakra and Bootstrap for UI.",
    techStack: ["React", "REST API", "NodeJS", "Chakra"],
  },

  {
    id: 5,
    title: "Movie Searching App",
    src: movieapp,
    link: "https://admirable-buttercream-87249d.netlify.app/",
    git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/MovieAppownV2",
    style: "hover:text-blue-400 duration-200",
    disc: "This is simple moive searching app, and by default this app will shows the trending moives. I have built this website with help of plain java script and used OMBD api for fetching the data",
    techStack: ["HTML", "CSS", "JS", "Axios-API", "NodeJS"],
  },
  {
    id: 6,
    title: "Food Searching App",
    src: foodapp,
    link: "https://rad-longma-275d13.netlify.app/receipe-of-the-day.html",
    git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/FInalFoodApp/Food-App-III",
    style: "hover:text-blue-400 duration-200",
    disc: "This is a food searching app, this app will shows the foods whichever you search. I have buit this app using HTML, CSS, and JavaScript. Api used to fetch the data and rendering on DOM",
    techStack: ["HTML", "CSS", "JS", "API", "NodeJS"],
  },

  {
    id: 7,
    title: "Shoping App",
    src: shoping,
    link: "https://shoping-cart-add-redux.netlify.app/",
    git: "https://github.com/Gowtham-Chokkalingam/Shoping-Cart-React-Redux",
    style: "hover:text-blue-400 duration-200",
    disc: "This is a shoping app made with ReactJs and Redux, In this app user can add the product to the cart,able to increase and decrease the quantity as well. React-BootStrap and Material-UI is used for UI design",
    techStack: ["React", "React-BootStrap", "Material-UI"],
  },
  {
    id: 8,
    title: "Weather App",
    src: weather,
    link: "https://incredible-frangollo-40a170.netlify.app/",
    git: "https://github.com/Gowtham-Chokkalingam/WebDev-Projects/tree/main/FInalFoodApp/Food-App-III",
    style: "hover:text-blue-400 duration-200",
    disc: "This is a Weather App made by using HTML, CSS and Javascript. This app will give you the information about weather for current day and for next three days also. This app also allow you to see your city or location on google map",
    techStack: ["HTML", "CSS", "JS", "Axios-API", "NodeJS"],
  },

  {
    id: 9,
    title: "Travelocity",
    src: travellocity,
    link: "https://meek-blancmange-7c0dba.netlify.app/",
    git: "https://github.com/Code-With-Hashim/boss-magic-6284",
    style: "hover:text-blue-400 duration-200",
    disc: "This was a group project. We have created this website with the help of HTML, CSS And Javascript. My work was here to create Navbar, SignUp, Login, Logout part.",
    techStack: ["HTML", "CSS", "JS", "NodeJS"],
  },
];

export default projects;
