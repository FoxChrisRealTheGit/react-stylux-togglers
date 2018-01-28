import React, {Component} from 'react';
import '../../css/reset.css'
import '../../css/animations.css';

export default class Modul1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            boxTop: props.boxTop || '40%',
            boxRight: props.boxRight || '45%',
            boxLeft: props.boxLeft,
            boxBottom: props.boxBottom,
            boxPosition: props.boxPosition || 'fixed',
            boxBackground: props.boxBackground || 'white',
            boxHeight: props.boxHeight || '200px',
            boxWidth: props.boxWidth || '200px',
            boxAlign: props.boxAlign || 'center',
            boxJustify: props.boxJustify || 'center',
            buttonText: props.buttonText || 'Modul 1',
            boxShadow: props.boxShadow || '1px 2px 2px black',
            btnBackground: props.btnBackground || 'white',
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
            boxId: props.boxId,
            titleId: props.titleId,
            backId: props.backId,
            titleClassName: props.titleClassName,
            boxClassName: props.boxClassName,
            backClassName: props.backClassName,
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
        const BOXSTYLES = {
            width: this.state.boxWidth,
            height: this.state.boxHeight,
            background: this.state.boxBackground,
            position: this.state.boxPosition,
            top: this.state.boxTop,
            left: this.state.boxLeft,
            right: this.state.boxRight,
            bottom: this.state.boxBottom,
            display: this.state.show ? 'flex' : 'none',
            alignItems: this.state.boxAlign,
            justifyContent: this.state.boxJustify,
            boxShadow: this.state.boxShadow,
            zIndex: '2000',
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
        const BTNSTYLE = {
            borderRadius: '100%',
            cursor: 'pointer',
            position: 'absolute',
            left: this.state.boxWidth,
            bottom: this.state.boxHeight,
            background: this.state.btnBackground,
        }
        return (
            <div >
                <div style={CLICKBOX} id={this.state.titleid} className={this.state.titleClassName} onClick={this.toggle}>
                    {this.state.buttonText}
                </div>
                <div style={BOXSTYLES} id={this.state.boxId} className={this.state.boxClassName}>
                    <button style={BTNSTYLE} id={this.state.btnId} className={this.state.btnClassName} onClick={this.toggle}>X</button>
                    {this.state.childs}
                </div>
            </div>
        )
    }
}