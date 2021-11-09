import React from "react";


function Categor(props){
    const [active, setActive] = React.useState(0);

    return(
        <div className="categories">
        <ul>
          {props.item && props.item.map((elem, index) =>(
              <li
              className={ active === index ? 'active': ''}
              onClick={()=> setActive(index)}
               key={`${elem}_${index}`
                }>{elem}</li>
          ))}
        </ul>
      </div>
    )
}

export default Categor;