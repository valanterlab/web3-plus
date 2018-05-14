'use strict'

var Web3 = require('web3')

// Get metamask network
function getNetwork() {
  let web3js = window.web3
  if (typeof window.web3 !== 'undefined') {
    web3js = new Web3(web3js.currentProvider)
  }
  return web3js
}

// Get network id
async function getNetworkInfo () {
  // Get network
  let web3js = getNetwork()
  // Get network id
  const networkId = await web3js.eth.net.getId()

  let networkName
  switch (networkId) {
    case 1:
      networkName = 'Main'
      break
    case 2:
      networkName = 'Morden'
      break
    case 3:
      networkName = 'Ropsten'
      break
    case 4:
      networkName = 'Rinkeby'
      break
    case 42:
      networkName = 'Kovan'
      break
    default:
      networkName = 'Unknown'
  }

  // Response
  return {
    networkId: networkId,
    networkName: networkName
  }
}

// Get metamask accounts
async function getAccount () {
  // Get network
  let web3js = getNetwork()
  // Get accounts
  const accounts = await web3js.eth.getAccounts()
  if (typeof accounts != 'undefined' && accounts.length >= 0) {
    return accounts[0]
  }
  return null
}

// Get metamask accounts
async function getAccounts () {
  // Get network
  let web3js = getNetwork()
  // Get accounts
  const accounts = await web3js.eth.getAccounts()
  return accounts
}

// Check metamask network
async function checkNetwork () {
  // Get network
  let web3js = getNetwork()

  // Check if Metamask installed
  if (typeof web3 === 'undefined') {
    // Response
    return {
      status: 'error',
      message: 'NOT_INSTALLED'}
  }

  // Get network
  const network = await getNetworkInfo()
  if (!network) {
    return {status: 'error',
      message: 'NETWORK_ERROR'
    }
  }

  // Get accounts
  const account = await getAccount()
  if (!account) {
    // Response
    return {status: 'error',
      message: 'NOT_LOGGED_IN',
      networkId: network.networkId,
      networkName: network.networkName
    }
  }


  // Response
  if (account && network) {
    // Response
    return {status: 'success',
      message: 'CONNECTED',
      address: account,
      networkId: network.networkId,
      networkName: network.networkName
    }
  }

  // Response
  return {status: 'error',
    message: 'UNKOWN_CONNECTED'
  }
}

export default {
  getNetworkInfo,
  getAccount,
  getAccounts,
  checkNetwork
}
