import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
 

//WBNB 0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre
  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

  await deploy("UniswapV3Factory", {
    from: deployer,
    args: [],
    log: true,
    skipIfAlreadyDeployed: true,
  })
}
export default func
func.tags = ["UniswapV3Factory"]
