import { atom } from "recoil";

let targetsState = atom({
    key: 'targets',
    default: []
});

export default targetsState;