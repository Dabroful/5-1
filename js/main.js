'use strict'

const marketing = document.querySelector('.ads');
marketing.remove();

const itemsReplace = document.querySelectorAll('.item');

itemsReplace[0].replaceWith(itemsReplace[1]);
itemsReplace[3].after(itemsReplace[0]);

const propsReplace = document.querySelectorAll('.props__item_two');
console.log(propsReplace);

const four = document.querySelectorAll('.props__item_four');
console.log(four);

four[3].after(four[0])
propsReplace[7].after(propsReplace[8])
propsReplace[7].after(propsReplace[9])

const itemsTitle = document.querySelectorAll('.item__title');
const propsList = document.querySelectorAll('.props__list');

propsList[1].before(itemsTitle[3]);
propsList[4].before(itemsTitle[4]);
propsList[5].before(itemsTitle[0]);

console.log(propsList);
propsList[2].replaceWith(propsList[4]);
itemsTitle[4].append(propsList[2]);
