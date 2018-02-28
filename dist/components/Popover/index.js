'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               * Popover
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               */


var Popover = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          placement = _props.placement,
          positionTop = _props.positionTop,
          positionLeft = _props.positionLeft,
          arrowOffsetTop = _props.arrowOffsetTop,
          arrowOffsetLeft = _props.arrowOffsetLeft,
          title = _props.title,
          className = _props.className,
          style = _props.style,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['placement', 'positionTop', 'positionLeft', 'arrowOffsetTop', 'arrowOffsetLeft', 'title', 'className', 'style', 'children']);

      var classes = _defineProperty({}, placement, true);

      var outerStyle = _extends({
        display: 'block',
        top: positionTop,
        left: positionLeft
      }, style);

      var arrowStyle = {
        top: arrowOffsetTop,
        left: arrowOffsetLeft
      };

      return _react2.default.createElement(
        _styles2.default,
        {
          role: 'tooltip',
          className: (0, _classnames2.default)(className, classes),
          style: outerStyle
        },
        _react2.default.createElement('div', { className: 'arrow', style: arrowStyle }),
        title && _react2.default.createElement(
          'h3',
          { className: 'title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          children
        )
      );
    }
  }]);

  return Popover;
}(_react2.default.Component);

Popover.propTypes = {
  placement: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),
  positionTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  positionLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  arrowOffsetTop: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  arrowOffsetLeft: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  title: _propTypes2.default.node
};
Popover.defaultProps = {
  placement: 'right'
};
exports.default = Popover;