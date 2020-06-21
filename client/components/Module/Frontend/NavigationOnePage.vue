
<template>
<nav class="navbar navbar-expand-lg  fixed-top"
    id="mainNav">
    <div class="container">
        <a class="navbar-brand"
            href="#page-top">
            <logo> </logo>
        </a>
        <button class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse"
            id="navbarResponsive">
            <ul class="navbar-nav ml-auto my-2 my-lg-0"
                v-scroll-spy-active="{selector: 'li a', class: 'active'}"
                v-scroll-spy-link>
            </ul>
        </div>
        <div class="collapse navbar-collapse"
            id="navbarCall">
            <ul class="navbar-nav  ml-auto my-2 my-lg-0">
                <li class="nav-item nav-action">
                    <b-btn href="#"
                        variant="theme1"> Visit Website</b-btn>

                </li>

            </ul>
        </div>
    </div>
</nav>
</template>
<script>
import Logo from '@/components/Base/NavBar/Logo'

export default {
  components: {
    Logo
  }
}

</script>


<style lang="scss">
@import "~@@/client/styles/helpers/_bs-breakpoint-mixin.scss";

// Base styling for the navbar
#mainNav {
  background-color: #fff;
  padding: 1rem 0.6rem;

  transition: background-color 0.2s ease;
  margin-right: 10px;

  .navbar-nav {
    .nav-item {
      .nav-action .btn {
      }
      a.btn {
        font-weight: 500;
        width: 90px;

        &:hover span.btn-label {
          background: rgba(255, 255, 255, 0.08);
        }

        span.btn-label {
          padding: 0 8px 0 8px;

          background: rgba(255, 255, 255, 0.78);
          i {
            font-size: 20px !important;
            line-height: 30px;
          }
        }
      }
      .nav-link {
        font-size: 0.8rem;
        font-weight: 500;
        padding: 0.75rem 0;

        &:hover,
        &:active {
          color: var(--theme1) !important;
        }
        &.active {
          color: var(--theme1) !important;
        }
      }
    }
  }
  @include media-breakpoint-up(lg) {
    // Base styling for the navbar - screen sizes greater than the large breakpoint
    box-shadow: none;
    background-color: transparent;

    .navbar-brand {
      color: var(--theme1-mixed-1);
      &:hover {
        color: var(--theme1);
      }
    }

    .logo {
      .text1 {
        color: var(--theme1-mixed-1) !important;
      }
      .icon,
      .text2 {
        color: var(--theme1) !important;
      }
    }
    .navbar-nav {
      .nav-item {
        .nav-link {
          color: var(--theme1);
          padding: 0 1rem;
          &:hover {
            color: var(--theme1);
          }
        }
        &:last-child {
          .nav-link {
            padding-right: 0;
          }
        }
      }
    }
    // Navbar styling applied when the page is scrolled
    &.navbar-scrolled {
      background-color: #fff;
      padding-bottom: 0.9rem;
      padding-top: 0.9rem;
      box-shadow: var(--theme-shadow);
      .logo {
        .text1 {
          color: var(--theme1-mixed-1) !important;
        }
        .icon,
        .text2 {
          color: var(--theme1) !important;
        }
      }

      .navbar-brand {
        color: var(--primary-mixed-1);
        &:hover {
          color: var(--primary);
        }
      }
      .navbar-nav {
        .nav-item {
          .nav-link {
            color: var(--theme1);

            &:hover,
            &:active {
              color: var(--primary);
            }
            &.active {
              color: var(--primary) !important;
              transition: opacity 1s;
            }
          }
        }
      }
    }
  }
}

</style>


