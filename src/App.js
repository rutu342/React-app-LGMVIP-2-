import React, {useState} from 'react';
import './App.css';
import Cards from './MyComponents/cards';

  
function App() {
  const [loading, setLoading] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const btnClick = async () => {
    try {
      setButtonClick(true);
      
      fetch('https://reqres.in/api/users?page=1')
        .then((response) => response.json())
        .then((json) => {
          setCardData(json.data);
        })

        setInterval(() => {
          setLoading(true);
        }, 1500);
        
      }
      catch(e){
        console.log(e)
      }
  };

  return (
    <>
      
      <nav className="navbar_section">
        <div className="top_main_footer">
         <h2 id="main_title">ZIPPY</h2>
            <button className="button" type="button" onClick={btnClick}>GET USERS</button>
        </div>
      </nav>
      

      <div className='container'>
        <div className='row justify-content-center '>
          
          {buttonClick ? 
          (loading ? (<Cards cardData={cardData} />) : <h1>loading</h1> )
            :  ( <div className='body_section'>
              <h1>ZIPPY TEAM</h1>
            </div>)
          }
          <div className='footer'>
            <footer>Made with &hearts; by Rutuja Shastri</footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;