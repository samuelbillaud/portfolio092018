import i18n from 'hyperapp-i18n'

export const { state, actions } = i18n({
    'zh-CN': {
        hello: '你好'
    },
    'en-US': {
        hello: 'Hello'
    }
}, 'en-US');