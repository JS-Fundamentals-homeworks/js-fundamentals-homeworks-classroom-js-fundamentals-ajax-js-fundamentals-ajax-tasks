// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 
const apiUrl = 'https://jsonplaceholder.typicode.com/users';
const usersList = document.querySelector('ul.usersList');

async function fetchUsers() {
  try {
     const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP Error! Status: ${respose.status}`);
  }

  const users = await response.json();

  users.forEach(users.name;
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    usersList.appendChild(listItem);
  });
} catch (error) {
console.error('Error featching users:', error);
}
}

ferchUsers();
