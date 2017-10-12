let API_URL = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

let PARSE_URL = 'https://ary-parse-server.herokuapp.com';

let API_HEADERS = {
  'x-app-id': 'ba974de3',
  'x-app-key': 'bfde52cd9e4724ab64291560e2a201bf',
  'Content-Type': 'application/json'
};

let PARSE_HEADERS = {
  "X-Parse-Application-Id": "ary",
  "X-Parse-Master-Key": "aryparse1"
};

export { PARSE_URL, PARSE_HEADERS, API_URL, API_HEADERS }
