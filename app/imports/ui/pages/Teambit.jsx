import React from 'react';
import TopMenu from '../components/TopMenu';
import Line from '../components/Line';
import SecondMenu from '../components/SecondMenu';
import FullWidthImage from '../components/FullWidthImage';

export default class Teambit extends React.Component {

  render() {
    return (
        <div>
          <Line/>
          <SecondMenu/>
          <FullWidthImage/>
        </div>
    );
  }
}
