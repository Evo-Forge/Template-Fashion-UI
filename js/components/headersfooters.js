import React from 'react';
import ClassNames from 'classnames';

import { Block,
  Btn,
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
        <Block className={'patagoniaHeadersFooters e-container'}>
          <Block classes={'e-row '}>
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

          <Block classes={'e-row e-background-indigo-400 e-margin-top-25'}>
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

          <Block classes={'e-row e-background-white e-margin-top-25'}>
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
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1'}>
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

          <Block classes={'e-row e-margin-top-25 e-background-grey-900'}>
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
                  <Menu type={'cover'} placeholder={'Sport'} classes={'e-body1 e-text-grey-200'}>
                     <Text className={'e-text-black'}>Polo</Text>
                     <Text className={'e-text-black'}>Sky</Text>
                     <Text className={'e-text-black'}>Tennis</Text>
                  </Menu>
                </ListItem>
                <ListItem className={'margin-list-item align-list-item'}>
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 e-text-grey-200'}>
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

          <Block classes={'e-row e-background-grey-900 e-margin-top-25'}>
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
                  <Menu type={'cover'} placeholder={'Brands'} classes={'e-body1 e-text-grey-200'}>
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

          <Block classes={'bg-mountain e-margin-top-25'}>
            <Block classes={'e-row e-padding-top-50 header-padding'}>
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
                <Btn label={'explore'} ripple={false} type={'default'} classes={'e-text-grey-200 explore-btn'} />
                <Text type={'h1'} classes={'e-text-capitalize e-text-white e-display-3'}><b>Stop gratuitous UI Animation</b></Text>
                <Text type={'p'} classes={'e-text-center e-subhead e-text-grey-200'}>
                  Lorem ipsum dolor sit amet, nulla vidisse impedit vix et. Nam rebum explicari an, vidit nusquam vulputate sea. Impetus abhorreant et sit, id iracundia concludaturque.
                </Text>
                <Block className={'e-margin-top-25 e-margin-bottom-25'}>
                  <Text type={'a'} classes={'e-text-center e-title'}>
                    <Icon name={"image-panorama-fisheye"} className={"e-text-grey-200"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-title'}>
                    <Icon name={"image-panorama-fisheye"} className={"e-text-grey-200"} />
                  </Text>
                  <Text type={'a'} classes={'e-text-center e-title'}>
                    <Icon name={"image-lens"} className={"e-text-grey-200"} />
                  </Text>
                </Block>
              </Block>
            </Block>
          </Block>

          <Block classes={'bg-lake e-margin-top-25'}>
            <Block classes={'e-row e-padding-top-50 header-padding'}>
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
                <Text type={'span'} classes={'e-text-center e-text-grey-400 e-body2'}> 345</Text>
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

          <Block className={'e-background-light-blue-A100 e-margin-top-25'}>
            <Block classes={'e-row e-background-light-blue-A200 e-no-margin e-no-padding'}>
              <Block classes={'brick brick-2 e-h-start e-v-end no-mg-bottom e-no-margin e-no-padding'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-200 e-headline margin-logo align-menu"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-200 align-menu'}>Patagonia</Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin e-no-padding'}>
                <List type={'inline'} className={'bg-blue'}>
                  <ListItem className={'e-no-padding e-background-light-blue-A100'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Clothing</Text>
                  </ListItem>
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-200 e-text-center e-body1'}>Sport</Text>
                  </ListItem>
                  <ListItem className={'margin-list-item'}>
                    <Menu type={'cover'} placeholder={'Brands'} classes={'e-padding-top-15 e-padding-bottom-15 e-body1 e-text-grey-200'}>
                       <Text className={'e-text-black'}>KKS</Text>
                       <Text className={'e-text-black'}>Wy's</Text>
                       <Text className={'e-text-black'}>Fashon Lux</Text>
                    </Menu>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end e-no-margin e-no-padding'}>
                <List type={'inline'} className={'align-menu'}>
                  <ListItem className={'margin-badges align-list-item'}>
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
                      <Icon name={"action-trending-neutral"} classes={"e-text-grey-200"} />
                    </Text>
                  </ListItem >
                </List>
              </Block>
            </Block>

            <Block classes={'e-row e-margin-top-50'}>
              <Block classes={'brick brick-6 e-h-end e-v-end'}>
                <Input type={'email'} name={'label'} label={'Your Email'} classes={'input-look text-focus-white btn-big'}/>
              </Block>
              <Block classes={'brick brick-6 e-h-start e-v-end'}>
                <Btn label={'Sign up'} ripple={true} type={'submit'} className={'raised e-button e-text-white e-background-indigo-400 mg-b-btn btn-big'} />
              </Block>
            </Block>
          </Block>

          <Block className={'e-background-white e-margin-top-25'}>
            <Block classes={'e-row e-background-white e-no-margin e-no-padding border-nav nav-h'}>
              <Block classes={'brick brick-2 e-h-start e-v-end e-no-margin e-no-padding'}>
                <Icon name={"image-filter-hdr"} classes={"e-text-grey-900 e-headline margin-logo e-margin-bottom-15"} />
                <Text type={'p'} classes={'e-text-center e-button e-text-grey-900 e-margin-bottom-25'}>Patagonia</Text>
              </Block>
              <Block classes={'brick brick-8 e-h-center e-v-center e-no-margin e-no-padding'}>
                <List type={'inline'} className={'bg-blue'}>
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-900 e-text-center e-body1 border-active'}>Clothing</Text>
                  </ListItem>
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-900 e-text-center e-body1'}>Shoes</Text>
                  </ListItem>
                  <ListItem className={'e-no-padding'}>
                    <Text type={'a'} classes={'padding-list e-text-grey-900 e-text-center e-body1'}>Accessories</Text>
                  </ListItem >
                  <ListItem className={'margin-list-item'}>
                    <Menu type={'cover'} placeholder={'Sport'} classes={'e-padding-top-15 e-padding-bottom-15 e-body1 e-text-grey-900'}>
                       <Text className={'e-text-black'}>Polo</Text>
                       <Text className={'e-text-black'}>Sky</Text>
                       <Text className={'e-text-black'}>Tennis</Text>
                    </Menu>
                  </ListItem>
                  <ListItem className={'margin-list-item'}>
                    <Menu type={'cover'} placeholder={'Brands'} classes={'e-padding-top-15 e-padding-bottom-15 e-body1 e-text-grey-900'}>
                       <Text className={'e-text-black'}>KKS</Text>
                       <Text className={'e-text-black'}>Wy's</Text>
                       <Text className={'e-text-black'}>Fashon Lux</Text>
                    </Menu>
                  </ListItem>
                </List>
              </Block>
              <Block classes={'brick brick-2 e-h-end e-v-end e-no-margin e-no-padding'}>
                <List type={'inline'} className={''}>
                  <ListItem className={'margin-badges align-list-item'}>
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
                  <ListItem className={'margin-badges align-list-item'}>
                    <Text type={'a'} classes={'e-text-center e-body1'}>
                      <Image src={'assets/img/poza-profil.jpg'} alt={'John Smith'} classes={'avatar-profil'}/>
                    </Text>
                  </ListItem >
                </List>
              </Block>
            </Block>

            <Block classes={'e-row e-margin-top-50'}>
              <Block classes={'brick brick-6 e-h-end e-v-end'}>
                <Input type={'email'} name={'label'} label={'Your Email'} classes={'input-look text-focus-white btn-big'}/>
              </Block>
              <Block classes={'brick brick-6 e-h-start e-v-end'}>
                <Btn label={'Sign up'} ripple={true} type={'submit'} className={'raised e-button e-text-white e-background-indigo-400 mg-b-btn btn-big'} />
              </Block>
            </Block>
          </Block>


        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaHeadersFooters;
