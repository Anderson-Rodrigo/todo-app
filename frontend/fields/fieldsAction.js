export function changeValeu(e){
    return {
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}