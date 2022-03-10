import React from 'react'
import ReactDom from "react-dom";
import {SpeechProvider} from "@speechly/react-client";
import App from './App.js';
import { Provider } from "./context/context";

import "./index.css"

ReactDom.render(
<SpeechProvider appId="bc0d668b-b27e-41f0-9856-875164c2b3cd" language='en-US'>
<Provider>
<App/>
</Provider>
</SpeechProvider>
, document.getElementById('root'));

