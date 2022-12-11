import "./CardProps.css";

function Card(props){
    return(<>
        
      <div className='cards'>
        <div className='card'>
          <img src={props.imgsrc}  alt='myPic' className='card_img' />
          <div className='card_info'>
            <span className='card_category'>{props.title}</span>
            <h3 className='card_title'>{props.sname}</h3>
            <a href={props.link} target="blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
  </>
  
    )
  };
  export default Card;

// // App.js copy
// import UseEffect1 from './UseEffect/useEffect';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Card from './CardDiv';
// import "./CardProps.css";
// import CardData from './CardData';


// ReactDOM.render(<>
//       {CardData.map(function ncard(value){
//         return(
    
//           < Card
//           imgsrc={value.imgsrc}
//           title={value.title}
//           sname={value.sname}
//           link={value.link}
//           />
      
//         )
//       })}
// </>,
//   document.getElementById('root')
// );

// function myname(a, b){

//   return a+b;
// }
// // fat arrow Function 
// const myname = (a,b)=> a+b;
  