import { ToggleDataModel } from './../shared/toggle-btns/toggle-btns.component';
export const ToggleStaticsData: ToggleDataModel[] = [
  {
    title: 'Convert',
    status: 'convert',
  },
  {
    title: 'Compare',
    status: 'compare',
  },
];

export const ToggleStaticsData1 = [
  ...ToggleStaticsData,
  { title: 'test', status: 'test' },
];
