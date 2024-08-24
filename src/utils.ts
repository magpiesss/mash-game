import { type GameOption, OptionCategory } from '@/types'

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const DELAY_LENGTH = 250;

export const ALL_OPTIONS: GameOption[] = [
  {  category: OptionCategory.HOME, name: 'Mansion' },
  {  category: OptionCategory.HOME, name: 'Apartment' },
  {  category: OptionCategory.HOME, name: 'Shack' },
  {  category: OptionCategory.HOME, name: 'House' },
  {  category: OptionCategory.LIFE_PARTNER, name: 'Bruce Lee' },
  {  category: OptionCategory.LIFE_PARTNER, name: 'Robert Smith' },
  {  category: OptionCategory.LIFE_PARTNER, name: 'Margaret Hamilton' },
  {  category: OptionCategory.LIFE_PARTNER, name: 'Halle Berry' },
  {  category: OptionCategory.NUMBER_OF_CHILDREN, name: '1' },
  {  category: OptionCategory.NUMBER_OF_CHILDREN, name: '0' },
  {  category: OptionCategory.NUMBER_OF_CHILDREN, name: '43' },
  {  category: OptionCategory.NUMBER_OF_CHILDREN, name: '2' },
  {  category: OptionCategory.JOB, name: 'Programmer' },
  {  category: OptionCategory.JOB, name: 'Actor' },
  {  category: OptionCategory.JOB, name: 'Secret Agent' },
  {  category: OptionCategory.JOB, name: 'Astronaut' },
  {  category: OptionCategory.SALARY, name: '£3' },
  {  category: OptionCategory.SALARY, name: '£300,000' },
  {  category: OptionCategory.SALARY, name: '£30,000' },
  {  category: OptionCategory.SALARY, name: '£3million' },
  {  category: OptionCategory.CAR, name: 'Tesla' },
  {  category: OptionCategory.CAR, name: 'Fiat Punto' },
  {  category: OptionCategory.CAR, name: 'Massive pick-up truck' },
  {  category: OptionCategory.CAR, name: 'Bus' },
  {  category: OptionCategory.GEOGRAPHY, name: 'Derby' },
  {  category: OptionCategory.GEOGRAPHY, name: 'Nottingham' },
  {  category: OptionCategory.GEOGRAPHY, name: 'Las Vegas' },
  {  category: OptionCategory.GEOGRAPHY, name: 'Glasgow' }
]