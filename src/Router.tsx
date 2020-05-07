import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Page, Home, NotFound, API, GalaxiesView, Analytics, Simulations, Allies } from "./pages";
import { ExplorerAPI } from './components';


const Router: React.FC = () => {
    const docs = ["alliances", "highscore", "localization", "playerdata", "players", "serverdata", "universe", "universes"];

    // incoming react-router version will support nested routes
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>

                <Route exact path="/api" component={API}/>
                    {docs.map(page => 
                        <Route key={page} exact path={`/api/${page}`} render={() => <Page><ExplorerAPI url={`/api/${page}`}/></Page>}/>)
                    }

                <Route exact path="/analytics" component={Analytics}/>
                    <Route exact path="/analytics/planets" component={GalaxiesView}/>
                    <Route exact path="/analytics/moons" component={GalaxiesView}/>
                    <Route exact path="/analytics/allies" component={Allies}/>

                <Route exact path="/simulations" component={Simulations}/>

                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;