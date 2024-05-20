const colors = {
    'ru pum pu ru rum': {
        red: 'redd',
        green: 'green',
        blue: 'bluee'
    },
};
for (const innerEntries of Object.values(colors)){
    console.log(innerEntries.red);
    console.log(innerEntries.blue);
}