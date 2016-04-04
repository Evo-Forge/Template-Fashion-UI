import React from 'react';
import ClassNames from 'classnames';

import {
  Block,
  Btn,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Chip,
  Icon,
  Image,
  List,
  ListItem,
  Menu,
  Slider,
  Switch,
  Tab,
  Text,
  Utils
 } from 'react-essence';

 var ChipTravel = {
   name: 'ChipTravel',
   text: [<span className={'e-text-white'}>travel</span>],
   deletable: false,
 }

 var ChipPop = {
   name: 'ChipPop',
   text: [<span className={'e-text-white'}>pop</span>],
   deletable: false,
 }

 var ChipHotel = {
   name: 'ChipHotel',
   text: [<span className={'e-text-white'}>hotel</span>],
   deletable: false,
 }

 var ChipMoney = {
   name: 'ChipMoney',
   text: [<span className={'e-text-white'}>money</span>],
   deletable: false,
 }

 var ChipPlaces = {
   name: 'ChipPlaces',
   text: [<span className={'e-text-grey-700'}>places</span>],
   deletable: false
 }

class PatagoniaBlog extends React.Component {

  render() {
    return (
      <Block className={'patagoniaBlog'}>
        <Block className={'e-container e-background-white e-margin-top-25'}>
          <Block className={'container e-body1'}>



            <Block className={'e-row e-h-center e-v-center'}>
              <Text type={'p'} className={'e-text-indigo-500 e-no-margin badge blog-badge e-h-center e-v-center'}>3</Text>
              <Text type={'h1'} classes={'e-display-3 e-text-uppercase gradient-text e-no-margin'}>media</Text>
            </Block>

            <Block className={'e-row e-margin-top-25'}>
              <Block className={'brick brick-12 e-no-padding'}>
                <Card className={'card-container'}>
                  <CardHeader>
                    <Text className={'e-left'}>Popular articles</Text>
                    <List type={'inline'} className={'e-right'}>
                      <ListItem>
                        <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'btn-icon no-min-size e-text-grey-700'} />
                      </ListItem>
                      <ListItem>
                        <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'btn-icon no-min-size e-text-grey-700'} />
                      </ListItem>
                    </List>
                  </CardHeader>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-3 flex-container e-flex-col e-v-center e-h-center add-padding'}>
                      <Text className={'e-text-grey-400'}>3 March 2016</Text>
                      <Text className={'e-title'}>
                        Swoop's own Harriet stayed came back from a Patagonia
                      </Text>
                      <Chip data={ChipTravel} className={'e-background-cyan-A400 e-margin-top-25'} />
                        <List type={'inline'} className={'e-margin-top-25'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>324</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>38</Text>
                            </Text>
                          </ListItem>
                        </List>
                    </Block>
                    <Block className={'brick brick-3 flex-container e-flex-col e-v-center e-h-center add-padding'}>
                      <Text className={'e-text-grey-400'}>3 March 2016</Text>
                      <Text className={'e-title'}>
                        Swoop's own Harriet stayed came back from a Patagonia
                      </Text>
                      <Chip data={ChipPop} className={'e-background-indigo-500 e-margin-top-25'} />
                        <List type={'inline'} className={'e-margin-top-25'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>324</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>38</Text>
                            </Text>
                          </ListItem>
                        </List>
                    </Block>
                    <Block className={'brick brick-3 flex-container e-flex-col e-v-center e-h-center add-padding'}>
                      <Text className={'e-text-grey-400'}>3 March 2016</Text>
                      <Text className={'e-title'}>
                        Swoop's own Harriet stayed came back from a Patagonia
                      </Text>
                      <Chip data={ChipHotel} className={'e-background-red-500 e-margin-top-25'} />
                        <List type={'inline'} className={'e-margin-top-25'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>324</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>38</Text>
                            </Text>
                          </ListItem>
                        </List>
                    </Block>
                    <Block className={'brick brick-3 flex-container e-flex-col e-v-center e-h-center add-padding'}>
                      <Text className={'e-text-grey-400'}>3 March 2016</Text>
                      <Text className={'e-title'}>
                        Swoop's own Harriet stayed came back from a Patagonia
                      </Text>
                      <Chip data={ChipMoney} className={'e-background-amber-500 e-margin-top-25'} />
                        <List type={'inline'} className={'e-margin-top-25'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>324</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>38</Text>
                            </Text>
                          </ListItem>
                        </List>
                    </Block>
                  </Block>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>

              <Block className={'brick brick-3 e-no-padding flex-container'}>
                <Card className={'card-container e-flex-grow flex-container e-flex-col e-justify-between'}>
                  <Image src={'./assets/img/landscape1.jpg'} className={'e-img-rsp'} />
                  <Block className={'add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                    <Block>
                      <Text className={'e-title'}>
                        The Japanese Patters Test
                      </Text>
                      <Text type={'p'} className={'e-text-grey-400'}>
                        These japanese patterns are colorful and busy yet simple and relaxing.
                      </Text>
                    </Block>

                    <Block className={'flex-container e-justify-between'}>
                      <List type={'inline'} className={'e-no-margin'}>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>23</Text>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>14</Text>
                          </Text>
                        </ListItem>
                      </List>

                      <List type={'inline'} className={'e-no-margin'}>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>2 hours ago</Text>
                          </Text>
                        </ListItem>
                      </List>
                    </Block>
                  </Block>
                </Card>
              </Block>

              <Block className={'brick brick-3 e-no-padding flex-container'}>
                <Card className={'card-container e-flex-grow flex-container e-flex-col'}>
                  <Image src={'./assets/img/landscape2.jpg'} className={'e-img-rsp'} />
                  <Block className={'add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                    <Text className={'e-title'}>
                      10 Facts about Patagonia About Tucan Travel
                    </Text>
                    <Block className={'flex-container e-margin-top-25 e-justify-between'}>
                      <List type={'inline'} className={'e-no-margin'}>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>23</Text>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>14</Text>
                          </Text>
                        </ListItem>
                      </List>

                      <List type={'inline'} className={'e-no-margin'}>
                        <ListItem>
                          <Text type={'strong'} className={'e-text-grey-400'}>
                            <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-400'} />
                            <Text>2 hours ago</Text>
                          </Text>
                        </ListItem>
                      </List>
                    </Block>
                  </Block>
                </Card>
              </Block>

              <Block className={'brick brick-6 e-no-padding flex-container'}>
                <Card className={'card-container e-flex-grow flex-container'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-6 add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                      <Block>
                        <Text className={'e-title'}>
                          The Japanese Patters Test Lorem Ipsum is simply dummy text
                        </Text>
                        <Text type={'p'} className={'e-text-grey-400'}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                        <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn'} />
                      </Block>
                      <Block className={'flex-container e-justify-between e-margin-top-25'}>
                        <List type={'inline'} className={'e-no-margin'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>23</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>14</Text>
                            </Text>
                          </ListItem>
                        </List>

                        <List type={'inline'} className={'e-no-margin'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>2 hours ago</Text>
                            </Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>

                    <Block className={'brick brick-6 e-no-padding rm-margin-bottom e-flex-grow flex-container e-flex-col'}>
                      <Image src={'./assets/img/landscape2.jpg'} className={'e-img-rsp e-flex-grow'} />
                    </Block>
                  </Block>
                </Card>
              </Block>

            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-8 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 8
                </Card>
              </Block>
              <Block className={'brick brick-4 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 4
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-6 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 6
                </Card>
              </Block>
              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 3
                </Card>
              </Block>

              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 3
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 3
                </Card>
              </Block>
              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 3
                </Card>
              </Block>

              <Block className={'brick brick-6 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 6
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 12
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  brick 12
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  <Block className={'flex-container e-justify-between add-padding'}>
                    <Text type={'a'}>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'btn-icon no-min-size e-text-grey-700'} />
                      <Text>Back article</Text>
                    </Text>
                    <Text type={'a'}>
                      <Btn ripple={true} type={'flat'} icon={'action-view-module'} className={'btn-icon no-min-size e-text-grey-700'} />
                      <Text>Back article</Text>
                    </Text>
                    <Text type={'a'}>
                      <Text>Back article</Text>
                      <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'btn-icon no-min-size e-text-grey-700'} />
                    </Text>
                  </Block>

                  <Block className={'e-text-center e-margin-bottom-15'}>
                    <Chip data={ChipPlaces} className={'e-background-grey-100'}/>
                  </Block>

                  <Text type={'h1'} classes={'e-display-3 e-text-uppercase gradient-text e-no-margin e-text-center e-no-margin'}>what is patagonia</Text>
                  <Text type={'h1'} classes={'e-display-3 e-text-uppercase gradient-text e-no-margin e-text-center'}>ui kit</Text>

                  <Text type={'p'} className={'e-text-center e-text-grey-400'}>
                    <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-400'} />
                    <Text type={'a'}>3 days ago &#183; 3 min read</Text>
                  </Text>
                  <Block className={'e-background-grey-100 flex-container e-h-center e-v-center'}>
                    <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                    <Text type={'p'} className={'e-body2 e-text-grey-700 add-padding e-no-margin'}>Alex Smith</Text>
                    <List type={'inline'} className={'e-no-margin'}>
                      <ListItem>
                        <Text type={'strong'} className={'e-text-grey-400'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                          <Text>324</Text>
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text type={'strong'} className={'e-text-grey-400'}>
                          <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                          <Text>38</Text>
                        </Text>
                      </ListItem>
                    </List>
                  </Block>

                  <Block className={'e-row e-margin-top-25'}>
                    <Block className={'brick brick-4 add-padding-50'}>
                      <Block className={'e-margin-bottom-50'}>
                        <Text type={'em'} className={'e-body1 e-text-grey-400'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Text>
                        <Block className={'flex-container e-justify-between e-margin-top-15'}>
                          <List type={'inline'} className={'e-no-margin'}>
                            <ListItem>
                              <Text type={'strong'} className={'e-text-grey-400'}>
                                <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                                <Text>324</Text>
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text type={'strong'} className={'e-text-grey-400'}>
                                <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                                <Text>38</Text>
                              </Text>
                            </ListItem>
                          </List>
                          <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn'} />
                        </Block>
                      </Block>

                      <Card className={'card-container e-margin-top-50 pos-relative'}>
                        <Image src={'./assets/img/landscape2.jpg'} className={'e-img-rsp'} />
                        <Block className={'layer flex-container e-flex-col e-h-end e-v-start add-padding'}>
                          <Text type={'p'} className={'e-headline e-text-white e-no-margin'}>
                            Patagonia is not
                          </Text>
                          <Text type={'p'} className={'e-headline e-text-white'}>
                            lifeless
                          </Text>
                          <List type={'inline'} className={'e-no-margin'}>
                            <ListItem>
                              <Text type={'strong'} className={'e-text-white'}>
                                <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-white'} />
                                <Text>324</Text>
                              </Text>
                            </ListItem>
                            <ListItem>
                              <Text type={'strong'} className={'e-text-white'}>
                                <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-white'} />
                                <Text>38</Text>
                              </Text>
                            </ListItem>
                          </List>
                        </Block>
                      </Card>

                    </Block>
                    <Block className={'brick brick-8 e-no-padding'}>
                      <Block className={'e-row'}>
                        <Block className={'brick brick-11 e-text-grey-700'}>
                          <Text className={'e-headline'}>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                            There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.
                          </Text>

                          <Text type={'p'} className={'e-body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lacus eget aliquam sagittis. Nunc est nisi, tempus sit amet sagittis et, tempus sit amet nulla. Mauris malesuada arcu nulla, ut accumsan enim auctor sit amet. Aenean in fermentum nunc. Donec sit amet congue quam. Aenean ex eros, feugiat eget massa a, dapibus tempor libero. Praesent ac cursus nibh. In at interdum tellus. Cras non sapien semper, hendrerit elit at, ultricies lacus. Duis viverra porta nibh quis congue. Ut a neque pulvinar, ultrices ante id, dapibus nisl.
                          </Text>

                          <Text type={'p'} className={'e-title'}>
                            <Text type={'strong'}>Patagonia is not a country</Text>
                          </Text>

                          <Text type={'p'} className={'e-body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lacus eget aliquam sagittis. Nunc est nisi, tempus sit amet sagittis et, tempus sit amet nulla. Mauris malesuada arcu nulla, ut accumsan enim auctor sit amet. Aenean in fermentum nunc. Donec sit amet congue quam. Aenean ex eros, feugiat eget massa a, dapibus tempor libero. Praesent ac cursus nibh. In at interdum tellus. Cras non sapien semper, hendrerit elit at, ultricies lacus. Duis viverra porta nibh quis congue. Ut a neque pulvinar, ultrices ante id, dapibus nisl.
                          </Text>

                          <Text type={'p'} className={'e-body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lacus eget aliquam sagittis. Nunc est nisi, tempus sit amet sagittis et, tempus sit amet nulla. Mauris malesuada arcu nulla, ut accumsan enim auctor sit amet. Aenean in fermentum nunc. Donec sit amet congue quam. Aenean ex eros, feugiat eget massa a, dapibus tempor libero. Praesent ac cursus nibh. In at interdum tellus. Cras non sapien semper, hendrerit elit at, ultricies lacus. Duis viverra porta nibh quis congue. Ut a neque pulvinar, ultrices ante id, dapibus nisl.
                          </Text>

                          <Text type={'p'} className={'e-body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lacus eget aliquam sagittis. Nunc est nisi, tempus sit amet sagittis et, tempus sit amet nulla. Mauris malesuada arcu nulla, ut accumsan enim auctor sit amet. Aenean in fermentum nunc. Donec sit amet congue quam. Aenean ex eros, feugiat eget massa a, dapibus tempor libero. Praesent ac cursus nibh. In at interdum tellus. Cras non sapien semper, hendrerit elit at, ultricies lacus. Duis viverra porta nibh quis congue. Ut a neque pulvinar, ultrices ante id, dapibus nisl.
                          </Text>

                          <Text type={'p'} className={'e-title'}>
                            Patagonia is not a place to just "chill", as some poeple like to do on vacation.
                          </Text>

                          <Text type={'p'} className={'e-body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra lacus eget aliquam sagittis. Nunc est nisi, tempus sit amet sagittis et, tempus sit amet nulla. Mauris malesuada arcu nulla, ut accumsan enim auctor sit amet.
                          </Text>

                        </Block>
                        <Block className={'brick brick-1'}>
                          brick 1
                        </Block>
                      </Block>


                    </Block>
                  </Block>

                  <Block className={'e-row'}>
                    <Image src={'./assets/img/landscape1.jpg'} className={'e-img-rsp'} />
                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaBlog;
