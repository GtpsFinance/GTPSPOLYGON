import { Interface } from '@ethersproject/abi';
import { ChainId } from '@uniswap/sdk';
import V1_EXCHANGE_ABI from './v1_exchange.json';
import V1_FACTORY_ABI from './v1_factory.json';

const V1_FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MATIC]: '0x0eddc871615f00c529bb387237f36fcc3eb2b1af', //TODO: DO NOT SUPPORT V1 ON MUMBAI
};

const V1_FACTORY_INTERFACE = new Interface(V1_FACTORY_ABI);
const V1_EXCHANGE_INTERFACE = new Interface(V1_EXCHANGE_ABI);

export {
  V1_FACTORY_ADDRESSES,
  V1_FACTORY_INTERFACE,
  V1_FACTORY_ABI,
  V1_EXCHANGE_INTERFACE,
  V1_EXCHANGE_ABI,
};
