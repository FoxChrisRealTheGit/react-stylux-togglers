'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../css/reset.css');

require('../../css/animations.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modul1 = function (_Component) {
    _inherits(Modul1, _Component);

    function Modul1(props) {
        _classCallCheck(this, Modul1);

        var _this = _possibleConstructorReturn(this, (Modul1.__proto__ || Object.getPrototypeOf(Modul1)).call(this, props));

        _this.state = {
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
            childs: []
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Modul1, [{
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
            var BOXSTYLES = {
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
                zIndex: '2000'
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
            var BTNSTYLE = {
                borderRadius: '100%',
                cursor: 'pointer',
                position: 'absolute',
                left: this.state.boxWidth,
                bottom: this.state.boxHeight,
                background: this.state.btnBackground
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { style: CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                    this.state.buttonText
                ),
                _react2.default.createElement(
                    'div',
                    { style: BOXSTYLES, id: this.state.boxId, className: this.state.boxClassName },
                    _react2.default.createElement(
                        'button',
                        { style: BTNSTYLE, id: this.state.btnId, className: this.state.btnClassName, onClick: this.toggle },
                        'X'
                    ),
                    this.state.childs
                )
            );
        }
    }]);

    return Modul1;
}(_react.Component);

exports.default = Modul1;