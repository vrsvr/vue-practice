const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['Заметка 1', 'Заметка 2']
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(i) {
      this.notes.splice(i, 1)
    }
  }
}

Vue.createApp(App).mount('#app')
