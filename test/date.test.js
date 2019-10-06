const { date } = require('../route/date');
let date_ =  "1991-08-28";

test('code1', () => expect(date(date_, 1)).toBe('08/28/91') );

test('code13', () => expect(date(date_, 13)).toBe('Wed Aug 28 1991') );

test('code101', () => expect(date(date_, 101)).toBe('08/28/1991') );

test('code102', () => expect(date(date_, 102)).toBe('1991.08.28') );

test('code103', () => expect(date(date_, 103)).toBe('28/08/1991') );

test('code104', () => expect(date(date_, 104)).toBe('28.08.1991') );

test('code105', () => expect(date(date_, 105)).toBe('28-08-1991') );

test('code106', () => expect(date(date_, 106)).toBe('28 Aug 1991') );

test('code107', () => expect(date(date_, 107)).toBe('Aug 28, 1991') );

test('code110', () => expect(date(date_, 110)).toBe('08-28-1991') );

test('code111', () => expect(date(date_, 111)).toBe('1991/08/28') );

test('code112', () => expect(date(date_, 112)).toBe('19910828') );

// test('code1', () => expect(date(date_, 1)).toBe('') );

// test('code1', () => expect(date(date_, 1)).toBe('') );