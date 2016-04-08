import React from 'react';
import ClassNames from 'classnames';

import { Block,
  Btn,
  Card, CardHeader, CardContent, CardFooter,
  Divider,
  Icon,
  Image,
  Input,
  List, ListItem,
  Menu,
  Text } from 'react-essence';

class PatagoniaHeadersFooters extends React.Component {

  render() {
    return (
      <Block className={'e-background-grey-100'}>
        <Block className={'patagoniaHeadersFooters e-container e-padding-bottom-50'}>
          <Block classes={'e-row'}>
            <Block classes={'brick brick-12 e-h-center e-v-center'}>
              <Text type={'p'} classes={'e-text-center e-headline e-text-indigo-400 badge-header'}>5</Text>
              <Text type={'h1'} classes={'e-text-center e-display-3 e-padding-top-50 e-padding-bottom-50 background-rainbow e-no-margin'}><b>HEADERS & FOOTERS</b> </Text>
            </Block>
          </Block>

          <Block classes={'e-row e-background-grey-900 e-margin-top-25'}>
            <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-200'}>Patagonia
              </Text>
            </Block>
            <Block classes={'brick brick-10 e-h-end e-v-end no-mg-bottom'}>
              <List type={'inline'}>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                </ListItem >
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Brands</Text>
                </ListItem>
                <ListItem className={'margin-list-item last-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-center e-body1 '}>
                    <Icon name={"action-search"} className={"e-text-grey-200"} />
                  </Text>
                </ListItem>
              </List>
            </Block>
          </Block>

          <Block classes={'e-row e-background-indigo-400 e-margin-top-50'}>
            <Block classes={'brick brick-2 e-h-start e-v-end border-logo no-mg-bottom e-padding-top-15 e-padding-bottom-15'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-200'}>Patagonia
              </Text>
            </Block>
            <Block classes={'brick brick-10 e-h-end e-v-end no-mg-bottom e-padding-bottom-15'}>
              <List type={'inline'}>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                </ListItem >
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Brands</Text>
                </ListItem>
                <ListItem className={'margin-list-item last-item align-list-item'}>
                  <Block className={'border-input-icon e-background-white no-border'}>
                    <Input type={'text'} name={'label'} classes={'with-icon'} />
                    <Btn icon={'action-search'} ripple={true} type={'submit'} className={'btn-onright e-background-light-blue-A200 no-border e-text-white'} />
                  </Block>
                </ListItem>
              </List>
            </Block>
          </Block>

          <Block classes={'e-row e-background-white e-margin-top-50'}>
            <Block classes={'brick brick-2 e-h-start e-v-end logo-shadow no-mg-bottom'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-900 background-rainbow e-headline margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-900'}>Patagonia</Text>
            </Block>
            <Block classes={'brick brick-8 e-h-center e-v-center no-mg-bottom'}>
              <List type={'inline'}>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Clothing</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Shoes</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Accessories</Text>
                </ListItem >
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Sport</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 show-menu'}>
                     <Text className={'e-text-black'}>KKS</Text>
                     <Text className={'e-text-black'}>Wy's</Text>
                     <Text className={'e-text-black'}>Fashon Lux</Text>
                  </Menu>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-2 e-h-end e-v-end no-mg-bottom'}>
              <List type={'inline'}>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-indigo-400 badge-header badge-nr'}>3</Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"action-shopping-basket"} className={"e-text-grey-900"} />
                  </Text>
                </ListItem>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-light-blue-A200 badge-header badge-nr'}>5</Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"action-star-rate"} className={"e-text-grey-900"} />
                  </Text>
                </ListItem>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"action-trending-neutral"} classes={"e-text-grey-900"} />
                  </Text>
                </ListItem >
              </List>
            </Block>
          </Block>

          <Block classes={'e-row e-margin-top-50 e-background-grey-900'}>
            <Block classes={'brick brick-2 e-h-start e-v-end e-no-margin'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline e-margin-bottom-15 margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-text-grey-200 e-button e-margin-bottom-25'}>Patagonia</Text>
            </Block>
            <Block classes={'brick brick-8 e-h-center e-v-center e-background-grey-800 e-no-margin'}>
              <List type={'inline'}>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                </ListItem >
                <ListItem className={'margin-list-item align-list-item'}>
                  <Menu type={'cover'} placeholder={'Sport'} classes={'e-body1 e-text-grey-200 show-menu'}>
                     <Text className={'e-text-black'}>Polo</Text>
                     <Text className={'e-text-black'}>Sky</Text>
                     <Text className={'e-text-black'}>Tennis</Text>
                  </Menu>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 e-text-grey-200 show-menu'}>
                     <Text className={'e-text-black'}>KFV</Text>
                     <Text className={'e-text-black'}>LoGO's</Text>
                     <Text className={'e-text-black'}>Infant</Text>
                  </Menu>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-2 e-h-end e-v-end e-background-grey-900 no-mg-bottom'}>
              <List type={'inline'} className={'e-padding-top-15'}>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-indigo-400 badge-header badge-nr'}>3</Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"action-shopping-basket"} className={"e-text-grey-200"} />
                  </Text>
                </ListItem>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-light-blue-A200 badge-header badge-nr'}>5</Text>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Icon name={"action-star-rate"} className={"e-text-grey-200"} />
                  </Text>
                </ListItem>
                <ListItem className={'margin-badges align-list-item'}>
                  <Text type={'a'} classes={'e-text-center e-body1'}>
                    <Image src={'assets/img/poza-profil.jpg'} alt={'John Smith'} classes={'avatar-profil'}/>
                  </Text>
                </ListItem >
              </List>
            </Block>
          </Block>

          <Block classes={'e-row e-background-grey-900 e-margin-top-50'}>
            <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-200'}>Patagonia
              </Text>
            </Block>
            <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin'}>
              <List type={'inline'}>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                </ListItem >
                <ListItem className={'margin-list-item align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 e-text-grey-200 show-menu'}>
                    <Text className={'e-text-black'}>KFV</Text>
                    <Text className={'e-text-black'}>LoGO's</Text>
                    <Text className={'e-text-black'}>Infant</Text>
                  </Menu>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-2 e-h-end e-v-end no-mg-bottom'}>
              <Block className={'border-input-icon e-background-white no-border full-width'}>
                <Btn label={'Visit Store'} ripple={true} type={'info'} classes={'e-button e-text-grey-200 e-background-light-blue-A200 no-border btn-onleft full-width'} />
                <Btn icon={'navigation-chevron-right'} ripple={true} type={'submit'} classes={'btn-onright e-text-grey-200 no-border e-background-light-blue-A200'} />
              </Block>
            </Block>
          </Block>

          <Block classes={'bg-mountain e-margin-top-50'}>
            <Block classes={'e-row e-padding-top-25 header-padding'}>
              <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-200'}>Patagonia
                </Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin'}>
                <List type={'inline'}>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-200 e-text-center e-body1'}>Brands</Text>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end no-mg-bottom'}>
                <Btn label={'sign up'} ripple={true} classes={'e-button e-text-grey-200 signup-btn'} />
              </Block>
            </Block>

            <Block className={'centered'}>
              <Block classes={'e-text-center head-title e-margin-top-75'}>
                <Btn label={'explore'} ripple={true} type={'default'} classes={'e-text-grey-200 explore-btn'} />
                <Text type={'h1'} classes={'e-text-capitalize e-text-white e-display-3'}><b>Stop gratuitous UI Animation</b></Text>
                <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200'}>
                  Lorem ipsum dolor sit amet, nulla vidisse impedit vix et. Nam rebum explicari an, vidit nusquam vulputate sea. Impetus abhorreant et sit, id iracundia concludaturque.
                </Text>
                <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                  <Text type={'a'} classes={'e-text-center e-caption'}>
                    <Icon name={"image-panorama-fisheye"} className={"e-text-grey-200"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-caption'}>
                    <Icon name={"image-panorama-fisheye"} className={"e-text-grey-200"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-caption'}>
                    <Icon name={"image-lens"} className={"e-text-grey-200"} />
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>

          <Block classes={'bg-lake e-margin-top-50'}>
            <Block classes={'e-row e-padding-top-25 header-padding'}>
              <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-400 e-headline margin-logo"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-400'}>Patagonia
                </Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin'}>
                <List type={'inline'}>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-light-blue-A200 e-text-center e-body1'}>Clothing</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Sport</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item align-list-item'}>
                    <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Brands</Text>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end no-mg-bottom'}>
                <List type={'inline'}>
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-indigo-400 badge-header badge-nr'}>3</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-shopping-basket"} className={"e-text-grey-400"} />
                    </Text>
                  </ListItem>
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-white e-background-light-blue-A200 badge-header badge-nr'}>5</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-star-rate"} className={"e-text-grey-400"} />
                    </Text>
                  </ListItem>
                </List>
              </Block>
            </Block>

            <Block className={'centered'}>
              <Block classes={'e-text-center head-title e-margin-top-50'}>
                <Text type={'h1'} classes={'e-text-grey-200 e-display-3'}><b>Wellcome to the Future</b></Text>
                <Text type={'p'} classes={'e-text-center e-body2 e-text-grey-400'}>
                  Lorem ipsum dolor sit amet, nulla vidisse impedit vix et. Nam rebum explicari an.
                </Text>
                <Text type={'a'} classes={'e-text-center e-body2'}>
                  <Icon name={"action-favorite-outline"} className={"e-text-grey-400"} />
                </Text>
                <Text type={'span'} classes={'e-text-center e-text-grey-400 e-body2 padding-icons'}> 345</Text>
                <Text type={'a'} classes={'e-text-center e-body2'}>
                  <Icon name={"action-room"} className={"e-text-grey-400"} />
                </Text>
                <Text type={'span'} classes={'e-text-center e-text-grey-400 e-body2'}> 19</Text>
                <Block className={'e-margin-top-25 e-margin-bottom-25 '}>
                  <Btn label={'sign up'} ripple={true} classes={'e-button e-text-grey-200 signup-btn e-background-indigo-400'} />
                </Block>
              </Block>
            </Block>
          </Block>

          <Block className={'e-background-light-blue-A100 e-margin-top-50'}>
            <Block classes={'e-row e-background-light-blue-A200 e-no-margin e-no-padding'}>
              <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom e-no-margin e-no-padding'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo align-menu"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-200 align-menu'}>Patagonia</Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin e-no-padding'}>
                <List type={'inline'} className={'bg-blue'}>
                  <ListItem classes={'e-no-padding e-background-light-blue-A100'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                  </ListItem>
                  <ListItem classes={'e-no-padding bg-blue-onhover'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem classes={'e-no-padding bg-blue-onhover'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem classes={'e-no-padding bg-blue-onhover'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                  </ListItem>
                  <ListItem classes={'e-no-padding bg-blue-onhover'}>
                    <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 e-text-grey-200 padding-list show-menu'}>
                       <Text className={'e-text-black'}>KKS</Text>
                       <Text className={'e-text-black'}>Wy's</Text>
                       <Text className={'e-text-black'}>Fashon Lux</Text>
                    </Menu>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end e-no-margin e-no-padding'}>
                <List type={'inline'} className={'align-menu'}>
                  <ListItem classes={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-grey-900 e-background-grey-200 badge-header badge-nr'}>3</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-shopping-basket"} className={"e-text-grey-200"} />
                    </Text>
                  </ListItem>
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-grey-900 e-background-grey-200 badge-header badge-nr'}>5</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-star-rate"} className={"e-text-grey-200"} />
                    </Text>
                  </ListItem>
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-trending-neutral"} className={"e-text-grey-200"} />
                    </Text>
                  </ListItem >
                </List>
              </Block>
            </Block>

            <Block classes={'e-row e-margin-top-50 e-padding-bottom-15'}>
              <Block classes={'brick brick-6 e-h-end e-v-end'}>
                <Input type={'email'} name={'label'} label={'Your Email'} classes={'input-look text-focus-white btn-big'}/>
              </Block>
              <Block classes={'brick brick-6 e-h-start e-v-end'}>
                <Btn label={'Sign up'} ripple={true} type={'submit'} classes={'raised e-button e-text-white e-background-indigo-400 mg-b-btn btn-big'} />
              </Block>
            </Block>
          </Block>

          <Block className={'e-background-white e-margin-top-50'}>
            <Block classes={'e-row e-background-white e-no-margin e-no-padding border-nav nav-h'}>
              <Block classes={'brick brick-2 e-h-start e-v-end e-no-margin e-no-padding'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-900 e-headline margin-logo e-margin-bottom-15"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-900 e-margin-bottom-25'}>Patagonia</Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin e-no-padding'}>
                <List type={'inline'} className={'with-article'}>
                  <ListItem classes={'margin-list-item border-active'}>
                    <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Clothing</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item border-onhover'}>
                    <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item border-onhover'}>
                    <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem className={'margin-list-item border-onhover'}>
                    <Menu type={'cover'} placeholder={'Sport'} classes={' e-body1 e-text-grey-900 show-menu'}>
                       <Text className={'e-text-black'}>Polo</Text>
                       <Text className={'e-text-black'}>Sky</Text>
                       <Text className={'e-text-black'}>Tennis</Text>
                    </Menu>
                  </ListItem>
                  <ListItem className={'margin-list-item border-onhover'}>
                    <Menu type={'cover'} placeholder={'Brands'} classes={' e-body1 e-text-grey-900 show-menu'}>
                       <Text className={'e-text-black'}>KKS</Text>
                       <Text className={'e-text-black'}>Wy's</Text>
                       <Text className={'e-text-black'}>Fashon Lux</Text>
                    </Menu>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end e-no-margin e-no-padding'}>
                <List type={'inline'}>
                  <ListItem classes={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-grey-200 e-background-light-blue-A200 badge-header badge-nr'}>3</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-shopping-basket"} className={"e-text-grey-900"} />
                    </Text>
                  </ListItem>
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'span'} classes={'e-text-center e-caption e-text-grey-200 e-background-light-blue-A200 badge-header badge-nr'}>5</Text>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Icon name={"action-star-rate"} className={"e-text-grey-900"} />
                    </Text>
                  </ListItem>
                  <ListItem classes={'margin-badges align-list-item'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Image src={'assets/img/poza-profil.jpg'} alt={'John Smith'} classes={'avatar-profil'}/>
                    </Text>
                  </ListItem >
                </List>
              </Block>
            </Block>

            <Block classes={'centered'}>
              <Block classes={'head-title-grad e-text-center'}>
                <Text type={'h1'} classes={'e-text-grey-200 e-display-3 background-rainbow e-margin-bottom-25'}><b>Think of it like this: We are a Product Experience Team</b></Text>
              </Block>
            </Block>

            <Block classes={'e-row e-margin-top-50 article-area'}>
              <Block classes={'brick brick-4 e-h-start e-v-center'}>
                <Card>
                  <CardContent>
                    <Block className={'e-text-center'}>
                      <Image src={'assets/img/shoe.jpg'} alt={'shoe'} classes={'article-h'} />
                    </Block>
                    <Block className={'e-text-right'}>
                      <Btn icon={'action-favorite-outline'} ripple={false} type={'fab'} classes={'fab-mini e-text-light-blue-A200 e-background-white'} />
                    </Block>
                      <Text type={'h2'} classes={'e-text-center e-title e-text-grey-800'}>Good looking shoe</Text>
                      <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-400'}>
                        Lorem ipsum dolor sit amet, nec in illud dicit euripidis, ius an.
                      </Text>
                  </CardContent>
                  <CardFooter classes={'e-text-center'}>
                    <Text type={'span'} classes={'e-text-center e-caption text-remove'}> $125 </Text>
                      <Text type={'span'} classes={'e-text-center e-title e-text-grey-700'}> $100 </Text>
                  </CardFooter>
                </Card>
              </Block>
              <Block classes={'brick brick-4 e-h-center e-v-center'}>
                <Card>
                  <CardContent>
                    <Block className={'e-text-center'}>
                      <Image src={'assets/img/paper_bag.jpg'} alt={'paper bag'} classes={'article-h'} />
                    </Block>
                    <Block className={'e-text-right'}>
                      <Btn icon={'action-favorite-outline'} ripple={false} type={'fab'} classes={'fab-mini e-text-light-blue-A200 e-background-white'} />
                    </Block>
                      <Text type={'h2'} classes={'e-text-center e-title e-text-grey-800'}>Good looking bag</Text>
                      <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-400'}>
                        Lorem ipsum dolor sit amet, saepe intellegebat ius an.
                      </Text>
                  </CardContent>
                  <CardFooter classes={'e-text-center'}>
                    <Text type={'span'} classes={'e-text-center e-caption text-remove'}> $9 </Text>
                      <Text type={'span'} classes={'e-text-center e-title e-text-grey-700'}> $6 </Text>
                  </CardFooter>
                </Card>
              </Block>
              <Block classes={'brick brick-4 e-h-end e-v-center'}>
                <Card>
                  <CardContent>
                    <Block className={'e-text-center'}>
                      <Image src={'assets/img/earings.jpg'} alt={'earings'}  classes={'article-h'} />
                    </Block>
                    <Block className={'e-text-right'}>
                      <Btn icon={'action-favorite-outline'} ripple={false} type={'fab'} classes={'fab-mini e-text-light-blue-A200 e-background-white'} />
                    </Block>
                      <Text type={'h2'} classes={'e-text-center e-title e-text-grey-800'}>Good looking earings</Text>
                      <Text type={'p'} classes={'e-text-center e-body1 e-text-grey-400'}>
                        Lorem ipsum dolor sit amet,  saepe intellegebat ius an.
                      </Text>
                  </CardContent>
                  <CardFooter classes={'e-text-center'}>
                    <Text type={'span'} classes={'e-text-center e-caption text-remove'}> $275 </Text>
                      <Text type={'span'} classes={'e-text-center e-title e-text-grey-700'}> $195 </Text>
                  </CardFooter>
                </Card>
              </Block>

              <Block classes={'e-margin-bottom-25 e-text-center full-width'}>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-panorama-fisheye"} className={"e-text-grey-900"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-panorama-fisheye"} className={"e-text-grey-900"} />
                </Text>
                <Text type={'a'} classes={'e-text-center e-caption'}>
                  <Icon name={"image-lens"} className={"e-text-grey-900"} />
                </Text>
              </Block>
            </Block>
          </Block>

          <Block className={'e-background-grey-800 e-margin-top-50'}>
            <Block classes={'footer-w e-text-center e-padding-top-25'}>
              <List type={'inline'}>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>About</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Careers</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>ShoeSmart Library</Text>
                </ListItem >
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Rewards</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Customer</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Service</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Returns</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Terms</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Privacy</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>International</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Site</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Guide</Text>
                </ListItem>
              </List>

              <Divider classes={'thinnest e-background-grey-400'} />

              <Block classes={'e-row e-margin-top-50'}>
                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-400'}>Customer Service</Text>
                  <List classes={'footer-list-menu e-no-padding '}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Contact&FAQ</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Delivery</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Returns</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Track Orders</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Size Guide</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Gift Cards</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Fashion Glossary</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-400'}>The iconic</Text>
                  <List classes={'footer-list-menu e-no-padding'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>About Us</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Terms&Conitions</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Privacy&Cookies</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Affiliates</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Press</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-400'}>Careers</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-400'}>follow us</Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-twitter e-text-grey-400'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-facebook e-text-grey-400'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-google e-text-grey-400'}></i>
                  </Text>
                </Block>

                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-400 e-no-margin'}>2016 Patagonia UI</Text>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-400 e-no-margin'}>I made this, Romania</Text>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-capitalize e-text-grey-400 e-no-margin'}>All rights reserved</Text>
                  <List type={'inline'} className={'e-no-padding'}>
                    <ListItem className={'e-no-padding'}>
                      <Icon name={"image-filter-hdr"} classes={"e-text-left e-text-grey-400 e-display-1 e-no-padding"} />
                    </ListItem>
                    <ListItem className={'e-no-padding'}>
                      <Text type={'p'} classes={'e-text-left e-button e-text-grey-400 logo-footer'}>Patagonia</Text>
                    </ListItem>
                  </List>
                </Block>
              </Block>
            </Block>
          </Block>

          <Block className={'e-background-indigo-400 e-margin-top-50'}>
            <Block classes={'footer-w e-text-center e-padding-top-25 e-padding-bottom-15'}>
              <List type={'inline'}>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>About</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Careers</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>ShoeSmart Library</Text>
                </ListItem >
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Rewards</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Customer</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Service</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Returns</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Terms</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Privacy</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>International</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Site</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Guide</Text>
                </ListItem>
              </List>
              <Icon name={"image-filter-hdr"} classes={"e-text-left e-text-grey-400 e-display-1 e-no-padding e-margin-top-25"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-400 vertical-logo'}>Patagonia</Text>
              <Text type={'p'} classes={'e-text-center e-caption e-text-grey-400'}>
                &copy; 2016 Patagonia. All rights reserved.
              </Text>
            </Block>
          </Block>

          <Block classes={'e-row e-background-white e-margin-top-50'}>
            <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom'}>
              <Icon name={"image-filter-hdr"} classes={"e-text-grey-900 e-text-grey-900 e-headline margin-logo"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-800'}>Patagonia</Text>
            </Block>
            <Block classes={'brick brick-8 e-h-start e-v-start no-mg-bottom'}>
              <List type={'inline'}>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Women</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Men</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Kids</Text>
                </ListItem >
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Brands</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Accessories</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Bags</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>New</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Sale</Text>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-2 e-h-end e-v-end no-mg-bottom'}>
              <Text type={'a'} classes={'e-text-center'}>
                <i className={'fa fa-twitter e-text-grey-900 e-padding-bottom-15 padding-icons'}></i>
              </Text>
              <Text type={'a'} classes={'e-text-center'}>
                <i className={'fa fa-facebook e-text-grey-900 e-padding-bottom-15 padding-icons'}></i>
              </Text>
              <Text type={'a'} classes={'e-text-center'}>
                <i className={'fa fa-google e-text-grey-900 e-padding-bottom-15 padding-icons'}></i>
              </Text>
            </Block>
          </Block>

          <Block classes={'e-row e-background-white e-margin-top-50 header-padding'}>
            <Block classes={'brick brick-4 e-h-start e-v-center'}>
              <List type={'inline'}>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Women</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Men</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Kids</Text>
                </ListItem >
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Brands</Text>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-4 e-h-center e-v-center'}>
              <List type={'inline'} className={'e-no-padding'}>
                <ListItem className={'e-no-padding'}>
                  <Icon name={"image-filter-hdr"} classes={"e-text-left e-text-grey-900 e-display-1 e-no-padding"} />
                </ListItem>
                <ListItem className={'e-no-padding'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-900 logo-footer'}>Patagonia</Text>
                </ListItem>
              </List>
            </Block>
            <Block classes={'brick brick-4 e-h-end e-v-center'}>
              <List type={'inline'}>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Accessories</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Bags</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>New</Text>
                </ListItem>
                <ListItem className={'align-list-item'}>
                  <Text type={'a'} classes={'e-text-grey-900 e-text-center e-body1'}>Sale</Text>
                </ListItem>
              </List>
            </Block>
          </Block>

          <Block classes={'bg-forest e-margin-top-50'}>
            <Block classes={'footer-w e-text-center e-padding-top-25'}>
              <List type={'inline'}>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>About</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Careers</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>ShoeSmart Library</Text>
                </ListItem >
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Rewards</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Customer</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Service</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Returns</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Terms</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Privacy</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>International</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Site</Text>
                </ListItem>
                <ListItem >
                  <Text type={'a'} classes={'e-text-grey-300 e-text-center e-body1'}>Guide</Text>
                </ListItem>
              </List>

              <Divider classes={'thinnest e-background-grey-400'} />

              <Block classes={'e-row e-margin-top-50'}>
                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-300'}>Customer Service</Text>
                  <List classes={'footer-list-menu e-no-padding '}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Contact&FAQ</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Delivery</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Returns</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Track Orders</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Size Guide</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Gift Cards</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Fashion Glossary</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-300'}>The iconic</Text>
                  <List classes={'footer-list-menu e-no-padding'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>About Us</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Terms&Conitions</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Privacy&Cookies</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Affiliates</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Press</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-center e-body1 e-text-grey-300'}>Careers</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-4 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-300'}>Subscribe our newsletter</Text>
                  <Block className={'border-input-icon e-margin-top-25 no-border head-title-grad'}>
                    <Input type={'email'} name={'label'} placeholder={'Your email'} classes={'with-icon e-text-grey-300'} />
                    <Btn icon={'hardware-keyboard-arrow-right'} ripple={true} type={'submit'} className={'btn-onright e-background-light-blue-A200 no-border e-text-white e-text-center'} />
                  </Block>
                </Block>

                <Block classes={'brick brick-2 e-text-left'}>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-300 e-no-margin'}>2016 Patagonia UI</Text>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-grey-300 e-no-margin'}>I made this, Romania</Text>
                  <Text type={'p'} classes={'e-text-left e-body1 e-text-capitalize e-text-grey-300 e-no-margin'}>All rights reserved</Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-twitter e-text-grey-300'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-facebook e-text-grey-300 e-margin-top-25'}></i>
                  </Text>
                  <Text type={'a'} classes={'e-text-left'}>
                    <i className={'fa fa-google e-text-grey-300'}></i>
                  </Text>
                  <List type={'inline'} className={'e-no-padding e-margin-top-25'}>
                    <ListItem className={'e-no-padding'}>
                      <Icon name={"image-filter-hdr"} classes={"e-text-left e-text-grey-300 e-display-1 e-no-padding"} />
                    </ListItem>
                    <ListItem className={'e-no-padding'}>
                      <Text type={'p'} classes={'e-text-left e-button e-text-grey-300 logo-footer'}>Patagonia</Text>
                    </ListItem>
                  </List>
                </Block>
              </Block>
            </Block>
          </Block>

          <Block classes={'e-background-white e-margin-top-50 e-padding-bottom-15'}>
            <Block classes={'footer-w e-text-center e-padding-top-50'}>
              <Block classes={'e-row'}>
                <Block classes={'brick brick-3'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-900'}>Accessories</Text>
                  <List classes={'footer-list-menu e-no-padding e-text-left'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Belts</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Hats</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Insoles</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Shoe Care</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Sunglasses</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-900'}>Men</Text>
                  <List classes={'footer-list-menu e-no-padding e-text-left'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Boots</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Sneakers</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>BoatShoes</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Loafers</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Oxfords</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-900'}>Women</Text>
                  <List classes={'footer-list-menu e-no-padding e-text-left'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Boots</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Sneakers</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Flats</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Cowboy Boots</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Heels</Text>
                    </ListItem>
                  </List>
                </Block>

                <Block classes={'brick brick-3'}>
                  <Text type={'p'} classes={'e-text-left e-button e-text-grey-900'}>Kids</Text>
                  <List classes={'footer-list-menu e-no-padding e-text-left'}>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Boots</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Sneakers</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Mary Janes</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Slip-Ons</Text>
                    </ListItem>
                    <ListItem>
                      <Text type={'a'} classes={'e-text-left e-body1 e-text-grey-800'}>Cowboy Boots</Text>
                    </ListItem>
                  </List>
                </Block>
              </Block>

              <Divider classes={'thin e-background-grey-200'} />
              <Icon name={"image-filter-hdr"} classes={"e-text-left e-text-grey-900 e-display-1 e-no-padding e-margin-top-25"} />
              <Text type={'p'} classes={'e-text-center e-button e-text-grey-800 vertical-logo'}>Patagonia</Text>
              <Text type={'p'} classes={'e-text-center e-caption e-text-grey-800'}>
                &copy; 2016 Patagonia. All rights reserved.
              </Text>
            </Block>
          </Block>

          <Block className={'e-background-grey-900 e-margin-top-50'}>
            <Block classes={'e-text-center e-padding-top-25 e-padding-bottom-15'}>
              <List type={'inline'}>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Women</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Men</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Kids</Text>
                </ListItem >
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Brands</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Accessories</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Bags</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>News</Text>
                </ListItem>
                <ListItem>
                  <Text type={'a'} classes={'e-text-grey-400 e-text-center e-body1'}>Sale</Text>
                </ListItem>
              </List>
              <Block className={'align-follow'}>
                <Text type={'a'} classes={'e-text-left'}>
                  <i className={'fa fa-twitter e-text-grey-300 e-margin-bottom-15'}></i>
                </Text>
                <Text type={'a'} classes={'e-text-left'}>
                  <i className={'fa fa-facebook e-text-grey-300 e-margin-top-25'}></i>
                </Text>
                <Text type={'a'} classes={'e-text-left'}>
                  <i className={'fa fa-google e-text-grey-300'}></i>
                </Text>
                <Text type={'p'} classes={'e-text-center e-caption e-text-grey-400'}>
                  &copy; 2016 Patagonia. All rights reserved.
                </Text>
              </Block>
            </Block>
          </Block>

        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaHeadersFooters;
