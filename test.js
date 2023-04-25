const arr = ["Jared", "Daph", "Jordan", "Daniel", "Rigelle", "Robin", "Quinn"]

let output = arr
.filter((_, index) => index > 1)
.map(name => name.replace(name[name.length-1], name[name.length-1].toUpperCase()))
.map(name => ({name, nameLength: name.length}))

console.log(output)