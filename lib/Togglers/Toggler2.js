import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';

export default class Toggler2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            buttonText: props.buttonText || 'toggler2',
            bColor: props.bColor || 'black',
            bBackground: props.bBackground,
            bFontSize: props.bFontSize || '1.333em',
            bFontVariant: props.bFontVariant,
            bFontWeight: props.bFontWeight,
            bTextShadow: props.bTextShadow,
            bMargin: props.bMargin,
            bPadding: props.bPadding,
            bBorderLeft: props.bBorderLeft,
            bBorderRight: props.bBorderRight,
            bBorderTop: props.bBorderTop,
            bBorderBottom: props.bBorderBottom,
            position: props.position,
            togglePlace: props.togglePlace || 'column',
            padding: props.padding,
            offset: props.offset + '%',
            boxShadow: props.shadow || '1px 2px 2px black',
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            childs:[],
        }
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    toggle() {
        this.setState({
            show: !this.state.show
        })
    }
    render() {
        const FULLELEMENT = {
            display: 'flex',
            flexDirection: this.state.togglePlace,
        }
        const TOGGLERBOX = {
            display: this.state.show ? 'flex' : 'none',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            padding: this.state.padding,
            margin: `0 0 0 ${this.state.offset}`,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            boxShadow: this.state.boxShadow,
            overflow: 'hidden',
            zIndex: 2000,
        }
        const CLICKBOX = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: this.state.bColor,
            background: this.state.bBackground,
            fontSize: this.state.bFontSize,
            fontVariant: this.state.bFontVariant,
            fontWeight: this.state.bFontWeight,
            textShadow: this.state.bTextShadow,
            margin: this.state.bMargin,
            padding: this.state.bPadding,
            borderLeft: this.state.bBorderLeft,
            borderRight: this.state.bBorderRight,
            borderTop: this.state.bBorderTop,
            borderBottom: this.state.bBorderBottom,
            border: this.state.bBorder,
        }
        return (
            <div id={this.state.mainid} style={FULLELEMENT} className={this.state.mainClassName}>
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={TOGGLERBOX} id={this.state.toggleid} className={this.state.toggleClassName}>
                    {this.state.childs}
                </div>
            </div>
        )
    }
}