<script>
    import { fly } from "svelte/transition";
    export let data;
</script>

<svelte:head>
    <title>MakanBwang</title>
    <meta
        name="description"
        content="MakanBwang adalah website yang berisi resep makan, yang dimana resep tersebut diambil dari API."
    />
</svelte:head>

<div
    in:fly={{ y: -50, duration: 450, delay: 550 }}
    out:fly={{ y: -50, duration: 450 }}
>
    <section class="food">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="box_title">
                        <p>Cari berdasarkan kategori :</p>
                        {#each data.categories.results as item}
                            <span class="badge">
                                <a href="/kategori/{item.key}">
                                    <i class="bi bi-tags-fill" />
                                    {item.category}
                                </a>
                            </span>
                        {:else}
                            <span>Kategori tidak ditemukan</span>
                        {/each}
                    </div>
                </div>
            </div>
            <div class="row">
                {#each data.recipes.results as item}
                    <div class="col-lg-6 col-md-6 col-12">
                        <a href="/resep/{item.key}">
                            <div class="card">
                                <img
                                    class="card-img-top"
                                    src={item.thumb}
                                    alt={item.title}
                                />
                                <div class="card-body">
                                    <h1>{item.title}</h1>
                                    <span class="badge"
                                        ><i class="bi bi-stopwatch-fill" />
                                        {item.times}</span
                                    >
                                    {#if item.difficulty === "Mudah"}
                                        <span class="badge"
                                            ><i class="bi bi-bar-chart-fill" />
                                            {item.difficulty}</span
                                        >
                                    {:else if item.difficulty === "Cukup Rumit"}
                                        <span class="badge"
                                            ><i class="bi bi-bar-chart-fill" />
                                            {item.difficulty}</span
                                        >
                                    {:else}
                                        <span class="badge"
                                            ><i class="bi bi-bar-chart-fill" /> Tidak
                                            diketahui</span
                                        >
                                    {/if}
                                    <span class="badge"
                                        ><i class="bi bi-archive-fill" />
                                        {item.serving}</span
                                    >
                                </div>
                            </div>
                        </a>
                    </div>
                {:else}
                    <div class="col-lg-12 col-md-12 col-12">
                        <div class="card">
                            <div class="card-body">
                                <h1>Resep tidak ditemukan</h1>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>
