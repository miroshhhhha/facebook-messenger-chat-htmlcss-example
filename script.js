let getMessages = async () =>{
    let response = await fetch('https://kool.krister.ee/chat/TAB')
    let messages = await response.json()
    console.log(messages)
    return messages
}

let renderMessages = async () =>{
    let messages = await getMessages()
    let container = document.querySelector('.messages')
    messages.forEach(message => {
        let div = document.createElement('p')
        div.className = 'user-a'
        div.innerHTML = message.message
        container.appendChild(div)
    })
}

renderMessages()

let sendMessage = async () =>{
    let message = document.querySelector('.message').value
    if (message && message != ''){
        let element = document.createElement('p')
        element.className = 'user-b'
        element.innerHTML = message
        document.querySelector('.messages').appendChild(element)
    }
}

let messages = document.querySelector('.messages')
let latest = messages.lastElementChild.value

console.log(latest)
