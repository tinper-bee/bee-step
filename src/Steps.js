import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

const propTypes = {
  prefixCls: PropTypes.string,
  iconPrefix: PropTypes.string,
  labelPlacement: PropTypes.string,
  children: PropTypes.any,
  current: PropTypes.number,
  status: PropTypes.oneOf(['wait', 'process', 'finish', 'error']),
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['default', 'small'])
};

const defaultProps = {
  prefixCls: 'u-steps',
  iconPrefix: 'u',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: 'default',
};

class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastStepOffsetWidth: 0,
    };
  }
  componentDidMount() {
    this.calcLastStepOffsetWidth();
  }
  componentDidUpdate() {
    this.calcLastStepOffsetWidth();
  }
  componentWillUnmount() {
    if (this.calcTimeout) {
      clearTimeout(this.calcTimeout);
    }
  }
  calcLastStepOffsetWidth = () => {
    const domNode = ReactDOM.findDOMNode(this);
    if (domNode.children.length > 0) {
      if (this.calcTimeout) {
        clearTimeout(this.calcTimeout);
      }
      this.calcTimeout = setTimeout(() => {
        // +1 for fit edge bug of digit width, like 35.4px
        const lastStepOffsetWidth = (domNode.lastChild.offsetWidth || 0) + 1;
        if (this.state.lastStepOffsetWidth === lastStepOffsetWidth) {
          return;
        }
        this.setState({ lastStepOffsetWidth });
      });
    }
  }
  render() {
    const props = this.props;
    const { prefixCls, style = {}, className, children, direction,
            labelPlacement, iconPrefix, status, size, current, ...restProps } = props;
    const lastIndex = children.length - 1;
    const reLayouted = this.state.lastStepOffsetWidth > 0;
    const classString = classNames({
      [prefixCls]: true,
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${direction}`]: true,
      [`${prefixCls}-label-${labelPlacement}`]: direction === 'horizontal',
      [`${prefixCls}-hidden`]: !reLayouted,
      [className]: className,
    });

    return (
      <div className={classString} style={style} {...restProps}>
        {
          React.Children.map(children, (ele, idx) => {
            const tailWidth = (direction === 'vertical' || idx === lastIndex || !reLayouted)
              ? null : `${100 / lastIndex}%`;
            const adjustMarginRight = (direction === 'vertical' || idx === lastIndex)
              ? null : (-Math.floor(this.state.lastStepOffsetWidth / lastIndex + 1)-1);
            const np = {
              stepNumber: (idx + 1).toString(),
              stepLast: idx === lastIndex,
              tailWidth,
              adjustMarginRight,
              prefixCls,
              iconPrefix,
              wrapperStyle: style,
            };

            // fix tail color
            if (status === 'error' && idx === current - 1) {
              np.className = `${props.prefixCls}-next-error`;
            }

            if (!ele.props.status) {
              if (idx === current) {
                np.status = status;
              } else if (idx < current) {
                np.status = 'finish';
              } else {
                np.status = 'wait';
              }
            }
            return React.cloneElement(ele, np);
          }, this)
        }
      </div>
    );
  }
}
Steps.defaultProps = defaultProps;
Steps.propTypes = propTypes;

export default Steps;
