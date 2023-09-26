<template>
    <span>ID: {{ $route.params }}</span>
  </template>
  
  <script setup>
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
  </script>