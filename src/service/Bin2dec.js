export default function Bin2dec(binary='0') {
    if(typeof binary !== 'string') binary = binary+''
    return parseInt(binary, 2)
}
