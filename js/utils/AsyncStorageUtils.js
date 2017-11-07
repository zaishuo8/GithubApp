import { AsyncStorage } from 'react-native';

export default class AsyncStorageUtils{
    static save(key, value){
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(key, value, (err) => {
                if (!err){
                    if (resolve) resolve();
                }else {
                    if (reject) reject(err);
                }
            })
        })
    }
    static get(key){
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(key, (err, value) => {
                if (!err){
                    if (resolve) resolve(value);
                }else{
                    if (reject) reject(err);
                }
            })
        })
    }
}