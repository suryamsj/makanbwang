<script>
    import "bootstrap/dist/css/bootstrap.min.css";
    import "bootstrap-icons/font/bootstrap-icons.css";
    import "$lib/assets/scss/main.css";
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<main class="flex-shrink-0">
    <Header />
    <slot />
    <Footer />
</main>
