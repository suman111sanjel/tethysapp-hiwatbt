import axios from "axios";
import {Action} from "../actionType";
// import eventHub from '../../utils/utils';
// import helper from "../../utils/helpers";


export const actionBase = axios.create({
    baseURL: Action.Base
});

export async function postApiWithoutToken(action, param) {
    // eventHub.$emit('before-request');
    return await new Promise((resolve, reject) => {
        // setXCSRFToken();
        // param.csrfmiddlewaretoken=document.querySelector('[name=csrfmiddlewaretoken]').value;
        actionBase.post("/" + action, param).then(
            res => {
                // eventHub.$emit('after-response');
                resolve(res.data);
            },
            err => {
                console.log("error on postapi");
                console.log(err);
                reject(err);
            }
        );
    });
};

export async function getApiWithoutToken(action) {
    return await new Promise((resolve, reject) => {
        actionBase.get("/" + action).then(
            res => {
                resolve(res.data);
            },
            err => {
                console.log("hello error getApiWithoutToken");
                console.log(err);
                reject(err);
            }
        );
    });
};

// function getCookie(name) {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
//
// function setXCSRFToken() {
//     let csrftokenCookie = getCookie('csrftoken');
//     actionBase.defaults.headers.common["X-CSRFToken"] = csrftokenCookie;
// }

//
// function clearXCSRFToken() {
//     delete actionBase.defaults.headers.common["X-CSRFToken"];
// }
