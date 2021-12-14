import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";
import CollectionPage from "./components/CollectionPage/CollectionPage";
import Divider from "./components/Divider/Divider";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import Overlay from "./components/Overlay/Overlay";
import RoadMap from "./components/RoadMap/RoadMap";
import Team from "./components/Team/Team";
import {
  selectWallet,
  setActiveProvider,
  setWalletConnected,
} from "./features/wallet/walletSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { loadLastAccount, saveLastAccount } from "./features/wallet/walletApi";
import { AbstractConnector } from "@web3-react/abstract-connector";
import SUPPORTED_WALLET_PROVIDERS, {
  WalletProvider,
} from "./constants/supportedWalletProviders";

function App() {
  // Ref
  const aboutRef = useRef<HTMLDivElement>(null);

  // Redux
  const dispatch = useAppDispatch();

  const [showOverlay, setShowOverlay] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [activated, setActivated] = useState(false);
  // Local component state
  const [, setIsActivating] = useState<boolean>(false);

  const [connector, setConnector] = useState<AbstractConnector>();
  const [provider, setProvider] = useState<WalletProvider>();

  const { providerName } = useAppSelector(selectWallet);

  const handleEscKey = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        setShowOverlay(false);
      }
    },
    [setShowOverlay]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscKey, false);
    return () => {
      document.removeEventListener("keydown", handleEscKey, false);
    };
  }, [handleEscKey]);

  const { account, active, chainId, library, activate } =
    useWeb3React<Web3Provider>();

  useEffect(() => {
    setWalletAddress(account!);
  }, [account]);

  // Auto-activate if user has connected before on (first render)
  useEffect(() => {
    const lastConnectedAccount = loadLastAccount();
    if (lastConnectedAccount?.address) {
      setIsActivating(true);
      const connector = lastConnectedAccount.provider.getConnector();
      setConnector(connector);
      setProvider(lastConnectedAccount.provider);
      activate(connector)
        .then(() => {
          setActivated(true);
        })
        .finally(() => {
          setIsActivating(false);
        });
    }
  }, [activate, activated]);

  // Side effects for connecting a wallet from SwapWidget

  useEffect(() => {
    if (providerName) {
      const provider = SUPPORTED_WALLET_PROVIDERS.find(
        (provider) => provider.name === providerName
      );
      setProvider(provider);
      setConnector(provider!.getConnector());
    }
  }, [providerName]);

  useEffect(() => {
    if (active && account && chainId && library && connector && provider) {
      // Dispatch a general action to indicate wallet has changed
      dispatch(
        setWalletConnected({
          chainId,
          address: account,
        })
      );
      saveLastAccount(account, provider);
    }
  }, [account, active, chainId, connector, dispatch, library, provider]);

  const executeAboutScroll = () => {
    console.log(aboutRef);

    if (aboutRef && aboutRef.current) {
      window.scrollTo({ behavior: "smooth", top: aboutRef.current.offsetTop });

      aboutRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <NavBar
        onClick={walletAddress ? console.log : setShowOverlay}
        walletAddress={walletAddress}
        executeAboutScroll={() => executeAboutScroll()}
      />
      <Landing />
      <Divider />
      <CollectionPage ref={aboutRef} />
      <Divider />
      <RoadMap />
      <Divider />
      <Team />
      <Divider />
      <Footer />
      {showOverlay && (
        <Overlay
          onProviderSelected={(provider: any) => {
            dispatch(setActiveProvider(provider.name));
            activate(provider.getConnector()).finally(() =>
              setShowOverlay(false)
            );
          }}
        />
      )}
    </>
  );
}

export default App;
