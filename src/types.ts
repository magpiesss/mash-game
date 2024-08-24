export enum Steps {
  'BEGIN',
  'PICK_OPTIONS',
  'PICK_NUMBER',
  'CALCULATE_FORTUNE',
  'RESULTS'
}

export type Game = {
  options: GameOption[];
  stepSize: number;
  fortune: string;
}

export type GameOption = {
  name: string;
  category: OptionCategory;
}

export type SelectionOption = {
  id: number;
  name: string;
  category: OptionCategory;
  cancelled: boolean;
  selected: boolean;
}

export enum OptionCategory {
  'HOME',
  'LIFE_PARTNER',
  'NUMBER_OF_CHILDREN',
  'JOB',
  'SALARY',
  'CAR',
  'GEOGRAPHY'
}
