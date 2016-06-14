import LocalStorageResource from './resources/LocalStorage';
import { replaceStateReducer } from 'madera-contrib-common';

export default {
    resources: [LocalStorageResource],
    reducers: [replaceStateReducer]
}
