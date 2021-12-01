import React, { Component } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export class VersusScore extends Component {
    render(){
        return(
                <View style={VSStyle.upcomingGame}>
                    <View>
                        <Image source={require('../assets/Logos/New_Richmond_Tigers.png')} style={VSStyle.teamLogo} />
                        <Text style={VSStyle.teamName}>{this.props.homeTName.name}</Text>
                    </View>
                    <Text style={{color: '#474747', fontSize: 18}}>vs</Text>
                    <View>
                    <Image source={require('../assets/Logos/Hudson_Raiders.png')} style={VSStyle.teamLogo} />
                        <Text style={VSStyle.teamName}>{this.props.awayTName.name}</Text>
                    </View>
                </View>
            )
    }
}

const VSStyle = StyleSheet.create(
    {
        upcomingGame: {
            shadowRadius: 3,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.1,
            shadowColor: 'black',
            elevation: 1,
            backgroundColor: 'white',
            borderRadius: 35,
            borderColor: 'white',
            marginTop: 35,
            paddingTop: 40,
            paddingBottom: 40,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 180,
          },
        teamLogo: {
            width: 75,
            height: 75,
        },
        teamName: {
            alignSelf: 'center',
            marginTop: 10,
            color: '#474747',
            fontSize: 18,
        }
    }
);