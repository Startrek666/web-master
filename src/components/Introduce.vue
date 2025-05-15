<script>

export default {
    props: {
        titleKey: {  
            type: String,
            required: true
        },
        descriptionKey: {  
            type: String,
            required: false
        },
        // subtitleKey1: {
        //     type: String,
        //     required: false
        // },
        // partKey1: {
        //     type: String,
        //     required: false
        // },
        // subtitleKey2: {
        //     type: String,
        //     required: false
        // },
        // partKey2: {
        //     type: String,
        //     required: false
        // }
        featureCards: {
            type: Array,
            default: () => [],
            validator: (arr) => arr.every(item => 
                item.subtitleKey && item.partKey           
            )
        }
        
        

    }
}

</script>
<template>
<section class="hero-section">
        <div class="main-heading">
            <h1>{{ $t(titleKey) }}</h1>
            <p v-if="descriptionKey">{{ $t(descriptionKey) }}</p>
        </div>

         <div class="features">
      <div 
        v-for="(card, index) in featureCards"
        :key="index"
        class="feature-card"
      >
     
      <h3>{{ $t(card.subtitleKey) }}</h3>
        <p>{{ $t(card.partKey) }}</p>
    
      </div>
    </div>
    </section>
</template>
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

        /* 主要内容区域 */
.hero-section {
    padding: 4rem 5%;
    background: linear-gradient(45deg, #0f172a, #1e293b);
    color: white;
    width: 100%;
}

.main-heading {
    text-align: center;
    margin-bottom: 3rem;
}

.main-heading h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(90deg, #00b4d8, #90e0ef);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.main-heading p {
    color: #94a3b8;
    font-size: 1.1rem;
    /* max-width: 610px; */
    margin: 0 auto;
}

       
.features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 4rem;
}

.feature-card {
    background: rgba(255,255,255,0.05);
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-card h3 {
    color: #00b4d8;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.8rem;
}

.feature-card p {
    color: #94a3b8;
    line-height: 1.6;
}

</style>
