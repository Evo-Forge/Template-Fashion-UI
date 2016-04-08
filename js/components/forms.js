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
  Menu,
  Text } from 'react-essence';

import Stepper from 'essence-stepper';

class PatagoniaForms extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      articleNumber : 1
    }
  }
  removeItem() {
    console.log("merge remove");
    this.setState (
      {
        articleNumber : this.state.articleNumber - 1
      }
    );
  }
  addItem() {
    console.log("merge add");
    this.setState (
      {
        articleNumber : this.state.articleNumber + 1
      }
    );
  }

  render() {

    const Steps = {
     'editable': [
      {
       'title': (<Text>Cart</Text>),
       'content': (
          <Block classes={'e-background-white'}>
            <List type={'navigation'} classes={'e-twolinelist e-no-padding'}>
              <ListItem classes={'padding-list-stepper'}>
                <Text type={'a'}>
                  <Image src={'assets/img/blue-tshirt.jpg'} alt={'TShirt'} classes={'article-image e-left'}/>
                  <Block classes={'content e-left btn-margin-nr'}>
                    <Text classes={'primary e-text-left'}>Blue TShirt</Text>
                    <Text classes={'secondary e-text-left'}>Hooligan</Text>
                  </Block>
                  <Block className={'e-left border-btn-nr margin-nr'}>
                    <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={false} type={'default'}  classes={'btn-margin-nr e-background-white'} />
                    <Text type={'span'} classes={'e-text-center e-text-black span-number'}>{this.state.articleNumber}</Text>
                    <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={false} type={'default'} classes={'btn-margin-nr e-background-white'} />
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-background-grey-200 span-size'}>M</Text>
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-text-uppercase'}>$25</Text>
                  </Block>
                  <Block>
                    <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-right e-text-cyan-A200 e-background-white icon-close close-btn-align'} />
                  </Block>
                </Text>
              </ListItem>
              <ListItem classes={'padding-list-stepper e-background-grey-100'}>
                <Text type={'a'}>
                  <Image src={'assets/img/poza-pantalon.jpg'} alt={'trausers'} classes={'article-image e-left'}/>
                  <Block classes={'content e-left btn-margin-nr'}>
                    <Text classes={'primary e-text-left'}>Navy Trousers</Text>
                    <Text classes={'secondary e-text-left e-text-uppercase'}>Navy god</Text>
                  </Block>
                  <Block className={'e-left border-btn-nr margin-nr e-background-grey-400'}>
                    <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={false} type={'default'} classes={'btn-margin-nr e-text-white e-background-grey-400'} />
                    <Text type={'span'} classes={'e-text-center e-text-white e-background-grey-400 span-number'}>{this.state.articleNumber}</Text>
                    <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={false} type={'default'} classes={'btn-margin-nr e-text-white e-background-grey-400'} />
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-background-white span-size'}>XS</Text>
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-text-uppercase'}>$35</Text>
                  </Block>
                  <Block>
                    <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-right e-text-cyan-A200 e-background-grey-100 icon-close close-btn-align'} />
                  </Block>
                </Text>
              </ListItem>
              <ListItem classes={'padding-list-stepper'}>
                <Text type={'a'}>
                  <Image src={'assets/img/watch.jpg'} alt={'TShirt'} classes={'article-image e-left'}/>
                  <Block classes={'content e-left btn-margin-nr'}>
                    <Text classes={'primary e-text-left'}>Peaceful Hooligan</Text>
                    <Text classes={'secondary e-text-left e-text-uppercase'}>Sold by Kgr</Text>
                  </Block>
                  <Block className={'e-left border-btn-nr margin-nr'}>
                    <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={false} type={'default'} classes={'btn-margin-nr e-background-white'} />
                    <Text type={'span'} classes={'e-text-center e-text-black span-number'}>{this.state.articleNumber}</Text>
                    <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={false} type={'default'} classes={'btn-margin-nr e-background-white'} />
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-background-grey-200 span-size'}>XXL</Text>
                  </Block>
                  <Block classes={'e-left e-text-center margin-nr size'}>
                    <Text type={'span'} classes={'e-text-uppercase'}>$117</Text>
                  </Block>
                  <Block>
                    <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-right e-text-cyan-A200 e-background-white icon-close close-btn-align'} />
                  </Block>
                </Text>
              </ListItem>
              <ListItem classes={'padding-list-stepper border-t-discount e-padding-top-15 e-padding-15'}>
                <Text type={'a'}>
                  <Text type={'span'} classes={'e-button e-left align-discount'}>Discount: <b> -20$</b></Text>
                  <Text type={'p'} classes={'e-text-grey-400 e-text-right e-body1 e-text-uppercase'}>Total:
                  <Text type={'span'} classes={'e-text-right e-text-uppercase e-text-black e-subhead padding-r-para'}> &645</Text></Text>
                </Text>
              </ListItem>
              <ListItem classes={'padding-list-stepper e-background-grey-100 e-padding-top-15 e-padding-bottom-15'}>
                <Text type={'a'}>
                  <Btn label={'Back to shop'} ripple={true} type={'default'} className={'flat e-button e-left e-background-grey-300'} />
                  <Btn label={'Proceed to checkout'} ripple={true} type={'default'} classes={'flat e-background-indigo-400 e-text-white align-btn-continue'} />
                </Text>
              </ListItem>
            </List>
          </Block>
       )
      },
      {
       'title': (<Text>Checkout</Text>),
       'content': (
         <Block className={'e-background-white'}>
          <Block className={'checkout-w'}>
            <Block className={'padding-card e-text-center'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Block classes={'border-input-icon full-width'}>
                    <Input type={'text'} name={'label'} placeholder={'weerd@gmail.com'} classes={'with-icon with-bg'}/>
                    <Block classes={'visa-bg bg-in-input'}>
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-6 e-h-start e-v-start'}>
                  <Menu type={'cover'} placeholder={'Month'} classes={'full-width month e-margin-top-15'}>
                    <Text className={'e-text-black'}>January</Text>
                    <Text className={'e-text-black'}>February</Text>
                    <Text className={'e-text-black'}>March</Text>
                    <Text className={'e-text-black'}>April</Text>
                    <Text className={'e-text-black'}>May</Text>
                    <Text className={'e-text-black'}>June</Text>
                    <Text className={'e-text-black'}>July</Text>
                    <Text className={'e-text-black'}>August</Text>
                    <Text className={'e-text-black'}>September</Text>
                    <Text className={'e-text-black'}>October</Text>
                    <Text className={'e-text-black'}>November</Text>
                    <Text className={'e-text-black'}>December</Text>
                  </Menu>
                </Block>
                <Block classes={'brick brick-6 e-h-end e-v-end'}>
                  <Input type={'number'} name={'label'} placeholder={'Year'} hint={'1980'} min="1920" max="2016" classes={'full-width input-look e-no-padding year'}/>
                </Block>
              </Block>
              <Block classes={'e-row'}>
              <Block classes={'brick brick-6 e-h-end e-v-end'}>
                <Input type={'text'} name={'label'} label={'CVV'} classes={'e-text-grey-300 input-look full-width'}/>
              </Block>
              <Block classes={'brick brick-6 e-h-start e-v-end'}>
                <Block classes={'full-width mg-b-caption'}>
                  <Text type={'p'} classes={'e-text-left e-caption e-no-margin'}>3 or 4 digits usually found</Text>
                  <Text type={'p'} classes={'e-text-left e-caption e-no-margin'}>on the signature strip</Text>
                </Block>
              </Block>
              </Block>
            </Block>
          </Block>
          <Block>
            <Text type={'a'} classes={'e-text-center e-body1 e-text-cyan-A200 e-margin-top-15 a-inter'}>Or pay with PayPal</Text>
          </Block>
            <Block className={'checkout-w'}>
            <Block className={'padding-card'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-6 e-h-end e-v-end'}>
                  <Input type={'email'} name={'label'} label={'Email Address'} classes={'e-text-grey-300 input-look full-width'}/>
                </Block>
                <Block classes={'brick brick-6 e-h-start e-v-end'}>
                  <Block classes={'full-width mg-b-btn'}>
                    <Btn label={'PayPal'} ripple={true} type={'default'} classes={'flat e-background-indigo-900 e-text-white full-width'} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
          <Block classes={'e-background-grey-100 e-padding-top-15'}>
            <Block className={'footer-checkout-w'}>
              <Btn label={'Back to shop'} ripple={true} type={'default'} className={'flat e-button e-left e-background-grey-300 e-margin-bottom-15'} />
              <Btn label={'Pay $645'} ripple={true} type={'default'} classes={'flat e-background-indigo-400 e-text-white align-btn-continue e-right btn-look'} />
            </Block>
          </Block>
        </Block>
       )
      },
      {
       'title': (<Text>Shipping</Text>),
       'content': (
          <Block className={'e-background-white'}>
            <Block className={'checkout-w'}>

                <Block classes={'e-row'}>
                  <Block classes={'brick brick-6 e-h-end e-v-end'}>
                    <Input type={'text'} name={'label'} label={'First Name'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                  <Block classes={'brick brick-6 e-h-start e-v-end'}>
                    <Input type={'text'} name={'label'} label={'Last Name'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                </Block>
                <Block classes={'e-row'}>
                  <Block classes={'brick brick-6 e-h-end e-v-end'}>
                    <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                  <Block classes={'brick brick-6 e-h-start e-v-end'}>
                    <Input type={'text'} name={'label'} label={'Phone'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                </Block>
                <Block classes={'e-row'}>
                  <Block classes={'brick brick-4 e-h-start e-v-center'}>
                    <Input type={'text'} name={'label'} label={'Country'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                  <Block classes={'brick brick-4 e-h-center e-v-center'}>
                    <Input type={'text'} name={'label'} label={'City'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                  <Block classes={'brick brick-4 e-h-end e-v-center'}>
                    <Input type={'email'} name={'label'} label={'Zip Code'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                </Block>
                <Block classes={'e-row'}>
                  <Block classes={'brick brick-4 e-h-end e-v-end'}>
                    <Input type={'text'} name={'label'} label={'State'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                  <Block classes={'brick brick-8 e-h-start e-v-end'}>
                    <Input type={'text'} name={'label'} label={'Address'} classes={'e-text-grey-300 input-look full-width'}/>
                  </Block>
                </Block>
            </Block>

            <Block classes={'e-background-grey-100 e-padding-top-15'}>
              <Block className={'footer-checkout-w'}>
                <Btn label={'Back to shop'} ripple={true} type={'default'} className={'flat e-button e-left e-background-grey-300 e-margin-bottom-15'} />
                <Btn label={'Pay $645'} ripple={true} type={'default'} classes={'flat e-background-indigo-400 e-text-white align-btn-continue e-right btn-look'} />
              </Block>
            </Block>
         </Block>
       )
     },
     {
      'title': (<Text>Done</Text>),
      'content': (
        <Block className={'e-background-white'}>
          <Block className={'checkout-w e-padding-top-50 e-padding-bottom-25'}>
            <Block className={'bl-done'}>
              <Icon name={"action-done"} className={"e-background-cyan-A200 e-text-white e-display-2 done-icon"} />
            </Block>
            <Text type={'p'} classes={'e-text-center e-text-grey-800 e-display-2 e-padding-top-25'}>Congratulations! Your Order is Complete!</Text>
            <Text type={'p'} classes={'e-text-center e-text-grey-800 padding-list-stepper'}>
              Lorem ipsum dolor sit amet, sed eu prima consectetuer:<br/> Duis habeo mediocrem an sed, qui id utamur complectitur, te ignota constituam vituperatoribus est. No errem luptatum pri.
            </Text>
          </Block>
          <Block classes={'e-background-grey-100 e-padding-top-15 e-padding-bottom-15'}>
              <Btn label={'Back to Shop'} ripple={true} type={'default'} classes={'flat e-background-indigo-400 e-text-white btn-look'} />
          </Block>
        </Block>
      )
     }
     ]
     };

    return (
      <Block className={'e-background-grey-100'}>
        <Block className={'patagoniaForms e-container e-padding-bottom-150'}>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-12 e-h-center e-v-center'}>
              <Text type={'p'} classes={'e-text-center e-headline e-text-indigo-400 badge-header'}>4</Text>
              <Text type={'h1'} classes={'e-text-center e-display-3 e-padding-top-50 e-padding-bottom-50 background-rainbow e-no-margin'}><b>FORMS</b> </Text>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-4 e-h-start e-v-center'}>
              <Card className={'e-background-white full-width card-sign'}>
                <CardHeader className={'border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Sign In</Text>
                  <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                </CardHeader>
                <CardContent>
                  <Text type={'p'} classes={'e-text-left e-text-grey-300 e-body1'}>Or create
                    <Text type={'a'} classes={'e-body1 e-text-cyan-A200'}> account</Text>
                  </Text>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>

                  <Block className={'e-left remember-display e-margin-top-15'}>
                    <Switch type={'checkbox'} text={'Remember me'} name={'switch-uncheckbox'} />
                  </Block>

                  <Block className={'e-right e-margin-top-15'}>
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
                <CardHeader className={'e-text-left border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Sign Up</Text>
                  <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                </CardHeader>
                <CardContent>
                  <Block classes={'border-input-icon'}>
                    <Input type={'email'} name={'label'} placeholder={'weerd@gmail.com'} classes={'with-icon'}/>
                    <Icon name={"action-done"} className={"e-text-cyan-A200 e-right icon-in-input"} />
                  </Block>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Confirm password'} classes={'e-text-grey-300 input-look'}/>

                  <Block className={'e-left e-margin-top-15'}>
                      <Text type={'a'}>
                        <Icon name={"navigation-apps"} className={"e-text-cyan-A200 e-left"} />
                        <Block classes={'content e-left e-no-padding'}>
                          <Text type={'span'} classes={'e-text-left e-text-cyan-A200'}>Date of birth</Text>
                        </Block>
                      </Text>
                  </Block>

                  <Block className={'e-right e-margin-top-15'}>
                    <Switch type={'radio'} classes={'e-left e-text-cyan-A200'} name='switch-radio' text={'Male'}/>
                    <Switch type={'radio'} classes={'e-right e-text-cyan-A200'} name='switch-radio' text={'Female'}/>
                  </Block>

                  <Block>
                    <Btn label={'SIGN UP'} ripple={true} type={'submit'} classes={'raised e-background-indigo-400 e-text-white e-margin-top-15 full-width'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-end e-v-end'}>
              <Card classes={'full-width bg-city e-text-white card-sign'}>
                <CardHeader className={'e-text-left border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 e-text-white align-title'}>Sign In</Text>
                  <Menu type={'cover'} icon={'hardware-keyboard-control'} classes={'e-right e-headline e-text-left e-text-white margin-r-icon'}>
                    <Text className={'e-text-black'}>Login</Text>
                    <Text className={'e-text-black'}>Account Settings</Text>
                    <Text className={'e-text-black'}>Cart</Text>
                  </Menu>
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
                      <Input type={'text'} name={'label'} label={'Name'} classes={'input-look input-w text-focus-white'}/>
                    </ListItem>
                    <ListItem>
                      <Input type={'email'} name={'label'} label={'Email'} classes={'input-look input-w text-focus-white'}/>
                    </ListItem>
                    <ListItem>
                       <Input type={'email'} name={'label'} label={'Password'} classes={'input-look input-w text-focus-white'}/>
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
              <Card classes={'e-background-white full-width card-login'}>
                <CardHeader classes={'border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Login</Text>
                  <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                </CardHeader>
                <CardContent className={'e-text-center'}>
                  <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look'}/>
                  <Input type={'text'} name={'label'} label={'Password'} classes={'e-text-grey-300 input-look'}/>
                  <Text type={'a'} classes={'e-text-center e-body1 e-text-cyan-A200 '}>Forgot password?</Text>
                  <Block>
                    <Btn label={'SIGN IN'} ripple={true} type={'submit'} classes={'flat e-margin-top-15 e-background-cyan-A200 e-text-white full-width'} />
                  </Block>
                </CardContent>
                <CardFooter className={'e-text-center e-background-grey-200 e-margin-top-25'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-500 e-margin-top-15 para-inter'}>or</Text>
                  </Block>
                  <Text type={'a'} classes={'e-text-center'}>
                    <i className={'fa fa-twitter fa-look e-margin-top-15 e-text-white e-background-grey-500 e-margin-bottom-15'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-center'}>
                    <i className={'fa fa-facebook e-text-white e-background-grey-500 fa-look facebook'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-center'}>
                    <i className={'fa fa-google e-text-white e-background-grey-500 fa-look google'}></i>
                  </Text>
                </CardFooter>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-center e-v-center'}>
              <Card classes={'e-background-indigo-400 full-width card-login'}>
                <CardContent>
                  <Text type={'h1'} classes={'e-text-center e-text-white e-display-1'}>Get designers products every day</Text>
                  <Image src={'http://getessence.io/assets/img/essence_icon.png'} width={'100px'} height={'100px'} alt={'Essence Image'} />
                  <Input type={'email'} name={'label'} label={'Your email'} classes={'input-look text-focus-white'}/>
                  <Btn label={'Subscribe'} ripple={true} type={'submit'} className={'flat e-margin-top-15 e-button e-text-indigo-400 e-background-cyan-A200 full-width'} />
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-4 e-h-end e-v-center'}>
              <Block classes={'e-row full-width'}>
                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Card classes={'e-background-white full-width'}>
                    <CardHeader className={'border-header-card e-no-padding'}>
                      <Text type={'span'} classes={'e-left e-body1 align-title'}>Restore Password</Text>
                      <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
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
                    <CardHeader className={'border-header-card e-no-padding'}>
                      <Text type={'span'} classes={'e-left e-body1 align-title'}>Change your email</Text>
                      <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                    </CardHeader>
                    <CardContent className={'e-text-center'}>
                      <Input type={'email'} name={'label'} label={'weerd@gmail.com'} classes={'e-text-grey-300 input-look input-focus'}/>
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
                <CardHeader className={'e-text-left border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Contact Us</Text>
                  <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
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
              <Card classes={'full-width no-padding-card'}>
                <CardContent>
                  <Block classes={'e-left half-width bg-city padding-card card-h-contact'}>
                    <Text type={'h1'} classes={'e-text-left e-text-white e-headline'}>Kohalo&Co</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum 5,dolor sit amet</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>Lorem ipsum, dolor</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1'}>59000 Kuala Lumpur</Text>
                    <Text type={'p'} classes={'e-text-left e-text-white e-body1 e-margin-top-15'}>+(04) 745.123.525</Text>
                  </Block>

                  <Block classes={'e-right half-width e-background-white'}>
                    <Block classes={'full-width border-header-card'}>
                      <Text type={'p'} classes={'e-text-left e-body1 align-title'}>Contact Us</Text>
                    </Block>
                    <Block classes={'padding-card'}>
                      <Input type={'text'} name={'label'} label={'Your Name'} classes={'e-text-grey-300 input-look'}/>
                      <Input type={'email'} name={'label'} label={'Your Email'} classes={'e-text-grey-300 input-look'}/>
                      <Input type={'textarea'} name={'label'} rows={5} label={'Your Message'} classes={'input-look'}/>
                      <Block classes={'e-left mg-top-attach '}>
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
                  </Block>
                </CardContent>
              </Card>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-6 e-h-start e-v-end'}>
              <Card classes={'full-width e-background-white no-padding-card card-h-account'}>
                <CardHeader classes={'e-text-left border-header-card e-no-padding'}>
                  <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Account Settings</Text>
                  <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                </CardHeader>
                <CardContent>
                  <Block className={'card-content-header'}>
                    <Image src={'assets/img/poza-profil.jpg'} alt={'John Smith'} classes={'e-left avatar-card'}/>
                    <Icon name={"navigation-expand-more"} className={'e-left e-text-white e-background-cyan-A200 round-icon'} />
                    <Block classes={'e-left padding-left-para'}>
                      <Text type={'h2'} classes={'e-text-left e-headline'}>John Smith</Text>
                      <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-600'}>Senior Product Designer (UI/UX)</Text>
                    </Block>
                  </Block>
                  <Block className={'padding-card e-text-center'}>
                    <Block classes={'e-row'}>
                      <Block classes={'brick brick-6 e-h-end e-v-end'}>
                        <Input type={'text'} name={'label'} label={'First Name'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                      <Block classes={'brick brick-6 e-h-start e-v-end'}>
                        <Input type={'text'} name={'label'} label={'Last Name'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                    </Block>
                    <Block classes={'e-row'}>
                      <Block classes={'brick brick-6 e-h-end e-v-end'}>
                        <Input type={'text'} name={'label'} label={'USA'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                      <Block classes={'brick brick-6 e-h-start e-v-end'}>
                        <Input type={'text'} name={'label'} label={'Position'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                    </Block>
                    <Block classes={'e-row'}>
                      <Block classes={'brick brick-6 e-h-end e-v-end'}>
                        <Input type={'text'} name={'label'} label={'Address'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                      <Block classes={'brick brick-6 e-h-start e-v-end'}>
                        <Input type={'text'} name={'label'} label={'Phone'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                    </Block>
                    <Block classes={'e-row'}>
                      <Block classes={'brick brick-12 e-h-center e-v-center'}>
                        <Input type={'email'} name={'label'} label={'Email'} classes={'e-text-grey-300 input-look full-width'}/>
                      </Block>
                    </Block>
                  </Block>
                  <Block className={'e-text-center btn-inter'}>
                    <Btn label={'Save'} ripple={true} type={'submit'} className={'flat e-margin-top-15 e-margin-bottom-25 e-button e-text-white e-background-cyan-A200 btn-save-w'} />
                  </Block>
                </CardContent>
              </Card>
            </Block>

            <Block classes={'brick brick-6 e-h-end e-v-end'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Card classes={'e-background-white no-padding-card full-width'}>
                    <CardHeader classes={'e-text-left border-header-card e-no-padding'}>
                      <Text type={'span'} classes={'e-text-left e-body1 align-title'}>Credit Card Detail</Text>
                      <Btn icon={'navigation-close'} ripple={true} type={'fab-mini'} classes={'fab-mini e-background-white e-right icon-close'} />
                    </CardHeader>
                    <CardContent>
                      <Block className={'padding-card e-text-center'}>
                        <Block classes={'e-row'}>
                          <Block classes={'brick brick-12 e-h-center e-v-center'}>
                            <Block classes={'border-input-icon full-width'}>
                              <Input type={'text'} name={'label'} placeholder={'weerd@gmail.com'} classes={'with-icon with-bg'}/>
                              <Block classes={'visa-bg bg-in-input'}>
                              </Block>
                            </Block>
                          </Block>
                        </Block>
                        <Block classes={'e-row'}>
                          <Block classes={'brick brick-6 e-h-start e-v-start'}>
                            <Menu type={'cover'} placeholder={'Month'} classes={'full-width month e-margin-top-15'}>
                              <Text className={'e-text-black'}>January</Text>
                              <Text className={'e-text-black'}>February</Text>
                              <Text className={'e-text-black'}>March</Text>
                              <Text className={'e-text-black'}>April</Text>
                              <Text className={'e-text-black'}>May</Text>
                              <Text className={'e-text-black'}>June</Text>
                              <Text className={'e-text-black'}>July</Text>
                              <Text className={'e-text-black'}>August</Text>
                              <Text className={'e-text-black'}>September</Text>
                              <Text className={'e-text-black'}>October</Text>
                              <Text className={'e-text-black'}>November</Text>
                              <Text className={'e-text-black'}>December</Text>
                            </Menu>
                          </Block>
                          <Block classes={'brick brick-6 e-h-end e-v-end'}>
                            <Input type={'number'} name={'label'} placeholder={'Year'} hint={'1980'} min="1920" max="2016" classes={'full-width input-look e-no-padding year'}/>
                          </Block>
                        </Block>
                        <Block classes={'e-row'}>
                        <Block classes={'brick brick-6 e-h-start e-v-end'}>
                          <Input type={'text'} name={'label'} label={'CVV'} classes={'e-text-grey-300 input-look full-width'}/>
                        </Block>
                        <Block classes={'brick brick-6 e-h-end e-v-end'}>
                          <Block classes={'full-width mg-b-para'}>
                            <Text type={'p'} classes={'e-text-left e-body1'}>3 or 4 digits usually found</Text>
                            <Text type={'p'} classes={'e-text-left e-body1'}>on the signature strip</Text>
                          </Block>
                        </Block>
                        </Block>
                      </Block>
                      <Block className={'e-text-center btn-inter'}>
                        <Btn label={'Save'} ripple={true} type={'submit'} classes={'raised e-margin-top-15 e-margin-bottom-25 e-button e-text-white e-background-indigo-400 btn-save-w'} />
                      </Block>
                    </CardContent>
                  </Card>
                </Block>

                <Block classes={'brick brick-12 e-h-center e-v-center'}>
                  <Card classes={'e-background-indigo-400 full-width'}>
                    <CardHeader classes={'e-background-indigo-500 e-text-center'}>
                      <Text type={'span'} classes={'e-text-white e-body1'}>Subscribe to our newsletter </Text>
                    </CardHeader>
                    <CardContent className={''}>
                      <Block classes={'e-row'}>
                        <Block classes={'brick brick-6 e-h-end e-v-end'}>
                          <Input type={'text'} name={'label'} label={'home@gmail.com'} classes={'input-look full-width text-focus-white'}/>
                        </Block>
                        <Block classes={'brick brick-6 e-h-start e-v-end'}>
                          <Btn label={'Submit'} ripple={true} type={'submit'} className={'flat e-button e-text-white e-background-cyan-A200 full-width mg-b-btn'} />
                        </Block>
                      </Block>
                    </CardContent>
                  </Card>
                </Block>
              </Block>
            </Block>
          </Block>

          <Block classes={'e-row'}>
            <Block classes={'brick brick-12 e-h-center e-v-center'}>
              <Block className={'full-width'}>
                <Stepper steps={Steps['editable']} classes={'cart'}/>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaForms;
