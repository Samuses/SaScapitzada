// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; // astro guides integrations

// https://astro.build/config
export default defineConfig({

    site: 'https://samuses.github.io', // url site (comunica dove è il sito senza lo /)
    base: '/SaScapitzada', // base path for the site (percorso base del sito)
    trailingSlash: "ignore", // assicurati che l'URL del sito usi lo "/" finale 

    redirects:{
        '/':'/SaScapitzada/it/', // reindirizza alla pagina in italiano
    },

    integrations:[
        // aggiunge eventuali integrazioni tipo: file mdx,react ecc...
        mdx(),
    ]

});
