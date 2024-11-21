// 正则表达式，
// ^0x之后跟前几位要匹配的字符
// .*为通配符
// $之前写最后几位要匹配的字符
// 例子：首位两个0，末尾两个1 
// const regex = /^0x00.*11$/

import { ethers } from "ethers";
var wallet // 钱包
//1. 首位三个8的钱包地址
// const regex = /^0x888.*$/ // 表达式
//2.末位为三个8的钱包地址
const regex = /^0x.*888$/ // 表达式
//3. 如果需要更多的钱包靓号地址，可以去学习下正则表达式
// 或者来咨询群主
var isValid = false
while(!isValid){
    wallet = ethers.Wallet.createRandom() // 随机生成钱包，安全
    isValid = regex.test(wallet.address) // 检验正则表达式
    console.log(wallet.address)
}
// 打印靓号地址与私钥
console.log(`\n靓号地址：${wallet.address}`)
console.log(`靓号私钥：${wallet.privateKey}\n`)