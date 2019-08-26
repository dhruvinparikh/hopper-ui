export const abi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address'
      },
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'pendingDeposits',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x8f9ae0b9'
  },
  {
    constant: true,
    inputs: [],
    name: 'AMOUNT',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xd1789176'
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    name: 'nullifiers',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0xd21e82ab'
  },
  {
    inputs: [
      {
        name: 'in_vk',
        type: 'uint256[14]'
      },
      {
        name: 'in_gammaABC',
        type: 'uint256[]'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
    signature: 'constructor'
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: '_fundingWallet',
        type: 'address'
      },
      {
        indexed: false,
        name: '_leaf',
        type: 'uint256'
      }
    ],
    name: 'CommitmentAdded',
    type: 'event',
    signature:
      '0x765b674bff93b21bfb5ffcffac5d739861ed3aea348696049536c96d10e7b37e'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_leaf',
        type: 'uint256'
      },
      {
        indexed: false,
        name: '_leafIndex',
        type: 'uint256'
      }
    ],
    name: 'LeafAdded',
    type: 'event',
    signature:
      '0x039fe56c88c7423b368b110113d8483a6b9ee8fc3d8155d1ea6266f8ed3ef195'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: '_nullifier',
        type: 'uint256'
      }
    ],
    name: 'DepositWithdrawn',
    type: 'event',
    signature:
      '0x0788d719d36264cd922e6e2bb8f52f65b13571d1ea3ddaf8d27b1acfdd18c3d0'
  },
  {
    constant: true,
    inputs: [],
    name: 'getRoot',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x5ca1e165'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'leaf',
        type: 'uint256'
      },
      {
        name: 'fundingWallet',
        type: 'address'
      }
    ],
    name: 'commit',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
    signature: '0x0d64b071'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'leaf',
        type: 'uint256'
      }
    ],
    name: 'fundCommitment2',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0xe8090f12'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'nullifier_secret',
        type: 'uint256'
      },
      {
        name: 'wallet_address',
        type: 'address'
      }
    ],
    name: 'makeLeafHash',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0x03c5c65e'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'nullifier_secret',
        type: 'uint256'
      }
    ],
    name: 'makeNullifierHash',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0xc938f018'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'leafIndex',
        type: 'uint256'
      }
    ],
    name: 'getMerklePath',
    outputs: [
      {
        name: 'out_path',
        type: 'uint256[15]'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x6e4d6517'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'nullifier',
        type: 'uint256'
      }
    ],
    name: 'isSpent',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x5a129efe'
  },
  {
    constant: true,
    inputs: [
      {
        name: 'in_root',
        type: 'uint256'
      },
      {
        name: 'in_wallet_address',
        type: 'address'
      },
      {
        name: 'in_nullifier',
        type: 'uint256'
      },
      {
        name: 'proof',
        type: 'uint256[8]'
      }
    ],
    name: 'verifyProof',
    outputs: [
      {
        name: '',
        type: 'bool'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x74b9886e'
  },
  {
    constant: false,
    inputs: [
      {
        name: 'in_withdraw_address',
        type: 'address'
      },
      {
        name: 'in_nullifier',
        type: 'uint256'
      },
      {
        name: 'proof',
        type: 'uint256[8]'
      }
    ],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
    signature: '0x22a6fef1'
  },
  {
    constant: true,
    inputs: [],
    name: 'treeDepth',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'pure',
    type: 'function',
    signature: '0x16a56c41'
  },
  {
    constant: true,
    inputs: [],
    name: 'getNextLeafIndex',
    outputs: [
      {
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
    signature: '0x50e9b925'
  }
];

export const newabi= [
  {
    'constant': true,
    'inputs': [],
    'name': 'AMOUNT',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xd1789176'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'name': 'nullifiers',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0xd21e82ab'
  },
  {
    'inputs': [
      {
        'name': 'in_vk',
        'type': 'uint256[14]'
      },
      {
        'name': 'in_gammaABC',
        'type': 'uint256[]'
      }
    ],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'constructor',
    'signature': 'constructor'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'name': '_leaf',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'name': '_leafIndex',
        'type': 'uint256'
      }
    ],
    'name': 'LeafAdded',
    'type': 'event',
    'signature': '0x039fe56c88c7423b368b110113d8483a6b9ee8fc3d8155d1ea6266f8ed3ef195'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'name': '_nullifier',
        'type': 'uint256'
      }
    ],
    'name': 'DepositWithdrawn',
    'type': 'event',
    'signature': '0x0788d719d36264cd922e6e2bb8f52f65b13571d1ea3ddaf8d27b1acfdd18c3d0'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getRoot',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x5ca1e165'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'leaf',
        'type': 'uint256'
      }
    ],
    'name': 'commit',
    'outputs': [],
    'payable': true,
    'stateMutability': 'payable',
    'type': 'function',
    'signature': '0xf4f98ad5'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'nullifier_secret',
        'type': 'uint256'
      },
      {
        'name': 'wallet_address',
        'type': 'address'
      }
    ],
    'name': 'makeLeafHash',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function',
    'signature': '0x03c5c65e'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'nullifier_secret',
        'type': 'uint256'
      }
    ],
    'name': 'makeNullifierHash',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function',
    'signature': '0xc938f018'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'leafIndex',
        'type': 'uint256'
      }
    ],
    'name': 'getMerklePath',
    'outputs': [
      {
        'name': 'out_path',
        'type': 'uint256[15]'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x6e4d6517'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'nullifier',
        'type': 'uint256'
      }
    ],
    'name': 'isSpent',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x5a129efe'
  },
  {
    'constant': true,
    'inputs': [
      {
        'name': 'in_root',
        'type': 'uint256'
      },
      {
        'name': 'in_wallet_address',
        'type': 'address'
      },
      {
        'name': 'in_nullifier',
        'type': 'uint256'
      },
      {
        'name': 'proof',
        'type': 'uint256[8]'
      }
    ],
    'name': 'verifyProof',
    'outputs': [
      {
        'name': '',
        'type': 'bool'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x74b9886e'
  },
  {
    'constant': false,
    'inputs': [
      {
        'name': 'in_withdraw_address',
        'type': 'address'
      },
      {
        'name': 'in_nullifier',
        'type': 'uint256'
      },
      {
        'name': 'proof',
        'type': 'uint256[8]'
      }
    ],
    'name': 'withdraw',
    'outputs': [],
    'payable': false,
    'stateMutability': 'nonpayable',
    'type': 'function',
    'signature': '0x22a6fef1'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'treeDepth',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'pure',
    'type': 'function',
    'signature': '0x16a56c41'
  },
  {
    'constant': true,
    'inputs': [],
    'name': 'getNextLeafIndex',
    'outputs': [
      {
        'name': '',
        'type': 'uint256'
      }
    ],
    'payable': false,
    'stateMutability': 'view',
    'type': 'function',
    'signature': '0x50e9b925'
  }
];
