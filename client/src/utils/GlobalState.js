import React from "react"; 

import reduxStore from "./reduxStore";
import { Provider } from "react-redux";

export default function StoreProvider(props) {

  return <Provider reduxStore={reduxStore} {...props} />;
}
