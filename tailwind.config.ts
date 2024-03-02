import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    screens: {
      'xs': '340px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}