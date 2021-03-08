// const { constant } = require("lodash")

const dropdownComponent = document.querySelectorAll('.js-dropdown-component')

dropdownComponent.forEach((elm) => {
  const dropDown = elm.querySelector('.js-dropdown')

  const arrow = elm.querySelector('.js-dropdown-arrow')

  // const selections = elm.querySelector(".js-from-check-input")

  //  console.log("selections " + selections)

  //  console.log("dropdown " + dropDown)

  //  console.log('arrow ' + arrow)

  arrow.addEventListener('click', (e) => {
    toggle(list)
  })

  dropDown.addEventListener('click', (e) => {
    toggle(list)
    dropDown.addEventListener('blur', e => {
      list.classList.add('d-none')
    })
  })

  // Handle dropdown list here

  const list = elm.querySelector('.js-dropdown-list')

  const listElements = list.querySelectorAll('input')

  // console.log(listElements.length);

  listElements.forEach((elm) => {
    elm.addEventListener('click', (e) => {
      // console.log(e.target);
      dropDown.value = e.target.value
      toggle(list)
    })
  })
})

const toggle = (elm) => {
  elm.classList.toggle('d-none')
  elm.classList.toggle('dl-hide')
}