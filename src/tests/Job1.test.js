import React from 'react';
import { shallow } from 'enzyme';
import { Job1 } from '../path-to-your-component/Job1';

describe('Job1 Component', () => {
  it('should render correctly with menu data', () => {
    const menuData = {
      restname: 'Restaurant Name',
      menuname: 'Dish Name',
      costmenu: 10,
      quantity: 5,
    };
    
    const wrapper = shallow(
      <Job1
        auth={{ user: { name: null }, isLoggedIn: true }}
        menu={menuData}
        job={null}
      />
    );

    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('.post-header').length).toBe(1);
    expect(wrapper.find('button.delete-btn').length).toBe(1);
    expect(wrapper.find('h4').length).toBe(4);
  });

  it('should call deleteItem function when delete button is clicked', () => {
    const menuData = {
      restname: 'Restaurant Name',
      menuname: 'Dish Name',
      costmenu: 10,
      quantity: 5,
    };
    const deleteMenuMock = jest.fn();
    const fetchMenusMock = jest.fn();
    
    const wrapper = shallow(
      <Job1
        auth={{ user: { name: null }, isLoggedIn: true }}
        menu={menuData}
        job={null}
        dispatch={jest.fn()} 
        deleteMenu={deleteMenuMock}
        fetchMenus={fetchMenusMock}
      />
    );

    wrapper.find('button.delete-btn').simulate('click');
    expect(deleteMenuMock).toHaveBeenCalledWith(menuData.menuname);
    expect(fetchMenusMock).toHaveBeenCalled();
  });

  it('should not render if isLoggedIn is false', () => {
    const menuData = {
      restname: 'Restaurant Name',
      menuname: 'Dish Name',
      costmenu: 10,
      quantity: 5,
    };
    
    const wrapper = shallow(
      <Job1
        auth={{ user: {}, isLoggedIn: false }}
        menu={menuData}
        job={null}
      />
    );

    expect(wrapper.exists()).toBe(false);
  });
});
