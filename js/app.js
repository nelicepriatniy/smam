const projectsSlider = new Swiper('.projects-slider', {
    speed: 400,
    // spaceBetween: 100,
    slidePerView: 1,
    centeredSlides: true,
    navigation: {
        nextEl: '.projects-slider-next',
        prevEl: '.projects-slider-prev',
    }
});

//работа квиза

let quizBlock = document.querySelector('.quiz-modal');

if (quizBlock) {
    let firstAsnwers = quizBlock.querySelector('.quiz-modal-item').querySelectorAll('.quiz-item__ans'),
        typeOfQuiz,
        questionList,
        indexOfActiveQuestion = 0,
        actualAnswers,
        allQuest = [],
        text;
    for (let i = 0; firstAsnwers.length > i; i++) {
        firstAsnwers[i].onclick = () => {
            typeOfQuiz = firstAsnwers[i].getAttribute('data-value')
            // questionList = 

            let arr1 = Array.prototype.slice.call(quizBlock.querySelectorAll('[data-vid=' + typeOfQuiz + ']'))
            let arr2 = Array.prototype.slice.call(quizBlock.querySelectorAll('[data-vid=all]'))
            // questionList.concat(Array.prototype.slice.call(quizBlock.querySelectorAll('[data-vid=all]')) )
            questionList = arr1.concat(arr2)
            console.log(questionList);
            quizBlock.querySelector('.quiz-modal-item').classList.remove('active')
            text = firstAsnwers[i].getAttribute('data-prefix') + ' ' + firstAsnwers[i].getAttribute('data-main-value') + '; '
            questionList[0].classList.add('active')
            console.log(text);
            // actualAnswers = questionList[0].querySelectorAll('.second-ans')
            // changeActualAnswers(questionList[0])
            for (let k = 0; questionList.length > k; k++) {
                allQuest.push(questionList[k].querySelectorAll('.second-ans'))
                // actualAnswers = questionList[k].querySelectorAll('.second-ans') + actualAnswers
                console.log(allQuest);
            }
            for (let p = 0; allQuest.length > p; p++) {
                // console.log(allQuest[p]);
                clickAnswer(allQuest[p])
            }


        }
    }
    function changeActualAnswers(question) {
        actualAnswers = question.querySelectorAll('.second-ans')
        return actualAnswers
    }
    function clickAnswer(answerList) {
        for (let j = 0; answerList.length > j; j++) {
            answerList[j].onclick = () => {
                console.log(answerList[j]);
                if (answerList[j].type === 'text') {
                    if (window.innerWidth > 1024) {
                        document.addEventListener('keyup', (e) => {
                            if (e.key === 'Enter') {
                                if (answerList[j].value != '') {
                                    text = text + answerList[j].getAttribute('data-prefix') + ' ' + answerList[j].value + '; '
                                    changeQuizQuestions()
                                    console.log(text);
                                } else {
                                    alert('введите значение')
                                }
                            }
                        })
                    } else {
                        document.addEventListener('click', () => {
                            if (answerList[j].value != '') {
                                text = text + answerList[j].getAttribute('data-prefix') + ' ' + answerList[j].value + '; '
                                changeQuizQuestions()
                                console.log(text);
                            } else {
                                alert('введите значение')
                            }

                        })
                    }

                } else {
                    text = text + answerList[j].getAttribute('data-prefix') + ' ' + answerList[j].getAttribute('data-main-value') + '; '
                    changeQuizQuestions()
                    console.log(text);
                }
                changeActualAnswers(questionList[indexOfActiveQuestion])
                console.log(changeActualAnswers(questionList[indexOfActiveQuestion]));
            }

        }
    }
    function changeQuizQuestions() {
        questionList[indexOfActiveQuestion].classList.remove('active');
        indexOfActiveQuestion++
        questionList[indexOfActiveQuestion].classList.add('active')
    }

    setInterval(() => {

    }, 60)

    function mergeNodeLists(a, b) {
        var slice = Array.prototype.slice;
        return slice.call(a).concat(slice.call(b));
    }

}

//показ квиза

let quizOpenBtn = document.querySelectorAll('.quiz-btn');
let closeModal = document.querySelector('.closeModal')

for(let i = 0; quizOpenBtn.length > i; i++) {
    quizOpenBtn[i].onclick = ()=>{
        quizBlock.classList.add('active')
        closeModal.classList.add('active')
    }
}

closeModal.onclick = ()=>{
    quizBlock.classList.remove('active')
    closeModal.classList.remove('active')

}