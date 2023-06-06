import { useReducer } from "react";
import appContext from "./appContext";
import  PostReducer  from "./reducers/PostReducer";

const GlobalProvider = ({children}) =>{
    const [postState, postDispatch] = useReducer(PostReducer, "");//Give empty State in Reducer
    // console.log('state',postDispatch);
    return(
        <appContext.Provider value={{
           postState,
           postDispatch
        }}>
             {children}
        </appContext.Provider>
    );
}
export default GlobalProvider;