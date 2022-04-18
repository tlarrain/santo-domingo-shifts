import React from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { getPrioritySequence } from '../utils/util';

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

export class CustomDatepicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDay: undefined,
    };
  }

  componentDidMount() {
    this.handleDayClick(new Date());
  }

  handleDayClick(day) {
    this.setState({
      selectedDay: day,
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
          onDayClick={this.handleDayClick}
          selectedDays={this.state.selectedDay}
          callbackFromParent={this.infoCallback}
          todayButton="Volver al día de hoy"
          onTodayButtonClick={this.handleDayClick}
          onMonthChange={this.handleDayClick}
        />
      </div>
    );
  }
}