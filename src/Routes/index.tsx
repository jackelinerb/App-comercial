import React from "react";
import { Switch, Route } from "react-router-dom";

import Map from "../Pages/TelaMapa";
import Cliente from "../Pages/TelaCliente";
import Lead from "../Pages/TelaLead";

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Map} />
        <Route path="/cliente" component={Cliente} />
        <Route path="/lead" component={Lead} />
    </Switch>
);

export default Routes;
