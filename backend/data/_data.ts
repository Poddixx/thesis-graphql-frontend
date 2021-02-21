export const dataProps = [
  {name: 'wysokość', value: 'do 40cm'},
  {name: 'stanowisko', value: 'słoneczne'},
  {name: 'podlewanie', value: '2 razy w tygodniu'},
  {name: 'podłoże', value: 'torfowe'},
];

export const comments = [
  {
    id: '1',
    rate: 1,
    createdAt: new Date,
    author: 'Janusz',
    content: 'bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo bardzo ładne kwiaty mają państwo',
  },
  {id: '2', rate: 2, createdAt: new Date, author: 'Grażynka', content: 'bardzo ładne kwiaty mają państwo'},
  {id: '3', rate: 3, createdAt: new Date, author: 'Janusz', content: 'bardzo ładne kwiaty mają państwo'},
  {id: '4', rate: 4, createdAt: new Date, author: 'Grażynka', content: 'bardzo ładne kwiaty mają państwo'},
  {id: '5', rate: 5, createdAt: new Date, author: 'Janusz', content: 'bardzo ładne kwiaty mają państwo'},
];

export const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim dui, pharetra ac posuere ut, egestas ut tortor. Nam malesuada sapien et mollis aliquam. Nam placerat urna vitae justo scelerisque dictum. In vitae metus quis arcu pellentesque ultrices. Maecenas venenatis metus arcu, non pretium lorem convallis a. Nulla mattis ipsum in mi faucibus fermentum a quis ligula. Pellentesque faucibus vulputate tempus. Mauris est arcu, vulputate vitae pretium blandit, rutrum at orci. Nulla eleifend nulla eget erat placerat, non mollis est mattis. Nunc sed consectetur ligula, id aliquam arcu. Sed purus sem, ultrices at orci non, tempus rutrum elit. Vivamus molestie blandit suscipit.';

export const products: any[] = [
  {name: 'Produkt A', price: 10, quantity: 100},
  {name: 'Produkt B', price: 20, quantity: 150},
  {name: 'Produkt C', price: 30, quantity: 0},
  {name: 'Produkt D', price: 40, quantity: 0},
  {name: 'Produkt E', price: 50, quantity: 100},
  {name: 'Produkt F', price: 60, quantity: 100},
  {name: 'Produkt A', price: 10, quantity: 150},
  {name: 'Produkt B', price: 20, quantity: 200},
  {name: 'Produkt C', price: 30, quantity: 300},
  {name: 'Produkt D', price: 40, quantity: 100},
  {name: 'Produkt E', price: 50, quantity: 900},
  {name: 'Produkt F', price: 60, quantity: 1},
  {name: 'Produkt A', price: 10, quantity: 8},
  {name: 'Produkt B', price: 20, quantity: 100},
  {name: 'Produkt C', price: 30, quantity: 100},
  {name: 'Produkt D', price: 40, quantity: 100},
  {name: 'Produkt E', price: 50, quantity: 100},
  {name: 'Produkt F', price: 60, quantity: 100},
  {name: 'Produkt A', price: 10, quantity: 100},
  {name: 'Produkt B', price: 20, quantity: 100},
];

// data.forEach(el => {
//   el.comments = comments;
//   el.properties = dataProps;
//   el.description = description;
// });

export const users = [
  {
    id: '1',
    username: 'jkowalski',
    name: 'Jan',
    surname: 'Kowalski',
    email: 'jkowalski@mail.com',
    createdAt: new Date,
  },
  {
    id: '2',
    username: 'mnowak',
    name: 'Marek',
    surname: 'Nowak',
    email: 'mnowak@mail.com',
    createdAt: new Date,
  },
  {
    id: '3',
    username: 'kmalinowski',
    name: 'Krzysztof',
    surname: 'Malinowski',
    email: 'kmalinowski@mail.com',
    createdAt: new Date,
  },
  {
    id: '4',
    username: 'jzielinska',
    name: 'Jadwiga',
    surname: 'Zielińska',
    email: 'jzielinska@mail.com',
    createdAt: new Date,
  },
  {
    id: '5',
    username: 'mwojciechowska',
    name: 'Marta',
    surname: 'Wojciechowska',
    email: 'mwojciechowska@mail.com',
    createdAt: new Date,
  },
];