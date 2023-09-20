export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let is_found = false;

    for (let num of haystack) {
        if (num === needle) {
            is_found = true;
        }
    }

    return is_found;
}
