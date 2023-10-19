import menus from './menu'; // Adjust the import path as needed

// Mock the action types and actions
const UPDATE_MENU = 'UPDATE_MENU';
const EDIT_ITEM_SUCCESSFULL = 'EDIT_ITEM_SUCCESSFULL';
const ADD_MENU = 'ADD_MENU';

const initialState = [];

describe('menus reducer', () => {
  it('should return the initial state', () => {
    expect(menus(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_MENU', () => {
    const action = {
      type: UPDATE_MENU,
      menu: ['menu item 1', 'menu item 2'],
    };
    expect(menus(initialState, action)).toEqual(action.menu);
  });

  
});
