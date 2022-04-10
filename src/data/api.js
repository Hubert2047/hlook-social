export const user = {
    userId: 1,
    avatar: 'assets/person/hubert.jpg',
    firstName: 'Wu',
    lastName: 'Hubert',
    posts: [{
            id: 1,
            userCreate: {
                userId: 1,
                avatar: 'assets/person/hubert.jpg',
                firstName: 'Wu',
                lastName: 'Hubert'
            },
            createAt: '2022-04-08T16:09:44.300Z',
            content: 'This is my team in a workshop ',
            img: 'assets/post/MBA.jpg',
            likeCount: 109,
            shareCount: 120,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    body: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    body: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    body: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                },
                {
                    id: 4,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    body: "How about you ?",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }

            ]
        },
        {
            id: 2,
            userCreate: {
                userId: 2,
                avatar: 'assets/person/2.jpeg',
                firstName: 'Alex',
                lastName: 'huk'
            },
            createAt: '2022-02-08T16:09:44.300Z',
            content: 'This is my team in a workshop ',
            img: 'assets/post/MBA-1.jpg',
            likeCount: 1119,
            commentCount: 3,
            shareCount: 1201,
            comments: [{
                    id: 1,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    body: " this picture so nice",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 2,
                    user: {
                        userId: 2,
                        avatar: 'assets/person/2.jpeg',
                        firstName: 'Alex',
                        lastName: 'huk'
                    },
                    isLiked: false,
                    body: " how are you",
                    parentId: null,
                    createdAt: "2022-04-08T16:09:44.300Z",
                },
                {
                    id: 3,
                    user: {
                        userId: 1,
                        avatar: 'assets/person/hubert.jpg',
                        firstName: 'Wu',
                        lastName: 'Hubert'
                    },
                    isLiked: false,
                    body: "Iam Fine !",
                    parentId: 2,
                    createdAt: "2022-04-08T16:09:45.300Z",
                }
            ]
        }
    ],
    stories: [{
            id: 1,
            createBy: {
                userId: 2,
                avatar: 'assets/person/2.jpeg',
                firstName: 'Alex',
                lastName: 'huk'
            },
            img: 'assets/stories/cartoon.jpg'
        },
        {
            id: 2,
            createBy: {
                userId: 3,
                avatar: 'assets/person/3.jpeg',
                firstName: 'Marry',
                lastName: 'Q'
            },
            img: 'assets/stories/flower.jpg'
        },
        {
            id: 3,
            createBy: {
                userId: 4,
                avatar: 'assets/person/4.jpeg',
                firstName: 'Alart',
                lastName: 'Rub'
            },
            img: 'assets/stories/mushroom.jpg'
        },
        {
            id: 4,
            createBy: {
                userId: 5,
                avatar: 'assets/person/5.jpeg',
                firstName: 'Lina',
                lastName: 'Ron'
            },
            img: 'assets/stories/hurbor.jpg'
        },
        {
            id: 5,
            createBy: {
                userId: 6,
                avatar: 'assets/person/6.jpeg',
                firstName: 'Robin',
                lastName: 'Chan'
            },
            img: 'assets/stories/ocean.jpg'
        }
    ],
    friends: [{
            userId: 2,
            avatar: 'assets/person/2.jpeg',
            firstName: 'Alex',
            lastName: 'huk',
            isOnline: true
        },
        {
            userId: 3,
            avatar: 'assets/person/3.jpeg',
            firstName: 'Marry',
            lastName: 'Q',
            isOnline: true

        },
        {

            userId: 4,
            avatar: 'assets/person/4.jpeg',
            firstName: 'Alart',
            lastName: 'Rub',
            isOnline: false

        },
        {

            userId: 5,
            avatar: 'assets/person/5.jpeg',
            firstName: 'Lina',
            lastName: 'Ron',
            isOnline: true

        },
        {

            userId: 6,
            avatar: 'assets/person/6.jpeg',
            firstName: 'Cordia',
            lastName: 'Prosacco',
            isOnline: true

        },
        {

            userId: 7,
            avatar: 'assets/person/7.jpeg',
            firstName: 'Cara',
            lastName: 'Keeling',
            isOnline: false

        },
        {

            userId: 8,
            avatar: 'assets/person/8.jpeg',
            firstName: 'Tania',
            lastName: 'Gerhold',
            isOnline: true

        },
        {

            userId: 9,
            avatar: 'assets/person/9.jpeg',
            firstName: 'Anna',
            lastName: 'Altenwerth',
            isOnline: true

        },
        {

            userId: 10,
            avatar: 'assets/person/10.jpeg',
            firstName: 'Ismael',
            lastName: 'Anderson',
            isOnline: true

        },
        {

            userId: 11,
            avatar: 'assets/person/1.jpeg',
            firstName: 'Lina',
            lastName: 'Ron',
            isOnline: false

        }
    ],
    shortCuts: [{
            id: 1,
            avatar: 'assets/shortcut/youtube.png',
            name: 'Youtube'
        },
        {
            id: 2,
            avatar: 'assets/shortcut/battle.png',
            name: 'battle'
        }, {
            id: 3,
            avatar: 'assets/shortcut/gun.jpeg',
            name: 'Gun'
        }, {
            id: 4,
            avatar: 'assets/shortcut/avengers.jpeg',
            name: 'avengers'
        }, {
            id: 5,
            avatar: 'assets/shortcut/kidgetrid.jpeg',
            name: 'Kid Get Rich'
        }
    ],
    mesengers: [{
            id: 1,
            userSend: {

            },
            body: 'hello, how are you doing?',
            isRead: false,
        },
        {
            id: 2,
            userSend: {

            },
            body: 'we have a date, do you remember it ?',
            isRead: false,
        },
        {
            id: 3,
            userSend: {

            },
            body: 'we have a date, do you remember it ?',
            isRead: false,
        }
    ],
    requests: [{
            id: 1,
            userSend: {

            }
        },
        {
            id: 2,
            userSend: {

            }
        }
    ],
    notifications: [{
            id: 1,
            body: {

            }
        },
        {
            id: 2,
            body: {

            }
        }
    ]

}



// export const getComments = async() => {
//     return [{
//             id: "1",
//             body: "hello this picture so nice",
//             username: "Jack",
//             userId: "1",
//             parentId: null,
//             createdAt: "2022-04-08T16:09:44.300Z",
//         },
//         {
//             id: "2",
//             body: "Second comment",
//             username: "John",
//             userId: "1",
//             parentId: null,
//             createdAt: "2022-04-08T16:09:44.300Z",
//         },
//         {
//             id: "3",
//             body: "comment 2",
//             username: "hubert ",
//             userId: "2",
//             parentId: "1",
//             createdAt: "2022-04-08T16:09:44.300Z",
//         },
//         {
//             id: "4",
//             body: "Second comment second child",
//             username: "John",
//             userId: "2",
//             parentId: "2",
//             createdAt: "2022-04-08T16:09:44.300Z",
//         }
//     ];
// };

// export const createComment = async(text, parentId = null) => {
//     return {
//         id: Math.random().toString(36).substr(2, 9),
//         body: text,
//         parentId,
//         userId: "1",
//         username: "John",
//         createdAt: new Date().toLocaleString(),
//     };
// };

// export const updateComment = async(text) => {
//     return { text };
// };

// export const deleteComment = async() => {
//     return {};
// };