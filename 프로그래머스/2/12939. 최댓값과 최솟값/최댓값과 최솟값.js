function solution(s) {
    var max = s.split(" ").reduce((a, b) => +a > +b ? a : b, );
    var min = s.split(" ").reduce((a, b) => +a < +b ? a : b, );
    return `${min} ${max}`
}