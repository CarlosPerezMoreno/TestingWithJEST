import pizzaTest from '../data.json';

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
