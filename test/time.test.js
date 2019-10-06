const { time } = require('../route/time');
let date_ =  "1991-08-28 13:10:10";

test('code14', () => expect(time(date_, 14)).toBe('1:10:10 PM') );

test('code24', () => expect(time(date_, 24)).toBe('13:10:10') );

test('code108', () => expect(time(date_, 108)).toBe('1:10 PM') );

test('code114', () => expect(time(date_, 114)).toBe('13:10') );
