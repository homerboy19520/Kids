<template>
  <div class="kid-card">
    <span>{{ description }}</span>
    <p>{{ text }}</p>
  </div>
</template>

<script>

export default {
  name: 'KidCard',
  props: {
    description: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }

}
</script>

<style lang="scss" scoped>
.kid-card {
  width: 100%;
  position: relative;
  outline: none;
  border: 1px solid #F1F1F1;
  border-radius: 4px;
  font-family: var(--font-montseratt);
  font-weight: 400;
  color: var(--color-black);
  font-size: 14px;
  line-height: 24px;


  & p,
  & span {
    font-family: var(--font-montseratt);
    font-weight: 400;
    color: var(--color-black);
    font-size: 14px;
    line-height: 24px;
  }

  & p {
    padding: 26px 16px 6px 16px;
  }

  & span {
    left: 16px;
    top: 50%;
    position: absolute;
    transform: scale(1) translateY(-20px);
    font-size: 13px;
    line-height: 16px;
    color: var(--color-grey);
  }
}
</style>
