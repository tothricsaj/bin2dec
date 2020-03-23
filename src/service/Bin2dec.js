export default function Bin2dec(binary='0') {

    if(binary === '0') return 0
    if(binary === '1') return 1

    let dec = 0
    let binMulti = 1
    let arr = binary.split('').reverse()

    for(let i=0; i<arr.length; i++) {
        let bin = arr[i]

        if(bin === '0') {
            binMulti *= 2
            continue
        }
        
        dec += (+bin) * binMulti
        binMulti *= 2
    }

    return dec
}
