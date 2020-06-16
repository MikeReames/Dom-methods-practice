const mainElement = document.querySelector('body')

const removeButton = document.createElement('button')
let buttonText = document.createTextNode('remove')
removeButton.append(buttonText)
mainElement.append(removeButton)

const funnyPic = document.createElement('img')
funnyPic.src = "https://img.ifunny.co/images/340e832cf41c168e73bc1c254fe7733a5af34a715efb2c3ab163723f5558efd2_1.jpg"
mainElement.append(funnyPic)

const website = document.createElement('a')
website.href = 'https://www.youtube.com/watch?v=adR9r-iZzTM'
let websiteText = document.createTextNode('Click here!')
website.append(websiteText)
mainElement.append(website)

removeButton.addEventListener("click", function() {
    alert ('good bye!')
    mainElement.remove()

})