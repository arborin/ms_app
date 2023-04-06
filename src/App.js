// import styles from './App.module.css';
// import { useState, useEffect } from 'react'
// import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {

  const client = new QueryClient({
    defaultOptions: {
      querues: {
        refetchOnWindowFocus: true
      }
    }
  });

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>

    </div>
  );
}


export default App;