let isOpenModal = false

function openModal() {
    isOpenModal = !isOpenModal;
    if (isOpenModal) {
        document.querySelector('.modalContainer').classList.toggle('showModal');
        document.querySelector('.modalBgcolor').classList.toggle('showmodalBgcolor');
    }
    else {
        document.querySelector('.modalContainer').classList.toggle('showModal');
        document.querySelector('.modalBgcolor').classList.toggle('showmodalBgcolor');
    }
};

