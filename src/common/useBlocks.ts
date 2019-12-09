import create, { SetState, State } from 'zustand';

interface BlocksState extends State {}

const [useBlocks] = create<BlocksState>((set: SetState<BlocksState>): BlocksState => ({}));

export default useBlocks;
