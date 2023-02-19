import React from "react";
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom"
import { Navbar, MobileStats } from "./layout";
import { Orders, Profile, Search, Home, RestaurantDetail, DishDetail } from "./pages"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MobileStats />} >
                <Route path="/" element={<Navbar />} >
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/search/restaurant/:idR/:idD" element={<DishDetail />} />
                    <Route path="/profile" element={<Profile />} />
                </Route >
                <Route path="/restaurant/:idR/" element={<RestaurantDetail />} />
                <Route path="/restaurant/:idR/:idD" element={<DishDetail />} />
            </Route>
        </>
    )
)
