const SafeRune = artifacts.require('SafeRune')
module.exports = async function (deployer) {
      await deployer.deploy(StakingRewardsFactory)
}
