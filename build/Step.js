'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function isString(str) {
  return typeof str === 'string';
}

var Step = function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Step.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props,
        className = _props.className,
        prefixCls = _props.prefixCls,
        style = _props.style,
        tailWidth = _props.tailWidth,
        _props$status = _props.status,
        status = _props$status === undefined ? 'wait' : _props$status,
        iconPrefix = _props.iconPrefix,
        icon = _props.icon,
        wrapperStyle = _props.wrapperStyle,
        adjustMarginRight = _props.adjustMarginRight,
        stepLast = _props.stepLast,
        stepNumber = _props.stepNumber,
        description = _props.description,
        title = _props.title,
        restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'style', 'tailWidth', 'status', 'iconPrefix', 'icon', 'wrapperStyle', 'adjustMarginRight', 'stepLast', 'stepNumber', 'description', 'title']);

    var iconClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-icon', true), _defineProperty(_classNames, iconPrefix + 'icon', true), _defineProperty(_classNames, iconPrefix + 'icon-' + icon, icon && isString(icon)), _defineProperty(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish'), _defineProperty(_classNames, iconPrefix + 'icon-cross', !icon && status === 'error'), _classNames));

    var iconNode = void 0;
    if (icon && !isString(icon)) {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        icon
      );
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = _react2["default"].createElement('span', { className: iconClassName });
    } else {
      iconNode = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-icon' },
        stepNumber
      );
    }

    var classString = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item', true), _defineProperty(_classNames2, prefixCls + '-item-last', stepLast), _defineProperty(_classNames2, prefixCls + '-status-' + status, true), _defineProperty(_classNames2, prefixCls + '-custom', icon), _defineProperty(_classNames2, className, !!className), _classNames2));
    return _react2["default"].createElement(
      'div',
      _extends({}, restProps, {
        className: classString,
        style: _extends({ width: tailWidth, marginRight: adjustMarginRight }, style)
      }),
      stepLast ? '' : _react2["default"].createElement(
        'div',
        { ref: 'tail', className: prefixCls + '-tail' },
        _react2["default"].createElement('i', null)
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-step' },
        _react2["default"].createElement(
          'div',
          {
            className: prefixCls + '-head',
            style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
          },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-head-inner' },
            iconNode
          )
        ),
        _react2["default"].createElement(
          'div',
          { ref: 'main', className: prefixCls + '-main' },
          _react2["default"].createElement(
            'div',
            {
              className: prefixCls + '-title',
              style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
            },
            title
          ),
          description ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-description' },
            description
          ) : ''
        )
      )
    );
  };

  return Step;
}(_react2["default"].Component);

exports["default"] = Step;


Step.propTypes = {
  className: _react.PropTypes.string,
  prefixCls: _react.PropTypes.string,
  style: _react.PropTypes.object,
  wrapperStyle: _react.PropTypes.object,
  tailWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  status: _react.PropTypes.string,
  iconPrefix: _react.PropTypes.string,
  icon: _react.PropTypes.node,
  adjustMarginRight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  stepLast: _react.PropTypes.bool,
  stepNumber: _react.PropTypes.string,
  description: _react.PropTypes.any,
  title: _react.PropTypes.any
};

module.exports = Step;
module.exports = exports['default'];