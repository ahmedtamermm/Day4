// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Footer from "./components/Footer/Footer.jsx";
// import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Movies from "./components/Movies/Movies.jsx";
import Layout from "./components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Details from "./components/MovieDetails/Details.jsx";
import NotFound from "./components/NotFound/notFound.jsx";
import Favorites from "./components/Favorites/Favorites";
import { Provider } from "react-redux";
import store from "./Redux/Store";

let routers = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
          {path: "home",element: <Home />},
          { path: "movies/:id", element: <Details />},
          { path: "/movies", element: <Movies /> },
          { path: "/favorites", element: <Favorites /> },
          { path: "/about", element: <About /> },
          { path: "*", element: <NotFound /> },
      ],
  },
]);


export default function App() {
  return (
      <Provider store={store}>
          <RouterProvider router={routers} />;
      </Provider>
  );
}
