import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import { Navbar } from "./layout";
import { Orders, Profile, Search, Home } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Navbar />} >
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </>
    )
)
