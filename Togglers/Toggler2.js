'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggler2 = function (_Component) {
    _inherits(Toggler2, _Component);

    function Toggler2(props) {
        _classCallCheck(this, Toggler2);

        var _this = _possibleConstructorReturn(this, (Toggler2.__proto__ || Object.getPrototypeOf(Toggler2)).call(this, props));

        _this.state = {
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
            childs: []
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Toggler2, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            this.setState({ childs: CHILDS });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            return this.setState({ childs: CHILDS });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            this.setState({
                show: !this.state.show
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var FULLELEMENT = {
                display: 'flex',
                flexDirection: this.state.togglePlace
            };
            var TOGGLERBOX = {
                display: this.state.show ? 'flex' : 'none',
                position: this.state.position,
                width: this.state.width,
                height: this.state.height,
                background: this.state.background,
                padding: this.state.padding,
                margin: '0 0 0 ' + this.state.offset,
                borderLeft: this.state.bLeft,
                borderRight: this.state.bRight,
                borderTop: this.state.bTop,
                borderBottom: this.state.bBottom,
                border: this.state.border,
                boxShadow: this.state.boxShadow,
                overflow: 'hidden',
                zIndex: 2000
            };
            var CLICKBOX = {
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
                border: this.state.bBorder
            };
            return _react2.default.createElement(
                'div',
                { id: this.state.mainid, style: FULLELEMENT, className: this.state.mainClassName },
                _react2.default.createElement(
                    'div',
                    { style: CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                    this.state.buttonText
                ),
                _react2.default.createElement(
                    'div',
                    { style: TOGGLERBOX, id: this.state.toggleid, className: this.state.toggleClassName },
                    this.state.childs
                )
            );
        }
    }]);

    return Toggler2;
}(_react.Component);

exports.default = Toggler2;