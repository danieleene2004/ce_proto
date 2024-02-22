//! 1 == 10 METER

export class Block {
    width_x: number = 1;
    width_y: number = 1;
    type: BlockType = BlockType.empty;
}

export enum BlockType {
    empty,
    house,
    panel
}

export interface building {
    cost: number;
    production: number;
}

export const house: building = {
    cost: 1,
    production: 0.5,
}

export const panel: building = {
    cost: 0,
    production: 1.5,
}