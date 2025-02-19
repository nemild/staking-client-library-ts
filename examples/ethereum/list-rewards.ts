import { StakingClient } from '../../src/client/staking-client';

// Defines which address and rewards we want to see
const address: string =
  '0xac53512c39d0081ca4437c285305eb423f474e6153693c12fbba4a3df78bcaa3422b31d800c5bea71c1b017168a60474';
const filter: string = `address='${address}' AND period_end_time > '2024-02-25T00:00:00Z' AND period_end_time < '2024-02-27T00:00:00Z'`;

const client = new StakingClient();

// Loops through rewards array and prints each reward
client.Ethereum.listRewards(filter).then((resp) => {
  resp.rewards!.forEach((reward) => {
    console.log(JSON.stringify(reward, null, 2));
  });
});
