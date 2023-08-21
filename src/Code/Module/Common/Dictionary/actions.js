import store from './store';
import { getMark } from '../../Api/Api';
import { getRoles, genders, getMarkDictionary } from './dicts';

export function fetchDict() {
  let tags = []
  return dispatch => {
      getMarkDictionary().then(data => {
      tags = data
      // 创建空字典
      let markDict = {};
      // 遍历数组,以Id为key填充字典  
      tags.forEach(tag => {
        markDict[tag.Id] = {value:tag.Value,color:tag.Color};
      });
      dispatch({
        type: 'MARK_DICT',
        payload: markDict
      });
    });
    dispatch({
      type: 'GENDERS_DICT',
      payload: genders
    });
    dispatch({
      type: 'ROLES_DICT',
      payload: getRoles()
    });
  }
}
