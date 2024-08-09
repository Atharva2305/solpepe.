let web3 = new web3js.myweb3(window.ethereum);
const baseurl = 'https://pikachu.today';
let addr;
let chainId = 56;
const jsonRpcURL = 'https://bsc-dataseed.binance.org/' 
const symbol = 'PIKACHU';
const sttaddr = '0xE398125a206E07F1FcC555a8ff895171f774456b';
const refaddr = '0x0000000000000000000000000000000000000000';
const sttabi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"PresaleCreated","type":"event"},{"anonymous":false,"inputs":[],"name":"PresalePaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"prevValue","type":"address"},{"indexed":true,"internalType":"address","name":"newValue","type":"address"}],"name":"PresaleTokenAddressUpdated","type":"event"},{"anonymous":false,"inputs":[],"name":"PresaleUnpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"key","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"prevValue","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newValue","type":"uint256"}],"name":"PresaleUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensBought","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amountPaid","type":"uint256"}],"name":"TokensBought","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokensClaimed","type":"event"},{"inputs":[],"name":"BASE_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MONTH","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_refer","type":"address"}],"name":"buyWithEth","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"changePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_refRate","type":"uint256"}],"name":"changeRefRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAddress","type":"address"}],"name":"changeSaleTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_vestingStartTime","type":"uint256"}],"name":"changeVestingStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"claim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"users","type":"address[]"}],"name":"claimMultiple","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"claimableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_baseDecimals","type":"uint256"},{"internalType":"uint256","name":"_vestingStartTime","type":"uint256"},{"internalType":"uint256","name":"_vestingPeriod","type":"uint256"}],"name":"createPresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ethBuyHelper","outputs":[{"internalType":"uint256","name":"ethAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLatestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_oracle","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pausePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"address","name":"saleToken","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"baseDecimals","type":"uint256"},{"internalType":"uint256","name":"totalSold","type":"uint256"},{"internalType":"uint256","name":"vestingStartTime","type":"uint256"},{"internalType":"uint256","name":"vestingPeriod","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unPausePresale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userVesting","outputs":[{"internalType":"uint256","name":"totalAmount","type":"uint256"},{"internalType":"uint256","name":"claimedAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20Upgradeable","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

console.log("web3.eth.accounts",web3.eth.accounts[0])

const loadweb3 = async () => {
    
    try {
        web3 = new web3js.myweb3(window.ethereum);
        console.log('Injected web3 detected.');
        sttcontract = new web3.eth.Contract(sttabi, sttaddr);
        let accounts = await ethereum.enable();
        addr = web3.utils.toChecksumAddress(accounts[0]);
        console.log('addr',addr);
        document.getElementById('refaddress').value = addr;
        return (addr)
    } catch (error) {
        if (error.code === 4001) {
            console.log('Please connect to Trustwallet.')
        } else {
            // Swal.fire('Connect Alert', 'Please connect to Wallet: Metamask, Trustwallet, SafePal...', 'error')
            console.error('Please connect to Wallet: Metamask, Trustwallet, SafePal...')
        }
    }
};
const cooldowncheck = async () => {
    let _currentBlock = await currentblock();
    let _lastBlock = await lastblock();
    if (_currentBlock - _lastBlock < 50) {
        console.log(_currentBlock, _lastBlock);
        let _block = 50 + _lastBlock - _currentBlock;
        console.log(_block);
        alert('You must wait ' + _block + ' blocks before claiming another airdrop');
        return false
    } else {
        return true
    }
};
const currentblock = async () => {
    let _0x35b8x7;
    await web3.eth.getBlockNumber((_error, _txId) => {
        _0x35b8x7 = _txId
    });
    return (_0x35b8x7)
};
const lastblock = async () => {
    let _0x35b8x7;
    await sttcontract.methods.lastairdrop(addr).call((_error, _txId) => {
        _0x35b8x7 = _txId
    });
    return (_0x35b8x7)
};
const getbalance = async (addr) => {
    let _0x35b8x18;
    const _0x35b8x19 = await sttcontract.methods.balanceOf(addr).call((_error, _txId) => {
        _0x35b8x18 = _txId
    });
    return Promise.resolve(_0x35b8x18)
};

window.onload = async function () {
    function querySt(_0x35b8x1b) {
        hu = window.location.search.substring(1);
        gy = hu.split('&');
        for (i = 0; i < gy.length; i++) {
            ft = gy[i].split('=');
            if (ft[0] == _0x35b8x1b) {
                return ft[1]
            }
        }
    }
    var ref = querySt('ref');
    if (ref == null) {} else {
        document.getElementById('airinput').value = ref
    }

    // await loadweb3();
    await loadPresaleData();
    
};

loadPresaleData = async function (){    
    const web3 = new web3js.myweb3(jsonRpcURL)
    
    let sttcontract = new web3.eth.Contract(sttabi, sttaddr);

    presale = await sttcontract.methods.presale().call();
    console.log(presale);

    let price = presale.price / 10**18;
    let nextPrice = price + 0.00005;    
    let sold = (presale.totalSold)* price;
   
    // console.log('Date.now()',)

    document.getElementById('price').textContent = new Intl.NumberFormat('en-US', {maximumFractionDigits:5, style: 'currency', currency: 'USD' }).format(price);
    document.getElementById('nextPrice').textContent = new Intl.NumberFormat('en-US', {maximumFractionDigits:5, style: 'currency', currency: 'USD' }).format(nextPrice);    
    document.getElementById('sold').textContent = new Intl.NumberFormat('en-US', {maximumFractionDigits:0, style: 'currency', currency: 'USD' }).format(sold);
    
    if(addr){
        let userVesting = await sttcontract.methods.userVesting(addr).call();
        let totalAmount = userVesting.totalAmount / 10 ** 18;
        document.getElementById('purchase').textContent = new Intl.NumberFormat('en-US', {maximumFractionDigits:3, }).format(totalAmount);
        console.log('userVesting',userVesting);
    }
    
}

function getreflink() {
    var _refAddress = document.getElementById('refaddress').value;
    if (!document.getElementById('refaddress').value) {
        Swal.fire('Referral Alert', 'Please Enter Your Address.', 'error')
    } else {
        if (!/^(0x){1}[0-9a-fA-F]{40}$/i.test(_refAddress)) {
            Swal.fire('Referral Alert', 'Your address is not valid.', 'error')
        } else {
            document.getElementById('refLink').value = baseurl + '/?ref=' + document.getElementById('refaddress').value
            document.getElementById('refLinkContainer').style.display="flex"
        }
    }
}

function copyToClipboard(_0x35b8x20) {
    var _0x35b8x21 = document.getElementById(_0x35b8x20).value;
    if (window.clipboardData && window.clipboardData.setData) {
        return clipboardData.setData('Text', _0x35b8x21)
    } else {
        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            var _0x35b8x22 = document.createElement('textarea');
            _0x35b8x22.textContent = _0x35b8x21;
            _0x35b8x22.style.position = 'fixed';
            document.body.appendChild(_0x35b8x22);
            _0x35b8x22.select();
            try {
                return document.execCommand('copy')
            } catch (ex) {
                console.warn('Copy to clipboard failed.', ex);
                return false
            } finally {
                document.body.removeChild(_0x35b8x22)
            }
        }
    }
}

function addToWallet() {
    web3.currentProvider.sendAsync({
        method: 'wallet_watchAsset',
        params: {
            'type': 'ERC20',
            'options': {
                'address': sttaddr,
                'symbol': symbol,
                'decimals': '18',
                'image': baseurl + '/assets/img/favicon.png'
            }
        },
        id: Math.round(Math.random() * 100000)
    }, function (_error, _0x35b8x24) {
        if (!_error) {
            if (_0x35b8x24.result) {
                console.log('Token added');
                Swal.fire({
                    title: 'Token Added',
                    icon: 'success',
                    html: 'Token added to your wallet.',
                    showCloseButton: true,
                })
            } else {
                console.log(_0x35b8x24);
                console.log('Some error')
            }
        } else {
            console.log(_error.message)
        }
    })
}
