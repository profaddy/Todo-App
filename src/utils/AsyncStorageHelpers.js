import AsyncStorage from '@react-native-community/async-storage'


export const all = async (StrorageKey) => {
  console.log(AsyncStorage, 'AsyncStorage')
  try {
    const result = await AsyncStorage.getItem(`${StrorageKey}`);
    return result
  } catch (error) {
    console.error(error);
    throw error;

  }
};
export const save = async (StrorageKey, dataToSave) => {
  try {
    await AsyncStorage.setItem(`${StrorageKey}`, JSON.stringify(dataToSave))
  } catch (error) {
    console.error(error);
  }
}


export default {
  all,
  save
};