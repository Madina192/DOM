//1
const task1 = () => {
    const btn = document.querySelector('#create-box-model')
    const panel = document.querySelector('.buttons-panel')
    const append = document.querySelector('#append-div')
    const mainBox = document.querySelector('.main-box')
    const btnsArr = ['display:flex', 'justify-content: space-between', 'justify-content: center', 'justify-content: flex-start', 'justify-content: flex-end', 'flex-direction: row', 'flex-direction: row-reverse', 'flex-direction: column', 'flex-direction: column-reverse', 'align-items: flex-start', 'align-items: flex-end', 'align-items: flex-center']
    panel.style = 'display: none;'
    btn.style = 'width: 200px; height: 50px; color: black; background-color: aqua; border: none; border-radius: 10px; font-weight: bold; cursor: pointer'
    mainBox.style = 'text-align: center;'
    btnsArr.map(el => {
        const newBtn = document.createElement('button')
        newBtn.textContent = el
        panel.appendChild(newBtn)
        newBtn.setAttribute('class', 'btn')
        newBtn.style = 'width: 200px; height: 50px; margin-left: 10px; margin-bottom: 10px; border-radius: 10px; border: none; background-color: rgb(245, 245, 161); cursor: pointer'
        newBtn.addEventListener('click', () => {
            newBtn.classList.toggle('active')
            append.style = `display: flex; ${newBtn.textContent}`
            newBtn.style = 'background: blue; width: 200px; height: 50px; margin-left: 10px; margin-bottom: 10px; border-radius: 10px; border: none; cursor: pointer'
            if (newBtn.classList.contains('active')) {
                newBtn.textContent = el + '!'
            } else {
                newBtn.textContent = el
                newBtn.style = 'background: pink; width: 200px; height: 50px; margin-left: 10px; margin-bottom: 10px; border-radius: 10px; border: none; cursor: pointer'
            }
        })
    })
    btn.addEventListener('click', () => {
        for (let i = 0; i < 3; i++) {
            const new_div = document.createElement('div')
            new_div.setAttribute('class', 'box')
            new_div.style = 'background: purple; width: 100px; height: 100px; margin-top: 10px; margin-left: 5px'
            append.appendChild(new_div)
            panel.style = 'display: block; text-align: center; margin-top: 20px'
        }
    })
}
task1()