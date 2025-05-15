<template>
  <div class="largemodel">
    <!-- <h1>{{ $t('largemodel.title') }}</h1>
    <p>{{ $t('largemodel.description') }}</p>
    
    <p>{{ $t('largemodel.paragraph.part1') }}</p>
    <p>{{ $t('largemodel.paragraph.part2') }}</p>
    <p>{{ $t('largemodel.paragraph.part3') }}</p> -->

    <Introduce
        :titleKey="'largemodel.title'"
        :descriptionKey="'largemodel.description'"
        :feature-cards="[
          {                        
            subtitleKey: 'largemodel.sections.card1.subtitle',
            partKey: 'largemodel.sections.card1.part'
          },
          { 
            subtitleKey: 'largemodel.sections.card2.subtitle',
            partKey: 'largemodel.sections.card2.part'
          },
          {
            subtitleKey: 'largemodel.sections.card3.subtitle',
            partKey: 'largemodel.sections.card3.part'
          },
          
         
  ]"
    />
</div>
</template>

<script name="LargeModelView">

</script>

<style>
.largemodel{
  width: 100%;
}</style>