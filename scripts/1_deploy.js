async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token")
  const Exchange = await ethers.getContractFactory("Exchange")

  const accounts = await ethers.getSigners()

  console.log(
    `Accounts fetched:\n${accounts[0].address}\n${accounts[1].address}\n`
  )

  // Deploy contracts
  const rick = await Token.deploy("Rick Token", "RICK", "1000000")
  await rick.deployed()
  console.log(`RICK Deployed to: ${rick.address}`)

  const rETH = await Token.deploy("rETH", "rETH", "1000000")
  await rETH.deployed()
  console.log(`rETH Deployed to: ${rETH.address}`)

  const rDAI = await Token.deploy("rDAI", "rDAI", "1000000")
  await rDAI.deployed()
  console.log(`rDAI Deployed to: ${rDAI.address}`)

  const exchange = await Exchange.deploy(accounts[1].address, 10)
  await exchange.deployed()
  console.log(`Exchange Deployed to: ${exchange.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
