<style>
    @import url('https://fonts.googleapis.com/css2?family=Monofett&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Mohave&display=swap');
</style>

<script>
    let query = ''
    let location = 'San Francisco, California, United States';
    let google_domain = 'google.com';

    let searchResults = null;
    let error = null;

    async function performSearch() {
        try {       
            const response = await fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&google_domain=${encodeURIComponent(google_domain)}`)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            searchResults = await response.json();
            console.log("Response: ", searchResults);
        } catch (e) {
            error = e.message;
        }
    }


</script>

<div style="display: flex; flex-direction: column; align-items: center;">
    <h1 style="font-family: 'Monofett', cursive; font-size: 48px; animation: colorChange 10s infinite step-end;">Shopfront</h1>
    <style>
        @keyframes colorChange {
            0%, 49% {color: #000000;}
            /* 33% {color: #4DED24;} */
            50%, 100% {color: #ED7924;}
            /* 100% {color: #7D24ED;} */
        }
    </style>
    <input style="font-family: 'Mohave'; font-size: 24px; height: 24px; width: 500px;" type="text" bind:value={query} on:input={performSearch} placeholder="Enter search query">
    <br/>

    {#if searchResults?.shopping_results}
    <div style="font-family: 'Mohave'">
        <h2> Search Results:</h2>
        <!-- <pre>{JSON.stringify(searchResults, null, 2)}</pre> -->
        <div class="shopping-results">
            {#each searchResults.shopping_results as item}
            <div class="item">
                <img src={item.thumbnail} alt={item.title} class="item-image" />
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <p>Source: {item.link}</p>
            </div>
            {/each}
        </div>
    </div>
    {/if}
</div>

{#if error}
<p class="error">Error: {error}</p>
{/if}