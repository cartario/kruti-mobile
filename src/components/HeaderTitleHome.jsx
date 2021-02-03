import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HeaderTitleHome = () => {
  const user = useSelector(({ user }) => user);
  return (
    <View style={styles.wrapTitle}>
      <View style={styles.levelCount}>
        <Text style={{ color: 'white' }}>{user.level}</Text>
      </View>
      <View style={styles.title}>
        <Text>Lessons</Text>
      </View>
      <View style={{ ...styles.levelCount, ...styles.scoreCount }}>
        <Text style={{ color: 'white' }}>{user.totalScore}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapTitle: {
    flexDirection: 'row',
  },
  levelCount: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  scoreCount: {
    backgroundColor: 'purple',
    borderRadius: 0,
  },
  title: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
});

export default HeaderTitleHome;
