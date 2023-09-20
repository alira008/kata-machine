function swap(arr: number[], first_index: number, next_index: number) {
    const temp = arr[next_index];
    arr[next_index] = arr[first_index];
    arr[first_index] = temp;
}

export default function bubble_sort(arr: number[]): void {
    for (let i = 1; i < arr.length; ++i) {
        for (let j = 1; j < arr.length; ++j) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
}
