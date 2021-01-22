// https://github.com/Baker24bd/Assignment-3
// 1.Kilometer to Meter Convert
function kilometerToMeter(kilometer) {
  if (kilometer < 0) {
    return 'Unnecessary Value';
  }
  // 1 kilometer = 1000 meter
  return kilometer * 1000;
}

const $10meter = kilometerToMeter(10);
console.log($10meter);

// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0 || phone < 0 || laptop < 0) {
    return 'Unnecessary Value';
  }
  const totalWatch = watch * 50;
  const totalPhone = phone * 100;
  const totalLaptop = laptop * 500;

  return totalWatch + totalPhone + totalLaptop;
}

const watch2Phone3Laptop1 = budgetCalculator(5, 7, 2);
console.log(watch2Phone3Laptop1);

// 3. Hotel Cost
function hotelCost(Day) {
  let money = 0;

  if (Day < 0) {
    return 'Unnecessary Day';
  } else if (Day <= 10) {
    //first Day to 10Day ,,,,valu=100
    money = Day * 100;
  } else if (Day <= 20) {
    const firstDay = 10 * 100;
    const remaining = Day - 10;
    // 11Day to 20Day,,,valu = 80
    const secondDay = remaining * 80;
    money = firstDay + secondDay;
  } else {
    const firstDay = 10 * 100;
    const secondDay = 10 * 80;
    const remaining = Day - 20;
    //21Day to 21+,,,,,valu = 50
    const thirdDay = remaining * 50;
    money = firstDay + secondDay + thirdDay;
  }

  return money;
}

console.log(hotelCost(22));

// 4. Mega Friend
function megaFriend(friends) {
  let longName = '';
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length <= 0) {
      return 'Unnecessary Value';
    } else if (friends[i].length > longName.length) {
      longName = friends[i];
    }
  }
  return longName;
}

console.log(megaFriend(['Akash', 'Batash', 'Shagor', 'Nodi', 'BakerHossain', 'Pukur']));