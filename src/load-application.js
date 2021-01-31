import * as Font from 'expo-font';

export const loadApplication = async () => {
  // await Font.loadAsync({
  //   'open-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
  //   'open-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  // }) 
  
  await Promise.all([Font.loadAsync({'open-regular': require('../assets/fonts/OpenSans-Regular.ttf')})]);
};
