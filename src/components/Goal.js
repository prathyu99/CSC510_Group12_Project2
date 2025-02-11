import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUsers } from '../actions/search';
import {editItem} from '../actions/auth';
import {clearsearchstate} from '../actions/search';

import 'react-datepicker/dist/react-datepicker.css';

import {createJob, createInventoryHistory} from '../actions/job';
import { fetchJobs } from '../actions/job';



class Goal extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          restname:'',
          restid: '',
          itemname:'',
          quantity:'0',
          costperitem:'',
          datebought:'',
          dateexpired:'',
          editMode: false,
        };
      }
    

      handleSave1 = () => {

        const {itemname,quantity} = this.state;
    
        console.log(itemname)
    
    
        this.props.dispatch(editItem(itemname,quantity))
        this.props.dispatch(createInventoryHistory(itemname,quantity))
        this.setState({
          itemname:''
        })
    
        alert("updated the quantity of "+itemname);
        document.getElementById("itnameupdate").value = "";
        document.getElementById("quanupdate").value = "";
        
      }
    
   

    clearSearch = () => {
        this.props.dispatch(clearsearchstate([]))
        console.log("UNMOUNT")

    }

    handleInputChange = (fieldName,val) => {

        this.setState({
            [fieldName]: val
        })

        
    
      }

    
  handleSave = () => {

    const {restname,restid,itemname,quantity,costperitem,datebought,dateexpired} = this.state;

    const {user} = this.props.auth;

    this.setState({
      restname: user.restname,
      restid:user._id
    })

    this.props.dispatch(createJob(user.restname,user._id,itemname,quantity,costperitem,datebought,dateexpired))
    this.props.dispatch(createInventoryHistory(itemname,quantity))
    this.setState({
      itemname:''
    })

    alert(itemname + " added to the inventory!");
    document.getElementById("itname").value = "";
    document.getElementById("quan").value = "";
    document.getElementById("cost").value = "";
    document.getElementById("edate").value = "";
    document.getElementById("bdate").value = "";
    
  }

  componentDidMount() {
    this.props.dispatch(fetchJobs());
  }


    
    
    render() {
       
      const {error} = this.props.auth;
      const {user} = this.props.auth;
      const {job} = this.props;
        
      
        return (
            <div>
              
           <div className="goal-form" style={{width:'600px',height:'500px',marginLeft:'100px'}} >
           <span className="login-signup-header">Add Inventory</span>
            {error && <div className="alert error-dailog">{error}</div>}
            

            <div className="field">
              
          <input
            id="itname"
            placeholder="Item Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('itemname', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            id="quan"
            placeholder="Quantity"
            type="text"
            required
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            id="cost"
            placeholder="Cost per item"
            type="text"
            required
            onChange={(e) => this.handleInputChange('costperitem', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            id="bdate"
            placeholder="Date Bought (mm/dd/yyyy)"
            type="text"
            required
            onChange={(e) => this.handleInputChange('datebought', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            id="edate"
            placeholder="Expiration Date (mm/dd/yyyy)"
            type="text"
            required
            onChange={(e) => this.handleInputChange('dateexpired', e.target.value)}
          />
        </div>

        
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave} >Save</button>
        </div>
        
        

        </div>

         
        <div className="goal-form" style={{width:'600px',height:'300px',marginLeft:'100px'}} >
           <span className="login-signup-header">Update Item</span>
            {error && <div className="alert error-dailog">{error}</div>}
            
            

            <div className="field">
              
          <input
            id="itnameupdate"
            placeholder="Item Name"
            type="text"
            required
            onChange={(e) => this.handleInputChange('itemname', e.target.value)}
          />
        </div>

        <div className="field">
          <input
            id="quanupdate"
            placeholder="Quantity"
            type="text"
            required
            onChange={(e) => this.handleInputChange('quantity', e.target.value)}
          />
        </div>
   
        
        <div className="field">
        <button className="button save-btn" onClick={this.handleSave1} >Save</button>
        </div>
        
        

        </div>
        
        
        
               
        
        </div>
        
           
        );
    }
}



function mapStateToProps(state) {
    return {
      auth: state.auth,
      results: state.search.results,
      job:state.job,
    };
  }
  
  export default connect(mapStateToProps)(Goal);