'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  component: _2.default,
  props: {
    submit: false,
    color: 'white',
    children: _react2.default.createElement(
      'div',
      null,
      ' Button'
    ),
    small: true,
    disabled: false
  }
};