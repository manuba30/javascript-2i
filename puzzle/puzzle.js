document.querySelectorAll('.draggable').forEach(block => {
    block.addEventListener('click', function () {
        moveBlock(this);
    });
});

function moveBlock(block) {
    const emptyBlock = document.getElementById('dropper');
    const blockRect = block.getBoundingClientRect();
    const emptyBlockRect = emptyBlock.getBoundingClientRect();

    const isAdjacent =
        (blockRect.top === emptyBlockRect.top && Math.abs(blockRect.left - emptyBlockRect.left) === emptyBlockRect.width) ||
        (blockRect.left === emptyBlockRect.left && Math.abs(blockRect.top - emptyBlockRect.top) === emptyBlockRect.height);

    if (isAdjacent) {
        const emptyStyle = {
            top: emptyBlock.style.top,
            left: emptyBlock.style.left,
        };\

        emptyBlock.style.top = block.style.top;
        emptyBlock.style.left = block.style.left;

        block.style.top = emptyStyle.top;
        block.style.left = emptyStyle.left;

        swapElements(emptyBlock, block);
    }
}

function swapElements(el1, el2) {
    const parent = el1.parentNode;
    const sibling = el1.nextSibling === el2 ? el1 : el1.nextSibling;
    el2.parentNode.insertBefore(el1, el2);
    parent.insertBefore(el2, sibling);
}
