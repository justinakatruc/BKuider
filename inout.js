function weather() {
  var weather = document.getElementById("weather");
  var weatherresult = weather.value;
  return weatherresult;
}


function go() {
  var start = document.getElementById("start");
  var input = start.value;

  input = input.toLowerCase();

  input = input.replace(/\s/g, '');

  const startresult = removeDiacritics(input);

  const dijkstraResult = graph.Dijkstra(startresult, end());
  return dijkstraResult;
}

function end() {
  var end = document.getElementById("end");
  var input = end.value;

  input = input.toLowerCase();

  input = input.replace(/\s/g, '');
  
  removeDiacritics(input);
  
  const endresult = removeDiacritics(input);

  return endresult;
}

function removeDiacritics(input) {
  // Define a list of characters with diacritics and their replacements
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

    'đ': 'd'
  };

  // Use a regular expression to match diacritic characters and replace them
  input = input.replace(/[úùủũụưứừửữựéèẻẽẹêếềểễệóòỏõọôốồổỗộơớờởỡợáàảãạăắằẳẵặâấầẩẫậíìỉĩịđ]/g, function(match) {
    return diacriticMap[match];
  });

  // Return the modified string
  return input;
}


