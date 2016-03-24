import React from 'react';
import ClassNames from 'classnames';

import {Block, Text} from 'essence-core';

class PatagoniaForms extends React.Component {

  render() {
    return (
      <Block className={'e-background-gray-200'}>
        <Block className={'patagoniaForms e-container'}>
          <Text type={'h1'} classes={'e-text-center e-body1'}>
          <Text type={'span'} classes={'e-text-center e-body1 e-text-blue-900'}>4</Text>
          FORMS</Text>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaForms;
