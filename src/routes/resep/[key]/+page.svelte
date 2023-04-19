<script>
    import { fly } from "svelte/transition";
    import { page } from "$app/stores";
    export let data;
</script>

<svelte:head>
    <title>MakanBwang - {data.results.title}</title>
    <meta name="description" content={data.results.desc} />
</svelte:head>

<div
    in:fly={{ y: -50, duration: 450, delay: 550 }}
    out:fly={{ y: -50, duration: 450 }}
>
    <section class="detail_food">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="box_inset">
                        <a href={$page.url.href}
                            ><h1 class="section_title">
                                {data.results.title}
                            </h1></a
                        >
                        <span class="badge"
                            ><i class="bi bi-stopwatch-fill" />
                            {data.results.times}</span
                        >
                        {#if data.results.difficulty === "Mudah"}
                            <span class="badge"
                                ><i class="bi bi-bar-chart-fill" />
                                {data.results.difficulty}</span
                            >
                        {:else if data.results.difficulty === "Cukup Rumit"}
                            <span class="badge"
                                ><i class="bi bi-bar-chart-fill" />
                                {data.results.difficulty}</span
                            >
                        {:else}
                            <span class="badge"
                                ><i class="bi bi-bar-chart-fill" /> Tidak diketahui</span
                            >
                        {/if}
                        <span class="badge"
                            ><i class="bi bi-archive-fill" />
                            {data.results.servings}</span
                        >
                        <span class="badge">
                            <i class="bi bi-person-fill" />
                            {data.results.author.user} -
                            <i class="bi bi-calendar-fill" />
                            {data.results.author.datePublished}
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="box">
                        {#if data.results.thumb !== null}
                            <img
                                class="thumb"
                                src={data.results.thumb}
                                alt="Gambar {data.results.title}"
                            />
                        {/if}
                        <p>{data.results.desc}</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-md-12 col-12">
                    <div class="box">
                        <div class="row">
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="box_inset text-center">
                                    <h2>Bahan paling penting</h2>
                                    {#each data.results.needItem as item}
                                        <div class="box_title">
                                            <img
                                                class="img-fluid"
                                                src={item.thumb_item}
                                                alt="Gambar Item"
                                            />
                                            <h3 class="need_item">
                                                {item.item_name}
                                            </h3>
                                        </div>
                                    {:else}
                                        <!-- empty list -->
                                    {/each}
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-12 col-12">
                                <div class="box_inset">
                                    <div class="box_title">
                                        <h2>Bahan yang dibutuhkan :</h2>
                                    </div>
                                    <ul>
                                        {#each data.results.ingredient as item}
                                            <li>{item}</li>
                                        {:else}
                                            <!-- empty list -->
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-12">
                                <div class="box_inset">
                                    <div class="box_title">
                                        <h2>Cara memasak :</h2>
                                    </div>
                                    {#each data.results.step as item}
                                        <p class="step">{item}</p>
                                    {:else}
                                        <!-- empty list -->
                                    {/each}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
