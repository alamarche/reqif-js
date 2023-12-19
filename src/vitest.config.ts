import { defineConfig, defaultExclude } from 'vitest/config'

export default defineConfig(

    {
        test: {
            exclude: (defaultExclude as Array<string>).concat("**/out/**"),
            watchExclude: ["**/node_modules/**", "**/dist/**", "**/out/**"]
        }
    })