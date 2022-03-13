import React from 'react';
import { Link } from 'react-router-dom';
import { CustomDatepicker } from './datepicker';
import { Rules } from './rules';

export class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableInfo: null,
    };
  };

  infoCallback = (dataFromChild) => {
    this.setState({ tableInfo: dataFromChild });
  };

  render() {
    return (
      <div>
        <CustomDatepicker
          callbackFromParent={this.infoCallback}
        />
        <div>
          {this.state.tableInfo ?
            <table className="greyGridTable">
              <thead>
                <tr>
                  {this.state.tableInfo.map((dateInfo, i) => <th key={i}>{dateInfo.date}</th>)}
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.state.tableInfo.map((dateInfo, i) => <td key={i}>{dateInfo.first}</td>)}
                </tr>
                <tr>
                  {this.state.tableInfo.map((dateInfo, i) => <td key={i}>{dateInfo.second}</td>)}
                </tr>
                <tr>
                  {this.state.tableInfo.map((dateInfo, i) => <td key={i}>{dateInfo.third}</td>)}
                </tr>
              </tbody>
            </table> : null}
        </div>
        <div className='centered rules-link'>
          <Link to="/rules">Ver reglamento</Link>
        </div>
      </div>
    );
  }
}