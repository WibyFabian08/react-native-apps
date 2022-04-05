export const selectTab = (value, navigation) => dispatch => {
  dispatch({type: 'SET_SELECTED_TAB', value: value});
  navigation.closeDrawer();
  navigation.navigate(value);
};
