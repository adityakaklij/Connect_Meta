
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Compnents/Navbar';

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect( () =>{
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  }, []);

      const connectWallet = async() => {
        window.ethereum.request({ method:"eth_requestAccounts"})
        .then( (accounts) => {
          setAccount(accounts[0]);
        }).catch( (e) => {
          alert(e)
        })
        
      }

    if(account === null){
      return(
        <div className="App">{
          isWalletInstalled? (<button onClick={connectWallet}> Connect </button>) : (
            <p>Install Metamask Wallet</p>
          )
        }
        </div>
      )
    }
    else {

      return(
        <div className="App">
          <p> Connected as : {account}</p>

          <Navbar></Navbar>
        </div>
      )
    }
  
  return (
  <>
    <button>Get </button>
  </>    
  );
  return {account}
}

export default App;
