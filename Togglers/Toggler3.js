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

var Toggler3 = function (_Component) {
    _inherits(Toggler3, _Component);

    function Toggler3(props) {
        _classCallCheck(this, Toggler3);

        var _this = _possibleConstructorReturn(this, (Toggler3.__proto__ || Object.getPrototypeOf(Toggler3)).call(this, props));

        _this.state = {
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
            toggleClassName: props.toggleClassName
        };
        return _this;
    }

    _createClass(Toggler3, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children.split('\\'));
            var labels = [];
            var text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i]);
                } else {
                    labels.push(CHILDS[i]);
                }
            }
            this.setState({
                labels: labels,
                text: text
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children.split('\\'));
            var labels = [];
            var text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i]);
                } else {
                    labels.push(CHILDS[i]);
                }
            }
            this.setState({
                labels: labels,
                text: text
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var CHECKSSTYLE = {
                display: "none"
            };
            var PANELS = {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: this.state.position,
                width: this.state.width,
                height: this.state.height,
                background: this.state.background,
                top: this.state.top,
                overflow: 'hidden'
            };
            var TEXTBOX = {
                height: this.state.textheight,
                width: this.state.textwidth,
                display: 'flex',
                flexDirection: 'column',
                alignItems: this.state.texthorizontal,
                justifyContent: this.state.textvertical
            };
            var LABELSSTYLES = {
                cursor: 'pointer'
            };
            var CHECKS = this.state.labels.map(function (x, i, arr) {
                return _react2.default.createElement('input', { key: i, id: 'tab' + (i + 1), type: 'radio', name: 'panel_select', defaultChecked: true, style: CHECKSSTYLE });
            });
            var LABELS = this.state.labels.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'label',
                    { key: i, style: LABELSSTYLES, htmlFor: 'tab' + (i + 1) },
                    x
                );
            });
            var TEXT = this.state.text.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'div',
                    { key: i, id: 'panel' + (i + 1), className: _this2.state.panelClassName },
                    _react2.default.createElement(
                        'p',
                        { style: TEXTBOX },
                        x
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { style: PANELS, id: this.state.mainid, className: 'panels ' + this.state.mainClassName },
                CHECKS,
                _react2.default.createElement(
                    'nav',
                    { id: this.state.toggleid, className: this.state.toggleClassName },
                    LABELS
                ),
                TEXT
            );
        }
    }]);

    return Toggler3;
}(_react.Component);

exports.default = Toggler3;