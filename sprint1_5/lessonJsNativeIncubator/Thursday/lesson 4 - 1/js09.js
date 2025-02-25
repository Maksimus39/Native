//ПАТТЕРНЫ subscriber === handler === listener === watcher === observer

// const handler = () => {
//
// }
// store.subscribe(function subscriber() {}) //стор изменился
// store.subscribe(handler) //стор изменился
// // button.addEventListener('click', function subscriber() {}) //кнопка была нажата
// setTimeout(function subscriber() {}, 1000) // прошла 1 секунда
//
// app.get('users', function subscriber() {}) //роут бьыл вызван
// fs.watch('test.txt', function subscriber() {}) // файл был изменен
// websocket.on('message', function subscriber() {}) //сообщение получено


const button = {

    _subscribers: {
        click: [],
        focus: []
    },

    _unsubcribe(eventName, subscriber) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(s => s !== subscriber)
    },

    click() {
        console.log('Базовый функционал')
        this._subscribers['click'].forEach((subscriber) => subscriber())
    },
    focus() {

    },

    addEventListener(eventName, subscriber, isReturn) {
        if (this._subscribers[eventName]) {
            this._subscribers[eventName].push(subscriber)
        }
        if (isReturn) {
            return () => {
                this._unsubcribe(eventName, subscriber)
            }
        }
    },

    removeEventListener(eventName, subscriber) {
        this._unsubcribe(eventName, subscriber)
    }
}

function subscriber() {
    console.log('кнопка была нажата')
}

// button.click()
const unsubcribe = button.addEventListener('click', function () {

}, true)

button.click()

// button.removeEventListener('click', subscriber)
unsubcribe()

button.click()

class Publisher {
    subscribers = {
        'userCreated': [sendEmail, saveToDatabase]
    }

    subscribe(eventName, subscriber) {
        if (!this.subscribers[eventName]) {
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(subscriber);
    }

    unsubscribe(eventName, subscriber) {
        if (!this.subscribers[eventName]) return;
        this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber);
    }

    publish(eventName, data) {
        if (!this.subscribers[eventName]) return;
        this.subscribers[eventName].forEach(subscriber => subscriber(data));
    }
}

const publisher = new Publisher()

function sendEmail(user) {
    console.log(`Отправляем email для пользователя: ${user.name}`);
}

function saveToDatabase(user) {
    console.log(`Сохраняем пользователя в базу данных: ${user.name}`);
}

publisher.subscribe('userCreated', sendEmail)
publisher.subscribe('userCreated', saveToDatabase)

function createUser(name) {
    const user = {name};
    console.log('Пользователь создан!');
    publisher.publish('userCreated', user);
}

publisher.subscribe('userUpdated', sendEmail)

function updatedUser(name) {
    const user = {name};
    console.log('Пользователь изменен!');
    publisher.publish('userUpdated', user);
}

createUser('Artem')

//СОБЫТИЯ

const small = document.querySelector('#small')
const medium = document.querySelector('#medium')
const big = document.querySelector('#big')
const customButton = document.querySelector('#buttonId')
const link = document.querySelector('#linkId')

const handler = (event) => {
    // event.stopPropagation()
    console.log('target: ', event.target.id)
    console.log('currentTarget: ', event.currentTarget.id)
}

const handlerButton = (event) => {
    console.log('target: ', event.target.id)
}

const handlerLink = (event) => {
    event.preventDefault()
    console.log('link')
}


// small.onclick = handler

small.addEventListener('click', handler)
medium.addEventListener('click', handler)
big.addEventListener('click', handler)
customButton.addEventListener('click', handlerButton)
link.addEventListener('click', handlerLink)



