import AsyncStorage from '@react-native-community/async-storage'


export const all = async (StrorageKey) => {
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

export const remove = async (StrorageKey) => {
  try {
    await AsyncStorage.removeItem(`${StrorageKey}`)
  } catch (error) {
    console.error(error);
  }
}


export default {
  all,
  save,
  remove
};