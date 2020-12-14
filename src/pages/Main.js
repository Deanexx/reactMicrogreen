import React from 'react'
import { withStyles } from '@material-ui/styles';

import Slider2 from 'infinite-react-carousel'

import imageOne from '@assets/banner_masla_745.png'
import imageTwo from '@assets/banner_019.jpg'
import imageThree from '@assets/seeds-150x150.png'
import imageNoWorries from '@assets/process.png'
import sliderImg1 from '@assets/77-urozhaev_kovr.jpg'
import sliderImg2 from '@assets/6-urozhaev-chernyj-scaled.jpg'
import sliderImg3 from '@assets/6-urozhaev-chernyj-vnutri-scaled.jpg'
import sliderImg4 from '@assets/semena-mikrozeleni-bazilik-50g.jpg'
import sliderImg5 from '@assets/photo_2019-11-27_13-45-07.jpg'
import sliderImg6 from '@assets/gorchica_vyrashh.jpg'

import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid'

import {inject, observer} from 'mobx-react'

import ItemModal from '@components/main/modalItem'

const useStyles = {
    pageContainer: {
        width: "95%",
        margin: "auto"
    },
    sliderClass: {
        width: "428px",
        maxHeight: "428px"
    },
    media:{
        height: "145px"
    },
    our__advantages: {
        backgroundColor: 'blue'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

let Main = inject("store")(observer(class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem: {},
            openModal: false,
            sliderOneContent: [
                <img src={ imageOne } key={1} alt="Img"/>,
                <img src={ imageTwo } key={2} alt="Img"/>],
            sliderTwoContent : [
                <img src={ sliderImg1 } key={1} alt="Img"/>,
                <img src={ sliderImg2 } key={2} alt="Img"/>,
                <img src={ sliderImg3 } key={3} alt="Img"/>,
                <img src={ sliderImg4 } key={4} alt="Img"/>,
                <img src={ sliderImg5 } key={5} alt="Img"/>,
                <img src={ sliderImg6 } key={6} alt="Img"/>
            ]
        }
    }

    openModalAction = (el) => {
        this.setState({
            selectedItem: el,
            openModal: true
        })
    }

    closeModalAction = () => {
        this.setState({
            selectedItem: {},
            openModal: false
        })
    }

    modalComponent = () => {
        if(this.state.openModal)
            return (<ItemModal item = {this.selectedItem} />)
    }

    render(){
        const { classes } = this.props;
        let productModel = this.props.store.products;
        let productsDom = productModel.getPopular.map((el, i) => {
            return (
                <Grid item xs={3} key={i}>
                    <Card>
                        <CardMedia
                            className={classes.media}
                            image={require('@assets/' + el.img[0]).default}
                            title="Contemplative Reptile"
                        />

                    <CardContent>
                        <Typography variant="h4">{el.title}</Typography>
                        <Typography variant="subtitle1">{el.price}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button color="secondary" onClick={ () => this.openModalAction(el) }>Quick look</Button>
                        <Button color="primary">Add to cart</Button>
                    </CardActions>
                </Card>
            </Grid>)
        })

        return (

            <React.Fragment>
                {/*Modal item*/}
                { this.modalComponent() }

                <div className={ classes.pageContainer }>

                    {/*Slider at the beginning for desktops */}
                    <Slider2 autoplay autoplaySpeed={2000} arrows={false}>
                        { this.state.sliderOneContent }
                    </Slider2>

                    {/* First block --Intro for phones */}

                    <div className="main__start__block">
                        <Typography align="center" gutterBottom variant="h3">
                            Microgreen
                        </Typography>
                        <Typography align="center" gutterBottom variant="subtitle1">
                            Growing kits, seeds and substrate
                        </Typography>
                        <Grid container>
                            <Grid item xs={6}>
                                <Slider2 dots className={ classes.sliderClass }>
                                    { this.state.sliderTwoContent }
                                </Slider2>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography gutterBottom variant="h4">About Company</Typography>
                                <Typography>
                                    Welcome to the site of our project "Green Farm"!

                                    We have created the first kits in Ukraine for growing microgreens at home. We work only with reliable seed suppliers and personally check each variety for germination. Therefore, you can be sure of the quality of our products.

                                    Here you can purchase kits for growing microgreens at home. And if you grow on soil or coconut substrate, on our website you can order high-quality seeds for microgreens.</Typography>
                            </Grid>
                        </Grid>

                    </div>

                    {/*OUR ADVANTAGES*/}
                    <div className={classes.our__advantages}>
                        <Typography>OUR ADVANTAGES</Typography>
                        <Grid container>
                            <Grid item xs={4}>
                                <Typography variant="h4">Eco-friendly seeds</Typography>
                                <img src={ imageThree } alt="Eco img"/>
                                <Typography variant="subtitle1">We use only unprocessed seeds of Ukrainian and Polish production</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h4">Eco-friendly seeds</Typography>
                                <img src={ imageThree } alt="Eco img"/>
                                <Typography variant="subtitle1">We use only unprocessed seeds of Ukrainian and Polish production</Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="h4">Eco-friendly seeds</Typography>
                                <img src={ imageThree } alt="Eco img"/>
                                <Typography variant="subtitle1">We use only unprocessed seeds of Ukrainian and Polish production</Typography>
                            </Grid>
                        </Grid>
                    </div>

                    {/*NO GROWING CLAPS! block*/}
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>NO GROWING CLAPS!</Typography>
                            <img src={ imageNoWorries } alt="Image no worries is here"/>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>WATCH A VIDEO ABOUT THE GROWING PROCESS:</Typography>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ngs6VMW4a_4"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                        </Grid>
                    </Grid>
                    {/*Popular Items for sale*/}

                    <div>
                        <Typography variant="h3" align="center" gutterBottom> Popular items</Typography>
                        <Grid container spacing={3}>
                            { productsDom }
                        </Grid>
                    </div>
                </div>

            </React.Fragment>
        )
    }

}))

export default  withStyles(useStyles)(Main);