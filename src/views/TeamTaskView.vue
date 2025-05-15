<template>
  <div class="teamtask">
    <!-- <h1>{{ $t('teamtask.title') }}</h1>
    <p>{{ $t('teamtask.description') }}</p>
    
    <p>{{ $t('teamtask.paragraph.part1') }}</p>
    <p>{{ $t('teamtask.paragraph.part2') }}</p>
    <p>{{ $t('teamtask.paragraph.part3') }}</p> -->

    <Introduce
        :titleKey="'teamtask.title'"
        :descriptionKey="'teamtask.description'"
        :feature-cards="[
          {                        
            subtitleKey: 'teamtask.sections.card1.subtitle',
            partKey: 'teamtask.sections.card1.part'
          },
          { 
            subtitleKey: 'teamtask.sections.card2.subtitle',
            partKey: 'teamtask.sections.card2.part'
          },
          {
            subtitleKey: 'teamtask.sections.card3.subtitle',
            partKey: 'teamtask.sections.card3.part'
          },

  ]"
    />
</div>
</template>

<script name="TeamTaskView">

</script>

<style>
.teamtask{
  width: 100%;
}
</style>