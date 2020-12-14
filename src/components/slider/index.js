import React from 'react';
import propTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
// import Button from '@material-ui/core/Button'

const styles = {
    img__styles: {
        width: "100%",
        maxWidth: "100%",
        maxHeight: "100%"
    },
    slider__classes: {
        overflow: "hidden",
        width: "100%",
        height: "600px"
    }
}

class Slider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            domImgs: this.props.pics.map((el, i) => <img className={ this.props.classes.img__styles } key={ i } src={ el } alt="Img"/>),
            activeImg: 0,
            ImgsLength: this.props.pics.length
        }
    }

    componentDidMount() {
        setInterval(this.nextImg, 3000);
    }

    nextImg = () => {
        this.state.activeImg + 1 >= this.state.domImgs.length ?
            this.setState({ activeImg: 0 }) :
            this.setState({ activeImg: this.state.activeImg + 1})
    }

    prevImg = () => {
        this.state.activeImg - 1 < 0 ?
            this.setState({ activeImg: this.state.domImgs.length - 1 }) :
            this.setState({ activeImg: this.state.activeImg - 1})
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={ classes.slider__classes }>
                <ReactCssTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                        { this.state.domImgs[this.state.activeImg] }
                </ReactCssTransitionGroup>
            {/*<Button color="primary" onClick={ this.nextImg }>Prev</Button>*/}
            {/*<Button color="primary" onClick={ this.prevImg }>Next</Button>*/}
        </div>)
    }
}

Slider.propTypes = {
    pics: propTypes.array
}

export default withStyles(styles)(Slider);