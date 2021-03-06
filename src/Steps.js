/**
* This source code is quoted from rc-steps.
* homepage: https://github.com/react-component/steps
*/
import React, { cloneElement, Children, Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { isFlexSupported } from './utils';

const propTypes = {prefixCls: PropTypes.string,
  className: PropTypes.string,
  iconPrefix: PropTypes.string,
  direction: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  status: PropTypes.string,
  size: PropTypes.string,
  progressDot: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
  ]),
  style: PropTypes.object,
  initial: PropTypes.number,
  current: PropTypes.number,
  icons: PropTypes.shape({
    finish: PropTypes.node,
    error: PropTypes.node,
  }),
};

const defaultProps = {
  prefixCls: 'u-steps',
  iconPrefix: 'u',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  initial: 0,
  status: 'process',
  size: 'default',
  progressDot: false,
};

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flexSupported: true,
      lastStepOffsetWidth: 0,
    };
    this.calcStepOffsetWidth = debounce(this.calcStepOffsetWidth, 150);
  }
  componentDidMount() {
    this.calcStepOffsetWidth();
    if (!isFlexSupported()) {
      this.setState({
        flexSupported: false,
      });
    }
  }
  componentDidUpdate() {
    this.calcStepOffsetWidth();
  }
  componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
    if (this.calcStepOffsetWidth && this.calcStepOffsetWidth.cancel) {
      this.calcStepOffsetWidth.cancel();
    }
  }
  calcStepOffsetWidth = () => {
    if (isFlexSupported()) {
      return;
    }
    // Just for IE9
    const domNode = findDOMNode(this);
    if (domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
        // Reduce shake bug
        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth ||
          Math.abs(this.state.lastStepOffsetWidth - lastStepOffsetWidth) <= 3) {
          return;
        }
        this.setState({ lastStepOffsetWidth });
      });
    }
  }
  render() {
    const {
      prefixCls, style = {}, className, children, direction,
      labelPlacement, iconPrefix, status, size, current, progressDot, initial,
      icons,
      ...restProps,
    } = this.props;
    const { lastStepOffsetWidth, flexSupported } = this.state;
    const filteredChildren = React.Children.toArray(children).filter(c => !!c);
    const lastIndex = filteredChildren.length - 1;
    const adjustedlabelPlacement = !!progressDot ? 'vertical' : labelPlacement;
    const classString = classNames(prefixCls, `${prefixCls}-${direction}`, className, {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-label-${adjustedlabelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-dot`]: !!progressDot,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          Children.map(filteredChildren, (child, index) => {
            if (!child) {
              return null;
            }
            const stepNumber = initial + index;
            const childProps = {
              stepNumber: `${stepNumber + 1}`,
              prefixCls,
              iconPrefix,
              wrapperStyle: style,
              progressDot,
              icons,
              ...child.props,
            };
            if (!flexSupported && direction !== 'vertical' && index !== lastIndex) {
              childProps.itemWidth = `${100 / lastIndex}%`;
              childProps.adjustMarginRight = -Math.round(lastStepOffsetWidth / lastIndex + 1);
            }
            // fix tail color
            if (status === 'error' && index === current - 1) {
              childProps.className = `${prefixCls}-next-error`;
            }
            if (!child.props.status) {
              if (stepNumber === current) {
                childProps.status = status;
              } else if (stepNumber < current) {
                childProps.status = 'finish';
              } else {
                childProps.status = 'wait';
              }
            }
            return cloneElement(child, childProps);
          })
        }
      </div>
    );
  }
}
Steps.defaultProps = defaultProps;
Steps.propTypes = propTypes;

export default Steps;
