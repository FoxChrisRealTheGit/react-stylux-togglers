import React, {Component} from 'react';
import '../css/reset.css';
import '../css/animations.css';

export default class Toggler3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler3',
            position: props.position,

            textvertical: props.textVertical || 'center',
            texthorizontal: props.textHorizontal || 'center',
            textheight: props.textHeight || '200px',
            textwidth: props.textWidth || '300px',
            labels: [],
            text: [],
            mainid: props.mainid,
            toggleid: props.toggleid,
            panelClassName: props.panelClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children.split('\\'))
        let labels = [];
        let text = [];
        for (var i = 0; i < CHILDS.length; i += 1) {
            if ((i + 1) % 2 === 0) {
                text.push(CHILDS[i])
            } else {
                labels.push(CHILDS[i])
            }
        }
        this.setState({
            labels: labels,
            text: text
        })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children.split('\\'))
        let labels = [];
        let text = [];
        for (var i = 0; i < CHILDS.length; i += 1) {
            if ((i + 1) % 2 === 0) {
                text.push(CHILDS[i])
            } else {
                labels.push(CHILDS[i])
            }
        }
        this.setState({
            labels: labels,
            text: text
        })
    }
    render() {
        const CHECKSSTYLE = {
            display: "none",
        }
        const PANELS = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: this.state.position,
            width: this.state.width,
            height: this.state.height,
            background: this.state.background,
            top: this.state.top,
            overflow: 'hidden',
        }
        const TEXTBOX = {
            height: this.state.textheight,
            width: this.state.textwidth,
            display: 'flex',
            flexDirection: 'column',
            alignItems: this.state.texthorizontal,
            justifyContent: this.state.textvertical,
        }
        const LABELSSTYLES = {
            cursor: 'pointer',
        }
        const CHECKS = this.state.labels.map((x, i, arr) => {
            return <input key={i} id={'tab' + (i + 1)} type="radio" name="panel_select" defaultChecked style={CHECKSSTYLE} />
        })
        const LABELS = this.state.labels.map((x, i, arr) => {
            return <label key={i} style={LABELSSTYLES} htmlFor={'tab' + (i + 1)}>{x}</label>
        })
        const TEXT = this.state.text.map((x, i, arr) => {
            return (
                <div key={i} id={'panel' + (i + 1)} className={this.state.panelClassName}>
                    <p style={TEXTBOX}>
                        {x}
                    </p>
                </div>
            )
        })

        return (
            <div style={PANELS} id={this.state.mainid} className={`panels ${this.state.mainClassName}`}>
                {CHECKS}
                <nav id={this.state.toggleid} className={this.state.toggleClassName}>
                    {LABELS}
                </nav>
                {TEXT}
            </div>
        )
    }
}