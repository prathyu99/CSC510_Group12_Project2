import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteMenu, fetchMenus } from '../actions/job';


class Job1 extends Component {
    deleteItem = (menuname)=>{
    this.props.dispatch(deleteMenu(menuname));
    alert("Are sure, you want to delete "+ menuname +" from your menu?");
    this.props.dispatch(fetchMenus());
  }

    render() {
        const { job } = this.props;
        const {menu } = this.props;
        const {user} = this.props.auth;
        console.log('lalallaalaxxxx')
        const { isLoggedIn } = this.props.auth;
        return (
          
            <div className="post" key={menu.restname} style={{width:'50vw',marginLeft:'50px'}}>
              {1>0? 
            <div className="post-header">
              
              <div >
                <h4 style={{display:'inline-block'}}>Restaurant Name : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.restname}</span>
                <button style={{marginLeft:'300px'}} className="button delete-btn" onClick={()=>this.deleteItem(menu.menuname)}>Delete &nbsp; 
                <FontAwesomeIcon icon={faTrash} style={{color: "#f9fafa",}}/></button>
                  </div>


                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Dish : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.menuname}</span>
                  </div>

                  <div >
                    
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Price : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.costmenu}</span>
                  </div>

                  
                  
                  <div >
                <h4 style={{display:'inline-block',marginTop:'-12px'}}>Quantity : </h4> 
                <span style={{marginLeft:'10px'}}>{menu.quantity}</span>
                  </div> 
                
                
              
            
            </div> : []}
          </div>
        );
    }
}

function mapStateToProps({ auth, job,application }) {
    return {
      auth,
      application,
    
      
    };
  }
  
  export default connect(mapStateToProps)(Job1);