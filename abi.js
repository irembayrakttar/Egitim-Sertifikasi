const contractABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_studentName", "type": "string" },
      { "internalType": "string", "name": "_course", "type": "string" },
      { "internalType": "string", "name": "_certificateId", "type": "string" },
      { "internalType": "string", "name": "_issueDate", "type": "string" }
    ],
    "name": "issueCertificate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_certificateId", "type": "string" }
    ],
    "name": "getCertificate",
    "outputs": [
      { "internalType": "string", "name": "studentName", "type": "string" },
      { "internalType": "string", "name": "course", "type": "string" },
      { "internalType": "string", "name": "issueDate", "type": "string" },
      { "internalType": "bool", "name": "exists", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const contractAddress = "0x633a9B3E6c38C26489dD4712E29CDc42b5B25A67";
