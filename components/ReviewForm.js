app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>

        <label htmlFor="name">Name : </label>
        <input id="name" v-model="name"/>
        
        <label htmlFor="review">Review : </label>
        <textarea id="review" v-model="review"></textarea>
        
        <label htmlFor="rating">Rating : </label>
        <select id="rating" v-model.number="rating">
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
        </select>
        <label htmlFor="recommend">Would you recommend this product ?</label>
        <select name="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>
        
        
        <input class="button" type="submit" value="Submit"/>
        
    </form>`, 

    data() {
        return {
            name: '',
            review: '',
            rating: null,
            recommend: null,
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' || this.review === '' || this.rating === null) {
                alert('Review is incomplete. Please fill out every field.')
                return
              }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null
            this.recommend = null
        }
    }
})