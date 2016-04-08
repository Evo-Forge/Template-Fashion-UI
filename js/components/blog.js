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
  Divider,
  Icon,
  Image,
  Input,
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

 var ChipNature = {
   name: 'ChipNature',
   text: [<span className={'e-text-white'}>nature</span>],
   deletable: false
 }

 var ChipNew = {
   name: 'ChipNew',
   text: [<span className={'e-text-white'}>new</span>],
   deletable: false
 }

 var ChipFood = {
   name: 'ChipFood',
   text: [<span className={'e-text-white'}>food</span>],
   deletable: false
 }
 var ChipDesign = {
   name: 'ChipFood',
   text: [<span className={'e-text-white'}>design</span>],
   deletable: false
 }
 var ChipPlaces2 = {
   name: 'ChipPlaces2',
   text: [<span className={'e-text-white'}>places</span>],
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
                        <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn rounded-corners'} />
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

                <Card className={'card-container e-flex-grow flex-container'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-6 add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                      <Block>
                        <Text type={'p'} className={'e-body1 e-text-amber-500'}>Travel</Text>
                        <Text type={'h1'} className={'e-display-2 e-no-margin e-text-grey-700'}>
                          Eric &amp; Nancy's
                        </Text>
                        <Text type={'h1'} className={'e-display-2 e-no-margin e-text-grey-700'}>
                          Patagonian Dream
                        </Text>
                        <Text type={'p'} className={'e-text-grey-700'}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                        <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn rounded-corners'} />
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
                      <Image src={'./assets/img/window.jpg'} className={'e-img-rsp e-flex-grow'} />
                    </Block>
                  </Block>
                </Card>


              </Block>
              <Block className={'brick brick-4 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow pos-relative'}>
                  <Image src={'./assets/img/whale.jpg'} className={'e-img-rsp'} />
                  <Block className={'layer transparent-layer e-background-indigo-500'}></Block>
                  <Block className={'layer flex-container e-flex-col e-justify-between add-padding e-v-start'}>
                    <Text type={'h1'} className={'e-display-1 e-text-white e-no-margin'}>
                      Swoop's Pick of Patagonian Restaurants
                    </Text>
                    <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-white btn-icon blog-btn rounded-corners'} />
                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-6 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow flex-container e-flex-col e-justify-between pos-relative add-padding'}>
                  <Text className={'e-text-center e-text-grey-700'}>
                    <Text className={'e-no-margin e-display-1'}>PlayStation</Text>
                    <Text type={'sup'} className={'e-display-1'}>5</Text>
                    <Text type={'p'} className={'e-no-margin e-display-1'}>Concept</Text>
                    <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn rounded-corners'} />
                  </Text>
                  <Image src={'./assets/img/ps4controller.jpg'} className={'e-img-rsp'} />
                  <Chip data={ChipNew} className={'e-background-cyan-400 new-chip'}/>
                </Card>
              </Block>

              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  <Block className={'pos-relative'}>
                    <Image src={'./assets/img/landscape2.jpg'} className={'e-img-rsp'} />
                    <Block className={'layer transparent-layer e-background-teal-700'}></Block>
                    <Block className={'layer flex-container e-flex-col e-justify-between'}>
                      <Block className={'add-padding'}>
                        <Chip data={ChipNature} className={'e-background-amber-400'}/>
                        <Text type={'h1'} className={'e-text-white e-headline'}>
                          Greg and Michelles's Off The Beaten Track Adventure
                        </Text>
                      </Block>

                      <Block className={'flex-container add-padding'}>
                        <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                        <Text className={'add-padding-left'}>
                          <Text type={'p'} className={'e-no-margin e-text-white'}>Alla Zhukatinskaya</Text>
                          <Text type={'p'} className={'e-text-grey-400'}>Designer</Text>
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                  <Block className={'flex-container e-justify-between add-padding'}>
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

                </Card>
              </Block>

              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container flex-container e-flex-col e-flex-grow'}>
                  <Block className={'e-background-amber-400 add-padding e-flex-grow'}>
                    <Text type={'p'} className={'e-text-white e-body2'}>Travel</Text>
                    <Text type={'h1'} className={'e-text-grey-700 e-headline'}>
                      <Text type={'strong'}>We Know Because We Go: </Text>
                      <Text>Harriet, Chloe &amp; Sally's Patagonia Trips in the Spring</Text>
                    </Text>
                  </Block>
                  <Block className={'flex-container add-padding'}>
                    <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                    <Text className={'e-text-grey-400 add-padding-left'}>
                      <Text type={'p'} className={'e-no-margin'}>Alla Zhukatinskaya</Text>
                      <Text type={'p'}>Writer</Text>
                    </Text>
                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow pos-relative'}>
                  <Image src={'./assets/img/patagonia-travel3.jpg'} className={'e-img-rsp'} />
                  <Block className={'layer transparent-layer e-background-cyan-400'}></Block>
                  <Block className={'layer flex-container e-flex-col e-v-center e-justify-between add-padding'}>
                    <Chip data={ChipNew} className={'e-background-amber-500'} />
                    <Text type={'h1'} className={'e-headline e-text-white e-text-center'}>Things to do in Ushuaia</Text>
                    <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-white btn-icon blog-btn rounded-corners'} />
                  </Block>
                </Card>
              </Block>

              <Block className={'brick brick-3 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow flex-container e-flex-col e-justify-between add-padding'}>
                  <Block className={'flex-container e-justify-between'}>
                    <Text className={'e-text-grey-400 e-text-uppercase'}>travel</Text>
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
                  </Block>
                  <Text type={'h1'} className={'e-headline e-no-margin e-text-grey-700'}>
                    Sally's experiences sea kayaking
                  </Text>
                  <Block className={'flex-container add-padding e-v-center'}>
                    <Image src={'./assets/img/journalist.jpg'} width={'30px'} height={'30px'} className={'round-img'} />
                    <Text className={'add-padding-left'}>
                      <Text type={'p'} className={'e-no-margin e-text-grey-400'}>Maria Petrova</Text>
                    </Text>
                  </Block>
                </Card>
              </Block>

              <Block className={'brick brick-6 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow flex-container'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-8 add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                      <Block>
                        <Text type={'h1'} className={'e-headline e-no-margin e-text-grey-700'}>
                          Torres del Paine - What is
                        </Text>
                        <Text type={'h1'} className={'e-headline e-no-margin e-text-grey-700'}>
                          a Refugio
                        </Text>
                        <Text type={'p'} className={'e-text-grey-700'}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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

                    <Block className={'brick brick-4 e-no-padding rm-margin-bottom e-flex-grow flex-container e-flex-col'}>
                      <Image src={'./assets/img/window.jpg'} className={'e-img-rsp e-flex-grow'} />
                    </Block>
                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow flex-container'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-6 e-no-padding rm-margin-bottom e-flex-grow flex-container e-flex-col'}>
                      <Image src={'./assets/img/patagonia-food.png'} className={'e-img-rsp e-flex-grow'} />
                    </Block>

                    <Block className={'brick brick-6 add-padding e-flex-grow flex-container e-flex-col e-justify-between'}>
                      <Block>
                        <Text type={'p'} className={'e-text-uppercase e-text-grey-400 e-no-margin'}>eat</Text>
                        <Text className={'e-headline'}>
                          <Text type={'h1'} className={'e-no-margin'}>Places to eat in</Text>
                          <Text type={'h1'} className={'e-no-margin'}>El Chalten</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-700'}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <Text type={'p'} className={'e-text-grey-700'}>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn rounded-corners'} />
                        <Block className={'e-margin-top-25'}>
                          <Chip data={ChipFood} className={'e-background-indigo-500 e-no-margin'}/>
                          <Chip data={ChipPlaces2} className={'e-background-cyan-400'}/>
                        </Block>
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

                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container e-flex-grow'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-12'}>
                      <Block className={'flex-container e-justify-between add-padding'}>
                        <Text className={'e-body2 e-text-grey-700'}>Last articles</Text>
                        <Text>
                          <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-left'} className={'btn-icon no-min-size e-text-grey-700'} />
                          <Btn ripple={true} type={'flat'} icon={'hardware-keyboard-arrow-right'} className={'btn-icon no-min-size e-text-grey-700'} />
                        </Text>
                      </Block>
                    </Block>
                  </Block>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-4 flex-container e-v-center add-padding'}>
                      <Image src={'./assets/img/patagonia-travel1.jpg'} className={'e-img-rsp rounded-corners'} width={'100px'} height={'100px'} />
                      <Block className={'flex-container e-flex-col add-padding-left e-body1'}>
                        <Text className={'e-text-grey-400'}>3 March 2016</Text>
                        <Text className={'e-text-grey-700'}>Choosing your hotel and neighbourhood in Buenos Aires</Text>
                        <List type={'inline'} className={'e-no-margin'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>12</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>9</Text>
                            </Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                    <Block className={'brick brick-4 flex-container e-v-center add-padding pos-relative'}>
                      <Chip data={ChipDesign} className={'e-background-indigo-500 pos-abs-top-left'} />
                      <Image src={'./assets/img/patagonia-travel2.jpg'} className={'e-img-rsp rounded-corners'} width={'100px'} height={'100px'} />
                      <Block className={'flex-container e-flex-col add-padding-left e-body1'}>
                        <Text className={'e-text-grey-400'}>3 March 2016</Text>
                        <Text className={'e-text-grey-700'}>Choosing your hotel and neighbourhood in Buenos Aires</Text>
                        <List type={'inline'} className={'e-no-margin'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>12</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>9</Text>
                            </Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                    <Block className={'brick brick-4 flex-container e-v-center add-padding pos-relative'}>
                      <Chip data={ChipPlaces2} className={'e-background-deep-orange-500 pos-abs-top-left'} />
                      <Image src={'./assets/img/patagonia-travel3.jpg'} className={'e-img-rsp rounded-corners'} width={'100px'} height={'100px'} />
                      <Block className={'flex-container e-flex-col add-padding-left e-body1'}>
                        <Text className={'e-text-grey-400'}>3 March 2016</Text>
                        <Text className={'e-text-grey-700'}>Choosing your hotel and neighbourhood in Buenos Aires</Text>
                        <List type={'inline'} className={'e-no-margin'}>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>12</Text>
                            </Text>
                          </ListItem>
                          <ListItem>
                            <Text type={'strong'} className={'e-text-grey-400'}>
                              <Btn ripple={true} type={'flat'} icon={'editor-mode-comment'} className={'btn-icon no-min-size e-text-grey-400'} />
                              <Text>9</Text>
                            </Text>
                          </ListItem>
                        </List>
                      </Block>
                    </Block>
                  </Block>
                </Card>
              </Block>
            </Block> {/* end row*/}

            <Block className={'e-row'}>
              <Block className={'brick brick-12 flex-container e-no-padding'}>
                <Card className={'card-container'}>
                  <Block className={'e-row'}>
                    <Block className={'brick brick-12 e-no-padding'}>
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
                          <Text>Next article</Text>
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
                    </Block>
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
                          <Btn label={'Read More'} ripple={true} type={'flat'} className={'e-text-grey-400 btn-icon blog-btn rounded-corners'} />
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
                          <Btn icon={'hardware-keyboard-arrow-up'} ripple={true} type={'fab'} className={'fab-mini e-background-grey-100 e-text-grey-400 e-no-margin'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>

                  <Block className={'e-row'}>
                    <Block className={'brick brick-12 e-no-padding'}>
                      <Block className={'imgs-container pos-relative '}>
                        <Image src={'./assets/img/landscape1.jpg'} height={'400px'} width={'100%'}/>
                        <Block className={'control-buttons flex-container e-justify-between e-background-grey-100'}>
                          <Btn ripple={true} type={'flat'} icon={'navigation-chevron-left'} className={'btn-icon no-min-size e-text-grey-400'} />
                          <Btn ripple={true} type={'flat'} icon={'navigation-chevron-right'} className={'btn-icon no-min-size e-text-grey-400'} />
                        </Block>
                      </Block>
                    </Block>
                  </Block>

                  <Block className={'e-row'}>
                    <Block className={'brick brick-4'}>
                      <Block className={'add-padding-50'}>
                        <Card className={'card-container'}>
                          <Image src={'./assets/img/landscape1.jpg'} className={'e-img-rsp'} />
                        </Card>

                        <Text type={'em'} className={'e-text-grey-400 e-body1'}>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </Text>
                      </Block>
                    </Block>

                    <Block className={'brick brick-8'}>
                      <Text type={'h1'} className={'e-display-2 e-text-grey-700'}>
                        Finally, Patagonia is not to be missed during a lifetime
                      </Text>
                      <Text type={'p'} className={'e-body1'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                      </Text>

                      <Block className={'quote-container e-background-grey-100 pos-relative e-margin-bottom-15'}>
                        <Text type={'p'} className={'e-title e-text-grey-700'}>
                          <Text type={'em'}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                          </Text>
                        </Text>
                        <Text type={'em'} className={'e-text-grey-400 e-body1'}>
                          David Guetta
                        </Text>
                        <Icon name={"editor-format-quote"} className={"e-text-grey-400 e-display-2"} />
                      </Block>

                      <Text type={'p'} className={'e-body1'}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                      </Text>

                      <Chip data={ChipPlaces} className={'e-background-grey-100'}/>
                      <Chip data={ChipPlaces} className={'e-background-grey-100'}/>
                      <Block className={'add-padding flex-container e-margin-top-25'}>
                        <Menu type={'cover'} placeholder={'Share'} className={'e-text-grey-700 e-background-grey-100 share-menu'}>
                          <Text className={'e-text-black'}>Twitter</Text>
                          <Text className={'e-text-black'}>Facebook</Text>
                          <Text className={'e-text-black'}>Google+</Text>
                        </Menu>
                        <Block className={'share-icon twitter flex-container e-v-center e-h-center'}>
                          <i className={'fa fa-twitter'}></i>
                        </Block>
                        <Block className={'share-icon facebook flex-container e-v-center e-h-center'}>
                          <i className={'fa fa-facebook'}></i>
                        </Block>
                        <Block className={'share-icon gplus flex-container e-v-center e-h-center'}>
                          <i className={'fa fa-google'}></i>
                        </Block>
                      </Block>
                    </Block>
                  </Block>

                  <Block className={'e-row'}>
                    <Block className={'brick brick-12 e-background-grey-100 flex-container e-flex-col e-v-center'}>
                      <Block className={'comment-container flex-container e-flex-col'}>
                        <Block className={'comment-box e-text-center add-padding-50'}>
                          <Text className={'e-title'}>Comments </Text>
                          <Text className={'e-title'}>(3)</Text>
                        </Block>
                        <Block className={'comment-box'}>
                          <Block className={'comment flex-container full-width'}>
                            <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                            <Block className={'add-padding'}>
                              <List type={'inline'}>
                                <ListItem>
                                  <Text className={'e-body2 e-text-grey-700'}>Razvan Matei</Text>
                                </ListItem>
                                <ListItem>
                                  <Text className={'e-text-grey-700'}>
                                    <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-700'} />
                                    <Text>4 hours ago</Text>
                                  </Text>
                                </ListItem>
                              </List>
                              <Text type={'p'}>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                              </Text>
                              <Btn ripple={true} type={'flat'} label={'Reply'} className={'btn-icon e-text-grey-400'} />
                            </Block>
                          </Block>
                        </Block>
                        <Block className={'comment-box'}>
                          <Block className={'comment flex-container reply full-width'}>
                            <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                            <Block className={'add-padding'}>
                              <List type={'inline'}>
                                <ListItem>
                                  <Text className={'e-body2 e-text-grey-700'}>Razvan Matei</Text>
                                </ListItem>
                                <ListItem>
                                  <Text className={'e-text-grey-700'}>
                                    <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-700'} />
                                    <Text>4 hours ago</Text>
                                  </Text>
                                </ListItem>
                              </List>
                              <Text type={'p'}>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                              </Text>
                              <Btn ripple={true} type={'flat'} label={'Reply'} className={'btn-icon e-text-grey-400'} />
                            </Block>
                          </Block>
                        </Block>
                        <Block className={'comment-box'}>
                          <Block className={'comment flex-container full-width'}>
                            <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                            <Block className={'add-padding'}>
                              <List type={'inline'}>
                                <ListItem>
                                  <Text className={'e-body2 e-text-grey-700'}>Razvan Matei</Text>
                                </ListItem>
                                <ListItem>
                                  <Text className={'e-text-grey-700'}>
                                    <Btn ripple={true} type={'flat'} icon={'device-access-time'} className={'btn-icon no-min-size e-text-grey-700'} />
                                    <Text>4 hours ago</Text>
                                  </Text>
                                </ListItem>
                              </List>
                              <Text type={'p'}>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                              </Text>
                              <Btn ripple={true} type={'flat'} label={'Reply'} className={'btn-icon e-text-grey-400'} />
                            </Block>
                          </Block>
                        </Block>

                        <Block className={'comment-box'}>
                          <Block className={'comment flex-container full-width'}>
                            <Image src={'./assets/img/journalist.jpg'} width={'50px'} height={'50px'} className={'round-img'} />
                            <Block className={'full-width'}>
                              <Input type={'textarea'} name={'add-comment'} rows={5} placeholder={'Comment'} className={'full-width'}/>
                            </Block>
                          </Block>
                        </Block>
                        <Block className={'flex-container e-h-end'}>
                          <Btn label={'add comment'} ripple={true} type={'primary'} className={'raised e-background-indigo-A200 e-text-white'} />
                        </Block>
                      </Block>
                    </Block>
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
