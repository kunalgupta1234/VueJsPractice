const app = Vue.createApp({
    data () {
      return {
        url: 'https://www.amazon.in/',
        showBooks: true,
        books: [
          {
            title: 'book 1 title',
            author: 'book 1 author',
            img: 'asset/1.jpg',
            isFav: true
          },
          {
            title: 'book 2 title',
            author: 'book 2 author',
            img: 'asset/2.jpg',
            isFav: false
          },
          {
            title: 'book 3 title',
            author: 'book 3 author',
            img: 'asset/3.jpg',
            isFav: false,
          }
        ]
      }
    },
    methods: {
      toggleShowBooks () {
        this.showBooks = !this.showBooks
      },
      toggleIsFav (book) {
        book.isFav = !book.isFav
      }
    },
    computed:{
      filteredbooks(){
        return this.books.filter((book)=>book.isFav)
      }
    }
  })
  
  app.mount('#app')
  