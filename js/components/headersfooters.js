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
              <Text type={'p'} classes={'e-text-center e-headline e-text-indigo-400 badge-header'}>6</Text>
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
                  <Block className={'border-input-icon e-background-white'}>
                    <Input type={'text'} name={'label'} classes={'with-icon'} />
                    <Btn icon={'action-search'} ripple={false} type={'submit'} className={'search-btn e-text-white'} />
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

        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaHeadersFooters;
