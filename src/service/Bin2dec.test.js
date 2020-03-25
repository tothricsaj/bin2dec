import Bin2dec from './Bin2dec.js'

test('Bin2dec', () => {

    expect(typeof Bin2dec('0')).toBe('number')

    expect(Bin2dec(10)).toBe(2)
    expect(Bin2dec('0')).toBe(0)
    expect(Bin2dec('1')).toBe(1)
    expect(Bin2dec('10')).toBe(2)
    expect(Bin2dec('010')).toBe(2)
    expect(Bin2dec('11')).toBe(3)

    expect(Bin2dec('101001100011')).toBe(2659)
    expect(Bin2dec('0101001100011')).toBe(2659)

    expect(Bin2dec('1110100001')).toBe(929)
    expect(Bin2dec('01110100001')).toBe(929)



    // TODO:
    // I should learn more about this toThrow function
    //
    // expect(Bin2dec(1)).toThrow()
    // expect(Bin2dec(123456789)).toThrow()
    // expect(Bin2dec('this is a text message')).toThrow()
})
