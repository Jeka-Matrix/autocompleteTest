import { MenuItems } from 'Components';
import { Dictionary } from 'Dictionary';
import { SERVICES_ENUM, SHLIHIM_STATUS_ENUM, WeightRangeEnum } from './EnumConstants';

export const ENTRIES: MenuItems[] = [
  { value: '1', text: 'א' },
  { value: '2', text: 'ב' },
  { value: '3', text: 'ג' },
  { value: '4', text: 'ה' },
  { value: '5', text: 'ו' },
  { value: '6', text: 'ז' },
  { value: '7', text: 'ח' },
];

export const SERVICES_MENU: MenuItems[] = [
  { value: SERVICES_ENUM.shlihim + '', text: 'שליחים' },
  { value: SERVICES_ENUM.tevel + '', text: 'שירות ליצואן' },
  { value: SERVICES_ENUM.rashum + '', text: 'רשום' },
];

export const SHLIHIM_STATUS_MENU: MenuItems[] = [
  { value: SHLIHIM_STATUS_ENUM.InProgress + '', text: Dictionary.InProgress.he },
  { value: SHLIHIM_STATUS_ENUM.NotCollected + '', text: Dictionary.NotCollected.he },
  { value: SHLIHIM_STATUS_ENUM.ReturnTo + '', text: Dictionary.ReturnTo.he },
  { value: SHLIHIM_STATUS_ENUM.SentTo + '', text: Dictionary.SentTo.he }
];

export const ITEM_TYPE: MenuItems[] = [
  { value: '1', text: 'רגיל' },
  { value: '2', text: 'מסחרי' },
];

export const ENTRIES_EN: MenuItems[] = [
  { value: '1', text: '1' },
  { value: '2', text: '2' },
  { value: '3', text: '3' },
  { value: '4', text: '4' },
  { value: '5', text: '5' },
  { value: '6', text: '6' },
  { value: '7', text: '7' },
];

export const DELIVERY_OPTIONS: MenuItems[] = [
  { text: 'פריט', value: '1' },
  { text: 'משטח', value: '2' },
];

export const WEIGHT_RANGE: MenuItems[] = [
  { text: `0ק"ג - 5 ק"ג`, value: WeightRangeEnum.sm },
  { text: `5ק"ג - 20ק"ג`, value: WeightRangeEnum.md },
  { text: `20ק"ג - 35ק"ג`, value: WeightRangeEnum.lg },
];
