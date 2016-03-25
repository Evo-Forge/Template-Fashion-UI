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
                  <Block classes={'img-container-200'}>
                    <Image classes={'e-img-rsp'} src={'assets/img/shoe.jpg'} />
                    <Block classes={'slider-icons'}>
                      <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-black"} />
                      <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-black"} />
                    </Block>
                    <Btn icon={'action-star-rate'} ripple={true} type={'fab-mini'} className={'fab-mini like-btn e-background-white e-text-blue-200'} />
                  </Block>
                  <Block classes={'text-container-200'}>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Club C85 Vintage</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </Text>
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-subhead e-line-through e-text-grey-500'}>$360</Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-200'}>
                <CardHeader classes={'card-align-row'}>
                  <Block classes={'img-container-200'}>
                  <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                  </Block>
                  <Block classes={'e-background-grey-100 text-container-200'}>
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
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Card classes={'e-background-white card-h-200'}>
            <CardHeader classes={'card-align-row'}>
              <Block classes={'img-container-200'}>
                <Image classes={'e-img-rsp'} src={'assets/img/handbags.jpg'} />
              </Block>
              <Block classes={'e-background-grey-100 text-container-200'}>
                <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Lapis O Lupo</Text>
                <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </Text>
                <Block>
                  <Text type={'span'} classes={'e-text-left e-display-1 e-text-black'}>$459</Text>
                  <Btn label={'Visit Store'} ripple={true} type={'succes'} className={'flat e-background-blue-200'} />
                </Block>
              </Block>
            </CardHeader>
          </Card>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block classes={'img-container-400'}>
                    <Image classes={'e-img-rsp'} src={'assets/img/beats.jpg'} />
                  </Block>
                  <Block classes={'text-container-400'}>
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
                  <Block classes={'img-container-400'}>
                    <Btn label={'new'} ripple={true} type={'succes'} className={'flat new-btn e-background-blue-200 e-right'} />
                    <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                    <Btn icon={'action-favorite-outline'} ripple={true} type={'fab-mini'} className={'fab-mini bookmark-btn e-background-white e-text-blue-200'} />
                  </Block>
                  <Block classes={'text-container-400'}>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>G-SHOCK</Text>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>GD-X6900HT-3ER Greem</Text>
                    <Text type={'p'} classes={'e-text-center e-caption e-text-grey-500'}>Denim Series Navy</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Text type={'p'} classes={'e-body2 e-text-black'}>Ragently viewed</Text>
                  </Block>
                  <Divider classes={'thinnest e-background-grey-200'} />
                  <Block classes={'card-align-row'}>
                    <Block classes={'img-container-200'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/scarf.png'} />
                    </Block>
                    <Block classes={'text-container-200'}>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Boston Marathon</Text>
                      <Text type={'p'} classes={'e-text-left e-subhead e-text-black'}>$130</Text>
                      <Text type={'a'} classes={'e-text-left e-subhead e-text-blue-300'}>See item</Text>
                    </Block>
                  </Block>
                  <Divider classes={'thinnest e-background-grey-200'} />
                  <Block classes={'card-align-row'}>
                    <Block classes={'img-container-200'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/gloves.jpg'} />
                    </Block>
                    <Block classes={'text-container-200'}>
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
                  <List type={'navigation'}>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-indigo-400"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>White</Text>
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-grey-600"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Dark Grey</Text>
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-pink-100"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Light Pink</Text>
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-red"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Red</Text>
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-brown-800"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Brown</Text>
                    </Text>
                   </ListItem>
                   <ListItem>
                    <Text type={'a'}>
                      <Icon name={"image-brightness-1"} className={"e-text-yellow-100"} />
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Bitter Lime</Text>
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
                  <Block classes={'img-container-400'}>
                    <Btn label={'hot'} ripple={true} type={'succes'} className={'flat new-btn e-background-red-500 e-right'} />
                    <Image classes={'e-img-rsp'} src={'assets/img/shirt.jpg'} />
                  </Block>
                  <Block classes={'text-container-400'}>
                    <Block classes={'rating e-text-center'}>
                      <Block classes={'rating-stars e-headline e-text-center'}>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                      </Block>
                    </Block>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Lacoste</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block>
                      <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$960</Text>
                      <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$810</Text>
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block classes={'img-container-400'}>
                    <Image classes={'e-img-rsp'} src={'assets/img/iphone.jpg'} />
                  </Block>
                  <Block classes={'text-container-400'}>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>iPhone 5S 16GB</Text>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Space Grey Unlocked</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Hilton Cotton Light blue</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$115</Text>
                      <Text type={'span'} classes={'e-text-left e-caption e-text-grey-500'}>Available colors</Text>
                      <Icon name={"image-brightness-1"} className={"e-text-yellow-800"} />
                      <Icon name={"image-brightness-1"} className={"e-text-blue-400"} />
                      <Icon name={"image-brightness-1"} className={"e-text-red-800"} />
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-row'}>
                  <Block classes={'img-container-200'}>
                    <Image classes={'e-img-rsp'} src={'assets/img/blouse.jpg'} />
                    <Btn icon={'action-favorite-outline'} ripple={true} type={'fab-mini'} className={'fab-mini like-btn e-background-white e-text-blue-200'} />
                  </Block>
                  <Block classes={'text-container-200'}>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Club C85 Vintage</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                    <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </Text>
                    <Block>
                      <Btn label={'s'} ripple={true} type={'succes'} className={'flat e-background-grey-100 e-text-black'} />
                      <Btn label={'m'} ripple={true} type={'succes'} className={'flat e-background-grey-100 e-text-black'} />
                      <Btn label={'m'} ripple={true} type={'succes'} className={'flat e-background-grey-100 e-text-black'} />
                      <Btn label={'xl'} ripple={true} type={'succes'} className={'flat e-background-grey-100 e-text-black'} />
                    </Block>
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
          </Block>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-row e-background-cyan-100'}>
                  <Block>
                    <Block classes={'card-padding'}>
                      <Text type={'p'} classes={'e-text-left e-text-black e-display-2 e-text-uppercase'}>asics x reigning</Text>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Kitsune Buttoned Navy</Text>
                      <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$178</Text>
                        <Btn label={'Buy Now'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                      </Block>
                    </Block>
                  </Block>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/asics-shirt.png'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block classes={'img-container-400'}>
                    <Image classes={'e-img-rsp'} src={'assets/img/iphone6.jpg'} />
                    <Btn icon={'action-favorite-outline'} ripple={true} type={'fab-mini'} className={'fab-mini bookmark-btn e-background-white e-text-blue-200'} />
                  </Block>
                  <Block classes={'text-container-400'}>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>iPhone6s 16GB</Text>
                    <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Pink</Text>
                    <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Hilton Cotton Light Blue</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader>
                  <List type={'navigation'}>
                   <ListItem>
                    <Text type={'a'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Man</Text>
                      <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-grey-300 e-right"} />
                    </Text>
                   </ListItem>
                   <Divider classes={'thinnest e-background-grey-200'} />
                   <ListItem>
                    <Text type={'a'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Woman</Text>
                      <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-grey-300 e-right"} />
                    </Text>
                   </ListItem>
                   <Divider classes={'thinnest e-background-grey-200'} />
                   <ListItem>
                    <Text type={'a'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Kids</Text>
                      <Icon name={"navigation-close"} className={"e-text-black e-caption e-right"} />
                    </Text>
                   </ListItem>
                   <List classes={'e-background-grey-200'}>
                    <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}>Jackets</Text>
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}>Shirts</Text>
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}>Pants & Shorts</Text>
                      </Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}>Footwear</Text>
                      </Text>
                    </ListItem>
                   </List>
                   <ListItem>
                    <Text type={'a'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Shirts</Text>
                      <Icon name={"hardware-keyboard-arrow-down"} className={"e-text-grey-300 e-right"} />
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
                <CardHeader>
                  <Text type={'span'} classes={'e-text-left e-body2 e-text-black'}>Brands</Text>
                  <Menu type={'cover'} icon={'hardware-keyboard-control'} className={'e-right e-headline e-text-grey-300'}>
                    <Text className={'e-text-black'}>Profile</Text>
                    <Text className={'e-text-black'}>Settings</Text>
                    <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Divider classes={'thinnest e-background-grey-200'} />
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-6'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-row e-background-blue-400'}>
                  <Block>
                    <Block classes={'card-padding'}>
                      <Text type={'p'} classes={'e-text-left e-display-2 e-text-white e-text-uppercase'}>jenni high rise busted knee jeans</Text>
                      <Text type={'p'} classes={'e-text-left e-body2 e-text-white'}>
                        Boohoo Blue
                      </Text>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-white'}>$230</Text>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                  <Block>
                    <Image classes={'e-img-rsp'} src={'assets/img/girl.png'} />
                  </Block>
                </CardHeader>
              </Card>
            </Block>
            <Block classes={'brick brick-3'}>
              <Card classes={'e-background-white card-h-400'}>
                <CardHeader classes={'card-align-column'}>
                  <Block>
                    <Btn label={'hot'} ripple={true} type={'succes'} className={'flat new-btn e-background-red-500 e-right'} />
                    <Image classes={'e-img-rsp'} src={'assets/img/blouse.jpg'} />
                  </Block>
                  <Block>
                    <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Aqua Scutum</Text>
                    <Text type={'p'} classes={'e-text-center e-caption e-text-grey-500'}>Luther Grey</Text>
                    <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$160</Text>
                    <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$130</Text>
                  </Block>
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
