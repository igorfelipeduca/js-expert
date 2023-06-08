const { error } = require('./src/constants');
const File = require('./src/file');
const assert = require('assert');

(async () => {
  {
    const filePath = './mocks/emptyFile-Invalid.csv';
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/invalidHeader-Invalid.csv';
    const expected = new Error(error.FILE_FIELDS_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/fiveItems-Invalid.csv';
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }

  {
    const filePath = './mocks/threeItems-valid.csv';
    const expected = [
      {
        id: 1,
        name: 'mauricio',
        profession: 'developer',
        age: 30,
      },
      {
        id: 2,
        name: 'fabio',
        profession: 'doctor',
        age: 44,
      },
      {
        id: 3,
        name: 'roger',
        profession: 'uber',
        age: 23,
      },
    ];
    const result = await File.csvToJSON(filePath);
    await assert.deepEqual(result, expected);
  }
})();
