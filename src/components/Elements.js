import React from 'react'
import { useState, useEffect } from 'react';


export default function Elements() {
  const [data,setdata]=useState({
    "form":{
        "sections":[
          {
            "sort": 1,
            "label": "Pizza Name",
            "description": "",
            "validate": {
              "required": true,
              "immutable": false
            },
            "jsonKey": "name",
            "uiType": "Input",
            "icon": "",
            "level": 0,
            "placeholder": ""
          },
          {
            "sort": 4,
            "label": "Pizza type",
            "description": "",
            "validate": {
              "required": true,
              "immutable": false
            },
            "jsonKey": "pizza_type",
            "uiType": "Group",
            "icon": "",
            "level": 0,
            "placeholder": "",
            "subParameters": [
              {
                "sort": 0,
                "label": "Pizza_type Type",
                "description": "",
                "validate": {
                  "required": true,
                  "options": [
                    {
                      "label": "Naples Style Pizza",
                      "value": "naples",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "New York Style Pizza",
                      "value": "newyork",
                      "description": "",
                      "icon": ""
                    }
                  ],
                  "defaultValue": "naples",
                  "immutable": false
                },
                "jsonKey": "type",
                "uiType": "Radio",
                "icon": "",
                "level": 1,
                "placeholder": ""
              },
              {
                "sort": 10001,
                "label": "Naples Style Pizza",
                "description": "",
                "validate": {
                  "required": true,
                  "immutable": false
                },
                "jsonKey": "Naples",
                "uiType": "Ignore",
                "icon": "",
                "level": 1,
                "placeholder": "",
                "conditions": [
                  {
                    "jsonKey": "pizza_type.type",
                    "op": "==",
                    "value": "naples",
                    "action": "enable"
                  }
                ],
                "subParameters": [
                  {
                    "sort": 10000,
                    "label": "Slices",
                    "description": "",
                    "validate": {
                      "required": true,
                      "options": [
                        {
                          "label": "1",
                          "value": "1",
                          "description": "",
                          "icon": ""
                        },
                        {
                          "label": "2",
                          "value": "2",
                          "description": "",
                          "icon": ""
                        },
                        {
                          "label": "3",
                          "value": "3",
                          "description": "",
                          "icon": ""
                        },
                        {
                          "label": "4",
                          "value": "4",
                          "description": "",
                          "icon": ""
                        },
                        {
                          "label": "5",
                          "value": "5",
                          "description": "",
                          "icon": ""
                        }
                      ],
                      "defaultValue": "1",
                      "immutable": false
                    },
                    "jsonKey": "slices",
                    "uiType": "Select",
                    "icon": "",
                    "level": 2,
                    "placeholder": ""
                  },
                  {
                    "sort": 10001,
                    "label": "Type",
                    "description": "",
                    "validate": {
                      "required": true,
                      "pattern": "naples",
                      "immutable": false
                    },
                    "jsonKey": "type",
                    "uiType": "Input",
                    "icon": "",
                    "level": 2,
                    "placeholder": "",
                    "disable": true
                  }
                ]
              },
              {
                "sort": 10002,
                "label": "New York Style Pizza",
                "description": "",
                "validate": {
                  "required": true,
                  "immutable": false
                },
                "jsonKey": "NewYork",
                "uiType": "Ignore",
                "icon": "",
                "level": 1,
                "placeholder": "",
                "conditions": [
                  {
                    "jsonKey": "pizza_type.type",
                    "op": "==",
                    "value": "newyork",
                    "action": "enable"
                  }
                ],
                "subParameters": [
                  {
                    "sort": 10000,
                    "label": "Cheeseburst",
                    "description": "",
                    "validate": {
                      "required": true,
                      "defaultValue": false,
                      "immutable": false
                    },
                    "jsonKey": "cheeseburst",
                    "uiType": "Switch",
                    "icon": "",
                    "level": 2,
                    "placeholder": ""
                  },
                  {
                    "sort": 10001,
                    "label": "Type",
                    "description": "",
                    "validate": {
                      "required": true,
                      "pattern": "newyork",
                      "immutable": false
                    },
                    "jsonKey": "type",
                    "uiType": "Input",
                    "icon": "",
                    "level": 2,
                    "placeholder": "",
                    "disable": true
                  }
                ]
              }
            ]
          },
          {
            "sort": 10002,
            "label": "Toppings",
            "description": "",
            "validate": {
              "required": true,
              "immutable": false
            },
            "jsonKey": "toppings",
            "uiType": "Group",
            "icon": "",
            "level": 0,
            "placeholder": "",
            "subParameters": [
              {
                "sort": 1,
                "label": "Sauce",
                "description": "",
                "validate": {
                  "required": true,
                  "options": [
                    {
                      "label": "Red",
                      "value": "Red",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "White",
                      "value": "White",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "Pesto",
                      "value": "Pesto",
                      "description": "",
                      "icon": ""
                    }
                  ],
                  "defaultValue": "Red",
                  "immutable": false
                },
                "jsonKey": "sauce",
                "uiType": "Select",
                "icon": "",
                "level": 1,
                "placeholder": ""
              },
              {
                "sort": 3,
                "label": "Main Topping",
                "description": "",
                "validate": {
                  "required": true,
                  "options": [
                    {
                      "label": "Mushroom",
                      "value": "Mushroom",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "Chicken",
                      "value": "Chicken",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "Jalapenos",
                      "value": "Jalapenos",
                      "description": "",
                      "icon": ""
                    }
                  ],
                  "defaultValue": "Mushroom",
                  "immutable": false
                },
                "jsonKey": "main_topping",
                "uiType": "Select",
                "icon": "",
                "level": 1,
                "placeholder": ""
              },
              {
                "sort": 6,
                "label": "Include_seasonings",
                "description": "",
                "validate": {
                  "required": true,
                  "defaultValue": true,
                  "immutable": false
                },
                "jsonKey": "include_seasonings",
                "uiType": "Switch",
                "icon": "",
                "level": 1,
                "placeholder": ""
              },
              {
                "sort": 6,
                "label": "Second Topping",
                "description": "",
                "validate": {
                  "options": [
                    {
                      "label": "Anchovies",
                      "value": "Anchovies",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "Pineapple",
                      "value": "Pineapple",
                      "description": "",
                      "icon": ""
                    },
                    {
                      "label": "Potatoes",
                      "value": "Potatoes",
                      "description": "",
                      "icon": ""
                    }
                  ],
                  "defaultValue": "Anchovies",
                  "immutable": false
                },
                "jsonKey": "second_topping",
                "uiType": "Select",
                "icon": "",
                "level": 1,
                "placeholder": ""
              }
            ]
          },
          {
            "sort": 10003,
            "label": "Size",
            "description": "",
            "validate": {
              "options": [
                {
                  "label": "Medium",
                  "value": "Medium",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "Small",
                  "value": "Small",
                  "description": "",
                  "icon": ""
                },
                {
                  "label": "Large",
                  "value": "Large",
                  "description": "",
                  "icon": ""
                }
              ],
              "defaultValue": "Medium",
              "immutable": false
            },
            "jsonKey": "size",
            "uiType": "Select",
            "icon": "",
            "level": 0,
            "placeholder": ""
          }
      ]
      }
      
  });
  const[ToggleOptions,setToggleOptions]=useState(false);
  const [radio,setradio]=useState('null');
  const [Advanced,setAdvanced]=useState(false);
  const [SampleJSON,setSampleJSON]=useState();
  
  const handleOnChange = (event)=>{
    setSampleJSON(event.target.value);
  }
  const part1= '{"form":{"sections":';
  const part2=  "}}";
  const handleClick =()=>{
    const res1=part1.concat(SampleJSON);
    const res2=res1.concat(part2);
    setdata(JSON.parse(res2));
  }

  return (
    <div>
      <div className="split left">
        <h1>My order</h1>
      {
        data.form.sections.map((item) =>{
           if(item.uiType==="Input")
           {
             return(
                <div className="mb-4 row">
               <label for="inputPassword" className="col-sm-2 col-form-label">{item.label}</label>
             <div className="col-sm-10">
               <input className="form-control" id="inputPassword"/>
                </div>
             </div>   
             )
           } 
           else if(item.uiType==="Group")
           {
             return(
                <div className="my-4">
                    <h6>{item.label}</h6>
                    
                    {
                      item.subParameters.map((sub_item) =>{
                        if(sub_item.uiType==="Radio")
                        {
                        return(
                            
                        
                          sub_item.validate.options.map((op) =>{
                            let x=op.label;
                             return(
                                
                                <button type="button"  onClick={()=>setradio({x})} className="btn btn-outline-dark mx-5" >{op.label}</button>    
                             )
                          })
                        )
                        }

                        if(sub_item.uiType==="Ignore" && radio==="null")
                        {
                          return(
                            sub_item.subParameters.map((gp_items)=>{
                                if(gp_items.uiType==="Select")
                                {
                                    return(
                                        <div className="input-group mb-3 my-4">
                                        <label className="input-group-text" for="inputGroupSelect01">{gp_items.label}</label>
                                      <select className="form-select" id="inputGroupSelect01">
                                    <option >Choose...</option>
                                    {
                                      gp_items.validate.options.map((ch) =>{
                                        return(<option >{ch.label}</option>)
                                      })
                                    }
                                    </select>
                                  </div> 
                                    )   
                                }
                                else if(gp_items.uiType==="Input")
                                {
                                    return(
                                        <div className="mb-4 row">
                                       <label for="inputPassword" className="col-sm-2 col-form-label">{gp_items.label}</label>
                                     <div className="col-sm-10">
                                       <input className="form-control" id="inputPassword"/>
                                        </div>
                                     </div>   
                                     )
                                }
                            })
                          )
                        }

                        if(sub_item.uiType==="Select" && Advanced===false)
                        {
                            return(
                                <div className="input-group mb-3 my-4">
                                <label className="input-group-text" for="inputGroupSelect01">{sub_item.label}</label>
                              <select className="form-select" id="inputGroupSelect01">
                            <option >Choose...</option>
                            {
                              sub_item.validate.options.map((ch) =>{
                                return(<option >{ch.label}</option>)
                              })
                            }
                            </select>
                          </div> 
                            )   

                        }
                        
                        if(sub_item.uiType==="Switch")
                        {
                            return(
                                <div class="form-check">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
                                   <label class="form-check-label" for="flexCheckChecked">
                                    {sub_item.label}
                                    </label>
                                 </div>  
                            )
                        }

                      })
                       

                    }
                </div>  
             )
           }
           else if(item.uiType==="Select")
           {
            return(
                <div className="input-group mb-3 my-4">
                <label className="input-group-text" for="inputGroupSelect01">{item.label}</label>
              <select className="form-select" id="inputGroupSelect01">
            <option >Choose...</option>
            {
              item.validate.options.map((choice) =>{
                return(<option >{choice.label}</option>)
              })
            }
            </select>
          </div>

            )
           }
            
        })
      }
      <div className="custom-control custom-switch">
  <input type="checkbox" onClick={()=>setToggleOptions(!ToggleOptions)} className="custom-control-input" id="customSwitches"/>
  <label className="custom-control-label"  for="customSwitches">Advanced Options</label>
  {
    ToggleOptions?<div className="mb-4 row">
    <label for="inputPassword" className="col-sm-2 col-form-label">Instructions</label>
  <div className="col-sm-10">
    <input className="form-control" id="inputPassword"/>
     </div>
  </div> : null
  }
</div>
      <div className="col-12 my-5">
    <button className="btn btn-primary" type="submit">Place My Order</button>
    
  </div>
      </div>
      <div className="split right">
  
  <div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Enter the json and Click on submit:</label>
  <textarea className="form-control" value={SampleJSON} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button className="btn btn-primary" onClick={handleClick} type="submit">Submit</button>
 
</div>


</div>
    </div>
  )
}
