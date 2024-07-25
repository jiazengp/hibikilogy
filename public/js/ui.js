import { createApp, reactive } from 'https://unpkg.com/petite-vue?module'

const store = reactive({
  navScreenIsOpen: false,
  sortType: 'date',
  scrollY: 0,
  toggleNavScreen() {
    this.navScreenIsOpen = !this.navScreenIsOpen
  }
})

window.addEventListener('scroll', () => {
  store.scrollY = window.scrollY || document.documentElement.scrollTop;
});

const navScreenHandleClick = () => {
  if (event.target.tagName.toLowerCase() !== 'a') store.toggleNavScreen()
}

const sortingHandleSelect = () => {
  window.location.href = `/${store.sortType}`
}

createApp({
  store,
  navScreenHandleClick,
  sortingHandleSelect,
  get NavScreenClasses() {
    return {
      'open': store.navScreenIsOpen,
      'top': store.scrollY === 0
    }
  }
}).mount()
