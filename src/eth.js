'use strict'

var Web3 = require('web3')

let nodeUrl = null
let web3 = new Web3()

// Set node url
function setNodeUrl (url) {
  nodeUrl = url
}
// Dial node
function dial (url) {
  web3.setProvider(nodeUrl)
}
// Get node info
async function getNodeInfo () {
  dial()

  // Get infos
  const blockNumber = await web3.eth.getBlockNumber()
  const blockInfo = await web3.eth.getBlock(blockNumber)
  const peersNumber = await web3.eth.net.getPeerCount()
  // const hashrate = await web3.eth.getHashrate()
  const gasPrice = await web3.eth.getGasPrice()

  // let test = await web3.eth.getBlock(web3.eth.blockNumber)

  return {
    blockNumber,
    blockInfo,
    peersNumber,
    // hashrate,
    gasPrice
  }
}

export default {
  setNodeUrl,
  getNodeInfo
}
