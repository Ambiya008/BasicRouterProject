import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Component/Home/Home';  // Adjust the path as needed
import About from './Component/About/About';  // Adjust the path as needed
import Contact from './Component/Contact/Contact';  // Adjust the path as needed
import User from './Component/User/User';  // Import User component
import Github from './Component/Github/Github';  // Import Github component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />  {/* Add Github route */}
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
