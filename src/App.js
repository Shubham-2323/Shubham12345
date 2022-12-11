import React from 'react';
import "./CardProps.css";
import Card from './CardDiv';
import CardData from './CardData';

console.log(CardData[0])

function Ncard(val){
  console.log(val)
  return(<>
      
      <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
       />
     
 
  </>);
}

function App(){

   return(<>
      <h1>To Best Web Series</h1>
      {CardData.map(Ncard)}
  

   </>)

}


export default App;


// // import React from 'react';
// // import ReactDOM from 'react-dom';
// // import Card from './CardDiv';
// // import "./CardProps.css";
// // import CardData from './CardData';


// // ReactDOM.render(<>
// //       {CardData.map(function ncard(value){
// //         return(
    
// //           < Card
// //           imgsrc={value.imgsrc}
// //           title={value.title}
// //           sname={value.sname}
// //           link={value.link}
// //           />
      
// //         )
// //       })}
// // </>,
// //   document.getElementById('root')
// // );
