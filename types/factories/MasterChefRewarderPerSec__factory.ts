/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MasterChefRewarderPerSec } from "../MasterChefRewarderPerSec";

export class MasterChefRewarderPerSec__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _rewardToken: string,
    _lpToken: string,
    _tokenPerSec: BigNumberish,
    _allocPoint: BigNumberish,
    _MCV1_pid: BigNumberish,
    _MCV1: string,
    _MCV2: string,
    overrides?: Overrides
  ): Promise<MasterChefRewarderPerSec> {
    return super.deploy(
      _rewardToken,
      _lpToken,
      _tokenPerSec,
      _allocPoint,
      _MCV1_pid,
      _MCV1,
      _MCV2,
      overrides || {}
    ) as Promise<MasterChefRewarderPerSec>;
  }
  getDeployTransaction(
    _rewardToken: string,
    _lpToken: string,
    _tokenPerSec: BigNumberish,
    _allocPoint: BigNumberish,
    _MCV1_pid: BigNumberish,
    _MCV1: string,
    _MCV2: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _rewardToken,
      _lpToken,
      _tokenPerSec,
      _allocPoint,
      _MCV1_pid,
      _MCV1,
      _MCV2,
      overrides || {}
    );
  }
  attach(address: string): MasterChefRewarderPerSec {
    return super.attach(address) as MasterChefRewarderPerSec;
  }
  connect(signer: Signer): MasterChefRewarderPerSec__factory {
    return super.connect(signer) as MasterChefRewarderPerSec__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterChefRewarderPerSec {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MasterChefRewarderPerSec;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenPerSec",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_MCV1_pid",
        type: "uint256",
      },
      {
        internalType: "contract IMasterChef",
        name: "_MCV1",
        type: "address",
      },
      {
        internalType: "contract IMasterChefJoeV2",
        name: "_MCV2",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldAllocPoint",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newAllocPoint",
        type: "uint256",
      },
    ],
    name: "AllocPointUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "OnReward",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "RewardRateUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "MCV1",
    outputs: [
      {
        internalType: "contract IMasterChef",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MCV1_pid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MCV2",
    outputs: [
      {
        internalType: "contract IMasterChefJoeV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "harvestFromMasterChefV1",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "dummyToken",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_lpAmount",
        type: "uint256",
      },
    ],
    name: "onJoeReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "pending",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "accTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_allocPoint",
        type: "uint256",
      },
    ],
    name: "setAllocPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenPerSec",
        type: "uint256",
      },
    ],
    name: "setRewardRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenPerSec",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updatePool",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "accTokenPerShare",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRewardTimestamp",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "allocPoint",
            type: "uint256",
          },
        ],
        internalType: "struct MasterChefRewarderPerSec.PoolInfo",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b5060405162001a1a38038062001a1a8339810160408190526200003591620001d9565b600062000041620001cf565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620000a187620001d360201b62000ee31760201c565b620000c95760405162461bcd60e51b8152600401620000c0906200030d565b60405180910390fd5b620000df86620001d360201b62000ee31760201c565b620000fe5760405162461bcd60e51b8152600401620000c0906200035f565b6200011482620001d360201b62000ee31760201c565b620001335760405162461bcd60e51b8152600401620000c09062000260565b6200014981620001d360201b62000ee31760201c565b620001685760405162461bcd60e51b8152600401620000c090620002b0565b6001600160601b0319606097881b811660805295871b861660a05260059490945560c091909152841b831660e05290831b909116610100526040805192830181526000808452426020850181905293909101829052600155600291909155600355620003c6565b3390565b3b151590565b600080600080600080600060e0888a031215620001f4578283fd5b87516200020181620003ad565b60208901519097506200021481620003ad565b8096505060408801519450606088015193506080880151925060a08801516200023d81620003ad565b60c08901519092506200025081620003ad565b8091505092959891949750929550565b60208082526030908201527f636f6e7374727563746f723a204d617374657243686566206d7573742062652060408201526f18481d985b1a590818dbdb9d1c9858dd60821b606082015260800190565b60208082526035908201527f636f6e7374727563746f723a204d6173746572436865664a6f655632206d757360408201527f7420626520612076616c696420636f6e74726163740000000000000000000000606082015260800190565b60208082526032908201527f636f6e7374727563746f723a2072657761726420746f6b656e206d7573742062604082015271194818481d985b1a590818dbdb9d1c9858dd60721b606082015260800190565b6020808252602e908201527f636f6e7374727563746f723a204c5020746f6b656e206d75737420626520612060408201526d1d985b1a590818dbdb9d1c9858dd60921b606082015260800190565b6001600160a01b0381168114620003c357600080fd5b50565b60805160601c60a05160601c60c05160e05160601c6101005160601c6115bd6200045d6000398061046e528061098f5280610c465280610e9d52508061034252806103d652806106d352806108e25280610a405280610ce85250806104035280610700528061082052508061077352806109625280610c1952508061053b52806105ec52806106255280610ec152506115bd6000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c80638da5cb5b116100a2578063e0747c9611610071578063e0747c96146101fc578063e3161ddd1461020f578063f2fde38b14610224578063f499b78e14610237578063f7c618c11461023f57610116565b80638da5cb5b146101c65780639e447fc6146101ce578063a04886c5146101e1578063c031a66f146101e957610116565b806350fd1f3e116100e957806350fd1f3e146101755780635a2f3d091461018a5780635fcbd285146101a1578063715018a6146101b6578063752808ea146101be57610116565b80631959a0021461011b57806319ab453c146101455780631a7af8b01461015a57806320b798841461016d575b600080fd5b61012e6101293660046111a7565b610247565b60405161013c92919061154b565b60405180910390f35b6101586101533660046111a7565b610260565b005b6101586101683660046111c3565b610463565b6101586106bc565b61017d61075f565b60405161013c9190611542565b610192610765565b60405161013c93929190611559565b6101a9610771565b60405161013c9190611277565b610158610795565b61017d61081e565b6101a9610842565b6101586101dc36600461120e565b610852565b6101a96108e0565b61017d6101f73660046111a7565b610904565b61015861020a36600461120e565b610b49565b610217610bcb565b60405161013c9190611521565b6101586102323660046111a7565b610ddb565b6101a9610e9b565b6101a9610ebf565b6004602052600090815260409020805460019091015482565b6040516370a0823160e01b81526000906001600160a01b038316906370a082319061028f903390600401611277565b60206040518083038186803b1580156102a757600080fd5b505afa1580156102bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102df9190611226565b90506000811161030a5760405162461bcd60e51b8152600401610301906114ea565b60405180910390fd5b61031e6001600160a01b0383163383610ee9565b60405163095ea7b360e01b81526001600160a01b0383169063095ea7b39061036c907f00000000000000000000000000000000000000000000000000000000000000009085906004016112af565b602060405180830381600087803b15801561038657600080fd5b505af115801561039a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103be91906111ee565b50604051631c57762b60e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e2bbb1589061042d907f000000000000000000000000000000000000000000000000000000000000000090859060040161154b565b600060405180830381600087803b15801561044757600080fd5b505af115801561045b573d6000803e3d6000fd5b505050505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104ab5760405162461bcd60e51b81526004016103019061130e565b6104b3610bcb565b506104bc611186565b50604080516060810182526001548152600254602080830191909152600354828401526001600160a01b038516600090815260049091529182208054919290911561064e576105096106bc565b600182015483518354610535929164e8d4a510009161052791610fd9565b8161052e57fe5b049061101c565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b81526004016105859190611277565b60206040518083038186803b15801561059d57600080fd5b505afa1580156105b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d59190611226565b905080821115610618576106136001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168783611044565b61064c565b61064c6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168784611044565b505b838255825164e8d4a5100090610665908690610fd9565b8161066c57fe5b0460018301556040516001600160a01b038616907fd1072bb52c3131d0c96197b73fb8a45637e30f8b6664fc142310cc9b242859b4906106ad908490611542565b60405180910390a25050505050565b604051631c57762b60e31b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063e2bbb1589061072b907f00000000000000000000000000000000000000000000000000000000000000009060009060040161154b565b600060405180830381600087803b15801561074557600080fd5b505af1158015610759573d6000803e3d6000fd5b50505050565b60055481565b60015460025460035483565b7f000000000000000000000000000000000000000000000000000000000000000081565b61079d61112b565b6001600160a01b03166107ae610842565b6001600160a01b0316146107d45760405162461bcd60e51b81526004016103019061147e565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b03165b90565b61085a61112b565b6001600160a01b031661086b610842565b6001600160a01b0316146108915760405162461bcd60e51b81526004016103019061147e565b610899610bcb565b5060058054908290556040517fc390a98ace15a7bb6bab611eedfdbb2685043b241a869420043cdfb23ccfee50906108d4908390859061154b565b60405180910390a15050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061090e611186565b50604080516060810182526001548152600254602080830191909152600354828401526001600160a01b038086166000908152600492839052848120845195516370a0823160e01b815294959094909391927f000000000000000000000000000000000000000000000000000000000000000016916370a08231916109b5917f00000000000000000000000000000000000000000000000000000000000000009101611277565b60206040518083038186803b1580156109cd57600080fd5b505afa1580156109e1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a059190611226565b9050836020015142118015610a1957508015155b15610b22576000610a3785602001514261101c90919063ffffffff16565b90506000610af87f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166317caf6f16040518163ffffffff1660e01b815260040160206040518083038186803b158015610a9757600080fd5b505afa158015610aab573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acf9190611226565b610af28860400151610aec60055487610fd990919063ffffffff16565b90610fd9565b9061112f565b9050610b1d83610b0d8364e8d4a51000610fd9565b81610b1457fe5b86919004611161565b935050505b60018301548354610b3f919064e8d4a51000906105279086610fd9565b9695505050505050565b610b5161112b565b6001600160a01b0316610b62610842565b6001600160a01b031614610b885760405162461bcd60e51b81526004016103019061147e565b610b90610bcb565b5060038054908290556040517f3adb12b11b33d949ac66dd255b1c9b9ef6afba0b8aa8b5d0158aee49c6fac964906108d4908390859061154b565b610bd3611186565b5060408051606081018252600154815260025460208201819052600354928201929092529042111561084f576040516370a0823160e01b81526000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a0823190610c6e907f000000000000000000000000000000000000000000000000000000000000000090600401611277565b60206040518083038186803b158015610c8657600080fd5b505afa158015610c9a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbe9190611226565b90508015610dbf576000610cdf83602001514261101c90919063ffffffff16565b90506000610d947f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166317caf6f16040518163ffffffff1660e01b815260040160206040518083038186803b158015610d3f57600080fd5b505afa158015610d53573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d779190611226565b610af28660400151610aec60055487610fd990919063ffffffff16565b9050610dba83610da98364e8d4a51000610fd9565b81610db057fe5b8651919004611161565b845250505b5042602082018190528151600155600255604081015160035590565b610de361112b565b6001600160a01b0316610df4610842565b6001600160a01b031614610e1a5760405162461bcd60e51b81526004016103019061147e565b6001600160a01b038116610e405760405162461bcd60e51b8152600401610301906112c8565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b3b151590565b60006060846001600160a01b03166323b872dd853086604051602401610f119392919061128b565b6040516020818303038152906040529060e01b6020820180516001600160e01b038381831617835250505050604051610f4a919061123e565b6000604051808303816000865af19150503d8060008114610f87576040519150601f19603f3d011682016040523d82523d6000602084013e610f8c565b606091505b5091509150818015610fb6575080511580610fb6575080806020019051810190610fb691906111ee565b610fd25760405162461bcd60e51b815260040161030190611406565b5050505050565b600082610fe857506000611016565b82820282848281610ff557fe5b04146110135760405162461bcd60e51b81526004016103019061143d565b90505b92915050565b60008282111561103e5760405162461bcd60e51b815260040161030190611398565b50900390565b60006060846001600160a01b031663a9059cbb858560405160240161106a9291906112af565b6040516020818303038152906040529060e01b6020820180516001600160e01b0383818316178352505050506040516110a3919061123e565b6000604051808303816000865af19150503d80600081146110e0576040519150601f19603f3d011682016040523d82523d6000602084013e6110e5565b606091505b509150915081801561110f57508051158061110f57508080602001905181019061110f91906111ee565b610fd25760405162461bcd60e51b8152600401610301906114b3565b3390565b60008082116111505760405162461bcd60e51b8152600401610301906113cf565b81838161115957fe5b049392505050565b6000828201838110156110135760405162461bcd60e51b815260040161030190611361565b60405180606001604052806000815260200160008152602001600081525090565b6000602082840312156111b8578081fd5b81356110138161156f565b600080604083850312156111d5578081fd5b82356111e08161156f565b946020939093013593505050565b6000602082840312156111ff578081fd5b81518015158114611013578182fd5b60006020828403121561121f578081fd5b5035919050565b600060208284031215611237578081fd5b5051919050565b60008251815b8181101561125e5760208186018101518583015201611244565b8181111561126c5782828501525b509190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b60208082526033908201527f6f6e6c794d4356323a206f6e6c79204d6173746572436865662056322063616e6040820152721031b0b636103a3434b990333ab731ba34b7b760691b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252601e908201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604082015260600190565b6020808252601a908201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604082015260600190565b6020808252601e908201527f5361666545524332303a205472616e7366657246726f6d206661696c65640000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601a908201527f5361666545524332303a205472616e73666572206661696c6564000000000000604082015260600190565b6020808252601b908201527f696e69743a2042616c616e6365206d7573742065786365656420300000000000604082015260600190565b81518152602080830151908201526040918201519181019190915260600190565b90815260200190565b918252602082015260400190565b9283526020830191909152604082015260600190565b6001600160a01b038116811461158457600080fd5b5056fea2646970667358221220e6edfa409d87a6d3db3bdf48c26278d26c5cf72e8a2b4c75ae0804dee8bead1564736f6c634300060c0033";
