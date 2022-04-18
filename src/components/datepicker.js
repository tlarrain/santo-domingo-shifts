import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import moment from 'moment';
import { getPrioritySequence } from '../utils/util';
import { isSameMonth } from 'date-fns';

const WEEKDAYS_SHORT = {
  es: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
};
const MONTHS = {
  es: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],
};

const WEEKDAYS_LONG = {
  es: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],
};

const today = new Date();

export class CustomDatepicker extends React.Component {
  footer = null;
  constructor(props) {
    super(props);

    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      month: today,
      selectedDay: today,
    };

    this.footer = (
      <div className='todayBtn'
        onClick={() => this.handleDayClick(today)}
      >
        Volver al día de hoy
      </div>
    );
  }


  componentDidMount() {
    this.handleDayClick(new Date());
  }

  handleDayClick(day) {
    this.setState({
      selectedDay: day,
      month: day,
    });
    this.infoCallback(getPrioritySequence(moment(day)));
  }

  infoCallback(sequence) {
    this.props.callbackFromParent(sequence);
  };

  render() {
    return (
      <div>
        <DayPicker
          fixedWeeks
          months={MONTHS['es']}
          weekdaysLong={WEEKDAYS_LONG['es']}
          weekdaysShort={WEEKDAYS_SHORT['es']}
          firstDayOfWeek={1}
          month={this.state.month}
          onDayClick={this.handleDayClick}
          selected={this.state.selectedDay}
          callbackFromParent={this.infoCallback}
          onTodayButtonClick={this.handleDayClick}
          onMonthChange={this.handleDayClick}
          footer={this.footer}
        />
      </div>
    );
  }
}