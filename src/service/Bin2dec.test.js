import Bin2dec from './Bin2dec.js'

test('Bin2dec', () => {
    expect(Bin2dec('0')).toBe(0)
    expect(Bin2dec('1')).toBe(1)
    expect(Bin2dec('10')).toBe(2)
    expect(Bin2dec('010')).toBe(2)
    expect(Bin2dec('11')).toBe(3)

    expect(Bin2dec(1)).toThrow()
    expect(Bin2dec(123456789)).toThrow()
    expect(Bin2dec('this is a text message')).toThrow()
})
