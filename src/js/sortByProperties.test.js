import sortByProperties from './sortByProperties';

test('testing with data from the assignment', () => {
  const importantProps = ['name', 'level'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [{
    key: 'name',
    value: 'мечник',
  }, // порядок взят из массива с ключами
  {
    key: 'level',
    value: 2,
  }, // порядок взят из массива с ключами
  {
    key: 'attack',
    value: 80,
  }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "attack")
  {
    key: 'defence',
    value: 40,
  }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "defence")
  {
    key: 'health',
    value: 10,
  }, // порядок по алфавиту (т.к. в массиве с ключами нет значения "health")
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});


test('testing with all props important', () => {
  const importantProps = ['name', 'level', 'health', 'attack', 'defence'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [{
    key: 'name',
    value: 'мечник',
  },
  {
    key: 'level',
    value: 2,
  },
  {
    key: 'health',
    value: 10,
  },
  {
    key: 'attack',
    value: 80,
  },
  {
    key: 'defence',
    value: 40,
  },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});

test('testing with all props unimportant, only lexicographic sort', () => {
  const importantProps = ['width', 'height', 'color'];

  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };

  const expected = [
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'name',
      value: 'мечник',
    },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});

test('testing for object with some properties from prototype', () => {
// This test is made to ensure 100%-coverage, since the function under test
// checks obj.hasOwnProperty()

  const importantProps = ['width', 'height', 'color'];

  const protoobj = {
    color: 'red',
  };
  const trueobj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const obj = { ...trueobj };
  Object.setPrototypeOf(obj, protoobj);

  const expected = [
    {
      key: 'attack',
      value: 80,
    },
    {
      key: 'defence',
      value: 40,
    },
    {
      key: 'health',
      value: 10,
    },
    {
      key: 'level',
      value: 2,
    },
    {
      key: 'name',
      value: 'мечник',
    },
  ];

  expect(sortByProperties(obj, importantProps)).toEqual(expected);
});
