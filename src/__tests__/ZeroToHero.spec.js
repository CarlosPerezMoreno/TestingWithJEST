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
