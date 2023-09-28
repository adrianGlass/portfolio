<template>
  <div class="text-white">
    <Slideout
      :bannerImage="project_category_response.data.value.data.collection_image.url"
      :heading="project_detail_response.data.value.data.heading"
      :isActive="project_detail_response.data.value.data.is_active"
      :content="project_detail_response.data.value.data.content"
      :tags="project_detail_response.data.value.data.tags"
      :stack="project_detail_response.data.value.data.stack"
      :link="project_detail_response.data.value.data.link.url"
    />  
    <div class="lg:w-portfolio-width text-white">
      <slice-zone wrapper="main" :components="components" :slices="project_detail_response.data.value.data.slices" />
    </div>
  </div>
</template>
  
<script setup>
  import { components } from "~/slices";
  
  const { client } = usePrismic()
  const { params } = useRoute()
  const project_category_response = await useAsyncData("project-category", () => {
    const response = client.getByUID('project_collection', params.id)
    return response
  });

  //get all associated projects
  let allProjects = project_category_response.data.value.data.projects.map((x)=> {
    return x.project_detail.uid
  })

  let project_detail_response = await useAsyncData("project-detail", () => {
      return client.getByUID('project_detail', params.project)
  });

  //check for 404s or if parent does not include requested category
  if(project_category_response.error.value || project_detail_response.error.value || !allProjects.includes(params.project)) {
    throw createError({ statusCode: '404', statusMessage: "Page not found" })
  }
  
  console.log(project_detail_response.data.value.data.slices)
</script>