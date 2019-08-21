import React from "react";

const Teammate = props => {
    console.log(props);

    return (
      <div className="teammateList">
          {props.teammateList.map(teammate => {
              return (
                  <div className ="teammate" key={teammate.id}>
                      <h1>{teammate.name}</h1>
                      <h2>{teammate.role}</h2>
                      <h4>{teammate.email}</h4>
                  </div>
              );
          })}
      </div>  
    );
};

export default Teammate;