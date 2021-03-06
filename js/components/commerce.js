import React from 'react';
import ClassNames from 'classnames';

import { Block, Btn, Card, CardHeader, CardContent, CardFooter, Image, Text, Divider, Menu, List, ListItem, Icon, Input, Slider, Switch } from 'react-essence';

class PatagoniaCommerce extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pieceNumber : 0
    };
  }

  addItem() {
    this.setState(
      {
      pieceNumber : this.state.pieceNumber + 1,
      }
  );
  }

  removeItem() {
    this.setState(
      {
        pieceNumber : this.state.pieceNumber - 1,
      }
    );
  }

  render() {
    return (
      <Block classes={'patagoniaCommerce'}>
        <Block classes={'e-background-blue-700 e-container e-margin-top-50'}>
          <Block classes={'container'}>
            <Block classes={'e-text-center e-v-center e-h-center'}>
              <Text type={'span'} classes={'e-text-center e-title e-text-white badge'}>1</Text>
              <Text type={'span'} classes={'e-text-center e-display-3 e-text-uppercase background-rainbow'}>ecommerce</Text>
            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-6'}>
                <Card classes={'e-background-white ovflw card-h-200'}>
                  <CardHeader classes={'card-align-row'}>
                    <Block classes={'img-container-200'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/shoe.jpg'} />
                      <Block classes={'slider-icons'}>
                        <Text type={'a'}>
                          <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-black"} />
                        </Text>
                        <Text type={'a'}>
                          <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-black"} />
                        </Text>
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
                <Card classes={'e-background-white card-h-200 ovflw'}>
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
                      <Block classes={'card-align-row'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                        <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-right e-background-blue-700'} />
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
            <Card classes={'e-background-white ovflw card-h-200'}>
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
                    <Btn label={'Visit Store >'} ripple={true} type={'succes'} className={'flat e-right e-background-blue-200'} />
                  </Block>
                </Block>
              </CardHeader>
            </Card>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-400 ovflw'}>
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
                <Card classes={'e-background-white card-h-400 ovflw'}>
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
                      <Block classes={'card-align-row'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                        <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-background-blue-700'} />
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-400 ovflw'}>
                  <CardHeader classes={'card-align-column'}>
                    <Block>
                      <Text type={'span'} classes={' e-text-left e-subhead e-text-black'}>Ragently viewed</Text>
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
                        <Text type={'p'} classes={'e-text-left e-subhead e-text-black'}>$12.20</Text>
                        <Text type={'a'} classes={'e-text-left e-subhead e-text-blue-300'}>See item</Text>
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-400'}>
                  <CardHeader>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Colors</Text>
                    <Menu type={'cover'} icon={'hardware-keyboard-control'} className={'e-right e-display-1 e-text-grey-300'}>
                      <Text className={'e-text-black'}>
                       <Text>Option 1 </Text>
                      </Text>
                      <Text className={'e-text-black'}>
                       <Text>Option 2</Text>
                      </Text>
                      <Text className={'e-text-black'}>
                       <Text>Option 3</Text>
                      </Text>
                     </Menu>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <List type={'navigation'}>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-indigo-400 e-title show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Indigo</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-grey-600 show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Dark Grey</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-pink-100 show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Light Pink</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-red show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Red</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-brown-800 show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Brown</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'align-row'}>
                      <Text type={'a'} classes={'align-row'}>
                        <Icon name={"image-brightness-1"} className={"e-text-yellow-100 show"} />
                        <Icon name={"action-done"} className={"e-text-black hidden"} />
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
                      <Block classes={'rating e-text-center flex-center'}>
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
                <Card classes={'e-background-white card-h-400 ovflw'}>
                  <CardHeader classes={'card-align-column'}>
                    <Block classes={'img-container-400'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/iphone.jpg'} />
                    </Block>
                    <Block classes={'text-container-400'}>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>iPhone 5S 16GB</Text>
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Space Grey Unlocked</Text>
                      <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Hilton Cotton Light blue</Text>
                      <Divider classes={'thinnest e-background-grey-200'} />
                      <Block classes={'card-align-row'}>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$115</Text>
                        <Text type={'span'} classes={'e-text-left e-caption e-text-grey-500'}>Available colors</Text>
                        <Icon name={"image-brightness-1"} className={"e-text-yellow-800 e-headline"} />
                        <Icon name={"image-brightness-1"} className={"e-text-blue-400 e-headline"} />
                        <Icon name={"image-brightness-1"} className={"e-text-red-800 e-headline"} />
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
                      <Text type={'p'} classes={'e-text-left e-title e-text-black'}>Maison Kitsune</Text>
                      <Text type={'p'} classes={'e-text-left e-caption e-text-grey-500'}>Kitsune Buttoned Navy</Text>
                      <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                      </Text>
                      <Block>
                        <Btn label={'s'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        <Btn label={'m'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        <Btn label={'l'} ripple={true} type={'succes'} className={'flat size-btn active e-background-grey-100 e-text-black'} />
                        <Btn label={'xl'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                      </Block>
                      <Text type={'a'} classes={'e-text-left e-subhead e-text-blue-300'}>View size chart</Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                        <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-background-blue-700'} />
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-6'}>
                <Card classes={'e-background-white card-h-400 ovflw'}>
                  <CardHeader classes={'card-align-row e-background-cyan-100'}>
                    <Block classes={'text-container-200'}>
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
                    <Block classes={'img-container-200'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/asics-shirt.png'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-400 ovflw'}>
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
                      <Block classes={'card-align-row'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500 e-line-through'}>$360</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$230</Text>
                        <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-background-blue-700'} />
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
                <Card classes={'e-background-white card-h-400 ovflw'}>
                  <CardHeader>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Brands</Text>
                    <Menu type={'cover'} icon={'hardware-keyboard-control'} className={'e-right e-display-1 e-text-grey-300'}>
                      <Text className={'e-text-black'}>
                       <Text>Option 1 </Text>
                      </Text>
                      <Text className={'e-text-black'}>
                       <Text>Option 2</Text>
                      </Text>
                      <Text className={'e-text-black'}>
                       <Text>Option 3</Text>
                      </Text>
                     </Menu>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <List type={'navigation'}>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Onitsuka Tiger</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Patagonia Peaciful</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Hooligan Pelfield</Text>
                      </Text>
                     </ListItem>
                     <ListItem classes={'e-background-grey-100'}>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Porter-Yoshida</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Pringle of Scotland</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Puma</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Puma x Bape</Text>
                      </Text>
                     </ListItem>
                     <ListItem>
                      <Text type={'a'}>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-500'}>Reebok</Text>
                      </Text>
                     </ListItem>
                    </List>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-6'}>
                <Card classes={'e-background-white card-h-400 ovflw'}>
                  <CardHeader classes={'card-align-row e-background-blue-400'}>
                      <Block classes={'card-padding'}>
                        <Text type={'p'} classes={'e-text-left e-display-1 e-text-white e-text-uppercase'}>jenni high rise busted knee jeans</Text>
                        <Text type={'p'} classes={'e-text-left e-body2 e-text-white'}>
                          Boohoo Blue
                        </Text>
                        <Block classes={'price-btn e-h-center'}>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-white'}>$178</Text>
                          <Text type={'a'} classes={'e-text-left e-subhead left-border e-text-white e-text-uppercase'}>buy now</Text>
                        </Block>
                      </Block>
                      <Image classes={'e-img-rsp'} src={'assets/img/girl.png'} />
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-400'}>
                  <CardHeader classes={'card-align-column e-text-center'}>
                    <Block classes={'img-container-400'}>
                      <Btn label={'hot'} ripple={true} type={'succes'} className={'flat new-btn e-background-red-500 e-right'} />
                      <Image classes={'e-img-rsp'} src={'assets/img/hoodie.jpg'} />
                    </Block>
                    <Block classes={'text-container-400'}>
                      <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Aqua Scutum</Text>
                      <Text type={'p'} classes={'e-text-center e-caption e-text-grey-500'}>Luther Grey</Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$160</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$130</Text>
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
            <Card classes={'e-background-white card-h-400'}>
              <CardHeader>
                <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Best Sellers</Text>
                <Block classes={'slider-arrows e-right'}>
                  <Text type={'a'}>
                    <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-grey-300"} />
                  </Text>
                  <Text type={'a'}>
                    <Icon name={"hardware-keyboard-arrow-right"} className={"e-text-grey-300"} />
                  </Text>
                </Block>
                <Divider classes={'thinnest e-background-grey-200'} />
                <Block classes={'card-align-row'}>
                  <Block classes={'card-align-column border-right'}>
                    <Block classes={'img-container-400'}>
                      <Btn label={'new'} ripple={true} type={'succes'} className={'flat new-btn e-background-blue-200 e-right'} />
                      <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                    </Block>
                    <Block classes={'e-text-center'}>
                      <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Patagonia</Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$960</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$810</Text>
                      </Block>
                    </Block>
                  </Block>
                  <Block classes={'card-align-column border-right'}>
                    <Block classes={'img-container-400'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                    </Block>
                    <Block classes={'e-text-center'}>
                      <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Patagonia</Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$960</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$810</Text>
                      </Block>
                    </Block>
                  </Block>
                  <Block classes={'card-align-column border-right2'}>
                    <Block classes={'img-container-400'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                    </Block>
                    <Block classes={'e-text-center'}>
                      <Text type={'p'} classes={'e-text-center e-title e-text-black'}>Patagonia</Text>
                      <Block>
                        <Text type={'span'} classes={'e-text-center e-subhead e-text-grey-500 e-line-through'}>$960</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-black'}>$810</Text>
                      </Block>
                      <Btn label={'Visit Store >'} ripple={true} type={'succes'} className={'flat e-background-blue-700'} />
                    </Block>
                  </Block>
                  <Block classes={'card-align-column'}>
                    <Block classes={'img-container-400'}>
                      <Btn label={'hot'} ripple={true} type={'succes'} className={'flat new-btn e-background-red-500 e-right'} />
                      <Image classes={'e-img-rsp'} src={'assets/img/glasses.jpg'} />
                    </Block>
                    <Block classes={'e-text-center'}>
                      <Text type={'p'} classes={'e-text-center e-subhead e-text-black'}>Patagonia</Text>
                      <Text type={'span'} classes={'e-text-center e-display-1 e-text-black'}>$810</Text>
                    </Block>
                  </Block>
                </Block>
              </CardHeader>
            </Card>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-8'}>
                <Card classes={'e-background-white ovflw card-h-400'}>
                  <CardHeader classes={'card-align-row'}>
                    <Block classes={'text-container-200'}>
                      <Block classes={'card-padding'}>
                        <Text type={'p'} classes={'e-text-left e-text-black e-display-1'}>Asics X Reigning Champ</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                        <Text type={'p'} classes={'e-text-left e-body2 e-text-black'}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        </Text>
                        <Block>
                          <Btn label={'s'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'m'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'l'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'xl'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        </Block>
                        <Block>
                          <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-background-blue-700'} />
                        </Block>
                      </Block>
                    </Block>
                    <Block classes={'e-background-yellow-500 img-container-200'}>
                      <Btn label={'new'} ripple={true} type={'succes'} className={'flat new-btn2 e-background-blue-200 e-right'} />
                      <Image classes={'e-img-rsp'} src={'assets/img/asics-shirt.png'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-4'}>
                <Card classes={'e-background-white ovflw card-h-400'}>
                  <CardHeader>
                    <Block classes={'img-overlay'}>
                      <Image classes={'e-img-rsp'} src={'assets/img/side-shoe.jpg'} />
                      <Block classes={'text-overlay e-text-center'}>
                        <Text type={'h2'} classes={'e-text-center e-display-2 e-text-uppercase e-text-white'}>common projects</Text>
                        <Block classes={'price-btn e-h-center'}>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-white'}>$178</Text>
                          <Text type={'a'} classes={'e-text-left e-subhead left-border e-text-white e-text-uppercase'}>buy now</Text>
                        </Block>
                      </Block>
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
            <Card classes={'e-background-white card-h-700'}>
              <CardHeader>
                <Text type={'a'}>
                  <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-grey-300 e-subhead"} />
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Back to catalog</Text>
                </Text>
                <Menu type={'cover'} icon={'hardware-keyboard-control'} className={'e-right e-display-1 e-text-grey-300'}>
                  <Text className={'e-text-black'}>
                   <Text>Option 1 </Text>
                  </Text>
                  <Text className={'e-text-black'}>
                   <Text>Option 2</Text>
                  </Text>
                  <Text className={'e-text-black'}>
                   <Text>Option 3</Text>
                  </Text>
                 </Menu>
                <Divider classes={'thinnest e-background-grey-200'} />
                <Block classes={'card-align-row'}>
                  <Block classes={'img-container-200 card-align-row'}>
                    <Block classes={'thumb-col'}>
                      <Image classes={'e-img-rsp thumb active e-shadow-2'} src={'assets/img/thumb1.jpg'} />
                      <Image classes={'e-img-rsp thumb '} src={'assets/img/thumb2.jpg'} />
                      <Image classes={'e-img-rsp thumb'} src={'assets/img/thumb3.jpg'} />
                      <Image classes={'e-img-rsp thumb '} src={'assets/img/thumb4.jpg'} />
                      <Image classes={'e-img-rsp thumb'} src={'assets/img/thumb5.jpg'} />
                    </Block>
                    <Block classes={'large-img-col'}>
                      <Image classes={'e-img-rsp large-img'} src={'assets/img/thumb1.jpg'} />
                    </Block>
                  </Block>
                  <Block classes={'text-container-200 card-align-column'}>
                    <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-500'}>White Leather Tennis Sneakers</Text>
                    <Text type={'p'} classes={'e-text-left e-text-black e-display-1'}>Raf Simons</Text>
                    <Block classes={'rating'}>
                      <Block classes={'rating-stars e-headline'}>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-orange-400'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                        <Text type={'span'} classes={'e-text-center e-headline e-text-grey-300'}>&#9733;</Text>
                      </Block>
                    </Block>
                    <Text type={'p'} classes={'e-text-left e-subhead e-text-black'}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Text>
                    <Block classes={'card-align-row'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}> Select color </Text>
                      <Block classes={'colors align-row'}>
                        <List type={'navigation'} >
                         <ListItem>
                          <Text type={'a'}>
                            <Icon name={"image-brightness-1"} className={"e-text-indigo-400 e-title show"} />
                            <Icon name={"action-done"} className={"e-text-black hidden"} />
                          </Text>
                         </ListItem>
                         <ListItem>
                          <Text type={'a'}>
                            <Icon name={"image-brightness-1"} className={"e-text-grey-600 show"} />
                            <Icon name={"action-done"} className={"e-text-black hidden"} />
                          </Text>
                         </ListItem>
                         <ListItem>
                          <Text type={'a'}>
                            <Icon name={"image-brightness-1"} className={"e-text-pink-100 show"} />
                            <Icon name={"action-done"} className={"e-text-black hidden"} />
                          </Text>
                         </ListItem>
                        </List>
                      </Block>
                    </Block>
                    <Block classes={'card-align-row'}>
                      <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}> Select size </Text>
                      <Block>
                        <Btn label={'s'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        <Btn label={'m'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        <Btn label={'l'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        <Btn label={'xl'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                      </Block>
                      <Text type={'a'} classes={'e-text-left e-subhead e-text-blue-300'}>View size chart</Text>
                    </Block>
                    <Block classes={'quantity'}>
                      <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={true} className={'e-background-white e-left quantity-btn e-text-black'} />
                      <Text type={'span'} classes={'e-text-center e-title e-text-black item-number'}>{this.state.pieceNumber}</Text>
                      <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={true} className={'e-background-white e-right quantity-btn e-text-black'} />
                    </Block>
                    <Block classes={'card-align-row e-v-center'}>
                      <Btn label={'Add to Cart'} ripple={true} type={'succes'} className={'flat add-to-cart e-background-blue-700'} />
                      <Text type={'a'} classes={'e-text-grey-400 e-text-uppercase e-subhead'}>
                        <Btn icon={'action-star-rate'} ripple={true} type={'fab-mini'} className={'fab-mini e-background-blue-700 e-text-white'} />
                        <Text type={'span'}>add to wishlist</Text>
                      </Text>
                    </Block>
                  </Block>
                </Block>
               </CardHeader>
            </Card>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-6'}>
                <Card classes={'e-background-white cart card-h-700'}>
                  <CardHeader>
                    <Block classes={'align-row'}>
                      <Block>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>3 items in your cart</Text>
                      </Block>
                      <Block>
                        <Text type={'span'} classes={'e-text-right e-subhead e-text-black'}>Discount code: </Text>
                        <Text type={'span'} classes={'e-text-right e-subhead e-text-blue-400'}>345R </Text>
                      </Block>
                    </Block>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block classes={'card-align-row cart-item'}>
                      <Block>
                        <Image classes={'e-img-rsp'} src={'assets/img/thumb1.jpg'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Maison Kitsune</Text>
                      <Block classes={'quantity'}>
                        <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={true} className={'e-background-white e-left quantity-btn e-text-black'} />
                        <Text type={'span'} classes={'e-text-center e-title e-text-black item-number'}>{this.state.pieceNumber}</Text>
                        <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={true} className={'e-background-white e-right quantity-btn e-text-black'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                      <Btn icon={'navigation-close'} type={'fab-mini'} ripple={true} className={'e-background-white fab-mini e-right e-caption close-btn e-text-blue-300'} />
                    </Block>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block classes={'card-align-row cart-item'}>
                      <Block>
                        <Image classes={'e-img-rsp'} src={'assets/img/thumb2.jpg'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Napapijry</Text>
                      <Block classes={'quantity'}>
                        <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={true} className={'e-background-white e-left quantity-btn e-text-black'} />
                        <Text type={'span'} classes={'e-text-center e-title e-text-black item-number'}>{this.state.pieceNumber}</Text>
                        <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={true} className={'e-background-white e-right quantity-btn e-text-black'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                      <Btn icon={'navigation-close'} type={'fab-mini'} ripple={true} className={'e-background-white fab-mini e-right e-caption close-btn e-text-blue-300'} />
                    </Block>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block classes={'card-align-row cart-item'}>
                      <Block>
                        <Image classes={'e-img-rsp'} src={'assets/img/thumb3.jpg'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-title e-text-black'}>P. Hooligan</Text>
                      <Block classes={'quantity'}>
                        <Btn onClick={this.removeItem.bind(this)} label={'-'} ripple={true} className={'e-background-white e-left quantity-btn e-text-black'} />
                        <Text type={'span'} classes={'e-text-center e-title e-text-black item-number'}>{this.state.pieceNumber}</Text>
                        <Btn onClick={this.addItem.bind(this)} label={'+'} ripple={true} className={'e-background-white e-right quantity-btn e-text-black'} />
                      </Block>
                      <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                      <Btn icon={'navigation-close'} type={'fab-mini'} ripple={true} className={'e-background-white fab-mini e-right e-caption close-btn e-text-blue-300'} />
                    </Block>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Btn label={'Back to Shop'} ripple={true} type={'succes'} className={'flat e-text-black e-background-grey-100'} />
                    <Block classes={'e-right card-align-row'}>
                      <Block>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-400'}>Total</Text>
                        <Text type={'span'} classes={'e-text-left e-headline e-text-black'}>$350</Text>
                      </Block>
                      <Btn label={'Checkout'} ripple={true} type={'succes'} className={'flat e-text-white e-background-blue-200'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-6'}>
                <Block classes={"e-row"}>
                  <Block classes={'brick brick-6'}>
                    <Card classes={'e-background-white'}>
                      <CardHeader>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Size</Text>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block classes={'card-align-row'}>
                          <Btn label={'xs'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'s'} ripple={true} type={'succes'} className={'flat size-btn active e-background-grey-100 e-text-black'} />
                          <Btn label={'m'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'l'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                          <Btn label={'xl'} ripple={true} type={'succes'} className={'flat size-btn e-background-grey-100 e-text-black'} />
                        </Block>
                      </CardHeader>
                    </Card>
                    <Card classes={'e-background-white'}>
                      <CardHeader>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-grey-600'}>Price range</Text>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block>
                          <Block classes={'align-row e-padding-18'}>
                            <Input type={'number'} classes={'e-left'} name={'label'} placeholder={'From'} hint={'Number input'}/>
                            <Input type={'number'} classes={'e-right'} name={'label'} placeholder={'To'} hint={'Number input'}/>
                          </Block>
                          <Slider discrete={true} step={1} start={10}/>
                          <Block>
                            <Text type={'span'} classes={'e-text-left e-left e-subhead e-text-black'}>$10</Text>
                            <Text type={'span'} classes={'e-text-left e-right e-subhead e-text-black'}>$1000</Text>
                          </Block>
                        </Block>
                      </CardHeader>
                    </Card>
                    <Card classes={'e-background-white'}>
                      <CardHeader>
                        <Block classes={'align-row'}>
                          <Text type={'span'} classes={'e-text-left e-title e-text-black'}>How To Buy</Text>
                          <Btn icon={'navigation-close'} type={'fab-mini'} ripple={true} className={'e-background-white fab-mini e-right e-caption close-btn e-text-black'} />
                        </Block>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Text type={'p'} classes={'e-text-left e-subhead e-padding-18 e-text-black'}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Text>
                      </CardHeader>
                    </Card>
                  </Block>
                  <Block classes={'brick brick-6'}>
                    <Card classes={'e-background-white'}>
                      <CardHeader classes={'cart-story'}>
                        <Block classes={'e-left e-v-center'}>
                          <Text type={'span'} classes={'e-text-left e-title e-text-black'}>5</Text>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>items in your cart</Text>
                        </Block>
                        <Btn icon={'action-shopping-cart'} ripple={true} type={'succes'} className={'flat e-right cart-btn e-background-blue-700'} />
                      </CardHeader>
                    </Card>
                    <Card classes={'e-background-white cart-items'}>
                      <CardHeader>
                        <Block classes={'card-align-row cart-dropdown'}>
                          <Block>
                            <Image classes={'e-img-rsp'} src={'assets/img/thumb1.jpg'} />
                          </Block>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>$350</Text>
                          <Text type={'span'} classes={'e-text-left e-body2 e-text-black'}>Maison Kitsune</Text>
                        </Block>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block classes={'card-align-row cart-dropdown'}>
                          <Block>
                            <Image classes={'e-img-rsp'} src={'assets/img/thumb2.jpg'} />
                          </Block>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>$350</Text>
                          <Text type={'span'} classes={'e-text-left e-body2 e-text-black'}>Napapijry</Text>
                        </Block>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block classes={'card-align-row cart-dropdown'}>
                          <Block>
                            <Image classes={'e-img-rsp'} src={'assets/img/thumb3.jpg'} />
                          </Block>
                          <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>$350</Text>
                          <Text type={'span'} classes={'e-text-left e-body2 e-text-black'}>Peaceful Hooligan</Text>
                        </Block>
                      </CardHeader>
                    </Card>
                    <Block classes={'brick brick-12 align-row'}>
                      <Btn label={'new'} ripple={true} type={'succes'} className={'flat sale-btn e-background-yellow-700'} />
                      <Btn label={'hot'} ripple={true} type={'succes'} className={'flat sale-btn e-background-red-500'} />
                      <Btn label={'sale'} ripple={true} type={'succes'} className={'flat sale-btn e-background-blue-200'} />
                    </Block>
                    <Card classes={'e-background-white'}>
                      <CardHeader>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Colors</Text>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block classes={'colors'}>
                          <List type={'navigation'} >
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-indigo-400 e-title show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-grey-600 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-pink-100 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-indigo-400 e-title show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-grey-600 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-pink-100 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-indigo-400 e-title show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-grey-600 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                           <ListItem>
                            <Text type={'a'}>
                              <Icon name={"image-brightness-1"} className={"e-text-pink-100 show"} />
                              <Icon name={"action-done"} className={"e-text-black hidden"} />
                            </Text>
                           </ListItem>
                          </List>
                        </Block>
                      </CardHeader>
                    </Card>
                  </Block>
                </Block>
              </Block>
            </Block>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'align-row'}>
                <Block classes={'filters e-left align-row'}>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Shoes</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Clothing</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Bags</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Accessories</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Clearence</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Women`s </Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Men`s</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Kid`s</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Brands</Text>
                  </Text>
                </Block>
                <Block classes={'e-right align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Sort by</Text>
                  <Menu type={'cover'} placeholder={'Brand'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'align-row'}>
                <Block classes={'filters e-left align-row'}>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Shoes</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Clothing</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Bags</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Accessories</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Clearence</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Women`s </Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Men`s</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Kid`s</Text>
                  </Text>
                  <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>/</Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-subhead e-text-black'}>Brands</Text>
                  </Text>
                </Block>
                <Block classes={'e-right align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Sort by</Text>
                  <Menu type={'cover'} placeholder={'Type'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Btn icon={'navigation-apps'} ripple={true} className={'display-btn e-display-1 e-text-grey-600 e-background-white'} />
                  <Btn icon={'navigation-menu'} ripple={true} className={'display-btn e-display-1 e-text-grey-600 e-background-white'} />
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'align-row'}>
                <Block classes={'e-left align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Filter</Text>
                  <Menu type={'cover'} placeholder={'Type'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Modern'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Colors'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Gender'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                </Block>
                <Block classes={'e-right align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Sort by</Text>
                  <Menu type={'cover'} placeholder={'Most Relevant'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'align-row'}>
                <Block classes={'e-left align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Filter</Text>
                  <Menu type={'cover'} placeholder={'Type'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Modern'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Colors'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                  <Menu type={'cover'} placeholder={'Gender'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                </Block>
                <Block classes={'e-right align-row'}>
                  <Btn icon={'navigation-apps'} ripple={true} className={'display-btn e-display-1 e-text-grey-600 e-background-white'} />
                  <Btn icon={'navigation-menu'} ripple={true} className={'display-btn e-display-1 e-text-grey-600 e-background-white'} />
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'align-row'}>
                <Block classes={'filters e-left align-row'}>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>A</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>B</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>C</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>D</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>E</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>F</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>G</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>H</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>I</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>J</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>K</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>L</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>M</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>N</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>O</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>P</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>Q</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>R</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>S</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>T</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>U</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>V</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>W</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>X</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>Y</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>Z</Text>
                  </Text>
                </Block>
                <Block classes={'e-right align-row'}>
                  <Text type={'span'} classes={'e-text-left e-title e-text-black'}>Sort by</Text>
                  <Menu type={'cover'} placeholder={'Alphabet'} classes={'e-right sort-by'}>
                   <Text className={'e-text-black'}>Profile</Text>
                   <Text className={'e-text-black'}>Settings</Text>
                   <Text className={'e-text-black'}>Logout</Text>
                  </Menu>
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader classes={'e-padding-20 align-row'}>
                <Block>
                  <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                </Block>
                <Block classes={'filters'}>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>1</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>2</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>3</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>4</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>5</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>6</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>7</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>8</Text>
                  </Text>
                  <Text type={'span'}>
                    <Text type={'a'} classes={'e-text-left e-title e-text-black'}>9</Text>
                  </Text>
                </Block>
                <Block>
                  <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                </Block>
              </CardHeader>
            </Card>
            <Card classes={'e-background-white'}>
              <CardHeader>
                <Block classes={'search'}>
                  <Input type={'text'} name={'label'} label={'Search'}/>
                  <Btn icon={'action-search'} ripple={true} type={'succes'} className={'flat e-background-white e-text-black search-btn'} />
                </Block>
              </CardHeader>
            </Card>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-4'}>
                <Card classes={'e-background-white'}>
                  <CardHeader classes={'align-row'}>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                    <Block classes={'filters'}>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>1</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>2</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>3</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>4</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>5</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>6</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>7</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>8</Text>
                      </Text>
                      <Text type={'span'}>
                        <Text type={'a'} classes={'e-text-left e-title e-text-black'}>9</Text>
                      </Text>
                    </Block>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-4'}>
                <Card classes={'e-background-white'}>
                  <CardHeader classes={'align-row'}>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                    <Block classes={'filters'}>
                    </Block>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-2'}>
                <Card classes={'e-background-grey-900'}>
                  <CardHeader classes={'align-row'}>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} className={'display-btn e-headline e-text-white e-background-grey-900'} />
                    </Block>
                    <Block classes={'filters'}>
                    </Block>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'display-btn e-headline e-text-white e-background-grey-900'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-2'}>
                <Card classes={'e-background-white'}>
                  <CardHeader classes={'align-row'}>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-left'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                    <Block classes={'filters'}>
                    </Block>
                    <Block>
                      <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} className={'display-btn e-headline e-text-grey-600 e-background-white'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
            <Block classes={'e-row'}>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-red-500 card-h-150'}>
                  <CardHeader>
                    <Block classes={'align-row'}>
                      <Text type={'span'} classes={'e-text-white e-left e-title'}>Successfully added to cart</Text>
                      <Icon name={"action-done"} className={"e-text-white success e-headline"} />
                    </Block>
                    <Divider classes={'thinnest e-background-white'} />
                    <Text type={'a'}>
                      <Icon name={"hardware-keyboard-arrow-left"} className={"e-text-white"} />
                      <Text type={'span'} classes={'e-text-white'}>Proceed to checkout</Text>
                    </Text>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-white card-h-150'}>
                  <CardHeader>
                    <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Search</Text>
                    <Divider classes={'thinnest e-background-grey-200'} />
                    <Block classes={'search'}>
                      <Input type={'text'} name={'label'} label={'Search'}/>
                      <Btn icon={'action-search'} ripple={true} type={'succes'} className={'flat e-background-white e-text-black search-btn'} />
                    </Block>
                  </CardHeader>
                </Card>
              </Block>
              <Block classes={'brick brick-3'}>
                <Block classes={'e-row'}>
                  <Block classes={'brick brick-12'}>
                    <Card classes={'e-background-white delivery-options'}>
                      <CardHeader>
                        <Text type={'span'} classes={'e-text-left e-subhead e-text-black'}>Delivery options</Text>
                        <Divider classes={'thinnest e-background-grey-200'} />
                        <Block classes={'align-row'}>
                          <Block classes={'e-padding-bottom-15 e-padding-top-15'}>
                            <Switch type={'radio'} text={'Free'} name={'switch-radio'} />
                          </Block>
                          <Block classes={'e-padding-bottom-15 e-padding-top-15'}>
                            <Switch type={'radio'} text={'$20.00'} name={'switch-radio'} />
                          </Block>
                        </Block>
                      </CardHeader>
                    </Card>
                  </Block>
                  <Block classes={'brick brick-12'}>
                    <Card classes={'e-background-white'}>
                      <CardHeader>
                        <Block classes={'filter-card'}>
                          <Menu type={'cover'} placeholder={'Filters'} classes={'e-right'}>
                           <Text className={'e-text-black'}>Profile</Text>
                           <Text className={'e-text-black'}>Settings</Text>
                           <Text className={'e-text-black'}>Logout</Text>
                          </Menu>
                        </Block>
                      </CardHeader>
                    </Card>
                  </Block>
                </Block>
              </Block>
              <Block classes={'brick brick-3'}>
                <Card classes={'e-background-yellow-700 card-h-150'}>
                  <CardHeader classes={'e-text-center'}>
                    <Icon name={"action-done"} className={"e-text-white success e-headline"} />
                    <Text type={'p'} classes={'e-text-white e-text-center e-title'}>Done!</Text>
                  </CardHeader>
                </Card>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaCommerce;
