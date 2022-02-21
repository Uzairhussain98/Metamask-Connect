import './App.css';
import {useEffect,useState} from "react"
import { Contract,providers} from "ethers"

function App() {
    const [isWalletInstalled,setIsWalletInstalled]= useState(false);
    const [account, setAccount]= useState(null);

    useEffect(()=> {
      if (window.ethereum){
          setIsWalletInstalled(true);
      }
    },[]);


    async function connectWallet(){
      window.ethereum
      .request({
        method:"eth_requestAccounts",
      })
      .then((accounts)=>{
        setAccount(accounts[0])
      })
      .catch((error)=>{
        alert("Something Went Wrong")
      });
    }


    if(account===null){
      return (
        <div className="App">
          {
            isWalletInstalled ? (
            <button className="btn" onClick={connectWallet}>Connect Metamask</button>)
          : (
          <p>Install Metamask Wallet</p>
          )
           }

        </div>

      );


    }

    return(
      <div className="App"> 
      <p>Connected As {account} </p>
      </div>
    );



}

export default App;
