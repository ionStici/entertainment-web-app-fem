import data from './data.json';
import { cloneDeep } from 'lodash';

let currentUser;
let defaultData;

const users = [
    {
        fullName: 'Gabriel Keller',
        email: 'movie_lover@gmail.com',
        password: 'secretpassword',
        picture:
            'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
    },
];

currentUser = cloneDeep(data);
defaultData = cloneDeep(data);

export { currentUser, defaultData };
