/* /context/AppContext.js */

import React from "react";
// create auth context with default value

// set backup default for isAuthenticated if none is provided in Provider
const AppContext = React.createContext(
    // {isAuthenticated: false}
    // ||
    {isAuthenticated:true, 
        cart: {items:[], 
        total:0},
        addItem:()=>{},
        removeItem:()=>{},
        user:"", 
        setUser:()=>{}
    });
export default AppContext;