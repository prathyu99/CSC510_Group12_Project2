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
    const jobData = [
      { name:"ob1" },
      { name: "ob2" },
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
   const editItemMock = jest.fn();
    store.dispatch = editItemMock;
    wrapper.find('Update').instance().handleSave();
  });

});