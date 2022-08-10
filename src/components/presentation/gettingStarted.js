import React from 'react';
import {skinCodes} from '../../constants/typeCodes';
import img from './skin2.svg';
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';
// import App from '../App/App';
// import { withRouter } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

function GettingStarted(props) {
    const navigate = useNavigate();
   
     const onChange = async (skinCd) => {

        // if(props.document.id){
        //     //  props.updateDocument(props.document.id, skinCd);        
        // }
        // else{
        //     //  props.setDocument(skinCd); 
        // }
        navigate('/App');
      }

      
        return (  
            <>
            <Header></Header>
            <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center">
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return( <div key={index} className="template-card rounded-border">
                                  <i className={(value == 'demo-value'? 'selected fa fa-check' :'hide') } ></i>
                                <img  className='' src={img}/>
                                <button type="button" onClick={()=>onChange(value)}  className='btn-select-theme'>USE TEMPLATE</button>
                            </div>);
    
                        })
                    }
                    </div>
                
                </div>
            </div>
            <Footer></Footer>
            </>
        );
    
}
  


export default GettingStarted

