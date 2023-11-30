const sorting = require("../../app");

describe("Books names test suit, positive test", () => {            // сортируем названия по возрастанию, позитивный тест
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)
    expect(result).toEqual(expected);
  });
});

describe("Books names test suit, negative test", () => {            // нет сортировки, негативный тест
  it("Books have the same names, no sorting", () => {
    const input = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ]
    const expected = [
      "Гарри Поттер",
      "Гарри Поттер",
      "Гарри Поттер",
    ]

    const result = sorting.sortByName(input)
    expect(result).toEqual(expected);
  });
});