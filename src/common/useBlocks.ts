import create, { SetState, State } from 'zustand';

type BlockItem = {
  blockHash: string;
  blockNumber: string;
};

interface BlocksState extends State {
  minBlockNumber: number;
  maxBlockNumber: number;
  blocks: {
    [propName: string]: {
      blockHash: string;
    };
  };
  setBlock(item: BlockItem): void;
}

const [useBlocks] = create<BlocksState>(
  (set: SetState<BlocksState>): BlocksState => ({
    minBlockNumber: Number.MAX_SAFE_INTEGER,
    maxBlockNumber: 0,
    blocks: {},
    setBlock: blockItem => {
      set(state => {
        if (Number(blockItem.blockNumber) > state.maxBlockNumber) {
          state.maxBlockNumber = Number(blockItem.blockNumber);
        }
        if (Number(blockItem.blockNumber) < state.minBlockNumber) {
          state.minBlockNumber = Number(blockItem.blockNumber);
        }

        state.blocks[blockItem.blockNumber] = {
          blockHash: blockItem.blockHash,
        };
      });
    },
  })
);

export default useBlocks;
