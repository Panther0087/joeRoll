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

interface SimpleRewarderPerSecInterface extends ethers.utils.Interface {
  functions: {
    "MC_V2()": FunctionFragment;
    "claimOwnership()": FunctionFragment;
    "emergencyWithdraw()": FunctionFragment;
    "lpToken()": FunctionFragment;
    "onJoeReward(address,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "pendingTokens(address)": FunctionFragment;
    "poolInfo()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "setRewardRate(uint256)": FunctionFragment;
    "tokenPerSec()": FunctionFragment;
    "transferOwnership(address,bool,bool)": FunctionFragment;
    "updatePool()": FunctionFragment;
    "userInfo(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "MC_V2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "lpToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onJoeReward",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pendingTokens",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "poolInfo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardRate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenPerSec",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePool",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "userInfo", values: [string]): string;

  decodeFunctionResult(functionFragment: "MC_V2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lpToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onJoeReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pendingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenPerSec",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "updatePool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userInfo", data: BytesLike): Result;

  events: {
    "OnReward(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RewardRateUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OnReward"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RewardRateUpdated"): EventFragment;
}

export class SimpleRewarderPerSec extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SimpleRewarderPerSecInterface;

  functions: {
    MC_V2(overrides?: CallOverrides): Promise<[string]>;

    "MC_V2()"(overrides?: CallOverrides): Promise<[string]>;

    claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    emergencyWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    "lpToken()"(overrides?: CallOverrides): Promise<[string]>;

    onJoeReward(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onJoeReward(address,uint256)"(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<[string]>;

    pendingTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    "poolInfo()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    "rewardToken()"(overrides?: CallOverrides): Promise<[string]>;

    setRewardRate(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRewardRate(uint256)"(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenPerSec(overrides?: CallOverrides): Promise<[BigNumber]>;

    "tokenPerSec()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    updatePool(overrides?: Overrides): Promise<ContractTransaction>;

    "updatePool()"(overrides?: Overrides): Promise<ContractTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  MC_V2(overrides?: CallOverrides): Promise<string>;

  "MC_V2()"(overrides?: CallOverrides): Promise<string>;

  claimOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "claimOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  emergencyWithdraw(overrides?: Overrides): Promise<ContractTransaction>;

  "emergencyWithdraw()"(overrides?: Overrides): Promise<ContractTransaction>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  "lpToken()"(overrides?: CallOverrides): Promise<string>;

  onJoeReward(
    _user: string,
    _lpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onJoeReward(address,uint256)"(
    _user: string,
    _lpAmount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

  pendingTokens(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "pendingTokens(address)"(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  poolInfo(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      accTokenPerShare: BigNumber;
      lastRewardTimestamp: BigNumber;
    }
  >;

  "poolInfo()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      accTokenPerShare: BigNumber;
      lastRewardTimestamp: BigNumber;
    }
  >;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  "rewardToken()"(overrides?: CallOverrides): Promise<string>;

  setRewardRate(
    _tokenPerSec: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRewardRate(uint256)"(
    _tokenPerSec: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

  "tokenPerSec()"(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address,bool,bool)"(
    newOwner: string,
    direct: boolean,
    renounce: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  updatePool(overrides?: Overrides): Promise<ContractTransaction>;

  "updatePool()"(overrides?: Overrides): Promise<ContractTransaction>;

  userInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  "userInfo(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
  >;

  callStatic: {
    MC_V2(overrides?: CallOverrides): Promise<string>;

    "MC_V2()"(overrides?: CallOverrides): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    "claimOwnership()"(overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    "emergencyWithdraw()"(overrides?: CallOverrides): Promise<void>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    "lpToken()"(overrides?: CallOverrides): Promise<string>;

    onJoeReward(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "onJoeReward(address,uint256)"(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<string>;

    pendingTokens(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    "poolInfo()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    "rewardToken()"(overrides?: CallOverrides): Promise<string>;

    setRewardRate(
      _tokenPerSec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRewardRate(uint256)"(
      _tokenPerSec: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenPerSec()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    updatePool(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    "updatePool()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }
    >;
  };

  filters: {
    OnReward(user: string | null, amount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    RewardRateUpdated(oldRate: null, newRate: null): EventFilter;
  };

  estimateGas: {
    MC_V2(overrides?: CallOverrides): Promise<BigNumber>;

    "MC_V2()"(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides): Promise<BigNumber>;

    "claimOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    emergencyWithdraw(overrides?: Overrides): Promise<BigNumber>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    "lpToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    onJoeReward(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onJoeReward(address,uint256)"(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    pendingTokens(_user: string, overrides?: CallOverrides): Promise<BigNumber>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    poolInfo(overrides?: CallOverrides): Promise<BigNumber>;

    "poolInfo()"(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    "rewardToken()"(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardRate(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRewardRate(uint256)"(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

    "tokenPerSec()"(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    updatePool(overrides?: Overrides): Promise<BigNumber>;

    "updatePool()"(overrides?: Overrides): Promise<BigNumber>;

    userInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MC_V2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "MC_V2()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "claimOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    emergencyWithdraw(overrides?: Overrides): Promise<PopulatedTransaction>;

    "emergencyWithdraw()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "lpToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onJoeReward(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onJoeReward(address,uint256)"(
      _user: string,
      _lpAmount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "pendingOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingTokens(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "pendingTokens(address)"(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    poolInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "poolInfo()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "rewardToken()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardRate(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRewardRate(uint256)"(
      _tokenPerSec: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenPerSec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "tokenPerSec()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address,bool,bool)"(
      newOwner: string,
      direct: boolean,
      renounce: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    updatePool(overrides?: Overrides): Promise<PopulatedTransaction>;

    "updatePool()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    userInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userInfo(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
