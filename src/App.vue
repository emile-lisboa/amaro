<template>
<header>
  <div class="navbar" align="center">
    <div class="navbar__brand">
      <img src="../src/assets/file.svg" />
    </div>
    <div class="navbar__container">
      <ul class="navbar__menu">
        <li class="navbar__menu__item">
          <router-link to="/about">Sale</router-link>
        </li>
        <li class="navbar__menu__item"><a>Novidades</a></li>
        <li class="navbar__menu__item"><a>Roupas</a></li>
        <li class="navbar__menu__item"><a>Inverno</a></li>
        <li class="navbar__menu__item"><a>Sapatos</a></li>
        <li class="navbar__menu__item"><a>Acessórios</a></li>
        <li class="navbar__menu__item"><a>Beleza & Autocuidado</a></li>
        <li class="navbar__menu__item"><a>Bem-Estar & Saúde</a></li>
        <li class="navbar__menu__item"><a>Casa</a></li>
        <li class="navbar__menu__item"><a>Marcas</a></li>
      </ul>
    </div>
  </div>
</header>
<main>
  <router-view />
</main>
</template>

<style lang="scss">
*,
:after,
:before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: 400;
  line-height: 1.5;
}
a {
  text-decoration: none;
  white-space: nowrap;
}
#app {
  font-family: "Gotham", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.home {
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex: 4 4;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 2rem;
}
main {
  padding-top: 10.5rem;
}
.navbar {
  position: fixed;
  width: 100%;
  background: white;
  padding: 0 6rem;
  border-bottom: 1px solid lightgrey;

  &__brand {
    width: 8rem;
    height: 2rem;
    margin: 1.5rem;
  }

  &__container {
    width: 100%;
  }

  &__menu {
    width: 100%;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      display: inline-block;
      text-transform: uppercase;
      font-size: 0.875rem;
    }

    &__item:not(:first-child) {
      padding-left: 1.5rem;
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
