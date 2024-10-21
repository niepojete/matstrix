import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default <Partial<Config>>{
    theme: {
        screens: {
            xs: '540px',
            sm: '768px',
            md: '992px',
            lg: '1200px',
            xl: '1680px',
            '2xl': '1680px',
        },
        extend: {
            gap: {
                '16': '4rem',
                '24': '6rem',
            }
        }
    },
    content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
    plugins: [typography()],
}