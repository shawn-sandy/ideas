<template>
    <section>
        <slot name="default">
            {{ data }}
        </slot>
    </section>
</template>

<script>
    import Axios from "axios"
    export default {
        props: {
            tokenUrl: {
                type: String,
                default: "/color.json"
            },
        },
        data: () => ({
            data: null,
            loading: true,
            message: "Loading...",
            error: false
        }),
        mounted() {
            Axios
                .get(this.tokenUrl)
                .then(({ data }) => {
                    this.data = data;
                    this.loading = false;
                })
                .catch(err => {
                    //console.log("Sorry error", err);
                    this.error = true;
                    this.$nextTick(() => {
                        this.message = err;
                        this.loading = false;
                    });
                })
                .finally(
                    () => {
                        if (this.error) {
                            this.$nextTick(function () {
                                this.loading = false;
                            });
                        }
                    } //   // log
                );
        },

    }
</script>

<style lang="scss">

</style>