import { useState, useEffect } from "react";
import { ethers } from "ethers"
import Web3 from 'web3';

function NavLink({ to, children }) {
  return <a href={to} className={`px-4 uppercase py-2 hover:rounded-md hover:bg-[#F5A52F] hover:text-white hover:duration-300`}>
    {children}
  </a>
}

function MobileNav({ open, setOpen }) {
  return (
    <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
      <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
        <a className="text-2xl font-semibold custom-font uppercase flex space-x-4 items-center" href="/">
          <span className="">
            <img src="./Logo/logo.png" alt="logo" />
          </span>
          <span className="text-2xl font-medium text-[#252b42]">
            Baby Doge
          </span>
        </a>
      </div>
      <div className="flex flex-col ml-4 uppercase">
        <a className="text-xl font-medium my-4" href="#about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          About
        </a>
        <a className="text-xl font-medium my-4" href="#roadmap" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Roadmap
        </a>
        <a className="text-xl font-normal my-4" href="#tokens" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Tokens
        </a>
        <a className="text-xl font-normal my-4" href="#buytoken" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
          Buy Token
        </a>
      </div>
    </div>
  )
}

export default function Header() {

  const [isconnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [userAddress, setUserAddress] = useState();
  const [blockchain, setBlockchain] = useState();
  const [web3Var, setWeb3Var] = useState();
  const [mintAmount, setMintAmount] = useState(1);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);

  // Metamask Connection
  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
        const web3 = new Web3(window.web3.currentProvider);
        setWeb3Var(web3);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  const effectFunction = async (web3Var) => {
    try {
      await ethereum.request({ method: "eth_requestAccounts" });
      setIsConnected(true);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      setSigner(provider.getSigner());
      const web3 = new Web3(window.web3.currentProvider);
      setWeb3Var(web3);

      // User Address
      const accountResponse = await web3Var.eth.getAccounts();
      setBlockchain(accountResponse);
      const instance = accountResponse[0];
      setUserAddress(instance);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    effectFunction(web3Var);
  }, [web3Var])

  const [open, setOpen] = useState(false)
  return (
    <nav className="flex filter drop-shadow-md  text-black px-8 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <a className="text-3xl font-semibold custom-font uppercase flex space-x-4 items-center" href="/">
          <span className="w-10">
            <img src="./Logo/logo.png" alt="" />
          </span>
          <span className="text-2xl font-medium">
            BabyDoge
          </span>
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center">

        <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
          setOpen(!open)
        }}>
          {/* hamburger button */}
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
          <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
          <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
        </div>

        <div className="hidden md:flex">
          <NavLink to="#about">
            About
          </NavLink>
          <NavLink to="#roadmap">
            Roadmap
          </NavLink>
          <NavLink to="#tokens">
            Tokens
          </NavLink>
          <NavLink to="#buytoken">
            Buy Token
          </NavLink>
          <button className="hover:scale-110 bg-[#F5A52F] font-semibold text-white py-2 px-4 duration-300 ease-in-out rounded-full" onClick={connect} > {isconnected ? "Connected" : "Connect Wallet" }</button>
        </div>
      </div>
    </nav>
  )
}