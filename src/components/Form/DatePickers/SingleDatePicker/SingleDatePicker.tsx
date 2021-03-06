/**
 *
 * SingleDatePicker
 *
 */

import classnames from 'classnames';
import React from 'react';
import moment from 'moment';
import { SingleDatePicker as Picker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Media from 'react-media';
import { returnNull } from '../../../../util';
import Calendar from '../../../Icon/Calendar';
import ChevronLeft from '../../../Icon/Chevrons/ChevronLeft';
import ChevronRight from '../../../Icon/Chevrons/ChevronRight';
import Label from '../../Label';
import styles from './SingleDatePicker.scss';

type FocusChange = { focused: string };

type DisplayFormat = Function | string;

type Props = {
  id: string;
  anchorDirection?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  large?: boolean;
  displayFormat?: DisplayFormat;
  error?: string;
  horizontalMargin?: number;
  isOutsideRange?: Function;
  inline?: boolean;
  label?: string;
  readOnly?: boolean;
  onBlur: Function;
  onChange: Function;
  onFocus: Function;
  value?: moment.Moment;
  style?: Object;
  placeholder?: string;
};

class SingleDatePicker extends React.Component<Props, any> {
  static defaultProps = {
    anchorDirection: 'left',
    disabled: false,
    large: false,
    displayFormat: 'DD/MM/YYYY',
    inline: false,
    placeholder: 'Date',
    readOnly: false,
    onBlur: returnNull,
    onChange: returnNull,
    onFocus: returnNull,
  };

  state = {
    focused: false,
    date: this.props.value,
    inputText: '',
  };

  componentWillReceiveProps(
    nextProps: typeof SingleDatePicker.prototype.props,
  ) {
    if (nextProps.value !== this.state.date) {
      this.setState({
        date: nextProps.value,
      });
    }
  }

  handleDateChange = (date: moment.Moment) => {
    const oldDate = this.state.date;
    this.setState({ date });
    if ((oldDate && oldDate.toJSON()) !== (date && date.toJSON())) {
      const event = {
        value: date,
        props: this.props,
      };
      this.props.onChange(event);
    }
  };

  handleFocusChange = (change: FocusChange) => {
    const { focused } = change;
    this.setState({ focused });
    const event = {
      focused,
      props: this.props,
    };
    if (focused) {
      this.props.onFocus(event);
    } else {
      this.props.onBlur(event);
    }
  };
  handleInputChange = (e: React.SyntheticEvent<HTMLDivElement>) => {
    this.setState({ inputText: (e.target as any).value });
  };
  render() {
    const {
      id,
      error,
      horizontalMargin,
      inline,
      label,
      className,
      disabled,
      large,
      style,
      anchorDirection,
      displayFormat,
      isOutsideRange,
      readOnly,
      placeholder,
    } = this.props;
    const classes = classnames(
      styles.outer,
      {
        [styles.error]: error,
        [styles.disabled]: disabled,
        [styles.large]: large,
        [styles.focused]: this.state.focused,
        [styles.inline]: inline,
        [styles.noLabel]: !label,
      },
      className,
    );
    const floating =
      this.state.focused || this.state.date || this.state.inputText;
    const labelClasses = large
      ? classnames(styles.innerlabel, {
          [styles.floating]: floating,
        })
      : styles.label;
    const labelText = label ? '' : label;
    const placeHolderText = large ? labelText : placeholder;
    return (
      <div className={classes} style={style}>
        {label && <Label className={labelClasses}>{label}</Label>}
        <div className={styles.inner} onChange={this.handleInputChange}>
          <Media query={{ maxWidth: 767 }}>
            {(matches: boolean) => (
              <Picker
                date={this.state.date || null}
                daySize={28}
                disabled={disabled}
                horizontalMargin={matches ? 0 : horizontalMargin}
                id={id}
                numberOfMonths={matches ? 1 : 2}
                onDateChange={this.handleDateChange as any}
                focused={this.state.focused}
                onFocusChange={this.handleFocusChange as any}
                navNext={<ChevronRight />}
                navPrev={<ChevronLeft />}
                anchorDirection={anchorDirection}
                displayFormat={displayFormat as any}
                isOutsideRange={isOutsideRange as any}
                readOnly={readOnly}
                placeholder={placeHolderText}
              />
            )}
          </Media>
          <Calendar className={styles.icon} />
        </div>
        {error && (
          <Label className={styles.errorMessage} htmlFor={id} error>
            {error}
          </Label>
        )}
      </div>
    );
  }
}

export default SingleDatePicker;
