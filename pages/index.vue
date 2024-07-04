<template>
  <NavbarSection />
  <div>
    <ProfileSection />
    <ProjectsSection />
  </div>
</template>

<script>
import ProfileSection from '../components/ProfileSection.vue';
import ProjectsSection from '~/components/ProjectsSection.vue';
import NavbarSection from '../components/NavbarSection.vue';

export default {
  components: {
    ProfileSection,
    ProjectsSection,
  }
}
</script>./Index.vue
