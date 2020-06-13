import pizzaTest from '../data.json';
import { mockComponent } from 'react-dom/test-utils';

test('the pizza data is correct', () => {
  expect(pizzaTest).toMatchSnapshot();
  expect(pizzaTest).toHaveLength(4);
  expect(pizzaTest.map(pizza => pizza.name)).toEqual([
    'Chicago Pizza',
    'Neapolitan Pizza',
    'New York Pizza',
    'Sicilian Pizza',
  ]);
});

for (let i = 0; i < pizzaTest.length; i += 1) {
  test(`Pizza[${i}] should have properties (id, name, image, desc, price)`, () => {
    expect(pizzaTest[i]).toHaveProperty('id');
    expect(pizzaTest[i]).toHaveProperty('name');
    expect(pizzaTest[i]).toHaveProperty('image');
    expect(pizzaTest[i]).toHaveProperty('desc');
    expect(pizzaTest[i]).toHaveProperty('price');
  });
}

test('mock implementation of a basic function', () => {
  const mock = jest.fn(() => 'I am a mock');
  expect(mock('Calling mock function')).toBe('I am a mock');
  expect(mock).toHaveBeenCalledWith('Calling mock function');
});

test('mock return value of a function one time', () => {
  const mock = jest.fn(() => 'I am a mock');

  mock.mockReturnValueOnce('Hello').mockReturnValueOnce('My friend!');

  mock();
  mock();

  expect(mock).toHaveBeenCalledTimes(2);

  mock('Hello', 'My friend!', "What's Up?");
  expect(mock).toHaveBeenCalledWith('Hello', 'My friend!', "What's Up?");

  mock('Marvelous');
  expect(mock).toHaveBeenLastCalledWith('Marvelous');
});

test('mock implementation of a basic function', () => {
  const mock = jest.fn().mockImplementation(() => 'Spain');
  expect(mock('Location')).toBe('Spain');
  expect(mock).toHaveBeenCalledWith('Location');
});

test('spying using original implementation', () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  };
  const spy = jest.spyOn(pizza, 'name');
  expect(pizza.name('Cheese')).toBe('Pizza name: Cheese');
  expect(spy).toHaveBeenCalledWith('Cheese');
});

test('spying using mockImplementation', () => {
  const pizza = {
    name: n => `Pizza name: ${n}`,
  };
  const spy = jest.spyOn(pizza, 'name');
  spy.mockImplementation(n => `Crazyy pizza!`);

  expect(pizza.name('Cheese')).toBe('Crazyy pizza!');
  expect(spy).toHaveBeenCalledWith('Cheese');
});

test('pizza return new york last', () => {
  const pizza1 = pizzaTest[0];
  const pizza2 = pizzaTest[1];
  const pizza3 = pizzaTest[2];
  const pizza = jest.fn(curr => curr.name);

  pizza(pizza1); //chicago
  pizza(pizza2); //neopolitan
  pizza(pizza3); //NY

  expect(pizza).toHaveLastReturnedWith('New York Pizza');
});

test('pizza data has chicago pizza and matches as an object', () => {
  const chicagoPizza = {
    id: 1,
    name: 'Chicago Pizza',
    image: '/images/chicago-pizza.jpg',
    desc:
      'The pan in which it is baked gives the pizza its characteristically high edge which provides ample space for large amounts of cheese and a chunky tomato sauce.',
    price: 9,
  };
  expect(pizzaTest[0]).toMatchObject(chicagoPizza);
});

test('expect a promise to resolve', async () => {
  const user = {
    getFullName: jest.fn(() => Promise.resolve('John Cena')),
  };
  await expect(user.getFullName('?')).resolves.toBe('John Cena');
});

test('expect a promise to resolve', async () => {
  const user = {
    getFullName: jest.fn(() => Promise.reject(new Error('Error'))),
  };
  await expect(user.getFullName('?')).rejects.toThrow('Error');
});
