<template>
  <div class="edu-body">
  <div class="educatedtraining">
    <Introduce
        :titleKey="'educatedtraining.title'"
        :descriptionKey="'educatedtraining.description'"
        :feature-cards="[
         {
            subtitleKey: 'educatedtraining.sections.card1.subtitle',
            partKey: 'educatedtraining.sections.card1.part'
          },
          {
            subtitleKey: 'educatedtraining.sections.card2.subtitle',
            partKey: 'educatedtraining.sections.card2.part'
          },
          {
            subtitleKey: 'educatedtraining.sections.card3.subtitle',
            partKey: 'educatedtraining.sections.card3.part'
          },

        ]"

    />
  </div>

</div>
</template>

<script name="EducationTrainingView" setup>
import Introduce from '@/components/Introduce.vue';
import CourseManager from '../components/CourseManager.vue'
import {ref} from 'vue'


// 示例课程数据
const courses = ref([
  {
    title: 'Course Title 1',
    description: 'This is a sample course description.',
    link: 'https://example.com/course1',
  },
  {
    title: 'Course Title 2',
    description: 'This is another sample course description.',
    link: 'https://example.com/course2',
  },
]);
 const handleCardClick = (event)=>{
    console.log(event.currentTarget); // 打印当前点击的元素
  const link = event.currentTarget.querySelector('a');
  if (link) {
    window.location.href = link.href;
  }
  };

</script>

<style>
.edu-body{
  background: linear-gradient(45deg, #0f172a, #1e293b);
}
.course-manager{
  /* background-color: #465672; */
  color: #fff;
  text-align: center;

}
.course-h2{
  background-color: #465672;
  margin-bottom: 5px;
}

.introduce{
  text-align: center;
}

.course ul{
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
  grid-auto-rows: minmax(290px, auto);
  gap: 20px;
  justify-items: center;



}
.course .card{

  border: 1px solid #eee;
  background-color: rgba(0, 51, 102, 0.5);
  text-align: center;
  color: #fff;
  box-shadow:5px 5px 10px gray;
  border-radius: 5px;
}
.card a{
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
  color: #fff;
  text-decoration-line: none;
}
.card :hover{

}

.course-manager{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>