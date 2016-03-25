import React from 'react';
import ClassNames from 'classnames';

import {Block,
  Btn,
  Card, CardHeader, CardContent, CardFooter,
  Divider,
  Icon,
  Image,
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
              <Card className={'e-background-white full-width card-sign'}>
                <CardHeader className={'border-header-card'}>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Sign In</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                </CardHeader>
                <CardContent>
                  <Text type={'p'} classes={'e-text-left e-text-grey-300 e-body1'}>Or create
                    <Text type={'a'} classes={'e-body1 e-text-cyan-A200'}> account</Text>
                  </Text>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>

                  <Block className={'e-left remember-display'}>
                    <Switch type={'checkbox'} text={'Remember me'} name={'switch-uncheckbox'} />
                  </Block>

                  <Block className={'e-right'}>
                    <Text type={'a'} classes={'e-text-right e-body1 e-text-cyan-A200 '}>Forgot password?</Text>
                  </Block>

                  <Block>
                    <Btn label={'SIGN IN'} ripple={true} type={'submit'} classes={'flat e-margin-top-15 e-background-cyan-A200 e-text-white full-width'} />
                  </Block>
                  <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-300 e-margin-top-15'}>Sign in to your account</Text>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-center e-v-center'}>
              <Card className={'e-background-white full-width card-sign'}>
                <CardHeader className={'e-text-left border-header-card'}>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Sign Up</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                </CardHeader>
                <CardContent>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'input-look input-focus'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Confirm password'} classes={'e-text-grey-300 input-look'}/>

                  <Block className={'e-left'}>
                      <Text type={'a'}>
                        <Icon name={"navigation-apps"} className={"e-text-cyan-A200 e-left"} />
                        <Block classes={'content e-left e-no-padding'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200'}>Date of birth</Text>
                        </Block>
                      </Text>
                  </Block>

                  <Block className={'e-right'}>
                    <Switch type={'radio'} classes={'e-left e-text-cyan-A200'} name='switch-radio' text={'Male'}/>
                    <Switch type={'radio'} classes={'e-right e-text-cyan-A200'} name='switch-radio' text={'Female'}/>
                  </Block>

                  <Block>
                    <Btn label={'SIGN UP'} ripple={true} type={'submit'} classes={'raised e-background-indigo-400 e-text-white e-margin-top-15 full-width'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-end e-v-center'}>
              <Card classes={'full-width bg-city e-text-white card-sign'}>
                <CardHeader className={'e-text-left border-header-card'}>
                  <Text type={'span'} classes={'e-text-left e-body1 e-text-white '}>Sign In</Text>
                  <Icon name={"hardware-keyboard-control"} className={"e-text-white e-display-1 e-right"} />
                </CardHeader>
                <CardContent>
                  <Text type={'h1'} classes={'e-text-left e-text-white e-headline'}>Kohalo&Co</Text>
                  <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum 5,dolor sit amet</Text>
                  <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum, dolor</Text>
                  <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>59000 Kuala Lumpur</Text>
                  <Text type={'p'} classes={'e-text-left e-text-white e-body1 e-margin-top-15'}>+(04) 745.123.525</Text>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12 e-h-center e-v-center'}>
              <Card classes={'e-background-indigo-400 full-width'}>
                <CardContent>
                  <List type={'inline'} className={'full-width'}>
                    <ListItem>
                      <Input type={'text'} name={'label'} label={'Name'} classes={'e-text-white input-look input-w'}/>
                    </ListItem>
                    <ListItem>
                      <Input type={'email'} name={'label'} label={'Email'} classes={'input-look input-w'}/>
                    </ListItem>
                    <ListItem>
                       <Input type={'email'} name={'label'} label={'Password'} classes={'input-look input-w'}/>
                    </ListItem>
                    <ListItem>
                      <Btn label={'Sign up'} ripple={true} type={'submit'} className={'flat e-margin-top-15 e-button e-text-indigo-400 e-background-cyan-A200 btn-look'} />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-4 e-h-start e-v-center'}>
              <Card className={'e-background-white full-width card-login'}>
                <CardHeader className={'border-header-card'}>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Login</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                </CardHeader>
                <CardContent className={'e-text-center'}>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>

                  <Text type={'a'} classes={'e-text-center e-body1 e-text-cyan-A200 '}>Forgot password?</Text>

                  <Block>
                    <Btn label={'SIGN IN'} ripple={true} type={'submit'} classes={'flat e-margin-top-25 e-background-cyan-A200 e-text-white full-width'} />
                  </Block>
                </CardContent>
                <CardFooter className={'e-text-center e-background-grey-200 e-margin-top-50'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-500 e-margin-top-15 para-inter'}>or</Text>
                  </Block>
                  <Icon name={"action-account-circle"} className={"e-text-grey-500 e-display-1 e-margin-bottom-15 margin-r-icon"} />
                  <Icon name={"action-face-unlock"} className={"e-text-grey-500 e-display-1 margin-r-icon"} />
                  <Icon name={"action-stars"} className={"e-text-grey-500 e-display-1"} />
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-center e-v-center'}>
              <Card classes={'e-background-indigo-400 full-width card-login'}>
                <CardContent>
                  <Text type={'h1'} classes={'e-text-center e-text-white e-display-1'}>Get designers products every day</Text>
                  <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'100px'} height={'100px'} alt={'Essence Image'} />
                  <Input type={'email'} name={'label'} label={'Your email'} classes={'e-text-grey-300 input-look'}/>
                  <Btn label={'Subscribe'} ripple={true} type={'submit'} className={'flat e-margin-top-15 e-button e-text-indigo-400 e-background-cyan-A200 full-width'} />
                </CardContent>
              </Card>
            </Block>
            <Block classes={'brick brick-4 e-h-end e-v-center'}>
              <Block classes={'e-row full-width'}>
                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Card classes={'e-background-white full-width'}>
                    <CardHeader className={'border-header-card'}>
                      <Text type={'span'} classes={'e-left e-body1'}>Restore Password</Text>
                      <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                    </CardHeader>
                    <CardContent className={'e-text-center'}>
                      <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                      <Block>
                        <Btn label={'Restore password'} ripple={true} type={'submit'} classes={'flat e-button e-margin-top-15 e-background-cyan-A200 e-text-white full-width'} />
                      </Block>
                    </CardContent>
                  </Card>
                </Block>

                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Card className={'e-background-white full-width'}>
                    <CardHeader className={'border-header-card'}>
                      <Text type={'span'} classes={'e-left e-body1'}>Change your email</Text>
                      <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                    </CardHeader>
                    <CardContent className={'e-text-center'}>
                      <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look input-focus'}/>
                      <Block>
                        <Btn label={'Change email'} ripple={true} type={'submit'} classes={'raised e-button e-background-indigo-400 e-text-white e-margin-top-15 full-width'} />                      </Block>
                    </CardContent>
                  </Card>
                </Block>
              </Block>

            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-4 e-h-start e-v-end'}>
              <Card className={'e-background-white full-width'}>
                <CardHeader className={'e-text-left border-header-card'}>
                  <Text type={'span'} classes={'e-text-left e-body1'}>Contact Us</Text>
                  <Icon name={"navigation-close"} className={"e-text-black e-right"} />
                </CardHeader>
                <CardContent>
                  <Input type={'text'} name={'label'} label={'Your Name'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'email'} name={'label'} label={'Your Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'textarea'} name={'label'} rows={5} label={'Your Message'} classes={'input-look'}/>
                  <Block classes={'e-left mg-top-attach'}>
                      <Text type={'a'}>
                        <Icon name={"editor-attach-file"} className={"e-text-cyan-A200 e-left"} />
                        <Block classes={'content e-left e-no-padding'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200'}>Attach file</Text>
                        </Block>
                      </Text>
                  </Block>

                  <Block className={'e-right'}>
                    <Btn label={'Sign in'} ripple={true} type={'submit'} className={'flat e-margin-bottom-15 e-margin-top-15 e-button e-text-white e-background-cyan-A200 btn-look'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-8 e-h-start e-v-end'}>
              <Card classes={'full-width no-padding-card card-h-contact'}>
                <CardContent>
                  <Block classes={'e-left half-width bg-city card-h-contact padding-card'}>
                    <Text type={'h1'} classes={'e-text-left e-text-white e-headline'}>Kohalo&Co</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum 5,dolor sit amet</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum, dolor</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>59000 Kuala Lumpur</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1 e-margin-top-15'}>+(04) 745.123.525</Text>
                  </Block>

                  <Block classes={'e-right half-width padding-card'}>
                    <Block classes={'full-width border-header-card'}>
                      <Text type={'p'} classes={'e-text-left e-body1'}>Contact Us</Text>
                    </Block>
                    <Input type={'text'} name={'label'} label={'Your Name'} classes={'e-text-grey-300 input-look'}/>
                    <Input type={'email'} name={'label'} label={'Your Email'} classes={'e-text-grey-300 input-look'}/>
                    <Input type={'textarea'} name={'label'} rows={5} label={'Your Message'} classes={'input-look'}/>
                    <Block classes={'e-left mg-top-attach'}>
                      <Text type={'a'}>
                        <Icon name={"editor-attach-file"} className={"e-text-cyan-A200 e-left"} />
                        <Block classes={'content e-left e-no-padding'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200'}>Attach file</Text>
                        </Block>
                      </Text>
                    </Block>
                    <Block className={'e-right'}>
                      <Btn label={'Sign in'} ripple={true} type={'submit'} className={'flat e-margin-top-15 e-margin-bottom-15 e-button e-text-white e-background-cyan-A200 btn-look'} />
                    </Block>
                    </Block>
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
