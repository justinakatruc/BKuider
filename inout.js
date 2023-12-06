function weather() {
  var weather = document.getElementById("weather");
  var weatherresult = weather.value;
  return weatherresult;
}


function go() {
  const dijkstraResult = graph.Dijkstra(starti(), end());
  return dijkstraResult;
}

function starti() {
  var input = document.getElementById("start");
	input = input.value;
	input = input.toLowerCase();
	input = input.replace(/\s/g, '');
	const inputDia = removeDiacritics(input);
	const inputtrans = transform(inputDia);
	const startresult = inputtrans;
  return startresult;
}

function end() {
  var end = document.getElementById("end");
  var input = end.value;
  input = input.toLowerCase();
	input = input.replace(/\s/g, '');
	const inputDia = removeDiacritics(input);
	const inputtrans = transform(inputDia);
	const endresult = inputtrans;
  return endresult;
}

function removeDiacritics(input) {
  const diacriticMap = {
    'ú': 'u', 'ù': 'u', 'ủ': 'u', 'ũ': 'u', 'ụ': 'u',
    'ư': 'u', 'ứ': 'u', 'ừ': 'u', 'ử': 'u', 'ữ': 'u', 'ự': 'u',

    'é': 'e', 'è': 'e', 'ẻ': 'e', 'ẽ': 'e', 'ẹ': 'e',
    'ê': 'e', 'ế': 'e', 'ề': 'e', 'ể': 'e', 'ễ': 'e', 'ệ': 'e', 

    'ó': 'o', 'ò': 'o', 'ỏ': 'o', 'õ': 'o', 'ọ': 'o',
    'ô': 'o', 'ố': 'o', 'ồ': 'o', 'ổ': 'o', 'ỗ': 'o', 'ộ': 'o', 
    'ơ': 'o', 'ớ': 'o', 'ờ': 'o', 'ở': 'o', 'ỡ': 'o', 'ợ': 'o', 

    'á': 'a', 'à': 'a', 'ả': 'a', 'ã': 'a', 'ạ': 'a',
    'ă': 'a', 'ắ': 'a', 'ằ': 'a', 'ẳ': 'a', 'ẵ': 'a', 'ặ': 'a',
    'â': 'a', 'ấ': 'a', 'ầ': 'a', 'ẩ': 'a', 'ẫ': 'a', 'ậ': 'a',

    'í': 'i', 'ì': 'i', 'ỉ': 'i', 'ĩ': 'i', 'ị': 'i',

    'ý': 'y', 'ỳ':'y', 'ỷ':'y', 'ỹ':'y', 'ỵ':'y',

    'đ': 'd'
  };

  input = input.replace(/[úùủũụưứừửữựéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợáàảãạăắằẳẵặâấầẩẫậíìỉĩịýỳỷỹỵđ]/g, function(match) {
    return diacriticMap[match];
  });

  return input;
}

function transform(input) {
  //gates
  if (input === "cong1" || input === "congdau" || input === "congltk" || input === "conglythuongkiet" || input === "congchinh" || input === "maingate" || input === "firstgate" || input === "ltk" || input === "lythuongkiet" || input === "ltkgate" || input === "lythuongkietgate") {
    input = "gate1";
    return input;
  }
  else if (input === "cong2" || input === "conggiua" || input === "congthtgiua" || input === "congtohienthanhgiua" || input === "secondgate" || input === "tohienthanhmidgate") {
    input = "gate2";
    return input;
  }
  else if (input === "cong3" || input === "congcuoi" || input === "congria" || input === "congthtria" || input === "congtohienthanhria" || input === "thirdgate") {
    input = "gate3";
    return input;
  }
  //specialplaces
  else if (input === "hoitruonga5" || input === "hoitruong" || input === "a5-hoitruonga5" || input === "hta5" || input === "a5-hall" || input === "a5hall") {
    input = "a5-hta5";
    return input;
  }
  else if (input === "giangduongb6" || input === "b6-giangduongb6" || input === "giangduonghoabinh" || input === "hoabinhauditorium" || input === "gdhb" || input === "gdb6" || input === "hoitruonghoabinh") {
    input = "b6-gdb6";
    return input;
  }
  else if (input === "b6-civilengineering" || input === "civilengineering") {
    input = "b6-ce";
    return input;
  }
  else if (input === "hoitruongb4" || input === "b4-hoitruongb4" || input === "htb4" || input === "b4-hall" || input === "b4hall") {
    input = "b4-htb4";
    return input;
  }
  else if (input === "hoitruonga4" || input === "a4-hoitruonga4" || input === "hta4" || input === "a4-hall" || input === "a4hall") {
    input = "a4-hta4";
    return input;
  }
  else if (input === "phongyte" || input === "healthcarecenter" || input === "medicalfacility" || input === "studenthealthcenter" || input === "campushealthcenter") {
    input = "b7";
    return input;
  }
  else if (input === "a2" || input === "library") {
    input = "thuvien";
    return input;
  }
  else if (input === "foodcourt" || input === "canteen") {
    input = "cantin";
    return input;
  }
  else if (input === "conveniencestore" || input === "cuahangtienloi") {
    input = "circlek";
    return input;
  }
  else if (input === "nhaxegiaovien" || input === "nhaxecanbo" || input === "nhaxecb" || input === "nxcb" || input === "nxgv") {
    input = "nhaxegv";
    return input;
  }
  else if (input === "nhaxetohienthanh" || input === "nxtht") {
    input = "nhaxetht";
    return input;
  }
  else if (input === "nhaxelythuongkiet" || input === "nxltk") {
    input = "nhaxeltk";
    return input;
  }
  else return input;
}

function hasDiacritics(input) {
  const normalizedString = input.normalize("NFD");

  const diacriticRegex = /[\u0300-\u036F\u0111]/;

  return diacriticRegex.test(normalizedString);
}

function checkForDiacritics(inputElement) {
  const hasDiacriticsClass = "has-diacritics";
  const inputValue = inputElement.value;

  // Check if the input has diacritics
  if (hasDiacritics(inputValue)) {
    inputElement.classList.add(hasDiacriticsClass);
  } else {
    inputElement.classList.remove(hasDiacriticsClass);
  }
}

function handleInputStart(inputElement) {
  suggestStart(inputElement);

  checkForDiacritics(inputElement);
}