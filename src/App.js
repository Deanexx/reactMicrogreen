import './App.css';
import Grid from '@material-ui/core/Grid'
import React from "react";
import Header from "@components/header"
import routes from "./routes/index"
import { BrowserRouter as Router, Route }  from "react-router-dom"

class App extends React.Component {

    render(){
        let jsxRouts = routes.map(el => <Route path={el.url}
                                               component={el.component}
                                               exact={el.exact}
                                               key={el.url}/>)

        return (
            <Router>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <Header>That is header</Header>
                    </Grid>
                    <Grid item xs={12}>
                        { jsxRouts }
                    </Grid>
                </Grid>
            </Router>
        );
    }
}

export default App;