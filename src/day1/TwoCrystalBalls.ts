// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it wil break in the most optimized way
export default function two_crystal_balls(breaks: boolean[]): number {
    // square root big O
    let jump_amount = Math.floor(Math.sqrt(breaks.length));

    // jump square root n until we find a point where we break
    // here we use up our first ball
    let i = jump_amount;
    for (; i < breaks.length; i += jump_amount) {
        if (breaks[i]) {
            break;
        }
    }

    // found point where we break
    i -= jump_amount;

    // linearly search for first location where it breaks
    let is_found = false;
    for (let j = 0; j < jump_amount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            is_found = true;
            break;
        }
    }

    return is_found ? i : -1;
}
