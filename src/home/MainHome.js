import React, {Component} from 'react'
import { Container, Header, Footer, Content, Button, Body, Text, Title, Left, Right } from 'native-base';
import {View} from 'react-native'
import styles from '../styleSheet/styles'
export class MainHome extends Component{
    render(){
        let buttonMargin = 30;
        return(
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title style={{paddingLeft:35}}>Door Control</Title>
                    </Body>
                    
                </Header>
                <Content>
                    <View style={{flexDirection:'row', padding:20}}>
                        <View style={{flex:6, marginTop:50, padding:10}}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flex:6}}>
                                    <Text style={{paddingRight:60, paddingBottom:10}}>خارجی</Text>
                                    <Button block rounded info  onPress={()=>{fetch('www.google.com')}}>
                                        <Text>Click</Text>
                                    </Button>
                                    <Button block rounded danger style={{marginTop:buttonMargin}} />
                                    <Button block rounded success style={{marginTop:buttonMargin}} />
                                    <Button block rounded warning style={{marginTop:buttonMargin}} />
                                </View>
                                
                            </View>
                            
                        </View>
                        <View style={{flex:6, marginTop:50, padding:10 }}>
                            <View style={{flexDirection:'column'}}>
                                <View style={{flex:6}}>
                                    <Text style={{paddingRight:60, paddingBottom:10}}>داخلی</Text>
                                    <Button block rounded info/>
                                    <Button block rounded danger style={{marginTop:buttonMargin}} />
                                    <Button block rounded success style={{marginTop:buttonMargin}} />
                                    <Button block rounded warning style={{marginTop:buttonMargin}} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>

                </Footer>
            </Container>
        )
    }
}