import { defineStore } from 'pinia'

export const useStore = defineStore('data', {
    // state
    state: () => ({
        loading: false,
        showMenu: false,
        // todo future move all data to api and fetch
        menu: [{
                url: "/",
                title: 'Web Dev'
            },{
                url: "/logo",
                title: 'Logo'
            },{
                url: "/print",
                title: 'Print'
            },{
                url: "/uxui",
                title: 'UX/UI'
            },{
                url: "/about",
                title: 'About Me'
            },
        ],
        webdev: [{
                title: "Hybrid Mobile Apps",
                list: [{
                        android: "https://play.google.com/store/apps/details?id=com.interactivesystems.portalgastroApp",
                        ios: "https://apps.apple.com/pl/app/portal-gastro/id1582989599?l=pl&platform=iphone",
                        title: "Portal Gastro App",
                        desc: "Ionic 4",
                        time: "2021 -"
                    },{
                        android: "https://play.google.com/store/apps/details?id=com.interactivesystems.voxPartnersClub",
                        ios: "https://apps.apple.com/pl/app/vox-partners-club/id1461741245?l=pl&platform=iphone",
                        title: "VOX Partners Club",
                        desc: "Ionic 4",
                        time: "2019 -"
                    },{
                        ios: "https://apps.apple.com/pl/app/sprawd%C5%BA-promile/id548935618?l=pl&platform=iphone",
                        title: "Sprawdź Promile",
                        desc: "Ionic 5",
                        time: "2019 -"
                    },
                ]
            },{
                title: "Web Apps",
                list: [{
                        web: "https://portalgastro.pl",
                        title: "Portal Gastro",
                        desc: "Laravel, Vue",
                        time: "2021 -"
                    },{
                        web: "https://voxpartnersclub.pl",
                        title: "VOX Partners Club",
                        desc: "Ionic 4 as PWA",
                        time: "2019 -"
                    },{
                        web: "https://www.abcalkoholu.pl",
                        title: "ABC Alkoholu",
                        desc: "Wordpress, Vue",
                        time: "2019 -"
                    },{
                        web: "https://skoda.vwfs.pl",
                        title: "Skoda Nowa Zawsze",
                        desc: "NUXT",
                        time: "2020 -"
                    },{
                        web: "https://seat.vwfs.pl",
                        title: "Seat Nowy Zawsze",
                        desc: "NUXT",
                        time: "2020 -"
                    },{
                        web: "https://volkswagen.vwfs.pl",
                        title: "VW Nowy Zawsze",
                        desc: "NUXT",
                        time: "2021 -"
                    },{
                        web: "https://audinowezawsze.pl",
                        title: "Audi Nowe Zawsze",
                        desc: "NUXT",
                        time: "2022 -"
                    },{
                        web: "https://cupranowazawsze.pl",
                        title: "Cupra Nowa Zawsze",
                        desc: "NUXT",
                        time: "2023 -"
                    },{
                        web: "https://www2.vwuzytkowe.pl/iframe/kalkulator-pakiety",
                        title: "VW Kalkulator",
                        desc: "PHP, Vue",
                        time: "2019 -"
                    },{
                        web: "https://www.szpitalswwojciecha.pl",
                        title: "Szpital św.Wojciech",
                        desc: "Wordpress",
                        time: "2016 -"
                    }
                ]
            }
        ],
        companies: [{
                image: "/img/svg/logo-kp.svg",
                title: 'Logo Kompania Piwowarska'
            },{
                image: "/img/svg/logo-vox.svg",
                title: 'Logo VOX'
            },{
                image: "/img/svg/logo-brown-forman.svg",
                title: 'Logo Brown Forman'
            },{
                image: "/img/svg/logo-unilever.svg",
                title: 'Logo Unilever'
            },{
                image: "/img/svg/logo-vw.svg",
                title: 'Logo VW'
            },{
                image: "/img/svg/logo-skoda.svg",
                title: 'Logo Skoda'
            },{
                image: "/img/svg/logo-seat.svg",
                title: 'Logo Seat'
            },{
                image: "/img/svg/logo-audi.svg",
                title: 'Logo Audi'
            },
            // {
            //     image: "/img/svg/logo-cupra.svg",
            //     title: 'Logo Cupra'
            // },
        ],
        logofolio: [{
                image: "/img/logo-hello.png",
                title: 'Logo Hello.com'
            },{
                image: "/img/logo-bro.png",
                title: 'Logo Bro'
            },{
                image: "/img/logo-kolekcjoner.png",
                title: 'Logo Kolekcjoner Korzyści'
            },{
                image: "/img/logo-sarzyna.png",
                title: 'Logo Partner Sarzyna PRO'
            },{
                image: "/img/logo-oxygen.png",
                title: 'Logo Oxygen'
            },{
                image: "/img/logo-formula.png",
                title: 'Logo Formuła Zysku'
            },{
                image: "/img/logo-pacyfik.png",
                title: 'Logo Pacyfik'
            },{
                image: "/img/logo-auron.png",
                title: 'Logo Auron'
            },{
                image: "/img/logo-gaming.png",
                title: 'Logo Gaming Poland'
            },{
                image: "/img/logo-piramida.png",
                title: 'Logo Piramida Carstensza'
            },{
                image: "/img/logo-frument.png",
                title: 'Logo Frument Project'
            },{
                image: "/img/logo-expo.png",
                title: 'Logo Expo z Polski'
            },
        ],
        prints: [{
                title: "art exhibitions",
                list: [{
                        image: "/img/print-lair-du-temps.jpg",
                        title: "Poster l'air du temps"
                    },{
                        image: "/img/print-mon-blanc.jpg",
                        title: "Poster mon blanc"
                    },{
                        image: "/img/print-nouvelle.jpg",
                        title: "Poster nouvelle"
                    },{
                        image: "/img/print-uslysz.jpg",
                        title: "Poster usłysz na nowo"
                    },{
                        image: "/img/print-minimalizm.jpg",
                        title: "Poster minimalizm"
                    },
                ]
            },{
                title: "charity events",
                list: [{
                        image: "/img/print-charity-23a.jpg",
                        title: "Poster zbiórka książek 2023"
                    },{
                        image: "/img/print-charity-23b.jpg",
                        title: "Poster kiermasz książek 2023"
                    },{
                        image: "/img/print-charity-24a.jpg",
                        title: "Poster zbiórka książek 2024"
                    },{
                        image: "/img/print-charity-24b.jpg",
                        title: "Poster kiermasz książek 2024"
                    }
                ]
            },{
                title: "typography posters",
                list: [{
                        image: "/img/print-prostitutes.jpg",
                        title: "Poster prostitutes"
                    },{
                        image: "/img/print-projekt.jpg",
                        title: "Poster projekt"
                    }
                ]
            },{
                title: "flyers",
                list: [{
                        image: "/img/print-tequila1.jpg",
                        title: "Flyer tequila A"
                    },{
                        image: "/img/print-tequila2.jpg",
                        title: "Flyer tequila B"
                    },{
                        image: "/img/print-ss1.jpg",
                        title: "Flyer Secret Service A"
                    },{
                        image: "/img/print-ss2.jpg",
                        title: "Flyer Secret Service B"
                    },{
                        image: "/img/print-program1.jpg",
                        title: "Flyer Program polakpotrafi A"
                    },{
                        image: "/img/print-program2.jpg",
                        title: "Flyer Program polakpotrafi B"
                    }
                ]
            },
        ],
        tech: [{
                title: 'Languages',
                list: [{
                        title: "Javascript",
                        img: "js.png"
                    },{
                        title: "Typescript",
                        img: "typescript.png"
                    },
                ]
            },{
                title: 'Frameworks',
                list: [{
                        title: "Nuxt",
                        img: "nuxt.png"
                    },{
                        title: "Ionic",
                        img: "ionic.png"
                    },{
                        title: "Vue",
                        img: "vue.png"
                    },{
                        title: "Laravel",
                        img: "laravel.png"
                    },
                ]
            },{
                title: 'UI Libraries',
                list: [{
                        title: "Tailwind",
                        img: "tailwind.png"
                    },{
                        title: "Element plus",
                        img: "element-plus.png"
                    },{
                        title: "Bootstrap",
                        img: "bootstrap.png"
                    },
                ]
            },{
                title: 'Preprocessors',
                list: [{
                        title: "Sass",
                        img: "sass.png"
                    }
                ]
            },{
                title: 'Headless CMS',
                list: [{
                        title: "Wordpress",
                        img: "wordpress.png"
                    }
                ]
            },{
                title: 'Bundlers',
                list: [{
                        title: "Vite",
                        img: "vitejs.png"
                    },{
                        title: "Webpack",
                        img: "webpack.png"
                    }
                ]
            },
        ],
        keyVisuals: [{
                title: "Key Visual Hello.com",
                image: "/img/kv-hello.jpg"
            },{
                title: "Key Visual Bro",
                image: "/img/kv-bro.png"
            },{
                title: "Key Visual Kolekcjoner Korzyści",
                image: "/img/kv-kolekcjoner.jpg"
            },{
                title: "Key Visual Partner Sarzyna",
                image: "/img/kv-sarzyna.jpg"
            },{
                title: "Key Visual Pacyfik",
                image: "/img/kv-pacyfik.jpg"
            },{
                title: "Key Visual Piramida",
                image: "/img/kv-piramida.jpg"
            },
        ],
        uxui: [{
                title: "Giganto",
                list: [{
                        title: "UX Giganto",
                        image: "/img/ux-giganto1.jpg"
                    },{
                        title: "UX Giganto",
                        image: "/img/ux-giganto2.jpg"
                    },{
                        title: "UX Giganto",
                        image: "/img/ux-giganto4.jpg"
                    },{
                        title: "UX Giganto",
                        image: "/img/ux-giganto3.jpg"
                    },
                ]
            },{
                title: "Polakpotrafi",
                list: [{
                        title: "UX Polakpotrafi",
                        image: "/img/ux-pp1.jpg"
                    },{
                        title: "UX Polakpotrafi",
                        image: "/img/ux-pp2.jpg"
                    },{
                        title: "UX Polakpotrafi",
                        image: "/img/ux-pp3.jpg"
                    },
                ]
            },{
                title: "Interactive Systems",
                list: [{
                        title: "UX Interactive Systems",
                        image: "/img/ux-is1.jpg"
                    },{
                        title: "UX Interactive Systems",
                        image: "/img/ux-is2.jpg"
                    },{
                        title: "UX Interactive Systems",
                        image: "/img/ux-is3.jpg"
                    },{
                        title: "UX Interactive Systems",
                        image: "/img/ux-is4.jpg"
                    },
                ]
            },{
                title: "Loyalty Masters",
                list: [{
                        title: "UX Loyalty Masters",
                        image: "/img/ux-loyalty1.jpg"
                    },{
                        title: "UX Loyalty Masters",
                        image: "/img/ux-loyalty2.jpg"
                    },{
                        title: "UX Loyalty Masters",
                        image: "/img/ux-loyalty3.jpg"
                    }
                ]
            },{
                title: "Völkl Tennis",
                list: [{
                        title: "UX Volkl Tennis",
                        image: "/img/ux-volkl1.jpg"
                    },{
                        title: "UX Volkl Tennis",
                        image: "/img/ux-volkl2.jpg"
                    },{
                        title: "UX Volkl Tennis",
                        image: "/img/ux-volkl3.jpg"
                    },{
                        title: "UX Volkl Tennis",
                        image: "/img/ux-volkl4.jpg"
                    }
                ]
            },
            // {
            //     title: "Dashboards",
            //     list: [{
            //             title: "UX Dashboard",
            //             image: "/img/ux-dashboard1.jpg"
            //         },{
            //             title: "UX Dashboard",
            //             image: "/img/ux-dashboard2.jpg"
            //         },{
            //             title: "UX Dashboard",
            //             image: "/img/ux-dashboard3.jpg"
            //         }
            //     ]
            // },
        ],
    }),
    // getters
    getters: {
        getShowMenu(state){
            return state.showMenu
        }
    },
    // actions
    actions: {
        toggleNav(){
            return this.showMenu = !this.showMenu
        },
        // async fetchData() {
        //     console.log('TEST fetchData?')
        //     const url = "https://671251736c5f5ced6622ffaf.mockapi.io/api/v1/data"
        //     try {
        //         const { data, status, error } = await useFetch(url, { method: 'get' })
        //         if(data.value){
        //             this.data = data.value
        //         }
        //     } catch (error) {
        //         console.log('error', error)
        //         return error
        //     }
        // },
    },
})