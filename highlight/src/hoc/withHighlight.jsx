import React, {useState} from "react";

function New(props) {
  return (
    <div className="wrap-item wrap-item-new">
      <span className="label">New!</span>
      {props.children}
    </div>
  )
};

function Popular(props) {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {props.children}
    </div>
  )
};

export function withHighlight(Components) {

  return (props) => {
    if(props.views >= 1000) {
      return <Popular>
        <Components
          {...props}
        />
      </Popular>
    }
    if(props.views < 100) {
      return <New>
        <Components
          {...props}
        />
      </New>
    }
    return <Components
      {...props}
    />
  }
}