import appDb from '../indexedDb/mainDb';
import { Setting } from './Setting';

class WeekTypeClass {
  constructor() {
    this.types = [];
  }

  get local() {
    const newList = [];
    this.types.forEach((weekType) => {
      const obj = {};
      obj.value = weekType.id_week_type;
      obj.sort_index = weekType.sort_index;
      obj.label = weekType.week_type_name[Setting.source_lang.toUpperCase()];
      newList.push(obj);
    });

    newList.sort((a, b) => {
      return a.sort_index > b.sort_index ? 1 : -1;
    });

    return newList;
  }
}

WeekTypeClass.prototype.loadAll = async function () {
  const appData = await appDb.week_type.reverse().reverse().sortBy('id_week_type');

  for (const item of appData) {
    const obj = {};
    obj.id_week_type = item.id_week_type;
    obj.week_type_name = item.week_type_name;
    obj.sort_index = item.sort_index;
    this.types.push(obj);
  }
};

export const WeekTypeList = new WeekTypeClass();