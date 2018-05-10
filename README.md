# Web3 Plus

Tools for web3

## Metamask

Check Metamask network
Usage
```
import web3plus from 'web3-plus'

web3plus.metamask.checkNetwork().then(response => {
  console.log(response)
})
```
Example
<i>{status: "success", message: "CONNECTED", address: "0xB8C27bB42146E7d81CD1F81337a089aa066884fe", networkId: 3, networkName: "Ropsten"}</i>
