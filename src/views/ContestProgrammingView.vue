<script name="ContestProgrammingView">
import Introduce from '@/components/Introduce.vue';
</script>

<template>
  <div class="contest">
    <!-- <h1>{{ $t('contest.title') }}</h1>
    <p>{{ $t('contest.description') }}</p>
    
    <p>{{ $t('contest.paragraph.part1') }}</p>
    <p>{{ $t('contest.paragraph.part2') }}</p>
    <p>{{ $t('contest.paragraph.part3') }}</p>
    <p>{{ $t('contest.paragraph.part4') }}</p> -->
    <Introduce
        :titleKey="'contest.title'"
        :descriptionKey="'contest.description'"
        :feature-cards="[
          {                        
            subtitleKey: 'contest.sections.card1.subtitle',
            partKey: 'contest.sections.card1.part'
          },
          { 
            subtitleKey: 'contest.sections.card2.subtitle',
            partKey: 'contest.sections.card2.part'
          },
          {
            subtitleKey: 'contest.sections.card3.subtitle',
            partKey: 'contest.sections.card3.part'
          },

  ]"
    />
</div>
</template>



<style>
.contest{
  /* background-color: #cfdaed; */
  width: 100%;
}
</style>