export function quickSortAnimations(items, left, right, animations) {
    var index;

    if (items.length > 1) {
        index = partition(items, left, right, animations); //index returned from partition

        if (left < index - 1) { //more elements on the left side of the pivot
            quickSortAnimations(items, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSortAnimations(items, index, right, animations);
        }
    }
    return animations;
}
function swap(items, leftIndex, rightIndex, animations){
    animations.push([items[leftIndex], items[rightIndex], "swap"]);

                var temp = items[leftIndex];
                items[leftIndex] = items[rightIndex];
                items[rightIndex] = temp;
}
function partition(items, left, right, animations) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            animations.push([items[i], pivot, "compare"]);
            animations.push([items[i], pivot, "compare"]);
            i++;
        }
        while (items[j] > pivot) {
            animations.push([items[j], pivot, "compare"]);
            animations.push([items[j], pivot, "compare"]);
            j--;
        }
        if (i <= j) {
            swap(items, i, j, animations); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}