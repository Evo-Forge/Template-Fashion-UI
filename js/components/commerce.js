import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter, Image, Text, Divider, Menu, List, ListItem, Icon } from 'react-essence';

class PatagoniaCommerce extends React.Component {

  render() {
    return (
      <Block classes={'e-background-blue-700'}>
        <Block classes={'patagoniaCommerce e-container'}>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-200'}>
                <CardHeader classes={'card-align-row'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/shoe.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Club C85 Vintage</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-200'}>
                <CardHeader classes={'card-align-row'}>
                  <Block>
                  <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                  </Block>
                  <Block classes={'e-background-grey-200'}>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Hemingway</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Scarlett of Soho</Text>
                    <Block classes={'rating'}>
                      <Block classes={'rating-stars e-headline'}>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-left e-caption e-text-grey-500'}>&nbsp;&nbsp;&nbsp;439 reviews</Text>
                      </Block>
                    </Block>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Card classes={'e-background-white card-h-200'}>
            <CardHeader classes={'card-align-row'}>
              <Block>
                <Image classes={'e-img-rsp'} src={'assets/img/handbags.jpg'} />
              </Block>
              <Block classes={'e-background-grey-200'}>
                <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Lapis O Lupo</Text>
                <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
                <Text type={'span'} classes={'e-text-left e-display-1 e-text-black'}>$230</Text>
                <Btn label={'Visit Store'} ripple={true} type={'succes'} className={'flat e-background-blue-200'} />
              </Block>
            </CardHeader>
          </Card>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/beats.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Beats by Dr. Dre - Beats Studio Over-the-Ear</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Hilton Cotton Light</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$130</Text>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>G-SHOCK</Text>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>GD-X6900HT-3ER Greem</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Denim Series Navy</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>Ragently viewed</Text>
                  </Block>
                  <Divider classes={'thinnest e-background-grey-200'} />
                  <Block classes={'card-align-row'}>
                    <Block>
                      <Image classes={'e-img-rsp'} src={'assets/img/scarf.png'} />
                    </Block>
                    <Block>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Boston Marathon</Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-black'}>$130</Text>
                      <Text type={'a'} classes={'e-text-left e-caption e-text-blue-300'}>See item</Text>
                    </Block>
                  </Block>
                  <Divider classes={'thinnest e-background-grey-200'} />
                  <Block classes={'card-align-row'}>
                    <Block>
                      <Image classes={'e-img-rsp'} src={'assets/img/gloves.jpg'} />
                    </Block>
                    <Block>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Bay Sic Style</Text>
                      <Text type={'p'} classes={'e-text-left e-body1 e-text-black'}>$12.20</Text>
                      <Text type={'a'} classes={'e-text-left e-caption e-text-blue-300'}>See item</Text>
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                  <Text type={'span'} classes={'e-text-left e-body2 e-text-black'}>Colors</Text>
                  <Menu type={'cover'} icon={'hardware-keyboard-control'} className={'e-right e-headline e-text-grey-300'}>
                    <Text className={'e-text-black'}>Profile</Text>
                    <Text className={'e-text-black'}>Settings</Text>
                    <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Divider classes={'thinnest e-background-grey-200'} />
                  <List type={'navigation'} classes={'e-twolinelist'}>
                   <ListItem>
                    <Text type={'a'}>
                     <Image src={'http://i.imgur.com/5bteaK6.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>
                     <Block classes={'content e-left'}>
                      <Text classes={'primary'}>Johnny Bravo</Text>
                      <Text classes={'secondary'}>Jan 9, 2016</Text>
                     </Block>
                     <Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                     <Image src={'http://i.imgur.com/xrDnt12.png'} alt={'Star Wars'} classes={'e-avatar e-left'}/>
                     <Block classes={'content e-left'}>
                      <Text classes={'primary'}>Uncle Bear</Text>
                      <Text classes={'secondary'}>Jan 10, 2016</Text>
                     </Block>
                     <Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                     <Image src={'http://i.imgur.com/DhsdGIs.jpg'} alt={'Star Wars'} classes={'e-avatar e-left'}/>
                     <Block classes={'content e-left'}>
                      <Text classes={'primary'}>Mutant Ninja</Text>
                      <Text classes={'secondary'}>Jan 11, 2016</Text>
                     </Block>
                     <Icon name={'action-info'} classes={'e-right e-text-grey-500'} />
                    </Text>
                   </ListItem>
                  </List>
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column e-text-center'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/shirt.jpg'} />
                  </Block>
                  <Block>
                    <Block classes={'rating'}>
                      <Block classes={'rating-stars e-headline'}>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                      </Block>
                    </Block>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Lacoste</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$230</Text>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/iphone.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>iPhone 5S 16GB</Text>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Space Grey Unlocked</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Hilton Cotton Light blue</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-row'}>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/blouse.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Club C85 Vintage</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                    <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-row e-background-cyan-300'}>
                  <Block>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Club C85 Vintage</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                    <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>$360</Text>
                    <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                  </Block>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/asics-shirt.png'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                 Card content
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                 Card content
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                 Card content
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                  Card content
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                 Card content
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Card classes={'e-background-white card-h-400'}>
            <CardHeader>
             Card content
            </CardHeader>
          </Card>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-8'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                 Card content
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-4'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                  Card content
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Card classes={'e-background-white card-h-400'}>
            <CardHeader>
             Card content
            </CardHeader>
          </Card>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaCommerce;
