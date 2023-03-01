let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
let center = (styles.length - 1) / 2
styles[Math.floor(center)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");