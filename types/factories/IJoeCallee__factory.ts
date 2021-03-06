/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IJoeCallee } from "../IJoeCallee";

export class IJoeCallee__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IJoeCallee {
    return new Contract(address, _abi, signerOrProvider) as IJoeCallee;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "joeCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
