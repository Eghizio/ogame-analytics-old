import React from 'react';
import ApiProvider from "./providers/ApiProvider";
import Router from "./Router";
import { Redirect } from 'react-router-dom';


const App: React.FC = () => {
    return (
        <ApiProvider>
            <Router>
                <Redirect to="/" />
            </Router>
        </ApiProvider>
    );
}


export default App;