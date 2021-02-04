import React from 'react';
import { Button, View } from 'react-native';
import { Audio } from 'expo-av';

const audioUrls = [
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610205678/kruti-verti/online/music/Erik_B._and_Rakim_-_Dont_Sweat_The_Technique_p29fmc.mp3',
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610202443/kruti-verti/online/music/attache_-_bassbin_ballerina_ynsug5.mp3',
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610205544/kruti-verti/online/music/Boogie_Down_Productions_-_Jack_of_Spades_krcwtc.mp3',
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610205533/kruti-verti/online/music/Show_A.G._-_Next_Level_l2ejyr.mp3',
  'https://res.cloudinary.com/dxioiveim/video/upload/v1610205529/kruti-verti/online/music/Fdel_-_Get_Up_On_Ya_Feet_w0v4i5.mp3',
];

const RANDOM_AUDIO_URL = audioUrls[Math.floor(Math.random() * audioUrls.length)];

const AppAudio = () => {
  const [sound, setSound] = React.useState();

  const playSound = async () => {
    // console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({ uri: RANDOM_AUDIO_URL });
    setSound(sound);

    // console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    playSound();
  }, []);

  React.useEffect(() => {
    return sound
      ? () => {
          // console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View>
      {/* <Button title="Play Sound" onPress={playSound} /> */}
    </View>
  );
};

export default AppAudio;
