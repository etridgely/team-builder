import React from "react";

const Teammate = props => {
    console.log(props);

    return (
      <div className="teammateList">
          {props.teammateList.map(teammate => {
              return (
                  <div className ="teammate" key={teammate.id}>
                      <h3>{teammate.name}</h3>
                      <h5>Role: {teammate.role}</h5>
                      <h6>Email: {teammate.email}</h6>
                  </div>
              );
          })}
      </div>  
    );
};

export default Teammate;