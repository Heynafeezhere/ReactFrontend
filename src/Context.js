import { createContext } from "react";
const AuthContext = createContext();
const UserContext = createContext();
export default UserContext;  // This is now the default export

const CartContext = createContext();
const VendorContext = createContext();
export { CartContext, VendorContext,AuthContext };
    
