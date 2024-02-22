//! 1 == 1 METER

export class Block {
    width_x: number = 10;
    width_y: number = 10;
    type: BlockType = BlockType.empty;
}

export enum BlockType {
    empty,
    house,
    panel
}