
import { APIURLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
    ADD_JOB,
    UPDATE_JOB,
    ADD_INVENTORY_HISTORY,
    ADD_MENU,
    UPDATE_MENU
  } from './actionTypes';



export function createJob(
    restname,restid,itemname,quantity,costperitem,datebought,dateexpired
  ) {
    return (dispatch) => {
      const url = APIURLS.createJob();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          restname,
          id: restid,
          itemname,
          quantity,
          costperitem,
          datebought,
          dateexpired
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(jobSuccess(data.data.job));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }
  

  export function createMenu(
    restname,restid,menuname,quantity,costmenu
  ) {
    return (dispatch) => {
      const url = APIURLS.createMenu();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          restname,
          id: restid,
          menuname,
          quantity,
          costmenu,
          
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(menuSuccess(data.data.menu));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }
  



  export function jobSuccess(job) {
    return {
      type: ADD_JOB,
      job,
    };
  }

  export function menuSuccess(menu) {
    return {
      type: ADD_MENU,
      menu,
    };
  }

  export function fetchJobs() {
    return (dispatch) => {
      
      const url = APIURLS.fetchJobs();
  
      fetch(url)
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('dsssdsds',data);
          dispatch(updateJobs(data.jobs));
        });
    };
  }
  export function fetchMenus() {
    return (dispatch) => {
      
      const url = APIURLS.fetchMenus();
  
      fetch(url)
        .then((response) => {
          console.log('Response', response);
          return response.json();
        })
        .then((data) => {
          console.log('menusssssss',data);
          dispatch(updateMenu(data.menu));
        });
    };
  }
 
  export function createInventoryHistory(
    itemname,quantity
  ) {
    return (dispatch) => {
      const url = APIURLS.createInventoryHistory();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: getFormBody({
          itemname,
          quantity
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('data', data);
          if (data.success) {
            // do something
            localStorage.setItem("token", data.data.token);
            dispatch(inventoryHistorySuccess(data.data.inventoryhistory));
            return;
          }
          // dispatch(signupFailed(data.message));
        });
    };
  }


export function updateJobs(jobs) {
    return {
      type: UPDATE_JOB,
      jobs,
    };
  }

  export function updateMenu(menu) {
    return {
      type: UPDATE_MENU,
      menu,
    };
  }

  export function updateInventoryHistory(inventoryhistory) {
    return {
      type: UPDATE_INVENTORY_HISTORY,
      inventoryhistory,
    };
  }


