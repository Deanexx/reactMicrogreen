import React from "react"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import PropType from 'prop-types'

import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = {

}

class ModalItem extends React.Component{
    constructor(props){
        super(props)
        console.log(props)

    }

    render(){
        const { classes } = this.props;
        let item = this.props.item;

        return(
            <Card>
                <CardContent>
                    <Grid container>
                        <Grid item xs={6}>

                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h3">{item.title}</Typography>
                            <Typography variant="subtitle1">{item.price}</Typography>
                            <Grid container item xs={12}>
                                <Grid item xs={6}>
                                    <TextField
                                    type="number"/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button color="primary">Add to cart</Button>
                                </Grid>
                            </Grid>
                            <Typography variant="subtitle2">Category</Typography>
                            <Button>Full review</Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        )
    }
}

ModalItem.propTypes = {
    item: PropType.object
}

export default  withStyles(useStyles)(ModalItem);