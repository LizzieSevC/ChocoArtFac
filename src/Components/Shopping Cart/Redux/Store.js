import { createStore } from "redux";
import reducer from "./IndexReducer";


export const Store = createStore( reducer );