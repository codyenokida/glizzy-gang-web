import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import {
  Container,
  ApproveButton,
  Title,
  LeftDog,
  RightDog,
} from "./Migrate.styles";

import leftDog from "../../assets/leftDog.png";
import rightDog from "../../assets/rightDog.png";

import glizzyGangABI from "../../contracts/GlizzyGangABI.json";
// import openStoreABI from "../../contracts/OpenStoreABI.json";

const glizzyAddress = "";
const openStoreAddress = "0x495f947276749ce646f68ac8c248420045cb7b5e";

const Migrate = () => {
  const { account, library } = useWeb3React<Web3Provider>();

  const [isApprovedForAll, setIsApprovedForAll] = useState(false);
  const [tokenID, setTokenID] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingApproval, setLoadingApproval] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (library && account) {
      (async () => {
        try {
          const contract = new ethers.Contract(
            glizzyAddress,
            glizzyGangABI,
            library.getSigner()
          );
          const result = await contract.isApprovedForAll(
            account,
            openStoreAddress
          );
          setIsApprovedForAll(result);
        } catch (e: any) {
          alert(
            e.error?.message.replace("execution reverted: ", "") || e.message
          );
          console.error(e);

          setLoadingApproval(false);
          setLoading(false);
        }
      })();
    }
  }, [library, account]);

  const setApproveForAll = async () => {
    try {
      const contract = new ethers.Contract(
        glizzyAddress,
        glizzyGangABI,
        library?.getSigner()
      );

      setLoadingApproval(true);
      // call setApproveForAll
      const res = await contract.setApprovalForAll(
        openStoreAddress,
        !isApprovedForAll
      );
      setLoadingApproval(false);
      console.log(res);
    } catch (e: any) {
      alert(e.error?.message.replace("execution reverted: ", "") || e.message);
      console.error(e);
      setLoadingApproval(false);
      setLoading(false);
    }
  };

  const migrate = async () => {
    try {
      if (library) {
        const contract = new ethers.Contract(
          glizzyAddress,
          glizzyGangABI,
          library?.getSigner()
        );

        setLoading(true);
        const res = await contract.migrate(ethers.BigNumber.from(tokenID));
        setLoading(false);
        setSuccess(true);
        console.log(res);
      }
    } catch (e: any) {
      alert(e.error?.message.replace("execution reverted: ", "") || e.message);
      console.error(e);
      setLoadingApproval(false);
      setLoading(false);
      setSuccess(false);
    }
  };

  return (
    <Container>
      <Title>Migrate Your Glizzys</Title>
      <h1 style={{}}>
        Your GLIZZYS are{" "}
        {isApprovedForAll
          ? "approved for migration."
          : "not approved for migration."}
      </h1>
      <ApproveButton
        loading={loadingApproval}
        onClick={() => setApproveForAll()}
      >
        {isApprovedForAll ? "Remove Approval" : "Approve"}
      </ApproveButton>
      {isApprovedForAll && (
        <>
          <p style={{ textAlign: "center" }}>
            Find your Glizzy token ID by going to your OpenSea link:
            <br />
            <br />
            {"https://opensea.io/assets/.../"}
            <strong>token_id</strong>
          </p>
          <h2>Enter your token ID:</h2>
          <input
            style={{
              padding: "1rem",
            }}
            value={tokenID}
            placeholder="16749640924335120508167920442379361950322061727384327151086078383415363633153"
            onChange={(e) => setTokenID(e.target.value)}
          />
          <ApproveButton
            loading={loading || !tokenID.length || tokenID.length !== 77}
            style={{ marginTop: "2rem" }}
            onClick={() => {
              migrate();
            }}
          >
            Migrate
          </ApproveButton>
          {success && <p>Success!</p>}
        </>
      )}
      <LeftDog src={leftDog} />
      <RightDog src={rightDog} />
    </Container>
  );
};

export default Migrate;
