let currentUser;

const users = [
    {
        fullName: 'Gabriel Henry',
        email: 'movie_lover@gmail.com',
        password: 'secretpassword',
        picture: '',
    },
];

const noUser = {};

currentUser = users.filter(user => user.email === 'movie_lover@gmail.com');

export default currentUser;
