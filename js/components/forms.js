import React from 'react';
import ClassNames from 'classnames';

import {Block,
  Btn,
  Card, CardHeader, CardContent, CardFooter,
  Divider,
  Icon,
  Input,
  List, ListItem, Switch,
  Text } from 'react-essence';



class PatagoniaForms extends React.Component {

  render() {
    return (
      <Block className={'e-background-grey-100'}>
        <Block className={'patagoniaForms e-container'}>
          <Text type={'h1'} classes={'e-text-center e-display-2 e-padding-top-50 background-rainbow'}> FORMS </Text>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-4 e-h-start e-v-center'}>
              <Card className={'e-background-white full-width'}>
                <CardHeader>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Sign In</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                  <Divider classes={'thinnest e-background-grey-200'} />
                </CardHeader>
                <CardContent>
                  <Text type={'p'} classes={'e-text-left e-text-grey-300 e-caption'}>Or create
                    <Text type={'a'} classes={'e-body1 e-text-cyan-A200'}> account</Text>
                  </Text>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>
                  <Block className={'e-left'}>
                    <List type={'navigation'}>
                      <ListItem>
                      <Text type={'a'}>
                        <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
                        <Block classes={'content e-left e-no-padding smaller-text-list'}>
                          <Text type={'span'} classes={'e-text-left e-body1'}>Remember me</Text>
                        </Block>
                      </Text>
                      </ListItem>
                    </List>
                  </Block>
                  <Block className={'e-right e-padding-top-20'}>
                    <Text type={'a'} classes={'e-text-right e-body1 e-text-cyan-A200 '}>Forgot password?</Text>
                  </Block>
                  <Block>
                    <Btn label={'SIGN IN'} ripple={false} type={'submit'} classes={'flat e-background-cyan-A200 e-text-white full-width'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-300'}>Sign in to your account</Text>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-4 e-h-center e-v-center'}>
              <Card className={'e-background-white full-width'}>
                <CardHeader>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Sign Up</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                  <Divider classes={'thinnest e-background-grey-200'} />
                </CardHeader>
                <CardContent>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Confirm password'} classes={'e-text-grey-300 input-look'}/>
                  <Block className={'e-left'}>
                    <List type={'navigation'}>
                      <ListItem>
                      <Text type={'a'}>
                        <Icon name={"navigation-apps"} className={"e-text-cyan-A200 e-left"} />
                        <Block classes={'content e-left e-no-padding smaller-text-list'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200 e-body1'}>Date of birth</Text>
                        </Block>
                      </Text>
                      </ListItem>
                    </List>
                  </Block>
                  <Block className={'e-right'}>
                    <List type={'navigation'}>
                      <ListItem>
                      <Text type={'a'}>
                        <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
                        <Block classes={'content e-left e-no-padding smaller-text-list'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200 e-body1'}>Male</Text>
                        </Block>
                      </Text>
                      <Text type={'a'}>
                        <Switch type={'checkbox'} classes={'e-left'} name='radioButton'/>
                        <Block classes={'content e-left e-no-padding smaller-text-list'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200 e-body1'}>Female</Text>
                        </Block>
                      </Text>
                    </ListItem>
                  </List>
                  </Block>
                  <Block>
                    <Btn label={'SIGN UP'} ripple={false} type={'submit'} classes={'flat e-background-indigo-400 e-text-white full-width'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-4 e-h-end e-v-center'}>
              <Card className={'full-width background-city'}>
                <CardHeader>
                  Card header
                </CardHeader>
                <CardContent>
                Card content
                </CardContent>
              </Card>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaForms;
