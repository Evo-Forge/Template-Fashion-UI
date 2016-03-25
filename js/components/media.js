import React from 'react';
import ClassNames from 'classnames';

import {
  Block,
  Btn,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Icon,
  Image,
  List,
  ListItem,
  Menu,
  Slider,
  Text,
  Utils
 } from 'react-essence';

class PatagoniaMedia extends React.Component {

  render() {
    return (
      <Block className={'patagoniaMedia'}>
        <Block className={'e-container e-background-blue-700 e-margin-top-25'}>
          <Block className={'container'}>



            <Block className={'e-row e-h-center e-v-center'}>
              <Text type={'p'} className={'e-text-white e-no-margin badge e-h-center e-v-center'}>3</Text>
              <Text type={'h1'} classes={'e-display-3 e-text-uppercase e-text-white e-no-margin'}>media</Text>
            </Block>

            <Block className={'e-row e-margin-top-50'}>
              <Block className={'brick brick-12 pos-relative'}>
                <Btn icon={'av-play-arrow'} ripple={true} type={'fab'} className={'fab e-text-white e-background-blue-700 btn-absolute'} />
                <Card className={'e-background-white current-album card-container flex-container e-strech-items'}>
                  <Block className={'text-container flex-container e-flex-col e-justify-between'}>
                    <Block>
                      <Text type={'h1'} classes={'e-display-1 e-text-grey-700 e-no-margin'}>Birds Of Tokyo</Text>
                      <Text type={'p'} classes={'e-text-grey-700 e-body1'}>Jazz Lounge:</Text>
                      <Text type={'p'} classes={'e-text-grey-700 e-body1'}>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
                      </Text>
                      <Text type={'p'} classes={'e-text-cyan-A400 e-body1'}>
                        234 song - 7h 36min
                      </Text>
                    </Block>
                    <List type={'inline'}>
                      <ListItem>
                        <Text type={'strong'} className={'e-body1'}>
                          <Btn ripple={true} type={'flat'} icon={'av-play-arrow'} className={'btn-icon no-min-size'} />
                          <Text>23</Text>
                        </Text>
                      </ListItem>
                      <ListItem>
                        <Text type={'strong'} className={'e-body1'}>
                          <Btn ripple={true} type={'flat'} icon={'action-favorite-outline'} className={'btn-icon no-min-size'} />
                          <Text>345</Text>
                        </Text>
                      </ListItem>
                    </List>
                  </Block>
                  <Block className={'img-container'}>
                    <Image src={'./assets/img/album-cover.jpg'} className={'e-img-rsp'} />
                  </Block>
                  <Block className={'playlist flex-container e-flex-col e-justify-between'}>
                    <Block className={'list-container custom-scrollbar'}>
                      <List className={'e-no-style e-text-grey-700 e-body1'}>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>1.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem className={'selected'}>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>2.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>3.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>4.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>5.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>6.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>7.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>8.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>9.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>10.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>11.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text type={'strong'} className={'clearfix'}>
                            <Block className={'e-left'}>
                              <Text type={'p'} className={'song-number e-left'}>12.</Text>
                              <Icon name={"av-play-arrow"} className={"song-icon e-left"} />
                              <Text>Broken Bones</Text>
                            </Block>
                            <Block className={'e-right'}>
                              <Text>3:19</Text>
                            </Block>
                          </Text>
                        </ListItem>
                      </List>
                    </Block>
                    <Block className={'player flex-container e-flex-col e-justify-between e-text-grey-700 e-body1'}>
                      <Slider start={0} step={1} fill={true} lowerColor={'e-background-cyan-A100'} />
                      <Block className={'flex-container e-margin-top-15'}>
                        <Block className={'controls'}>
                          <Btn ripple={true} type={'flat'} icon={'av-fast-rewind'} className={'btn-icon no-min-size'} />
                          <Btn ripple={true} type={'flat'} icon={'av-play-arrow'} className={'btn-icon no-min-size'} />
                          <Btn ripple={true} type={'flat'} icon={'av-fast-forward'} className={'btn-icon no-min-size'} />
                        </Block>
                        <Block className={'song-defilation'}>
                          <Block className={'name-container'}>Birds Of Tokyo - The Saddest Thing dfg sdfg sdfg sdf gsdf sdf gdsf g</Block>
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-12'}>
                <Card className={'e-background-white card-container album-list'}>
                  <CardHeader>
                    <Text type={'span'} classes={'e-left e-text-grey-700'}>Albums</Text>
                    <Menu type={'cover'} placeholder={'Sort By'} classes={'e-right'}>
                      <Text className={'e-text-black'}>Alphabet</Text>
                      <Text className={'e-text-black'}>Artist</Text>
                      <Text className={'e-text-black'}>Song</Text>
                    </Menu>
                  </CardHeader>
                  <CardContent className={'flex-container e-strech-items e-justify-between e-body1'}>
                    <Block className={'album'}>
                      <Image src={'./assets/img/album1.jpg'} className={'e-img-rsp'} />
                      <Text type={'strong'}>
                        <Text type={'p'}>Album name</Text>
                      </Text>
                      <Text type={'p'} className={'e-text-grey-500'}>
                        Artist name
                      </Text>
                    </Block>
                    <Block className={'album'}>
                      <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                      <Text type={'strong'}>
                        <Text type={'p'}>Album name</Text>
                      </Text>
                      <Text type={'p'} className={'e-text-grey-500'}>
                        Artist name
                      </Text>
                    </Block>
                    <Block className={'album'}>
                      <Image src={'./assets/img/album3.jpg'} className={'e-img-rsp'} />
                      <Text type={'strong'}>
                        <Text type={'p'}>Album name</Text>
                      </Text>
                      <Text type={'p'} className={'e-text-grey-500'}>
                        Artist name
                      </Text>
                    </Block>
                    <Block className={'album'}>
                      <Image src={'./assets/img/album4.jpeg'} className={'e-img-rsp'} />
                      <Text type={'strong'}>
                        <Text type={'p'}>Album name</Text>
                      </Text>
                      <Text type={'p'} className={'e-text-grey-500'}>
                        Artist name
                      </Text>
                    </Block>
                    <Block className={'album'}>
                      <Image src={'./assets/img/album5.jpg'} className={'e-img-rsp'} />
                      <Text type={'strong'}>
                        <Text type={'p'}>Album name</Text>
                      </Text>
                      <Text type={'p'} className={'e-text-grey-500'}>
                        Artist name
                      </Text>
                    </Block>
                  </CardContent>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-12'}>
                <Card className={'card-container e-background-white'}>
                  <CardFooter>
                   Card footer with action buttons
                  </CardFooter>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-3 flex-container e-flex-col'}>
                <Card className={'card-container e-background-white e-body1 small-player'}>
                  asd
                </Card>
              </Block>
              <Block className={'brick brick-9'}>
                <Card className={'card-container e-background-white e-body1'}>
                  <CardHeader>
                    <Text className={'e-body1 e-left'}>Best tracks</Text>
                    <Btn ripple={true} type={'flat'} icon={'navigation-more-horiz'} className={'btn-icon no-min-size e-right'} />
                  </CardHeader>
                  <CardContent className={'best-tracks custom-scrollbar'}>
                    <Block className={'song-container flex-container'}>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                      <Block className={'track'}>
                        <Image src={'./assets/img/album2.jpg'} className={'e-img-rsp'} />
                        <Block className={'rating'}>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-yellow-700'}>&#9733;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                          <Text className={'e-text-grey-400'}>&#9734;</Text>
                        </Block>
                        <Text type={'strong'}>
                          <Text type={'p'} className={'e-text-capitalize'}>one more time</Text>
                        </Text>
                        <Text type={'p'} className={'e-text-grey-500'}>
                          Daft Punk
                        </Text>
                      </Block>
                    </Block>
                  </CardContent>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-8'}>
                <Card className={'card-container e-background-white'}>
                  asd
                </Card>
              </Block>
              <Block className={'brick brick-4'}>
                <Card className={'card-container e-background-white'}>
                  <CardHeader>
                    header
                  </CardHeader>
                  <CardContent>
                    content
                  </CardContent>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-3'}>
                <Card className={'card-container e-background-white'}>
                  <CardHeader>
                    card header
                  </CardHeader>
                  <CardContent>
                    card content
                  </CardContent>
                </Card>
              </Block>

              <Block className={'brick brick-9'}>
                <Block className={'e-row'}>
                  <Block className={'brick brick-4'}>
                    <Card className={'card-container e-background-white'}>
                      <CardContent>
                        card content
                      </CardContent>
                      <CardFooter>
                        butoanele
                      </CardFooter>
                    </Card>
                  </Block>
                  <Block className={'brick brick-4'}>
                    <Card className={'card-container e-background-white'}>
                      <CardContent>
                        card content
                      </CardContent>
                      <CardFooter>
                        butoanele
                      </CardFooter>
                    </Card>
                  </Block>
                  <Block className={'brick brick-4'}>
                    <Card className={'card-container e-background-white'}>
                      <CardContent>
                        card content
                      </CardContent>
                      <CardFooter>
                        butoanele
                      </CardFooter>
                    </Card>
                  </Block>
                </Block>

                <Block className={'e-row'}>
                  <Block className={'brick brick-12'}>
                    <Card className={'card-container e-background-white'}>
                      <CardContent>
                        card content
                      </CardContent>
                      <CardFooter>
                        butoanele
                      </CardFooter>
                    </Card>
                  </Block>
                </Block>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-12'}>
                <Card className={'card-container e-background-white'}>
                  <CardContent>
                    full size media player
                  </CardContent>
                  <CardFooter>
                    butoanele
                  </CardFooter>
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-12'}>
                <Card className={'card-container e-background-white'}>
                  videos
                </Card>
              </Block>
            </Block>

            <Block className={'e-row'}>
              <Block className={'brick brick-6'}>
                <Card className={'card-container e-background-white'}>
                  video player
                </Card>
              </Block>
              <Block className={'brick brick-3'}>
                <Card className={'card-container e-background-white'}>
                  next video
                </Card>
              </Block>
              <Block className={'brick brick-3'}>
                <Card className={'card-container e-background-white'}>
                  maculada
                </Card>
              </Block>
            </Block>



          </Block>
        </Block>
      </Block>
    );
  }
}

module.exports = PatagoniaMedia;
