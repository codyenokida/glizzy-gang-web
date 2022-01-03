/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";

import { Container, ApproveButton } from "./Migrate.styles";
import { ethers } from "ethers";

import abi from "../../contracts/GlizzyGangABI.json";

const glizzyContract = "";
const openStoreAddress = "0x495f947276749ce646f68ac8c248420045cb7b5e";

const Migrate = () => {
  const { account, active, chainId, library, activate } =
    useWeb3React<Web3Provider>();

  const [isApprovedForAll, setIsApprovedForAll] = useState(true);
  const [tokenID, setTokenID] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingApproval, setLoadingApproval] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (library && account) {
      (async () => {
        try {
          const contract = new ethers.Contract(
            openStoreAddress,
            abi,
            library.getSigner()
          );
          const result = await contract.isApprovedForAll(
            account,
            openStoreAddress
          );
          console.log(result);
          //   setIsApprovedForAll(result);
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
        openStoreAddress,
        abi,
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
      const contract = new ethers.Contract(
        openStoreAddress,
        abi,
        library?.getSigner()
      );
      // cast to BigInt

      setLoading(true);
      const res = await contract.migrate(ethers.BigNumber.from(tokenID));
      setLoading(false);
      setSuccess(true);
      console.log(res);
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
      <h1>
        Your GLIZZY is{" "}
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
          <h1 style={{ marginTop: "2rem", marginBottom: "0.5rem" }}>
            Migrate your GLIZZYS
          </h1>
          <p style={{ textAlign: "center" }}>
            Find your Gensis token ID by going to your OpenSea link:
            <br />
            {
              "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/"
            }
            <strong>token_id</strong>
            <br />
            An example of a token id would be:{" "}
            <strong>
              16749640924335120508167920442379361950322061727384327151086078383415363633153
            </strong>
          </p>
          <input
            style={{
              padding: "1rem",
            }}
            value={tokenID}
            placeholder="token id"
            onChange={(e) => setTokenID(e.target.value)}
          />
          <h2>Enter your token ID:</h2>
          <ApproveButton
            loading={loading || !tokenID.length || tokenID.length !== 77}
            onClick={() => {
              migrate();
            }}
          >
            Migrate
          </ApproveButton>
          {success && <p>Success!</p>}
        </>
      )}
    </Container>
  );
};

export default Migrate;
