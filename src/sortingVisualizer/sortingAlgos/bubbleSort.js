export async function getBubbleSortAnimations(inputArr){
    var blocks = document.getElementsByClassName('array-bar');
  
    // BubbleSort Algorithm
    for (var i = 0; i < blocks.length; i += 1) {
        for (var j = 0; j < blocks.length - i - 1; j += 1) {
  
            // To change background-color of the
            // blocks to be compared
            blocks[j].style.backgroundColor = "#FF4949";
            blocks[j + 1].style.backgroundColor = "#FF4949";
  
            // To wait for .1 sec
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 10)
            );
  
            var value1 = inputArr[j];
            var value2 = inputArr[j+1];
  
            // To compare value of two blocks
            if (value1 > value2) {
                await swap(j);
                blocks = document.getElementsByClassName('array-bar');
            }
  
            // Changing the color to the previous one
            blocks[j].style.backgroundColor = "#6b5b95";
            blocks[j + 1].style.backgroundColor = "#6b5b95";
        }
  
        //changing the color of greatest element 
        //found in the above traversal
        blocks[blocks.length - i - 1]
                .style.backgroundColor = "#13CE66";
    }

function swap(j) {
    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        //el1.style.transform = el2.style.transform;
        //el2.style.transform = temp;
        blocks[j].style.height = `${inputArr[j+1]}px`
        blocks[j+1].style.height = `${inputArr[j]}px`
  
        window.requestAnimationFrame(function() {
            setTimeout(() => {
                var temp = inputArr[j]
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = temp;
                //container.insertBefore(el2, el1);
                resolve();
            }, 1);
        });
    });
}
return inputArr;
};

