<template>
    <div>
        <img src="/img/PanetterieTemp.png" alt="" class="relative top-0 left-0 w-full bg-white aspect-[5/4]">
        <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
            <p class="title">MACCHINARI PROFESSIONALI PER PANETTERIE</p>
            <p class="subTitle">Fatti in Italia, i migliori per i Panettieri.</p>
            <p class="desc">Metto a tua disposizione <b>un’ampia</b> selezione di <b>forni</b> e
                <b>macchinari</b>
                dedicati alle <b>panetterie</b>, che ti aiuteranno a trasformare la tua attività in un ambiente ideale
                dove sfornare
                <b>pane, focacce</b> e <b>prodotti da forno</b> di alta qualità. Collaboro con <b>i migliori marchi del
                    settore </b>
                per offrirti soluzioni in grado di rispondere a qualsiasi esigenza produttiva.
            </p>
        </div>
        <div class="w-full px-3 py-5 bg-white text-gr flex flex-col gap-2">
            <p class="title">Affidabilità e qualità per la tua attività</p>
            <p class="desc">
                Collaboro con il <b>brand più prestigioso</b> del settore, <b>Polin.</b>
                Seleziono solo attrezzature in grado di garantire qualità, efficienza e affidabilità.Il mio obiettivo è
                fornirti nel <b>Nord Est:</b>
            </p>
            <ul class="desc list-disc max-w-[30ch] self-end">
                <li><b>Forni Ciclo termici e a vapore</b> ed <b>elettrici</b> (modulari, a tunnel, a cupola)</li>
                <li><b>Forni ventilati</b> per cotture più rapide e omogenee</li>
                <li><b>Forni a gas</b> e forni <b>elettrici</b> in diverse dimensioni e potenze</li>
                <li><b>Impastatrici</b> e altre attrezzature professionali per la preparazione dell’impasto</li>
                <li><b>Macchinari ausiliari</b> e complementi per ottimizzare il tuo spazio di lavoro</li>
            </ul>
        </div>
        <ProductShowCarousel />
    </div>
</template>

<script setup lang="ts">
import { ProductShowCarousel } from '#components';


</script>

<style scoped>
p.title {
    @apply font-nunito font-bold text-[2rem]
}

p.subTitle {
    @apply font-nunito font-semibold text-2xl
}

.desc {
    @apply font-inter text-lg
}
</style>