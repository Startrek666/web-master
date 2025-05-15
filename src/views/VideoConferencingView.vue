<template>
  <div class="videoconferencing">
    <Introduce
        :titleKey="'videoconferencing.title'"
        :descriptionKey="'videoconferencing.description'"
        :feature-cards="[
         {                        
            subtitleKey: 'videoconferencing.sections.card1.subtitle',
            partKey: 'videoconferencing.sections.card1.part',
          
         
          },
          { 
            subtitleKey: 'videoconferencing.sections.card2.subtitle',
            partKey: 'videoconferencing.sections.card2.part'
          },
          {
            subtitleKey: 'videoconferencing.sections.card3.subtitle',
            partKey: 'videoconferencing.sections.card3.part'
          },
          
        ]"
   
    />
   
   
  </div>
</template>

<script name="VideoConferencingView">

</script>

<style>
.videoconferencing{
  width: 100%;
}
</style>