"use client"
import { createContext, useContext } from "react";

export const ServiceContext = createContext();

export const useService = () => useContext(ServiceContext);