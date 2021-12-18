<template>
    <div
        class="bg-white bg-gray-400 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl p-10"
    >
        <div>
            <span
                class="inline-flex items-center justify-center p-2 bg-gray-200 rounded-md shadow-lg"
            >
                <img src="https://picsum.photos/200/200?random=2" />
            </span>
        </div>

        <div
            class="bg-white bg-gray-200 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl mx-auto w-96 mt-10"
        >
            <h3
                class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight"
            >
                Post: {{ $route.params.id }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2 text-base">
                {{ post.title }}
            </p>
        </div>

        <h3
            class="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight text-lg"
        ></h3>

        <div
            class="bg-white bg-gray-100 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl mx-auto w-300 mt-10"
        >
            {{ post.body }}
        </div>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            post: {},
        };
    },
    created() {
        fetch(
            `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.post = data;
            });
    },
};
</script>
