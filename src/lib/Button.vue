<template>
<button class="gvui-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="gvui-loadingIndicator"></span>
    <slot />
</button>
</template>

<script>
import {
    computed
} from 'vue'
export default {
    props: {
        theme: {
            type: String,
            default: "button"
        },
        size: {
            type: String,
            default: "normal"
        },
        level: {
            type: String,
            default: "normal"
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const {
            theme,
            size,
            level
        } = props
        const classes = computed(() => {
            return {
                [`gvui-theme-${theme}`]: theme,
                [`gvui-size-${size}`]: size,
                [`gvui-level-${level}`]: level
            }
        })
        return {
            classes
        }
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$danger:#ff4d4f;
$text:rgba(0, 0, 0, .85);
$grey: #f5f5f5;
$greyText: rgba(0, 0, 0, .25);

.gvui-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);
    transition: background 250ms;

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.gvui-theme-button {
        border-color: transparent;
        box-shadow: none;
        background-color: $blue;
        color: #fff;

        &:hover,
        &:focus {
            background-color: lighten($blue, 5%)
        }

        &.gvui-level-main {
            background: $blue;
            color: white;
            border-color: $blue;

            &:hover,
            &:focus {
                background: darken($blue, 10%);
                border-color: darken($blue, 10%);
            }
        }

        &.gvui-level-danger {
            background: $danger;
            border-color: $danger;
            color: white;

            &:hover,
            &:focus {
                background: darken($danger, 10%);
                border-color: darken($danger, 10%);
            }
        }
    }

    &.gvui-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%)
        }

        &.gvui-level-danger {
            color: $danger;

            &:hover,
            &:focus {
                color: darken($danger, 10%);
            }
        }
    }

    &.gvui-theme-text {
        border: 1px solid #d9d9d9;
        box-shadow: none;
        background: #fff;
        color: $text;

        &:hover,
        &:focus {
            color: $blue;
            border: 1px solid;
        }

        &.gvui-level-main {
            color: $blue;
            border: 1px solid;

            &:hover,
            &:focus {
                color: darken($blue, 10%);
            }
        }

        &.gvui-level-danger {
            color: $danger;
            border: 1px solid;

            &:hover,
            &:focus {
                color: darken($danger, 10%);
            }
        }
    }

    &.gvui-size-big {
        font-size: 24px;
        height: 48px;
        padding: 0 16px
    }

    &.gvui-size-small {
        font-size: 12px;
        height: 24px;
        padding: 0 4px;
    }

    &.gvui-theme-button {
        &[disabled] {
            cursor: not-allowed;
            background: $grey;
            color: $greyText;

            &:hover {
                border-color: $grey;
            }
        }
    }

    &.gvui-theme-link,
    &.gvui-theme-text {
        &[disabled] {
            cursor: not-allowed;
            color: $greyText;
        }
    }

    >.gvui-loadingIndicator {
        width: 14px;
        height: 14px;
        display: inline-block;
        margin-right: 4px;
        border-radius: 8px;
        border-color: $blue $blue $blue transparent;
        border-style: solid;
        border-width: 2px;
        animation: gvui-spin 1s infinite linear;
    }

    &.gvui-theme-button {
        >.gvui-loadingIndicator {
            border-color: #fff #fff #fff transparent;
        }
    }
}

@keyframes gvui-spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
