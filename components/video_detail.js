import React from 'react';
import WebView from 'react-native-webview';
import {
    ActivityIndicator,
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    TouchableHighlight,
  } from 'react-native';

const VideoDetail = (props) => {
  // example of destructuring, the below is equivalent to props.route.params.video
  const { route } = props;
  const { video } = route.params;

  if(video.id == null){
      return(<View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>);
  }
  else return (
    
    <WebView styles={styles.shrink}
      source={{ uri: `https://www.youtube.com/embed/${video.id.videoId}` }}
      automaticallyAdjustContentInsets={false}
    />
    
  );
};

export default VideoDetail;

const styles = StyleSheet.create({
    shrink: {
      width: 50,
      backgroundColor: 'black',
    },
  });