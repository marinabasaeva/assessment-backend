const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneButton')
const newFortuneBtn = document.getElementById('new-fortune-button')
const newFortuneInput = document.getElementById('new-fortune')
const deleteBtn = document.getElementById('delete-fortune')
const deleteInput = document.getElementById('delete-input')
const displayFortunes = document.getElementById('display-fortunes')
const idToChange = document.getElementById('compliment-to-change')
const replaceCompliment = document.getElementById('new-compliment')
const changeNameBtn = document.getElementById('change-name-at-id')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

fortuneBtn.addEventListener('click',getFortune)

const addFortune = () => {
    const newFortune = newFortuneInput.value
    axios.post("http://localhost:4000/api/fortune/", newFortune)
    .then(res => {
        alert('new fortune added')
        newFortuneInput.value = ''
        let fortuneList = document.createElement('div')
        displayFortunes.appendChild(fortuneList)
        fortuneList.textContent = newFortune
    })
    .catch(err => console.log(err))
}
newFortuneBtn.addEventListener('click', addFortune)

const deleteFortune = () => {
    axios.delete(`http://localhost:4000/api/fortune/${deleteInput.value}`)
    .then(res => {
        alert(res.data)
    })
    .catch(err => console.log(err))
}
deleteBtn.addEventListener('click', deleteFortune)

const changeCompliment = () => {
    const compliment = replaceCompliment.value;
    axios.put(`http://localhost:4000/api/compliment/${idToChange.value}` ,{compliment})
    .then(res => {
        alert(`element changed`)
    })
    .catch(err => console.log(err))
}
changeNameBtn.addEventListener('click', changeCompliment)

