"use strict";

one.onclick = function addSomeDrink() {
    var nameDrink = prompt('Введите название напитка: ');
    var alcohol = confirm('Напиток алкогольный? Нажмите "ОК" если "Да", в противном случае "Отмена"');
    if (alcohol == true) {
        var alcoholicBeverage = 'Да';
    } else {
        var alcoholicBeverage = 'Нет';
    };

    var composition = prompt('Из чего состоит напиток, например: 1. Сок; 2. Водка; 3. Так далее');
    var recipe = prompt('Рецепт, например: \n1. Налить в стакан апельсиновый сок; \n2. Налить поверх сока водку; \n3. Перемешать');
    var objectNewDrink = {};
    objectNewDrink.nameDrink = nameDrink;
    objectNewDrink.alcohol = alcoholicBeverage;
    objectNewDrink.composition = composition;
    objectNewDrink.recipe = recipe;
    drinkStorage.addValue(nameDrink, objectNewDrink);
  }

two.onclick = function informationSpecificDrink() {
    var nameDrink = prompt('Введите название напитка: ');
    var currentInformation = drinkStorage.getValue(nameDrink);
    if (currentInformation === undefined) {
        alert('Такой напиток отсутсвует!')
    } else {
        alert(`
        Напиток: ${currentInformation.nameDrink}
        Алкогольный: ${currentInformation.alcohol}
        Состав: ${currentInformation.composition}
        Рецепт приготовления: ${currentInformation.recipe}`);
    }
};

three.onclick = function clearDrink() {
    var nameDrink = prompt('Введите название напитка: ');
    if (drinkStorage.deleteValue(nameDrink)) {
        alert('Напиток успешно удален!');
    } else {
        alert('Такой напиток отсутсвует!');
    }
}

four.onclick = function listDrinks() {
    var drinksList = drinkStorage.getKeys();
    /*if (drinksList == '' || drinksList == 'null') {
        alert('Список напитков пуст, нажмите: "ВВОД ИНФОРМАЦИИ О НАПИТКЕ", чтобы добавить напиток в список');    
    } else alert('Вашему вниманию представлены напитки: ' + drinksList);*/
    if (drinksList.length == 0) {
        alert('Список напитков пуст, нажмите: "ВВОД ИНФОРМАЦИИ О НАПИТКЕ", чтобы добавить напиток в список');    
    } else alert('Вашему вниманию представлены напитки: ' + drinksList);
};

function HashStorageFunc() {
    var objectContent = {};

    this.addValue = function addValue(key, value) {
        objectContent[key] = value;
    }

    this.getValue = function getValue(key) {
        return objectContent[key];
    }

    this.deleteValue = function deleteValue(key) {
        if (key in objectContent) {
            delete objectContent[key];
            return true;
        } else {
            return false;
        }
    }

    this.getKeys = function getKeys() {
        var arrayKeys = [];
        for (let key in objectContent) {
            arrayKeys.push(key);
        } return arrayKeys;
    }
}

var drinkStorage = new HashStorageFunc();