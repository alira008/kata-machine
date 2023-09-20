function search_recursive(haystack: number[], needle: number): boolean {
    if (haystack.length === 0) {
        return false;
    }

    let midpoint = Math.floor(haystack.length / 2);

    if (haystack[midpoint] === needle) {
        return true;
    }

    if (haystack[midpoint] > needle) {
        return search_recursive(haystack.slice(0, midpoint), needle);
    } else {
        return search_recursive(haystack.slice(midpoint + 1), needle);
    }
}

function search_forloop(haystack: number[], needle: number): boolean {
    let is_found = false;
    let low = 0;
    let high = haystack.length;
    do {
        const midpoint = Math.floor(low + (high - low) / 2);

        if (haystack[midpoint] == needle) {
            is_found = true;
        }

        if (haystack[midpoint] > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);

    return is_found;
}

export default function bs_list(haystack: number[], needle: number): boolean {
    // For loop binary search
    return search_forloop(haystack, needle);

    // Recursive binary search
    return search_recursive(haystack, needle);
}
