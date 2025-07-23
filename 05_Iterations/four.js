// for in

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

for(const key in myObject) {
 //   console.log(key); // js cpp rb swift
 //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "ruby", "cpp", "java", "python"]

for(const key in programming) {
    console.log(programming[key]);
}