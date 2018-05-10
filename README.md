# Web3 Plus

Tools for Web3

## Getting Started

### Installation
Install the package
```
npm install --save web3-plus
```

## Usage

### Metamask

Check Metamask network status

```
import web3plus from 'web3-plus'

web3plus.metamask.checkNetwork().then(response => {
  console.log(response)
})
```

If you are connected it should return something like this:

<i>{status: "success", message: "CONNECTED", address: "0xB8C27bB42146E7d81CD1F81337a089aa066884fe", networkId: 3, networkName: "Ropsten"}</i>
