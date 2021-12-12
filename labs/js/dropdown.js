const dropdownComponent = document.querySelectorAll('.js-dropdown-component')

dropdownComponent.forEach((elm) => {
  const dropDown = elm.querySelector('.js-dropdown')

  const dataType = elm.dataset.type || 'input'

  const arrow = elm.querySelector('.js-dropdown-arrow')

  arrow.addEventListener(
    'click',
    (e) => {
      toggle(list)
    },
    false
  )

  dropDown.addEventListener(
    'click',
    (e) => {
      toggle(list)
      dropDown.addEventListener('blur', (e) => {})
    },
    false
  )

  // Handle dropdown list here

  const list = elm.querySelector('.js-dropdown-list')

  const listElements = list.querySelectorAll(dataType)

  listElements.forEach((elm) => {
    elm.addEventListener('click', (e) => {
      // eslint-disable-next-line no-console
      console.log(e.target)
      if (dataType == 'input') {
        dropDown.value = e.target.value
      } else {
        dropDown.value = e.target.textContent
      }
      toggle(list)
    })
  })
})

const toggle = (elm) => {
  elm.classList.toggle('d-none')
  elm.classList.toggle('dl-hide')
}
