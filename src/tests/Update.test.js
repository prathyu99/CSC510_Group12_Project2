import React from 'react';
import { shallow, mount } from 'enzyme';
import Update from '../path-to-your-component/Update';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Update Component', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: { /* your user data here */ },
      },
      search: {
        results: [],
      },
      job: [],
    });

    wrapper = mount(
      <Provider store={store}>
        <Update />
      </Provider>
    );
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Job components based on job data', () => {
    // Replace this with appropriate test data for your 'job' state
    const jobData = [
      { /* job data object 1 */ },
      { /* job data object 2 */ },
    ];

    store = mockStore({
      auth: {
        user: { /* your user data here */ },
      },
      search: {
        results: [],
      },
      job: jobData,
    });

    wrapper = mount(
      <Provider store={store}>
        <Update />
      </Provider>
    );

    expect(wrapper.find('Job').length).toBe(jobData.length);
  });

  it('dispatches the editItem action when handleSave is called', () => {
    // You can mock the editItem action function and test if it's called with the expected arguments.
    const editItemMock = jest.fn();
    store.dispatch = editItemMock;

    // Set the necessary state for your test case.
    // For example, set itemname, quantity, etc.

    // Call the handleSave function
    wrapper.find('Update').instance().handleSave();

    // Test if the editItem function was called with the expected arguments.
    expect(editItemMock).toHaveBeenCalledWith(/* expected arguments */);
  });

  // You can add more test cases to cover other component functionalities.
});