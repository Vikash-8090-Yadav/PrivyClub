import React, { useState, useEffect, useContext, useMemo } from "react";
import Tg from "./toggle";

import {Web3} from 'web3';



import SideMenu from './Sidemenu';

import { useAuth } from "@arcana/auth-react";

// import { AuthProvider } from '@arcana/auth';
// import { ArcanaProvider } from '@arcana/provider';

const networks = {
  zkSyncSepoliaTestnet: {
    chainId: `0x${Number(300).toString(16)}`,
    chainName: "zkSyncSepoliaTestnet",
    nativeCurrency: {
      name: "zkSyncSepoliaTestnet",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: ["https://sepolia.era.zksync.dev"],
  },
};

var accountAddress= localStorage.getItem("filWalletAddress");





function Nav() {

  // const provider1 = provider.provider;



  const { loading, isLoggedIn, provider,connect, user } = useAuth();

  console.log("The provider is",provider);

 




  console.log("The user is",user);

  // const {address} = user;

  const [isOpen, setIsOpen] = useState(false);



  const [loading1, setLoading] = useState(false);
  const [address , setAddress] = useState('');
  const [balance , setBalance] = useState(' ');


  const fetchBalance = async () => {

//     let from = ''

// async function getAccounts() {
//   console.log('Requesting accounts')
//   try {
//     const accounts = await provider.request({ method: 'eth_accounts' })
//     console.log({ accounts })
//     from = accounts[0] // Use this account address to get wallet balance
//   } catch (e) {
//     console.log({ e })
//   }
// }
    
  };

  
  const onConnectClick = async () => {
    try {
      await connect(); // Built-in, plug & play login UI
    } catch (err) {
      console.log({ err });
      // Handle error
    }
  };
  




  
  async function logout(){
    alert("Logout")
    const accounts = await  provider.request({ method: 'eth_accounts' })

    console.log("The account is",accounts[0]);


    console.log("This is under Logout")

  
    try {
      // const auth = new AuthProvider('your-app-id'); // Initialize AuthProvider with your app ID
      // await auth.init();
  
      // const provider = new ArcanaProvider(auth); // Create Arcana provider
  
      // Convert message to hexadecimal format
      // const hexMessage = `0x${Buffer.from(message, 'utf8').toString('hex')}`;.

      console.log(provider);
  
      const sig = await provider.request({
        method: 'eth_sign',
        params: [accounts[0],'Thhiiss'],
      });
      
      console.log({ sig });
    } catch (error) {
      console.error('Error signing message:', error);
    }
  
    // localStorage.clear();
    // window.location.reload();
    // Logout();
  }

  useEffect(() => {


    async function test(){
      try{

        if(user){
  
          const add = user.address;
  
          console.log("The adress under useeffectr is ",add);
          localStorage.setItem("filWalletAddress",add) 
        }
  
      }catch(e){
  
      }
    }

    test();
  
  }, []);

  console.log(accountAddress)



  function truncateAddress(add) {
    const len = add.length;
    if (len < 11) return add;
    return add.substring(0, 6) + "..." + add.substring(len - 4, len);
  }
  return (
    <>




  <div className='navbar navbar-expand navbar-light bg-white topbar mb-4  shadow fixed-top-bar'>
    <div className=" text-lg mx-3 no-underline">
  <a
  className="flex items-center justify-center alchemy-link"
  href="/"
>
  
  <div className=" mmh text-lg mx-3">One Dao</div>
</a>
</div>
  <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={Tg}
          >
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              {accountAddress !== null && !isOpen && (
              <>
              <div className=' name flex'>
              {accountAddress}
                 </div>
              </>
              )
              }
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              
              {accountAddress !== null && !isOpen && (
            <>
              
              <li className="nav-item dropdown no-arrow">
                <div
                  className="nav-link dropdown-toggle"
                  onClick={() => setIsOpen(true)}
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img

                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </div>
                {/* Dropdown - User Information */}

              </li>
              </>
              )}
            </ul>
   
            <div className='maincomp flex'>
          {accountAddress && isOpen && (
            <SideMenu
              address={accountAddress}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              accountAddress={accountAddress}
              logout={logout}
              userInfo={accountAddress}
            />
          )}
          {accountAddress == null && !loading1 && (
            
            <button onClick={() => onConnectClick()}  class=" font-semibold bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">LOGIN</button>
            
          )}
          
     
    
          {loading1 && <button className="btn bg-gradient-1 text-gray-900 transition ease-in-out duration-500 transform hover:scale-110">Loading...</button>}
        </div>
  </div>
</>
  )
}

export default Nav