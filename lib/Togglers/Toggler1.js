import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';

export default class Toggler1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            position: props.position || 'fixed',
            width: props.width || '100px',
            height: props.height || '100vh',
            top: props.top || '0',
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler1',
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
            border: props.bBorder,
            border: props.border,
            bLEft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            left: props.left,
            right: props.right,
            mainid: props.mainid,
            toggleid: props.toggleid,
            titleid: props.titleid,
            titleClassName: props.titleClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            childs: [],
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
        const TOGGLERBOX = {
            display: this.state.show ? 'inline' : 'none',
            width: this.state.width,
            height: this.state.height,
            position: this.state.position,
            background: this.state.background,
            borderLeft: this.state.bLeft,
            borderRight: this.state.bRight,
            borderTop: this.state.bTop,
            borderBottom: this.state.bBottom,
            border: this.state.border,
            right: this.state.right,
            left: this.state.left,
            top: this.state.top,
            zIndex: 2000,
        }
        const CLICKBOX = {
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
            <div id={this.state.mainid} className={this.state.mainClassName}>
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