<template>
<section class="bg-white py-8 px-16">
    
    <div class="container mx-auto flex items-center flex-wrap pt-4 pb-12">
        <nav id="posts" class="w-full z-30 top-0 px-6 py-1">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                <div class="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Posts</div>
 
                <!-- Search bar -->
                <div class="border-2 rounded">
                    <input v-model="keyword" type="text" placeholder="Search title" class="px-4 py-2 w-80" />
                </div>
 
                <div class="flex items-center">
                    <a href="#" title="sort by ID" class="pl-3 inline-block no-underline hover:text-black" @click.prevent = "changeSort">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current hover:text-green-700 transform transition-transform duration-500 ease-in-out" :class="{'rotate-180' : isAsc}">
                            <path d="M6 16C6 16.5523 6.44772 17 7 17H17C17.5523 17 18 16.5523 18 16C18 15.4477 17.5523 15 17 15H7C6.44772 15 6 15.4477 6 16Z" fill="currentColor"></path>
                            <path d="M8 12C8 12.5523 8.44772 13 9 13H15C15.5523 13 16 12.5523 16 12C16 11.4477 15.5523 11 15 11H9C8.44772 11 8 11.4477 8 12Z" fill="currentColor"></path>
                            <path d="M11 9C10.4477 9 10 8.55229 10 8C10 7.44771 10.4477 7 11 7H13C13.5523 7 14 7.44771 14 8C14 8.55229 13.5523 9 13 9H11Z" fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </nav>
    </div>
 
    <!-- Loop posts here -->
    <div class="flex flex-wrap">
            <v-for v-for="post in currentPagePosts" v-bind:key="post.id" class="h-48 w-1/3 xl:w-1/4 p-6 flex flex-col hover:grow hover:shadow-lg border border-gray-300">
                <a v-bind:href="'/posts/' + post.id" class="">
                    <div class="w-48 h-20 text-green-600 text-6xl font-bold mx-auto text-center">{{ post.id }}</div>
                    <div class="pt-3 flex items-center justify-between pb-5">
                        <p>{{ post.title }}</p>
                         <img :src= "baseurl()">    
                    </div>
                    <div> </div>
                   
           
                </a>
                </v-for>
            </div>
    
 
    <!-- Page numbers - Dynamically calculated based on how many posts in array/12 -->
    <div class="flex w-full justify-center items-center gap-x-4">
        <div v-for="page in Array.from({length: totalPages}, (v,k) => k+1)" :key="page" 
            @click="goToPage(page)"
            class="cursor-pointer mt-8 w-8 h-8 border-b border-black flex justify-center items-center 
            hover:bg-green-600 hover:text-white hover:cursor-pointer"
            :class="{'bg-green-700 text-white border-none' : Number(pageNumber) == page}" >
             
            {{ page }}
            
            </div>
    </div>
 
    </section>
 
</template>
 
<script>
export default {
   
    data: function () {
        return {
            posts: [],
            itemsPerPage: 12,
            current: 1,
            keyword: '',
            isAsc: true,
        }
    },
    

    created () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => {
                this.posts = data;
            })

    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredPosts.length/this.itemsPerPage)
        },
        filteredPosts() {
            const results = this.posts.filter((post) => {
                return this.keyword ? post.title.toLowerCase().includes(this.keyword.toLowerCase()) : true
            })
            // Sort the output by post id, depending on $isAsc value
            const sortValue = this.isAsc
            return results.sort(function(postA, postB) {
                return sortValue ? postA.id - postB.id : postB.id - postA.id
            })
        },

    pageNumber(){
        return this.$route.query.page || 1;
    },
    
    currentPagePosts: function () {
        const pageNumber = this.pageNumber-1;
        const start = pageNumber * this.itemsPerPage; 
        const end = this.pageNumber * this.itemsPerPage;
        return this.filteredPosts.slice(start, end);
    }
    },
 
    methods: {
        changeSort() {
            this.isAsc = !this.isAsc
        },
         goToPage(pageNumber){
            this.$router.push({path: 'posts', query: {page : pageNumber}})
        },
        rand()
        { 
            return Math.floor(Math.random()*100)
        }, 
        baseurl()
        { 
            var myvar = 'https://picsum.photos/75/75?random=';
            var newvar = myvar + this.rand();
            console.log(this.rand());
            console.log(newvar);
            return newvar;
        }, 
        
    }
  
}


</script>
