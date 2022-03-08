var msg = "hello World";
var UserAccount = /** @class */ (function () {
    function UserAccount(un, id) {
        this.name = un;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("neriel", 770);
function deleteUser(u) {
    //...
}
function getUser(id) {
    return { name: "mike", id: 4 };
}
function bla(name) {
    console.log(name);
}
bla(10);
var test = {
    add: function () { },
    get: function () {
        return 0;
    }
};
