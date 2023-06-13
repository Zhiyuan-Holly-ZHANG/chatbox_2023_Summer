var db = window.openDatabase("myDatabase", "1.0", "My Local Database", 2 * 1024 * 1024);



db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS myTable (id INTEGER PRIMARY KEY, name TEXT)");
});



db.transaction(function (tx) {
    tx.executeSql("INSERT INTO myTable (name) VALUES ('John')");
});



db.transaction(function (tx) {
    tx.executeSql("SELECT * FROM myTable", [], function (tx, results) {
        var len = results.rows.length;
        for (var i = 0; i < len; i++) {
            console.log(results.rows.item(i).name);
        }
    });
});




























