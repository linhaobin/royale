import { EggAppConfig, PowerPartial } from 'egg'

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>

// app special config scheme
export interface BizConfig {
  sourceUrl: string
  royaleapiToken: string
}

export default (appInfo: EggAppConfig) => {
  const config = {} as PowerPartial<EggAppConfig> & BizConfig

  // app special config
  config.sourceUrl = `https://github.com/linhaobin/royale`

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1526387029347_581'

  // add your config here
  config.middleware = []

  // royale api token
  config.royaleapiToken = ''

  return config
}
