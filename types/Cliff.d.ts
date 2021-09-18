/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CliffInterface extends ethers.utils.Interface {
  functions: {
    "SECONDS_PER_MONTH()": FunctionFragment;
    "beneficiary()": FunctionFragment;
    "blockTimestamp()": FunctionFragment;
    "cliffInMonths()": FunctionFragment;
    "release()": FunctionFragment;
    "released()": FunctionFragment;
    "startTimestamp()": FunctionFragment;
    "token()": FunctionFragment;
    "vestedAmount()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "SECONDS_PER_MONTH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "beneficiary",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cliffInMonths",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "release", values?: undefined): string;
  encodeFunctionData(functionFragment: "released", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "startTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "vestedAmount",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "SECONDS_PER_MONTH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "beneficiary",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cliffInMonths",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "vestedAmount",
    data: BytesLike
  ): Result;

  events: {
    "Released(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
}

export class Cliff extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CliffInterface;

  functions: {
    SECONDS_PER_MONTH(overrides?: CallOverrides): Promise<[BigNumber]>;

    "SECONDS_PER_MONTH()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    beneficiary(overrides?: CallOverrides): Promise<[string]>;

    "beneficiary()"(overrides?: CallOverrides): Promise<[string]>;

    blockTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "blockTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    cliffInMonths(overrides?: CallOverrides): Promise<[BigNumber]>;

    "cliffInMonths()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    release(overrides?: Overrides): Promise<ContractTransaction>;

    "release()"(overrides?: Overrides): Promise<ContractTransaction>;

    released(overrides?: CallOverrides): Promise<[BigNumber]>;

    "released()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    startTimestamp(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    "token()"(overrides?: CallOverrides): Promise<[string]>;

    vestedAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "vestedAmount()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  SECONDS_PER_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

  "SECONDS_PER_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

  beneficiary(overrides?: CallOverrides): Promise<string>;

  "beneficiary()"(overrides?: CallOverrides): Promise<string>;

  blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "blockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  cliffInMonths(overrides?: CallOverrides): Promise<BigNumber>;

  "cliffInMonths()"(overrides?: CallOverrides): Promise<BigNumber>;

  release(overrides?: Overrides): Promise<ContractTransaction>;

  "release()"(overrides?: Overrides): Promise<ContractTransaction>;

  released(overrides?: CallOverrides): Promise<BigNumber>;

  "released()"(overrides?: CallOverrides): Promise<BigNumber>;

  startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  token(overrides?: CallOverrides): Promise<string>;

  "token()"(overrides?: CallOverrides): Promise<string>;

  vestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

  "vestedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    SECONDS_PER_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<string>;

    "beneficiary()"(overrides?: CallOverrides): Promise<string>;

    blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "blockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    cliffInMonths(overrides?: CallOverrides): Promise<BigNumber>;

    "cliffInMonths()"(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: CallOverrides): Promise<void>;

    "release()"(overrides?: CallOverrides): Promise<void>;

    released(overrides?: CallOverrides): Promise<BigNumber>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<string>;

    "token()"(overrides?: CallOverrides): Promise<string>;

    vestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Released(amount: null): EventFilter;
  };

  estimateGas: {
    SECONDS_PER_MONTH(overrides?: CallOverrides): Promise<BigNumber>;

    "SECONDS_PER_MONTH()"(overrides?: CallOverrides): Promise<BigNumber>;

    beneficiary(overrides?: CallOverrides): Promise<BigNumber>;

    "beneficiary()"(overrides?: CallOverrides): Promise<BigNumber>;

    blockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "blockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    cliffInMonths(overrides?: CallOverrides): Promise<BigNumber>;

    "cliffInMonths()"(overrides?: CallOverrides): Promise<BigNumber>;

    release(overrides?: Overrides): Promise<BigNumber>;

    "release()"(overrides?: Overrides): Promise<BigNumber>;

    released(overrides?: CallOverrides): Promise<BigNumber>;

    "released()"(overrides?: CallOverrides): Promise<BigNumber>;

    startTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "startTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    "token()"(overrides?: CallOverrides): Promise<BigNumber>;

    vestedAmount(overrides?: CallOverrides): Promise<BigNumber>;

    "vestedAmount()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    SECONDS_PER_MONTH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "SECONDS_PER_MONTH()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    beneficiary(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "beneficiary()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "blockTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cliffInMonths(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "cliffInMonths()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(overrides?: Overrides): Promise<PopulatedTransaction>;

    "release()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    released(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "released()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startTimestamp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "token()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestedAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "vestedAmount()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
