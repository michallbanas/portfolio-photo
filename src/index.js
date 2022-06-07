import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ImageCards from './components/images';
import Navbar from './components/navbar';

const containerNav = document.getElementById('nav');
const navbar = <React.StrictMode> <Navbar/></React.StrictMode>

const containerPhotos = document.getElementById('sectionPhoto');
const sectionPhoto = <React.StrictMode> <ImageCards/></React.StrictMode>;

const [nav, imgs] = [
    createRoot(containerNav),
    createRoot(containerPhotos)
]


nav.render(navbar)
imgs.render(sectionPhoto);

reportWebVitals(console.log);