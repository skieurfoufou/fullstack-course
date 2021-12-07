document.cookie;

/*LOCAL STORAGE*/
localStorage.setItem("key", "value");
localStorage.key = "new value";
localStorage["key"] = "new value";

sessionStorage.key;

/* JSON */
/* key between ""
string between ""
number , boolean not need "" 
array between []
object between {} */
let object = {};
JSON.stringify([1, 2, 3, 4, 5]);
// JSON.stringify() change the () to JSON
let jsModel = JSON.stringify(object);
localStorage.myCar = jsModel;

JSON.parse(localStorage.myCar);
//JSON.parse() change the () to JS

/* AJAX משנה מידע מהדף בלי לשחזר את כל הדף
API משתמש בשירותים שקיימים ברשת 
REST קיצור כתובת הדף אינטרנט
POSTMAN 
rapidipa אתר שמרכז מלא API
reqres.in אתר כדי להתאמן
instantwebtool אתר כדי להתאמן

C - create(post)
R - read (get)
U - update(post/put)
D - delete(post/delete)
*/
