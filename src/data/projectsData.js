// Import all project assets
import s4 from "../assets/s4.png";
import barbar from "../assets/barbar.jpg";
import ticTacToe from "../assets/figmaTicTacToe.png";
import barberFrame from "../assets/barberFrame.png";
import FrameCar from "../assets/FrameCar.png";
import FrameTic from "../assets/FrameTic1.png";
import frame from "../assets/Frame.png";  
import FrameRock from "../assets/FrameRock.png";
import FramePortfolio from "../assets/FramePortfolio.png";
import FrameAgency from "../assets/FrameAgency.png";  
import Animation1 from "../assets/AnimationImg1.png";
import Animation2 from "../assets/AnimationImg2.png";
import animatedVideo1 from "../assets/animatedVideo1.mp4";
import AnimatedVideo2 from "../assets/AnimatedVideo2.mp4";
import Tictactoe from "../assets/Tictactoe.png";
import lemaraLogo from "../assets/lemaraLogo.png";

// Projects data array
export const projects = [
  {
    name: "S4",
    category: "MERN Stack",
    img: s4,
    description:
      "A full-stack Job seeker & Job provider platform. It includes user authentication, job listings, and application management.",
    liveDemo: "https://sfour.co.uk/login",
  },
   {
    name: "Lemara Commercial",
    category: "MERN Stack",
    img: lemaraLogo,
    description:
      "Access exclusive properties and manage your commercial real estate portfolio with Lemara Commercial's professional platform.",
    liveDemo: "https://lemara-commercial.vercel.app/",
  },
  {
    name: "E-Commerce Website",
    category: "MERN Stack",
    img: frame,
    description:
      "A full-stack e-commerce platform with authentication and cart functionality.",
    liveDemo: "https://your-ecommerce-demo.com",
  },
  {
    name: "Portfolio Website",
    category: "React & Tailwind",
    img: FramePortfolio,
    description:
      "A sleek and responsive portfolio to showcase your projects and skills.",
    liveDemo: "https://your-portfolio-demo.com",
  },
  {
    name: "Barber Shop",
    category: "WordPress",
    img: barberFrame,
    description:
      "A modern barber shop website with booking and service management.",
    liveDemo: "https://www.linkedin.com/in/adil-allahdad-web-developer/",
  },
  {
    name: "Car Booking",
    category: "WordPress",
    img: FrameCar,
    description: "A modern car booking website with a user-friendly interface.",
    liveDemo: "https://shimlataxi.com/",
  },
  {
    name: "Tic Tac Toe",
    category: "JavaScript",
    img: Tictactoe,
    description: "A classic Tic Tac Toe game with a twist, featuring an AI opponent.",
    liveDemo: "https://tic-tac-toe-chi-eight-86.vercel.app/",
  },
  {
    name: "Rock Paper Scissors",
    category: "JavaScript",
    img: FrameRock,
    description: "A classic Rock Paper Scissors game with a twist, featuring an AI opponent.",
    liveDemo: "https://rock-paper-scissors-hazel-theta.vercel.app/",
  },
  {
    name: "Agency Website",
    category: "React & Tailwind",
    img: FrameAgency,
    description:
      "A professional agency website with a modern design and responsive layout.",
    liveDemo: "https://www.linkedin.com/in/adil-allahdad-web-developer/",
  },
  {
    name: "Secondpass Global",
    category: "Animations",
    video: animatedVideo1,
    thumbnail: Animation1,
    description: "Professional animation showcasing creative motion graphics and visual effects.",
    liveDemo: "https://your-animation-demo.com",
  },
  {
    name: "Katana",
    category: "Animations",
    video: AnimatedVideo2,
    thumbnail: Animation2,
    description: "Dynamic animated sequence with smooth transitions and engaging visual storytelling.",
    liveDemo: "https://your-transitions-demo.com",
  },
];

// Categories for filtering
export const categories = [
  "All",
  "MERN Stack",
  "React & Tailwind",
  "WordPress",
  "JavaScript",
  "Animations"
];
