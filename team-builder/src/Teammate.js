import React from "react";

const Teammate = props => {
    console.log(props);

    return (
      <div className="teammateList">
          {props.teammateList.map(teammate => {
              return (
                  <div className ="teammate" key={teammate.id}>
                      <h2>{teammate.name}</h2>
                      <h6>{teammate.role}</h6>
                      <p>{teammate.email}</p>
                  </div>
              );
          })}
      </div>  
    );
};

export default Teammate;