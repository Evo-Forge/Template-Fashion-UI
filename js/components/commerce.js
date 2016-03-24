import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter} from 'react-essence';

class PatagoniaCommerce extends React.Component {

  render() {
    return (
      <Block classes={'e-background-indigo-600'}>
        <Block classes={'patagoniaCommerce e-container'}>
          <Card>
            <CardHeader>
             Card header
            </CardHeader>
            <CardContent>
             Card content
            </CardContent>
            <CardFooter>
             Card footer with action buttons
            </CardFooter>
          </Card>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaCommerce;
