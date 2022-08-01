
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [isWalletInstalled, setIsWalletInstalled] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect( () =>{
    if(window.ethereum){
      setIsWalletInstalled(true);
    }
  }, []);

    const connectWallet = async () => {
      window.ethereum.request({
        method: "eth_requestAccounts",
      }).then((accounts) => {
        setAccount(accounts[0]);
      }).catch((error)=>{
        alert(error);
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
    return(
      <div className="App">
        <p> Connected as : {account}</p>
      </div>
    )
 
  
  return (
  <>
  
  </>    
  );
}

export default App;
